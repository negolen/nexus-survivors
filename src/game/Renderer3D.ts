import * as THREE from 'three';
import { CommanderId, SaveManager } from '../core/SaveManager';
import type {
  Enemy,
  FrostRing,
  LightningBolt,
  LootDrop,
  Particle,
  Projectile
} from './GameEngine';
import { TIER_COLORS, WeaponArchetypeId, WeaponInstance } from './WeaponSystem';

interface PodEntry {
  root: THREE.Group;
  archetypeGroups: Record<WeaponArchetypeId, THREE.Group>;
  tierWings: THREE.Group;
  tierRing: THREE.Mesh;
  tierCrown: THREE.Group;
  primaryMat: THREE.MeshStandardMaterial;
  emissiveMat: THREE.MeshBasicMaterial;
  spinPart?: THREE.Object3D;
}

interface EnemyMeshEntry {
  type: Enemy['type'];
  group: THREE.Group;
  mainMat: THREE.MeshStandardMaterial;
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

  // Environment Animated Elements
  private dirLight!: THREE.DirectionalLight;
  private backLight!: THREE.DirectionalLight;
  private reactorRings: THREE.Mesh[] = [];
  private reactorPulseRing!: THREE.Mesh;
  private reactorCoreMat!: THREE.MeshBasicMaterial;
  private barrierBeamMat!: THREE.MeshBasicMaterial;
  private pylonRings: THREE.Mesh[] = [];
  private holoSkyscraperRings: THREE.Mesh[] = [];
  private dustPoints!: THREE.Points;

  // Player 3D Mech Hierarchy
  private playerGroup = new THREE.Group();
  private playerChassisMat!: THREE.MeshStandardMaterial;
  private playerSecondaryMat!: THREE.MeshStandardMaterial;
  private playerGlowMat!: THREE.MeshBasicMaterial;
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

  // Shared Geometries
  private geoLoot = new THREE.OctahedronGeometry(9, 0);
  private geoProjSphere = new THREE.SphereGeometry(6, 8, 8);
  private geoProjSaw = new THREE.CylinderGeometry(16, 16, 3, 16);
  private geoParticle = new THREE.BoxGeometry(5, 5, 5);
  private geoFrostRing = new THREE.RingGeometry(0.88, 1.0, 36);

  // Active Entity Pools / Maps
  private enemyMeshes = new Map<number, EnemyMeshEntry>();
  private lootPool: THREE.Mesh[] = [];
  private projPool: THREE.Mesh[] = [];
  private particlePool: THREE.Mesh[] = [];
  private frostPool: THREE.Mesh[] = [];
  private lightningLines: THREE.Line[] = [];

