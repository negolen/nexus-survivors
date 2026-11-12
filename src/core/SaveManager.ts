import { I18n, LangCode } from './I18n';

export type CommanderId = 'vanguard' | 'valkyrie' | 'tesla_engineer' | 'void_phantom';
export type ArenaThemeId = 'auto' | 'cyber_nebula' | 'solar_inferno' | 'cryo_glacier' | 'emerald_matrix';

export interface MetaUpgrades {
  maxHpLevel: number;
  shieldCapacityLevel: number;
  shieldRegenLevel: number;
  armorLevel: number;
  hpRegenLevel: number;
  moveSpeedLevel: number;
  magnetLevel: number;
  critChanceLevel: number;
  damageLevel?: number;
  startingGoldLevel?: number;
  attackSpeedLevel?: number;
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

export interface SoloRunSnapshot {
  wave: number;
  commander: CommanderId;
  equipped: Array<{ archetype: string; tier: number } | null>;
  bench: Array<{ archetype: string; tier: number } | null>;
  runBuffs: {
    damageMult: number;
    attackSpeedMult: number;
    critChance: number;
    goldMult: number;
    magnetMult: number;
    moveSpeedMult: number;
  };
  player: { level: number; xp: number; xpToNext: number; maxHp: number };
  runGoldEarned: number;
  runKills: number;
  runScore: number;
  revivedThisRun: boolean;
}

export interface SaveData {
  language: LangCode;
  playerName: string;
  selectedCommander: CommanderId;
  selectedTheme: ArenaThemeId;
  unlockedCommanders: CommanderId[];
  soloRun: SoloRunSnapshot | null;
  gold: number;
  gems: number;
  techShards: number;
  highScore: number;
  highestWave: number;
  pvpTrophies: number;
  pvpRivalsEliminated: number;
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
  selectedTheme: 'auto',
  unlockedCommanders: ['vanguard', 'valkyrie'],
  soloRun: null,
  gold: 150,
  gems: 25,
  techShards: 0,
  highScore: 0,
  highestWave: 1,
  pvpTrophies: 1000,
  pvpRivalsEliminated: 0,
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
    maxHpLevel: 0,
    shieldCapacityLevel: 0,
    shieldRegenLevel: 0,
    armorLevel: 0,
    hpRegenLevel: 0,
    moveSpeedLevel: 0,
    magnetLevel: 0,
    critChanceLevel: 0,
    damageLevel: 0,
    startingGoldLevel: 0,
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

