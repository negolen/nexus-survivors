import * as THREE from 'three';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import { ArenaThemeId, CommanderId, SaveManager } from '../core/SaveManager';
import type {
  Enemy,
  FrostRing,
  LightningBolt,
  LootDrop,
  Particle,
  Projectile
} from './GameEngine';
import { TIER_COLORS, WeaponArchetypeId, WeaponInstance } from './WeaponSystem';

export type ConcreteArenaTheme = 'cyber_nebula' | 'solar_inferno' | 'cryo_glacier' | 'emerald_matrix';

interface ThemeColorProfile {
  fogColor: number;
  hemiSky: number;
  hemiGround: number;
  accentColor: number;
  floorColor: number;
  floorEmissive: number;
}

const THEME_PROFILES: Record<ConcreteArenaTheme, ThemeColorProfile> = {
  cyber_nebula: {
    fogColor: 0x1a1f4a,
    hemiSky: 0x93c5fd,
    hemiGround: 0x0f172a,
    accentColor: 0x38bdf8,
    floorColor: 0xb8c8ff,
    floorEmissive: 0x16305e
  },
  solar_inferno: {
    fogColor: 0x2b0a07,
    hemiSky: 0xfb923c,
    hemiGround: 0x330906,
    accentColor: 0xf97316,
    floorColor: 0xfecaca,
    floorEmissive: 0x5e180d
  },
  cryo_glacier: {
    fogColor: 0x072233,
    hemiSky: 0x67e8f9,
    hemiGround: 0x082b3d,
    accentColor: 0x22d3ee,
    floorColor: 0xa5f3fc,
    floorEmissive: 0x0c3b52
  },
  emerald_matrix: {
    fogColor: 0x041f11,
    hemiSky: 0x4ade80,
    hemiGround: 0x052e18,
    accentColor: 0x22c55e,
    floorColor: 0x86efac,
    floorEmissive: 0x0a421e
  }
};

const CMD_PALETTE: Record<CommanderId, { primary: number; glow: number }> = {
  vanguard: { primary: 0x0ea5e9, glow: 0x38bdf8 },
  valkyrie: { primary: 0xec4899, glow: 0x22d3ee },
  tesla_engineer: { primary: 0xa855f7, glow: 0xfacc15 },
  void_phantom: { primary: 0xe11d48, glow: 0xf43f5e }
};

const TIER_THREE_COLORS = TIER_COLORS.map((c) => new THREE.Color(c));
const DEFAULT_TIER_COLOR = new THREE.Color('#38bdf8');

interface PodEntry {
  root: THREE.Group;
  archetypeGroups: Record<WeaponArchetypeId, THREE.Group>;
  tierWings: THREE.Group;
  tierRing: THREE.Mesh;
  tierCrown: THREE.Group;
  primaryMat: THREE.MeshPhysicalMaterial;
  emissiveMat: THREE.MeshBasicMaterial;
  glowSprite: THREE.Sprite;
}

interface EnemyMeshEntry {
  type: Enemy['type'];
  group: THREE.Group;
  mainMat: THREE.MeshPhysicalMaterial;
  accentMat: THREE.MeshBasicMaterial;
  legs?: THREE.Mesh[];
  abdomen?: THREE.Mesh;
  flames?: THREE.Mesh[];
  turret?: THREE.Group;
  wheels?: THREE.Mesh[];
  ringX?: THREE.Mesh;
  ringY?: THREE.Mesh;
  ringZ?: THREE.Mesh;
  shieldsGroup?: THREE.Group;
  innerStar?: THREE.Mesh;
}

export class Renderer3D {
  private renderer: THREE.WebGLRenderer;
  private scene: THREE.Scene;
  public camera: THREE.PerspectiveCamera;

  private readonly worldSize: number;
  private camTarget = new THREE.Vector3(1100, 0, 1100);
  private projVec = new THREE.Vector3();

  // Procedural PBR & Glow Textures
  private armorBumpTex: THREE.CanvasTexture;
  private floorHexTex: THREE.CanvasTexture;
  private glowSpriteTex: THREE.CanvasTexture;

  // Environment Animated Elements
  private dirLight!: THREE.DirectionalLight;
  private backLight!: THREE.DirectionalLight;
  private hemiLight!: THREE.HemisphereLight;
  private floorMat!: THREE.MeshPhysicalMaterial;
  private currentActiveTheme: ConcreteArenaTheme | null = null;
  private themeTextureCache = new Map<ConcreteArenaTheme, { sky: THREE.CanvasTexture; floor: THREE.CanvasTexture }>();
  private centralObelisk!: THREE.Mesh;
  private centralGyroRing1!: THREE.Mesh;
  private centralGyroRing2!: THREE.Mesh;
  private centralCrystalShards: THREE.Mesh[] = [];
  private centralBeamMesh!: THREE.Mesh;
  private reactorRings: THREE.Mesh[] = [];
  private reactorPulseRing!: THREE.Mesh;
  private reactorCoreMat!: THREE.MeshBasicMaterial;
  private barrierBeamMat!: THREE.MeshBasicMaterial;
  private pylonRings: THREE.Mesh[] = [];
  private holoSkyscraperRings: THREE.Mesh[] = [];
  private dustPoints!: THREE.Points;

  // Player 3D Mech Hierarchy
  private playerGroup = new THREE.Group();
  private playerChassisMat!: THREE.MeshPhysicalMaterial;
  private playerSecondaryMat!: THREE.MeshPhysicalMaterial;
  private playerGlowMat!: THREE.MeshBasicMaterial;
  private playerHaloSprite!: THREE.Sprite;
  private playerTurretGroup = new THREE.Group();
  private playerThrusterMesh!: THREE.Mesh;
  private playerLight!: THREE.PointLight;
  private commanderAttachments: Record<CommanderId, THREE.Group> = {
    vanguard: new THREE.Group(),
    valkyrie: new THREE.Group(),
    tesla_engineer: new THREE.Group(),
    void_phantom: new THREE.Group()
  };

  // 6 Orbiting Multi-Part Weapon Drones
  private weaponPods: PodEntry[] = [];

  // Shared High-Poly Geometries
  private geoLoot = new THREE.OctahedronGeometry(9.5, 0);
  private geoProjSphere = new THREE.SphereGeometry(6.5, 16, 16);
  private geoProjSaw = new THREE.CylinderGeometry(16, 16, 3, 24);
  private geoParticle = new THREE.DodecahedronGeometry(4.5, 0);
  private geoFrostRing = new THREE.RingGeometry(0.88, 1.0, 48);

  // Active Entity Pools / Maps
  private enemyMeshes = new Map<number, EnemyMeshEntry>();
  private lootPool: THREE.Mesh[] = [];
  private projPool: THREE.Mesh[] = [];
  private particlePool: THREE.Mesh[] = [];
  private frostPool: THREE.Mesh[] = [];
  private lightningLines: THREE.Line[] = [];
  private lightningPool: THREE.Line[] = [];
  private activeEnemyIds = new Set<number>();