  constructor(overlayCanvas: HTMLCanvasElement, worldSize: number) {
    this.worldSize = worldSize;

    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
      powerPreference: 'high-performance'
    });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.domElement.id = 'webgl-canvas';
    overlayCanvas.parentElement?.insertBefore(this.renderer.domElement, overlayCanvas);

    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x040711);
    this.scene.fog = new THREE.FogExp2(0x040711, 0.00032);

    this.camera = new THREE.PerspectiveCamera(46, window.innerWidth / window.innerHeight, 10, 7000);
    this.camera.position.set(worldSize / 2, 540, worldSize / 2 + 440);
    this.camera.lookAt(worldSize / 2, 0, worldSize / 2);

    this.geoFrostRing.rotateX(-Math.PI / 2);

    // Lighting
    const ambient = new THREE.AmbientLight(0x334155, 2.3);
    this.scene.add(ambient);

    this.dirLight = new THREE.DirectionalLight(0xe0f2fe, 2.5);
    this.dirLight.position.set(worldSize / 2 + 450, 950, worldSize / 2 + 350);
    this.scene.add(this.dirLight);

    this.backLight = new THREE.DirectionalLight(0xa855f7, 1.3);
    this.backLight.position.set(worldSize / 2 - 550, 650, worldSize / 2 - 550);
    this.scene.add(this.backLight);

    this.buildCyberMegacityAndArena();
    this.buildPlayerMech();
    this.buildWeaponDronePods();
  }

  public resize(width: number, height: number): void {
    this.camera.aspect = width / Math.max(1, height);
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(width, height);
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

    // 2. Metallic Cyber Floor Plane & Dual Grids
    const floorGeo = new THREE.PlaneGeometry(this.worldSize + 2400, this.worldSize + 2400);
    floorGeo.rotateX(-Math.PI / 2);
    const floorMat = new THREE.MeshStandardMaterial({
      color: 0x060a14,
      metalness: 0.78,
      roughness: 0.32
    });
    const floorMesh = new THREE.Mesh(floorGeo, floorMat);
    floorMesh.position.set(half, -1, half);
    this.scene.add(floorMesh);

    const gridFine = new THREE.GridHelper(this.worldSize, 44, 0x1e293b, 0x0f172a);
    gridFine.position.set(half, 0.1, half);
    const gridMajor = new THREE.GridHelper(this.worldSize, 11, 0x38bdf8, 0x1d4ed8);
    gridMajor.position.set(half, 0.25, half);
    this.scene.add(gridFine, gridMajor);

    // 3. Central Nexus Reactor Core on Arena Floor
    this.reactorCoreMat = new THREE.MeshBasicMaterial({ color: 0x38bdf8 });
    const coreHub = new THREE.Mesh(new THREE.CylinderGeometry(45, 55, 4, 8), this.reactorCoreMat);
    coreHub.position.set(half, 1, half);
    this.scene.add(coreHub);

    const ringRadii = [78, 125, 175];
    ringRadii.forEach((r, idx) => {
      const rGeo = new THREE.RingGeometry(r - 4, r, idx === 1 ? 6 : 24);
      rGeo.rotateX(-Math.PI / 2);
      const rMat = new THREE.MeshBasicMaterial({
        color: idx % 2 === 0 ? 0x38bdf8 : 0xa855f7,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.75
      });
      const rMesh = new THREE.Mesh(rGeo, rMat);
      rMesh.position.set(half, 0.6 + idx * 0.2, half);
      this.scene.add(rMesh);
      this.reactorRings.push(rMesh);
    });

    const pulseGeo = new THREE.RingGeometry(24, 30, 32);
    pulseGeo.rotateX(-Math.PI / 2);
    this.reactorPulseRing = new THREE.Mesh(
      pulseGeo,
      new THREE.MeshBasicMaterial({ color: 0x38bdf8, transparent: true, opacity: 0.8, side: THREE.DoubleSide })
    );
    this.reactorPulseRing.position.set(half, 1.2, half);
    this.scene.add(this.reactorPulseRing);

    // 4. Multi-Beam Laser Barrier Walls & Corner Tesla Pylons
    this.barrierBeamMat = new THREE.MeshBasicMaterial({ color: 0x38bdf8 });
    const wallSubMat = new THREE.MeshStandardMaterial({
      color: 0x0f172a,
      emissive: 0x0284c7,
      emissiveIntensity: 0.45,
      metalness: 0.8,
      roughness: 0.2
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

    // Corner Tesla Pylons
    const pylonGeo = new THREE.CylinderGeometry(20, 28, 125, 6);
    const corners = [
      [0, 0],
      [this.worldSize, 0],
      [0, this.worldSize],
      [this.worldSize, this.worldSize]
    ];
    for (const [cx, cz] of corners) {
      const pylon = new THREE.Mesh(pylonGeo, wallSubMat);
      pylon.position.set(cx, 62.5, cz);
      this.scene.add(pylon);

      const pRing = new THREE.Mesh(
        new THREE.TorusGeometry(32, 3, 8, 20),
        this.barrierBeamMat
      );
      pRing.rotation.x = Math.PI / 2;
      pRing.position.set(cx, 105, cz);
      this.scene.add(pRing);
      this.pylonRings.push(pRing);
    }

    // 5. 24 Distant Cyber-Skyscraper Monoliths around the Arena Perimeter
    const towerMat = new THREE.MeshStandardMaterial({
      color: 0x070b19,
      emissive: 0x0f172a,
      metalness: 0.85,
      roughness: 0.25
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
          new THREE.TorusGeometry(w * 0.85, 3, 6, 18),
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
    this.playerChassisMat = new THREE.MeshStandardMaterial({
      color: 0x0ea5e9,
      emissive: 0x0ea5e9,
      emissiveIntensity: 0.45,
      metalness: 0.72,
      roughness: 0.22
    });
    this.playerSecondaryMat = new THREE.MeshStandardMaterial({
      color: 0x1e293b,
      metalness: 0.85,
      roughness: 0.25
    });
    this.playerGlowMat = new THREE.MeshBasicMaterial({ color: 0x38bdf8 });

    // Hover Thruster Plume + 4 Stabilizer Fins
    const thrusterGeo = new THREE.ConeGeometry(11, 18, 8);
    thrusterGeo.rotateX(Math.PI);
    this.playerThrusterMesh = new THREE.Mesh(thrusterGeo, this.playerGlowMat);
    this.playerThrusterMesh.position.y = 6;
    this.playerGroup.add(this.playerThrusterMesh);

    const ringGeo = new THREE.TorusGeometry(23, 2.2, 8, 24);
    ringGeo.rotateX(Math.PI / 2);
    const ringMesh = new THREE.Mesh(ringGeo, this.playerGlowMat);
    ringMesh.position.y = 8;
    this.playerGroup.add(ringMesh);

    // Armored Hexagonal Lower Chassis
    const lowerHull = new THREE.Mesh(new THREE.CylinderGeometry(16, 20, 12, 6), this.playerSecondaryMat);
    lowerHull.position.y = 13;
    this.playerGroup.add(lowerHull);

    // Upper Rotating Turret Group (Torso + Pauldrons + Visor Head + Dual Cannons + Commander Wings)
    const torso = new THREE.Mesh(new THREE.CylinderGeometry(15, 13, 14, 6), this.playerChassisMat);
    this.playerTurretGroup.add(torso);

    // Chest Arc Reactor Core
    const chestCore = new THREE.Mesh(new THREE.OctahedronGeometry(6, 0), this.playerGlowMat);
    chestCore.position.set(13, 1, 0);
    this.playerTurretGroup.add(chestCore);

    // Shoulder Pauldrons
    const pauldronGeo = new THREE.BoxGeometry(14, 10, 11);
    const pLeft = new THREE.Mesh(pauldronGeo, this.playerChassisMat);
    pLeft.position.set(0, 5, -16);
    pLeft.rotation.x = 0.2;
    const pRight = new THREE.Mesh(pauldronGeo, this.playerChassisMat);
    pRight.position.set(0, 5, 16);
    pRight.rotation.x = -0.2;
    this.playerTurretGroup.add(pLeft, pRight);

    // Cyber-Visor Helmet Head
    const head = new THREE.Mesh(new THREE.DodecahedronGeometry(9, 0), this.playerSecondaryMat);
    head.position.set(2, 11, 0);
    const visor = new THREE.Mesh(new THREE.BoxGeometry(8, 3.5, 13), this.playerGlowMat);
    visor.position.set(7, 11, 0);
    this.playerTurretGroup.add(head, visor);

    // Twin Forward Arm Cannons
    const barrelGeo = new THREE.CylinderGeometry(2.6, 2.6, 22, 8);
    barrelGeo.rotateZ(Math.PI / 2);
    const bL = new THREE.Mesh(barrelGeo, this.playerSecondaryMat);
    bL.position.set(14, 1, -14);
    const bR = new THREE.Mesh(barrelGeo, this.playerSecondaryMat);
    bR.position.set(14, 1, 14);
    this.playerTurretGroup.add(bL, bR);

    // Commander-Specific 3D Back Attachments
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
    const valkFeatherGeo = new THREE.BoxGeometry(20, 4, 2);
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
    const valkHalo = new THREE.Mesh(new THREE.TorusGeometry(13, 1.5, 6, 20), valkWingMat);
    valkHalo.rotation.x = Math.PI / 2;
    valkHalo.position.set(0, 22, 0);
    this.commanderAttachments.valkyrie.add(valkHalo);

    // 3. Tesla Engineer (Volt - VIP): Dual Back-Mounted Tesla Arc Coils
    const coilGeo = new THREE.CylinderGeometry(4, 5, 24, 8);
    const coilL = new THREE.Mesh(coilGeo, this.playerChassisMat);
    coilL.position.set(-12, 14, -11);
    const coilR = new THREE.Mesh(coilGeo, this.playerChassisMat);
    coilR.position.set(-12, 14, 11);
    const arcHalo = new THREE.Mesh(new THREE.TorusGeometry(18, 1.8, 6, 20), this.playerGlowMat);
    arcHalo.position.set(-12, 24, 0);
    this.commanderAttachments.tesla_engineer.add(coilL, coilR, arcHalo);

    // 4. Void Phantom (Nyx - VIP): Swept Crimson Assassin Blades & Void Ring
    const voidBladeGeo = new THREE.ConeGeometry(6, 30, 4);
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

    this.playerLight = new THREE.PointLight(0x38bdf8, 3.8, 460, 1.5);
    this.playerLight.position.set(0, 48, 0);
    this.playerGroup.add(this.playerLight);

    this.scene.add(this.playerGroup);
  }

  private buildWeaponDronePods(): void {
    for (let i = 0; i < 6; i++) {
      const root = new THREE.Group();
      const primaryMat = new THREE.MeshStandardMaterial({
        color: 0x38bdf8,
        emissive: 0x38bdf8,
        emissiveIntensity: 0.5,
        metalness: 0.7,
        roughness: 0.25
      });
      const emissiveMat = new THREE.MeshBasicMaterial({ color: 0xffffff });

      // Archetype Sub-Groups
      const plasmaGrp = new THREE.Group();
      const pBody = new THREE.Mesh(new THREE.OctahedronGeometry(7, 0), primaryMat);
      const pBarrelGeo = new THREE.CylinderGeometry(1.6, 1.6, 14, 6);
      pBarrelGeo.rotateZ(Math.PI / 2);
      const pb1 = new THREE.Mesh(pBarrelGeo, emissiveMat);
      pb1.position.set(6, 0, -3);
      const pb2 = new THREE.Mesh(pBarrelGeo, emissiveMat);
      pb2.position.set(6, 0, 3);
      plasmaGrp.add(pBody, pb1, pb2);

      const teslaGrp = new THREE.Group();
      const tSpire = new THREE.Mesh(new THREE.CylinderGeometry(3, 6, 16, 8), primaryMat);
      const tRing = new THREE.Mesh(new THREE.TorusGeometry(9, 1.4, 6, 16), emissiveMat);
      tRing.rotation.x = Math.PI / 2;
      tRing.position.y = 5;
      teslaGrp.add(tSpire, tRing);

      const frostGrp = new THREE.Group();
      const fCore = new THREE.Mesh(new THREE.OctahedronGeometry(8, 0), emissiveMat);
      const fRing = new THREE.Mesh(new THREE.TorusGeometry(11, 1.5, 4, 6), primaryMat);
      fRing.rotation.x = Math.PI / 2;
      frostGrp.add(fCore, fRing);

      const sawGrp = new THREE.Group();
      const sDisc = new THREE.Mesh(new THREE.CylinderGeometry(11, 11, 2.2, 12), primaryMat);
      const sHub = new THREE.Mesh(new THREE.CylinderGeometry(4, 4, 4, 8), emissiveMat);
      sawGrp.add(sDisc, sHub);

      const missileGrp = new THREE.Group();
      const mBox = new THREE.Mesh(new THREE.BoxGeometry(12, 9, 10), primaryMat);
      const mDish = new THREE.Mesh(new THREE.ConeGeometry(4, 5, 8), emissiveMat);
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

      // Tier Evolution Attachments (Tier 2+ Wings, Tier 3+ Ring, Tier 5 Crown)
      const tierWings = new THREE.Group();
      const wGeo = new THREE.BoxGeometry(4, 2, 16);
      const wMesh = new THREE.Mesh(wGeo, primaryMat);
      tierWings.add(wMesh);
      root.add(tierWings);

      const tierRing = new THREE.Mesh(new THREE.TorusGeometry(13, 1.2, 6, 20), emissiveMat);
      tierRing.rotation.x = Math.PI / 2;
      root.add(tierRing);

      const tierCrown = new THREE.Group();
      const crownMat = new THREE.MeshBasicMaterial({ color: 0xfacc15 });
      for (let c = 0; c < 4; c++) {
        const a = (c / 4) * Math.PI * 2;
        const shard = new THREE.Mesh(new THREE.OctahedronGeometry(3, 0), crownMat);
        shard.position.set(Math.cos(a) * 14, 6, Math.sin(a) * 14);
        tierCrown.add(shard);
      }
      root.add(tierCrown);

      root.visible = false;
      this.scene.add(root);
      this.weaponPods.push({
        root,
        archetypeGroups,
        tierWings,
        tierRing,
        tierCrown,
        primaryMat,
        emissiveMat
      });
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

  public renderScene(params: {
    player: { x: number; y: number; angle: number; invulnTimer: number };
    equippedWeapons: Array<WeaponInstance | null>;
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
    const {
      player,
      equippedWeapons,
      enemies,
      projectiles,
      lootDrops,
      frostRings,
      lightningBolts,
      particles,
      screenShake,
      bossRageStage
    } = params;

    // 1. Camera Follow + 3D Screen Shake
    const shakeX = (Math.random() - 0.5) * screenShake * 1.4;
    const shakeZ = (Math.random() - 0.5) * screenShake * 1.4;
    this.camTarget.x += (player.x - this.camTarget.x) * 0.18;
    this.camTarget.z += (player.y - this.camTarget.z) * 0.18;

    this.camera.position.set(this.camTarget.x + shakeX, 535, this.camTarget.z + 435 + shakeZ);
    this.camera.lookAt(this.camTarget.x + shakeX * 0.3, 0, this.camTarget.z + shakeZ * 0.3);

    // 2. Environment Animations & Boss Red-Alert Atmosphere
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
      this.backLight.intensity = 2.0 + bossRageStage * 0.5;
    } else {
      this.barrierBeamMat.color.setHex(0x38bdf8);
      this.reactorCoreMat.color.setHex(0x38bdf8);
      this.backLight.color.setHex(0xa855f7);
      this.backLight.intensity = 1.3;
    }

    // 3. Update Player 3D Commander Mech
    const cmd = SaveManager.getInstance().data.selectedCommander;
    const cmdPalette: Record<CommanderId, { primary: number; glow: number }> = {
      vanguard: { primary: 0x0ea5e9, glow: 0x38bdf8 },
      valkyrie: { primary: 0xec4899, glow: 0x22d3ee },
      tesla_engineer: { primary: 0xa855f7, glow: 0xfacc15 },
      void_phantom: { primary: 0xe11d48, glow: 0xf43f5e }
    };
    const pal = cmdPalette[cmd] || cmdPalette.vanguard;
    const isFlashing = player.invulnTimer > 0 && Math.floor(performance.now() / 60) % 2 === 0;

    this.playerChassisMat.color.setHex(isFlashing ? 0xffffff : pal.primary);
    this.playerChassisMat.emissive.setHex(isFlashing ? 0xffffff : pal.primary);
    this.playerGlowMat.color.setHex(pal.glow);
    this.playerLight.color.setHex(pal.glow);

    for (const [k, grp] of Object.entries(this.commanderAttachments)) {
      grp.visible = k === cmd;
    }

    const hoverBob = Math.sin(now * 6) * 2.5;
    this.playerGroup.position.set(player.x, hoverBob, player.y);
    this.playerTurretGroup.rotation.y = -player.angle;
    this.playerThrusterMesh.scale.y = 0.85 + Math.sin(now * 28) * 0.25;

    // 4. Update 6 Orbiting Multi-Part Weapon Drones
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

      const tierColor = new THREE.Color(TIER_COLORS[w.tier - 1] || '#38bdf8');
      pod.primaryMat.color.copy(tierColor);
      pod.primaryMat.emissive.copy(tierColor);
    }

    // 5. Sync Animated Multi-Part 3D Enemies
    const activeIds = new Set<number>();
    for (let i = 0; i < enemies.length; i++) {
      const e = enemies[i];
      activeIds.add(e.id);

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
        entry.group.rotation.z = -0.22; // Aggressive forward charge tilt
      } else if (e.type === 'tank') {
        entry.group.rotation.y = -angleToPlayer;
        if (entry.turret) {
          entry.turret.rotation.y = Math.sin(now * 2.5 + e.id) * 0.35;
        }
        if (entry.wheels) {
          entry.wheels.forEach((wh) => (wh.rotation.z -= 0.08));
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
          e.type === 'boss' ? 0.6 + bossRageStage * 0.2 : 0.38;
      }
    }

    for (const [id, entry] of this.enemyMeshes.entries()) {
      if (!activeIds.has(id)) {
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
    const mainMat = new THREE.MeshStandardMaterial({
      color: e.color,
      emissive: e.color,
      emissiveIntensity: 0.4,
      metalness: 0.6,
      roughness: 0.28
    });
    const accentMat = new THREE.MeshBasicMaterial({ color: 0xfacc15 });
    const darkMat = new THREE.MeshStandardMaterial({
      color: 0x0f172a,
      metalness: 0.85,
      roughness: 0.3
    });

    // 1. SWARMER: 6-Legged Articulated Cyber-Arachnid
    if (e.type === 'swarmer') {
      const thorax = new THREE.Mesh(new THREE.OctahedronGeometry(10, 0), darkMat);
      const abdomen = new THREE.Mesh(new THREE.DodecahedronGeometry(11, 0), mainMat);
      abdomen.position.set(-10, 2, 0);

      const eyeL = new THREE.Mesh(new THREE.BoxGeometry(3, 3, 3), accentMat);
      eyeL.position.set(8, 3, -4);
      const eyeR = new THREE.Mesh(new THREE.BoxGeometry(3, 3, 3), accentMat);
      eyeR.position.set(8, 3, 4);

      const legs: THREE.Mesh[] = [];
      const legGeo = new THREE.BoxGeometry(3, 14, 3);
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
      return { type: e.type, group, mainMat, accentMat, legs, abdomen };
    }

    // 2. SPEEDSTER: Swept Delta-Wing Jet-Interceptor with Dual Afterburners
    if (e.type === 'speedster') {
      const fuselageGeo = new THREE.ConeGeometry(8, 30, 5);
      fuselageGeo.rotateZ(-Math.PI / 2);
      const fuselage = new THREE.Mesh(fuselageGeo, mainMat);

      const wingGeo = new THREE.BoxGeometry(14, 2, 32);
      const wings = new THREE.Mesh(wingGeo, darkMat);
      wings.position.set(-4, 0, 0);

      const canopy = new THREE.Mesh(
        new THREE.BoxGeometry(10, 4, 5),
        new THREE.MeshBasicMaterial({ color: 0x38bdf8 })
      );
      canopy.position.set(2, 4, 0);

      const flameGeo = new THREE.ConeGeometry(4, 14, 6);
      flameGeo.rotateZ(Math.PI / 2);
      const flameMat = new THREE.MeshBasicMaterial({ color: 0xf97316 });
      const f1 = new THREE.Mesh(flameGeo, flameMat);
      f1.position.set(-19, 0, -5);
      const f2 = new THREE.Mesh(flameGeo, flameMat);
      f2.position.set(-19, 0, 5);

      group.add(fuselage, wings, canopy, f1, f2);
      return { type: e.type, group, mainMat, accentMat, flames: [f1, f2] };
    }

    // 3. CHARGER: Horned Battering-Ram Juggernaut
    if (e.type === 'charger') {
      const hull = new THREE.Mesh(new THREE.BoxGeometry(24, 20, 22), mainMat);
      const plow = new THREE.Mesh(new THREE.BoxGeometry(8, 16, 26), darkMat);
      plow.position.set(13, -2, 0);

      const hornGeo = new THREE.ConeGeometry(4.5, 22, 5);
      hornGeo.rotateZ(-Math.PI / 2);
      const hL = new THREE.Mesh(hornGeo, accentMat);
      hL.position.set(18, 5, -11);
      const hR = new THREE.Mesh(hornGeo, accentMat);
      hR.position.set(18, 5, 11);

      group.add(hull, plow, hL, hR);
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
      const wheelGeo = new THREE.CylinderGeometry(5, 5, 10, 8);
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
      const tHead = new THREE.Mesh(new THREE.CylinderGeometry(12, 14, 10, 8), darkMat);
      const cannonGeo = new THREE.CylinderGeometry(2.8, 2.8, 26, 8);
      cannonGeo.rotateZ(Math.PI / 2);
      const c1 = new THREE.Mesh(cannonGeo, mainMat);
      c1.position.set(14, 1, -5);
      const c2 = new THREE.Mesh(cannonGeo, mainMat);
      c2.position.set(14, 1, 5);
      turret.add(tHead, c1, c2);
      turret.position.y = 13;

      group.add(body, tL, tR, turret);
      return { type: e.type, group, mainMat, accentMat, turret, wheels };
    }

    // 5. BOSS: Colossal Dreadnought Citadel with 3 Gyro Rings & 4 Orbiting Shields
    const innerStar = new THREE.Mesh(
      new THREE.IcosahedronGeometry(26, 1),
      new THREE.MeshBasicMaterial({ color: 0xffffff })
    );
    const outerShell = new THREE.Mesh(new THREE.DodecahedronGeometry(42, 0), mainMat);

    const ringGeo = new THREE.TorusGeometry(58, 3.2, 8, 32);
    const ringX = new THREE.Mesh(ringGeo, accentMat);
    const ringY = new THREE.Mesh(ringGeo, mainMat);
    ringY.rotation.x = Math.PI / 2;
    const ringZ = new THREE.Mesh(ringGeo, accentMat);
    ringZ.rotation.y = Math.PI / 2;

    const shieldsGroup = new THREE.Group();
    const shieldGeo = new THREE.BoxGeometry(10, 34, 24);
    for (let s = 0; s < 4; s++) {
      const a = (s / 4) * Math.PI * 2;
      const plate = new THREE.Mesh(shieldGeo, darkMat);
      plate.position.set(Math.cos(a) * 68, 0, Math.sin(a) * 68);
      plate.rotation.y = -a;
      shieldsGroup.add(plate);
    }

    const crownSpire = new THREE.Mesh(new THREE.ConeGeometry(14, 38, 6), accentMat);
    crownSpire.position.y = 54;

    group.add(innerStar, outerShell, ringX, ringY, ringZ, shieldsGroup, crownSpire);
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
      const mat = new THREE.MeshStandardMaterial({
        color: 0xfacc15,
        emissive: 0xfacc15,
        emissiveIntensity: 0.65,
        metalness: 0.7,
        roughness: 0.2
      });
      const mesh = new THREE.Mesh(this.geoLoot, mat);
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
      const hex = d.type === 'gold' ? 0xfacc15 : d.type === 'gem' ? 0x38bdf8 : 0x4ade80;
      const mat = mesh.material as THREE.MeshStandardMaterial;
      mat.color.setHex(hex);
      mat.emissive.setHex(hex);

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
    for (const line of this.lightningLines) {
      this.scene.remove(line);
      line.geometry.dispose();
      (line.material as THREE.Material).dispose();
    }
    this.lightningLines = [];

    for (const b of bolts) {
      if (b.points.length < 2) continue;
      const pts = b.points.map((pt) => new THREE.Vector3(pt.x, 22, pt.y));
      const geo = new THREE.BufferGeometry().setFromPoints(pts);
      const mat = new THREE.LineBasicMaterial({
        color: b.color,
        transparent: true,
        opacity: Math.max(0, b.alpha)
      });
      const line = new THREE.Line(geo, mat);
      this.scene.add(line);
      this.lightningLines.push(line);
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
