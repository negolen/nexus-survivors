import { AudioManager } from '../core/AudioManager';
import { SaveManager } from '../core/SaveManager';
import {
  TIER_COLORS,
  WEAPON_BLUEPRINTS,
  WeaponInstance,
  WeaponSystem
} from './WeaponSystem';

export type EnemyType = 'swarmer' | 'speedster' | 'charger' | 'tank' | 'boss';

export interface Enemy {
  id: number;
  type: EnemyType;
  x: number;
  y: number;
  radius: number;
  hp: number;
  maxHp: number;
  speed: number;
  damage: number;
  color: string;
  goldValue: number;
  slowTimer: number;
  hitFlash: number;
}

export interface Projectile {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  damage: number;
  color: string;
  pierce: number;
  splashRadius: number;
  life: number;
  isSawblade?: boolean;
  rotation?: number;
  hitEnemyIds: Set<number>;
}

export interface LightningBolt {
  points: Array<{ x: number; y: number }>;
  color: string;
  alpha: number;
}

export interface FrostRing {
  x: number;
  y: number;
  currentRadius: number;
  maxRadius: number;
  color: string;
  alpha: number;
}

export interface LootDrop {
  x: number;
  y: number;
  vx: number;
  vy: number;
  value: number;
  xpValue: number;
  type: 'gold' | 'gem' | 'heal';
  radius: number;
}

export interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  alpha: number;
  decay: number;
}

export interface FloatingText {
  x: number;
  y: number;
  text: string;
  color: string;
  alpha: number;
  vy: number;
  scale: number;
}

export interface TacticalCard {
  id: string;
  icon: string;
  titleEn: string;
  titleTr: string;
  descEn: string;
  descTr: string;
  color: string;
}

export const TACTICAL_CARDS_POOL: TacticalCard[] = [
  {
    id: 'overclock',
    icon: '⚡',
    titleEn: 'Overclocked Barrels',
    titleTr: 'Aşırtılmış Namlular',
    descEn: '+20% Attack Speed for all orbital weapons this run',
    descTr: 'Bu tur tüm yörünge silahları için +%20 Saldırı Hızı',
    color: '#38bdf8'
  },
  {
    id: 'crit_matrix',
    icon: '🎯',
    titleEn: 'Critical Matrix',
    titleTr: 'Kritik Matris',
    descEn: '+15% Critical Hit Chance (2x Damage) & +10% Base Damage',
    descTr: '+%15 Kritik Vuruş Şansı (2x Hasar) & +%10 Temel Hasar',
    color: '#f43f5e'
  },
  {
    id: 'nanite_hull',
    icon: '🛡️',
    titleEn: 'Nanite Hull Plating',
    titleTr: 'Nanit Zırh Kaplaması',
    descEn: '+40 Max HP & Immediately Restore 50 HP',
    descTr: '+40 Maksimum Can & Anında 50 Can Yenileme',
    color: '#22c55e'
  },
  {
    id: 'scrap_harvester',
    icon: '🪙',
    titleEn: 'Scrap Harvester',
    titleTr: 'Hurda Toplayıcı',
    descEn: '+30% Gold Dropped from Enemies + Instant +80 Gold',
    descTr: 'Düşmanlardan +%30 Daha Fazla Altın + Anında +80 Altın',
    color: '#facc15'
  },
  {
    id: 'grav_magnet',
    icon: '🧲',
    titleEn: 'Graviton Magnet',
    titleTr: 'Graviton Mıknatısı',
    descEn: '+50% Loot Pickup Radius & +12% Move Speed',
    descTr: '+%50 Ganimet Çekim Alanı & +%12 Hareket Hızı',
    color: '#a855f7'
  },
  {
    id: 'plasma_core',
    icon: '🔥',
    titleEn: 'Superheated Core',
    titleTr: 'Aşırı Isınmış Çekirdek',
    descEn: '+25% All Weapon Damage this run',
    descTr: 'Bu turda tüm silahlar için +%25 Hasar Bonusu',
    color: '#fb923c'
  }
];

export type GameState = 'MENU' | 'PLAYING' | 'LEVEL_UP' | 'SHOP' | 'REVIVE_PROMPT' | 'GAMEOVER';

export class GameEngine {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  public weapons: WeaponSystem;
  public state: GameState = 'MENU';

  // World & Camera
  public readonly worldSize = 2200;
  public player = {
    x: 1100,
    y: 1100,
    radius: 20,
    hp: 100,
    maxHp: 100,
    speed: 245,
    invulnTimer: 0,
    angle: 0,
    level: 1,
    xp: 0,
    xpToNext: 50
  };

  // In-Run Roguelite Buffs from Tactical Cards & Commander
  public runBuffs = {
    damageMult: 0,
    attackSpeedMult: 0,
    critChance: 0,
    goldMult: 0,
    magnetMult: 0,
    moveSpeedMult: 0
  };

