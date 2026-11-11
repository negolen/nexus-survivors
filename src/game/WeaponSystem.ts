import { AudioManager } from '../core/AudioManager';
import { SaveManager } from '../core/SaveManager';

export type WeaponArchetypeId = 'plasma' | 'tesla' | 'frost' | 'sawblade' | 'missile';

export interface WeaponInstance {
  uid: string;
  archetype: WeaponArchetypeId;
  tier: number; // 1 (Common) to 5 (Legendary)
  cooldownTimer: number;
  orbitAngle: number;
}

export interface WeaponBlueprint {
  id: WeaponArchetypeId;
  name: string;
  icon: string;
  description: string;
  baseDamage: number;
  baseCooldown: number; // seconds
  range: number;
  baseCost: number;
  color: string;
}

export const TIER_NAMES = [
  'Common',
  'Uncommon',
  'Rare',
  'Epic',
  'Legendary',
  'Mythic',
  'Celestial',
  'Immortal',
  'Transcendent',
  'Omega'
];
export const TIER_COLORS = [
  '#94a3b8',
  '#22c55e',
  '#3b82f6',
  '#a855f7',
  '#f59e0b',
  '#ef4444',
  '#06b6d4',
  '#ec4899',
  '#fde047',
  '#ffffff'
];

export function getTierName(tier: number): string {
  return TIER_NAMES[Math.min(TIER_NAMES.length - 1, Math.max(0, tier - 1))] || `Tier ${tier}`;
}

export function getTierColor(tier: number): string {
  return TIER_COLORS[Math.min(TIER_COLORS.length - 1, Math.max(0, tier - 1))] || '#f59e0b';
}

export const WEAPON_BLUEPRINTS: Record<WeaponArchetypeId, WeaponBlueprint> = {
  plasma: {
    id: 'plasma',
    name: 'Plasma Blaster',
    icon: '⚡',
    description: 'Rapid-fire high-velocity energy bolts at the nearest target.',
    baseDamage: 18,
    baseCooldown: 0.48,
    range: 330,
    baseCost: 25,
    color: '#38bdf8'
  },
  tesla: {
    id: 'tesla',
    name: 'Tesla Arc Coil',
    icon: '🌩️',
    description: 'Chain lightning that arcs across multiple nearby enemies.',
    baseDamage: 24,
    baseCooldown: 0.85,
    range: 280,
    baseCost: 35,
    color: '#c084fc'
  },
  frost: {
    id: 'frost',
    name: 'Cryo Nova Emitter',
    icon: '❄️',
    description: 'Emits freezing shockwaves that damage and slow enemies by 50%.',
    baseDamage: 20,
    baseCooldown: 1.35,
    range: 195,
    baseCost: 35,
    color: '#67e8f9'
  },
  sawblade: {
    id: 'sawblade',
    name: 'Kinetic Ripper',
    icon: '⚙️',
    description: 'Fires piercing cyber-sawblades that slice through lines of foes.',
    baseDamage: 30,
    baseCooldown: 0.9,
    range: 350,
    baseCost: 40,
    color: '#f43f5e'
  },
  missile: {
    id: 'missile',
    name: 'Hellfire Launcher',
    icon: '🚀',
    description: 'Launches explosive splash-damage rockets with heavy impact.',
    baseDamage: 48,
    baseCooldown: 1.4,
    range: 400,
    baseCost: 50,
    color: '#fb923c'
  }
};

export class WeaponSystem {
  public static readonly MAX_EQUIPPED = 6;
  public static readonly MAX_BENCH = 6;
  public equipped: Array<WeaponInstance | null> = [null, null, null, null, null, null];
  public bench: Array<WeaponInstance | null> = [null, null, null, null, null, null];
  private uidCounter = 1;

  constructor() {
    this.resetForNewRun();
  }

  public resetForNewRun(): void {
    this.equipped = [null, null, null, null, null, null];
    this.bench = [null, null, null, null, null, null];
    // Start player with two Tier-1 Plasma Blasters so they can immediately fight or merge!
    this.equipped[0] = this.createWeapon('plasma', 1);
    this.equipped[1] = this.createWeapon('plasma', 1);
  }

  public static getMaxAllowedTier(): number {
    return Math.max(1, SaveManager.getInstance().data.highestWave);
  }

  public createWeapon(archetype: WeaponArchetypeId, tier = 1): WeaponInstance {
    const maxTier = WeaponSystem.getMaxAllowedTier();
    return {
      uid: `wpn_${this.uidCounter++}_${Date.now()}`,
      archetype,
      tier: Math.max(1, Math.min(maxTier, tier)),
      cooldownTimer: 0,
      orbitAngle: 0
    };
  }

  public static getDamage(weapon: WeaponInstance, globalDamageMult: number): number {
    const bp = WEAPON_BLUEPRINTS[weapon.archetype];
    const tierMult = Math.pow(2.15, weapon.tier - 1);
    return Math.round(bp.baseDamage * tierMult * globalDamageMult);
  }

