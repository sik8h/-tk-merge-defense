/* ==========================================================================
   Argon Engine: Three.js WebGL 3D Tactical Merge Defense
   ========================================================================== */

// --- [1. HERO & SOUND CONFIG] ---
const HERO_CONFIG = {
  1: { tier: 1, name: "의용병", faction: "촉", atk: 25, asp: 1.0, range: 4.5, type: "단일", color: 0x38bdf8, shape: "pyramid", spritePath: null, soundPath: null, desc: "기본 신속 단발 사격" },
  2: { tier: 2, name: "정예 창병", faction: "위", atk: 55, asp: 1.3, range: 4.0, type: "연타", color: 0x60a5fa, shape: "cube", spritePath: null, soundPath: null, desc: "빠른 속도의 창격 연타" },
  3: { tier: 3, name: "황충", faction: "촉", atk: 110, asp: 0.9, range: 7.0, type: "관통", color: 0xfacc15, shape: "gimbal", spritePath: null, soundPath: null, desc: "장거리 관통 신궁 화살" },
  4: { tier: 4, name: "조운", faction: "촉", atk: 210, asp: 1.7, range: 5.0, type: "연타", color: 0x22d3ee, shape: "spear", spritePath: null, soundPath: null, desc: "전광석화 초고속 창격" },
  5: { tier: 5, name: "관우", faction: "촉", atk: 420, asp: 0.85, range: 6.0, type: "범위폭발", color: 0x10b981, shape: "crescent", spritePath: null, soundPath: null, desc: "청룡언월도 검기 파동" },
  6: { tier: 6, name: "제갈량", faction: "촉", atk: 780, asp: 0.75, range: 6.5, type: "둔화", color: 0x8b5cf6, shape: "octahedron", spritePath: null, soundPath: null, desc: "팔진도 낙뢰 & 화공 둔화" },
  7: { tier: 7, name: "무신 여포", faction: "군웅", atk: 1600, asp: 1.1, range: 9.0, type: "범위폭발", color: 0xef4444, shape: "musou", spritePath: null, soundPath: null, desc: "진홍색 방천화극 전장 초토화" }
};

const SOUND_CONFIG = {
  enabled: true,
  bow: null,
  hit: null,
  merge: null,
  boss: null,
  skill: null
};

// --- [2. AUDIO SYNTHESIZER Engine] ---
class SoundEngine {
  constructor() {
    this.ctx = null;
    this.enabled = true;
  }
  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) this.ctx = new AudioCtx();
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }
  playTone(freq, type, duration, startVol = 0.1, endVol = 0) {
    if (!this.enabled || !this.ctx) return;
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
      gain.gain.setValueAtTime(startVol, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(Math.max(endVol, 0.0001), this.ctx.currentTime + duration);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + duration);
    } catch(e) {}
  }
  playBow() { this.playTone(600, 'sine', 0.08, 0.1, 0.001); }
  playHit() { this.playTone(150, 'triangle', 0.1, 0.2, 0.001); }
  playMerge() {
    if (!this.enabled || !this.ctx) return;
    [523.25, 659.25, 783.99, 1046.50].forEach((freq, idx) => {
      setTimeout(() => this.playTone(freq, 'sine', 0.25, 0.15, 0.001), idx * 60);
    });
  }
  playBossAlert() {
    if (!this.enabled || !this.ctx) return;
    [220, 196, 174, 130].forEach((freq, idx) => {
      setTimeout(() => this.playTone(freq, 'sawtooth', 0.35, 0.2, 0.001), idx * 120);
    });
  }
  playSkill() {
    if (!this.enabled || !this.ctx) return;
    for (let i = 0; i < 8; i++) {
      setTimeout(() => {
        this.playTone(100 + i * 40, 'sawtooth', 0.15, 0.25, 0.01);
      }, i * 40);
    }
  }
}
const audioEngine = new SoundEngine();

// --- [3. GAME STATE & VARIABLES] ---
const GAME_STATE = {
  gold: 100,
  gateHp: 100,
  maxGateHp: 100,
  kills: 0,
  wave: 1,
  upgradeLvl: 1,
  recruitCost: 20,
  upgradeCost: 30,
  skillCooldown: 0,
  maxSkillCooldown: 20,
  isGameOver: false,
  isPaused: false,
  totalDps: 0,
  // Synergy Buffs
  synergies: { shu: false, wei: false, qun: false },
  // Strategy Buffs
  buffs: { atkMult: 1.0, aspMult: 1.0, rangeMult: 1.0, goldMult: 1.0, critChance: 0.15 }
};

const GRID_COLS = 5;
const GRID_ROWS = 4;
const gridUnits = Array(GRID_ROWS).fill(null).map(() => Array(GRID_COLS).fill(null));
let gridTiles3D = [];

// Three.js Scene Components
let scene, camera, renderer, composer, bloomPass;
let hudCanvas, hudCtx;
let cameraMode = 0; // 0: 3D Quarter View, 1: Blueprint Top View, 2: Gate View
const cameraPresets = [
  { pos: new THREE.Vector3(0, 26, 22), look: new THREE.Vector3(0, 0, 1) },
  { pos: new THREE.Vector3(0, 38, 0.1), look: new THREE.Vector3(0, 0, 0) },
  { pos: new THREE.Vector3(0, 6, 14), look: new THREE.Vector3(0, 1, -10) }
];
let targetCamPos = cameraPresets[0].pos.clone();
let targetCamLook = cameraPresets[0].look.clone();
let currentCamLook = cameraPresets[0].look.clone();

// Raycasting & Interaction
const raycaster = new THREE.Raycaster();
const mouseVec = new THREE.Vector2();
let draggedHero = null;
let dragSourcePos = { row: -1, col: -1 };
let dragCurrentWorldPos = new THREE.Vector3();

// Entities
let enemies = [];
let projectiles = [];
let vfxParticles = [];

// S-Curve 3D Path Points
const path3DPoints = [
  new THREE.Vector3(-4.5, 0, -14.0),
  new THREE.Vector3(4.5, 0, -10.5),
  new THREE.Vector3(-4.5, 0, -7.0),
  new THREE.Vector3(3.5, 0, -3.5),
  new THREE.Vector3(0.0, 0, -1.0)
];

// Screen Shake
let shakeIntensity = 0;