  // Wave & Run metrics
  public currentWave = 1;
  public waveTimer = 25;
  public waveDuration = 25;
  public runGoldEarned = 0;
  public waveGoldEarned = 0;
  public runKills = 0;
  public runScore = 0;
  public revivedThisRun = false;

  // Game Speed (1x or 2x Turbo)
  public gameSpeedMultiplier = 1;
  public tempAdSpeedWave = false;

  // Entities
  private enemies: Enemy[] = [];
  private projectiles: Projectile[] = [];
  private lightningBolts: LightningBolt[] = [];
  private frostRings: FrostRing[] = [];
  private lootDrops: LootDrop[] = [];
  private particles: Particle[] = [];
  private floatingTexts: FloatingText[] = [];

  private spawnTimer = 0;
  private enemyIdCounter = 1;
  private screenShake = 0;
  private isPausedBySdk = false;

  // Input State
  private keys: Set<string> = new Set();
  private pointerActive = false;
  private pointerScreenX = 0;
  private pointerScreenY = 0;

  // Callbacks to UI
  public onHudUpdate?: () => void;
  public onLevelUp?: () => void;
  public onWaveComplete?: () => void;
  public onPlayerDeath?: () => void;

  private lastFrameTime = performance.now();

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    const context = canvas.getContext('2d');
    if (!context) throw new Error('Canvas 2D context not supported');
    this.ctx = context;
    this.weapons = new WeaponSystem();