  public static getCooldown(weapon: WeaponInstance, attackSpeedMult: number): number {
    const bp = WEAPON_BLUEPRINTS[weapon.archetype];
    const tierSpeedBoost = 1 + (weapon.tier - 1) * 0.12;
    return bp.baseCooldown / (tierSpeedBoost * attackSpeedMult);
  }

  public addWeaponToAvailableSlot(weapon: WeaponInstance): boolean {
    for (let i = 0; i < WeaponSystem.MAX_EQUIPPED; i++) {
      if (!this.equipped[i]) {
        this.equipped[i] = weapon;
        return true;
      }
    }
    for (let i = 0; i < WeaponSystem.MAX_BENCH; i++) {
      if (!this.bench[i]) {
        this.bench[i] = weapon;
        return true;
      }
    }
    return false;
  }

  public hasFreeSlot(): boolean {
    return this.equipped.some((s) => s === null) || this.bench.some((s) => s === null);
  }

  /**
   * Attempts to merge or swap two slots across equipped and bench arrays.
   */
  public interactSlots(
    fromGroup: 'equipped' | 'bench',
    fromIndex: number,
    toGroup: 'equipped' | 'bench',
    toIndex: number
  ): { action: 'merged' | 'swapped' | 'none'; newTier?: number } {
    if (fromGroup === toGroup && fromIndex === toIndex) {
      return { action: 'none' };
    }

    const sourceList = fromGroup === 'equipped' ? this.equipped : this.bench;
    const targetList = toGroup === 'equipped' ? this.equipped : this.bench;

    const itemA = sourceList[fromIndex];
    const itemB = targetList[toIndex];

    if (!itemA) return { action: 'none' };

    const maxTier = WeaponSystem.getMaxAllowedTier();
    // Check if identical archetype & tier (< maxTier based on Highest Solo Wave) -> MERGE!
    if (itemB && itemA.archetype === itemB.archetype && itemA.tier === itemB.tier && itemA.tier < maxTier) {
      const upgraded = this.createWeapon(itemA.archetype, itemA.tier + 1);
      targetList[toIndex] = upgraded;
      sourceList[fromIndex] = null;
      SaveManager.getInstance().recordMerge(1);
      AudioManager.getInstance().playMerge(upgraded.tier);
      return { action: 'merged', newTier: upgraded.tier };
    }

    // Otherwise swap
    targetList[toIndex] = itemA;
    sourceList[fromIndex] = itemB;
    AudioManager.getInstance().playClick();
    return { action: 'swapped' };
  }

  /**
   * Automatically merges all matching pairs across Equipped + Bench slots.
   */
  public autoMergeAll(): number {
    let mergesCount = 0;
    let foundMerge = true;

    while (foundMerge) {
      foundMerge = false;
      const allSlots: Array<{ group: 'equipped' | 'bench'; index: number; item: WeaponInstance | null }> = [];

      this.equipped.forEach((item, index) => allSlots.push({ group: 'equipped', index, item }));
      this.bench.forEach((item, index) => allSlots.push({ group: 'bench', index, item }));

      const maxTier = WeaponSystem.getMaxAllowedTier();
      for (let i = 0; i < allSlots.length; i++) {
        const a = allSlots[i];
        if (!a.item || a.item.tier >= maxTier) continue;

        for (let j = i + 1; j < allSlots.length; j++) {
          const b = allSlots[j];
          if (!b.item) continue;

          if (a.item.archetype === b.item.archetype && a.item.tier === b.item.tier) {
            this.interactSlots(b.group, b.index, a.group, a.index);
            mergesCount++;
            foundMerge = true;
            break;
          }
        }
        if (foundMerge) break;
      }
    }

    // Fill empty equipped slots from bench automatically
    for (let i = 0; i < WeaponSystem.MAX_EQUIPPED; i++) {
      if (!this.equipped[i]) {
        const benchIdx = this.bench.findIndex((b) => b !== null);
        if (benchIdx !== -1) {
          this.equipped[i] = this.bench[benchIdx];
          this.bench[benchIdx] = null;
        }
      }
    }

    return mergesCount;
  }

  public sellWeapon(group: 'equipped' | 'bench', index: number): number {
    const list = group === 'equipped' ? this.equipped : this.bench;
    const w = list[index];
    if (!w) return 0;

    // Don't allow selling the player's very last weapon
    let totalWeapons = 0;
    for (let i = 0; i < this.equipped.length; i++) if (this.equipped[i] !== null) totalWeapons++;
    for (let i = 0; i < this.bench.length; i++) if (this.bench[i] !== null) totalWeapons++;
    if (totalWeapons <= 1) return 0;

    const bp = WEAPON_BLUEPRINTS[w.archetype];
    const refund = Math.floor(bp.baseCost * Math.pow(1.8, w.tier - 1) * 0.65);
    list[index] = null;
    AudioManager.getInstance().playCoin();
    return refund;
  }
}
