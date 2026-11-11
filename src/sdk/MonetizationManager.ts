import { AudioManager } from '../core/AudioManager';
import { SaveManager } from '../core/SaveManager';

export type SDKPlatform = 'Simulator' | 'Poki' | 'CrazyGames' | 'AdSense_H5';

export interface IapProduct {
  id: string;
  title: string;
  description: string;
  priceUsd: number;
  badge?: string;
}

export const IAP_CATALOG: IapProduct[] = [
  {
    id: 'starter_pack',
    title: 'Cyber Starter Bundle',
    description: '+1,500 Gold, +100 Gems & Instant Tier-3 Epic Plasma Blaster',
    priceUsd: 1.99,
    badge: 'BEST VALUE'
  },
  {
    id: 'vip_speed',
    title: 'VIP Overclock Pass',
    description: 'Permanently Unlock 2x Turbo Game Speed + +500 Gems + No Forced Interstitials',
    priceUsd: 4.99,
    badge: 'MOST POPULAR'
  },
  {
    id: 'gem_vault_small',
    title: 'Neon Gem Pouch',
    description: '+150 Cyber Gems for Legendary Crates & Instant Merges',
    priceUsd: 0.99
  },
  {
    id: 'gem_vault_mega',
    title: 'Quantum Gem Vault',
    description: '+1,000 Cyber Gems + 5,000 Bonus Gold',
    priceUsd: 7.99,
    badge: 'WHALE PACK'
  }
];

declare global {
  interface Window {
    PokiSDK?: {
      init: () => Promise<void>;
      commercialBreak: () => Promise<void>;
      rewardedBreak: () => Promise<boolean>;
      gameplayStart: () => void;
      gameplayStop: () => void;
    };
    CrazyGames?: {
      SDK?: {
        ad?: {
          requestAd: (type: 'midgame' | 'rewarded', callbacks: {
            adStarted?: () => void;
            adFinished?: () => void;
            adError?: () => void;
          }) => void;
        };
      };
    };
  }
}

export class MonetizationManager {
  private static instance: MonetizationManager;
  public activePlatform: SDKPlatform = 'Simulator';
  private overlayContainer: HTMLElement | null = null;
  private onPauseGame?: () => void;
  private onResumeGame?: () => void;

  private constructor() {
    this.detectPlatform();
  }

  public static getInstance(): MonetizationManager {
    if (!MonetizationManager.instance) {
      MonetizationManager.instance = new MonetizationManager();
    }
    return MonetizationManager.instance;
  }

  public bindEngineCallbacks(onPause: () => void, onResume: () => void): void {
    this.onPauseGame = onPause;
    this.onResumeGame = onResume;
    this.overlayContainer = document.getElementById('sdk-overlay');
  }

  private detectPlatform(): void {
    if (typeof window !== 'undefined') {
      if (window.PokiSDK) {
        this.activePlatform = 'Poki';
        window.PokiSDK.init().catch(() => {});
      } else if (window.CrazyGames?.SDK) {
        this.activePlatform = 'CrazyGames';
      } else {
        this.activePlatform = 'Simulator';
      }
    }
  }

  /**
   * Triggers a Rewarded Video Ad ($25.00 average eCPM simulated)
   */
  public async showRewardedAd(placementName: string): Promise<boolean> {
    this.onPauseGame?.();

    if (this.activePlatform === 'Poki' && window.PokiSDK) {
      try {
        const success = await window.PokiSDK.rewardedBreak();
        if (success) {
          SaveManager.getInstance().recordAdRevenue('rewarded', 25.0);
          AudioManager.getInstance().playCashRegister();
        }
        this.onResumeGame?.();
        return success;
      } catch {
        this.onResumeGame?.();
        return false;
      }
    }

    if (this.activePlatform === 'CrazyGames' && window.CrazyGames?.SDK?.ad) {
      return new Promise((resolve) => {
        window.CrazyGames!.SDK!.ad!.requestAd('rewarded', {
          adFinished: () => {
            SaveManager.getInstance().recordAdRevenue('rewarded', 25.0);
            AudioManager.getInstance().playCashRegister();
            this.onResumeGame?.();
            resolve(true);
          },
          adError: () => {
            this.onResumeGame?.();
            resolve(false);
          }
        });
      });
    }

    // Built-in Interactive Ad Simulator for Browser / Publisher QA
    return this.runSimulatedRewardedAd(placementName);
  }

  /**
   * Triggers a Mid-roll / Interstitial Ad between waves ($12.00 eCPM simulated)
   */
  public async showInterstitialAd(placementName: string): Promise<void> {
    if (SaveManager.getInstance().data.vipUnlocked) {
      // VIP players skip forced interstitials
      return;
    }

    this.onPauseGame?.();

    if (this.activePlatform === 'Poki' && window.PokiSDK) {
      await window.PokiSDK.commercialBreak();
      SaveManager.getInstance().recordAdRevenue('interstitial', 12.0);
      this.onResumeGame?.();
      return;
    }

    await this.runSimulatedInterstitialAd(placementName);
  }

  /**
   * Triggers an In-App Purchase / Stripe Checkout flow
   */
  public async purchaseProduct(productId: string): Promise<boolean> {
    const product = IAP_CATALOG.find((p) => p.id === productId);
    if (!product) return false;

    this.onPauseGame?.();
    const confirmed = await this.runSimulatedStripeCheckout(product);
    this.onResumeGame?.();

    if (confirmed) {
      SaveManager.getInstance().recordIapRevenue(product.priceUsd);
      AudioManager.getInstance().playCashRegister();
    }
    return confirmed;
  }