    this.handleResize();
    window.addEventListener('resize', () => this.handleResize());
    this.bindInputs();
    requestAnimationFrame((t) => this.loop(t));
  }

  private handleResize(): void {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  private bindInputs(): void {
    window.addEventListener('keydown', (e) => {
      this.keys.add(e.code);
    });
    window.addEventListener('keyup', (e) => {
      this.keys.delete(e.code);
    });

    this.canvas.addEventListener('pointerdown', (e) => {
      this.pointerActive = true;
      this.pointerScreenX = e.clientX;
      this.pointerScreenY = e.clientY;
    });
    window.addEventListener('pointermove', (e) => {
      if (this.pointerActive) {
        this.pointerScreenX = e.clientX;
        this.pointerScreenY = e.clientY;
      }
    });
    window.addEventListener('pointerup', () => {
      this.pointerActive = false;
    });
  }

  public setSdkPause(paused: boolean): void {
    this.isPausedBySdk = paused;
    this.lastFrameTime = performance.now();
  }

  public startNewRun(): void {
    const save = SaveManager.getInstance();
    const cmd = save.data.selectedCommander;

    this.weapons.equipped = [null, null, null, null, null, null];
    this.weapons.bench = [null, null, null, null, null, null];

    this.runBuffs = {
      damageMult: 0,
      attackSpeedMult: 0,
      critChance: cmd === 'void_phantom' ? 0.15 : 0,
      goldMult: 0,
      magnetMult: 0,
      moveSpeedMult: cmd === 'void_phantom' ? 0.25 : 0
    };

    // Configure starting weapons by Selected Commander
    if (cmd === 'tesla_engineer') {
      this.weapons.equipped[0] = this.weapons.createWeapon('tesla', 1);
      this.weapons.equipped[1] = this.weapons.createWeapon('plasma', 1);
    } else if (cmd === 'void_phantom') {
      this.weapons.equipped[0] = this.weapons.createWeapon('sawblade', 2);
      this.weapons.equipped[1] = this.weapons.createWeapon('plasma', 1);
    } else {
      this.weapons.equipped[0] = this.weapons.createWeapon('plasma', 1);
      this.weapons.equipped[1] = this.weapons.createWeapon('plasma', 1);
    }

    if (save.data.starterPackBought) {
      this.weapons.addWeaponToAvailableSlot(this.weapons.createWeapon('plasma', 3));
    }

    this.player.level = 1;
    this.player.xp = 0;
    this.player.xpToNext = 45;

    this.currentWave = 1;
    this.runGoldEarned = 0;
    this.runKills = 0;
    this.runScore = 0;
    this.revivedThisRun = false;

    save.addGold(save.getStartingWaveGold());
    this.startWave(1);
  }

  public applyTacticalCard(cardId: string): void {
    const save = SaveManager.getInstance();
    switch (cardId) {
      case 'overclock':
        this.runBuffs.attackSpeedMult += 0.2;
        break;
      case 'crit_matrix':
        this.runBuffs.critChance = Math.min(0.85, this.runBuffs.critChance + 0.15);
        this.runBuffs.damageMult += 0.1;
        break;
      case 'nanite_hull':
        this.player.maxHp += 40;
        this.player.hp = Math.min(this.player.maxHp, this.player.hp + 50);
        break;
      case 'scrap_harvester':
        this.runBuffs.goldMult += 0.3;
        save.addGold(80);
        this.runGoldEarned += 80;
        this.waveGoldEarned += 80;
        break;
      case 'grav_magnet':
        this.runBuffs.magnetMult += 0.5;
        this.runBuffs.moveSpeedMult += 0.12;
        break;
      case 'plasma_core':
        this.runBuffs.damageMult += 0.25;
        break;
    }
    this.onHudUpdate?.();
  }

  public startWave(waveNum: number): void {
    const save = SaveManager.getInstance();
    this.currentWave = waveNum;
    this.waveDuration = Math.min(45, 22 + waveNum * 2);
    this.waveTimer = this.waveDuration;
    this.waveGoldEarned = 0;

    this.player.x = this.worldSize / 2;
    this.player.y = this.worldSize / 2;
    const baseMax = 100 + save.getBonusMaxHp() + (waveNum - 1) * 12;
    this.player.maxHp = Math.max(this.player.maxHp, baseMax);
    this.player.hp = this.player.maxHp;
    this.player.invulnTimer = 1.0;

    this.enemies = [];
    this.projectiles = [];
    this.lightningBolts = [];
    this.frostRings = [];
    this.lootDrops = [];

    if (!save.data.vipUnlocked && !this.tempAdSpeedWave) {
      this.gameSpeedMultiplier = 1;
    }

    if (waveNum % 5 === 0) {
      this.spawnEnemy('boss');
    }

    this.state = 'PLAYING';
    this.onHudUpdate?.();
  }

  public revivePlayerWithNuke(): void {
    this.revivedThisRun = true;
    this.player.hp = this.player.maxHp;
    this.player.invulnTimer = 3.0;
    this.screenShake = 18;
    AudioManager.getInstance().playExplosion();

    for (let i = this.enemies.length - 1; i >= 0; i--) {
      const e = this.enemies[i];
      this.spawnParticles(e.x, e.y, e.color, 14);
      if (e.type === 'boss') {
        e.hp = Math.max(1, e.hp * 0.5);
      } else {
        this.enemies.splice(i, 1);
      }
    }

    this.state = 'PLAYING';
    this.onHudUpdate?.();
  }

  private loop(timestamp: number): void {
    const rawDt = Math.min(0.05, (timestamp - this.lastFrameTime) / 1000);
    this.lastFrameTime = timestamp;

    if (!this.isPausedBySdk && this.state === 'PLAYING') {
      const dt = rawDt * this.gameSpeedMultiplier;
      this.update(dt);
    }

    this.render();
    requestAnimationFrame((t) => this.loop(t));
  }

  private update(dt: number): void {
    const save = SaveManager.getInstance();

    // 1. Wave Timer
    this.waveTimer -= dt;
    if (this.waveTimer <= 0) {
      this.waveTimer = 0;
      this.completeWave();
      return;
    }

    // 2. Player Movement
    let dx = 0;
    let dy = 0;
    if (this.keys.has('KeyW') || this.keys.has('ArrowUp')) dy -= 1;
    if (this.keys.has('KeyS') || this.keys.has('ArrowDown')) dy += 1;
    if (this.keys.has('KeyA') || this.keys.has('ArrowLeft')) dx -= 1;
    if (this.keys.has('KeyD') || this.keys.has('ArrowRight')) dx += 1;

    if (dx === 0 && dy === 0 && this.pointerActive) {
      const centerX = this.canvas.width / 2;
      const centerY = this.canvas.height / 2;
      const pdx = this.pointerScreenX - centerX;
      const pdy = this.pointerScreenY - centerY;
      const dist = Math.hypot(pdx, pdy);
      if (dist > 14) {
        dx = pdx / dist;
        dy = pdy / dist;
      }
    } else if (dx !== 0 || dy !== 0) {
      const len = Math.hypot(dx, dy);
      dx /= len;
      dy /= len;
    }

    const effectiveSpeed = this.player.speed * (1 + this.runBuffs.moveSpeedMult);
    this.player.x = Math.max(40, Math.min(this.worldSize - 40, this.player.x + dx * effectiveSpeed * dt));
    this.player.y = Math.max(40, Math.min(this.worldSize - 40, this.player.y + dy * effectiveSpeed * dt));
    if (dx !== 0 || dy !== 0) {
      this.player.angle = Math.atan2(dy, dx);
    }

    if (this.player.invulnTimer > 0) {
      this.player.invulnTimer -= dt;
    }
    if (this.screenShake > 0) {
      this.screenShake = Math.max(0, this.screenShake - dt * 35);
    }

    // 3. Enemy Spawning
    this.spawnTimer -= dt;
    if (this.spawnTimer <= 0) {
      const spawnInterval = Math.max(0.22, 1.15 - this.currentWave * 0.065);
      this.spawnTimer = spawnInterval;
      this.spawnWaveEnemy();
    }

    // 4. Update Orbiting Weapons & Auto-Fire
    const dmgMult = save.getDamageMultiplier() * (1 + this.runBuffs.damageMult);
    const atkSpdMult = save.getAttackSpeedMultiplier() * (1 + this.runBuffs.attackSpeedMult);
    const equippedList = this.weapons.equipped;

    for (let i = 0; i < equippedList.length; i++) {
      const w = equippedList[i];
      if (!w) continue;

      const baseSlotAngle = (i / WeaponSystem.MAX_EQUIPPED) * Math.PI * 2;
      w.orbitAngle = baseSlotAngle + performance.now() * 0.0018;
      w.cooldownTimer -= dt;

      const wx = this.player.x + Math.cos(w.orbitAngle) * 48;
      const wy = this.player.y + Math.sin(w.orbitAngle) * 48;

      if (w.cooldownTimer <= 0) {
        const fired = this.fireWeapon(w, wx, wy, dmgMult);
        if (fired) {
          w.cooldownTimer = WeaponSystem.getCooldown(w, atkSpdMult);
        } else {
          w.cooldownTimer = 0.1;
        }
      }
    }

    // 5. Update Projectiles
    for (let i = this.projectiles.length - 1; i >= 0; i--) {
      const p = this.projectiles[i];
      p.x += p.vx * dt;
      p.y += p.vy * dt;
      p.life -= dt;
      if (p.rotation !== undefined) {
        p.rotation += dt * 16;
      }

      let removed = false;
      for (let j = this.enemies.length - 1; j >= 0; j--) {
        const e = this.enemies[j];
        if (p.hitEnemyIds.has(e.id)) continue;

        const dist = Math.hypot(p.x - e.x, p.y - e.y);
        if (dist <= p.radius + e.radius) {
          p.hitEnemyIds.add(e.id);

          if (p.splashRadius > 0) {
            this.triggerExplosionSplash(p.x, p.y, p.splashRadius, p.damage, p.color);
          } else {
            this.damageEnemy(e, p.damage, p.color);
          }

          if (p.pierce > 0) {
            p.pierce -= 1;
          } else {
            this.projectiles.splice(i, 1);
            removed = true;
            break;
          }
        }
      }

      if (!removed && p.life <= 0) {
        this.projectiles.splice(i, 1);
      }
    }

    // 6. Update Enemies
    for (let i = this.enemies.length - 1; i >= 0; i--) {
      const e = this.enemies[i];
      if (e.hitFlash > 0) e.hitFlash -= dt;
      if (e.slowTimer > 0) e.slowTimer -= dt;

      const angle = Math.atan2(this.player.y - e.y, this.player.x - e.x);
      const speedMod = e.slowTimer > 0 ? 0.5 : 1.0;
      e.x += Math.cos(angle) * e.speed * speedMod * dt;
      e.y += Math.sin(angle) * e.speed * speedMod * dt;

      const distToPlayer = Math.hypot(this.player.x - e.x, this.player.y - e.y);
      if (distToPlayer < this.player.radius + e.radius) {
        if (this.player.invulnTimer <= 0) {
          this.player.hp -= e.damage;
          this.player.invulnTimer = 0.45;
          this.screenShake = 10;
          AudioManager.getInstance().playHit();
          this.spawnFloatingText(this.player.x, this.player.y - 25, `-${e.damage} HP`, '#ef4444', 1.25);

          if (this.player.hp <= 0) {
            this.player.hp = 0;
            this.handlePlayerDeath();
            return;
          }
        }
      }
    }

    // 7. Update Loot Drops (Magnetic pickup + XP gain)
    const magnetRadius = save.getMagnetRadius() * (1 + this.runBuffs.magnetMult);
    let leveledUp = false;

    for (let i = this.lootDrops.length - 1; i >= 0; i--) {
      const drop = this.lootDrops[i];
      const dist = Math.hypot(this.player.x - drop.x, this.player.y - drop.y);

      if (dist < magnetRadius) {
        const pullSpeed = 450;
        const angle = Math.atan2(this.player.y - drop.y, this.player.x - drop.x);
        drop.x += Math.cos(angle) * pullSpeed * dt;
        drop.y += Math.sin(angle) * pullSpeed * dt;
      }

      if (dist < this.player.radius + drop.radius + 8) {
        if (drop.type === 'gold') {
          const goldAmt = Math.max(1, Math.round(drop.value * (1 + this.runBuffs.goldMult)));
          save.addGold(goldAmt);
          this.runGoldEarned += goldAmt;
          this.waveGoldEarned += goldAmt;
          this.spawnFloatingText(drop.x, drop.y, `+${goldAmt}g`, '#facc15', 0.95);
        } else if (drop.type === 'gem') {
          save.addGems(drop.value);
          this.spawnFloatingText(drop.x, drop.y, `+${drop.value} 💎`, '#38bdf8', 1.15);
        } else if (drop.type === 'heal') {
          this.player.hp = Math.min(this.player.maxHp, this.player.hp + drop.value);
          this.spawnFloatingText(drop.x, drop.y, `+${drop.value} HP`, '#4ade80', 1.1);
        }

        if (drop.xpValue > 0) {
          this.player.xp += drop.xpValue;
          if (this.player.xp >= this.player.xpToNext) {
            this.player.xp -= this.player.xpToNext;
            this.player.level += 1;
            this.player.xpToNext = Math.round(this.player.xpToNext * 1.38 + 20);
            leveledUp = true;
          }
        }

        AudioManager.getInstance().playCoin();
        this.lootDrops.splice(i, 1);
      }
    }

    // 8. Visual FX Updates
    for (let i = this.lightningBolts.length - 1; i >= 0; i--) {
      this.lightningBolts[i].alpha -= dt * 4.5;
      if (this.lightningBolts[i].alpha <= 0) this.lightningBolts.splice(i, 1);
    }

    for (let i = this.frostRings.length - 1; i >= 0; i--) {
      const ring = this.frostRings[i];
      ring.currentRadius += (ring.maxRadius - ring.currentRadius) * dt * 10;
      ring.alpha -= dt * 2.5;
      if (ring.alpha <= 0) this.frostRings.splice(i, 1);
    }

    for (let i = this.particles.length - 1; i >= 0; i--) {
      const pt = this.particles[i];
      pt.x += pt.vx * dt;
      pt.y += pt.vy * dt;
      pt.alpha -= pt.decay * dt;
      if (pt.alpha <= 0) this.particles.splice(i, 1);
    }

    for (let i = this.floatingTexts.length - 1; i >= 0; i--) {
      const ft = this.floatingTexts[i];
      ft.y += ft.vy * dt;
      ft.alpha -= dt * 1.4;
      if (ft.alpha <= 0) this.floatingTexts.splice(i, 1);
    }

    this.onHudUpdate?.();

    if (leveledUp) {
      this.state = 'LEVEL_UP';
      AudioManager.getInstance().playMerge(4);
      this.onLevelUp?.();
    }
  }

  private fireWeapon(w: WeaponInstance, wx: number, wy: number, dmgMult: number): boolean {
    const bp = WEAPON_BLUEPRINTS[w.archetype];
    let damage = WeaponSystem.getDamage(w, dmgMult);
    const isCrit = Math.random() < this.runBuffs.critChance;
    if (isCrit) {
      damage = Math.round(damage * 2);
    }

    let nearest: Enemy | null = null;
    let minDist = bp.range;
    for (const e of this.enemies) {
      const d = Math.hypot(e.x - wx, e.y - wy);
      if (d <= minDist) {
        minDist = d;
        nearest = e;
      }
    }

    if (!nearest) return false;

    const angle = Math.atan2(nearest.y - wy, nearest.x - wx);
    const tierColor = TIER_COLORS[w.tier - 1] || bp.color;

    if (w.archetype === 'plasma') {
      const speed = 640;
      this.projectiles.push({
        x: wx,
        y: wy,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        radius: 5 + w.tier,
        damage,
        color: isCrit ? '#facc15' : bp.color,
        pierce: w.tier >= 4 ? 1 : 0,
        splashRadius: 0,
        life: 1.2,
        hitEnemyIds: new Set()
      });
      AudioManager.getInstance().playShoot(w.tier);
      return true;
    }

    if (w.archetype === 'sawblade') {
      const speed = 460;
      this.projectiles.push({
        x: wx,
        y: wy,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        radius: 12 + w.tier * 2,
        damage,
        color: isCrit ? '#facc15' : tierColor,
        pierce: 2 + w.tier * 2,
        splashRadius: 0,
        life: 1.6,
        isSawblade: true,
        rotation: 0,
        hitEnemyIds: new Set()
      });
      AudioManager.getInstance().playShoot(w.tier - 2);
      return true;
    }

    if (w.archetype === 'missile') {
      const speed = 420;
      this.projectiles.push({
        x: wx,
        y: wy,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        radius: 8 + w.tier,
        damage,
        color: bp.color,
        pierce: 0,
        splashRadius: 65 + w.tier * 14,
        life: 1.5,
        hitEnemyIds: new Set()
      });
      AudioManager.getInstance().playShoot(-2);
      return true;
    }

    if (w.archetype === 'tesla') {
      const maxTargets = 2 + w.tier;
      const hitSet = new Set<number>();
      const boltPoints: Array<{ x: number; y: number }> = [{ x: wx, y: wy }];
      let currX = wx;
      let currY = wy;

      for (let t = 0; t < maxTargets; t++) {
        let nextTarget: Enemy | null = null;
        let bestDist = 220;
        for (const e of this.enemies) {
          if (hitSet.has(e.id)) continue;
          const d = Math.hypot(e.x - currX, e.y - currY);
          if (d <= bestDist) {
            bestDist = d;
            nextTarget = e;
          }
        }
        if (!nextTarget) break;
        hitSet.add(nextTarget.id);
        boltPoints.push({ x: nextTarget.x, y: nextTarget.y });
        currX = nextTarget.x;
        currY = nextTarget.y;
        this.damageEnemy(nextTarget, damage, bp.color);
      }

      this.lightningBolts.push({
        points: boltPoints,
        color: bp.color,
        alpha: 1.0
      });
      AudioManager.getInstance().playLightning();
      return true;
    }

    if (w.archetype === 'frost') {
      const novaRadius = bp.range + w.tier * 18;
      for (let i = this.enemies.length - 1; i >= 0; i--) {
        const e = this.enemies[i];
        if (Math.hypot(e.x - this.player.x, e.y - this.player.y) <= novaRadius) {
          e.slowTimer = 2.5 + w.tier * 0.4;
          this.damageEnemy(e, damage, bp.color);
        }
      }
      this.frostRings.push({
        x: this.player.x,
        y: this.player.y,
        currentRadius: 20,
        maxRadius: novaRadius,
        color: bp.color,
        alpha: 0.9
      });
      AudioManager.getInstance().playShoot(3);
      return true;
    }

    return false;
  }

  private triggerExplosionSplash(x: number, y: number, radius: number, damage: number, color: string): void {
    this.screenShake = Math.max(this.screenShake, 5);
    this.spawnParticles(x, y, color, 16);
    AudioManager.getInstance().playExplosion();

    for (let i = this.enemies.length - 1; i >= 0; i--) {
      const e = this.enemies[i];
      if (Math.hypot(e.x - x, e.y - y) <= radius + e.radius) {
        this.damageEnemy(e, damage, color);
      }
    }
  }

  private damageEnemy(e: Enemy, amount: number, color: string): void {
    e.hp -= amount;
    e.hitFlash = 0.1;
    this.spawnFloatingText(
      e.x + (Math.random() - 0.5) * 16,
      e.y - e.radius,
      `${amount}`,
      color,
      e.type === 'boss' ? 1.2 : 0.95
    );

    if (e.hp <= 0) {
      const idx = this.enemies.indexOf(e);
      if (idx !== -1) this.enemies.splice(idx, 1);

      this.runKills += 1;
      this.runScore += e.goldValue * 10;
      this.spawnParticles(e.x, e.y, e.color, e.type === 'boss' ? 30 : 8);

      this.lootDrops.push({
        x: e.x,
        y: e.y,
        vx: 0,
        vy: 0,
        value: e.goldValue,
        xpValue: e.type === 'boss' ? 80 : 12,
        type: 'gold',
        radius: 7
      });

      if (e.type === 'boss' || Math.random() < 0.04) {
        this.lootDrops.push({
          x: e.x + 12,
          y: e.y + 8,
          vx: 0,
          vy: 0,
          value: e.type === 'boss' ? 10 : 1,
          xpValue: 15,
          type: 'gem',
          radius: 9
        });
      } else if (Math.random() < 0.035) {
        this.lootDrops.push({
          x: e.x - 10,
          y: e.y,
          vx: 0,
          vy: 0,
          value: 20,
          xpValue: 5,
          type: 'heal',
          radius: 8
        });
      }
    }
  }

  private spawnWaveEnemy(): void {
    const roll = Math.random();
    if (this.currentWave >= 4 && roll < 0.14) {
      this.spawnEnemy('tank');
    } else if (this.currentWave >= 3 && roll < 0.32) {
      this.spawnEnemy('charger');
    } else if (this.currentWave >= 2 && roll < 0.55) {
      this.spawnEnemy('speedster');
    } else {
      this.spawnEnemy('swarmer');
    }
  }

  private spawnEnemy(type: EnemyType): void {
    const angle = Math.random() * Math.PI * 2;
    const spawnDist = 560 + Math.random() * 160;
    const x = Math.max(50, Math.min(this.worldSize - 50, this.player.x + Math.cos(angle) * spawnDist));
    const y = Math.max(50, Math.min(this.worldSize - 50, this.player.y + Math.sin(angle) * spawnDist));

    const waveScale = Math.pow(1.24, this.currentWave - 1);

    const configs: Record<EnemyType, Omit<Enemy, 'id' | 'x' | 'y' | 'slowTimer' | 'hitFlash'>> = {
      swarmer: {
        type: 'swarmer',
        radius: 14,
        hp: Math.round(28 * waveScale),
        maxHp: Math.round(28 * waveScale),
        speed: 115,
        damage: Math.round(9 * waveScale),
        color: '#f43f5e',
        goldValue: Math.round(4 + this.currentWave * 1.5)
      },
      speedster: {
        type: 'speedster',
        radius: 11,
        hp: Math.round(19 * waveScale),
        maxHp: Math.round(19 * waveScale),
        speed: 185,
        damage: Math.round(8 * waveScale),
        color: '#fbbf24',
        goldValue: Math.round(5 + this.currentWave * 1.8)
      },
      charger: {
        type: 'charger',
        radius: 17,
        hp: Math.round(52 * waveScale),
        maxHp: Math.round(52 * waveScale),
        speed: 145,
        damage: Math.round(14 * waveScale),
        color: '#ec4899',
        goldValue: Math.round(8 + this.currentWave * 2.2)
      },
      tank: {
        type: 'tank',
        radius: 24,
        hp: Math.round(135 * waveScale),
        maxHp: Math.round(135 * waveScale),
        speed: 78,
        damage: Math.round(20 * waveScale),
        color: '#a855f7',
        goldValue: Math.round(15 + this.currentWave * 3)
      },
      boss: {
        type: 'boss',
        radius: 42,
        hp: Math.round(950 * waveScale),
        maxHp: Math.round(950 * waveScale),
        speed: 92,
        damage: Math.round(32 * waveScale),
        color: '#ef4444',
        goldValue: Math.round(120 + this.currentWave * 25)
      }
    };

    const cfg = configs[type];
    this.enemies.push({
      id: this.enemyIdCounter++,
      x,
      y,
      slowTimer: 0,
      hitFlash: 0,
      ...cfg
    });
  }

  private completeWave(): void {
    const save = SaveManager.getInstance();
    for (const drop of this.lootDrops) {
      if (drop.type === 'gold') {
        save.addGold(drop.value);
        this.runGoldEarned += drop.value;
        this.waveGoldEarned += drop.value;
      } else if (drop.type === 'gem') {
        save.addGems(drop.value);
      }
    }
    this.lootDrops = [];

    const waveBonus = 25 + this.currentWave * 15;
    save.addGold(waveBonus);
    this.waveGoldEarned += waveBonus;
    this.runGoldEarned += waveBonus;

    if (this.currentWave > save.data.highestWave) {
      save.data.highestWave = this.currentWave;
    }
    if (this.runScore > save.data.highScore) {
      save.data.highScore = this.runScore;
    }
    save.save();

    this.tempAdSpeedWave = false;
    this.state = 'SHOP';
    AudioManager.getInstance().playWaveComplete();
    this.onWaveComplete?.();
  }

  private handlePlayerDeath(): void {
    const save = SaveManager.getInstance();
    if (this.runScore > save.data.highScore) {
      save.data.highScore = this.runScore;
      save.save();
    }
    this.state = this.revivedThisRun ? 'GAMEOVER' : 'REVIVE_PROMPT';
    AudioManager.getInstance().playExplosion();
    this.onPlayerDeath?.();
  }

  private spawnParticles(x: number, y: number, color: string, count: number): void {
    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = 40 + Math.random() * 190;
      this.particles.push({
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        radius: 2 + Math.random() * 3.5,
        color,
        alpha: 1,
        decay: 1.5 + Math.random() * 1.5
      });
    }
  }

  private spawnFloatingText(x: number, y: number, text: string, color: string, scale = 1): void {
    this.floatingTexts.push({
      x,
      y,
      text,
      color,
      alpha: 1,
      vy: -48,
      scale
    });
  }

  private render(): void {
    const ctx = this.ctx;
    const w = this.canvas.width;
    const h = this.canvas.height;

    ctx.fillStyle = '#070a14';
    ctx.fillRect(0, 0, w, h);

    ctx.save();

    const shakeX = (Math.random() - 0.5) * this.screenShake;
    const shakeY = (Math.random() - 0.5) * this.screenShake;
    const camX = w / 2 - this.player.x + shakeX;
    const camY = h / 2 - this.player.y + shakeY;
    ctx.translate(camX, camY);

    this.drawArenaGrid(ctx);

    for (const ring of this.frostRings) {
      ctx.save();
      ctx.globalAlpha = Math.max(0, ring.alpha);
      ctx.strokeStyle = ring.color;
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.arc(ring.x, ring.y, ring.currentRadius, 0, Math.PI * 2);
      ctx.stroke();
      ctx.restore();
    }

    for (const drop of this.lootDrops) {
      ctx.save();
      ctx.beginPath();
      if (drop.type === 'gold') {
        ctx.fillStyle = '#facc15';
        ctx.shadowColor = '#facc15';
      } else if (drop.type === 'gem') {
        ctx.fillStyle = '#38bdf8';
        ctx.shadowColor = '#38bdf8';
      } else {
        ctx.fillStyle = '#4ade80';
        ctx.shadowColor = '#4ade80';
      }
      ctx.shadowBlur = 10;
      ctx.arc(drop.x, drop.y, drop.radius, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }

    for (const e of this.enemies) {
      ctx.save();
      ctx.beginPath();
      ctx.fillStyle = e.hitFlash > 0 ? '#ffffff' : e.slowTimer > 0 ? '#67e8f9' : e.color;
      ctx.shadowColor = e.color;
      ctx.shadowBlur = e.type === 'boss' ? 20 : 8;
      ctx.arc(e.x, e.y, e.radius, 0, Math.PI * 2);
      ctx.fill();

      ctx.strokeStyle = '#0f172a';
      ctx.lineWidth = 2.5;
      ctx.stroke();

      if (e.hp < e.maxHp || e.type === 'boss') {
        const bw = e.radius * 2.2;
        const bh = e.type === 'boss' ? 7 : 4;
        const bx = e.x - bw / 2;
        const by = e.y - e.radius - 12;
        ctx.fillStyle = 'rgba(0,0,0,0.65)';
        ctx.fillRect(bx, by, bw, bh);
        ctx.fillStyle = e.type === 'boss' ? '#f43f5e' : '#22c55e';
        ctx.fillRect(bx, by, bw * Math.max(0, e.hp / e.maxHp), bh);
      }
      ctx.restore();
    }

    this.drawPlayerAndWeapons(ctx);

    for (const p of this.projectiles) {
      ctx.save();
      ctx.translate(p.x, p.y);
      if (p.isSawblade && p.rotation !== undefined) {
        ctx.rotate(p.rotation);
        ctx.strokeStyle = p.color;
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.arc(0, 0, p.radius, 0, Math.PI * 2);
        ctx.stroke();
      } else {
        ctx.fillStyle = p.color;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 12;
        ctx.beginPath();
        ctx.arc(0, 0, p.radius, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();
    }

    for (const bolt of this.lightningBolts) {
      if (bolt.points.length < 2) continue;
      ctx.save();
      ctx.globalAlpha = Math.max(0, bolt.alpha);
      ctx.strokeStyle = bolt.color;
      ctx.shadowColor = bolt.color;
      ctx.shadowBlur = 14;
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(bolt.points[0].x, bolt.points[0].y);
      for (let i = 1; i < bolt.points.length; i++) {
        ctx.lineTo(bolt.points[i].x, bolt.points[i].y);
      }
      ctx.stroke();
      ctx.restore();
    }

    for (const pt of this.particles) {
      ctx.save();
      ctx.globalAlpha = Math.max(0, pt.alpha);
      ctx.fillStyle = pt.color;
      ctx.beginPath();
      ctx.arc(pt.x, pt.y, pt.radius, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }

    for (const ft of this.floatingTexts) {
      ctx.save();
      ctx.globalAlpha = Math.max(0, ft.alpha);
      ctx.font = `700 ${Math.round(15 * ft.scale)}px Orbitron, sans-serif`;
      ctx.fillStyle = ft.color;
      ctx.textAlign = 'center';
      ctx.fillText(ft.text, ft.x, ft.y);
      ctx.restore();
    }

    ctx.restore();
  }

  private drawArenaGrid(ctx: CanvasRenderingContext2D): void {
    const step = 80;
    ctx.strokeStyle = 'rgba(56, 189, 248, 0.08)';
    ctx.lineWidth = 1;

    ctx.beginPath();
    for (let x = 0; x <= this.worldSize; x += step) {
      ctx.moveTo(x, 0);
      ctx.lineTo(x, this.worldSize);
    }
    for (let y = 0; y <= this.worldSize; y += step) {
      ctx.moveTo(0, y);
      ctx.lineTo(this.worldSize, y);
    }
    ctx.stroke();

    ctx.strokeStyle = '#38bdf8';
    ctx.lineWidth = 4;
    ctx.strokeRect(0, 0, this.worldSize, this.worldSize);
  }

  private drawPlayerAndWeapons(ctx: CanvasRenderingContext2D): void {
    ctx.save();
    const cmd = SaveManager.getInstance().data.selectedCommander;
    const baseBodyColor =
      cmd === 'tesla_engineer' ? '#a855f7' : cmd === 'void_phantom' ? '#f43f5e' : '#0ea5e9';

    ctx.beginPath();
    ctx.fillStyle =
      this.player.invulnTimer > 0 && Math.floor(performance.now() / 60) % 2 === 0
        ? '#ffffff'
        : baseBodyColor;
    ctx.shadowColor = baseBodyColor;
    ctx.shadowBlur = 18;
    ctx.arc(this.player.x, this.player.y, this.player.radius, 0, Math.PI * 2);
    ctx.fill();

    ctx.lineWidth = 3;
    ctx.strokeStyle = '#e0f2fe';
    ctx.stroke();

    for (const w of this.weapons.equipped) {
      if (!w) continue;
      const wx = this.player.x + Math.cos(w.orbitAngle) * 48;
      const wy = this.player.y + Math.sin(w.orbitAngle) * 48;
      const tierColor = TIER_COLORS[w.tier - 1];

      ctx.beginPath();
      ctx.fillStyle = tierColor;
      ctx.shadowColor = tierColor;
      ctx.shadowBlur = 12;
      ctx.arc(wx, wy, 8 + w.tier * 1.4, 0, Math.PI * 2);
      ctx.fill();

      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 1.5;
      ctx.stroke();
    }

    ctx.restore();
  }
}