// --- [4. THREE.JS INITIALIZATION & SCENE SETUP] ---
function initThreeJS() {
  const container = document.getElementById('webgl-container');
  const width = container.clientWidth;
  const height = container.clientHeight;

  scene = new THREE.Scene();
  scene.background = new THREE.Color(0x040711);
  scene.fog = new THREE.FogExp2(0x040711, 0.018);

  camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
  camera.position.copy(targetCamPos);
  camera.lookAt(targetCamLook);

  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "high-performance" });
  renderer.setSize(width, height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  container.appendChild(renderer.domElement);

  // Post Processing Bloom Pipeline
  const renderScene = new THREE.RenderPass(scene, camera);
  bloomPass = new THREE.UnrealBloomPass(new THREE.Vector2(width, height), 1.25, 0.4, 0.2);
  composer = new THREE.EffectComposer(renderer);
  composer.addPass(renderScene);
  composer.addPass(bloomPass);

  // Lighting Setup
  const ambientLight = new THREE.AmbientLight(0x38bdf8, 0.6);
  scene.add(ambientLight);

  const dirLight = new THREE.DirectionalLight(0xffffff, 1.2);
  dirLight.position.set(10, 30, 15);
  dirLight.castShadow = true;
  dirLight.shadow.mapSize.width = 1024;
  dirLight.shadow.mapSize.height = 1024;
  scene.add(dirLight);

  const gateLight = new THREE.PointLight(0x38bdf8, 2, 20);
  gateLight.position.set(0, 3, -1.5);
  scene.add(gateLight);

  // Setup 2D HUD Canvas Overlay
  hudCanvas = document.getElementById('hudCanvas');
  hudCtx = hudCanvas.getContext('2d');
  resizeCanvas();

  window.addEventListener('resize', onWindowResize);

  // Build Environment
  build3DEnvironment();
  build3DGridTiles();
}

function resizeCanvas() {
  const container = document.getElementById('game-view');
  const w = container.clientWidth;
  const h = container.clientHeight;
  hudCanvas.width = w;
  hudCanvas.height = h;
  if (renderer && composer) {
    renderer.setSize(w, h);
    composer.setSize(w, h);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  }
}

function onWindowResize() {
  resizeCanvas();
}

// --- [5. 3D ENVIRONMENT & FIELD BUILDER] ---
function build3DEnvironment() {
  // S-Curve Energy Road
  const curve = new THREE.CatmullRomCurve3(path3DPoints);
  const roadGeo = new THREE.TubeGeometry(curve, 64, 0.6, 8, false);
  const roadMat = new THREE.MeshStandardMaterial({
    color: 0x0284c7,
    emissive: 0x0369a1,
    emissiveIntensity: 0.5,
    roughness: 0.3,
    metalness: 0.8
  });
  const roadMesh = new THREE.Mesh(roadGeo, roadMat);
  roadMesh.position.y = -0.1;
  scene.add(roadMesh);

  // Road Holographic Border Rings
  const points = curve.getPoints(30);
  points.forEach((pt, i) => {
    if (i % 2 === 0) {
      const ringGeo = new THREE.RingGeometry(0.7, 0.85, 16);
      const ringMat = new THREE.MeshBasicMaterial({ color: 0x38bdf8, side: THREE.DoubleSide, transparent: true, opacity: 0.6 });
      const ring = new THREE.Mesh(ringGeo, ringMat);
      ring.rotation.x = Math.PI / 2;
      ring.position.copy(pt);
      ring.position.y = 0.01;
      scene.add(ring);
    }
  });

  // Hulao Gate Wall at z = -1
  const gateGroup = new THREE.Group();
  gateGroup.position.set(0, 0, -1.0);

  // Wall Base
  const wallGeo = new THREE.BoxGeometry(14, 3, 1.5);
  const wallMat = new THREE.MeshStandardMaterial({ color: 0x1e293b, roughness: 0.5, metalness: 0.8 });
  const wall = new THREE.Mesh(wallGeo, wallMat);
  wall.position.y = 1.5;
  gateGroup.add(wall);

  // Energy Wall Barrier
  const barrierGeo = new THREE.PlaneGeometry(14, 4);
  const barrierMat = new THREE.MeshBasicMaterial({ color: 0x38bdf8, transparent: true, opacity: 0.25, side: THREE.DoubleSide });
  const barrier = new THREE.Mesh(barrierGeo, barrierMat);
  barrier.position.set(0, 2, 0.8);
  gateGroup.add(barrier);

  scene.add(gateGroup);

  // Dismissal / Refund Area Mesh at Bottom
  const dismissGeo = new THREE.BoxGeometry(12, 0.1, 2);
  const dismissMat = new THREE.MeshStandardMaterial({ color: 0xb91c1c, emissive: 0x7f1d1d, emissiveIntensity: 0.4, transparent: true, opacity: 0.8 });
  const dismissMesh = new THREE.Mesh(dismissGeo, dismissMat);
  dismissMesh.position.set(0, 0, 12.8);
  dismissMesh.name = "dismissZone";
  scene.add(dismissMesh);
}

function build3DGridTiles() {
  const startX = -4.0;
  const spacingX = 2.0;
  const startZ = 2.0;
  const spacingZ = 2.2;

  gridTiles3D = [];

  for (let r = 0; r < GRID_ROWS; r++) {
    gridTiles3D[r] = [];
    for (let c = 0; c < GRID_COLS; c++) {
      const posX = startX + c * spacingX;
      const posZ = startZ + r * spacingZ;

      const tileGroup = new THREE.Group();
      tileGroup.position.set(posX, 0, posZ);

      // Tile Base Altar
      const baseGeo = new THREE.BoxGeometry(1.7, 0.2, 1.8);
      const baseMat = new THREE.MeshStandardMaterial({ color: 0x0f172a, roughness: 0.4, metalness: 0.8 });
      const base = new THREE.Mesh(baseGeo, baseMat);
      base.position.y = 0.1;
      base.castShadow = true;
      base.receiveShadow = true;
      tileGroup.add(base);

      // Tile Border Neon Outline
      const borderGeo = new THREE.RingGeometry(0.7, 0.8, 4);
      const borderMat = new THREE.MeshBasicMaterial({ color: 0x1e293b, side: THREE.DoubleSide, transparent: true, opacity: 0.8 });
      const border = new THREE.Mesh(borderGeo, borderMat);
      border.rotation.x = Math.PI / 2;
      border.rotation.z = Math.PI / 4;
      border.position.y = 0.21;
      tileGroup.add(border);

      tileGroup.userData = { row: r, col: c, borderMat: borderMat };
      scene.add(tileGroup);
      gridTiles3D[r][c] = tileGroup;
    }
  }
}

