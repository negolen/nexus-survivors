import { AudioManager } from '../core/AudioManager';
import { I18n } from '../core/I18n';
import { CommanderId, MetaUpgrades, SaveManager } from '../core/SaveManager';
import { GameEngine, TACTICAL_CARDS_POOL, TacticalCard } from '../game/GameEngine';
import {
  TIER_COLORS,
  TIER_NAMES,
  WEAPON_BLUEPRINTS,
  WeaponArchetypeId,
  WeaponInstance
} from '../game/WeaponSystem';
import { IAP_CATALOG, MonetizationManager } from '../sdk/MonetizationManager';

interface ShopOffer {
  archetype: WeaponArchetypeId;
  tier: number;
  cost: number;
  purchased: boolean;
}

export class UIManager {
  private engine: GameEngine;
  private uiLayer: HTMLElement;
  private selectedSlot: { group: 'equipped' | 'bench'; index: number } | null = null;
  private shopOffers: ShopOffer[] = [];
  private draftedLevelCards: TacticalCard[] = [];
  private waveBonusDoubled = false;

  constructor(engine: GameEngine) {
    this.engine = engine;
    const el = document.getElementById('ui-layer');
    if (!el) throw new Error('#ui-layer not found');
    this.uiLayer = el;

    this.engine.onHudUpdate = () => this.updateTopHudValues();
    this.engine.onLevelUp = () => this.openLevelUpModal();
    this.engine.onWaveComplete = () => this.openBetweenWaveWorkshop();
    this.engine.onPlayerDeath = () => this.openDeathModal();

    SaveManager.getInstance().onChange(() => this.updateTopHudValues());

    this.renderMainMenu();
  }

  private renderTopHud(): string {
    const save = SaveManager.getInstance().data;
    const p = this.engine.player;
    const hpPct = Math.max(0, Math.min(100, (p.hp / p.maxHp) * 100));
    const xpPct = Math.max(0, Math.min(100, (p.xp / p.xpToNext) * 100));
    const isSpeed2x = this.engine.gameSpeedMultiplier === 2;
    const langLabel = save.language === 'tr' ? '🌐 TR | EN' : '🌐 EN | TR';

    return `
      <header class="top-hud">
        <div class="hud-left">
          <div class="hp-bar-wrap">
            <div id="hud-hp-fill" class="hp-bar-fill" style="width: ${hpPct}%"></div>
            <span id="hud-hp-text" class="hp-bar-label">HP ${Math.ceil(p.hp)} / ${p.maxHp}</span>
          </div>
          <div class="xp-bar-wrap" title="In-Run Tactical XP">
            <div id="hud-xp-fill" class="xp-bar-fill" style="width: ${xpPct}%"></div>
            <span id="hud-lvl-text" class="hp-bar-label">${I18n.t('lvl_label')} ${p.level}</span>
          </div>
          <div class="wave-pill">
            <span id="hud-wave-num">${I18n.t('wave_label')} ${this.engine.currentWave}</span>
            <strong id="hud-wave-timer">${Math.ceil(this.engine.waveTimer)}s</strong>
          </div>
        </div>

        <div class="hud-center">
          <div class="currency-pill gold-pill">
            <span>🪙</span>
            <strong id="hud-gold">${save.gold.toLocaleString()}</strong>
          </div>
          <div class="currency-pill gem-pill">
            <span>💎</span>
            <strong id="hud-gems">${save.gems.toLocaleString()}</strong>
          </div>
          <div class="currency-pill revenue-pill" title="Simulated Publisher Ad + IAP Revenue Tracker">
            <span>📈 REV:</span>
            <strong id="hud-revenue">$${save.totalRevenueSimulated.toFixed(2)}</strong>
          </div>
        </div>

        <div class="hud-right">
          <button id="btn-speed-toggle" class="btn-hud ${isSpeed2x ? 'active-speed' : ''}">
            ⚡ ${isSpeed2x ? I18n.t('speed_2x_on') : I18n.t('speed_1x_btn')}
          </button>
          <button id="btn-open-store" class="btn-hud btn-vip">
            💎 ${I18n.t('vip_store_btn')}
          </button>
          <button id="btn-lang-toggle" class="btn-hud" title="Switch Language (Default: English)">
            ${langLabel}
          </button>
          <button id="btn-sound-toggle" class="btn-hud">
            ${save.soundEnabled ? '🔊' : '🔇'}
          </button>
        </div>
      </header>
    `;
  }

