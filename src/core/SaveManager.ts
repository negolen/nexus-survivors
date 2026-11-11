import { I18n, LangCode } from './I18n';

export type CommanderId = 'vanguard' | 'valkyrie' | 'tesla_engineer' | 'void_phantom';

export interface MetaUpgrades {
  damageLevel: number;
  maxHpLevel: number;
  startingGoldLevel: number;
  magnetLevel: number;
  attackSpeedLevel: number;
}

export interface MissionTiers {
  killsTier: number;
  mergesTier: number;
  waveTier: number;
  levelUpsTier: number;
}

export interface CrateLootResult {
  gold: number;
  gems: number;
  techShards: number;
}

export interface SaveData {
  language: LangCode;
  playerName: string;
  selectedCommander: CommanderId;
  unlockedCommanders: CommanderId[];
  gold: number;
  gems: number;
  techShards: number;
  highScore: number;
  highestWave: number;
  totalKills: number;
  totalMerges: number;
  totalLevelUps: number;
  missionTiers: MissionTiers;
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
  playerName: 'CYBER_COMMANDER',
  selectedCommander: 'vanguard',
  unlockedCommanders: ['vanguard', 'valkyrie'],
  gold: 150,
  gems: 25,
  techShards: 0,
  highScore: 0,
  highestWave: 1,
  totalKills: 0,
  totalMerges: 0,
  totalLevelUps: 0,
  missionTiers: {
    killsTier: 1,
    mergesTier: 1,
    waveTier: 1,
    levelUpsTier: 1
  },
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
  private saveTimeoutId: number | null = null;
  private notifyScheduled = false;

  private constructor() {
    this.data = this.load();
    I18n.setLang(this.data.language || 'en');

    if (typeof window !== 'undefined') {
      window.addEventListener('beforeunload', () => this.flushSave());
    }
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
      const unlocked: CommanderId[] = Array.isArray(parsed.unlockedCommanders)
        ? parsed.unlockedCommanders
        : ['vanguard', 'valkyrie'];
      if (!unlocked.includes('vanguard')) unlocked.push('vanguard');
      if (!unlocked.includes('valkyrie')) unlocked.push('valkyrie');

      return {
        ...structuredClone(DEFAULT_SAVE),
        ...parsed,
        language: parsed.language === 'tr' ? 'tr' : 'en',
        unlockedCommanders: unlocked,
        missionTiers: {
          ...DEFAULT_SAVE.missionTiers,
          ...(parsed.missionTiers || {})
        },
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
    this.scheduleNotify();
    if (this.saveTimeoutId !== null) return;
    this.saveTimeoutId = window.setTimeout(() => {
      this.saveTimeoutId = null;
      this.flushSave();
    }, 250);
  }

  public flushSave(): void {
    if (this.saveTimeoutId !== null) {
      clearTimeout(this.saveTimeoutId);
      this.saveTimeoutId = null;
    }
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.data));
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
    if (id === 'vanguard' || id === 'valkyrie') return true;
    if ((id === 'tesla_engineer' || id === 'void_phantom') && this.data.vipUnlocked) return true;
    return this.data.unlockedCommanders.includes(id);
  }

  public unlockCommander(id: CommanderId): void {
    if (!this.data.unlockedCommanders.includes(id)) {
      this.data.unlockedCommanders.push(id);
    }
    this.data.selectedCommander = id;
    this.save();
  }

  public recordKill(count = 1): void {
    this.data.totalKills += count;
    this.save();
  }

  public recordMerge(count = 1): void {
    this.data.totalMerges += count;
    this.save();
  }

  public recordLevelUp(count = 1): void {
    this.data.totalLevelUps += count;
    this.save();
  }

  public rollSupplyCrate(rollsCount: number, isPremium: boolean): CrateLootResult {
    let totalGold = 0;
    let totalGems = 0;
    let totalShards = 0;

    for (let i = 0; i < rollsCount; i++) {
      const goldRoll = isPremium
        ? 400 + Math.floor(Math.random() * 550)
        : 250 + Math.floor(Math.random() * 350);
      const gemRoll = isPremium
        ? 15 + Math.floor(Math.random() * 35)
        : 15 + Math.floor(Math.random() * 25);
      const shardRoll = isPremium
        ? 1 + Math.floor(Math.random() * 3)
        : Math.random() < 0.65
        ? 1
        : 0;

      totalGold += goldRoll;
      totalGems += gemRoll;
      totalShards += shardRoll;
    }

    this.data.gold += totalGold;
    this.data.gems += totalGems;
    this.data.techShards += totalShards;
    this.save();

    return {
      gold: totalGold,
      gems: totalGems,
      techShards: totalShards
    };
  }

  public onChange(cb: () => void): void {
    this.listeners.push(cb);
  }

  private scheduleNotify(): void {
    if (this.notifyScheduled) return;
    this.notifyScheduled = true;
    requestAnimationFrame(() => {
      this.notifyScheduled = false;
      for (const cb of this.listeners) cb();
    });
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
    const cmdBonus = this.data.selectedCommander === 'tesla_engineer' ? 0.25 : 0;
    const shardBonus = this.data.techShards * 0.03;
    return 1 + this.data.meta.damageLevel * 0.15 + cmdBonus + shardBonus;
  }

  public getBonusMaxHp(): number {
    const cmdHp = this.data.selectedCommander === 'vanguard' ? 25 : 0;
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
    this.flushSave();
    this.scheduleNotify();
  }
}