// --- [6. PROCEDURAL 3D HERO MESH ASSEMBLY (`createHero3DMesh`)] ---
function createHero3DMesh(tier) {
  const cfg = HERO_CONFIG[tier] || HERO_CONFIG[1];
  const heroGroup = new THREE.Group();

  // 1. Common Metallic Altar Pedestal Base
  const baseGeo = new THREE.CylinderGeometry(0.75, 0.85, 0.2, 8);
  const baseMat = new THREE.MeshStandardMaterial({ color: 0x334155, metalness: 0.85, roughness: 0.2 });
  const baseMesh = new THREE.Mesh(baseGeo, baseMat);
  baseMesh.position.y = 0.1;
  heroGroup.add(baseMesh);

  // Rotating Magic Circle Ring beneath unit
  const ringGeo = new THREE.RingGeometry(0.5, 0.7, 16);
  const ringMat = new THREE.MeshBasicMaterial({ color: cfg.color, side: THREE.DoubleSide, transparent: true, opacity: 0.8 });
  const magicRing = new THREE.Mesh(ringGeo, ringMat);
  magicRing.rotation.x = Math.PI / 2;
  magicRing.position.y = 0.22;
  magicRing.name = "magicRing";
  heroGroup.add(magicRing);

  // 2. Procedural Tier Core Meshes
  const coreMat = new THREE.MeshStandardMaterial({
    color: cfg.color,
    emissive: cfg.color,
    emissiveIntensity: 0.6,
    roughness: 0.2,
    metalness: 0.9
  });

  const coreGroup = new THREE.Group();
  coreGroup.position.y = 0.9;
  coreGroup.name = "coreGroup";

  if (tier === 1) { // 의용병: Pyramid core + satellite sphere
    const pyrGeo = new THREE.ConeGeometry(0.4, 0.7, 4);
    const pyr = new THREE.Mesh(pyrGeo, coreMat);
    coreGroup.add(pyr);

    const satGeo = new THREE.SphereGeometry(0.12, 8, 8);
    const sat = new THREE.Mesh(satGeo, coreMat);
    sat.position.set(0.6, 0.2, 0);
    sat.name = "satellite";
    coreGroup.add(sat);
  } else if (tier === 2) { // 정예 창병: Cube core + orbiting spear cone
    const cubeGeo = new THREE.BoxGeometry(0.5, 0.5, 0.5);
    const cube = new THREE.Mesh(cubeGeo, coreMat);
    coreGroup.add(cube);

    const spearGeo = new THREE.ConeGeometry(0.15, 0.6, 6);
    const spear = new THREE.Mesh(spearGeo, coreMat);
    spear.position.set(0.6, 0, 0);
    spear.rotation.z = -Math.PI / 2;
    spear.name = "satellite";
    coreGroup.add(spear);
  } else if (tier === 3) { // 황충: Double Gimbal Torus Rings + Spear Cone
    const torus1Geo = new THREE.TorusGeometry(0.5, 0.05, 8, 24);
    const torus1 = new THREE.Mesh(torus1Geo, coreMat);
    coreGroup.add(torus1);

    const torus2 = torus1.clone();
    torus2.rotation.x = Math.PI / 2;
    coreGroup.add(torus2);

    const coneGeo = new THREE.ConeGeometry(0.2, 0.8, 8);
    const cone = new THREE.Mesh(coneGeo, coreMat);
    coreGroup.add(cone);
  } else if (tier === 4) { // 조운: Triple Gimbal Torus + High Speed Spear
    for (let i = 0; i < 3; i++) {
      const tGeo = new THREE.TorusGeometry(0.55, 0.04, 8, 24);
      const tMesh = new THREE.Mesh(tGeo, coreMat);
      tMesh.rotation.set(i * Math.PI / 3, i * Math.PI / 4, 0);
      coreGroup.add(tMesh);
    }
    const coneGeo = new THREE.ConeGeometry(0.22, 0.9, 8);
    const cone = new THREE.Mesh(coneGeo, coreMat);
    coreGroup.add(cone);
  } else if (tier === 5) { // 관우: Emerald Core + 2 High-Speed Rotating Crescent Blades
    const sphereGeo = new THREE.SphereGeometry(0.35, 16, 16);
    const sphere = new THREE.Mesh(sphereGeo, coreMat);
    coreGroup.add(sphere);

    for (let i = 0; i < 2; i++) {
      const crescentGeo = new THREE.TorusGeometry(0.7, 0.08, 8, 24, Math.PI * 1.2);
      const crescent = new THREE.Mesh(crescentGeo, coreMat);
      crescent.rotation.x = Math.PI / 2;
      crescent.rotation.y = i * Math.PI;
      crescent.name = "crescentBlade";
      coreGroup.add(crescent);
    }
  } else if (tier === 6) { // 제갈량: Octahedron Crystal + 3-Layer Tilted Bagua Rings
    const octGeo = new THREE.OctahedronGeometry(0.45);
    const oct = new THREE.Mesh(octGeo, coreMat);
    coreGroup.add(oct);

    for (let i = 0; i < 3; i++) {
      const rGeo = new THREE.TorusGeometry(0.65 + i * 0.15, 0.03, 8, 32);
      const rMesh = new THREE.Mesh(rGeo, coreMat);
      rMesh.rotation.set(Math.PI / 4 + i * 0.2, i * Math.PI / 3, 0);
      rMesh.name = "baguaRing";
      coreGroup.add(rMesh);
    }
  } else if (tier === 7) { // 무신 여포: Crimson Sun Core + 8-Way Fangtian Ji Blades
    const sunGeo = new THREE.SphereGeometry(0.4, 16, 16);
    const sun = new THREE.Mesh(sunGeo, coreMat);
    coreGroup.add(sun);

    for (let i = 0; i < 8; i++) {
      const angle = (i / 8) * Math.PI * 2;
      const bladeGeo = new THREE.ConeGeometry(0.12, 0.7, 6);
      const blade = new THREE.Mesh(bladeGeo, coreMat);
      blade.position.set(Math.cos(angle) * 0.75, Math.sin(angle) * 0.75, 0);
      blade.rotation.z = angle - Math.PI / 2;
      coreGroup.add(blade);
    }
    const plasmaRingGeo = new THREE.TorusGeometry(0.9, 0.05, 8, 32);
    const plasmaRing = new THREE.Mesh(plasmaRingGeo, coreMat);
    plasmaRing.rotation.x = Math.PI / 2;
    plasmaRing.name = "plasmaRing";
    coreGroup.add(plasmaRing);
  }

  heroGroup.add(coreGroup);
  return heroGroup;
}

// Hero Entity Wrapper Class
class Hero {
  constructor(tier, row, col) {
    this.tier = tier;
    this.row = row;
    this.col = col;
    this.config = HERO_CONFIG[tier];
    this.lastAttackTime = 0;

    this.mesh = createHero3DMesh(tier);
    this.updateWorldPosition();
    scene.add(this.mesh);
  }

