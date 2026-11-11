import * as THREE from 'three';
import { SaveManager } from '../core/SaveManager';
import type {
  Enemy,
  FrostRing,
  LightningBolt,
  LootDrop,
  Particle,
  Projectile
} from './GameEngine';
import { TIER_COLORS, WeaponInstance } from './WeaponSystem';

export class Renderer3D {
  private renderer: THREE.WebGLRenderer;
  private scene: THREE.Scene;
  public camera: THREE.PerspectiveCamera;

  private readonly worldSize: number;
  private camTarget = new THREE.Vector3(1100, 0, 1100);
  private projVec = new THREE.Vector3();

  // Player 3D Hierarchy
  private playerGroup: THREE.Group;
  private playerChassisMat: THREE.MeshStandardMaterial;
  private playerRingMat: THREE.MeshBasicMaterial;
  private playerTurretGroup: THREE.Group;
  private playerLight: THREE.PointLight;
  private weaponPods: THREE.Group[] = [];
  private weaponMats: THREE.MeshStandardMaterial[] = [];

  // Shared Geometries for 60FPS zero-overhead instancing/pooling
  private geoSwarmer = new THREE.OctahedronGeometry(15, 0);
  private geoSpeedster = new THREE.ConeGeometry(12, 28, 6);
  private geoCharger = new THREE.BoxGeometry(24, 22, 24);
  private geoTankBody = new THREE.BoxGeometry(34, 28, 34);
  private geoTankTread = new THREE.BoxGeometry(10, 16, 40);
  private geoBossCore = new THREE.DodecahedronGeometry(40, 1);
  private geoBossRing = new THREE.TorusGeometry(54, 3.5, 8, 32);

  private geoLoot = new THREE.OctahedronGeometry(9, 0);
  private geoProjSphere = new THREE.SphereGeometry(6, 8, 8);
  private geoProjSaw = new THREE.CylinderGeometry(16, 16, 3, 12);
  private geoParticle = new THREE.BoxGeometry(5, 5, 5);
  private geoFrostRing = new THREE.RingGeometry(0.88, 1.0, 32);

  // Active Entity Pools / Maps
  private enemyMeshes = new Map<
    number,
    { group: THREE.Group; mainMat: THREE.MeshStandardMaterial; ring1?: THREE.Mesh; ring2?: THREE.Mesh }
  >();
  private lootPool: THREE.Mesh[] = [];
  private projPool: THREE.Mesh[] = [];
  private particlePool: THREE.Mesh[] = [];
  private frostPool: THREE.Mesh[] = [];
  private lightningLines: THREE.Line[] = [];