  private bindTopHudEvents(): void {
    document.getElementById('btn-speed-toggle')?.addEventListener('click', async () => {
      AudioManager.getInstance().playClick();
      const save = SaveManager.getInstance();

      if (this.engine.gameSpeedMultiplier === 2) {
        this.engine.gameSpeedMultiplier = 1;
        this.updateTopHudValues();
        return;
      }

      if (save.data.vipUnlocked || this.engine.tempAdSpeedWave) {
        this.engine.gameSpeedMultiplier = 2;
        this.updateTopHudValues();
      } else {
        const watched = await MonetizationManager.getInstance().showRewardedAd('Unlock 2x Turbo Speed (Current Wave)');
        if (watched) {
          this.engine.tempAdSpeedWave = true;
          this.engine.gameSpeedMultiplier = 2;
          this.updateTopHudValues();
        }
      }
    });

    document.getElementById('btn-open-store')?.addEventListener('click', () => {
      AudioManager.getInstance().playClick();
      this.openStoreModal();
    });

    document.getElementById('btn-lang-toggle')?.addEventListener('click', () => {
      AudioManager.getInstance().playClick();
      SaveManager.getInstance().toggleLanguage();
      if (this.engine.state === 'MENU') this.renderMainMenu();
      else if (this.engine.state === 'SHOP') this.renderWorkshopModal();
      else if (this.engine.state === 'LEVEL_UP') this.renderLevelUpModal();
      else if (this.engine.state === 'REVIVE_PROMPT' || this.engine.state === 'GAMEOVER') this.openDeathModal();
      else {
        this.uiLayer.innerHTML = this.renderTopHud();
        this.bindTopHudEvents();
      }
    });

    document.getElementById('btn-sound-toggle')?.addEventListener('click', (e) => {
      const save = SaveManager.getInstance();
      save.data.soundEnabled = !save.data.soundEnabled;
      save.save();
      (e.currentTarget as HTMLElement).textContent = save.data.soundEnabled ? '🔊' : '🔇';
    });
  }

  public updateTopHudValues(): void {
    const save = SaveManager.getInstance().data;
    const p = this.engine.player;
    const hpFill = document.getElementById('hud-hp-fill');
    const hpText = document.getElementById('hud-hp-text');
    const xpFill = document.getElementById('hud-xp-fill');
    const lvlText = document.getElementById('hud-lvl-text');
    const waveNum = document.getElementById('hud-wave-num');
    const waveTimer = document.getElementById('hud-wave-timer');
    const goldEl = document.getElementById('hud-gold');
    const gemsEl = document.getElementById('hud-gems');
    const revEl = document.getElementById('hud-revenue');
    const speedBtn = document.getElementById('btn-speed-toggle');

    if (hpFill) hpFill.style.width = `${Math.max(0, Math.min(100, (p.hp / p.maxHp) * 100))}%`;
    if (hpText) hpText.textContent = `HP ${Math.ceil(p.hp)} / ${p.maxHp}`;
    if (xpFill) xpFill.style.width = `${Math.max(0, Math.min(100, (p.xp / p.xpToNext) * 100))}%`;
    if (lvlText) lvlText.textContent = `${I18n.t('lvl_label')} ${p.level}`;
    if (waveNum) waveNum.textContent = `${I18n.t('wave_label')} ${this.engine.currentWave}`;
    if (waveTimer) waveTimer.textContent = `${Math.ceil(this.engine.waveTimer)}s`;
    if (goldEl) goldEl.textContent = save.gold.toLocaleString();
    if (gemsEl) gemsEl.textContent = save.gems.toLocaleString();
    if (revEl) revEl.textContent = `$${save.totalRevenueSimulated.toFixed(2)}`;
    if (speedBtn) {
      const is2x = this.engine.gameSpeedMultiplier === 2;
      speedBtn.textContent = `⚡ ${is2x ? I18n.t('speed_2x_on') : I18n.t('speed_1x_btn')}`;
      speedBtn.classList.toggle('active-speed', is2x);
    }
  }