  updateWorldPosition() {
    const tile = gridTiles3D[this.row][this.col];
    if (tile) {
      this.mesh.position.set(tile.position.x, 0, tile.position.z);
    }
  }

  getWorldPosition() {
    return this.mesh.position.clone().add(new THREE.Vector3(0, 0.9, 0));
  }

  animate(dt) {
    if (!this.mesh) return;
    const coreGroup = this.mesh.getObjectByName("coreGroup");
    const magicRing = this.mesh.getObjectByName("magicRing");

    if (magicRing) magicRing.rotation.z += dt * 1.5;

    if (coreGroup) {
      coreGroup.rotation.y += dt * 1.2;

      // Animate Tier specific elements
      const sat = coreGroup.getObjectByName("satellite");
      if (sat) {
        const t = Date.now() * 0.003;
        sat.position.x = Math.cos(t) * 0.6;
        sat.position.z = Math.sin(t) * 0.6;
      }

      coreGroup.traverse((child) => {
        if (child.name === "crescentBlade" || child.name === "baguaRing" || child.name === "plasmaRing") {
          child.rotation.z += dt * 2.5;
        }
      });
    }
  }

  destroy() {
    if (this.mesh) {
      scene.remove(this.mesh);
    }
  }
}

// --- [7. ENEMY & COMBAT SYSTEM] ---
class Enemy {
  constructor(wave) {
    this.wave = wave;
    this.isBoss = (wave % 5 === 0);
    this.pathIndex = 0;
    this.progress = 0; // 0.0 to 1.0 along spline path
    this.speed = this.isBoss ? 0.025 : 0.045 + Math.min(wave * 0.002, 0.03);

    const baseHp = 100 * Math.pow(1.3, wave - 1);
    this.maxHp = Math.round(this.isBoss ? baseHp * 6 : baseHp);
    this.hp = this.maxHp;

    // Names
    if (this.isBoss) {
      const bosses = ["화웅", "안량", "문추", "동탁", "무신 여포"];
      this.name = bosses[Math.floor((wave / 5 - 1) % bosses.length)];
    } else {
      const grunts = ["황건 병사", "서량 기병", "동탁 정예병", "조조 돌격병"];
      this.name = grunts[(wave - 1) % grunts.length];
    }

    // 3D Mesh
    const size = this.isBoss ? 1.2 : 0.6;
    const geo = this.isBoss ? new THREE.DodecahedronGeometry(size) : new THREE.SphereGeometry(size, 12, 12);
    const color = this.isBoss ? 0xef4444 : 0xf97316;
    const mat = new THREE.MeshStandardMaterial({ color: color, emissive: color, emissiveIntensity: 0.4, roughness: 0.3 });
    this.mesh = new THREE.Mesh(geo, mat);
    this.mesh.position.copy(path3DPoints[0]);
    this.mesh.position.y = size;
    this.mesh.castShadow = true;
    scene.add(this.mesh);

    this.curve = new THREE.CatmullRomCurve3(path3DPoints);
  }

  update(dt) {
    this.progress += this.speed * dt;
    if (this.progress >= 1.0) {
      // Reached Gate
      GAME_STATE.gateHp = Math.max(0, GAME_STATE.gateHp - (this.isBoss ? 25 : 10));
      updateHUD();
      triggerScreenShake(0.5);
      this.destroy();
      return false; // remove
    }

    const pos = this.curve.getPointAt(this.progress);
    this.mesh.position.copy(pos);
    this.mesh.position.y = this.isBoss ? 1.2 : 0.6;
    this.mesh.rotation.y += dt * 3.0;

    return true;
  }

  takeDamage(dmg, isCrit = false) {
    this.hp -= dmg;

    // Floating text
    spawnFloatingText(this.mesh.position, `${isCrit ? '💥 ' : ''}${Math.round(dmg)}`, isCrit ? '#facc15' : '#ef4444');

    if (this.hp <= 0) {
      const reward = Math.round((this.isBoss ? 30 : 8) * GAME_STATE.buffs.goldMult);
      GAME_STATE.gold += reward;
      GAME_STATE.kills++;
      updateHUD();

      // Spawn Death Particle Explosion
      spawnExplosionVFX(this.mesh.position, this.isBoss ? 0xef4444 : 0xf97316);
      this.destroy();
      return true; // dead
    }
    return false;
  }

  destroy() {
    if (this.mesh) {
      scene.remove(this.mesh);
    }
  }
}

// --- [8. PROJECTILES & VISUAL EFFECTS] ---
class Projectile {
  constructor(startPos, targetEnemy, hero) {
    this.startPos = startPos.clone();
    this.target = targetEnemy;
    this.hero = hero;
    this.pos = startPos.clone();
    this.speed = 18.0;
    this.tier = hero.tier;

    // Mesh
    const geo = new THREE.CylinderGeometry(0.08, 0.08, 0.6);
    const mat = new THREE.MeshBasicMaterial({ color: hero.config.color });
    this.mesh = new THREE.Mesh(geo, mat);
    this.mesh.position.copy(this.pos);
    scene.add(this.mesh);
  }

  update(dt) {
    if (!this.target || !this.target.mesh || this.target.hp <= 0) {
      this.destroy();
      return false;
    }

    const targetPos = this.target.mesh.position.clone();
    const dir = targetPos.clone().sub(this.pos);
    const dist = dir.length();

    if (dist < 0.8) {
      // Hit target
      this.onHit();
      this.destroy();
      return false;
    }

    dir.normalize();
    this.pos.add(dir.clone().multiplyScalar(this.speed * dt));
    this.mesh.position.copy(this.pos);
    this.mesh.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir);

    return true;
  }

  onHit() {
    let atk = this.hero.config.atk * GAME_STATE.buffs.atkMult * (1 + (GAME_STATE.upgradeLvl - 1) * 0.15);
    if (GAME_STATE.synergies.wei) atk *= 1.15; // Wei Synergy ATK +15%

    // Critical Hit calculation
    let critChance = GAME_STATE.buffs.critChance;
    if (GAME_STATE.synergies.qun) critChance += 0.25; // Qun Synergy +25% Crit
    const isCrit = Math.random() < critChance;
    if (isCrit) atk *= 2.0;

    audioEngine.playHit();

    if (this.tier === 5) { // Guan Yu Crescent Wave AoE
      spawnCrescentWaveVFX(this.target.mesh.position);
      enemies.forEach(e => {
        if (e.mesh && e.mesh.position.distanceTo(this.target.mesh.position) < 3.5) {
          e.takeDamage(atk, isCrit);
        }
      });
    } else if (this.tier === 6) { // Zhuge Liang Lightning Strike
      spawnLightningVFX(this.target.mesh.position);
      this.target.takeDamage(atk, isCrit);
      this.target.speed *= 0.6; // Slow enemy
    } else if (this.tier === 7) { // Lu Bu Musou Shockwave
      triggerScreenShake(0.4);
      spawnShockwaveSphereVFX(this.target.mesh.position, 0xef4444);
      enemies.forEach(e => {
        if (e.mesh && e.mesh.position.distanceTo(this.target.mesh.position) < 5.0) {
          e.takeDamage(atk, isCrit);
        }
      });
    } else {
      this.target.takeDamage(atk, isCrit);
    }
  }

  destroy() {
    if (this.mesh) scene.remove(this.mesh);
  }
}