  private runSimulatedRewardedAd(placementName: string): Promise<boolean> {
    return new Promise((resolve) => {
      if (!this.overlayContainer) {
        this.onResumeGame?.();
        resolve(true);
        return;
      }

      let remaining = 3;
      this.overlayContainer.innerHTML = `
        <div class="sdk-modal-backdrop">
          <div class="sdk-ad-box">
            <div class="sdk-ad-header">
              <span class="sdk-badge">REWARDED VIDEO AD • eCPM $25.00</span>
              <span id="sdk-ad-timer" class="sdk-timer">Reward in ${remaining}s...</span>
            </div>
            <div class="sdk-ad-stage">
              <div class="sdk-ad-visual">
                <div class="sdk-pulse-ring"></div>
                <h3>NEXUS CLOUD SPONSOR</h3>
                <p>Placement: <strong>${placementName}</strong></p>
                <p class="sdk-sub">Simulating Poki / CrazyGames / AdSense H5 Rewarded Ad SDK Call</p>
              </div>
            </div>
            <div class="sdk-ad-footer">
              <button id="sdk-cancel-ad" class="btn-secondary">Skip (No Reward)</button>
              <button id="sdk-claim-ad" class="btn-primary" disabled>Wait ${remaining}s...</button>
            </div>
          </div>
        </div>
      `;

      const timerEl = document.getElementById('sdk-ad-timer');
      const claimBtn = document.getElementById('sdk-claim-ad') as HTMLButtonElement | null;
      const cancelBtn = document.getElementById('sdk-cancel-ad');

      const interval = window.setInterval(() => {
        remaining -= 1;
        if (remaining > 0) {
          if (timerEl) timerEl.textContent = `Reward in ${remaining}s...`;
          if (claimBtn) claimBtn.textContent = `Wait ${remaining}s...`;
        } else {
          window.clearInterval(interval);
          if (timerEl) timerEl.textContent = 'REWARD GRANTED ✓';
          if (claimBtn) {
            claimBtn.disabled = false;
            claimBtn.textContent = 'CLAIM REWARD (+Revenue)';
            claimBtn.classList.add('pulse-glow');
          }
        }
      }, 850);

      const cleanup = (result: boolean) => {
        window.clearInterval(interval);
        if (this.overlayContainer) this.overlayContainer.innerHTML = '';
        if (result) {
          SaveManager.getInstance().recordAdRevenue('rewarded', 25.0);
          AudioManager.getInstance().playCashRegister();
        }
        this.onResumeGame?.();
        resolve(result);
      };

      claimBtn?.addEventListener('click', () => cleanup(true));
      cancelBtn?.addEventListener('click', () => cleanup(false));
    });
  }

  private runSimulatedInterstitialAd(placementName: string): Promise<void> {
    return new Promise((resolve) => {
      if (!this.overlayContainer) {
        this.onResumeGame?.();
        resolve();
        return;
      }

      this.overlayContainer.innerHTML = `
        <div class="sdk-modal-backdrop">
          <div class="sdk-ad-box">
            <div class="sdk-ad-header">
              <span class="sdk-badge">COMMERCIAL BREAK • eCPM $12.00</span>
              <span class="sdk-timer">Auto-Skippable</span>
            </div>
            <div class="sdk-ad-stage">
              <div class="sdk-ad-visual">
                <h3>INTERSTITIAL AD BREAK</h3>
                <p>Trigger: <strong>${placementName}</strong></p>
                <p class="sdk-sub">Tip: Unlock VIP Pass to remove all interstitial breaks!</p>
              </div>
            </div>
            <div class="sdk-ad-footer">
              <button id="sdk-close-interstitial" class="btn-primary">Continue to Game ▶</button>
            </div>
          </div>
        </div>
      `;

      document.getElementById('sdk-close-interstitial')?.addEventListener('click', () => {
        if (this.overlayContainer) this.overlayContainer.innerHTML = '';
        SaveManager.getInstance().recordAdRevenue('interstitial', 12.0);
        AudioManager.getInstance().playCashRegister();
        this.onResumeGame?.();
        resolve();
      });
    });
  }

  private runSimulatedStripeCheckout(product: IapProduct): Promise<boolean> {
    return new Promise((resolve) => {
      if (!this.overlayContainer) {
        resolve(true);
        return;
      }

      this.overlayContainer.innerHTML = `
        <div class="sdk-modal-backdrop">
          <div class="sdk-ad-box stripe-box">
            <div class="sdk-ad-header">
              <span class="sdk-badge stripe-badge">STRIPE / WEB-IAP CHECKOUT</span>
              <span class="sdk-timer">$${product.priceUsd.toFixed(2)} USD</span>
            </div>
            <div class="sdk-ad-stage">
              <div class="sdk-ad-visual">
                <h3>${product.title}</h3>
                <p>${product.description}</p>
                <div class="stripe-card-mock">
                  <span>💳 **** **** **** 4242</span>
                  <span>EXP 12/29 • CVC 888</span>
                </div>
                <p class="sdk-sub">Instant Sandbox Checkout — Adds $${product.priceUsd.toFixed(2)} to your Simulated Revenue Counter</p>
              </div>
            </div>
            <div class="sdk-ad-footer">
              <button id="sdk-cancel-iap" class="btn-secondary">Cancel</button>
              <button id="sdk-confirm-iap" class="btn-gold">Authorize $${product.priceUsd.toFixed(2)} ✓</button>
            </div>
          </div>
        </div>
      `;

      const cleanup = (success: boolean) => {
        if (this.overlayContainer) this.overlayContainer.innerHTML = '';
        resolve(success);
      };

      document.getElementById('sdk-confirm-iap')?.addEventListener('click', () => cleanup(true));
      document.getElementById('sdk-cancel-iap')?.addEventListener('click', () => cleanup(false));
    });
  }
}
