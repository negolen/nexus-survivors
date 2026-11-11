import { AudioManager } from '../core/AudioManager';
import { I18n } from '../core/I18n';
import { CommanderId, SaveManager } from '../core/SaveManager';
import { Renderer3D } from './Renderer3D';
import {
  TIER_COLORS,
  WEAPON_BLUEPRINTS,
  WeaponArchetypeId,
  WeaponInstance,
  WeaponSystem
} from './WeaponSystem';

export type EnemyType = 'swarmer' | 'speedster' | 'charger' | 'tank' | 'boss' | 'rival';

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
  rivalName?: string;
  rivalClass?: CommanderId;
  rivalLevel?: number;
  shootTimer?: number;
  strafeDir?: number;
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
  fromRival?: boolean;
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
  type: 'gold' | 'gem' | 'heal' | 'weapon_pod';
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
  private renderer3d: Renderer3D;
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
  public gameMode: 'SOLO' | 'PVP' = 'SOLO';
  public currentWave = 1;
  public waveTimer = 25;
  public waveDuration = 25;
  public bossElapsedTime = 0;
  public bossRageStage = 0;
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

  // Input State (WASD + Floating Dynamic Virtual Joystick)
  private keys: Set<string> = new Set();
  private joyActive = false;
  private joyOriginX = 0;
  private joyOriginY = 0;
  private joyCurrentX = 0;
  private joyCurrentY = 0;
  private readonly JOY_DEADZONE = 8;
  private readonly JOY_MAX_RADIUS = 52;

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
    this.renderer3d = new Renderer3D(canvas, this.worldSize);

    this.handleResize();
    window.addEventListener('resize', () => this.handleResize());
    this.bindInputs();
    requestAnimationFrame((t) => this.loop(t));
  }

  private handleResize(): void {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    this.renderer3d?.resize(window.innerWidth, window.innerHeight);
  }

  private bindInputs(): void {
    window.addEventListener('keydown', (e) => {
      const tag = (e.target as HTMLElement)?.tagName;
      if (tag === 'INPUT' || tag === 'TEXTAREA') return;
      if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Space'].includes(e.code)) {
        e.preventDefault();
      }
      this.keys.add(e.code);
    });
    window.addEventListener('keyup', (e) => {
      this.keys.delete(e.code);
    });

    this.canvas.addEventListener('pointerdown', (e) => {
      this.joyActive = true;
      this.joyOriginX = e.clientX;
      this.joyOriginY = e.clientY;
      this.joyCurrentX = e.clientX;
      this.joyCurrentY = e.clientY;
    });
    window.addEventListener('pointermove', (e) => {
      if (this.joyActive) {
        this.joyCurrentX = e.clientX;
        this.joyCurrentY = e.clientY;
        const pdx = this.joyCurrentX - this.joyOriginX;
        const pdy = this.joyCurrentY - this.joyOriginY;
        const dist = Math.hypot(pdx, pdy);
        const maxFollowDist = this.JOY_MAX_RADIUS * 1.45;
        if (dist > maxFollowDist) {
          const excess = dist - maxFollowDist;
          this.joyOriginX += (pdx / dist) * excess;
          this.joyOriginY += (pdy / dist) * excess;
        }
      }
    });
    const endPointer = () => {
      this.joyActive = false;
    };
    window.addEventListener('pointerup', endPointer);
    window.addEventListener('pointercancel', endPointer);
  }

  public setSdkPause(paused: boolean): void {
    this.isPausedBySdk = paused;
    this.lastFrameTime = performance.now();
  }

  public startNewRun(mode: 'SOLO' | 'PVP' = 'SOLO'): void {
    this.gameMode = mode;
    const save = SaveManager.getInstance();
    const cmd = save.data.selectedCommander;

    this.weapons.equipped = [null, null, null, null, null, null];
    this.weapons.bench = [null, null, null, null, null, null];

    this.runBuffs = {
      damageMult: 0,
      attackSpeedMult: cmd === 'valkyrie' ? 0.15 : 0,
      critChance: cmd === 'void_phantom' ? 0.2 : 0,
      goldMult: 0,
      magnetMult: 0,
      moveSpeedMult: cmd === 'void_phantom' ? 0.3 : cmd === 'valkyrie' ? 0.12 : 0
    };

    // Configure starting weapons by Selected Commander (2 Free + 2 VIP)
    if (cmd === 'valkyrie') {
      this.weapons.equipped[0] = this.weapons.createWeapon('frost', 1);
      this.weapons.equipped[1] = this.weapons.createWeapon('plasma', 1);
    } else if (cmd === 'tesla_engineer') {
      this.weapons.equipped[0] = this.weapons.createWeapon('tesla', 2);
      this.weapons.equipped[1] = this.weapons.createWeapon('plasma', 1);
    } else if (cmd === 'void_phantom') {
      this.weapons.equipped[0] = this.weapons.createWeapon('sawblade', 2);
      this.weapons.equipped[1] = this.weapons.createWeapon('missile', 1);
    } else {
      this.weapons.equipped[0] = this.weapons.createWeapon('plasma', 1);
      this.weapons.equipped[1] = this.weapons.createWeapon('plasma', 1);
    }

    if (save.data.starterPackBought) {
      this.weapons.addWeaponToAvailableSlot(this.weapons.createWeapon('plasma', 3));
    }

    // In PVP mode, your Starting Gold Meta-Upgrade & Commander Power Level convert directly into bonus starting orbital weapons &auto-merge!
    if (mode === 'PVP') {
      const bonusPods = Math.min(4, Math.floor(save.data.meta.startingGoldLevel / 2) + (save.data.techShards >= 5 ? 1 : 0));
      const archetypes: WeaponArchetypeId[] = ['plasma', 'tesla', 'frost', 'sawblade', 'missile'];
      for (let b = 0; b < bonusPods; b++) {
        const arch = archetypes[(b + save.data.meta.damageLevel) % archetypes.length];
        this.weapons.addWeaponToAvailableSlot(this.weapons.createWeapon(arch, 1));
      }
      this.weapons.autoMergeAll();
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
    const isBossWave = waveNum % 5 === 0;
    this.waveDuration = isBossWave ? 45 : Math.min(40, 22 + waveNum * 2);
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
    this.bossElapsedTime = 0;
    this.bossRageStage = 0;

    if (!save.data.vipUnlocked && !this.tempAdSpeedWave) {
      this.gameSpeedMultiplier = 1;
    }

    // Every 5th wave: Spawn the Colossal Dreadnought Boss + initial normal wave pack!
    if (isBossWave) {
      this.spawnEnemy('boss');
      for (let i = 0; i < 4; i++) {
        this.spawnWaveEnemy();
      }
    }

    // In PVP Royale mode: Spawn 3 Rival Cyber-Commanders alongside the normal enemy horde!
    if (this.gameMode === 'PVP') {
      for (let r = 0; r < 3; r++) {
        this.spawnRivalCommander(r);
      }
    }

    this.state = 'PLAYING';
    this.onHudUpdate?.();
  }

  public revivePlayerWithNuke(): void {
    this.revivedThisRun = true;
    this.player.hp = this.player.maxHp;
    this.player.invulnTimer = 3.0;
    this.screenShake = 18;
    this.bossElapsedTime = 0;
    this.bossRageStage = 0;
    AudioManager.getInstance().playExplosion();

    let writeIdx = 0;
    for (let i = 0; i < this.enemies.length; i++) {
      const e = this.enemies[i];
      this.spawnParticles(e.x, e.y, e.color, 14);
      if (e.type === 'boss') {
        e.hp = Math.max(1, e.hp * 0.5);
        this.enemies[writeIdx++] = e;
      }
    }
    this.enemies.length = writeIdx;

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

    // 1. Check Active Boss, Enrage Stages (10s/20s/30s), & 34s Supernova Detonation
    let activeBoss: Enemy | null = null;
    for (let i = 0; i < this.enemies.length; i++) {
      if (this.enemies[i].type === 'boss') {
        activeBoss = this.enemies[i];
        break;
      }
    }

    this.waveTimer -= dt;
    if (activeBoss) {
      // Boss waves do NOT complete until the Boss is eliminated!
      if (this.waveTimer < 0) this.waveTimer = 0;

      this.bossElapsedTime += dt;
      const targetRage = Math.min(3, Math.floor(this.bossElapsedTime / 10));
      if (targetRage > this.bossRageStage) {
        this.bossRageStage = targetRage;
        activeBoss.damage = Math.round(activeBoss.damage * 1.35);
        activeBoss.speed = Math.round(activeBoss.speed * 1.18);
        activeBoss.radius = Math.round(activeBoss.radius * 1.08);
        this.screenShake = 15;
        AudioManager.getInstance().playExplosion();
        const rageMsg =
          I18n.getLang() === 'tr'
            ? `🔥 BOSS ÖFKE EVRESİ ${this.bossRageStage}! (+%35 HASAR)`
            : `🔥 BOSS RAGE STAGE ${this.bossRageStage}! (+35% DMG)`;
        this.spawnFloatingText(activeBoss.x, activeBoss.y - 30, rageMsg, '#f97316', 1.45);
      }

      // 34-Second Arena Supernova Detonation if Boss is still alive!
      if (this.bossElapsedTime >= 34.0) {
        this.screenShake = 35;
        AudioManager.getInstance().playExplosion();
        this.spawnParticles(activeBoss.x, activeBoss.y, '#ef4444', 45);
        this.spawnParticles(this.player.x, this.player.y, '#facc15', 40);
        const detMsg =
          I18n.getLang() === 'tr'
            ? '💥 ARENA İNFİLAK ETTİ! (34sn SÜRE DOLDU)'
            : '💥 ARENA DETONATED! (34s LIMIT)';
        this.spawnFloatingText(this.player.x, this.player.y - 30, detMsg, '#ef4444', 1.55);
        this.player.hp = 0;
        this.handlePlayerDeath();
        return;
      }
    } else {
      this.bossRageStage = 0;
      if (this.waveTimer <= 0) {
        this.waveTimer = 0;
        this.completeWave();
        return;
      }
    }

    // 2. Player Movement
    let dx = 0;
    let dy = 0;
    if (this.keys.has('KeyW') || this.keys.has('ArrowUp')) dy -= 1;
    if (this.keys.has('KeyS') || this.keys.has('ArrowDown')) dy += 1;
    if (this.keys.has('KeyA') || this.keys.has('ArrowLeft')) dx -= 1;
    if (this.keys.has('KeyD') || this.keys.has('ArrowRight')) dx += 1;

    if (dx === 0 && dy === 0 && this.joyActive) {
      const pdx = this.joyCurrentX - this.joyOriginX;
      const pdy = this.joyCurrentY - this.joyOriginY;
      const dist = Math.hypot(pdx, pdy);
      if (dist > this.JOY_DEADZONE) {
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

    // 5. Update Projectiles (in-place compaction - zero GC allocations)
    let projWrite = 0;
    for (let i = 0; i < this.projectiles.length; i++) {
      const p = this.projectiles[i];
      p.x += p.vx * dt;
      p.y += p.vy * dt;
      p.life -= dt;
      if (p.rotation !== undefined) {
        p.rotation += dt * 16;
      }

      let alive = p.life > 0;
      if (alive) {
        if (p.fromRival) {
          // Rival projectile hits Player OR regular monsters in PvPvE crossfire!
          const distP = Math.hypot(p.x - this.player.x, p.y - this.player.y);
          if (distP <= p.radius + this.player.radius) {
            alive = false;
            if (this.player.invulnTimer <= 0) {
              this.player.hp -= p.damage;
              this.player.invulnTimer = 0.35;
              this.screenShake = 8;
              AudioManager.getInstance().playHit();
              this.spawnFloatingText(this.player.x, this.player.y - 25, `-${p.damage} HP`, '#f43f5e', 1.2);
              if (this.player.hp <= 0) {
                this.player.hp = 0;
                this.handlePlayerDeath();
                return;
              }
            }
          } else {
            for (let j = this.enemies.length - 1; j >= 0; j--) {
              const e = this.enemies[j];
              if (e.type === 'rival' || p.hitEnemyIds.has(e.id)) continue;
              if (Math.hypot(p.x - e.x, p.y - e.y) <= p.radius + e.radius) {
                p.hitEnemyIds.add(e.id);
                this.damageEnemy(e, p.damage, p.color);
                alive = false;
                break;
              }
            }
          }
        } else {
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
                alive = false;
                break;
              }
            }
          }
        }
      }

      if (alive) {
        this.projectiles[projWrite++] = p;
      }
    }
    this.projectiles.length = projWrite;

    // 6. Update Enemies & Rival Commanders
    for (let i = 0; i < this.enemies.length; i++) {
      const e = this.enemies[i];
      if (e.hitFlash > 0) e.hitFlash -= dt;
      if (e.slowTimer > 0) e.slowTimer -= dt;

      const angle = Math.atan2(this.player.y - e.y, this.player.x - e.x);
      const distToPlayer = Math.hypot(this.player.x - e.x, this.player.y - e.y);
      const speedMod = e.slowTimer > 0 ? 0.5 : 1.0;

      if (e.type === 'rival') {
        // Rival Cyber-Commander AI: Kites, strafes around the arena, and fires plasma bursts!
        const strafe = e.strafeDir || 1;
        let moveAngle = angle;
        if (distToPlayer < 190) {
          moveAngle = angle + Math.PI + strafe * 0.55; // Back-kite away from player
        } else if (distToPlayer < 320) {
          moveAngle = angle + (Math.PI / 2) * strafe; // Circle-strafe duel
        }
        e.x = Math.max(55, Math.min(this.worldSize - 55, e.x + Math.cos(moveAngle) * e.speed * speedMod * dt));
        e.y = Math.max(55, Math.min(this.worldSize - 55, e.y + Math.sin(moveAngle) * e.speed * speedMod * dt));

        e.shootTimer = (e.shootTimer ?? 1.2) - dt;
        if (e.shootTimer <= 0 && distToPlayer < 560) {
          e.shootTimer = 1.25;
          const boltSpeed = 430;
          this.projectiles.push({
            x: e.x,
            y: e.y,
            vx: Math.cos(angle) * boltSpeed,
            vy: Math.sin(angle) * boltSpeed,
            radius: 6,
            damage: e.damage,
            color: e.color,
            pierce: 0,
            splashRadius: 0,
            life: 1.5,
            fromRival: true,
            hitEnemyIds: new Set()
          });
          AudioManager.getInstance().playShoot(-1);
        }
      } else {
        e.x += Math.cos(angle) * e.speed * speedMod * dt;
        e.y += Math.sin(angle) * e.speed * speedMod * dt;
      }

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

    // 7. Update Loot Drops (Magnetic pickup + XP gain - in-place compaction)
    const magnetRadius = save.getMagnetRadius() * (1 + this.runBuffs.magnetMult);
    let leveledUp = false;
    let lootWrite = 0;

    for (let i = 0; i < this.lootDrops.length; i++) {
      const drop = this.lootDrops[i];
      const dist = Math.hypot(this.player.x - drop.x, this.player.y - drop.y);

      if (dist < magnetRadius) {
        const pullSpeed = 450;
        const angle = Math.atan2(this.player.y - drop.y, this.player.x - drop.x);
        drop.x += Math.cos(angle) * pullSpeed * dt;
        drop.y += Math.sin(angle) * pullSpeed * dt;
      }

      let collected = false;
      if (dist < this.player.radius + drop.radius + 8) {
        collected = true;
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
        } else if (drop.type === 'weapon_pod') {
          const archetypes: WeaponArchetypeId[] = ['plasma', 'tesla', 'frost', 'sawblade', 'missile'];
          const arch = archetypes[Math.floor(Math.random() * archetypes.length)];
          const podTier = this.currentWave >= 5 && Math.random() < 0.35 ? 2 : 1;
          if (!this.weapons.hasFreeSlot()) {
            this.weapons.autoMergeAll();
          }
          if (!this.weapons.hasFreeSlot()) {
            this.weapons.bench[WeaponSystem.MAX_BENCH - 1] = null;
          }
          const newWpn = this.weapons.createWeapon(arch, podTier);
          this.weapons.addWeaponToAvailableSlot(newWpn);
          const merges = this.weapons.autoMergeAll();
          AudioManager.getInstance().playMerge(merges > 0 ? 4 : 2);
          this.spawnParticles(this.player.x, this.player.y, '#c084fc', 16);
          const podMsg =
            I18n.getLang() === 'tr'
              ? merges > 0
                ? `🔧 SİLAH PODU + OTOMATİK BİRLEŞTİRME (${merges}x)!`
                : `🔧 SİLAH PODU KUŞANILDI!`
              : merges > 0
                ? `🔧 WEAPON POD + AUTO-MERGE (${merges}x)!`
                : `🔧 WEAPON POD EQUIPPED!`;
          this.spawnFloatingText(this.player.x, this.player.y - 28, podMsg, '#c084fc', 1.28);
        }

        if (drop.xpValue > 0) {
          this.player.xp += drop.xpValue;
          if (this.player.xp >= this.player.xpToNext) {
            this.player.xp -= this.player.xpToNext;
            this.player.level += 1;
            this.player.xpToNext = Math.round(this.player.xpToNext * 1.38 + 20);
            save.recordLevelUp(1);
            leveledUp = true;
          }
        }

        AudioManager.getInstance().playCoin();
      }

      if (!collected) {
        this.lootDrops[lootWrite++] = drop;
      }
    }
    this.lootDrops.length = lootWrite;

    // 8. Visual FX Updates (in-place compaction - zero GC pause)
    let boltWrite = 0;
    for (let i = 0; i < this.lightningBolts.length; i++) {
      const b = this.lightningBolts[i];
      b.alpha -= dt * 4.5;
      if (b.alpha > 0) {
        this.lightningBolts[boltWrite++] = b;
      }
    }
    this.lightningBolts.length = boltWrite;

    let ringWrite = 0;
    for (let i = 0; i < this.frostRings.length; i++) {
      const ring = this.frostRings[i];
      ring.currentRadius += (ring.maxRadius - ring.currentRadius) * dt * 10;
      ring.alpha -= dt * 2.5;
      if (ring.alpha > 0) {
        this.frostRings[ringWrite++] = ring;
      }
    }
    this.frostRings.length = ringWrite;

    let partWrite = 0;
    for (let i = 0; i < this.particles.length; i++) {
      const pt = this.particles[i];
      pt.x += pt.vx * dt;
      pt.y += pt.vy * dt;
      pt.alpha -= pt.decay * dt;
      if (pt.alpha > 0) {
        this.particles[partWrite++] = pt;
      }
    }
    this.particles.length = partWrite;

    let textWrite = 0;
    for (let i = 0; i < this.floatingTexts.length; i++) {
      const ft = this.floatingTexts[i];
      ft.y += ft.vy * dt;
      ft.alpha -= dt * 1.4;
      if (ft.alpha > 0) {
        this.floatingTexts[textWrite++] = ft;
      }
    }
    this.floatingTexts.length = textWrite;

    this.onHudUpdate?.();

    if (leveledUp) {
      if (this.gameMode === 'PVP') {
        // ZERO-PAUSE REAL-TIME PVP OVERCLOCK: Instant field buff + heal without pausing!
        this.player.maxHp += 20;
        const healAmt = Math.round(this.player.maxHp * 0.3);
        this.player.hp = Math.min(this.player.maxHp, this.player.hp + healAmt);
        this.runBuffs.damageMult += 0.15;
        this.runBuffs.attackSpeedMult += 0.12;
        this.runBuffs.critChance = Math.min(0.85, this.runBuffs.critChance + 0.05);
        AudioManager.getInstance().playMerge(4);
        this.spawnParticles(this.player.x, this.player.y, '#facc15', 24);
        const lvlMsg =
          I18n.getLang() === 'tr'
            ? `⚡ OVERCLOCK SV.${this.player.level}! (+%15 HASAR & CAN)`
            : `⚡ OVERCLOCK LVL ${this.player.level}! (+15% DMG & HEAL)`;
        this.spawnFloatingText(this.player.x, this.player.y - 36, lvlMsg, '#facc15', 1.38);
        this.onHudUpdate?.();
      } else {
        this.state = 'LEVEL_UP';
        AudioManager.getInstance().playMerge(4);
        this.onLevelUp?.();
      }
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
      // Swap-and-pop: O(1) removal without reallocating/shifting array
      const idx = this.enemies.indexOf(e);
      if (idx !== -1) {
        const last = this.enemies.pop();
        if (idx < this.enemies.length && last) {
          this.enemies[idx] = last;
        }
      }

      this.runKills += 1;
      const save = SaveManager.getInstance();
      save.recordKill(1);
      this.runScore += e.goldValue * 10;
      this.spawnParticles(e.x, e.y, e.color, e.type === 'boss' || e.type === 'rival' ? 30 : 8);

      if (e.type === 'rival') {
        save.addPvpTrophies(15, 1);
        this.screenShake = Math.max(this.screenShake, 12);
        AudioManager.getInstance().playExplosion();
        const elimMsg =
          I18n.getLang() === 'tr'
            ? `⚔️ ${e.rivalName} ELENDİ! (+15 🏆)`
            : `⚔️ ${e.rivalName} ELIMINATED! (+15 🏆)`;
        this.spawnFloatingText(e.x, e.y - 34, elimMsg, '#facc15', 1.4);
      }

      if (
        this.gameMode === 'PVP' &&
        (e.type === 'rival' || e.type === 'boss' || e.type === 'tank' || (e.type === 'charger' && Math.random() < 0.35))
      ) {
        this.lootDrops.push({
          x: e.x - 14,
          y: e.y + 10,
          vx: 0,
          vy: 0,
          value: 1,
          xpValue: 22,
          type: 'weapon_pod',
          radius: 12
        });
      }

      this.lootDrops.push({
        x: e.x,
        y: e.y,
        vx: 0,
        vy: 0,
        value: e.goldValue,
        xpValue: e.type === 'boss' ? 80 : e.type === 'rival' ? 45 : 12,
        type: 'gold',
        radius: 7
      });

      if (e.type === 'boss' || e.type === 'rival' || Math.random() < 0.04) {
        this.lootDrops.push({
          x: e.x + 12,
          y: e.y + 8,
          vx: 0,
          vy: 0,
          value: e.type === 'boss' ? 10 : e.type === 'rival' ? 4 : 1,
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
        radius: 48,
        hp: Math.round(3200 * waveScale),
        maxHp: Math.round(3200 * waveScale),
        speed: 96,
        damage: Math.round(38 * waveScale),
        color: '#ef4444',
        goldValue: Math.round(250 + this.currentWave * 45)
      },
      rival: {
        type: 'rival',
        radius: 22,
        hp: Math.round(260 * waveScale),
        maxHp: Math.round(260 * waveScale),
        speed: 170,
        damage: Math.round(16 * waveScale),
        color: '#f59e0b',
        goldValue: Math.round(65 + this.currentWave * 15)
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

  private spawnRivalCommander(slotIdx: number): void {
    const callsigns = [
      'KAEL_X99',
      'VALKYRIE_7',
      'CYBER_SLAYER',
      'NOVA_KING',
      'VOID_HUNTER',
      'APEX_MECH',
      'ZERO_COOL',
      'SHADOW_NYX'
    ];
    const classes: CommanderId[] = ['vanguard', 'valkyrie', 'tesla_engineer', 'void_phantom'];
    const classColors: Record<CommanderId, string> = {
      vanguard: '#38bdf8',
      valkyrie: '#ec4899',
      tesla_engineer: '#a855f7',
      void_phantom: '#f43f5e'
    };

    const rivalClass = classes[(this.currentWave + slotIdx) % classes.length];
    const rivalName = callsigns[(this.currentWave * 3 + slotIdx) % callsigns.length];
    const angle = (slotIdx / 3) * Math.PI * 2 + 0.5;
    const dist = 480;
    const x = Math.max(80, Math.min(this.worldSize - 80, this.player.x + Math.cos(angle) * dist));
    const y = Math.max(80, Math.min(this.worldSize - 80, this.player.y + Math.sin(angle) * dist));

    const save = SaveManager.getInstance();
    const trophyTier = Math.max(0, Math.floor(((save.data.pvpTrophies || 1000) - 1000) / 120));
    const rivalLevel = Math.max(1, this.currentWave * 2 + trophyTier + slotIdx);
    const levelScale = Math.pow(1.16, rivalLevel - 1);

    this.enemies.push({
      id: this.enemyIdCounter++,
      type: 'rival',
      x,
      y,
      radius: 22,
      hp: Math.round(280 * levelScale),
      maxHp: Math.round(280 * levelScale),
      speed: Math.min(240, 165 + rivalLevel * 3),
      damage: Math.round(16 * levelScale),
      color: classColors[rivalClass],
      goldValue: Math.round(80 + rivalLevel * 22),
      slowTimer: 0,
      hitFlash: 0,
      rivalName,
      rivalClass,
      rivalLevel,
      shootTimer: 0.8 + slotIdx * 0.35,
      strafeDir: slotIdx % 2 === 0 ? 1 : -1
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

    const waveBonus = 25 + this.currentWave * 15 + (this.gameMode === 'PVP' ? 60 : 0);
    save.addGold(waveBonus);
    this.waveGoldEarned += waveBonus;
    this.runGoldEarned += waveBonus;

    if (this.gameMode === 'PVP') {
      save.addPvpTrophies(25, 0);
    }

    if (this.currentWave > save.data.highestWave) {
      save.data.highestWave = this.currentWave;
    }
    if (this.runScore > save.data.highScore) {
      save.data.highScore = this.runScore;
    }
    save.save();

    this.tempAdSpeedWave = false;
    AudioManager.getInstance().playWaveComplete();

    if (this.gameMode === 'PVP') {
      // ZERO-PAUSE REAL-TIME PVP ROYALE WAVE PROGRESSION: Never open Workshop modal in PVP!
      this.currentWave += 1;
      const isBossWave = this.currentWave % 5 === 0;
      this.waveDuration = isBossWave ? 45 : Math.min(40, 22 + this.currentWave * 2);
      this.waveTimer = this.waveDuration;
      this.waveGoldEarned = 0;
      this.bossElapsedTime = 0;
      this.bossRageStage = 0;

      // Heal 35% HP & auto-merge weapons on the fly
      this.player.hp = Math.min(this.player.maxHp, this.player.hp + Math.round(this.player.maxHp * 0.35));
      this.weapons.autoMergeAll();

      // Replenish Rival Commanders up to 3 active in the arena
      const currentRivals = this.enemies.filter((e) => e.type === 'rival').length;
      for (let r = currentRivals; r < 3; r++) {
        this.spawnRivalCommander(r);
      }

      if (isBossWave) {
        this.spawnEnemy('boss');
      }

      this.spawnParticles(this.player.x, this.player.y, '#facc15', 28);
      const roundMsg =
        I18n.getLang() === 'tr'
          ? `⚔️ PVP RAUNT ${this.currentWave}! (+25 🏆 & +${waveBonus}🪙)`
          : `⚔️ PVP ROUND ${this.currentWave}! (+25 🏆 & +${waveBonus}🪙)`;
      this.spawnFloatingText(this.player.x, this.player.y - 42, roundMsg, '#facc15', 1.45);
      this.onHudUpdate?.();
      return;
    }

    this.state = 'SHOP';
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
    // 1. Render the 3D WebGL Arena Scene via Three.js
    this.renderer3d.renderScene({
      player: this.player,
      equippedWeapons: this.weapons.equipped,
      enemies: this.enemies,
      projectiles: this.projectiles,
      lootDrops: this.lootDrops,
      frostRings: this.frostRings,
      lightningBolts: this.lightningBolts,
      particles: this.particles,
      screenShake: this.screenShake,
      bossRageStage: this.bossRageStage
    });

    // 2. Render Crisp 2D Screen-Space HUD Overlay (Health bars, Floating Damage, Boss Banner, Virtual Joystick)
    const ctx = this.ctx;
    const w = this.canvas.width;
    const h = this.canvas.height;

    ctx.clearRect(0, 0, w, h);

    let activeBoss: Enemy | null = null;
    let rivalsAlive = 0;

    // Projected Enemy Health Bars & Rival Callsign Nameplates
    for (let i = 0; i < this.enemies.length; i++) {
      const e = this.enemies[i];
      if (e.type === 'boss') activeBoss = e;
      if (e.type === 'rival') rivalsAlive += 1;

      if (e.hp < e.maxHp || e.type === 'boss' || e.type === 'rival') {
        const heightOff = e.type === 'rival' ? 68 : e.radius * 2 + 12;
        const screenPos = this.renderer3d.worldToScreen(e.x, e.y, heightOff);
        if (!screenPos.visible) continue;

        const bw = e.type === 'boss' ? 96 : e.type === 'rival' ? 68 : Math.max(32, e.radius * 2.2);
        const bh = e.type === 'boss' ? 8 : e.type === 'rival' ? 7 : 5;
        const bx = screenPos.x - bw / 2;
        const by = screenPos.y - bh / 2;

        ctx.fillStyle = 'rgba(2, 6, 23, 0.85)';
        ctx.fillRect(bx - 1, by - 1, bw + 2, bh + 2);
        ctx.fillStyle = e.type === 'boss' ? '#f43f5e' : e.type === 'rival' ? '#f59e0b' : '#22c55e';
        ctx.fillRect(bx, by, bw * Math.max(0, e.hp / e.maxHp), bh);

        if (e.type === 'rival' && e.rivalName) {
          ctx.save();
          ctx.font = '700 11px Orbitron, sans-serif';
          ctx.fillStyle = '#facc15';
          ctx.strokeStyle = 'rgba(0,0,0,0.85)';
          ctx.lineWidth = 3;
          ctx.textAlign = 'center';
          const tag = `⚔️ [LVL.${e.rivalLevel || 1}] ${e.rivalName}`;
          ctx.strokeText(tag, screenPos.x, by - 6);
          ctx.fillText(tag, screenPos.x, by - 6);
          ctx.restore();
        }
      }
    }

    // PVP Royale Status Banner (Positioned cleanly below Top HUD & Boss Bar)
    if (this.gameMode === 'PVP' && this.state === 'PLAYING') {
      const trophies = SaveManager.getInstance().data.pvpTrophies || 1000;
      const pwrLvl = SaveManager.getInstance().getCommanderPowerLevel();
      const pvpY = activeBoss ? 148 : 112;
      ctx.save();
      ctx.font = '700 12px Orbitron, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillStyle = 'rgba(15, 23, 42, 0.88)';
      ctx.strokeStyle = '#f59e0b';
      ctx.lineWidth = 1.5;
      const boxW = Math.min(440, w * 0.92);
      ctx.fillRect((w - boxW) / 2, pvpY, boxW, 24);
      ctx.strokeRect((w - boxW) / 2, pvpY, boxW, 24);
      ctx.fillStyle = '#facc15';
      const pvpText =
        I18n.getLang() === 'tr'
          ? `⚔️ PVP • GÜÇ SV.${pwrLvl} • RAKİP: ${rivalsAlive}/3 • 🏆 ${trophies}`
          : `⚔️ PVP • PWR LVL.${pwrLvl} • RIVALS: ${rivalsAlive}/3 • 🏆 ${trophies}`;
      ctx.fillText(pvpText, w / 2, pvpY + 16);
      ctx.restore();
    }

    // Prominent Top Boss Dreadnought Health Bar + Rage Stage + 34s Detonation Timer (Moved down to Y=114 so it is never covered by Top HUD!)
    if (activeBoss && this.state === 'PLAYING') {
      const barW = Math.min(580, w * 0.88);
      const barH = 26;
      const barX = (w - barW) / 2;
      const barY = 114;
      const pct = Math.max(0, activeBoss.hp / activeBoss.maxHp);
      const detLeft = Math.max(0, 34 - this.bossElapsedTime);

      ctx.save();
      ctx.fillStyle = 'rgba(15, 23, 42, 0.95)';
      ctx.strokeStyle = detLeft < 10 ? '#facc15' : '#f43f5e';
      ctx.lineWidth = 2.5;
      ctx.fillRect(barX, barY, barW, barH);
      ctx.strokeRect(barX, barY, barW, barH);

      ctx.fillStyle = this.bossRageStage > 0 ? '#f97316' : '#e11d48';
      ctx.fillRect(barX + 2, barY + 2, (barW - 4) * pct, barH - 4);

      ctx.font = '700 12px Orbitron, sans-serif';
      ctx.fillStyle = '#ffffff';
      ctx.textAlign = 'center';
      const rageBadge = this.bossRageStage > 0 ? ` • 🔥 RAGE ${this.bossRageStage}/3` : '';
      const bossLabel =
        I18n.getLang() === 'tr'
          ? `⚠️ BOSS (HP ${Math.ceil(activeBoss.hp)}/${activeBoss.maxHp})${rageBadge} • 💥 İNFİLAK: ${detLeft.toFixed(1)}sn`
          : `⚠️ BOSS (HP ${Math.ceil(activeBoss.hp)}/${activeBoss.maxHp})${rageBadge} • 💥 DETONATION: ${detLeft.toFixed(1)}s`;
      ctx.fillText(bossLabel, w / 2, barY + 17);
      ctx.restore();
    }

    // Projected 2D Floating Damage / Gold / Crit Numbers
    for (let i = 0; i < this.floatingTexts.length; i++) {
      const ft = this.floatingTexts[i];
      const lift = (1 - ft.alpha) * 42;
      const screenPos = this.renderer3d.worldToScreen(ft.x, ft.y, 28 + lift);
      if (!screenPos.visible) continue;

      ctx.save();
      ctx.globalAlpha = Math.max(0, ft.alpha);
      ctx.font = `700 ${Math.round(15 * ft.scale)}px Orbitron, sans-serif`;
      ctx.fillStyle = ft.color;
      ctx.strokeStyle = 'rgba(0,0,0,0.75)';
      ctx.lineWidth = 3;
      ctx.textAlign = 'center';
      ctx.strokeText(ft.text, screenPos.x, screenPos.y);
      ctx.fillText(ft.text, screenPos.x, screenPos.y);
      ctx.restore();
    }

    // Floating Dynamic Virtual Joystick on Screen Space
    if (this.joyActive && this.state === 'PLAYING') {
      this.drawVirtualJoystick(ctx);
    }
  }

  private drawVirtualJoystick(ctx: CanvasRenderingContext2D): void {
    const pdx = this.joyCurrentX - this.joyOriginX;
    const pdy = this.joyCurrentY - this.joyOriginY;
    const dist = Math.hypot(pdx, pdy);
    const clampedDist = Math.min(dist, this.JOY_MAX_RADIUS);
    const angle = Math.atan2(pdy, pdx);
    const knobX = this.joyOriginX + (dist > 0 ? Math.cos(angle) * clampedDist : 0);
    const knobY = this.joyOriginY + (dist > 0 ? Math.sin(angle) * clampedDist : 0);

    ctx.save();
    ctx.beginPath();
    ctx.arc(this.joyOriginX, this.joyOriginY, this.JOY_MAX_RADIUS, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(56, 189, 248, 0.12)';
    ctx.fill();
    ctx.lineWidth = 2.5;
    ctx.strokeStyle = 'rgba(56, 189, 248, 0.55)';
    ctx.stroke();

    if (dist > this.JOY_DEADZONE) {
      ctx.beginPath();
      ctx.moveTo(this.joyOriginX, this.joyOriginY);
      ctx.lineTo(knobX, knobY);
      ctx.strokeStyle = 'rgba(56, 189, 248, 0.35)';
      ctx.lineWidth = 2;
      ctx.stroke();
    }

    ctx.beginPath();
    ctx.arc(knobX, knobY, 20, 0, Math.PI * 2);
    ctx.fillStyle = '#38bdf8';
    ctx.shadowColor = '#38bdf8';
    ctx.shadowBlur = 12;
    ctx.fill();
    ctx.lineWidth = 2.5;
    ctx.strokeStyle = '#ffffff';
    ctx.stroke();
    ctx.restore();
  }
}