// Particle & Shockwave Generators
function spawnExplosionVFX(pos, colorHex) {
  const count = 12;
  for (let i = 0; i < count; i++) {
    const geo = new THREE.SphereGeometry(0.12, 6, 6);
    const mat = new THREE.MeshBasicMaterial({ color: colorHex, transparent: true, opacity: 1.0 });
    const p = new THREE.Mesh(geo, mat);
    p.position.copy(pos);
    const vel = new THREE.Vector3(
      (Math.random() - 0.5) * 6,
      Math.random() * 6 + 2,
      (Math.random() - 0.5) * 6
    );
    scene.add(p);
    vfxParticles.push({ mesh: p, vel: vel, life: 0.5, maxLife: 0.5 });
  }
}

function spawnShockwaveSphereVFX(pos, colorHex) {
  const geo = new THREE.SphereGeometry(0.5, 16, 16);
  const mat = new THREE.MeshBasicMaterial({ color: colorHex, wireframe: true, transparent: true, opacity: 0.8 });
  const shock = new THREE.Mesh(geo, mat);
  shock.position.copy(pos);
  scene.add(shock);
  vfxParticles.push({
    mesh: shock,
    vel: new THREE.Vector3(0, 0, 0),
    life: 0.4,
    maxLife: 0.4,
    customUpdate: (p, dt) => {
      const scale = 1 + (1 - p.life / p.maxLife) * 12;
      p.mesh.scale.set(scale, scale, scale);
      p.mesh.material.opacity = p.life / p.maxLife;
    }
  });
}

function spawnCrescentWaveVFX(pos) {
  const geo = new THREE.RingGeometry(0.8, 1.4, 16, 1, 0, Math.PI);
  const mat = new THREE.MeshBasicMaterial({ color: 0x10b981, side: THREE.DoubleSide, transparent: true, opacity: 0.9 });
  const ring = new THREE.Mesh(geo, mat);
  ring.rotation.x = -Math.PI / 2;
  ring.position.copy(pos);
  ring.position.y = 0.2;
  scene.add(ring);
  vfxParticles.push({
    mesh: ring,
    vel: new THREE.Vector3(0, 0, -4),
    life: 0.4,
    maxLife: 0.4,
    customUpdate: (p, dt) => {
      p.mesh.position.add(p.vel.clone().multiplyScalar(dt));
      p.mesh.material.opacity = p.life / p.maxLife;
    }
  });
}

function spawnLightningVFX(pos) {
  const geo = new THREE.CylinderGeometry(0.1, 0.4, 8, 8);
  const mat = new THREE.MeshBasicMaterial({ color: 0x8b5cf6, transparent: true, opacity: 0.9 });
  const cyl = new THREE.Mesh(geo, mat);
  cyl.position.copy(pos);
  cyl.position.y = 4.0;
  scene.add(cyl);
  vfxParticles.push({
    mesh: cyl,
    vel: new THREE.Vector3(0, 0, 0),
    life: 0.25,
    maxLife: 0.25,
    customUpdate: (p, dt) => {
      p.mesh.material.opacity = p.life / p.maxLife;
    }
  });
}

function updateVFX(dt) {
  for (let i = vfxParticles.length - 1; i >= 0; i--) {
    const p = vfxParticles[i];
    p.life -= dt;
    if (p.life <= 0) {
      scene.remove(p.mesh);
      vfxParticles.splice(i, 1);
      continue;
    }
    if (p.customUpdate) {
      p.customUpdate(p, dt);
    } else {
      p.mesh.position.add(p.vel.clone().multiplyScalar(dt));
      p.mesh.material.opacity = p.life / p.maxLife;
    }
  }
}

// --- [9. FLOATING TEXT & HUD OVERLAY RENDERER] ---
let floatingTexts = [];

function spawnFloatingText(worldPos, text, colorStr) {
  floatingTexts.push({
    worldPos: worldPos.clone(),
    text: text,
    color: colorStr,
    life: 1.0,
    maxLife: 1.0,
    offsetY: 0
  });
}

function renderHUDOverlay() {
  hudCtx.clearRect(0, 0, hudCanvas.width, hudCanvas.height);

  // 1. Render Floating Damage Texts
  for (let i = floatingTexts.length - 1; i >= 0; i--) {
    const ft = floatingTexts[i];
    ft.life -= 0.016;
    ft.offsetY += 0.8;

    if (ft.life <= 0) {
      floatingTexts.splice(i, 1);
      continue;
    }

    // Convert 3D World position to 2D Screen Coordinates
    const screenPos = ft.worldPos.clone().project(camera);
    const x = (screenPos.x * 0.5 + 0.5) * hudCanvas.width;
    const y = (-(screenPos.y * 0.5) + 0.5) * hudCanvas.height - ft.offsetY;

    hudCtx.save();
    hudCtx.font = "900 16px monospace";
    hudCtx.fillStyle = ft.color;
    hudCtx.shadowColor = '#000000';
    hudCtx.shadowBlur = 6;
    hudCtx.globalAlpha = Math.min(1.0, ft.life / ft.maxLife);
    hudCtx.fillText(ft.text, x, y);
    hudCtx.restore();
  }

  // 2. Render Drag Vector Arrow when dragging unit
  if (draggedHero && dragCurrentWorldPos) {
    const startScreen = draggedHero.getWorldPosition().project(camera);
    const endScreen = dragCurrentWorldPos.clone().project(camera);

    const sx = (startScreen.x * 0.5 + 0.5) * hudCanvas.width;
    const sy = (-(startScreen.y * 0.5) + 0.5) * hudCanvas.height;
    const ex = (endScreen.x * 0.5 + 0.5) * hudCanvas.width;
    const ey = (-(endScreen.y * 0.5) + 0.5) * hudCanvas.height;

    hudCtx.save();
    hudCtx.strokeStyle = '#38bdf8';
    hudCtx.lineWidth = 3;
    hudCtx.setLineDash([6, 6]);
    hudCtx.beginPath();
    hudCtx.moveTo(sx, sy);
    hudCtx.lineTo(ex, ey);
    hudCtx.stroke();
    hudCtx.restore();
  }
}