  constructor(overlayCanvas: HTMLCanvasElement, worldSize: number) {
    this.worldSize = worldSize;

    // Create WebGLRenderer Canvas behind the 2D HUD overlay canvas
    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
      powerPreference: 'high-performance'
    });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.domElement.id = 'webgl-canvas';
    overlayCanvas.parentElement?.insertBefore(this.renderer.domElement, overlayCanvas);

    // Scene & Cyber Fog
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x050811);
    this.scene.fog = new THREE.FogExp2(0x050811, 0.00052);

    // Perspective Camera (Angled Isometric / Top-Down Action RPG view)
    this.camera = new THREE.PerspectiveCamera(46, window.innerWidth / window.innerHeight, 10, 3500);
    this.camera.position.set(worldSize / 2, 540, worldSize / 2 + 440);
    this.camera.lookAt(worldSize / 2, 0, worldSize / 2);

    // RotateCone so speedster points along +X by default
    this.geoSpeedster.rotateZ(-Math.PI / 2);
    this.geoFrostRing.rotateX(-Math.PI / 2);

    // Lights
    const ambient = new THREE.AmbientLight(0x334155, 2.2);
    this.scene.add(ambient);

    const dirLight = new THREE.DirectionalLight(0xe0f2fe, 2.4);
    dirLight.position.set(worldSize / 2 + 400, 900, worldSize / 2 + 300);
    this.scene.add(dirLight);

    const backLight = new THREE.DirectionalLight(0xa855f7, 1.1);
    backLight.position.set(worldSize / 2 - 500, 600, worldSize / 2 - 500);
    this.scene.add(backLight);

    this.buildCyberArena();

    // Build Player 3D Mech
    this.playerGroup = new THREE.Group();
    this.playerChassisMat = new THREE.MeshStandardMaterial({
      color: 0x0ea5e9,
      emissive: 0x0ea5e9,
      emissiveIntensity: 0.45,
      metalness: 0.65,
      roughness: 0.25
    });
    this.playerRingMat = new THREE.MeshBasicMaterial({ color: 0x38bdf8 });
    this.playerTurretGroup = new THREE.Group();
    this.playerLight = new THREE.PointLight(0x38bdf8, 3.5, 420, 1.5);
    this.buildPlayerMech();
  }

  public resize(width: number, height: number): void {
    this.camera.aspect = width / Math.max(1, height);
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(width, height);
  }

  private buildCyberArena(): void {
    const half = this.worldSize / 2;

    // Metallic Cyber Floor Plane
    const floorGeo = new THREE.PlaneGeometry(this.worldSize + 1200, this.worldSize + 1200);
    floorGeo.rotateX(-Math.PI / 2);
    const floorMat = new THREE.MeshStandardMaterial({
      color: 0x070b16,
      metalness: 0.75,
      roughness: 0.35
    });
    const floorMesh = new THREE.Mesh(floorGeo, floorMat);
    floorMesh.position.set(half, -1, half);
    this.scene.add(floorMesh);

    // Primary Arena Grid
    const grid = new THREE.GridHelper(this.worldSize, 28, 0x38bdf8, 0x1e293b);
    grid.position.set(half, 0.2, half);
    this.scene.add(grid);

    // Glowing Neon Boundary Walls & Corner Pylons
    const wallMat = new THREE.MeshBasicMaterial({ color: 0x38bdf8 });
    const wallSubMat = new THREE.MeshStandardMaterial({
      color: 0x0f172a,
      emissive: 0x0284c7,
      emissiveIntensity: 0.5,
      metalness: 0.8,
      roughness: 0.2
    });

    const wallThickness = 10;
    const wallHeight = 32;
    const hGeo = new THREE.BoxGeometry(this.worldSize, wallHeight, wallThickness);
    const vGeo = new THREE.BoxGeometry(wallThickness, wallHeight, this.worldSize);

    const northWall = new THREE.Mesh(hGeo, wallSubMat);
    northWall.position.set(half, wallHeight / 2, 0);
    const southWall = new THREE.Mesh(hGeo, wallSubMat);
    southWall.position.set(half, wallHeight / 2, this.worldSize);
    const westWall = new THREE.Mesh(vGeo, wallSubMat);
    westWall.position.set(0, wallHeight / 2, half);
    const eastWall = new THREE.Mesh(vGeo, wallSubMat);
    eastWall.position.set(this.worldSize, wallHeight / 2, half);

    this.scene.add(northWall, southWall, westWall, eastWall);

    // Top Neon Laser Strips on Boundary Walls
    const stripH = new THREE.BoxGeometry(this.worldSize + 12, 4, 4);
    const stripV = new THREE.BoxGeometry(4, 4, this.worldSize + 12);
    const sN = new THREE.Mesh(stripH, wallMat);
    sN.position.set(half, wallHeight + 2, 0);
    const sS = new THREE.Mesh(stripH, wallMat);
    sS.position.set(half, wallHeight + 2, this.worldSize);
    const sW = new THREE.Mesh(stripV, wallMat);
    sW.position.set(0, wallHeight + 2, half);
    const sE = new THREE.Mesh(stripV, wallMat);
    sE.position.set(this.worldSize, wallHeight + 2, half);
    this.scene.add(sN, sS, sW, sE);

    // 4 Corner Cyber Pylons
    const pylonGeo = new THREE.CylinderGeometry(18, 24, 95, 6);
    const corners = [
      [0, 0],
      [this.worldSize, 0],
      [0, this.worldSize],
      [this.worldSize, this.worldSize]
    ];
    for (const [cx, cz] of corners) {
      const pylon = new THREE.Mesh(pylonGeo, wallSubMat);
      pylon.position.set(cx, 47.5, cz);
      this.scene.add(pylon);
    }
  }

  private buildPlayerMech(): void {
    // Hexagonal Hovering Armored Core
    const chassisGeo = new THREE.CylinderGeometry(18, 22, 16, 6);
    const chassisMesh = new THREE.Mesh(chassisGeo, this.playerChassisMat);
    chassisMesh.position.y = 14;
    this.playerGroup.add(chassisMesh);

    // Glowing Hover Ring around Mech Base
    const ringGeo = new THREE.TorusGeometry(23, 2.2, 8, 24);
    ringGeo.rotateX(Math.PI / 2);
    const ringMesh = new THREE.Mesh(ringGeo, this.playerRingMat);
    ringMesh.position.y = 8;
    this.playerGroup.add(ringMesh);

    // Rotating Turret Head + Twin Barrels
    const headGeo = new THREE.SphereGeometry(12, 12, 12);
    const headMat = new THREE.MeshStandardMaterial({
      color: 0xe2e8f0,
      metalness: 0.8,
      roughness: 0.2
    });
    const headMesh = new THREE.Mesh(headGeo, headMat);
    this.playerTurretGroup.add(headMesh);

    const barrelGeo = new THREE.CylinderGeometry(2.5, 2.5, 22, 8);
    barrelGeo.rotateZ(Math.PI / 2);
    const barrelL = new THREE.Mesh(barrelGeo, this.playerChassisMat);
    barrelL.position.set(14, 0, -5);
    const barrelR = new THREE.Mesh(barrelGeo, this.playerChassisMat);
    barrelR.position.set(14, 0, 5);
    this.playerTurretGroup.add(barrelL, barrelR);

    this.playerTurretGroup.position.y = 24;
    this.playerGroup.add(this.playerTurretGroup);

    this.playerLight.position.set(0, 45, 0);
    this.playerGroup.add(this.playerLight);

    // 6 Orbiting Weapon Pod Meshes
    for (let i = 0; i < 6; i++) {
      const podGroup = new THREE.Group();
      const mat = new THREE.MeshStandardMaterial({
        color: 0x38bdf8,
        emissive: 0x38bdf8,
        emissiveIntensity: 0.6,
        metalness: 0.6,
        roughness: 0.2
      });

      const coreGeo = new THREE.OctahedronGeometry(8, 0);
      const coreMesh = new THREE.Mesh(coreGeo, mat);
      podGroup.add(coreMesh);

      const haloGeo = new THREE.TorusGeometry(11, 1.4, 6, 16);
      haloGeo.rotateX(Math.PI / 2);
      const haloMesh = new THREE.Mesh(haloGeo, mat);
      podGroup.add(haloMesh);

      podGroup.visible = false;
      this.scene.add(podGroup);
      this.weaponPods.push(podGroup);
      this.weaponMats.push(mat);
    }

    this.scene.add(this.playerGroup);
  }

  /**
   * Projects a 3D world position (worldX, heightOffset, worldY) into 2D screen pixel coordinates
   * for crisp floating damage numbers and enemy health bars.
   */
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
      screenShake
    } = params;

    // 1. Update Camera Follow + 3D Screen Shake
    const shakeX = (Math.random() - 0.5) * screenShake * 1.4;
    const shakeZ = (Math.random() - 0.5) * screenShake * 1.4;
    this.camTarget.x += (player.x - this.camTarget.x) * 0.18;
    this.camTarget.z += (player.y - this.camTarget.z) * 0.18;

    this.camera.position.set(this.camTarget.x + shakeX, 535, this.camTarget.z + 435 + shakeZ);
    this.camera.lookAt(this.camTarget.x + shakeX * 0.3, 0, this.camTarget.z + shakeZ * 0.3);

    // 2. Update Player 3D Mech
    const cmd = SaveManager.getInstance().data.selectedCommander;
    const cmdColorHex =
      cmd === 'tesla_engineer' ? 0xa855f7 : cmd === 'void_phantom' ? 0xf43f5e : 0x0ea5e9;
    const isFlashing = player.invulnTimer > 0 && Math.floor(performance.now() / 60) % 2 === 0;

    this.playerChassisMat.color.setHex(isFlashing ? 0xffffff : cmdColorHex);
    this.playerChassisMat.emissive.setHex(isFlashing ? 0xffffff : cmdColorHex);
    this.playerRingMat.color.setHex(cmdColorHex);
    this.playerLight.color.setHex(cmdColorHex);

    const hoverBob = Math.sin(now * 6) * 2.5;
    this.playerGroup.position.set(player.x, hoverBob, player.y);
    this.playerTurretGroup.rotation.y = -player.angle;

    // 3. Update Orbiting 3D Weapon Pods
    for (let i = 0; i < 6; i++) {
      const w = equippedWeapons[i];
      const pod = this.weaponPods[i];
      if (!w) {
        pod.visible = false;
        continue;
      }
      pod.visible = true;
      const wx = player.x + Math.cos(w.orbitAngle) * 48;
      const wz = player.y + Math.sin(w.orbitAngle) * 48;
      const scale = 0.85 + w.tier * 0.16;

      pod.position.set(wx, 18 + Math.sin(now * 8 + i) * 2.5, wz);
      pod.scale.setScalar(scale);
      pod.rotation.y = now * 4 + i;
      pod.rotation.x = Math.sin(now * 3 + i) * 0.3;

      const tierColor = new THREE.Color(TIER_COLORS[w.tier - 1] || '#38bdf8');
      this.weaponMats[i].color.copy(tierColor);
      this.weaponMats[i].emissive.copy(tierColor);
    }

    // 4. Sync 3D Enemies
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
      const bob = Math.sin(now * 7 + e.id) * 2.5;
      entry.group.position.set(e.x, e.radius + bob, e.y);

      if (e.type === 'swarmer') {
        entry.group.rotation.x += 0.08;
        entry.group.rotation.y += 0.1;
      } else if (e.type === 'boss') {
        entry.group.rotation.y += 0.025;
        if (entry.ring1) entry.ring1.rotation.x += 0.05;
        if (entry.ring2) entry.ring2.rotation.z += 0.06;
      } else {
        entry.group.rotation.y = -angleToPlayer;
      }

      // Hit-flash / Slow-tint / Base color
      if (e.hitFlash > 0) {
        entry.mainMat.color.setHex(0xffffff);
        entry.mainMat.emissive.setHex(0xffffff);
        entry.mainMat.emissiveIntensity = 1.0;
      } else if (e.slowTimer > 0) {
        entry.mainMat.color.setHex(0x67e8f9);
        entry.mainMat.emissive.setHex(0x0284c7);
        entry.mainMat.emissiveIntensity = 0.6;
      } else {
        entry.mainMat.color.set(e.color);
        entry.mainMat.emissive.set(e.color);
        entry.mainMat.emissiveIntensity = e.type === 'boss' ? 0.65 : 0.35;
      }
    }

    // Prune dead enemy meshes
    for (const [id, entry] of this.enemyMeshes.entries()) {
      if (!activeIds.has(id)) {
        this.scene.remove(entry.group);
        entry.mainMat.dispose();
        this.enemyMeshes.delete(id);
      }
    }

    // 5. Sync 3D Projectiles
    this.syncProjectiles(projectiles);

    // 6. Sync 3D Loot Crystals
    this.syncLootDrops(lootDrops, now);

    // 7. Sync 3D Frost Rings
    this.syncFrostRings(frostRings);

    // 8. Sync 3D Chain Lightning Bolts
    this.syncLightningBolts(lightningBolts);

    // 9. Sync 3D Particles
    this.syncParticles(particles);

    this.renderer.render(this.scene, this.camera);
  }

  private createEnemyMesh(e: Enemy): {
    group: THREE.Group;
    mainMat: THREE.MeshStandardMaterial;
    ring1?: THREE.Mesh;
    ring2?: THREE.Mesh;
  } {
    const group = new THREE.Group();
    const mainMat = new THREE.MeshStandardMaterial({
      color: e.color,
      emissive: e.color,
      emissiveIntensity: 0.4,
      metalness: 0.55,
      roughness: 0.3
    });

    if (e.type === 'swarmer') {
      const m = new THREE.Mesh(this.geoSwarmer, mainMat);
      group.add(m);
      return { group, mainMat };
    }

    if (e.type === 'speedster') {
      const m = new THREE.Mesh(this.geoSpeedster, mainMat);
      group.add(m);
      return { group, mainMat };
    }

    if (e.type === 'charger') {
      const m = new THREE.Mesh(this.geoCharger, mainMat);
      group.add(m);
      return { group, mainMat };
    }

    if (e.type === 'tank') {
      const body = new THREE.Mesh(this.geoTankBody, mainMat);
      const treadMat = new THREE.MeshStandardMaterial({
        color: 0x1e293b,
        metalness: 0.8,
        roughness: 0.4
      });
      const treadL = new THREE.Mesh(this.geoTankTread, treadMat);
      treadL.position.set(0, -4, -18);
      const treadR = new THREE.Mesh(this.geoTankTread, treadMat);
      treadR.position.set(0, -4, 18);
      group.add(body, treadL, treadR);
      return { group, mainMat };
    }

    // Boss Dreadnought
    const core = new THREE.Mesh(this.geoBossCore, mainMat);
    const ringMat = new THREE.MeshBasicMaterial({ color: 0xfacc15, wireframe: true });
    const ring1 = new THREE.Mesh(this.geoBossRing, ringMat);
    const ring2 = new THREE.Mesh(this.geoBossRing, ringMat);
    ring2.rotation.x = Math.PI / 2;
    group.add(core, ring1, ring2);
    return { group, mainMat, ring1, ring2 };
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
