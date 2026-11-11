import { I18n, LangCode } from './I18n';

export type CommanderId = 'vanguard' | 'tesla_engineer' | 'void_phantom';

export interface MetaUpgrades {
  damageLevel: number;
  maxHpLevel: number;
  startingGoldLevel: number;
  magnetLevel: number;
  attackSpeedLevel: number;
}

export interface SaveData {
  language: LangCode;
  selectedCommander: CommanderId;
  unlockedCommanders: CommanderId[];
  gold: number;
  gems: number;
  highScore: number;
  highestWave: number;
  vipUnlocked: boolean;
  starterPackBought: boolean;
  totalRevenueSimulated: number;
  rewardedAdsWatched: number;
  interstitialAdsWatched: number;
  iapPurchasesCount: number;
  soundEnabled: boolean;
  meta: MetaUpgrades;
}

const STORAGE_KEY = 'nexus_survivors_save_v1';

const DEFAULT_SAVE: SaveData = {
  language: 'en', // Strict English default
  selectedCommander: 'vanguard',
  unlockedCommanders: ['vanguard'],
  gold: 150,
  gems: 25,
  highScore: 0,
  highestWave: 1,
  vipUnlocked: false,
  starterPackBought: false,
  totalRevenueSimulated: 0,
  rewardedAdsWatched: 0,
  interstitialAdsWatched: 0,
  iapPurchasesCount: 0,
  soundEnabled: true,
  meta: {
    damageLevel: 0,
    maxHpLevel: 0,
    startingGoldLevel: 0,
    magnetLevel: 0,
    attackSpeedLevel: 0
  }
};

export class SaveManager {
  private static instance: SaveManager;
  public data: SaveData;
  private listeners: Array<() => void> = [];

  private constructor() {
    this.data = this.load();
    I18n.setLang(this.data.language || 'en');
  }

  public static getInstance(): SaveManager {
    if (!SaveManager.instance) {
      SaveManager.instance = new SaveManager();
    }
    return SaveManager.instance;
  }

  private load(): SaveData {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return structuredClone(DEFAULT_SAVE);
      const parsed = JSON.parse(raw);
      return {
        ...structuredClone(DEFAULT_SAVE),
        ...parsed,
        language: parsed.language === 'tr' ? 'tr' : 'en',
        unlockedCommanders: Array.isArray(parsed.unlockedCommanders)
          ? parsed.unlockedCommanders
          : ['vanguard'],
        meta: {
          ...DEFAULT_SAVE.meta,
          ...(parsed.meta || {})
        }
      };
    } catch {
      return structuredClone(DEFAULT_SAVE);
    }
  }

  public save(): void {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.data));
      this.notify();
    } catch (e) {
      console.warn('Could not persist save data:', e);
    }
  }

  public setLanguage(lang: LangCode): void {
    this.data.language = lang;
    I18n.setLang(lang);
    this.save();
  }

  public toggleLanguage(): LangCode {
    const next: LangCode = this.data.language === 'en' ? 'tr' : 'en';
    this.setLanguage(next);
    return next;
  }

  public isCommanderUnlocked(id: CommanderId): boolean {
    if (id === 'void_phantom' && this.data.vipUnlocked) return true;
    return this.data.unlockedCommanders.includes(id);
  }

  public unlockCommander(id: CommanderId): void {
    if (!this.data.unlockedCommanders.includes(id)) {
      this.data.unlockedCommanders.push(id);
    }
    this.data.selectedCommander = id;
    this.save();
  }

  public onChange(cb: () => void): void {
    this.listeners.push(cb);
  }

  private notify(): void {
    for (const cb of this.listeners) cb();
  }

  public addGold(amount: number): void {
    this.data.gold = Math.max(0, Math.floor(this.data.gold + amount));
    this.save();
  }

  public spendGold(amount: number): boolean {
    if (this.data.gold < amount) return false;
    this.data.gold -= amount;
    this.save();
    return true;
  }

  public addGems(amount: number): void {
    this.data.gems = Math.max(0, Math.floor(this.data.gems + amount));
    this.save();
  }

  public spendGems(amount: number): boolean {
    if (this.data.gems < amount) return false;
    this.data.gems -= amount;
    this.save();
    return true;
  }

  public recordAdRevenue(type: 'rewarded' | 'interstitial', cpmUsd: number): void {
    if (type === 'rewarded') {
      this.data.rewardedAdsWatched += 1;
    } else {
      this.data.interstitialAdsWatched += 1;
    }
    this.data.totalRevenueSimulated = Number((this.data.totalRevenueSimulated + cpmUsd / 1000).toFixed(4));
    this.save();
  }

  public recordIapRevenue(priceUsd: number): void {
    this.data.iapPurchasesCount += 1;
    this.data.totalRevenueSimulated = Number((this.data.totalRevenueSimulated + priceUsd).toFixed(4));
    this.save();
  }

  public getMetaUpgradeCost(key: keyof MetaUpgrades): number {
    const lvl = this.data.meta[key];
    return Math.floor(100 * Math.pow(1.55, lvl));
  }

  public buyMetaUpgrade(key: keyof MetaUpgrades): boolean {
    const cost = this.getMetaUpgradeCost(key);
    if (!this.spendGold(cost)) return false;
    this.data.meta[key] += 1;
    this.save();
    return true;
  }

  public getDamageMultiplier(): number {
    const cmdBonus = this.data.selectedCommander === 'tesla_engineer' ? 0.2 : 0;
    return 1 + this.data.meta.damageLevel * 0.15 + cmdBonus;
  }

  public getBonusMaxHp(): number {
    const cmdHp = this.data.selectedCommander === 'vanguard' ? 20 : 0;
    return this.data.meta.maxHpLevel * 30 + cmdHp;
  }

  public getStartingWaveGold(): number {
    return 40 + this.data.meta.startingGoldLevel * 25;
  }

  public getMagnetRadius(): number {
    return 100 + this.data.meta.magnetLevel * 25;
  }

  public getAttackSpeedMultiplier(): number {
    return 1 + this.data.meta.attackSpeedLevel * 0.08;
  }

  public resetSave(): void {
    this.data = structuredClone(DEFAULT_SAVE);
    I18n.setLang('en');
    this.save();
  }
}