// --- [10. TOUCH & RAYCASTING INTERACTION] ---
function setupInteraction() {
  const container = document.getElementById('webgl-container');

  function getNDC(e) {
    const rect = container.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    return {
      x: ((clientX - rect.left) / rect.width) * 2 - 1,
      y: -((clientY - rect.top) / rect.height) * 2 + 1
    };
  }

  function onPointerDown(e) {
    if (GAME_STATE.isGameOver || GAME_STATE.isPaused) return;
    audioEngine.init();

    const ndc = getNDC(e);
    mouseVec.set(ndc.x, ndc.y);
    raycaster.setFromCamera(mouseVec, camera);

    // Collect all Hero meshes
    const heroMeshes = [];
    for (let r = 0; r < GRID_ROWS; r++) {
      for (let c = 0; c < GRID_COLS; c++) {
        if (gridUnits[r][c]) {
          heroMeshes.push(gridUnits[r][c].mesh);
        }
      }
    }

    const intersects = raycaster.intersectObjects(heroMeshes, true);
    if (intersects.length > 0) {
      let topMesh = intersects[0].object;
      while (topMesh.parent && topMesh.parent.type !== 'Scene' && !topMesh.userData.heroRef) {
        if (topMesh.userData.row !== undefined) break;
        topMesh = topMesh.parent;
      }

      // Find associated Hero entity
      for (let r = 0; r < GRID_ROWS; r++) {
        for (let c = 0; c < GRID_COLS; c++) {
          const h = gridUnits[r][c];
          if (h && h.mesh === topMesh) {
            draggedHero = h;
            dragSourcePos = { row: r, col: c };
            draggedHero.mesh.position.y = 2.5; // Lift up elevation
            showUnitInspector(h);
            break;
          }
        }
      }
    }
  }

  function onPointerMove(e) {
    if (!draggedHero) return;

    const ndc = getNDC(e);
    mouseVec.set(ndc.x, ndc.y);
    raycaster.setFromCamera(mouseVec, camera);

    // Plane at elevation y = 2.5
    const plane = new THREE.Plane(new THREE.Vector3(0, 1, 0), -2.5);
    const target = new THREE.Vector3();
    raycaster.ray.intersectPlane(plane, target);
    if (target) {
      dragCurrentWorldPos.copy(target);
      draggedHero.mesh.position.copy(target);
    }
  }

  function onPointerUp(e) {
    if (!draggedHero) return;

    // Check Raycast against 3D Grid Tiles or Dismiss Zone
    const allTiles = [];
    for (let r = 0; r < GRID_ROWS; r++) {
      for (let c = 0; c < GRID_COLS; c++) {
        allTiles.push(gridTiles3D[r][c]);
      }
    }
    const dismissZone = scene.getObjectByName("dismissZone");
    if (dismissZone) allTiles.push(dismissZone);

    const intersects = raycaster.intersectObjects(allTiles, true);

    if (intersects.length > 0) {
      let targetObj = intersects[0].object;
      while (targetObj.parent && targetObj.parent.type !== 'Scene' && !targetObj.userData.row) {
        if (targetObj.name === "dismissZone") break;
        targetObj = targetObj.parent;
      }

      if (targetObj.name === "dismissZone") {
        // Dismiss unit & refund gold
        const refund = Math.round(GAME_STATE.recruitCost * draggedHero.tier * 0.5);
        GAME_STATE.gold += refund;
        gridUnits[dragSourcePos.row][dragSourcePos.col] = null;
        draggedHero.destroy();
        updateHUD();
        spawnFloatingText(draggedHero.mesh.position, `🌾 +${refund} 환급`, '#22c55e');
      } else if (targetObj.userData.row !== undefined) {
        const tr = targetObj.userData.row;
        const tc = targetObj.userData.col;

        const targetHero = gridUnits[tr][tc];

        if (tr === dragSourcePos.row && tc === dragSourcePos.col) {
          // Dropped on same tile -> Reset position
          draggedHero.updateWorldPosition();
        } else if (!targetHero) {
          // Move to empty tile
          gridUnits[dragSourcePos.row][dragSourcePos.col] = null;
          gridUnits[tr][tc] = draggedHero;
          draggedHero.row = tr;
          draggedHero.col = tc;
          draggedHero.updateWorldPosition();
        } else if (targetHero.tier === draggedHero.tier && draggedHero.tier < 7) {
          // Merge units!
          gridUnits[dragSourcePos.row][dragSourcePos.col] = null;
          targetHero.destroy();

          const newTier = draggedHero.tier + 1;
          draggedHero.destroy();

          const newHero = new Hero(newTier, tr, tc);
          gridUnits[tr][tc] = newHero;

          audioEngine.playMerge();
          spawnExplosionVFX(newHero.getWorldPosition(), newHero.config.color);
          spawnFloatingText(newHero.getWorldPosition(), `🌟 TIER UP! [${newHero.config.name}]`, '#facc15');
        } else {
          // Swap positions
          gridUnits[dragSourcePos.row][dragSourcePos.col] = targetHero;
          gridUnits[tr][tc] = draggedHero;

          targetHero.row = dragSourcePos.row;
          targetHero.col = dragSourcePos.col;
          draggedHero.row = tr;
          draggedHero.col = tc;

          targetHero.updateWorldPosition();
          draggedHero.updateWorldPosition();
        }
      } else {
        draggedHero.updateWorldPosition();
      }
    } else {
      draggedHero.updateWorldPosition();
    }

    draggedHero = null;
    calculateFactionSynergies();
    updateHUD();
  }

  container.addEventListener('mousedown', onPointerDown);
  window.addEventListener('mousemove', onPointerMove);
  window.addEventListener('mouseup', onPointerUp);

  container.addEventListener('touchstart', onPointerDown, { passive: true });
  window.addEventListener('touchmove', onPointerMove, { passive: true });
  window.addEventListener('touchend', onPointerUp);
}