  public setArenaTheme(theme: ArenaThemeId): void {
    this.data.selectedTheme = theme;
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

  public saveSoloRun(snapshot: SoloRunSnapshot): void {
    this.data.soloRun = snapshot;
    this.save();
  }

  public clearSoloRun(): void {
    this.data.soloRun = null;
    this.save();
  }

  public hasResumableSoloRun(): boolean {
    return !!this.data.soloRun && this.data.soloRun.wave >= 2;
  }

  public recordRunStats(waveReached: number, scoreReached: number): void {
    if (waveReached > this.data.highestWave) {
      this.data.highestWave = waveReached;
    }
    if (scoreReached > this.data.highScore) {
      this.data.highScore = scoreReached;
    }
    this.save();
  }

  public getCommanderPowerLevel(): number {
    const m = this.data.meta;
    const baseSum = (m.maxHpLevel || 0) + (m.shieldCapacityLevel || 0) + (m.shieldRegenLevel || 0) + (m.armorLevel || 0) +
                    (m.hpRegenLevel || 0) + (m.moveSpeedLevel || 0) + (m.magnetLevel || 0) + (m.critChanceLevel || 0);
    return 1 + baseSum + Math.floor(this.data.techShards / 2);
  }

  public addPvpTrophies(delta: number, rivalsKilled = 0): void {
    this.data.pvpTrophies = Math.max(0, Math.floor((this.data.pvpTrophies || 1000) + delta));
    this.data.pvpRivalsEliminated = (this.data.pvpRivalsEliminated || 0) + rivalsKilled;
    this.save();
    this.scheduleNotify();
  }

  public applyPvpMatchOutcome(_rank: number, trophyDelta: number, rivalsKilled: number): void {
    this.data.pvpTrophies = Math.max(0, Math.floor((this.data.pvpTrophies || 1000) + trophyDelta));
    this.data.pvpRivalsEliminated = (this.data.pvpRivalsEliminated || 0) + rivalsKilled;
    this.save();
    this.scheduleNotify();
  }

  public applyPvpTrophyShield(lossAmount: number): void {
    if (lossAmount <= 0) return;
    this.data.pvpTrophies = Math.max(0, Math.floor((this.data.pvpTrophies || 1000) + lossAmount));
    this.save();
    this.scheduleNotify();
  }

  public addTechShards(amount: number): void {
    this.data.techShards = Math.max(0, Math.floor((this.data.techShards || 0) + amount));
    this.save();
    this.scheduleNotify();
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

  public getMaxUpgradeLevelCap(): number {
    return Math.max(1, this.data.highestWave);
  }

  public getMetaUpgradeCost(key: keyof MetaUpgrades): number {
    const lvl = this.data.meta[key] ?? 0;
    return Math.floor(100 * Math.pow(1.55, lvl));
  }

  public buyMetaUpgrade(key: keyof MetaUpgrades): boolean {
    const maxCap = this.getMaxUpgradeLevelCap();
    const current = this.data.meta[key] ?? 0;
    if (current >= maxCap) return false;
    const cost = this.getMetaUpgradeCost(key);
    if (!this.spendGold(cost)) return false;
    this.data.meta[key] = current + 1;
    this.save();
    return true;
  }

  /** Calculates the maximum levels affordable with current gold up to the Solo wave cap. */
  public getMaxAffordableMeta(key: keyof MetaUpgrades): { levels: number; cost: number; targetLevel: number } {
    const maxCap = this.getMaxUpgradeLevelCap();
    const current = this.data.meta[key] ?? 0;
    let levels = 0;
    let cost = 0;
    let goldLeft = this.data.gold;

    while (current + levels < maxCap) {
      const nextCost = Math.floor(100 * Math.pow(1.55, current + levels));
      if (goldLeft >= nextCost) {
        goldLeft -= nextCost;
        cost += nextCost;
        levels++;
      } else {
        break;
      }
    }
    return { levels, cost, targetLevel: current + levels };
  }

  /** Upgrades the meta attribute to the maximum affordable level right now. */
  public buyMaxMetaUpgrade(key: keyof MetaUpgrades): number {
    const { levels, cost } = this.getMaxAffordableMeta(key);
    if (levels <= 0) return 0;
    if (!this.spendGold(cost)) return 0;
    this.data.meta[key] = (this.data.meta[key] ?? 0) + levels;
    this.save();
    return levels;
  }

  /** Upgrades ALL 8 base character meta attributes to their maximum affordable levels! */
  public buyAllMaxMetaUpgrades(): { totalLevels: number; totalCost: number } {
    const keys: Array<keyof MetaUpgrades> = [
      'maxHpLevel',
      'shieldCapacityLevel',
      'shieldRegenLevel',
      'armorLevel',
      'hpRegenLevel',
      'moveSpeedLevel',
      'magnetLevel',
      'critChanceLevel'
    ];
    let totalLevels = 0;
    let totalCost = 0;

    let changed = true;
    while (changed) {
      changed = false;
      for (const k of keys) {
        const maxCap = this.getMaxUpgradeLevelCap();
        if ((this.data.meta[k] ?? 0) < maxCap) {
          const c = this.getMetaUpgradeCost(k);
          if (this.spendGold(c)) {
            this.data.meta[k] = (this.data.meta[k] ?? 0) + 1;
            totalLevels++;
            totalCost += c;
            changed = true;
          }
        }
      }
    }
    if (totalLevels > 0) this.save();
    return { totalLevels, totalCost };
  }

  public getDamageMultiplier(): number {
    const cmdBonus = this.data.selectedCommander === 'tesla_engineer' ? 0.25 : 0;
    const shardBonus = this.data.techShards * 0.03;
    return 1 + (this.data.meta.damageLevel ?? 0) * 0.15 + cmdBonus + shardBonus;
  }

  public getBonusMaxHp(): number {
    const cmdHp = this.data.selectedCommander === 'vanguard' ? 35 : 0;
    return (this.data.meta.maxHpLevel ?? 0) * 30 + cmdHp;
  }

  public getBonusShield(): number {
    const cmdShield = this.data.selectedCommander === 'vanguard' ? 25 : 0;
    return (this.data.meta.shieldCapacityLevel ?? 0) * 20 + cmdShield;
  }

  public getShieldRegen(): number {
    const cap = this.getBonusShield();
    if (cap <= 0) return 0;
    return 2.0 + (this.data.meta.shieldRegenLevel ?? 0) * 1.5;
  }

  public getArmor(): number {
    const cmdArmor = this.data.selectedCommander === 'vanguard' ? 3 : 0;
    return (this.data.meta.armorLevel ?? 0) * 2 + cmdArmor;
  }

  public getHpRegen(): number {
    return (this.data.meta.hpRegenLevel ?? 0) * 0.8;
  }

  public getMoveSpeedMultiplier(): number {
    const cmdSpeed = this.data.selectedCommander === 'void_phantom' ? 0.15 : 0;
    return 1 + (this.data.meta.moveSpeedLevel ?? 0) * 0.04 + cmdSpeed;
  }

  public getMagnetRadius(): number {
    return 100 + (this.data.meta.magnetLevel ?? 0) * 22;
  }

  public getCritChanceBonus(): number {
    const cmdCrit = this.data.selectedCommander === 'void_phantom' ? 0.08 : 0;
    return (this.data.meta.critChanceLevel ?? 0) * 0.025 + cmdCrit;
  }

  public getStartingWaveGold(): number {
    return 40 + (this.data.meta.startingGoldLevel ?? 0) * 25;
  }

  public getAttackSpeedMultiplier(): number {
    return 1 + (this.data.meta.attackSpeedLevel ?? 0) * 0.08;
  }

  public resetSave(): void {
    this.data = structuredClone(DEFAULT_SAVE);
    I18n.setLang('en');
    this.flushSave();
    this.scheduleNotify();
  }
}