  constructor(overlayCanvas: HTMLCanvasElement, worldSize: number) {
    this.worldSize = worldSize;

    // 1. WebGLRenderer with ACES Filmic Tone Mapping & Real-Time PCFSoftShadowMap
    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
      powerPreference: 'high-performance'
    });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.28;
    this.renderer.domElement.id = 'webgl-canvas';
    overlayCanvas.parentElement?.insertBefore(this.renderer.domElement, overlayCanvas);

    // 2. Scene, Studio PBR Environment Reflection Cubemap (PMREM + RoomEnvironment) & Fog
    this.scene = new THREE.Scene();
    this.scene.fog = new THREE.FogExp2(0x1a1f4a, 0.00022);

    const pmremGenerator = new THREE.PMREMGenerator(this.renderer);
    pmremGenerator.compileEquirectangularShader();
    this.scene.environment = pmremGenerator.fromScene(new RoomEnvironment(), 0.04).texture;

    // 3. Generate Procedural PBR Bump/Roughness/Glow Textures
    this.armorBumpTex = this.createSciFiArmorTexture();
    this.glowSpriteTex = this.createGlowSpriteTexture();
    const initTex = this.getThemeTextures('cyber_nebula');
    this.floorHexTex = initTex.floor;
    this.scene.background = initTex.sky;

    // 4. Perspective Camera
    this.camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 10, 7000);
    this.camera.position.set(worldSize / 2, 530, worldSize / 2 + 430);
    this.camera.lookAt(worldSize / 2, 0, worldSize / 2);

    this.geoFrostRing.rotateX(-Math.PI / 2);

    // 5. Cinematic Studio Lighting + Dynamic Following Shadow Frustum
    this.hemiLight = new THREE.HemisphereLight(0x93c5fd, 0x0f172a, 1.4);
    this.scene.add(this.hemiLight);

    this.dirLight = new THREE.DirectionalLight(0xf8fafc, 3.2);
    this.dirLight.position.set(worldSize / 2 + 320, 780, worldSize / 2 + 260);
    this.dirLight.castShadow = true;
    this.dirLight.shadow.mapSize.set(2048, 2048);
    this.dirLight.shadow.camera.left = -620;
    this.dirLight.shadow.camera.right = 620;
    this.dirLight.shadow.camera.top = 620;
    this.dirLight.shadow.camera.bottom = -620;
    this.dirLight.shadow.camera.near = 100;
    this.dirLight.shadow.camera.far = 1600;
    this.dirLight.shadow.bias = -0.0005;
    this.scene.add(this.dirLight);
    this.scene.add(this.dirLight.target);

    this.backLight = new THREE.DirectionalLight(0xa855f7, 1.6);
    this.backLight.position.set(worldSize / 2 - 550, 650, worldSize / 2 - 550);
    this.scene.add(this.backLight);

    this.buildCyberMegacityAndArena();
    this.buildPlayerMech();
    this.buildWeaponDronePods();

    this.buildThemeProps();
    this.randomizeTheme();
    this.resize(window.innerWidth, window.innerHeight);
  }

  /** Mobile / portrait screens get a wider, zoomed-out camera so more of the arena is visible. */
  private camZoom = 1;

  public resize(width: number, height: number): void {
    this.camera.aspect = width / Math.max(1, height);
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(width, height);

    const aspect = width / Math.max(1, height);
    const shortSide = Math.min(width, height);
    let zoom = 1;
    if (aspect < 1) zoom = aspect < 0.62 ? 1.75 : 1.55; // portrait phones / tablets
    else if (shortSide < 520) zoom = 1.4; // landscape phones
    else if (width < 1024) zoom = 1.15; // small tablets / laptops
    this.camZoom = zoom;

    // Widen the shadow frustum so zoomed-out views keep crisp shadows at the edges
    const s = 620 * zoom;
    const cam = this.dirLight.shadow.camera;
    cam.left = -s;
    cam.right = s;
    cam.top = s;
    cam.bottom = -s;
    cam.far = 1600 * zoom;
    cam.updateProjectionMatrix();
  }

  private themeAccent = 0x38bdf8;
  private themeProps: Partial<Record<ConcreteArenaTheme, THREE.Group>> = {};

  /** Picks a random arena theme (different from the current one). The player never has to choose. */
  public randomizeTheme(): void {
    const all: ConcreteArenaTheme[] = ['cyber_nebula', 'solar_inferno', 'cryo_glacier', 'emerald_matrix'];
    const options = all.filter((t) => t !== this.currentActiveTheme);
    this.setTheme(options[Math.floor(Math.random() * options.length)]);
  }

  private setTheme(concrete: ConcreteArenaTheme): void {
    if (this.currentActiveTheme === concrete) return;
    this.currentActiveTheme = concrete;

    const textures = this.getThemeTextures(concrete);
    const cfg = THEME_PROFILES[concrete];
    this.themeAccent = cfg.accentColor;

    this.scene.background = textures.sky;
    if (this.scene.fog instanceof THREE.FogExp2) {
      this.scene.fog.color.setHex(cfg.fogColor);
    }
    this.hemiLight.color.setHex(cfg.hemiSky);
    this.hemiLight.groundColor.setHex(cfg.hemiGround);

    this.floorMat.map = textures.floor;
    this.floorMat.bumpMap = textures.floor;
    this.floorMat.emissiveMap = textures.floor;
    this.floorMat.color.setHex(cfg.floorColor);
    this.floorMat.emissive.setHex(cfg.floorEmissive);
    this.floorMat.needsUpdate = true;

    this.barrierBeamMat.color.setHex(cfg.accentColor);
    this.reactorCoreMat.color.setHex(cfg.accentColor);
    (this.dustPoints.material as THREE.PointsMaterial).color.setHex(cfg.accentColor);

    if (this.centralBeamMesh) {
      (this.centralBeamMesh.material as THREE.MeshBasicMaterial).color.setHex(cfg.accentColor);
    }
    if (this.centralGyroRing1) {
      (this.centralGyroRing1.material as THREE.MeshBasicMaterial).color.setHex(cfg.accentColor);
    }
    if (this.centralObelisk && (this.centralObelisk.material as THREE.MeshPhysicalMaterial)) {
      (this.centralObelisk.material as THREE.MeshPhysicalMaterial).emissive.setHex(cfg.accentColor);
    }

    for (const key of Object.keys(this.themeProps) as ConcreteArenaTheme[]) {
      this.themeProps[key]!.visible = key === concrete;
    }
  }

  private createSciFiArmorTexture(): THREE.CanvasTexture {
    const canvas = document.createElement('canvas');
    canvas.width = 256;
    canvas.height = 256;
    const ctx = canvas.getContext('2d')!;

    ctx.fillStyle = '#808080';
    ctx.fillRect(0, 0, 256, 256);

    // Subtle carbon-fiber diagonal weave
    ctx.fillStyle = '#707070';
    for (let y = 0; y < 256; y += 8) {
      for (let x = 0; x < 256; x += 8) {
        if ((x + y) % 16 === 0) ctx.fillRect(x, y, 4, 4);
      }
    }

    // Sci-Fi beveled armor panel seams & rivets
    ctx.strokeStyle = '#303030';
    ctx.lineWidth = 3;
    ctx.strokeRect(6, 6, 244, 244);
    ctx.beginPath();
    ctx.moveTo(0, 128);
    ctx.lineTo(256, 128);
    ctx.moveTo(128, 0);
    ctx.lineTo(128, 256);
    ctx.stroke();

    ctx.strokeStyle = '#b8b8b8';
    ctx.lineWidth = 1.5;
    ctx.strokeRect(10, 10, 236, 236);

    const tex = new THREE.CanvasTexture(canvas);
    tex.wrapS = THREE.RepeatWrapping;
    tex.wrapT = THREE.RepeatWrapping;
    tex.repeat.set(2, 2);
    return tex;
  }

  private getThemeTextures(theme: ConcreteArenaTheme): { sky: THREE.CanvasTexture; floor: THREE.CanvasTexture } {
    const cached = this.themeTextureCache.get(theme);
    if (cached) return cached;

    const sky = this.generateSkyTexture(theme);
    const floor = this.generateFloorTexture(theme);
    const result = { sky, floor };
    this.themeTextureCache.set(theme, result);
    return result;
  }

  private generateSkyTexture(theme: ConcreteArenaTheme): THREE.CanvasTexture {
    const canvas = document.createElement('canvas');
    canvas.width = 1024;
    canvas.height = 1024;
    const ctx = canvas.getContext('2d')!;

    // 1. Base atmospheric vertical gradient
    const grad = ctx.createLinearGradient(0, 0, 0, 1024);
    if (theme === 'solar_inferno') {
      grad.addColorStop(0, '#150303');
      grad.addColorStop(0.35, '#450d06');
      grad.addColorStop(0.68, '#8c2808');
      grad.addColorStop(0.9, '#dc5c12');
      grad.addColorStop(1, '#fba338');
    } else if (theme === 'cryo_glacier') {
      grad.addColorStop(0, '#020b14');
      grad.addColorStop(0.35, '#052738');
      grad.addColorStop(0.65, '#08536b');
      grad.addColorStop(0.88, '#148ea8');
      grad.addColorStop(1, '#67e8f9');
    } else if (theme === 'emerald_matrix') {
      grad.addColorStop(0, '#010f08');
      grad.addColorStop(0.35, '#03331e');
      grad.addColorStop(0.68, '#065f3e');
      grad.addColorStop(0.9, '#0ea367');
      grad.addColorStop(1, '#4ade80');
    } else {
      // cyber_nebula
      grad.addColorStop(0, '#070b28');
      grad.addColorStop(0.32, '#241047');
      grad.addColorStop(0.65, '#6b1c78');
      grad.addColorStop(0.88, '#b83280');
      grad.addColorStop(1, '#f97316');
    }
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 1024, 1024);

    // 2. Multi-Layer Cosmic Dust Clouds & Luminous Nebulae
    let blobs: Array<[number, number, number, string]>;
    if (theme === 'solar_inferno') {
      blobs = [
        [320, 260, 360, 'rgba(249,115,22,0.48)'],
        [780, 220, 380, 'rgba(239,68,68,0.45)'],
        [512, 600, 420, 'rgba(251,146,60,0.38)'],
        [180, 720, 320, 'rgba(220,38,38,0.32)'],
        [880, 750, 300, 'rgba(245,158,11,0.36)']
      ];
    } else if (theme === 'cryo_glacier') {
      blobs = [
        [240, 260, 380, 'rgba(34,211,238,0.48)'],
        [740, 200, 400, 'rgba(6,182,212,0.44)'],
        [512, 580, 420, 'rgba(56,189,248,0.36)'],
        [880, 720, 320, 'rgba(165,243,252,0.32)'],
        [150, 740, 300, 'rgba(14,165,233,0.35)']
      ];
    } else if (theme === 'emerald_matrix') {
      blobs = [
        [260, 280, 380, 'rgba(34,197,94,0.48)'],
        [780, 220, 400, 'rgba(16,185,129,0.44)'],
        [512, 600, 420, 'rgba(74,222,128,0.36)'],
        [880, 700, 320, 'rgba(5,150,105,0.38)'],
        [160, 740, 300, 'rgba(52,211,153,0.32)']
      ];
    } else {
      blobs = [
        [240, 260, 380, 'rgba(56,189,248,0.42)'],
        [780, 200, 420, 'rgba(168,85,247,0.46)'],
        [512, 580, 440, 'rgba(236,72,153,0.36)'],
        [160, 720, 320, 'rgba(34,211,238,0.32)'],
        [880, 740, 320, 'rgba(192,132,252,0.35)']
      ];
    }

    for (const [bx, by, br, col] of blobs) {
      const g = ctx.createRadialGradient(bx, by, 15, bx, by, br);
      g.addColorStop(0, col);
      g.addColorStop(0.65, col.replace(/[\d\.]+\)$/, '0.14)'));
      g.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, 1024, 1024);
    }

    // 3. Theme-Specific Hero Features
    if (theme === 'solar_inferno') {
      ctx.strokeStyle = 'rgba(254,240,138,0.38)';
      ctx.lineWidth = 14;
      ctx.beginPath();
      ctx.arc(512, 950, 420, Math.PI * 1.15, Math.PI * 1.85);
      ctx.stroke();
      ctx.strokeStyle = 'rgba(249,115,22,0.55)';
      ctx.lineWidth = 6;
      ctx.beginPath();
      ctx.arc(512, 950, 420, Math.PI * 1.15, Math.PI * 1.85);
      ctx.stroke();
    } else if (theme === 'cryo_glacier') {
      for (let j = 0; j < 3; j++) {
        ctx.strokeStyle = j === 1 ? 'rgba(34,211,238,0.35)' : 'rgba(74,222,128,0.22)';
        ctx.lineWidth = 18 + j * 8;
        ctx.beginPath();
        ctx.moveTo(0, 240 + j * 90);
        ctx.bezierCurveTo(340, 160 + j * 80, 680, 320 + j * 90, 1024, 210 + j * 80);
        ctx.stroke();
      }
    } else if (theme === 'emerald_matrix') {
      ctx.fillStyle = '#86efac';
      for (let col = 16; col < 1024; col += 32) {
        const startY = Math.random() * 320;
        const len = 140 + Math.random() * 320;
        for (let y = startY; y < startY + len; y += 12) {
          ctx.globalAlpha = 0.2 + Math.random() * 0.75;
          ctx.fillRect(col, y, 2.5, 6);
        }
      }
    } else {
      ctx.strokeStyle = 'rgba(168,85,247,0.32)';
      ctx.lineWidth = 8;
      ctx.beginPath();
      ctx.ellipse(512, 820, 520, 110, -0.08, 0, Math.PI * 2);
      ctx.stroke();
      ctx.strokeStyle = 'rgba(56,189,248,0.45)';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.ellipse(512, 820, 490, 95, -0.08, 0, Math.PI * 2);
      ctx.stroke();
    }

    // 4. Stellar Field: Glistening Stars with soft halos
    ctx.globalAlpha = 1;
    ctx.fillStyle = theme === 'solar_inferno' ? '#fef08a' : theme === 'emerald_matrix' ? '#86efac' : '#ffffff';
    for (let i = 0; i < 340; i++) {
      const sx = Math.random() * 1024;
      const sy = Math.random() * 850;
      const sz = Math.random() < 0.08 ? 3.2 : Math.random() < 0.25 ? 2.2 : 1.4;
      ctx.globalAlpha = 0.35 + Math.random() * 0.65;
      ctx.fillRect(sx, sy, sz, sz);
      if (sz > 2.5) {
        ctx.fillStyle = 'rgba(255,255,255,0.4)';
        ctx.fillRect(sx - 2, sy, sz + 4, 1);
        ctx.fillRect(sx, sy - 2, 1, sz + 4);
        ctx.fillStyle = theme === 'solar_inferno' ? '#fef08a' : '#ffffff';
      }
    }
    ctx.globalAlpha = 1;

    const tex = new THREE.CanvasTexture(canvas);
    tex.colorSpace = THREE.SRGBColorSpace;
    return tex;
  }

  private generateFloorTexture(theme: ConcreteArenaTheme): THREE.CanvasTexture {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 512;
    const ctx = canvas.getContext('2d')!;

    let baseBg: string;
    let plate1: string;
    let plate2: string;
    let glowLine1: string;
    let glowLine2: string;
    let nodeColor: string;

    if (theme === 'solar_inferno') {
      baseBg = '#1c0a08';
      plate1 = '#30130f';
      plate2 = '#240d0a';
      glowLine1 = '#f97316';
      glowLine2 = '#ef4444';
      nodeColor = '#fef08a';
    } else if (theme === 'cryo_glacier') {
      baseBg = '#0d2030';
      plate1 = '#14334a';
      plate2 = '#0f283a';
      glowLine1 = '#22d3ee';
      glowLine2 = '#06b6d4';
      nodeColor = '#e0f2fe';
    } else if (theme === 'emerald_matrix') {
      baseBg = '#061d10';
      plate1 = '#0b331c';
      plate2 = '#072614';
      glowLine1 = '#22c55e';
      glowLine2 = '#10b981';
      nodeColor = '#86efac';
    } else {
      // cyber_nebula
      baseBg = '#1b2b4a';
      plate1 = '#27406b';
      plate2 = '#1e3358';
      glowLine1 = '#38bdf8';
      glowLine2 = '#a855f7';
      nodeColor = '#facc15';
    }

    ctx.fillStyle = baseBg;
    ctx.fillRect(0, 0, 512, 512);

    const step = 64;
    for (let x = 0; x < 512; x += step) {
      for (let y = 0; y < 512; y += step) {
        ctx.fillStyle = (x / step + y / step) % 2 === 0 ? plate1 : plate2;
        ctx.fillRect(x + 4, y + 4, step - 8, step - 8);
      }
    }

    ctx.shadowColor = glowLine1;
    ctx.shadowBlur = 8;
    ctx.strokeStyle = glowLine1;
    ctx.lineWidth = 2.5;
    for (let i = 0; i <= 512; i += step * 2) {
      ctx.beginPath();
      ctx.moveTo(i, 0);
      ctx.lineTo(i, 512);
      ctx.moveTo(0, i);
      ctx.lineTo(512, i);
      ctx.stroke();
    }

    ctx.shadowColor = glowLine2;
    ctx.strokeStyle = glowLine2;
    ctx.lineWidth = 2;
    for (let x = 0; x < 512; x += step * 2) {
      for (let y = 0; y < 512; y += step * 2) {
        ctx.beginPath();
        ctx.moveTo(x + 14, y + 14);
        ctx.lineTo(x + 50, y + 14);
        ctx.lineTo(x + 50, y + 50);
        ctx.stroke();

        ctx.fillStyle = nodeColor;
        ctx.beginPath();
        ctx.arc(x + 14, y + 14, 3, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    ctx.shadowBlur = 0;

    const tex = new THREE.CanvasTexture(canvas);
    tex.wrapS = THREE.RepeatWrapping;
    tex.wrapT = THREE.RepeatWrapping;
    tex.repeat.set(28, 28);
    return tex;
  }

  private createGlowSpriteTexture(): THREE.CanvasTexture {
    const canvas = document.createElement('canvas');
    canvas.width = 128;
    canvas.height = 128;
    const ctx = canvas.getContext('2d')!;

    const grad = ctx.createRadialGradient(64, 64, 2, 64, 64, 64);
    grad.addColorStop(0, 'rgba(255, 255, 255, 1)');
    grad.addColorStop(0.28, 'rgba(56, 189, 248, 0.65)');
    grad.addColorStop(0.65, 'rgba(56, 189, 248, 0.18)');
    grad.addColorStop(1, 'rgba(0, 0, 0, 0)');

    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 128, 128);

    return new THREE.CanvasTexture(canvas);
  }

  private enableShadowsRecursive(obj: THREE.Object3D): void {
    obj.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
  }

  private buildCyberMegacityAndArena(): void {
    const half = this.worldSize / 2;

    // 1. Deep-Space Starfield (1,600 stars) & Floating Cyber Dust
    const starPositions = new Float32Array(1600 * 3);
    for (let i = 0; i < 1600; i++) {
      starPositions[i * 3] = half + (Math.random() - 0.5) * 5600;
      starPositions[i * 3 + 1] = -300 + Math.random() * 1400;
      starPositions[i * 3 + 2] = half + (Math.random() - 0.5) * 5600;
    }
    const starGeo = new THREE.BufferGeometry();
    starGeo.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
    const starMat = new THREE.PointsMaterial({ color: 0x93c5fd, size: 6, transparent: true, opacity: 0.75 });
    this.scene.add(new THREE.Points(starGeo, starMat));

    const dustPositions = new Float32Array(260 * 3);
    for (let i = 0; i < 260; i++) {
      dustPositions[i * 3] = Math.random() * this.worldSize;
      dustPositions[i * 3 + 1] = 8 + Math.random() * 140;
      dustPositions[i * 3 + 2] = Math.random() * this.worldSize;
    }
    const dustGeo = new THREE.BufferGeometry();
    dustGeo.setAttribute('position', new THREE.BufferAttribute(dustPositions, 3));
    const dustMat = new THREE.PointsMaterial({ color: 0x38bdf8, size: 4.5, transparent: true, opacity: 0.65 });
    this.dustPoints = new THREE.Points(dustGeo, dustMat);
    this.scene.add(this.dustPoints);

    // 2. Photorealistic PBR Metallic Cyber Floor Plane with Bump & Roughness Maps + Shadow Receiving
    const floorGeo = new THREE.PlaneGeometry(this.worldSize + 2400, this.worldSize + 2400);
    floorGeo.rotateX(-Math.PI / 2);
    this.floorMat = new THREE.MeshPhysicalMaterial({
      color: 0xb8c8ff,
      map: this.floorHexTex,
      bumpMap: this.floorHexTex,
      bumpScale: 1.2,
      emissive: 0x16305e,
      emissiveMap: this.floorHexTex,
      emissiveIntensity: 0.55,
      metalness: 0.55,
      roughness: 0.38,
      clearcoat: 0.4,
      clearcoatRoughness: 0.25
    });
    const floorMesh = new THREE.Mesh(floorGeo, this.floorMat);
    floorMesh.position.set(half, -0.5, half);
    floorMesh.receiveShadow = true;
    this.scene.add(floorMesh);

    const gridFine = new THREE.GridHelper(this.worldSize, 44, 0x1e293b, 0x0f172a);
    gridFine.position.set(half, 0.15, half);
    const gridMajor = new THREE.GridHelper(this.worldSize, 11, 0x38bdf8, 0x1d4ed8);
    gridMajor.position.set(half, 0.3, half);
    this.scene.add(gridFine, gridMajor);

    // 3. Central Quantum Nexus Spire & Gyro Rings (Replaces flat concentric circles)
    this.reactorCoreMat = new THREE.MeshBasicMaterial({ color: 0x38bdf8 });

    // Hexagonal cyber pedestal on floor
    const pedGeo = new THREE.CylinderGeometry(36, 46, 6, 6);
    const pedMat = new THREE.MeshPhysicalMaterial({
      color: 0x0f172a,
      emissive: 0x0284c7,
      emissiveIntensity: 0.5,
      metalness: 0.9,
      roughness: 0.2
    });
    const pedestal = new THREE.Mesh(pedGeo, pedMat);
    pedestal.position.set(half, 3, half);
    this.scene.add(pedestal);

    // Glowing energy core inside base
    const coreGlow = new THREE.Mesh(new THREE.CylinderGeometry(20, 20, 7, 12), this.reactorCoreMat);
    coreGlow.position.set(half, 3.5, half);
    this.scene.add(coreGlow);

    // Floating Quantum Obelisk Spire (Hovering at Y = 55)
    const obeliskGeo = new THREE.OctahedronGeometry(18, 0);
    obeliskGeo.scale(1, 2.6, 1);
    const obeliskMat = new THREE.MeshPhysicalMaterial({
      color: 0x0284c7,
      emissive: 0x38bdf8,
      emissiveIntensity: 0.75,
      metalness: 0.85,
      roughness: 0.15,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1
    });
    this.centralObelisk = new THREE.Mesh(obeliskGeo, obeliskMat);
    this.centralObelisk.position.set(half, 55, half);
    this.scene.add(this.centralObelisk);

    // 2 Gyroscopic Holographic Energy Rings orbiting the floating obelisk
    const gyroGeo1 = new THREE.TorusGeometry(32, 1.8, 16, 48);
    const gyroMat1 = new THREE.MeshBasicMaterial({ color: 0x38bdf8, transparent: true, opacity: 0.85 });
    this.centralGyroRing1 = new THREE.Mesh(gyroGeo1, gyroMat1);
    this.centralGyroRing1.position.set(half, 55, half);
    this.scene.add(this.centralGyroRing1);

    const gyroGeo2 = new THREE.TorusGeometry(40, 1.6, 16, 48);
    const gyroMat2 = new THREE.MeshBasicMaterial({ color: 0xa855f7, transparent: true, opacity: 0.8 });
    this.centralGyroRing2 = new THREE.Mesh(gyroGeo2, gyroMat2);
    this.centralGyroRing2.position.set(half, 55, half);
    this.scene.add(this.centralGyroRing2);

    // 4 Floating orbiting crystal shards
    const shardGeo = new THREE.OctahedronGeometry(5, 0);
    shardGeo.scale(0.8, 2, 0.8);
    const shardMat = new THREE.MeshBasicMaterial({ color: 0x38bdf8, transparent: true, opacity: 0.9 });
    for (let i = 0; i < 4; i++) {
      const shard = new THREE.Mesh(shardGeo, shardMat);
      this.centralCrystalShards.push(shard);
      this.scene.add(shard);
    }

    // Skyward Quantum Light Pillar
    const beamGeo = new THREE.CylinderGeometry(4, 18, 800, 16, 1, true);
    this.centralBeamMesh = new THREE.Mesh(
      beamGeo,
      new THREE.MeshBasicMaterial({ color: 0x38bdf8, transparent: true, opacity: 0.22, side: THREE.DoubleSide })
    );
    this.centralBeamMesh.position.set(half, 400, half);
    this.scene.add(this.centralBeamMesh);

    // Ground wave pulse ring
    const pulseGeo = new THREE.RingGeometry(18, 24, 32);
    pulseGeo.rotateX(-Math.PI / 2);
    this.reactorPulseRing = new THREE.Mesh(
      pulseGeo,
      new THREE.MeshBasicMaterial({ color: 0x38bdf8, transparent: true, opacity: 0.75, side: THREE.DoubleSide })
    );
    this.reactorPulseRing.position.set(half, 1.5, half);
    this.scene.add(this.reactorPulseRing);

    // 4. Multi-Beam Laser Barrier Walls & Corner Tesla Pylons
    this.barrierBeamMat = new THREE.MeshBasicMaterial({ color: 0x38bdf8 });
    const wallSubMat = new THREE.MeshPhysicalMaterial({
      color: 0x0f172a,
      emissive: 0x0284c7,
      emissiveIntensity: 0.45,
      metalness: 0.9,
      roughness: 0.15,
      clearcoat: 0.7
    });

    const beamHeights = [10, 22, 34];
    for (const bh of beamHeights) {
      const bH = new THREE.BoxGeometry(this.worldSize, 2.2, 2.2);
      const bV = new THREE.BoxGeometry(2.2, 2.2, this.worldSize);
      const n = new THREE.Mesh(bH, this.barrierBeamMat);
      n.position.set(half, bh, 0);
      const s = new THREE.Mesh(bH, this.barrierBeamMat);
      s.position.set(half, bh, this.worldSize);
      const w = new THREE.Mesh(bV, this.barrierBeamMat);
      w.position.set(0, bh, half);
      const e = new THREE.Mesh(bV, this.barrierBeamMat);
      e.position.set(this.worldSize, bh, half);
      this.scene.add(n, s, w, e);
    }

    const pylonGeo = new THREE.CylinderGeometry(20, 28, 125, 16);
    const corners = [
      [0, 0],
      [this.worldSize, 0],
      [0, this.worldSize],
      [this.worldSize, this.worldSize]
    ];
    for (const [cx, cz] of corners) {
      const pylon = new THREE.Mesh(pylonGeo, wallSubMat);
      pylon.position.set(cx, 62.5, cz);
      pylon.castShadow = true;
      this.scene.add(pylon);

      const pRing = new THREE.Mesh(new THREE.TorusGeometry(32, 3, 12, 32), this.barrierBeamMat);
      pRing.rotation.x = Math.PI / 2;
      pRing.position.set(cx, 105, cz);
      this.scene.add(pRing);
      this.pylonRings.push(pRing);
    }

    // 4b. Corner Spawn Portals (enemies & rival commanders enter from here)
    const portalColors = [0xf43f5e, 0xf59e0b, 0xa855f7, 0x22d3ee];
    const portalPad = 95;
    const portalSpots = [
      [portalPad, portalPad],
      [this.worldSize - portalPad, portalPad],
      [this.worldSize - portalPad, this.worldSize - portalPad],
      [portalPad, this.worldSize - portalPad]
    ];
    portalSpots.forEach(([px, pz], idx) => {
      const col = portalColors[idx];
      const ringGeo = new THREE.RingGeometry(38, 48, 40);
      ringGeo.rotateX(-Math.PI / 2);
      const ring = new THREE.Mesh(
        ringGeo,
        new THREE.MeshBasicMaterial({ color: col, transparent: true, opacity: 0.85, side: THREE.DoubleSide })
      );
      ring.position.set(px, 1.4, pz);
      this.scene.add(ring);
      this.reactorRings.push(ring);

      const beam = new THREE.Mesh(
        new THREE.CylinderGeometry(30, 30, 160, 20, 1, true),
        new THREE.MeshBasicMaterial({ color: col, transparent: true, opacity: 0.18, side: THREE.DoubleSide })
      );
      beam.position.set(px, 80, pz);
      this.scene.add(beam);
    });

    // 4c. Glowing holo-crystal clusters scattered across the arena floor (breaks the empty void)
    const crystalGeo = new THREE.OctahedronGeometry(1, 0);
    const crystalCols = [0x38bdf8, 0xa855f7, 0xec4899, 0x22d3ee];
    for (let i = 0; i < 22; i++) {
      const a = (i / 22) * Math.PI * 2 + (i % 3) * 0.4;
      const r = 260 + ((i * 97) % 700);
      const cx = Math.max(160, Math.min(this.worldSize - 160, half + Math.cos(a) * r));
      const cz = Math.max(160, Math.min(this.worldSize - 160, half + Math.sin(a) * r));
      const s = 10 + (i % 4) * 5;
      const crystal = new THREE.Mesh(
        crystalGeo,
        new THREE.MeshBasicMaterial({ color: crystalCols[i % 4], transparent: true, opacity: 0.85 })
      );
      crystal.scale.set(s, s * 2.3, s);
      crystal.position.set(cx, s * 1.4, cz);
      this.scene.add(crystal);
      this.holoSkyscraperRings.push(crystal);
    }

    // 5. 24 Distant Cyber-Skyscraper Monoliths around the Arena Perimeter
    const towerMat = new THREE.MeshPhysicalMaterial({
      color: 0x070b19,
      emissive: 0x0f172a,
      metalness: 0.9,
      roughness: 0.2,
      clearcoat: 0.6
    });
    for (let i = 0; i < 24; i++) {
      const angle = (i / 24) * Math.PI * 2;
      const dist = this.worldSize * 0.82 + (i % 3) * 180;
      const tx = half + Math.cos(angle) * dist;
      const tz = half + Math.sin(angle) * dist;
      const h = 280 + (i % 5) * 110;
      const w = 65 + (i % 3) * 20;

      const tower = new THREE.Mesh(new THREE.BoxGeometry(w, h, w), towerMat);
      tower.position.set(tx, h / 2 - 40, tz);
      this.scene.add(tower);

      const neonColor = i % 2 === 0 ? 0x38bdf8 : 0xa855f7;
      const strip = new THREE.Mesh(
        new THREE.BoxGeometry(w + 4, h * 0.85, 4),
        new THREE.MeshBasicMaterial({ color: neonColor })
      );
      strip.position.set(tx, h / 2 - 40, tz);
      this.scene.add(strip);

      if (i % 3 === 0) {
        const holoRing = new THREE.Mesh(
          new THREE.TorusGeometry(w * 0.85, 3, 8, 24),
          new THREE.MeshBasicMaterial({ color: neonColor, wireframe: true })
        );
        holoRing.rotation.x = Math.PI / 2;
        holoRing.position.set(tx, h - 25, tz);
        this.scene.add(holoRing);
        this.holoSkyscraperRings.push(holoRing);
      }
    }
  }

  private buildPlayerMech(): void {
    this.playerChassisMat = new THREE.MeshPhysicalMaterial({
      color: 0x0ea5e9,
      emissive: 0x0ea5e9,
      emissiveIntensity: 0.35,
      bumpMap: this.armorBumpTex,
      bumpScale: 0.8,
      metalness: 0.88,
      roughness: 0.16,
      clearcoat: 0.9,
      clearcoatRoughness: 0.1
    });
    this.playerSecondaryMat = new THREE.MeshPhysicalMaterial({
      color: 0x1e293b,
      bumpMap: this.armorBumpTex,
      bumpScale: 0.6,
      metalness: 0.92,
      roughness: 0.2,
      clearcoat: 0.7
    });
    this.playerGlowMat = new THREE.MeshBasicMaterial({ color: 0x38bdf8 });

    // Volumetric Additive Bloom Sprite Under/Around Player Core
    const spriteMat = new THREE.SpriteMaterial({
      map: this.glowSpriteTex,
      color: 0x38bdf8,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      transparent: true,
      opacity: 0.75
    });
    this.playerHaloSprite = new THREE.Sprite(spriteMat);
    this.playerHaloSprite.scale.set(85, 85, 1);
    this.playerHaloSprite.position.y = 18;
    this.playerGroup.add(this.playerHaloSprite);

    // Hover Thruster Plume + High-Poly Hover Ring
    const thrusterGeo = new THREE.ConeGeometry(11, 18, 16);
    thrusterGeo.rotateX(Math.PI);
    this.playerThrusterMesh = new THREE.Mesh(thrusterGeo, this.playerGlowMat);
    this.playerThrusterMesh.position.y = 6;
    this.playerGroup.add(this.playerThrusterMesh);

    const ringGeo = new THREE.TorusGeometry(23, 2.4, 16, 36);
    ringGeo.rotateX(Math.PI / 2);
    const ringMesh = new THREE.Mesh(ringGeo, this.playerGlowMat);
    ringMesh.position.y = 8;
    this.playerGroup.add(ringMesh);

    // Smooth High-Poly Armored Lower Chassis
    const lowerHull = new THREE.Mesh(new THREE.CylinderGeometry(16, 20, 12, 16), this.playerSecondaryMat);
    lowerHull.position.y = 13;
    this.playerGroup.add(lowerHull);

    // Upper Rotating Turret Group
    const torso = new THREE.Mesh(new THREE.CylinderGeometry(15, 13, 14, 16), this.playerChassisMat);
    this.playerTurretGroup.add(torso);

    // Chest Arc Reactor Core
    const chestCore = new THREE.Mesh(new THREE.SphereGeometry(6.5, 20, 20), this.playerGlowMat);
    chestCore.position.set(13, 1, 0);
    this.playerTurretGroup.add(chestCore);

    // Contoured Shoulder Pauldrons
    const pauldronGeo = new THREE.SphereGeometry(9.5, 20, 16);
    pauldronGeo.scale(1.15, 0.85, 1.0);
    const pLeft = new THREE.Mesh(pauldronGeo, this.playerChassisMat);
    pLeft.position.set(0, 6, -16);
    const pRight = new THREE.Mesh(pauldronGeo, this.playerChassisMat);
    pRight.position.set(0, 6, 16);
    this.playerTurretGroup.add(pLeft, pRight);

    // Smooth Dome Cyber-Visor Helmet Head
    const head = new THREE.Mesh(new THREE.SphereGeometry(9.2, 24, 24), this.playerSecondaryMat);
    head.position.set(2, 12, 0);
    const visor = new THREE.Mesh(new THREE.CylinderGeometry(9.6, 9.6, 3.8, 20, 1, false, -Math.PI * 0.35, Math.PI * 0.7), this.playerGlowMat);
    visor.rotation.y = Math.PI / 2;
    visor.position.set(2.5, 12, 0);
    this.playerTurretGroup.add(head, visor);

    // Twin Forward Chrome Arm Cannons with Muzzle Rings
    const barrelGeo = new THREE.CylinderGeometry(2.8, 3.2, 22, 16);
    barrelGeo.rotateZ(Math.PI / 2);
    const bL = new THREE.Mesh(barrelGeo, this.playerSecondaryMat);
    bL.position.set(14, 1, -14);
    const bR = new THREE.Mesh(barrelGeo, this.playerSecondaryMat);
    bR.position.set(14, 1, 14);
    this.playerTurretGroup.add(bL, bR);

    // Commander-Specific High-Poly 3D Back Attachments
    // 1. Vanguard (Rex): Heavy Ballistic Shield Wings
    const vanWingGeo = new THREE.BoxGeometry(8, 22, 4);
    const vwL = new THREE.Mesh(vanWingGeo, this.playerChassisMat);
    vwL.position.set(-12, 8, -14);
    vwL.rotation.z = -0.3;
    const vwR = new THREE.Mesh(vanWingGeo, this.playerChassisMat);
    vwR.position.set(-12, 8, 14);
    vwR.rotation.z = -0.3;
    this.commanderAttachments.vanguard.add(vwL, vwR);

    // 2. Valkyrie (Aria - Female Free): Swept Angelic Energy Wings & Valkyrie Crown Halo
    const valkWingMat = new THREE.MeshBasicMaterial({ color: 0x22d3ee, side: THREE.DoubleSide });
    const valkFeatherGeo = new THREE.ConeGeometry(3.5, 24, 12);
    valkFeatherGeo.rotateZ(Math.PI / 2);
    for (let f = 0; f < 3; f++) {
      const fL = new THREE.Mesh(valkFeatherGeo, valkWingMat);
      fL.position.set(-14 - f * 3, 12 - f * 5, -16 - f * 5);
      fL.rotation.y = -0.5;
      fL.rotation.z = 0.35 - f * 0.15;

      const fR = new THREE.Mesh(valkFeatherGeo, valkWingMat);
      fR.position.set(-14 - f * 3, 12 - f * 5, 16 + f * 5);
      fR.rotation.y = 0.5;
      fR.rotation.z = 0.35 - f * 0.15;
      this.commanderAttachments.valkyrie.add(fL, fR);
    }
    const valkHalo = new THREE.Mesh(new THREE.TorusGeometry(13, 1.6, 12, 32), valkWingMat);
    valkHalo.rotation.x = Math.PI / 2;
    valkHalo.position.set(0, 23, 0);
    this.commanderAttachments.valkyrie.add(valkHalo);

    // 3. Tesla Engineer (Volt - VIP): Dual Back-Mounted Tesla Arc Coils
    const coilGeo = new THREE.CylinderGeometry(4, 5.5, 24, 16);
    const coilL = new THREE.Mesh(coilGeo, this.playerChassisMat);
    coilL.position.set(-12, 14, -11);
    const coilR = new THREE.Mesh(coilGeo, this.playerChassisMat);
    coilR.position.set(-12, 14, 11);
    const arcHalo = new THREE.Mesh(new THREE.TorusGeometry(18, 2.0, 12, 32), this.playerGlowMat);
    arcHalo.position.set(-12, 24, 0);
    this.commanderAttachments.tesla_engineer.add(coilL, coilR, arcHalo);

    // 4. Void Phantom (Nyx - VIP): Swept Crimson Assassin Blades & Void Ring
    const voidBladeGeo = new THREE.ConeGeometry(5.5, 32, 12);
    voidBladeGeo.rotateZ(Math.PI * 0.65);
    const vbL = new THREE.Mesh(voidBladeGeo, this.playerChassisMat);
    vbL.position.set(-16, 10, -18);
    vbL.rotation.y = -0.4;
    const vbR = new THREE.Mesh(voidBladeGeo, this.playerChassisMat);
    vbR.position.set(-16, 10, 18);
    vbR.rotation.y = 0.4;
    this.commanderAttachments.void_phantom.add(vbL, vbR);

    for (const grp of Object.values(this.commanderAttachments)) {
      this.playerTurretGroup.add(grp);
    }

    this.playerTurretGroup.position.y = 24;
    this.playerGroup.add(this.playerTurretGroup);

    this.playerLight = new THREE.PointLight(0x38bdf8, 4.5, 480, 1.5);
    this.playerLight.position.set(0, 52, 0);
    this.playerGroup.add(this.playerLight);

    this.enableShadowsRecursive(this.playerGroup);
    this.scene.add(this.playerGroup);
  }

  private buildWeaponDronePods(): void {
    for (let i = 0; i < 6; i++) {
      const root = new THREE.Group();
      const primaryMat = new THREE.MeshPhysicalMaterial({
        color: 0x38bdf8,
        emissive: 0x38bdf8,
        emissiveIntensity: 0.4,
        bumpMap: this.armorBumpTex,
        bumpScale: 0.5,
        metalness: 0.88,
        roughness: 0.16,
        clearcoat: 0.85
      });
      const emissiveMat = new THREE.MeshBasicMaterial({ color: 0xffffff });

      const glowSprite = new THREE.Sprite(
        new THREE.SpriteMaterial({
          map: this.glowSpriteTex,
          color: 0x38bdf8,
          blending: THREE.AdditiveBlending,
          depthWrite: false,
          transparent: true,
          opacity: 0.65
        })
      );
      glowSprite.scale.set(34, 34, 1);
      root.add(glowSprite);

      // Archetype Sub-Groups (High-Poly Smooth Geometries)
      const plasmaGrp = new THREE.Group();
      const pBody = new THREE.Mesh(new THREE.SphereGeometry(7.2, 20, 20), primaryMat);
      const pBarrelGeo = new THREE.CylinderGeometry(1.8, 1.8, 15, 12);
      pBarrelGeo.rotateZ(Math.PI / 2);
      const pb1 = new THREE.Mesh(pBarrelGeo, emissiveMat);
      pb1.position.set(6, 0, -3.2);
      const pb2 = new THREE.Mesh(pBarrelGeo, emissiveMat);
      pb2.position.set(6, 0, 3.2);
      plasmaGrp.add(pBody, pb1, pb2);

      const teslaGrp = new THREE.Group();
      const tSpire = new THREE.Mesh(new THREE.CylinderGeometry(3.2, 6.5, 17, 16), primaryMat);
      const tRing = new THREE.Mesh(new THREE.TorusGeometry(9.5, 1.6, 12, 28), emissiveMat);
      tRing.rotation.x = Math.PI / 2;
      tRing.position.y = 5;
      teslaGrp.add(tSpire, tRing);

      const frostGrp = new THREE.Group();
      const fCore = new THREE.Mesh(new THREE.OctahedronGeometry(8.5, 1), emissiveMat);
      const fRing = new THREE.Mesh(new THREE.TorusGeometry(11.5, 1.6, 12, 24), primaryMat);
      fRing.rotation.x = Math.PI / 2;
      frostGrp.add(fCore, fRing);

      const sawGrp = new THREE.Group();
      const sDisc = new THREE.Mesh(new THREE.CylinderGeometry(11.5, 11.5, 2.4, 24), primaryMat);
      const sHub = new THREE.Mesh(new THREE.SphereGeometry(4.5, 16, 16), emissiveMat);
      sawGrp.add(sDisc, sHub);

      const missileGrp = new THREE.Group();
      const mBox = new THREE.Mesh(new THREE.CylinderGeometry(7, 8, 12, 16), primaryMat);
      const mDish = new THREE.Mesh(new THREE.SphereGeometry(4.5, 16, 12), emissiveMat);
      mDish.position.y = 7;
      missileGrp.add(mBox, mDish);

      const archetypeGroups: Record<WeaponArchetypeId, THREE.Group> = {
        plasma: plasmaGrp,
        tesla: teslaGrp,
        frost: frostGrp,
        sawblade: sawGrp,
        missile: missileGrp
      };
      for (const g of Object.values(archetypeGroups)) root.add(g);

      const tierWings = new THREE.Group();
      const wGeo = new THREE.BoxGeometry(4, 2, 17);
      const wMesh = new THREE.Mesh(wGeo, primaryMat);
      tierWings.add(wMesh);
      root.add(tierWings);

      const tierRing = new THREE.Mesh(new THREE.TorusGeometry(13.5, 1.3, 12, 28), emissiveMat);
      tierRing.rotation.x = Math.PI / 2;
      root.add(tierRing);

      const tierCrown = new THREE.Group();
      const crownMat = new THREE.MeshBasicMaterial({ color: 0xfacc15 });
      for (let c = 0; c < 4; c++) {
        const a = (c / 4) * Math.PI * 2;
        const shard = new THREE.Mesh(new THREE.OctahedronGeometry(3.2, 0), crownMat);
        shard.position.set(Math.cos(a) * 14, 6, Math.sin(a) * 14);
        tierCrown.add(shard);
      }
      root.add(tierCrown);

      this.enableShadowsRecursive(root);
      root.visible = false;
      this.scene.add(root);
      this.weaponPods.push({
        root,
        archetypeGroups,
        tierWings,
        tierRing,
        tierCrown,
        primaryMat,
        emissiveMat,
        glowSprite
      });
    }
  }

  private buildThemeProps(): void {
    const half = this.worldSize / 2;
    const themes: ConcreteArenaTheme[] = ['cyber_nebula', 'solar_inferno', 'cryo_glacier', 'emerald_matrix'];
    for (const t of themes) {
      const grp = new THREE.Group();
      grp.visible = false;
      this.themeProps[t] = grp;
      this.scene.add(grp);

      if (t === 'solar_inferno') {
        const spikeGeo = new THREE.ConeGeometry(14, 75, 5);
        const spikeMat = new THREE.MeshPhysicalMaterial({ color: 0x1f0b08, emissive: 0xf97316, emissiveIntensity: 0.65 });
        for (let i = 0; i < 12; i++) {
          const ang = (i / 12) * Math.PI * 2 + 0.2;
          const dist = 780 + (i % 3) * 120;
          const sp = new THREE.Mesh(spikeGeo, spikeMat);
          sp.position.set(half + Math.cos(ang) * dist, 37, half + Math.sin(ang) * dist);
          sp.scale.set(1 + (i % 2) * 0.4, 1 + (i % 3) * 0.3, 1 + (i % 2) * 0.4);
          grp.add(sp);
        }
      } else if (t === 'cryo_glacier') {
        const iceGeo = new THREE.OctahedronGeometry(12, 0);
        iceGeo.scale(1, 3.2, 1);
        const iceMat = new THREE.MeshPhysicalMaterial({
          color: 0xa5f3fc,
          emissive: 0x06b6d4,
          emissiveIntensity: 0.6,
          roughness: 0.1,
          metalness: 0.2
        });
        for (let i = 0; i < 12; i++) {
          const ang = (i / 12) * Math.PI * 2 + 0.3;
          const dist = 760 + (i % 2) * 150;
          const ice = new THREE.Mesh(iceGeo, iceMat);
          ice.position.set(half + Math.cos(ang) * dist, 38, half + Math.sin(ang) * dist);
          ice.rotation.z = ((i % 3) - 1) * 0.2;
          grp.add(ice);
        }
      } else if (t === 'emerald_matrix') {
        const colGeo = new THREE.BoxGeometry(16, 95, 16);
        const colMat = new THREE.MeshPhysicalMaterial({ color: 0x062816, emissive: 0x22c55e, emissiveIntensity: 0.7 });
        for (let i = 0; i < 12; i++) {
          const ang = (i / 12) * Math.PI * 2 + 0.1;
          const dist = 800 + (i % 2) * 100;
          const col = new THREE.Mesh(colGeo, colMat);
          col.position.set(half + Math.cos(ang) * dist, 47.5, half + Math.sin(ang) * dist);
          grp.add(col);
        }
      } else {
        const beaconGeo = new THREE.CylinderGeometry(4, 10, 85, 8);
        const beaconMat = new THREE.MeshPhysicalMaterial({ color: 0x1b2b4a, emissive: 0xa855f7, emissiveIntensity: 0.7 });
        for (let i = 0; i < 12; i++) {
          const ang = (i / 12) * Math.PI * 2;
          const dist = 800 + (i % 3) * 100;
          const b = new THREE.Mesh(beaconGeo, beaconMat);
          b.position.set(half + Math.cos(ang) * dist, 42.5, half + Math.sin(ang) * dist);
          grp.add(b);
        }
      }
    }
  }

  public worldToScreen(
    worldX: number,
    worldY: number,
    heightOffset = 0
  ): { x: number; y: number; visible: boolean } {
    this.projVec.set(worldX, heightOffset, worldY);
    this.projVec.project(this.camera);

    const halfW = window.innerWidth / 2;
    const halfH = window.innerHeight / 2;

    return {
      x: this.projVec.x * halfW + halfW,
      y: -this.projVec.y * halfH + halfH,
      visible: this.projVec.z < 1
    };
  }

  public renderScene(source: {
    player: { x: number; y: number; angle: number; invulnTimer: number };
    weapons?: { equipped: Array<WeaponInstance | null> };
    equippedWeapons?: Array<WeaponInstance | null>;
    enemies: Enemy[];
    projectiles: Projectile[];
    lootDrops: LootDrop[];
    frostRings: FrostRing[];
    lightningBolts: LightningBolt[];
    particles: Particle[];
    screenShake: number;
    bossRageStage: number;
  }): void {
    const now = performance.now() * 0.001;
    const player = source.player;
    const equippedWeapons = source.equippedWeapons || source.weapons?.equipped || [];
    const enemies = source.enemies;
    const projectiles = source.projectiles;
    const lootDrops = source.lootDrops;
    const frostRings = source.frostRings;
    const lightningBolts = source.lightningBolts;
    const particles = source.particles;
    const screenShake = source.screenShake;
    const bossRageStage = source.bossRageStage;

    // 1. Camera Follow + Dynamic Shadow Frustum Follow + 3D Screen Shake
    const shakeX = (Math.random() - 0.5) * screenShake * 1.4;
    const shakeZ = (Math.random() - 0.5) * screenShake * 1.4;
    this.camTarget.x += (player.x - this.camTarget.x) * 0.18;
    this.camTarget.z += (player.y - this.camTarget.z) * 0.18;

    const camH = 530 * this.camZoom;
    const camDist = 430 * this.camZoom;
    this.camera.position.set(this.camTarget.x + shakeX, camH, this.camTarget.z + camDist + shakeZ);
    this.camera.lookAt(this.camTarget.x + shakeX * 0.3, 0, this.camTarget.z + shakeZ * 0.3);

    this.dirLight.position.set(this.camTarget.x + 280, 780 * this.camZoom, this.camTarget.z + 240);
    this.dirLight.target.position.set(this.camTarget.x, 0, this.camTarget.z);
    this.dirLight.target.updateMatrixWorld();

    // 2. Central Quantum Nexus Obelisk & Hovering Gyro Rings Animation
    const half = this.worldSize / 2;
    if (this.centralObelisk) {
      this.centralObelisk.position.y = 55 + Math.sin(now * 2) * 5;
      this.centralObelisk.rotation.y = now * 0.8;
      this.centralObelisk.rotation.z = Math.sin(now * 1.5) * 0.12;
    }
    if (this.centralGyroRing1) {
      this.centralGyroRing1.position.y = 55 + Math.sin(now * 2) * 5;
      this.centralGyroRing1.rotation.x = now * 1.4;
      this.centralGyroRing1.rotation.y = now * 1.1;
    }
    if (this.centralGyroRing2) {
      this.centralGyroRing2.position.y = 55 + Math.sin(now * 2) * 5;
      this.centralGyroRing2.rotation.y = -now * 1.2;
      this.centralGyroRing2.rotation.z = now * 0.9;
    }
    const shardOrbitR = 52;
    for (let i = 0; i < this.centralCrystalShards.length; i++) {
      const s = this.centralCrystalShards[i];
      const sa = now * 1.5 + (i * Math.PI) / 2;
      s.position.set(
        half + Math.cos(sa) * shardOrbitR,
        52 + Math.sin(now * 3 + i) * 6,
        half + Math.sin(sa) * shardOrbitR
      );
      s.rotation.y = now * 2;
    }
    if (this.centralBeamMesh) {
      (this.centralBeamMesh.material as THREE.MeshBasicMaterial).opacity = 0.18 + Math.sin(now * 3) * 0.08;
    }

    this.reactorRings.forEach((r, idx) => {
      r.rotation.z = now * (idx % 2 === 0 ? 0.45 : -0.65);
    });
    const pulseScale = 1 + (now % 1.8) * 3.8;
    this.reactorPulseRing.scale.setScalar(pulseScale);
    (this.reactorPulseRing.material as THREE.MeshBasicMaterial).opacity = Math.max(
      0,
      0.75 - (now % 1.8) * 0.4
    );

    for (const pr of this.pylonRings) pr.rotation.z = now * 2.2;
    for (const hr of this.holoSkyscraperRings) hr.rotation.z = -now * 0.8;
    this.dustPoints.position.y = Math.sin(now * 1.5) * 6;

    if (bossRageStage > 0) {
      const alertPulse = 0.5 + 0.5 * Math.sin(now * (4 + bossRageStage * 3));
      this.barrierBeamMat.color.setHex(alertPulse > 0.5 ? 0xf43f5e : 0xfacc15);
      this.reactorCoreMat.color.setHex(0xf43f5e);
      this.backLight.color.setHex(0xef4444);
      this.backLight.intensity = 2.2 + bossRageStage * 0.5;
    } else {
      this.barrierBeamMat.color.setHex(0x38bdf8);
      this.reactorCoreMat.color.setHex(0x38bdf8);
      this.backLight.color.setHex(0xa855f7);
      this.backLight.intensity = 1.6;
    }

    // 3. Update Player 3D Commander Mech (Zero-GC: uses cached palette)
    const cmd = SaveManager.getInstance().data.selectedCommander;
    const pal = CMD_PALETTE[cmd] || CMD_PALETTE.vanguard;
    const isFlashing = player.invulnTimer > 0 && Math.floor(performance.now() / 60) % 2 === 0;

    this.playerChassisMat.color.setHex(isFlashing ? 0xffffff : pal.primary);
    this.playerChassisMat.emissive.setHex(isFlashing ? 0xffffff : pal.primary);
    this.playerGlowMat.color.setHex(pal.glow);
    this.playerHaloSprite.material.color.setHex(pal.glow);
    this.playerLight.color.setHex(pal.glow);

    for (const [k, grp] of Object.entries(this.commanderAttachments)) {
      grp.visible = k === cmd;
    }

    const hoverBob = Math.sin(now * 6) * 2.5;
    this.playerGroup.position.set(player.x, hoverBob, player.y);
    this.playerTurretGroup.rotation.y = -player.angle;
    this.playerThrusterMesh.scale.y = 0.85 + Math.sin(now * 28) * 0.25;

    // 4. Update 6 Orbiting Multi-Part Weapon Drones (Zero-GC: uses cached THREE.Color)
    for (let i = 0; i < 6; i++) {
      const w = equippedWeapons[i];
      const pod = this.weaponPods[i];
      if (!w) {
        pod.root.visible = false;
        continue;
      }
      pod.root.visible = true;

      for (const [archKey, grp] of Object.entries(pod.archetypeGroups)) {
        grp.visible = archKey === w.archetype;
      }

      pod.tierWings.visible = w.tier >= 2;
      pod.tierRing.visible = w.tier >= 3;
      pod.tierCrown.visible = w.tier >= 5;
      pod.tierCrown.rotation.y = now * 3.5;

      const wx = player.x + Math.cos(w.orbitAngle) * 52;
      const wz = player.y + Math.sin(w.orbitAngle) * 52;
      const scale = 0.85 + w.tier * 0.14;

      pod.root.position.set(wx, 20 + Math.sin(now * 7 + i) * 2.5, wz);
      pod.root.scale.setScalar(scale);
      pod.root.rotation.y = now * (w.archetype === 'sawblade' ? 12 : 3.2) + i;

      const tierColor = TIER_THREE_COLORS[w.tier - 1] || DEFAULT_TIER_COLOR;
      pod.primaryMat.color.copy(tierColor);
      pod.primaryMat.emissive.copy(tierColor);
      pod.glowSprite.material.color.copy(tierColor);
    }

    // 5. Sync Animated Multi-Part 3D Enemies (Zero-GC: reuses activeEnemyIds Set)
    this.activeEnemyIds.clear();
    for (let i = 0; i < enemies.length; i++) {
      const e = enemies[i];
      this.activeEnemyIds.add(e.id);

      let entry = this.enemyMeshes.get(e.id);
      if (!entry) {
        entry = this.createEnemyMesh(e);
        this.enemyMeshes.set(e.id, entry);
        this.scene.add(entry.group);
      }

      const angleToPlayer = Math.atan2(player.y - e.y, player.x - e.x);
      const bob = Math.sin(now * 7 + e.id) * 2.2;
      entry.group.position.set(e.x, e.radius * 0.85 + bob, e.y);

      if (e.type === 'swarmer') {
        entry.group.rotation.y = -angleToPlayer;
        if (entry.legs) {
          entry.legs.forEach((leg, lIdx) => {
            leg.rotation.z = Math.sin(now * 20 + (lIdx % 2) * Math.PI) * 0.35;
          });
        }
        if (entry.abdomen) {
          entry.abdomen.scale.setScalar(1 + Math.sin(now * 10 + e.id) * 0.12);
        }
      } else if (e.type === 'speedster') {
        entry.group.rotation.y = -angleToPlayer;
        entry.group.rotation.x = Math.sin(now * 9 + e.id) * 0.22;
        if (entry.flames) {
          const fScale = 0.75 + Math.sin(now * 35 + e.id) * 0.35;
          entry.flames.forEach((fl) => (fl.scale.y = fScale));
        }
      } else if (e.type === 'charger') {
        entry.group.rotation.y = -angleToPlayer;
        entry.group.rotation.z = -0.22;
      } else if (e.type === 'tank') {
        entry.group.rotation.y = -angleToPlayer;
        if (entry.turret) {
          entry.turret.rotation.y = Math.sin(now * 2.5 + e.id) * 0.35;
        }
        if (entry.wheels) {
          entry.wheels.forEach((wh) => (wh.rotation.z -= 0.08));
        }
      } else if (e.type === 'rival') {
        entry.group.rotation.y = -angleToPlayer;
        if (entry.shieldsGroup) {
          entry.shieldsGroup.rotation.y = now * 4.5 + e.id;
        }
      } else if (e.type === 'boss') {
        const rageScale = 1 + bossRageStage * 0.1;
        entry.group.scale.setScalar(rageScale);
        const spinMult = 1 + bossRageStage * 0.55;
        entry.group.rotation.y += 0.02 * spinMult;
        if (entry.ringX) entry.ringX.rotation.x += 0.045 * spinMult;
        if (entry.ringY) entry.ringY.rotation.y -= 0.055 * spinMult;
        if (entry.ringZ) entry.ringZ.rotation.z += 0.05 * spinMult;
        if (entry.shieldsGroup) entry.shieldsGroup.rotation.y -= 0.035 * spinMult;
        if (entry.innerStar) {
          entry.innerStar.scale.setScalar(1 + Math.sin(now * (6 + bossRageStage * 4)) * 0.18);
        }
      }

      if (e.hitFlash > 0) {
        entry.mainMat.color.setHex(0xffffff);
        entry.mainMat.emissive.setHex(0xffffff);
        entry.mainMat.emissiveIntensity = 1.0;
      } else if (e.slowTimer > 0) {
        entry.mainMat.color.setHex(0x67e8f9);
        entry.mainMat.emissive.setHex(0x0284c7);
        entry.mainMat.emissiveIntensity = 0.65;
      } else {
        entry.mainMat.color.set(e.color);
        entry.mainMat.emissive.set(e.color);
        entry.mainMat.emissiveIntensity =
          e.type === 'boss' ? 0.55 + bossRageStage * 0.2 : 0.32;
      }
    }

    for (const [id, entry] of this.enemyMeshes.entries()) {
      if (!this.activeEnemyIds.has(id)) {
        this.scene.remove(entry.group);
        entry.mainMat.dispose();
        entry.accentMat.dispose();
        this.enemyMeshes.delete(id);
      }
    }

    // 6. Sync Projectiles, Loot, Frost Rings, Lightning, Particles
    this.syncProjectiles(projectiles);
    this.syncLootDrops(lootDrops, now);
    this.syncFrostRings(frostRings);
    this.syncLightningBolts(lightningBolts);
    this.syncParticles(particles);

    this.renderer.render(this.scene, this.camera);
  }

  private createEnemyMesh(e: Enemy): EnemyMeshEntry {
    const group = new THREE.Group();
    const mainMat = new THREE.MeshPhysicalMaterial({
      color: e.color,
      emissive: e.color,
      emissiveIntensity: 0.32,
      bumpMap: this.armorBumpTex,
      bumpScale: 0.7,
      metalness: 0.85,
      roughness: 0.2,
      clearcoat: 0.8,
      clearcoatRoughness: 0.15
    });
    const accentMat = new THREE.MeshBasicMaterial({ color: 0xfacc15 });
    const darkMat = new THREE.MeshPhysicalMaterial({
      color: 0x0f172a,
      bumpMap: this.armorBumpTex,
      bumpScale: 0.5,
      metalness: 0.9,
      roughness: 0.22,
      clearcoat: 0.6
    });

    // 1. SWARMER: 6-Legged Articulated Cyber-Arachnid (High-Poly Curved Shells)
    if (e.type === 'swarmer') {
      const thorax = new THREE.Mesh(new THREE.SphereGeometry(9.5, 16, 16), darkMat);
      const abdomen = new THREE.Mesh(new THREE.SphereGeometry(11.5, 20, 20), mainMat);
      abdomen.scale.set(1.25, 0.9, 1.0);
      abdomen.position.set(-11, 2, 0);

      const eyeL = new THREE.Mesh(new THREE.SphereGeometry(2.4, 10, 10), accentMat);
      eyeL.position.set(8, 3, -4);
      const eyeR = new THREE.Mesh(new THREE.SphereGeometry(2.4, 10, 10), accentMat);
      eyeR.position.set(8, 3, 4);

      const legs: THREE.Mesh[] = [];
      const legGeo = new THREE.CylinderGeometry(1.5, 0.8, 15, 8);
      for (let i = 0; i < 6; i++) {
        const side = i < 3 ? -1 : 1;
        const idx = i % 3;
        const leg = new THREE.Mesh(legGeo, mainMat);
        leg.position.set((idx - 1) * 7, -4, side * 11);
        leg.rotation.x = side * 0.45;
        group.add(leg);
        legs.push(leg);
      }

      group.add(thorax, abdomen, eyeL, eyeR);
      this.enableShadowsRecursive(group);
      return { type: e.type, group, mainMat, accentMat, legs, abdomen };
    }

    // 2. SPEEDSTER: Swept Delta-Wing Jet-Interceptor with Dual Afterburners
    if (e.type === 'speedster') {
      const fuselageGeo = new THREE.ConeGeometry(8.5, 32, 16);
      fuselageGeo.rotateZ(-Math.PI / 2);
      const fuselage = new THREE.Mesh(fuselageGeo, mainMat);

      const wingGeo = new THREE.BoxGeometry(14, 2, 34);
      const wings = new THREE.Mesh(wingGeo, darkMat);
      wings.position.set(-4, 0, 0);

      const canopy = new THREE.Mesh(
        new THREE.SphereGeometry(5, 16, 12),
        new THREE.MeshBasicMaterial({ color: 0x38bdf8 })
      );
      canopy.scale.set(1.8, 0.7, 0.85);
      canopy.position.set(2, 4, 0);

      const flameGeo = new THREE.ConeGeometry(4, 15, 12);
      flameGeo.rotateZ(Math.PI / 2);
      const flameMat = new THREE.MeshBasicMaterial({ color: 0xf97316 });
      const f1 = new THREE.Mesh(flameGeo, flameMat);
      f1.position.set(-19, 0, -5);
      const f2 = new THREE.Mesh(flameGeo, flameMat);
      f2.position.set(-19, 0, 5);

      group.add(fuselage, wings, canopy, f1, f2);
      this.enableShadowsRecursive(group);
      return { type: e.type, group, mainMat, accentMat, flames: [f1, f2] };
    }

    // 3. CHARGER: Horned Battering-Ram Juggernaut
    if (e.type === 'charger') {
      const hull = new THREE.Mesh(new THREE.CylinderGeometry(14, 16, 22, 16), mainMat);
      hull.rotation.z = Math.PI / 2;
      const plow = new THREE.Mesh(new THREE.BoxGeometry(8, 16, 28), darkMat);
      plow.position.set(13, -2, 0);

      const hornGeo = new THREE.ConeGeometry(4.5, 24, 14);
      hornGeo.rotateZ(-Math.PI / 2);
      const hL = new THREE.Mesh(hornGeo, accentMat);
      hL.position.set(18, 5, -11);
      const hR = new THREE.Mesh(hornGeo, accentMat);
      hR.position.set(18, 5, 11);

      group.add(hull, plow, hL, hR);
      this.enableShadowsRecursive(group);
      return { type: e.type, group, mainMat, accentMat };
    }

    // 4. TANK: Goliath Siege Tank with Rotating Treads & Scanning Twin Turret
    if (e.type === 'tank') {
      const body = new THREE.Mesh(new THREE.BoxGeometry(34, 18, 28), mainMat);
      const treadGeo = new THREE.BoxGeometry(38, 12, 8);
      const tL = new THREE.Mesh(treadGeo, darkMat);
      tL.position.set(0, -4, -17);
      const tR = new THREE.Mesh(treadGeo, darkMat);
      tR.position.set(0, -4, 17);

      const wheels: THREE.Mesh[] = [];
      const wheelGeo = new THREE.CylinderGeometry(5.2, 5.2, 10, 16);
      wheelGeo.rotateX(Math.PI / 2);
      for (const wx of [-12, 0, 12]) {
        const wL = new THREE.Mesh(wheelGeo, accentMat);
        wL.position.set(wx, -4, -17);
        const wR = new THREE.Mesh(wheelGeo, accentMat);
        wR.position.set(wx, -4, 17);
        group.add(wL, wR);
        wheels.push(wL, wR);
      }

      const turret = new THREE.Group();
      const tHead = new THREE.Mesh(new THREE.CylinderGeometry(12, 15, 10, 20), darkMat);
      const cannonGeo = new THREE.CylinderGeometry(2.8, 3.2, 26, 16);
      cannonGeo.rotateZ(Math.PI / 2);
      const c1 = new THREE.Mesh(cannonGeo, mainMat);
      c1.position.set(14, 1, -5);
      const c2 = new THREE.Mesh(cannonGeo, mainMat);
      c2.position.set(14, 1, 5);
      turret.add(tHead, c1, c2);
      turret.position.y = 13;

      group.add(body, tL, tR, turret);
      this.enableShadowsRecursive(group);
      return { type: e.type, group, mainMat, accentMat, turret, wheels };
    }

    // 4.5. RIVAL COMMANDER: Full Multi-Part Enemy Cyber-Commander Mech + 3 Orbiting Weapon Drones
    if (e.type === 'rival') {
      const targetRing = new THREE.Mesh(
        new THREE.TorusGeometry(26, 2.2, 12, 32),
        new THREE.MeshBasicMaterial({ color: 0xf43f5e })
      );
      targetRing.rotation.x = Math.PI / 2;
      targetRing.position.y = -10;
      group.add(targetRing);

      const lowerHull = new THREE.Mesh(new THREE.CylinderGeometry(14, 18, 12, 16), darkMat);
      lowerHull.position.y = -4;
      const torso = new THREE.Mesh(new THREE.CylinderGeometry(14, 12, 15, 16), mainMat);
      torso.position.y = 7;

      const paulL = new THREE.Mesh(new THREE.BoxGeometry(12, 9, 10), mainMat);
      paulL.position.set(0, 11, -15);
      const paulR = new THREE.Mesh(new THREE.BoxGeometry(12, 9, 10), mainMat);
      paulR.position.set(0, 11, 15);

      const head = new THREE.Mesh(new THREE.SphereGeometry(8.5, 16, 16), darkMat);
      head.position.set(0, 18, 0);
      const visor = new THREE.Mesh(new THREE.BoxGeometry(8, 3.5, 13), accentMat);
      visor.position.set(5, 18, 0);

      const barrelGeo = new THREE.CylinderGeometry(2.2, 2.2, 18, 12);
      barrelGeo.rotateZ(Math.PI / 2);
      const bL = new THREE.Mesh(barrelGeo, accentMat);
      bL.position.set(14, 8, -12);
      const bR = new THREE.Mesh(barrelGeo, accentMat);
      bR.position.set(14, 8, 12);

      // 3 Orbiting 3D Weapon Drones around the Rival Commander
      const shieldsGroup = new THREE.Group();
      shieldsGroup.position.y = 10;
      const droneGeo = new THREE.OctahedronGeometry(5.5, 1);
      for (let d = 0; d < 3; d++) {
        const da = (d / 3) * Math.PI * 2;
        const drone = new THREE.Mesh(droneGeo, accentMat);
        drone.position.set(Math.cos(da) * 34, 0, Math.sin(da) * 34);
        shieldsGroup.add(drone);
      }

      group.add(lowerHull, torso, paulL, paulR, head, visor, bL, bR, shieldsGroup);
      this.enableShadowsRecursive(group);
      return { type: e.type, group, mainMat, accentMat, shieldsGroup };
    }

    // 5. BOSS: Colossal High-Poly Dreadnought Citadel with Volumetric Glow + 3 Gyro Rings
    const innerStar = new THREE.Mesh(
      new THREE.IcosahedronGeometry(27, 2),
      new THREE.MeshBasicMaterial({ color: 0xffffff })
    );
    const outerShell = new THREE.Mesh(new THREE.DodecahedronGeometry(44, 1), mainMat);

    const bossGlow = new THREE.Sprite(
      new THREE.SpriteMaterial({
        map: this.glowSpriteTex,
        color: 0xf43f5e,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        transparent: true,
        opacity: 0.85
      })
    );
    bossGlow.scale.set(160, 160, 1);
    group.add(bossGlow);

    const ringGeo = new THREE.TorusGeometry(60, 3.5, 16, 48);
    const ringX = new THREE.Mesh(ringGeo, accentMat);
    const ringY = new THREE.Mesh(ringGeo, mainMat);
    ringY.rotation.x = Math.PI / 2;
    const ringZ = new THREE.Mesh(ringGeo, accentMat);
    ringZ.rotation.y = Math.PI / 2;

    const shieldsGroup = new THREE.Group();
    const shieldGeo = new THREE.BoxGeometry(10, 36, 26);
    for (let s = 0; s < 4; s++) {
      const a = (s / 4) * Math.PI * 2;
      const plate = new THREE.Mesh(shieldGeo, darkMat);
      plate.position.set(Math.cos(a) * 70, 0, Math.sin(a) * 70);
      plate.rotation.y = -a;
      shieldsGroup.add(plate);
    }

    const crownSpire = new THREE.Mesh(new THREE.ConeGeometry(15, 40, 16), accentMat);
    crownSpire.position.y = 56;

    group.add(innerStar, outerShell, ringX, ringY, ringZ, shieldsGroup, crownSpire);
    this.enableShadowsRecursive(group);
    return {
      type: e.type,
      group,
      mainMat,
      accentMat,
      ringX,
      ringY,
      ringZ,
      shieldsGroup,
      innerStar
    };
  }

  private syncProjectiles(projectiles: Projectile[]): void {
    while (this.projPool.length < projectiles.length) {
      const mat = new THREE.MeshBasicMaterial({ color: 0x38bdf8 });
      const mesh = new THREE.Mesh(this.geoProjSphere, mat);
      const glow = new THREE.Sprite(
        new THREE.SpriteMaterial({
          map: this.glowSpriteTex,
          color: 0x38bdf8,
          blending: THREE.AdditiveBlending,
          depthWrite: false,
          transparent: true,
          opacity: 0.7
        })
      );
      glow.scale.set(24, 24, 1);
      mesh.add(glow);
      this.scene.add(mesh);
      this.projPool.push(mesh);
    }

    for (let i = 0; i < this.projPool.length; i++) {
      const mesh = this.projPool[i];
      if (i >= projectiles.length) {
        mesh.visible = false;
        continue;
      }

      const p = projectiles[i];
      mesh.visible = true;
      mesh.geometry = p.isSawblade ? this.geoProjSaw : this.geoProjSphere;
      (mesh.material as THREE.MeshBasicMaterial).color.set(p.color);
      const childGlow = mesh.children[0] as THREE.Sprite | undefined;
      if (childGlow) childGlow.material.color.set(p.color);
      mesh.position.set(p.x, 18, p.y);

      if (p.isSawblade) {
        const s = p.radius / 16;
        mesh.scale.set(s, 1, s);
        mesh.rotation.y = p.rotation || 0;
      } else {
        const s = p.radius / 6;
        mesh.scale.setScalar(s);
      }
    }
  }

  private syncLootDrops(lootDrops: LootDrop[], now: number): void {
    while (this.lootPool.length < lootDrops.length) {
      const mat = new THREE.MeshPhysicalMaterial({
        color: 0xfacc15,
        emissive: 0xfacc15,
        emissiveIntensity: 0.55,
        metalness: 0.85,
        roughness: 0.12,
        clearcoat: 1.0
      });
      const mesh = new THREE.Mesh(this.geoLoot, mat);
      mesh.castShadow = true;
      this.scene.add(mesh);
      this.lootPool.push(mesh);
    }

    for (let i = 0; i < this.lootPool.length; i++) {
      const mesh = this.lootPool[i];
      if (i >= lootDrops.length) {
        mesh.visible = false;
        continue;
      }

      const d = lootDrops[i];
      mesh.visible = true;
      const hex =
        d.type === 'gold'
          ? 0xfacc15
          : d.type === 'gem'
            ? 0x38bdf8
            : d.type === 'weapon_pod'
              ? 0xc084fc
              : 0x4ade80;
      const mat = mesh.material as THREE.MeshPhysicalMaterial;
      mat.color.setHex(hex);
      mat.emissive.setHex(hex);
      mesh.scale.setScalar(d.type === 'weapon_pod' ? 1.45 : 1.0);

      mesh.position.set(d.x, 10 + Math.sin(now * 5 + i) * 3, d.y);
      mesh.rotation.y = now * 3 + i;
    }
  }

  private syncFrostRings(frostRings: FrostRing[]): void {
    while (this.frostPool.length < frostRings.length) {
      const mat = new THREE.MeshBasicMaterial({
        color: 0x67e8f9,
        transparent: true,
        opacity: 0.8,
        side: THREE.DoubleSide
      });
      const mesh = new THREE.Mesh(this.geoFrostRing, mat);
      this.scene.add(mesh);
      this.frostPool.push(mesh);
    }

    for (let i = 0; i < this.frostPool.length; i++) {
      const mesh = this.frostPool[i];
      if (i >= frostRings.length) {
        mesh.visible = false;
        continue;
      }

      const r = frostRings[i];
      mesh.visible = true;
      mesh.position.set(r.x, 3, r.y);
      mesh.scale.setScalar(Math.max(1, r.currentRadius));
      const mat = mesh.material as THREE.MeshBasicMaterial;
      mat.color.set(r.color);
      mat.opacity = Math.max(0, r.alpha);
    }
  }

  private syncLightningBolts(bolts: LightningBolt[]): void {
    let boltIdx = 0;
    for (const b of bolts) {
      if (b.points.length < 2) continue;
      let line = this.lightningPool[boltIdx];
      const positions = new Float32Array(b.points.length * 3);
      for (let p = 0; p < b.points.length; p++) {
        positions[p * 3] = b.points[p].x;
        positions[p * 3 + 1] = 22;
        positions[p * 3 + 2] = b.points[p].y;
      }
      if (!line) {
        const geo = new THREE.BufferGeometry();
        geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        const mat = new THREE.LineBasicMaterial({
          color: b.color,
          transparent: true,
          opacity: Math.max(0, b.alpha)
        });
        line = new THREE.Line(geo, mat);
        this.scene.add(line);
        this.lightningPool.push(line);
      } else {
        line.visible = true;
        line.geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        const mat = line.material as THREE.LineBasicMaterial;
        mat.color.set(b.color);
        mat.opacity = Math.max(0, b.alpha);
      }
      boltIdx++;
    }
    for (let i = boltIdx; i < this.lightningPool.length; i++) {
      this.lightningPool[i].visible = false;
    }
  }

  private syncParticles(particles: Particle[]): void {
    while (this.particlePool.length < particles.length) {
      const mat = new THREE.MeshBasicMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 1
      });
      const mesh = new THREE.Mesh(this.geoParticle, mat);
      this.scene.add(mesh);
      this.particlePool.push(mesh);
    }

    for (let i = 0; i < this.particlePool.length; i++) {
      const mesh = this.particlePool[i];
      if (i >= particles.length) {
        mesh.visible = false;
        continue;
      }

      const pt = particles[i];
      mesh.visible = true;
      mesh.position.set(pt.x, 12 + pt.alpha * 14, pt.y);
      mesh.rotation.x += 0.15;
      mesh.rotation.y += 0.15;
      mesh.scale.setScalar(pt.radius / 3);
      const mat = mesh.material as THREE.MeshBasicMaterial;
      mat.color.set(pt.color);
      mat.opacity = Math.max(0, pt.alpha);
    }
  }
}