  public renderMainMenu(): void {
    const save = SaveManager.getInstance();
    const d = save.data;

    this.uiLayer.innerHTML = `
      ${this.renderTopHud()}
      <div class="modal-backdrop">
        <div class="cyber-panel main-menu-panel">
          <div class="hero-badge">${I18n.t('hero_badge')}</div>
          <h1 class="game-title">NEXUS SURVIVORS<span>${I18n.t('game_subtitle')}</span></h1>
          <p class="hero-subtitle">${I18n.t('hero_desc')}</p>

          <div class="stats-banner">
            <div><span>${I18n.t('stat_highest_wave')}</span><strong>${I18n.t('wave_label')} ${d.highestWave}</strong></div>
            <div><span>${I18n.t('stat_high_score')}</span><strong>${d.highScore.toLocaleString()}</strong></div>
            <div><span>${I18n.t('stat_ads_watched')}</span><strong>${d.rewardedAdsWatched + d.interstitialAdsWatched}</strong></div>
            <div><span>${I18n.t('stat_sim_rev')}</span><strong class="text-green">$${d.totalRevenueSimulated.toFixed(2)}</strong></div>
          </div>

          <div class="workshop-section">
            <h3>${I18n.t('commanders_title')}</h3>
            <div class="commanders-grid">
              ${this.renderCommanderCard('vanguard', '🤖', I18n.t('cmd_vanguard_name'), I18n.t('cmd_vanguard_desc'), '#0ea5e9', 0, 0)}
              ${this.renderCommanderCard('tesla_engineer', '🌩️', I18n.t('cmd_tesla_name'), I18n.t('cmd_tesla_desc'), '#a855f7', 1500, 100)}
              ${this.renderCommanderCard('void_phantom', '🥷', I18n.t('cmd_phantom_name'), I18n.t('cmd_phantom_desc'), '#f43f5e', 0, 250)}
            </div>
          </div>

          <div class="meta-upgrades-grid">
            ${this.renderMetaUpgradeCard('damageLevel', I18n.t('meta_dmg_title'), I18n.t('meta_dmg_desc'))}
            ${this.renderMetaUpgradeCard('maxHpLevel', I18n.t('meta_hp_title'), I18n.t('meta_hp_desc'))}
            ${this.renderMetaUpgradeCard('attackSpeedLevel', I18n.t('meta_spd_title'), I18n.t('meta_spd_desc'))}
            ${this.renderMetaUpgradeCard('startingGoldLevel', I18n.t('meta_gold_title'), I18n.t('meta_gold_desc'))}
          </div>

          <div class="menu-actions">
            <button id="btn-start-run" class="btn-primary btn-xl pulse-glow">${I18n.t('btn_start_run')}</button>
            <button id="btn-free-gold-ad" class="btn-ad">${I18n.t('btn_free_gold_ad')}</button>
          </div>
        </div>
      </div>
    `;

    this.bindTopHudEvents();

    document.getElementById('btn-start-run')?.addEventListener('click', () => {
      AudioManager.getInstance().playClick();
      this.uiLayer.innerHTML = this.renderTopHud();
      this.bindTopHudEvents();
      this.engine.startNewRun();
    });

    document.getElementById('btn-free-gold-ad')?.addEventListener('click', async () => {
      AudioManager.getInstance().playClick();
      const ok = await MonetizationManager.getInstance().showRewardedAd('Menu Free Gold & Gem Drop');
      if (ok) {
        save.addGold(250);
        save.addGems(10);
        this.renderMainMenu();
      }
    });

    this.uiLayer.querySelectorAll('[data-cmd-select]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const id = (btn as HTMLElement).dataset.cmdSelect as CommanderId;
        const mode = (btn as HTMLElement).dataset.cmdMode;

        if (mode === 'select') {
          save.data.selectedCommander = id;
          save.save();
          AudioManager.getInstance().playClick();
          this.renderMainMenu();
        } else if (mode === 'gold' && id === 'tesla_engineer') {
          if (save.spendGold(1500)) {
            save.unlockCommander(id);
            AudioManager.getInstance().playMerge(3);
            this.renderMainMenu();
          }
        } else if (mode === 'gems') {
          const gemCost = id === 'tesla_engineer' ? 100 : 250;
          if (save.spendGems(gemCost)) {
            save.unlockCommander(id);
            AudioManager.getInstance().playMerge(4);
            this.renderMainMenu();
          } else {
            this.openStoreModal();
          }
        }
      });
    });

    this.uiLayer.querySelectorAll('[data-meta-buy]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const key = (btn as HTMLElement).dataset.metaBuy as keyof MetaUpgrades;
        if (save.buyMetaUpgrade(key)) {
          AudioManager.getInstance().playMerge(2);
          this.renderMainMenu();
        } else {
          AudioManager.getInstance().playHit();
        }
      });
    });
  }

  private renderCommanderCard(
    id: CommanderId,
    icon: string,
    name: string,
    desc: string,
    color: string,
    goldCost: number,
    gemCost: number
  ): string {
    const save = SaveManager.getInstance();
    const unlocked = save.isCommanderUnlocked(id);
    const isSelected = save.data.selectedCommander === id;

    let actionHtml = '';
    if (unlocked) {
      actionHtml = `
        <button data-cmd-select="${id}" data-cmd-mode="select" class="${isSelected ? 'btn-gold' : 'btn-primary'}">
          ${isSelected ? I18n.t('cmd_selected') : I18n.t('cmd_select')}
        </button>
      `;
    } else {
      actionHtml = `
        <div class="cmd-unlock-btns">
          ${
            goldCost > 0
              ? `<button data-cmd-select="${id}" data-cmd-mode="gold" class="btn-buy">${I18n.t('cmd_unlock_gold')}</button>`
              : ''
          }
          <button data-cmd-select="${id}" data-cmd-mode="gems" class="btn-ad">${I18n.t('cmd_unlock_gems', { gems: gemCost })}</button>
        </div>
      `;
    }

    return `
      <div class="commander-card ${isSelected ? 'cmd-active' : ''}" style="border-color: ${isSelected ? color : 'rgba(148,163,184,0.25)'}">
        <div class="cmd-top">
          <span class="cmd-icon" style="background: ${color}22; border-color: ${color}">${icon}</span>
          <div>
            <h4>${name}</h4>
            <p>${desc}</p>
          </div>
        </div>
        ${actionHtml}
      </div>
    `;
  }

  private renderMetaUpgradeCard(key: keyof MetaUpgrades, title: string, desc: string): string {
    const save = SaveManager.getInstance();
    const lvl = save.data.meta[key];
    const cost = save.getMetaUpgradeCost(key);
    const canAfford = save.data.gold >= cost;

    return `
      <div class="meta-card">
        <div class="meta-info">
          <h4>${title} <span class="lvl-tag">Lv.${lvl}</span></h4>
          <p>${desc}</p>
        </div>
        <button data-meta-buy="${key}" class="btn-buy ${canAfford ? '' : 'disabled'}" ${canAfford ? '' : 'disabled'}>
          🪙 ${cost}
        </button>
      </div>
    `;
  }

  public openLevelUpModal(): void {
    // Pick 3 distinct cards from TACTICAL_CARDS_POOL
    const shuffled = [...TACTICAL_CARDS_POOL].sort(() => Math.random() - 0.5);
    this.draftedLevelCards = shuffled.slice(0, 3);
    this.renderLevelUpModal();
  }

  private renderLevelUpModal(): void {
    const isTr = I18n.getLang() === 'tr';

    this.uiLayer.innerHTML = `
      ${this.renderTopHud()}
      <div class="modal-backdrop">
        <div class="cyber-panel levelup-panel">
          <div class="workshop-header">
            <div>
              <h2>${I18n.t('levelup_title', { level: this.engine.player.level })}</h2>
              <p>${I18n.t('levelup_sub')}</p>
            </div>
            <button id="btn-take-all-cards-ad" class="btn-ad pulse-glow">${I18n.t('btn_take_all_3')}</button>
          </div>

          <div class="tactical-cards-grid">
            ${this.draftedLevelCards
              .map(
                (c, i) => `
              <div class="tactical-card" style="border-color: ${c.color}" data-pick-card="${i}">
                <div class="tactical-icon">${c.icon}</div>
                <h3>${isTr ? c.titleTr : c.titleEn}</h3>
                <p>${isTr ? c.descTr : c.descEn}</p>
                <button class="btn-primary">${I18n.t('btn_select_card')}</button>
              </div>
            `
              )
              .join('')}
          </div>
        </div>
      </div>
    `;

    this.bindTopHudEvents();

    this.uiLayer.querySelectorAll('[data-pick-card]').forEach((cardEl) => {
      cardEl.addEventListener('click', () => {
        const idx = Number((cardEl as HTMLElement).dataset.pickCard);
        const chosen = this.draftedLevelCards[idx];
        if (chosen) {
          AudioManager.getInstance().playClick();
          this.engine.applyTacticalCard(chosen.id);
          this.uiLayer.innerHTML = this.renderTopHud();
          this.bindTopHudEvents();
          this.engine.state = 'PLAYING';
        }
      });
    });

    document.getElementById('btn-take-all-cards-ad')?.addEventListener('click', async () => {
      AudioManager.getInstance().playClick();
      const ok = await MonetizationManager.getInstance().showRewardedAd('Take All 3 Level-Up Tactical Cards');
      if (ok) {
        for (const c of this.draftedLevelCards) {
          this.engine.applyTacticalCard(c.id);
        }
        this.uiLayer.innerHTML = this.renderTopHud();
        this.bindTopHudEvents();
        this.engine.state = 'PLAYING';
      }
    });
  }

  public openBetweenWaveWorkshop(): void {
    this.selectedSlot = null;
    this.waveBonusDoubled = false;
    this.rollShopOffers();
    this.renderWorkshopModal();
  }

  private rollShopOffers(): void {
    const keys = Object.keys(WEAPON_BLUEPRINTS) as WeaponArchetypeId[];
    this.shopOffers = [];
    for (let i = 0; i < 3; i++) {
      const arch = keys[Math.floor(Math.random() * keys.length)];
      const bp = WEAPON_BLUEPRINTS[arch];
      const tierRoll = this.engine.currentWave >= 4 && Math.random() < 0.3 ? 2 : 1;
      const cost = Math.round((bp.baseCost + this.engine.currentWave * 6) * Math.pow(2.0, tierRoll - 1));
      this.shopOffers.push({
        archetype: arch,
        tier: tierRoll,
        cost,
        purchased: false
      });
    }
  }

  private renderWorkshopModal(): void {
    const save = SaveManager.getInstance();
    const dmgMult = save.getDamageMultiplier() * (1 + this.engine.runBuffs.damageMult);

    const renderSlot = (w: WeaponInstance | null, group: 'equipped' | 'bench', idx: number) => {
      const isSelected = this.selectedSlot?.group === group && this.selectedSlot?.index === idx;
      if (!w) {
        return `
          <div class="weapon-slot empty-slot ${isSelected ? 'selected-slot' : ''}" data-slot-group="${group}" data-slot-idx="${idx}">
            <span class="slot-placeholder">${group === 'equipped' ? 'EQUIP SLOT' : 'BENCH'}</span>
          </div>
        `;
      }
      const bp = WEAPON_BLUEPRINTS[w.archetype];
      const tierColor = TIER_COLORS[w.tier - 1];
      const dmg = Math.round(bp.baseDamage * Math.pow(2.15, w.tier - 1) * dmgMult);

      return `
        <div class="weapon-slot filled-slot ${isSelected ? 'selected-slot' : ''}"
             style="border-color: ${tierColor}; box-shadow: 0 0 12px ${tierColor}33"
             data-slot-group="${group}" data-slot-idx="${idx}">
          <div class="slot-tier-badge" style="background: ${tierColor}">T${w.tier} ${TIER_NAMES[w.tier - 1]}</div>
          <div class="slot-icon">${bp.icon}</div>
          <div class="slot-name">${bp.name}</div>
          <div class="slot-dmg">⚔️ ${dmg} DMG</div>
          <button class="btn-sell-slot" data-sell-group="${group}" data-sell-idx="${idx}" title="Sell Weapon">🪙 Sell</button>
        </div>
      `;
    };

    this.uiLayer.innerHTML = `
      ${this.renderTopHud()}
      <div class="modal-backdrop">
        <div class="cyber-panel workshop-panel">
          <div class="workshop-header">
            <div>
              <h2>${I18n.t('workshop_title', { wave: this.engine.currentWave })}</h2>
              <p>${I18n.t('workshop_sub')}</p>
            </div>
            <div class="workshop-header-btns">
              <button id="btn-auto-merge" class="btn-gold">${I18n.t('btn_auto_merge')}</button>
              ${
                !this.waveBonusDoubled
                  ? `<button id="btn-double-wave-ad" class="btn-ad">${I18n.t('btn_double_wave_ad', { gold: this.engine.waveGoldEarned })}</button>`
                  : `<span class="badge-claimed">${I18n.t('badge_bonus_claimed')}</span>`
              }
            </div>
          </div>

          <div class="workshop-section">
            <h3>${I18n.t('active_slots_title')}</h3>
            <div class="slots-grid">
              ${this.engine.weapons.equipped.map((w, i) => renderSlot(w, 'equipped', i)).join('')}
            </div>
          </div>

          <div class="workshop-section">
            <h3>${I18n.t('bench_slots_title')}</h3>
            <div class="slots-grid">
              ${this.engine.weapons.bench.map((w, i) => renderSlot(w, 'bench', i)).join('')}
            </div>
          </div>

          <div class="workshop-section shop-offers-section">
            <div class="shop-bar-header">
              <h3>${I18n.t('armory_title')}</h3>
              <div class="shop-reroll-btns">
                <button id="btn-reroll-gold" class="btn-secondary">${I18n.t('btn_reroll_gold')}</button>
                <button id="btn-reroll-ad" class="btn-ad">${I18n.t('btn_reroll_ad')}</button>
              </div>
            </div>
            <div class="shop-offers-grid">
              ${this.shopOffers
                .map((offer, idx) => {
                  const bp = WEAPON_BLUEPRINTS[offer.archetype];
                  const tColor = TIER_COLORS[offer.tier - 1];
                  const canBuy = !offer.purchased && save.data.gold >= offer.cost && this.engine.weapons.hasFreeSlot();
                  return `
                    <div class="shop-offer-card ${offer.purchased ? 'sold-out' : ''}" style="border-color: ${tColor}">
                      <div class="slot-tier-badge" style="background: ${tColor}">T${offer.tier} ${TIER_NAMES[offer.tier - 1]}</div>
                      <div class="offer-main">
                        <span class="offer-icon">${bp.icon}</span>
                        <div>
                          <h4>${bp.name}</h4>
                          <p>${bp.description}</p>
                        </div>
                      </div>
                      <button data-buy-offer="${idx}" class="btn-primary ${canBuy ? '' : 'disabled'}" ${canBuy ? '' : 'disabled'}>
                        ${offer.purchased ? 'PURCHASED ✓' : `BUY • 🪙 ${offer.cost}`}
                      </button>
                    </div>
                  `;
                })
                .join('')}
            </div>
          </div>

          <div class="workshop-footer">
            <button id="btn-Menu-return" class="btn-secondary">${I18n.t('btn_main_menu')}</button>
            <button id="btn-next-wave" class="btn-primary btn-xl pulse-glow">${I18n.t('btn_next_wave', { wave: this.engine.currentWave + 1 })}</button>
          </div>
        </div>
      </div>
    `;

    this.bindTopHudEvents();
    this.bindWorkshopEvents();
  }

  private bindWorkshopEvents(): void {
    const save = SaveManager.getInstance();

    this.uiLayer.querySelectorAll('[data-slot-group]').forEach((el) => {
      el.addEventListener('click', (e) => {
        if ((e.target as HTMLElement).hasAttribute('data-sell-group')) return;

        const group = (el as HTMLElement).dataset.slotGroup as 'equipped' | 'bench';
        const index = Number((el as HTMLElement).dataset.slotIdx);

        if (!this.selectedSlot) {
          if (
            (group === 'equipped' && this.engine.weapons.equipped[index]) ||
            (group === 'bench' && this.engine.weapons.bench[index])
          ) {
            this.selectedSlot = { group, index };
            AudioManager.getInstance().playClick();
            this.renderWorkshopModal();
          }
        } else {
          this.engine.weapons.interactSlots(this.selectedSlot.group, this.selectedSlot.index, group, index);
          this.selectedSlot = null;
          this.renderWorkshopModal();
        }
      });
    });

    this.uiLayer.querySelectorAll('[data-sell-group]').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const group = (btn as HTMLElement).dataset.sellGroup as 'equipped' | 'bench';
        const idx = Number((btn as HTMLElement).dataset.sellIdx);
        const refund = this.engine.weapons.sellWeapon(group, idx);
        if (refund > 0) {
          save.addGold(refund);
          this.renderWorkshopModal();
        }
      });
    });

    document.getElementById('btn-auto-merge')?.addEventListener('click', () => {
      this.engine.weapons.autoMergeAll();
      this.renderWorkshopModal();
    });

    document.getElementById('btn-double-wave-ad')?.addEventListener('click', async () => {
      const ok = await MonetizationManager.getInstance().showRewardedAd('2x Wave Clear Gold Bonus');
      if (ok && !this.waveBonusDoubled) {
        this.waveBonusDoubled = true;
        save.addGold(this.engine.waveGoldEarned);
        this.renderWorkshopModal();
      }
    });

    this.uiLayer.querySelectorAll('[data-buy-offer]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const idx = Number((btn as HTMLElement).dataset.buyOffer);
        const offer = this.shopOffers[idx];
        if (!offer || offer.purchased) return;
        if (!this.engine.weapons.hasFreeSlot()) return;

        if (save.spendGold(offer.cost)) {
          offer.purchased = true;
          const wpn = this.engine.weapons.createWeapon(offer.archetype, offer.tier);
          this.engine.weapons.addWeaponToAvailableSlot(wpn);
          AudioManager.getInstance().playCoin();
          this.renderWorkshopModal();
        }
      });
    });

    document.getElementById('btn-reroll-gold')?.addEventListener('click', () => {
      if (save.spendGold(25)) {
        AudioManager.getInstance().playClick();
        this.rollShopOffers();
        this.renderWorkshopModal();
      }
    });

    document.getElementById('btn-reroll-ad')?.addEventListener('click', async () => {
      const ok = await MonetizationManager.getInstance().showRewardedAd('Free Armory Reroll + High Tier Crate');
      if (ok) {
        this.rollShopOffers();
        if (this.shopOffers[1]) {
          this.shopOffers[1].tier = Math.min(4, this.shopOffers[1].tier + 1);
        }
        this.renderWorkshopModal();
      }
    });

    document.getElementById('btn-Menu-return')?.addEventListener('click', () => {
      this.engine.state = 'MENU';
      this.renderMainMenu();
    });

    document.getElementById('btn-next-wave')?.addEventListener('click', async () => {
      AudioManager.getInstance().playClick();
      if (this.engine.currentWave % 3 === 0) {
        await MonetizationManager.getInstance().showInterstitialAd(
          `Between Wave ${this.engine.currentWave} & ${this.engine.currentWave + 1}`
        );
      }
      this.uiLayer.innerHTML = this.renderTopHud();
      this.bindTopHudEvents();
      this.engine.startWave(this.engine.currentWave + 1);
    });
  }

  public openDeathModal(): void {
    const save = SaveManager.getInstance();
    const canRevive = this.engine.state === 'REVIVE_PROMPT';
    const bonusGold = Math.max(100, Math.floor(this.engine.runGoldEarned * 0.5));

    this.uiLayer.innerHTML = `
      ${this.renderTopHud()}
      <div class="modal-backdrop">
        <div class="cyber-panel death-panel">
          <h2 class="death-title">${canRevive ? I18n.t('death_revive_title') : I18n.t('death_over_title')}</h2>
          <p>${I18n.t('death_summary', { wave: this.engine.currentWave, kills: this.engine.runKills })}</p>

          <div class="stats-banner">
            <div><span>${I18n.t('wave_label')}</span><strong>${this.engine.currentWave}</strong></div>
            <div><span>GOLD</span><strong>🪙 ${this.engine.runGoldEarned}</strong></div>
            <div><span>SCORE</span><strong>${this.engine.runScore.toLocaleString()}</strong></div>
          </div>

          <div class="death-actions">
            ${
              canRevive
                ? `<button id="btn-revive-ad" class="btn-ad btn-xl pulse-glow">${I18n.t('btn_revive_ad')}</button>`
                : ''
            }
            <button id="btn-claim-2x-end" class="btn-gold">${I18n.t('btn_claim_end_ad', { gold: bonusGold })}</button>
            <button id="btn-return-menu" class="btn-secondary">${I18n.t('btn_return_hub')}</button>
          </div>
        </div>
      </div>
    `;

    this.bindTopHudEvents();

    document.getElementById('btn-revive-ad')?.addEventListener('click', async () => {
      const ok = await MonetizationManager.getInstance().showRewardedAd('Emergency Revive + Tactical Nuke');
      if (ok) {
        this.uiLayer.innerHTML = this.renderTopHud();
        this.bindTopHudEvents();
        this.engine.revivePlayerWithNuke();
      }
    });

    document.getElementById('btn-claim-2x-end')?.addEventListener('click', async () => {
      const ok = await MonetizationManager.getInstance().showRewardedAd('End-of-Run Bonus Gold Multiplier');
      if (ok) {
        save.addGold(bonusGold);
      }
      this.engine.state = 'MENU';
      this.renderMainMenu();
    });

    document.getElementById('btn-return-menu')?.addEventListener('click', () => {
      this.engine.state = 'MENU';
      this.renderMainMenu();
    });
  }

  public openStoreModal(): void {
    const save = SaveManager.getInstance();
    const prevState = this.engine.state;
    this.engine.setSdkPause(true);

    const modalEl = document.createElement('div');
    modalEl.id = 'vip-store-modal';
    modalEl.className = 'modal-backdrop';
    modalEl.innerHTML = `
      <div class="cyber-panel store-panel">
        <div class="workshop-header">
          <div>
            <h2>💎 NEXUS CYBER STORE & IAP SANDBOX</h2>
            <p>Test high-converting In-App Purchases (Stripe/Portal SDK) and Gem Crates. All transactions increment your Simulated Revenue counter!</p>
          </div>
          <button id="btn-close-store" class="btn-secondary">✕ Close</button>
        </div>

        <div class="iap-grid">
          ${IAP_CATALOG.map((item) => {
            const isOwned =
              (item.id === 'vip_speed' && save.data.vipUnlocked) ||
              (item.id === 'starter_pack' && save.data.starterPackBought);

            return `
              <div class="iap-card">
                ${item.badge ? `<span class="iap-badge">${item.badge}</span>` : ''}
                <h3>${item.title}</h3>
                <p>${item.description}</p>
                <button data-iap-id="${item.id}" class="btn-gold ${isOwned ? 'disabled' : ''}" ${isOwned ? 'disabled' : ''}>
                  ${isOwned ? 'UNLOCKED ✓' : `BUY $${item.priceUsd.toFixed(2)}`}
                </button>
              </div>
            `;
          }).join('')}
        </div>

        <div class="gem-exchange-bar">
          <div>
            <h4>🎁 LEGENDARY GEM EXCHANGE</h4>
            <p>Spend 50 💎 Gems to receive +1,000 Gold instantly</p>
          </div>
          <button id="btn-spend-gems" class="btn-primary">Spend 50 💎 → +1,000 🪙</button>
        </div>
      </div>
    `;

    this.uiLayer.appendChild(modalEl);

    const closeStore = () => {
      modalEl.remove();
      this.engine.setSdkPause(false);
      if (prevState === 'MENU') this.renderMainMenu();
      else if (prevState === 'SHOP') this.renderWorkshopModal();
      else if (prevState === 'LEVEL_UP') this.renderLevelUpModal();
      else this.updateTopHudValues();
    };

    document.getElementById('btn-close-store')?.addEventListener('click', closeStore);

    modalEl.querySelectorAll('[data-iap-id]').forEach((btn) => {
      btn.addEventListener('click', async () => {
        const id = (btn as HTMLElement).dataset.iapId!;
        const ok = await MonetizationManager.getInstance().purchaseProduct(id);
        if (ok) {
          if (id === 'starter_pack') {
            save.data.starterPackBought = true;
            save.addGold(1500);
            save.addGems(100);
            this.engine.weapons.addWeaponToAvailableSlot(this.engine.weapons.createWeapon('plasma', 3));
          } else if (id === 'vip_speed') {
            save.data.vipUnlocked = true;
            save.unlockCommander('void_phantom');
            save.addGems(500);
            this.engine.gameSpeedMultiplier = 2;
          } else if (id === 'gem_vault_small') {
            save.addGems(150);
          } else if (id === 'gem_vault_mega') {
            save.addGems(1000);
            save.addGold(5000);
          }
          save.save();
          closeStore();
        }
      });
    });

    document.getElementById('btn-spend-gems')?.addEventListener('click', () => {
      if (save.spendGems(50)) {
        save.addGold(1000);
        AudioManager.getInstance().playCashRegister();
        this.updateTopHudValues();
      }
    });
  }
}