// --- [11. FACTION SYNERGIES & INSPECTOR PANEL] ---
function calculateFactionSynergies() {
  const counts = { "촉": 0, "위": 0, "오": 0, "군웅": 0 };
  let dps = 0;

  for (let r = 0; r < GRID_ROWS; r++) {
    for (let c = 0; c < GRID_COLS; c++) {
      const h = gridUnits[r][c];
      if (h) {
        counts[h.config.faction] = (counts[h.config.faction] || 0) + 1;
        dps += Math.round(h.config.atk * h.config.asp);
      }
    }
  }

  GAME_STATE.synergies.shu = counts["촉"] >= 3;
  GAME_STATE.synergies.wei = counts["위"] >= 2;
  GAME_STATE.synergies.qun = counts["군웅"] >= 3;
  GAME_STATE.totalDps = dps;

  // Update Synergy Badges in DOM
  const synShu = document.getElementById('syn-shu');
  const synWei = document.getElementById('syn-wei');
  const synQun = document.getElementById('syn-qun');

  if (synShu) {
    synShu.textContent = `촉(공속) ${counts["촉"]}/3`;
    synShu.classList.toggle('active', GAME_STATE.synergies.shu);
  }
  if (synWei) {
    synWei.textContent = `위(사거리) ${counts["위"]}/2`;
    synWei.classList.toggle('active', GAME_STATE.synergies.wei);
  }
  if (synQun) {
    synQun.textContent = `군웅(치명) ${counts["군웅"]}/3`;
    synQun.classList.toggle('active', GAME_STATE.synergies.qun);
  }
}

function showUnitInspector(hero) {
  const panel = document.getElementById('unit-inspector');
  if (!panel) return;

  document.getElementById('insp-name').textContent = `${hero.config.name} [Tier ${hero.tier}]`;
  document.getElementById('insp-desc').textContent = hero.config.desc;

  let atk = Math.round(hero.config.atk * GAME_STATE.buffs.atkMult * (1 + (GAME_STATE.upgradeLvl - 1) * 0.15));
  let asp = (hero.config.asp * GAME_STATE.buffs.aspMult * (GAME_STATE.synergies.shu ? 1.25 : 1.0)).toFixed(1);
  let range = Math.round(hero.config.range * 10 * (GAME_STATE.synergies.wei ? 1.15 : 1.0));

  document.getElementById('insp-atk').textContent = atk;
  document.getElementById('insp-spd').textContent = `${asp}/s`;
  document.getElementById('insp-rng').textContent = `${range}m`;

  panel.classList.remove('hidden');
  setTimeout(() => panel.classList.add('hidden'), 3500);
}

// --- [12. GAMEPLAY LOOP & WAVES] ---
let spawnTimer = 0;
let spawnedEnemiesInWave = 0;
const totalEnemiesPerWave = 12;

function recruitHero() {
  if (GAME_STATE.gold < GAME_STATE.recruitCost) return;

  // Find empty cell
  const emptyCells = [];
  for (let r = 0; r < GRID_ROWS; r++) {
    for (let c = 0; c < GRID_COLS; c++) {
      if (!gridUnits[r][c]) emptyCells.push({ r, c });
    }
  }

  if (emptyCells.length === 0) return;

  GAME_STATE.gold -= GAME_STATE.recruitCost;

  // Roll probabilities: 80% Tier 1, 16% Tier 2, 4% Tier 3
  const roll = Math.random();
  let tier = 1;
  if (roll > 0.96) tier = 3;
  else if (roll > 0.80) tier = 2;

  const cell = emptyCells[Math.floor(Math.random() * emptyCells.length)];
  const newHero = new Hero(tier, cell.r, cell.c);
  gridUnits[cell.r][cell.c] = newHero;

  audioEngine.playMerge();
  spawnExplosionVFX(newHero.getWorldPosition(), newHero.config.color);

  if (tier > 1) {
    spawnFloatingText(newHero.getWorldPosition(), tier === 3 ? "🌟 명장 초고속 등용!!" : "⚡ 정예 발탁!", "#facc15");
  }

  calculateFactionSynergies();
  updateHUD();
}

function upgradePower() {
  if (GAME_STATE.gold < GAME_STATE.upgradeCost) return;
  GAME_STATE.gold -= GAME_STATE.upgradeCost;
  GAME_STATE.upgradeLvl++;
  GAME_STATE.upgradeCost = Math.round(GAME_STATE.upgradeCost * 1.4);
  updateHUD();
}

function triggerRedCliffSkill() {
  if (GAME_STATE.skillCooldown > 0) return;

  GAME_STATE.skillCooldown = GAME_STATE.maxSkillCooldown;
  audioEngine.playSkill();
  triggerScreenShake(1.2);

  // 3D Firestorm Shockwave
  spawnShockwaveSphereVFX(new THREE.Vector3(0, 0, -6), 0xf97316);

  // Massive Damage & Slow to all alive enemies
  const dmg = 800 * Math.pow(1.25, GAME_STATE.wave);
  enemies.forEach(e => {
    e.takeDamage(dmg, true);
    e.speed *= 0.4;
  });

  updateHUD();
}

function triggerScreenShake(intensity) {
  shakeIntensity = intensity;
}

function updateHUD() {
  document.getElementById('gold-val').textContent = GAME_STATE.gold;
  document.getElementById('hp-val').textContent = `${GAME_STATE.gateHp}/${GAME_STATE.maxGateHp}`;
  document.getElementById('kill-val').textContent = GAME_STATE.kills;
  document.getElementById('dps-val').textContent = GAME_STATE.totalDps;

  document.getElementById('recruit-cost').textContent = GAME_STATE.recruitCost;
  document.getElementById('upgrade-lvl').textContent = GAME_STATE.upgradeLvl;
  document.getElementById('upgrade-cost').textContent = GAME_STATE.upgradeCost;

  const hpBar = document.getElementById('gate-hp-bar');
  if (hpBar) {
    const pct = Math.max(0, (GAME_STATE.gateHp / GAME_STATE.maxGateHp) * 100);
    hpBar.style.width = `${pct}%`;
  }

  const skillCdLabel = document.getElementById('skill-cd');
  if (skillCdLabel) {
    if (GAME_STATE.skillCooldown > 0) {
      skillCdLabel.textContent = `${Math.ceil(GAME_STATE.skillCooldown)}s`;
    } else {
      skillCdLabel.textContent = "즉시 발동";
    }
  }

  if (GAME_STATE.gateHp <= 0 && !GAME_STATE.isGameOver) {
    triggerGameOver();
  }
}

// Wave & Roguelike Modal
function triggerStrategyModal() {
  GAME_STATE.isPaused = true;
  const modal = document.getElementById('strategy-modal');
  const cardContainer = document.getElementById('strategy-cards');
  cardContainer.innerHTML = '';

  const strats = [
    { title: "도원결의", desc: "전체 아군 장수의 공격력 +25%", apply: () => { GAME_STATE.buffs.atkMult *= 1.25; } },
    { title: "병량 확보", desc: "적 처치 시 획득 군량미 +30%", apply: () => { GAME_STATE.buffs.goldMult *= 1.30; } },
    { title: "연노 개량", desc: "전체 아군 장수의 공격속도 +20%", apply: () => { GAME_STATE.buffs.aspMult *= 1.20; } },
    { title: "성벽 보강", desc: "호로관 내구도 +30 즉시 회복", apply: () => { GAME_STATE.gateHp = Math.min(GAME_STATE.maxGateHp, GAME_STATE.gateHp + 30); } },
    { title: "무신 기세", desc: "치명타 확률 +15% 증가", apply: () => { GAME_STATE.buffs.critChance += 0.15; } }
  ];

  // Pick 3 random cards
  const shuffled = strats.sort(() => 0.5 - Math.random()).slice(0, 3);
  shuffled.forEach(card => {
    const div = document.createElement('div');
    div.className = 'strat-card';
    div.innerHTML = `
      <div class="strat-card-title">${card.title}</div>
      <div class="strat-card-desc">${card.desc}</div>
    `;
    div.onclick = () => {
      card.apply();
      modal.classList.add('hidden');
      GAME_STATE.isPaused = false;
      GAME_STATE.wave++;
      spawnedEnemiesInWave = 0;
      document.getElementById('wave-title').textContent = `제${GAME_STATE.wave}장 ${GAME_STATE.wave % 5 === 0 ? '보스 호로관 결전' : '전선 공방전'}`;
      updateHUD();
    };
    cardContainer.appendChild(div);
  });

  modal.classList.remove('hidden');
}

function triggerGameOver() {
  GAME_STATE.isGameOver = true;
  document.getElementById('final-wave').textContent = `제${GAME_STATE.wave}장`;
  document.getElementById('final-kills').textContent = GAME_STATE.kills;
  document.getElementById('gameover-modal').classList.remove('hidden');
}

// --- [13. MAIN ANIMATION LOOP] ---
let lastTime = performance.now();

function animateLoop() {
  requestAnimationFrame(animateLoop);

  const now = performance.now();
  const dt = Math.min((now - lastTime) / 1000, 0.1);
  lastTime = now;

  if (GAME_STATE.isPaused || GAME_STATE.isGameOver) return;

  // Smooth Camera Interpolation
  camera.position.lerp(targetCamPos, dt * 4.0);
  currentCamLook.lerp(targetCamLook, dt * 4.0);
  camera.lookAt(currentCamLook);

  // Screen Shake Effect
  if (shakeIntensity > 0) {
    shakeIntensity -= dt * 2.0;
    camera.position.x += (Math.random() - 0.5) * shakeIntensity;
    camera.position.y += (Math.random() - 0.5) * shakeIntensity;
  }

  // Cooldown timer
  if (GAME_STATE.skillCooldown > 0) {
    GAME_STATE.skillCooldown = Math.max(0, GAME_STATE.skillCooldown - dt);
    updateHUD();
  }

  // 1. Enemy Spawner
  spawnTimer += dt;
  if (spawnedEnemiesInWave < totalEnemiesPerWave && spawnTimer > (GAME_STATE.wave % 5 === 0 ? 3.0 : 1.5)) {
    spawnTimer = 0;
    const enemy = new Enemy(GAME_STATE.wave);
    enemies.push(enemy);
    spawnedEnemiesInWave++;

    if (enemy.isBoss) {
      audioEngine.playBossAlert();
      spawnFloatingText(new THREE.Vector3(0, 3, -10), `⚠️ 보스 [${enemy.name}] 출현!`, "#ef4444");
    }
  }

  // 2. Wave Clear Check
  if (spawnedEnemiesInWave >= totalEnemiesPerWave && enemies.length === 0) {
    triggerStrategyModal();
  }

  // 3. Update Heroes
  for (let r = 0; r < GRID_ROWS; r++) {
    for (let c = 0; c < GRID_COLS; c++) {
      const hero = gridUnits[r][c];
      if (hero) {
        hero.animate(dt);

        // Attack Target Check
        const attackInterval = 1.0 / (hero.config.asp * GAME_STATE.buffs.aspMult * (GAME_STATE.synergies.shu ? 1.25 : 1.0));
        if (now - hero.lastAttackTime > attackInterval * 1000) {
          // Find target enemy within range
          const heroPos = hero.getWorldPosition();
          let bestTarget = null;
          let maxProgress = -1;

          enemies.forEach(e => {
            const dist = heroPos.distanceTo(e.mesh.position);
            const range = hero.config.range * (GAME_STATE.synergies.wei ? 1.15 : 1.0);
            if (dist <= range && e.progress > maxProgress) {
              maxProgress = e.progress;
              bestTarget = e;
            }
          });

          if (bestTarget) {
            hero.lastAttackTime = now;
            audioEngine.playBow();
            projectiles.push(new Projectile(heroPos, bestTarget, hero));
          }
        }
      }
    }
  }

  // 4. Update Enemies
  for (let i = enemies.length - 1; i >= 0; i--) {
    if (!enemies[i].update(dt)) {
      enemies.splice(i, 1);
    }
  }

  // 5. Update Projectiles
  for (let i = projectiles.length - 1; i >= 0; i--) {
    if (!projectiles[i].update(dt)) {
      projectiles.splice(i, 1);
    }
  }

  // 6. Update VFX
  updateVFX(dt);

  // 7. Render 3D Scene + PostProcessing
  composer.render();

  // 8. Render 2D HUD Canvas Overlay
  renderHUDOverlay();
}

// --- [14. INITIALIZATION & BINDINGS] ---
window.addEventListener('DOMContentLoaded', () => {
  initThreeJS();
  setupInteraction();

  // Button Listeners
  document.getElementById('recruit-btn').onclick = recruitHero;
  document.getElementById('upgrade-btn').onclick = upgradePower;
  document.getElementById('skill-btn').onclick = triggerRedCliffSkill;

  document.getElementById('cam-btn').onclick = () => {
    cameraMode = (cameraMode + 1) % 3;
    targetCamPos.copy(cameraPresets[cameraMode].pos);
    targetCamLook.copy(cameraPresets[cameraMode].look);
    document.getElementById('cam-btn').textContent = cameraMode === 0 ? "🎥 3D뷰" : cameraMode === 1 ? "📐 탑뷰" : "🏯 성문뷰";
  };

  document.getElementById('sound-btn').onclick = () => {
    audioEngine.enabled = !audioEngine.enabled;
    document.getElementById('sound-btn').textContent = audioEngine.enabled ? "🔊" : "🔇";
  };

  document.getElementById('restart-btn').onclick = () => {
    window.location.reload();
  };

  // Initial Recruit
  recruitHero();
  recruitHero();

  // Start Loop
  animateLoop();
});
