/* ==========================================================================
   1. HERO_CONFIG & SOUND_CONFIG (PC Asset Replacement Ready)
========================================================================== */
const HERO_CONFIG = {
  1: {
    tier: 1,
    name: "의용병",
    faction: "군웅",
    atk: 18,
    attackSpeed: 1.15,
    range: 14,
    attackType: "single",
    color: "#4AE3B5",
    hex: 0x4ae3b5,
    spritePath: null,
    soundPath: null,
    desc: "갈색 두건과 단궁으로 무장한 의용 궁병"
  },
  2: {
    tier: 2,
    name: "정예 창병",
    faction: "위",
    atk: 40,
    attackSpeed: 1.65,
    range: 15,
    attackType: "rapid",
    color: "#3B82F6",
    hex: 0x3b82f6,
    spritePath: null,
    soundPath: null,
    desc: "위나라 대방패와 강철 장창 2연속 찌르기"
  },
  3: {
    tier: 3,
    name: "황충",
    faction: "촉",
    atk: 92,
    attackSpeed: 1.05,
    range: 21,
    attackType: "pierce",
    color: "#F59E0B",
    hex: 0xf59e0b,
    spritePath: null,
    soundPath: null,
    desc: "백발 노장의 황금 철태궁 초장거리 관통 화살"
  },
  4: {
    tier: 4,
    name: "조운",
    faction: "촉",
    atk: 195,
    attackSpeed: 2.6,
    range: 17,
    attackType: "rapid_spear",
    color: "#06B6D4",
    hex: 0x06b6d4,
    spritePath: null,
    soundPath: null,
    desc: "백룡 투구와 용담량은창 초고속 회전 창격"
  },
  5: {
    tier: 5,
    name: "관우",
    faction: "촉",
    atk: 450,
    attackSpeed: 0.95,
    range: 19,
    attackType: "aoe",
    color: "#10B981",
    hex: 0x10b981,
    spritePath: null,
    soundPath: null,
    desc: "홍안미염과 청룡언월도 초승달 광역 검기 파동"
  },
  6: {
    tier: 6,
    name: "제갈량",
    faction: "촉",
    atk: 980,
    attackSpeed: 0.85,
    range: 23,
    attackType: "slow_aoe",
    color: "#8B5CF6",
    hex: 0x8b5cf6,
    spritePath: null,
    soundPath: null,
    desc: "팔진도 광륜과 백우선 부채질로 부르는 낙뢰·화공"
  },
  7: {
    tier: 7,
    name: "무신 여포",
    faction: "군웅",
    atk: 2500,
    attackSpeed: 1.25,
    range: 99,
    attackType: "musou",
    color: "#EF4444",
    hex: 0xef4444,
    spritePath: null,
    soundPath: null,
    desc: "적토마 탑승 & 쌍영 자금관·방천화극 전 화면 초토화"
  }
};

const SOUND_CONFIG = {
  enabled: true,
  paths: { bow: null, spear: null, merge: null, lubu: null, boss: null, hit: null }
};

/* ==========================================================================
   2. Multi-Layer Web Audio API Synthesizer
========================================================================== */
class SoundEngine {
  constructor() {
    this.ctx = null;
    this.initialized = false;
  }
  init() {
    if (this.initialized) return;
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioCtx();
      this.initialized = true;
    } catch (e) {}
  }
  playSound(type) {
    if (!SOUND_CONFIG.enabled) return;
    if (!this.initialized) this.init();
    if (!this.ctx) return;
    if (this.ctx.state === "suspended") this.ctx.resume();

    const t = this.ctx.currentTime;
    if (type === "bow") {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = "triangle";
      osc.frequency.setValueAtTime(520, t);
      osc.frequency.exponentialRampToValueAtTime(120, t + 0.11);
      gain.gain.setValueAtTime(0.18, t);
      gain.gain.exponentialRampToValueAtTime(0.01, t + 0.11);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(t);
      osc.stop(t + 0.11);
    } else if (type === "spear") {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = "sawtooth";
      osc.frequency.setValueAtTime(680, t);
      osc.frequency.exponentialRampToValueAtTime(160, t + 0.09);
      gain.gain.setValueAtTime(0.2, t);
      gain.gain.exponentialRampToValueAtTime(0.01, t + 0.09);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(t);
      osc.stop(t + 0.09);
    } else if (type === "merge") {
      [523.25, 659.25, 783.99, 1046.5].forEach((f, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = "triangle";
        osc.frequency.setValueAtTime(f, t + idx * 0.045);
        gain.gain.setValueAtTime(0.22, t + idx * 0.045);
        gain.gain.exponentialRampToValueAtTime(0.001, t + idx * 0.045 + 0.25);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(t + idx * 0.045);
        osc.stop(t + idx * 0.045 + 0.25);
      });
    } else if (type === "lubu") {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = "sawtooth";
      osc.frequency.setValueAtTime(150, t);
      osc.frequency.exponentialRampToValueAtTime(32, t + 0.65);
      gain.gain.setValueAtTime(0.38, t);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.65);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(t);
      osc.stop(t + 0.65);
    } else if (type === "hit") {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = "square";
      osc.frequency.setValueAtTime(130, t);
      osc.frequency.exponentialRampToValueAtTime(45, t + 0.05);
      gain.gain.setValueAtTime(0.08, t);
      gain.gain.exponentialRampToValueAtTime(0.01, t + 0.05);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(t);
      osc.stop(t + 0.05);
    } else if (type === "boss") {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = "sawtooth";
      osc.frequency.setValueAtTime(200, t);
      osc.frequency.linearRampToValueAtTime(340, t + 0.25);
      gain.gain.setValueAtTime(0.28, t);
      gain.gain.exponentialRampToValueAtTime(0.01, t + 0.45);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(t);
      osc.stop(t + 0.45);
    }
  }
}
const audioEngine = new SoundEngine();

/* ==========================================================================
   3. Three.js Scene, Post-Processing Bloom & Camera Presets
========================================================================== */
const webglContainer = document.getElementById("webgl-container");
const hudCanvas = document.getElementById("hudCanvas");
const hudCtx = hudCanvas.getContext("2d");

const scene = new THREE.Scene();
scene.fog = new THREE.FogExp2(0x030712, 0.014);

const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 500);
const renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: "high-performance" });
renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.15;
webglContainer.appendChild(renderer.domElement);

let composer = null;
try {
  const renderPass = new THREE.RenderPass(scene, camera);
  const bloomPass = new THREE.UnrealBloomPass(new THREE.Vector2(480, 800), 0.95, 0.4, 0.22);
  composer = new THREE.EffectComposer(renderer);
  composer.addPass(renderPass);
  composer.addPass(bloomPass);
} catch (e) {
  composer = null;
}

const ambientLight = new THREE.AmbientLight(0xdbeafe, 0.85);
scene.add(ambientLight);

const dirLight = new THREE.DirectionalLight(0xfffbeb, 1.35);
dirLight.position.set(12, 28, 18);
scene.add(dirLight);

const rimLight = new THREE.DirectionalLight(0x38bdf8, 0.75);
rimLight.position.set(-15, 14, -15);
scene.add(rimLight);

const gateTorchLight = new THREE.PointLight(0xf97316, 1.8, 18);
gateTorchLight.position.set(0, 3.5, -0.5);
scene.add(gateTorchLight);

const CAM_PRESETS = [
  { name: "🎥 쿼터뷰", pos: new THREE.Vector3(0, 26, 23), look: new THREE.Vector3(0, 0, 1.2) },
  { name: "🎥 전술탑뷰", pos: new THREE.Vector3(0, 37, 2.5), look: new THREE.Vector3(0, 0, 0.5) },
  { name: "🎥 성문뷰", pos: new THREE.Vector3(0, 10.5, 16.5), look: new THREE.Vector3(0, 1.0, -6) }
];
let currentCamIdx = 0;
const camTargetPos = CAM_PRESETS[0].pos.clone();
const camCurrentLook = CAM_PRESETS[0].look.clone();
camera.position.copy(camTargetPos);
camera.lookAt(camCurrentLook);

let screenShakeTimer = 0;
let screenShakeIntensity = 0;

function triggerScreenShake(intensity = 0.4, duration = 0.35) {
  screenShakeIntensity = intensity;
  screenShakeTimer = duration;
}

/* ==========================================================================
   4. 3D Battlefield, S-Curve Road, Hulao Gate & 5x4 Tactical Grid
========================================================================== */
const COLS = 5;
const ROWS = 4;
const TILE_SPACING_X = 2.75;
const TILE_SPACING_Z = 2.55;
const GRID_START_Z = 2.2;

const pathCurve = new THREE.CatmullRomCurve3([
  new THREE.Vector3(-4.8, 0.1, -12.5),
  new THREE.Vector3(4.8, 0.1, -9.2),
  new THREE.Vector3(-4.8, 0.1, -5.6),
  new THREE.Vector3(3.8, 0.1, -3.0),
  new THREE.Vector3(0.0, 0.1, -0.8)
]);

const tileMeshes = [];
const gridSlotPositions = [];

function buildBattlefield3D() {
  const groundGeo = new THREE.PlaneGeometry(60, 60);
  const groundMat = new THREE.MeshStandardMaterial({ color: 0x050914, roughness: 0.9, metalness: 0.1 });
  const ground = new THREE.Mesh(groundGeo, groundMat);
  ground.rotation.x = -Math.PI / 2;
  ground.position.y = -0.15;
  scene.add(ground);

  const tubeGeo = new THREE.TubeGeometry(pathCurve, 64, 0.85, 8, false);
  const tubeMat = new THREE.MeshStandardMaterial({
    color: 0x332411,
    emissive: 0x78350f,
    emissiveIntensity: 0.25,
    roughness: 0.8
  });
  const roadMesh = new THREE.Mesh(tubeGeo, tubeMat);
  roadMesh.scale.set(1, 0.12, 1);
  scene.add(roadMesh);

  const linePoints = pathCurve.getPoints(80);
  const lineGeo = new THREE.BufferGeometry().setFromPoints(linePoints);
  const lineMat = new THREE.LineBasicMaterial({ color: 0xfacc15, transparent: true, opacity: 0.6 });
  const roadLine = new THREE.Line(lineGeo, lineMat);
  roadLine.position.y = 0.08;
  scene.add(roadLine);

  const gateGroup = new THREE.Group();
  gateGroup.position.set(0, 0, -0.4);

  const wallMat = new THREE.MeshStandardMaterial({ color: 0x1e293b, metalness: 0.5, roughness: 0.6 });
  const goldTrimMat = new THREE.MeshStandardMaterial({ color: 0xf59e0b, emissive: 0xb45309, emissiveIntensity: 0.4, metalness: 0.8, roughness: 0.2 });

  const leftWall = new THREE.Mesh(new THREE.BoxGeometry(5.5, 1.3, 0.7), wallMat);
  leftWall.position.set(-4.6, 0.65, 0);
  const rightWall = new THREE.Mesh(new THREE.BoxGeometry(5.5, 1.3, 0.7), wallMat);
  rightWall.position.set(4.6, 0.65, 0);

  const pillarL = new THREE.Mesh(new THREE.CylinderGeometry(0.35, 0.4, 2.2, 8), goldTrimMat);
  pillarL.position.set(-1.6, 1.1, 0);
  const pillarR = new THREE.Mesh(new THREE.CylinderGeometry(0.35, 0.4, 2.2, 8), goldTrimMat);
  pillarR.position.set(1.6, 1.1, 0);

  const roof = new THREE.Mesh(new THREE.ConeGeometry(2.8, 0.9, 4), new THREE.MeshStandardMaterial({ color: 0x991b1b, metalness: 0.4, roughness: 0.5 }));
  roof.position.set(0, 2.4, 0);
  roof.rotation.y = Math.PI / 4;

  const shieldGeo = new THREE.PlaneGeometry(3.0, 1.8);
  const shieldMat = new THREE.MeshBasicMaterial({ color: 0x38bdf8, transparent: true, opacity: 0.25, side: THREE.DoubleSide });
  const shieldMesh = new THREE.Mesh(shieldGeo, shieldMat);
  shieldMesh.position.set(0, 0.9, 0);

  gateGroup.add(leftWall, rightWall, pillarL, pillarR, roof, shieldMesh);
  scene.add(gateGroup);

  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      const idx = r * COLS + c;
      const wx = (c - (COLS - 1) / 2) * TILE_SPACING_X;
      const wz = GRID_START_Z + r * TILE_SPACING_Z;
      gridSlotPositions.push(new THREE.Vector3(wx, 0, wz));

      const tileGroup = new THREE.Group();
      tileGroup.position.set(wx, 0, wz);

      const baseGeo = new THREE.BoxGeometry(2.35, 0.24, 2.15);
      const baseMat = new THREE.MeshStandardMaterial({
        color: 0x0f172a,
        metalness: 0.7,
        roughness: 0.3,
        emissive: 0x0c4a6e,
        emissiveIntensity: 0.15
      });
      const baseMesh = new THREE.Mesh(baseGeo, baseMat);
      baseMesh.userData = { tileIndex: idx };

      const borderGeo = new THREE.EdgesGeometry(baseGeo);
      const borderMat = new THREE.LineBasicMaterial({ color: 0x38bdf8, transparent: true, opacity: 0.4 });
      const borderLine = new THREE.LineSegments(borderGeo, borderMat);
      baseMesh.add(borderLine);

      tileGroup.add(baseMesh);
      scene.add(tileGroup);
      tileMeshes.push(baseMesh);
    }
  }
}
buildBattlefield3D();

/* ==========================================================================
   5. Procedural 3D Character Rigging (Tier 1 ~ Tier 7 Heroes)
========================================================================== */
function buildHeroCharacter3D(tier) {
  const cfg = HERO_CONFIG[tier];
  const root = new THREE.Group();

  const pedMat = new THREE.MeshStandardMaterial({ color: 0x1e293b, metalness: 0.85, roughness: 0.2 });
  const pedestal = new THREE.Mesh(new THREE.CylinderGeometry(0.85, 0.98, 0.18, 8), pedMat);
  pedestal.position.y = 0.09;
  root.add(pedestal);

  const runeRingGeo = new THREE.RingGeometry(0.72, 0.86, 6);
  const runeRingMat = new THREE.MeshBasicMaterial({ color: cfg.hex, side: THREE.DoubleSide, transparent: true, opacity: 0.75 });
  const runeRing = new THREE.Mesh(runeRingGeo, runeRingMat);
  runeRing.rotation.x = -Math.PI / 2;
  runeRing.position.y = 0.2;
  root.add(runeRing);

  const charGroup = new THREE.Group();
  root.add(charGroup);

  const skinColor = tier === 5 ? 0xc0392b : 0xf5cba7;
  const skinMat = new THREE.MeshStandardMaterial({ color: skinColor, roughness: 0.45 });
  const armorMat = new THREE.MeshStandardMaterial({
    color: cfg.hex,
    metalness: 0.65,
    roughness: 0.28,
    emissive: cfg.hex,
    emissiveIntensity: 0.18
  });
  const goldMat = new THREE.MeshStandardMaterial({
    color: 0xfbbf24,
    metalness: 0.9,
    roughness: 0.15,
    emissive: 0xd97706,
    emissiveIntensity: 0.25
  });
  const darkMetalMat = new THREE.MeshStandardMaterial({ color: 0x1f2937, metalness: 0.8, roughness: 0.25 });
  const whiteMat = new THREE.MeshStandardMaterial({ color: 0xf8fafc, roughness: 0.3, emissive: 0xe2e8f0, emissiveIntensity: 0.15 });
  const blackHairMat = new THREE.MeshStandardMaterial({ color: 0x0f172a, roughness: 0.6 });

  let horseGroup = null;
  let horseFrontLegs = null;

  if (tier === 7) {
    horseGroup = new THREE.Group();
    const redHareMat = new THREE.MeshStandardMaterial({
      color: 0x991b1b,
      emissive: 0xef4444,
      emissiveIntensity: 0.3,
      roughness: 0.35,
      metalness: 0.4
    });

    const hBody = new THREE.Mesh(new THREE.BoxGeometry(0.68, 0.55, 1.35), redHareMat);
    hBody.position.set(0, 0.72, 0);
    horseGroup.add(hBody);

    const hBarding = new THREE.Mesh(new THREE.BoxGeometry(0.74, 0.45, 0.5), goldMat);
    hBarding.position.set(0, 0.75, 0.48);
    horseGroup.add(hBarding);

    const hNeckPivot = new THREE.Group();
    hNeckPivot.position.set(0, 0.9, 0.55);
    const hNeck = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.25, 0.65, 8), redHareMat);
    hNeck.rotation.x = Math.PI / 5;
    hNeck.position.set(0, 0.25, 0.12);
    const hHead = new THREE.Mesh(new THREE.BoxGeometry(0.28, 0.28, 0.52), redHareMat);
    hHead.position.set(0, 0.52, 0.32);
    hHead.rotation.x = Math.PI / 6;

    const maneMat = new THREE.MeshBasicMaterial({ color: 0xf97316 });
    for (let m = 0; m < 4; m++) {
      const flame = new THREE.Mesh(new THREE.ConeGeometry(0.09, 0.28, 5), maneMat);
      flame.position.set(0, 0.15 + m * 0.12, -0.05 + m * 0.05);
      flame.rotation.x = -Math.PI / 4;
      hNeckPivot.add(flame);
    }

    hNeckPivot.add(hNeck, hHead);
    horseGroup.add(hNeckPivot);

    horseFrontLegs = new THREE.Group();
    horseFrontLegs.position.set(0, 0.55, 0.45);
    const legFL = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.55, 0.14), redHareMat);
    legFL.position.set(-0.22, -0.25, 0);
    const legFR = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.55, 0.14), redHareMat);
    legFR.position.set(0.22, -0.25, 0);
    horseFrontLegs.add(legFL, legFR);
    horseGroup.add(horseFrontLegs);

    const legBL = new THREE.Mesh(new THREE.BoxGeometry(0.15, 0.55, 0.15), redHareMat);
    legBL.position.set(-0.22, 0.32, -0.48);
    const legBR = new THREE.Mesh(new THREE.BoxGeometry(0.15, 0.55, 0.15), redHareMat);
    legBR.position.set(0.22, 0.32, -0.48);
    horseGroup.add(legBL, legBR);

    root.add(horseGroup);
    charGroup.position.set(0, 0.68, -0.05);
  }

  if (tier === 6) {
    const robeSkirt = new THREE.Mesh(new THREE.ConeGeometry(0.46, 0.72, 12), whiteMat);
    robeSkirt.position.y = 0.52;
    charGroup.add(robeSkirt);
  } else {
    const legL = new THREE.Mesh(new THREE.CylinderGeometry(0.11, 0.1, 0.48, 8), darkMetalMat);
    legL.position.set(-0.16, 0.38, 0);
    const legR = new THREE.Mesh(new THREE.CylinderGeometry(0.11, 0.1, 0.48, 8), darkMetalMat);
    legR.position.set(0.16, 0.38, 0);
    charGroup.add(legL, legR);
  }

  const torsoMat = tier === 1 ? new THREE.MeshStandardMaterial({ color: 0x78350f, roughness: 0.7 })
                 : tier === 4 ? whiteMat
                 : tier === 7 ? darkMetalMat
                 : armorMat;
  const torso = new THREE.Mesh(new THREE.CylinderGeometry(0.32, 0.26, 0.62, 10), torsoMat);
  torso.position.y = 0.88;
  charGroup.add(torso);

  const belt = new THREE.Mesh(new THREE.CylinderGeometry(0.28, 0.28, 0.12, 10), goldMat);
  belt.position.y = 0.65;
  charGroup.add(belt);

  if (tier >= 2) {
    const pMat = (tier === 3 || tier === 5 || tier === 7) ? goldMat : armorMat;
    const pauldronL = new THREE.Mesh(new THREE.SphereGeometry(0.19, 8, 8, 0, Math.PI * 2, 0, Math.PI * 0.6), pMat);
    pauldronL.position.set(-0.36, 1.08, 0);
    pauldronL.rotation.z = Math.PI / 5;
    const pauldronR = new THREE.Mesh(new THREE.SphereGeometry(0.19, 8, 8, 0, Math.PI * 2, 0, Math.PI * 0.6), pMat);
    pauldronR.position.set(0.36, 1.08, 0);
    pauldronR.rotation.z = -Math.PI / 5;
    charGroup.add(pauldronL, pauldronR);
  }

  const headGroup = new THREE.Group();
  headGroup.position.set(0, 1.38, 0);
  const headMesh = new THREE.Mesh(new THREE.SphereGeometry(0.24, 14, 14), skinMat);
  headGroup.add(headMesh);

  const eyeMat = new THREE.MeshBasicMaterial({ color: tier === 7 ? 0xff2222 : 0xffffff });
  const eyeL = new THREE.Mesh(new THREE.SphereGeometry(0.035, 6, 6), eyeMat);
  eyeL.position.set(-0.08, 0.03, 0.21);
  const eyeR = new THREE.Mesh(new THREE.SphereGeometry(0.035, 6, 6), eyeMat);
  eyeR.position.set(0.08, 0.03, 0.21);
  headGroup.add(eyeL, eyeR);
  charGroup.add(headGroup);

  const leftArmPivot = new THREE.Group();
  leftArmPivot.position.set(-0.38, 1.06, 0);
  const leftArmMesh = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.07, 0.45, 8), torsoMat);
  leftArmMesh.position.set(0, -0.18, 0.08);
  leftArmMesh.rotation.x = Math.PI / 4;
  leftArmPivot.add(leftArmMesh);
  charGroup.add(leftArmPivot);

  const rightArmPivot = new THREE.Group();
  rightArmPivot.position.set(0.38, 1.06, 0);
  const rightArmMesh = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.07, 0.45, 8), torsoMat);
  rightArmMesh.position.set(0, -0.18, 0.12);
  rightArmMesh.rotation.x = Math.PI / 3;
  rightArmPivot.add(rightArmMesh);
  charGroup.add(rightArmPivot);

  const weaponGroup = new THREE.Group();
  weaponGroup.position.set(0, -0.35, 0.25);
  rightArmPivot.add(weaponGroup);

  let haloRing = null;
  let pheasantFeathers = null;

  if (tier === 1) {
    const headband = new THREE.Mesh(new THREE.TorusGeometry(0.23, 0.045, 8, 16), new THREE.MeshStandardMaterial({ color: 0xd97706 }));
    headband.rotation.x = Math.PI / 2;
    headband.position.y = 0.09;
    headGroup.add(headband);

    const quiver = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.08, 0.45, 8), new THREE.MeshStandardMaterial({ color: 0x451a03 }));
    quiver.position.set(-0.12, 0.92, -0.26);
    quiver.rotation.z = -0.25;
    charGroup.add(quiver);

    const bowArc = new THREE.Mesh(new THREE.TorusGeometry(0.38, 0.03, 8, 16, Math.PI), new THREE.MeshStandardMaterial({ color: 0x92400e }));
    bowArc.rotation.z = -Math.PI / 2;
    bowArc.position.set(0, -0.32, 0.28);
    const bowString = new THREE.Mesh(new THREE.CylinderGeometry(0.008, 0.008, 0.74, 4), whiteMat);
    bowString.position.set(0, -0.32, 0.28);
    leftArmPivot.add(bowArc, bowString);

    const arrowShaft = new THREE.Mesh(new THREE.CylinderGeometry(0.015, 0.015, 0.65, 6), goldMat);
    arrowShaft.rotation.x = Math.PI / 2;
    weaponGroup.add(arrowShaft);

  } else if (tier === 2) {
    const helmet = new THREE.Mesh(new THREE.SphereGeometry(0.26, 12, 10, 0, Math.PI * 2, 0, Math.PI * 0.55), armorMat);
    helmet.position.y = 0.04;
    const plume = new THREE.Mesh(new THREE.ConeGeometry(0.08, 0.28, 6), new THREE.MeshBasicMaterial({ color: 0xef4444 }));
    plume.position.y = 0.34;
    headGroup.add(helmet, plume);

    const shield = new THREE.Mesh(new THREE.BoxGeometry(0.46, 0.68, 0.08), armorMat);
    shield.position.set(-0.08, -0.22, 0.28);
    const shieldRim = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.72, 0.05), goldMat);
    shieldRim.position.set(-0.08, -0.22, 0.26);
    leftArmPivot.add(shield, shieldRim);

    const shaft = new THREE.Mesh(new THREE.CylinderGeometry(0.028, 0.028, 1.75, 8), darkMetalMat);
    shaft.rotation.x = Math.PI / 2;
    shaft.position.z = 0.35;
    const spearTip = new THREE.Mesh(new THREE.ConeGeometry(0.075, 0.38, 6), whiteMat);
    spearTip.rotation.x = Math.PI / 2;
    spearTip.position.z = 1.35;
    weaponGroup.add(shaft, spearTip);

  } else if (tier === 3) {
    const goldHelm = new THREE.Mesh(new THREE.ConeGeometry(0.27, 0.36, 8), goldMat);
    goldHelm.position.y = 0.22;
    headGroup.add(goldHelm);

    const whiteBeard = new THREE.Mesh(new THREE.ConeGeometry(0.18, 0.48, 8), whiteMat);
    whiteBeard.rotation.x = Math.PI;
    whiteBeard.position.set(0, -0.22, 0.16);
    const browL = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.03, 0.04), whiteMat);
    browL.position.set(-0.09, 0.09, 0.22);
    browL.rotation.z = 0.2;
    const browR = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.03, 0.04), whiteMat);
    browR.position.set(0.09, 0.09, 0.22);
    browR.rotation.z = -0.2;
    headGroup.add(whiteBeard, browL, browR);

    const greatBow = new THREE.Mesh(new THREE.TorusGeometry(0.55, 0.048, 8, 20, Math.PI * 1.05), goldMat);
    greatBow.rotation.z = -Math.PI / 2;
    greatBow.position.set(0, 0, 0.2);
    const glowingArrow = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.025, 0.95, 6), new THREE.MeshBasicMaterial({ color: 0xfef08a }));
    glowingArrow.rotation.x = Math.PI / 2;
    glowingArrow.position.z = 0.35;
    weaponGroup.add(greatBow, glowingArrow);

  } else if (tier === 4) {
    const dragonHelm = new THREE.Mesh(new THREE.SphereGeometry(0.26, 12, 10, 0, Math.PI * 2, 0, Math.PI * 0.6), whiteMat);
    dragonHelm.position.y = 0.05;
    const wingL = new THREE.Mesh(new THREE.ConeGeometry(0.08, 0.32, 4), armorMat);
    wingL.position.set(-0.26, 0.18, -0.05);
    wingL.rotation.z = 0.45;
    const wingR = new THREE.Mesh(new THREE.ConeGeometry(0.08, 0.32, 4), armorMat);
    wingR.position.set(0.26, 0.18, -0.05);
    wingR.rotation.z = -0.45;
    headGroup.add(dragonHelm, wingL, wingR);

    const cape = new THREE.Mesh(new THREE.PlaneGeometry(0.65, 0.95), new THREE.MeshStandardMaterial({ color: 0x06b6d4, side: THREE.DoubleSide }));
    cape.position.set(0, 0.72, -0.28);
    cape.rotation.x = 0.22;
    charGroup.add(cape);

    const silverShaft = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 2.0, 8), whiteMat);
    silverShaft.rotation.x = Math.PI / 2;
    silverShaft.position.z = 0.45;
    const dragonTip = new THREE.Mesh(new THREE.ConeGeometry(0.09, 0.48, 8), new THREE.MeshBasicMaterial({ color: 0x67e8f9 }));
    dragonTip.rotation.x = Math.PI / 2;
    dragonTip.position.z = 1.6;
    const auraCoil = new THREE.Mesh(new THREE.TorusGeometry(0.16, 0.025, 8, 16), new THREE.MeshBasicMaterial({ color: 0x22d3ee }));
    auraCoil.position.z = 1.25;
    weaponGroup.add(silverShaft, dragonTip, auraCoil);

  } else if (tier === 5) {
    const guanCap = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.25, 0.28, 8), armorMat);
    guanCap.position.y = 0.2;
    const capGoldBand = new THREE.Mesh(new THREE.TorusGeometry(0.24, 0.035, 8, 16), goldMat);
    capGoldBand.rotation.x = Math.PI / 2;
    capGoldBand.position.y = 0.1;
    headGroup.add(guanCap, capGoldBand);

    const longBeard = new THREE.Mesh(new THREE.ConeGeometry(0.17, 0.78, 6), blackHairMat);
    longBeard.rotation.x = Math.PI;
    longBeard.position.set(0, -0.38, 0.18);
    headGroup.add(longBeard);

    const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.036, 0.036, 2.15, 8), goldMat);
    pole.rotation.x = Math.PI / 2;
    pole.position.z = 0.45;
    const dragonHilt = new THREE.Mesh(new THREE.OctahedronGeometry(0.13), goldMat);
    dragonHilt.position.z = 1.45;
    const crescentBlade = new THREE.Mesh(
      new THREE.TorusGeometry(0.36, 0.075, 8, 18, Math.PI * 0.85),
      new THREE.MeshBasicMaterial({ color: 0x34d399 })
    );
    crescentBlade.rotation.x = Math.PI / 2;
    crescentBlade.position.set(0.12, 0, 1.65);
    weaponGroup.add(pole, dragonHilt, crescentBlade);

  } else if (tier === 6) {
    const crownBase = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.22, 0.34, 8), goldMat);
    crownBase.position.y = 0.24;
    const crownJade = new THREE.Mesh(new THREE.OctahedronGeometry(0.1), new THREE.MeshBasicMaterial({ color: 0xc084fc }));
    crownJade.position.y = 0.44;
    const scholarBeard = new THREE.Mesh(new THREE.ConeGeometry(0.12, 0.52, 6), blackHairMat);
    scholarBeard.rotation.x = Math.PI;
    scholarBeard.position.set(0, -0.26, 0.17);
    headGroup.add(crownBase, crownJade, scholarBeard);

    haloRing = new THREE.Mesh(
      new THREE.RingGeometry(0.62, 0.78, 8),
      new THREE.MeshBasicMaterial({ color: 0xa855f7, side: THREE.DoubleSide, transparent: true, opacity: 0.85 })
    );
    haloRing.position.set(0, 1.25, -0.28);
    charGroup.add(haloRing);

    const orb = new THREE.Mesh(new THREE.OctahedronGeometry(0.15), new THREE.MeshBasicMaterial({ color: 0xd8b4fe }));
    orb.position.set(0, -0.28, 0.26);
    leftArmPivot.add(orb);

    const fanGroup = new THREE.Group();
    const fanHandle = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 0.35, 6), goldMat);
    fanGroup.add(fanHandle);
    for (let f = -3; f <= 3; f++) {
      const feather = new THREE.Mesh(new THREE.ConeGeometry(0.065, 0.46, 4), whiteMat);
      feather.position.set(f * 0.055, 0.24, 0);
      feather.rotation.z = -f * 0.14;
      feather.scale.set(1, 1, 0.3);
      fanGroup.add(feather);
    }
    fanGroup.rotation.x = Math.PI / 3;
    weaponGroup.add(fanGroup);

  } else if (tier === 7) {
    const lubuCrown = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.22, 0.26, 8), goldMat);
    lubuCrown.position.y = 0.22;
    headGroup.add(lubuCrown);

    pheasantFeathers = new THREE.Group();
    pheasantFeathers.position.set(0, 0.32, 0);
    const featherMat = new THREE.MeshBasicMaterial({ color: 0xff2222 });
    const plumeL = new THREE.Mesh(new THREE.CylinderGeometry(0.015, 0.04, 1.35, 6), featherMat);
    plumeL.position.set(-0.22, 0.45, -0.45);
    plumeL.rotation.x = -Math.PI / 3.2;
    plumeL.rotation.z = 0.28;
    const plumeR = new THREE.Mesh(new THREE.CylinderGeometry(0.015, 0.04, 1.35, 6), featherMat);
    plumeR.position.set(0.22, 0.45, -0.45);
    plumeR.rotation.x = -Math.PI / 3.2;
    plumeR.rotation.z = -0.28;
    pheasantFeathers.add(plumeL, plumeR);
    headGroup.add(pheasantFeathers);

    const lubuCape = new THREE.Mesh(new THREE.PlaneGeometry(0.85, 1.1), new THREE.MeshStandardMaterial({ color: 0xdc2626, side: THREE.DoubleSide }));
    lubuCape.position.set(0, 0.75, -0.3);
    lubuCape.rotation.x = 0.35;
    charGroup.add(lubuCape);

    const halberdPole = new THREE.Mesh(new THREE.CylinderGeometry(0.042, 0.042, 2.55, 8), goldMat);
    halberdPole.rotation.x = Math.PI / 2;
    halberdPole.position.z = 0.55;

    const centerSpear = new THREE.Mesh(new THREE.ConeGeometry(0.11, 0.58, 6), new THREE.MeshBasicMaterial({ color: 0xfef08a }));
    centerSpear.rotation.x = Math.PI / 2;
    centerSpear.position.z = 1.98;

    const sideMoonL = new THREE.Mesh(
      new THREE.TorusGeometry(0.28, 0.055, 6, 14, Math.PI),
      new THREE.MeshBasicMaterial({ color: 0xef4444 })
    );
    sideMoonL.rotation.x = Math.PI / 2;
    sideMoonL.rotation.z = Math.PI / 2;
    sideMoonL.position.set(0.14, 0, 1.62);

    const sideMoonR = new THREE.Mesh(
      new THREE.TorusGeometry(0.28, 0.055, 6, 14, Math.PI),
      new THREE.MeshBasicMaterial({ color: 0xef4444 })
    );
    sideMoonR.rotation.x = Math.PI / 2;
    sideMoonR.rotation.z = -Math.PI / 2;
    sideMoonR.position.set(-0.14, 0, 1.62);

    weaponGroup.add(halberdPole, centerSpear, sideMoonL, sideMoonR);
  }

  root.userData = {
    tier,
    charGroup,
    rightArmPivot,
    leftArmPivot,
    weaponGroup,
    runeRing,
    haloRing,
    pheasantFeathers,
    horseGroup,
    horseFrontLegs,
    attackAnimTimer: 0,
    animPhase: Math.random() * Math.PI * 2
  };

  return root;
}

/* ==========================================================================
   6. Procedural 3D Enemy & Cavalry Rigging (`buildEnemyCharacter3D`)
========================================================================== */
function buildEnemyCharacter3D(config) {
  const root = new THREE.Group();
  const isBoss = config.isBoss;
  const isCavalry = config.enemyName.includes("기병") || config.enemyName.includes("철기") || isBoss;
  const isYellowTurban = config.enemyName.includes("황건");

  const scale = isBoss ? 1.55 : 0.85;
  root.scale.set(scale, scale, scale);

  const skinMat = new THREE.MeshStandardMaterial({ color: 0xe5b887, roughness: 0.5 });
  const clothColor = isBoss ? 0x991b1b : (isYellowTurban ? 0xeab308 : 0x334155);
  const armorMat = new THREE.MeshStandardMaterial({
    color: clothColor,
    metalness: 0.6,
    roughness: 0.35,
    emissive: isBoss ? 0xef4444 : 0x000000,
    emissiveIntensity: isBoss ? 0.3 : 0
  });
  const weaponMat = new THREE.MeshStandardMaterial({ color: 0xe2e8f0, metalness: 0.85, roughness: 0.2 });

  const legPivots = [];
  const bodyContainer = new THREE.Group();
  root.add(bodyContainer);

  if (isCavalry) {
    const horseColor = isBoss ? 0x450a0a : 0x451a03;
    const horseMat = new THREE.MeshStandardMaterial({ color: horseColor, roughness: 0.6 });
    const hBody = new THREE.Mesh(new THREE.BoxGeometry(0.55, 0.45, 1.15), horseMat);
    hBody.position.y = 0.58;
    root.add(hBody);

    const hNeck = new THREE.Mesh(new THREE.BoxGeometry(0.26, 0.5, 0.28), horseMat);
    hNeck.position.set(0, 0.88, 0.48);
    hNeck.rotation.x = Math.PI / 6;
    const hHead = new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.24, 0.42), horseMat);
    hHead.position.set(0, 1.08, 0.65);
    root.add(hNeck, hHead);

    const legOffsets = [
      [-0.2, 0.38, 0.38], [0.2, 0.38, 0.38],
      [-0.2, 0.38, -0.38], [0.2, 0.38, -0.38]
    ];
    legOffsets.forEach(([lx, ly, lz]) => {
      const lp = new THREE.Group();
      lp.position.set(lx, ly, lz);
      const lMesh = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.42, 0.12), horseMat);
      lMesh.position.y = -0.18;
      lp.add(lMesh);
      root.add(lp);
      legPivots.push(lp);
    });

    bodyContainer.position.y = 0.52;
  } else {
    [-0.14, 0.14].forEach(lx => {
      const lp = new THREE.Group();
      lp.position.set(lx, 0.42, 0);
      const lMesh = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.08, 0.42, 6), armorMat);
      lMesh.position.y = -0.18;
      lp.add(lMesh);
      bodyContainer.add(lp);
      legPivots.push(lp);
    });
  }

  const torso = new THREE.Mesh(new THREE.CylinderGeometry(0.25, 0.22, 0.52, 8), armorMat);
  torso.position.y = 0.68;
  const head = new THREE.Mesh(new THREE.SphereGeometry(0.2, 10, 10), skinMat);
  head.position.y = 1.1;

  const helmMat = new THREE.MeshStandardMaterial({ color: isYellowTurban ? 0xfacc15 : 0x0f172a });
  const helm = new THREE.Mesh(new THREE.CylinderGeometry(0.19, 0.22, 0.18, 8), helmMat);
  helm.position.y = 1.2;
  bodyContainer.add(torso, head, helm);

  const armPivot = new THREE.Group();
  armPivot.position.set(0.3, 0.85, 0);
  const blade = new THREE.Mesh(
    new THREE.BoxGeometry(0.06, 0.08, isCavalry ? 1.35 : 0.75),
    weaponMat
  );
  blade.position.set(0, -0.1, 0.4);
  armPivot.add(blade);
  bodyContainer.add(armPivot);

  let bossAura = null;
  if (isBoss) {
    const crown = new THREE.Mesh(
      new THREE.ConeGeometry(0.22, 0.35, 5),
      new THREE.MeshBasicMaterial({ color: 0xfde047 })
    );
    crown.position.y = 1.52;
    bodyContainer.add(crown);

    bossAura = new THREE.Mesh(
      new THREE.RingGeometry(0.75, 1.05, 16),
      new THREE.MeshBasicMaterial({ color: 0xef4444, side: THREE.DoubleSide, transparent: true, opacity: 0.75 })
    );
    bossAura.rotation.x = -Math.PI / 2;
    bossAura.position.y = 0.05;
    root.add(bossAura);
  }

  root.userData = { legPivots, armPivot, bossAura, walkTime: Math.random() * 10 };
  return root;
}

/* ==========================================================================
   7. Game State, Chapters & Synergies
========================================================================== */
const gameState = {
  gold: 100,
  gateHp: 100,
  maxGateHp: 100,
  kills: 0,
  wave: 1,
  recruitCost: 20,
  upgradeLevel: 1,
  upgradeCost: 30,
  atkBonusPercent: 0,
  goldMultiplier: 1.0,
  aspdBonusPercent: 0,
  synergyAspdBonus: 0,
  synergyAtkRangeBonus: 0,
  synergyCritChance: 0.15,
  skillCooldown: 0,
  paused: false,
  gameOver: false,
  grid: Array(ROWS * COLS).fill(null),
  enemies: [],
  projectiles: [],
  effects3D: [],
  floatingTexts: [],
  draggedItem: null,
  inspectedHero: null,
  waveInProgress: false,
  enemiesToSpawn: 0,
  spawnTimer: 0,
  auraTimer: 0
};

const CHAPTERS = [
  { wave: 1, name: "제1장 황건적의 난", enemyName: "황건적", hp: 48, speed: 1.15, gold: 12, isBoss: false },
  { wave: 2, name: "제2장 황건적 정예", enemyName: "황건적 장수", hp: 95, speed: 1.25, gold: 15, isBoss: false },
  { wave: 3, name: "제3장 서량 기병대", enemyName: "서량 기병", hp: 190, speed: 1.45, gold: 20, isBoss: false },
  { wave: 4, name: "제4장 동탁 선봉대", enemyName: "동탁 중장병", hp: 340, speed: 1.2, gold: 25, isBoss: false },
  { wave: 5, name: "제5장 사곡의 결전 [보스: 화웅]", enemyName: "보스 화웅", hp: 1700, speed: 0.85, gold: 110, isBoss: true },
  { wave: 6, name: "제6장 연합군 격돌", enemyName: "서량 정예기병", hp: 620, speed: 1.4, gold: 35, isBoss: false },
  { wave: 7, name: "제7장 호뢰관 관문전", enemyName: "동탁 친위대", hp: 1050, speed: 1.25, gold: 45, isBoss: false },
  { wave: 8, name: "제8장 하북의 강호", enemyName: "원소철기", hp: 1650, speed: 1.38, gold: 55, isBoss: false },
  { wave: 9, name: "제9장 야망의 동탁군", enemyName: "동탁 근위대장", hp: 2600, speed: 1.2, gold: 70, isBoss: false },
  { wave: 10, name: "제10장 호뢰관의 악몽 [보스: 무신 여포]", enemyName: "보스 무신 여포", hp: 11000, speed: 0.92, gold: 320, isBoss: true }
];

function getWaveConfig(waveNum) {
  if (waveNum <= CHAPTERS.length) return CHAPTERS[waveNum - 1];
  const isBoss = waveNum % 5 === 0;
  const baseHp = Math.round(1100 * Math.pow(1.38, waveNum - 5));
  const bossName = isBoss ? `무신 여포 Lv.${waveNum / 5}` : `정예 철기병 Lv.${waveNum}`;
  return {
    wave: waveNum,
    name: `제${waveNum}장 ${isBoss ? "[보스전] " + bossName : "천하패권전"}`,
    enemyName: isBoss ? bossName : "패왕의 철기병",
    hp: isBoss ? baseHp * 5 : baseHp,
    speed: Math.min(2.0, 1.1 + waveNum * 0.03),
    gold: Math.round(35 + waveNum * 9),
    isBoss
  };
}

/* ==========================================================================
   8. Hero, Enemy & 3D Projectile Classes
========================================================================== */
class Hero {
  constructor(tier, slotIndex) {
    this.tier = tier;
    this.config = HERO_CONFIG[tier];
    this.attackCooldown = 0;
    this.slotIndex = slotIndex;
    this.mesh = buildHeroCharacter3D(tier);
    this.mesh.position.copy(gridSlotPositions[slotIndex]);
    scene.add(this.mesh);
  }
  getAtk() {
    return Math.round(this.config.atk * (1 + (gameState.atkBonusPercent + gameState.synergyAtkRangeBonus) / 100));
  }
  getAttackSpeed() {
    return this.config.attackSpeed * (1 + (gameState.aspdBonusPercent + gameState.synergyAspdBonus) / 100);
  }
  getRange() {
    return this.config.range * (1 + gameState.synergyAtkRangeBonus / 100);
  }
  updateAnimation(dt, time) {
    const ud = this.mesh.userData;
    ud.runeRing.rotation.z += dt * 1.4;
    if (ud.haloRing) ud.haloRing.rotation.z -= dt * 2.2;

    const bob = Math.sin(time * 3.5 + ud.animPhase) * 0.05;
    if (this.tier === 6) {
      ud.charGroup.position.y = 0.16 + Math.sin(time * 2.8 + ud.animPhase) * 0.1;
    } else if (this.tier === 7) {
      ud.charGroup.position.y = 0.68 + bob;
    } else {
      ud.charGroup.position.y = bob;
    }

    if (ud.attackAnimTimer > 0) {
      ud.attackAnimTimer = Math.max(0, ud.attackAnimTimer - dt * 3.8);
      const p = Math.sin(ud.attackAnimTimer * Math.PI);

      if (this.tier === 1 || this.tier === 3) {
        ud.rightArmPivot.rotation.x = -p * 0.75;
      } else if (this.tier === 2 || this.tier === 4) {
        ud.rightArmPivot.position.z = p * 0.45;
        ud.weaponGroup.rotation.z = p * Math.PI * 2;
      } else if (this.tier === 5) {
        ud.rightArmPivot.rotation.y = -p * 1.6;
        ud.rightArmPivot.rotation.x = p * 0.8;
      } else if (this.tier === 6) {
        ud.rightArmPivot.rotation.x = -p * 1.2;
      } else if (this.tier === 7) {
        if (ud.horseGroup) ud.horseGroup.rotation.x = -p * 0.45;
        if (ud.horseFrontLegs) ud.horseFrontLegs.rotation.x = -p * 0.6;
        ud.rightArmPivot.rotation.x = p * 1.35;
      }
    } else {
      ud.rightArmPivot.position.z = 0;
      ud.rightArmPivot.rotation.set(0, 0, 0);
      ud.weaponGroup.rotation.set(0, 0, 0);
      if (ud.horseGroup) ud.horseGroup.rotation.x = 0;
    }
  }
  destroy() {
    scene.remove(this.mesh);
  }
}

class Enemy {
  constructor(config) {
    this.name = config.enemyName;
    this.maxHp = config.hp;
    this.hp = config.hp;
    this.speed = config.speed;
    this.goldReward = config.gold;
    this.isBoss = config.isBoss;
    this.pathProgress = 0;
    this.slowTimer = 0;
    this.slowFactor = 1.0;
    this.mesh = buildEnemyCharacter3D(config);
    const startPt = pathCurve.getPointAt(0);
    this.mesh.position.copy(startPt);
    scene.add(this.mesh);
  }
  update(dt) {
    if (this.slowTimer > 0) {
      this.slowTimer -= dt;
      if (this.slowTimer <= 0) this.slowFactor = 1.0;
    }
    const moveStep = (this.speed * this.slowFactor * dt) / 14.5;
    this.pathProgress += moveStep;
    if (this.pathProgress >= 1) {
      this.pathProgress = 1;
      return true;
    }
    const pt = pathCurve.getPointAt(this.pathProgress);
    const nextPt = pathCurve.getPointAt(Math.min(1, this.pathProgress + 0.01));
    this.mesh.position.copy(pt);

    const angle = Math.atan2(nextPt.x - pt.x, nextPt.z - pt.z);
    this.mesh.rotation.y = angle;

    const ud = this.mesh.userData;
    ud.walkTime += dt * 11 * this.slowFactor;
    ud.legPivots.forEach((lp, idx) => {
      lp.rotation.x = Math.sin(ud.walkTime + (idx % 2) * Math.PI) * 0.55;
    });
    ud.armPivot.rotation.x = Math.cos(ud.walkTime) * 0.35;
    if (ud.bossAura) ud.bossAura.rotation.z += dt * 2.5;
    return false;
  }
  destroy() {
    scene.remove(this.mesh);
  }
}

class Projectile3D {
  constructor(startPos, target, hero) {
    this.pos = startPos.clone();
    this.pos.y += 1.1;
    this.target = target;
    this.hero = hero;
    this.type = hero.config.attackType;
    this.damage = hero.getAtk();
    this.speed = 28;
    this.active = true;
    this.colorHex = hero.config.hex;

    if (this.type === "aoe") {
      this.mesh = new THREE.Mesh(
        new THREE.TorusGeometry(0.65, 0.1, 6, 16, Math.PI),
        new THREE.MeshBasicMaterial({ color: 0x34d399 })
      );
      this.mesh.rotation.x = Math.PI / 2;
    } else {
      this.mesh = new THREE.Mesh(
        new THREE.ConeGeometry(0.14, 0.75, 6),
        new THREE.MeshBasicMaterial({ color: this.colorHex })
      );
      this.mesh.rotation.x = Math.PI / 2;
    }
    this.mesh.position.copy(this.pos);
    scene.add(this.mesh);

    if (this.type === "pierce") {
      const dir = new THREE.Vector3().subVectors(target.mesh.position, this.pos).setY(0).normalize();
      this.vel = dir.multiplyScalar(this.speed);
      this.hitSet = new Set();
      this.life = 1.2;
    }
  }
  update(dt, enemies) {
    if (!this.active) return;
    if (this.type === "pierce") {
      this.pos.addScaledVector(this.vel, dt);
      this.mesh.position.copy(this.pos);
      this.mesh.lookAt(this.pos.clone().add(this.vel));
      this.life -= dt;

      enemies.forEach(e => {
        if (!this.hitSet.has(e) && e.mesh.position.distanceTo(this.pos) < 1.35) {
          this.hitSet.add(e);
          applyDamage(e, this.damage);
          spawn3DImpactRing(e.mesh.position, this.colorHex, 1.2);
        }
      });
      if (this.life <= 0) this.destroy();
    } else {
      if (!enemies.includes(this.target)) {
        if (enemies.length > 0) this.target = enemies[0];
        else {
          this.destroy();
          return;
        }
      }
      const targetPos = this.target.mesh.position.clone().add(new THREE.Vector3(0, 0.8, 0));
      const dist = this.pos.distanceTo(targetPos);
      if (dist < 0.75) {
        if (this.type === "aoe") {
          enemies.forEach(e => {
            if (e.mesh.position.distanceTo(this.target.mesh.position) <= 3.5) {
              applyDamage(e, this.damage);
            }
          });
          spawn3DImpactRing(this.target.mesh.position, 0x10b981, 3.2);
        } else {
          applyDamage(this.target, this.damage);
          spawn3DImpactRing(this.target.mesh.position, this.colorHex, 1.1);
        }
        this.destroy();
      } else {
        const dir = new THREE.Vector3().subVectors(targetPos, this.pos).normalize();
        this.pos.addScaledVector(dir, this.speed * dt);
        this.mesh.position.copy(this.pos);
        if (this.type === "aoe") {
          this.mesh.rotation.z += dt * 12;
        } else {
          this.mesh.lookAt(targetPos);
        }
      }
    }
  }
  destroy() {
    this.active = false;
    scene.remove(this.mesh);
  }
}

function spawn3DImpactRing(worldPos, colorHex, maxRadius = 2.0, isVerticalBeam = false) {
  const group = new THREE.Group();
  group.position.copy(worldPos);
  group.position.y = 0.15;

  const ring = new THREE.Mesh(
    new THREE.RingGeometry(0.2, 0.45, 24),
    new THREE.MeshBasicMaterial({ color: colorHex, side: THREE.DoubleSide, transparent: true, opacity: 0.9 })
  );
  ring.rotation.x = -Math.PI / 2;
  group.add(ring);

  if (isVerticalBeam) {
    const beam = new THREE.Mesh(
      new THREE.CylinderGeometry(0.28, 0.28, 12, 12),
      new THREE.MeshBasicMaterial({ color: colorHex, transparent: true, opacity: 0.75 })
    );
    beam.position.y = 6;
    group.add(beam);
  }

  scene.add(group);
  gameState.effects3D.push({ group, ring, life: 0.38, maxLife: 0.38, maxRadius });
}

/* ==========================================================================
   9. 2D HUD Overlay (Floating Damage Text & Sell Drop-Zone)
========================================================================== */
class FloatingText2D {
  constructor(worldPos, text, color = "#fde047", fontSize = 15) {
    this.worldPos = worldPos.clone();
    this.text = text;
    this.color = color;
    this.fontSize = fontSize;
    this.life = 0.85;
    this.maxLife = 0.85;
    this.offsetY = 0;
  }
  update(dt) {
    this.offsetY += 36 * dt;
    this.life -= dt;
  }
  draw(ctx) {
    if (this.life <= 0) return;
    const screenPt = worldToScreen(this.worldPos);
    ctx.save();
    ctx.globalAlpha = Math.max(0, this.life / this.maxLife);
    ctx.fillStyle = this.color;
    ctx.font = `800 ${this.fontSize}px sans-serif`;
    ctx.textAlign = "center";
    ctx.shadowColor = "#000000";
    ctx.shadowBlur = 5;
    ctx.fillText(this.text, screenPt.x, screenPt.y - this.offsetY);
    ctx.restore();
  }
}

function worldToScreen(worldVec) {
  const v = worldVec.clone().project(camera);
  return {
    x: (v.x * 0.5 + 0.5) * hudCanvas.width,
    y: (-(v.y * 0.5) + 0.5) * hudCanvas.height
  };
}

/* ==========================================================================
   10. Raycaster Touch Drag-and-Drop, Merge & Sell System
========================================================================== */
const raycaster = new THREE.Raycaster();
const pointerNDC = new THREE.Vector2();
const dragPlane = new THREE.Plane(new THREE.Vector3(0, 1, 0), -1.2);
const dragIntersectPt = new THREE.Vector3();

function updatePointerNDC(clientX, clientY) {
  const rect = renderer.domElement.getBoundingClientRect();
  pointerNDC.x = ((clientX - rect.left) / rect.width) * 2 - 1;
  pointerNDC.y = -((clientY - rect.top) / rect.height) * 2 + 1;
  return {
    localX: clientX - rect.left,
    localY: clientY - rect.top,
    height: rect.height
  };
}

function getNearestTileIndex(worldPt) {
  let bestIdx = -1;
  let minDist = 1.65;
  gridSlotPositions.forEach((slotPos, idx) => {
    const d = Math.hypot(worldPt.x - slotPos.x, worldPt.z - slotPos.z);
    if (d < minDist) {
      minDist = d;
      bestIdx = idx;
    }
  });
  return bestIdx;
}

function showInspector(hero) {
  const inspEl = document.getElementById("unit-inspector");
  if (!hero) {
    inspEl.classList.add("hidden");
    return;
  }
  document.getElementById("insp-name").innerText = `${hero.config.name} [Tier ${hero.tier} · ${hero.config.faction}]`;
  document.getElementById("insp-desc").innerText = hero.config.desc;
  document.getElementById("insp-atk").innerText = hero.getAtk();
  document.getElementById("insp-spd").innerText = hero.getAttackSpeed().toFixed(1) + "/s";
  inspEl.classList.remove("hidden");
}

function onPointerDown(clientX, clientY) {
  if (gameState.gameOver || gameState.paused) return;
  audioEngine.init();
  updatePointerNDC(clientX, clientY);
  raycaster.setFromCamera(pointerNDC, camera);

  const intersects = raycaster.intersectObjects(tileMeshes, false);
  let slotIdx = -1;
  if (intersects.length > 0) {
    slotIdx = intersects[0].object.userData.tileIndex;
  } else if (raycaster.ray.intersectPlane(dragPlane, dragIntersectPt)) {
    slotIdx = getNearestTileIndex(dragIntersectPt);
  }

  if (slotIdx !== -1 && gameState.grid[slotIdx]) {
    const hero = gameState.grid[slotIdx];
    gameState.draggedItem = {
      sourceIndex: slotIdx,
      hero,
      inSellZone: false
    };
    showInspector(hero);
    audioEngine.playSound("spear");
  } else {
    showInspector(null);
  }
}

function onPointerMove(clientX, clientY) {
  if (!gameState.draggedItem) return;
  const local = updatePointerNDC(clientX, clientY);
  raycaster.setFromCamera(pointerNDC, camera);

  if (raycaster.ray.intersectPlane(dragPlane, dragIntersectPt)) {
    gameState.draggedItem.hero.mesh.position.set(dragIntersectPt.x, 1.35, dragIntersectPt.z);
  }
  gameState.draggedItem.inSellZone = local.localY > local.height - 58;
}

function onPointerUp() {
  if (!gameState.draggedItem) return;
  const { sourceIndex, hero, inSellZone } = gameState.draggedItem;

  if (inSellZone) {
    const refund = Math.max(10, Math.round(gameState.recruitCost * hero.tier * 0.5));
    gameState.gold += refund;
    gameState.floatingTexts.push(
      new FloatingText2D(hero.mesh.position, `+${refund}🌾 해산 환급!`, "#fde047", 16)
    );
    hero.destroy();
    gameState.grid[sourceIndex] = null;
    audioEngine.playSound("merge");
    recalcSynergies();
    showInspector(null);
    gameState.draggedItem = null;
    return;
  }

  const targetIndex = getNearestTileIndex(hero.mesh.position);
  if (targetIndex !== -1 && targetIndex !== sourceIndex) {
    const targetHero = gameState.grid[targetIndex];
    if (!targetHero) {
      gameState.grid[targetIndex] = hero;
      gameState.grid[sourceIndex] = null;
      hero.slotIndex = targetIndex;
      hero.mesh.position.copy(gridSlotPositions[targetIndex]);
    } else if (targetHero.tier === hero.tier && hero.tier < 7) {
      const nextTier = hero.tier + 1;
      hero.destroy();
      targetHero.destroy();
      gameState.grid[sourceIndex] = null;

      const promoted = new Hero(nextTier, targetIndex);
      gameState.grid[targetIndex] = promoted;
      spawn3DImpactRing(promoted.mesh.position, promoted.config.hex, 2.8, true);
      gameState.floatingTexts.push(
        new FloatingText2D(promoted.mesh.position, `★ ${promoted.config.name} 승급! ★`, promoted.config.color, 18)
      );
      showInspector(promoted);
      if (nextTier === 7) {
        audioEngine.playSound("lubu");
        triggerScreenShake(0.6, 0.5);
      } else {
        audioEngine.playSound("merge");
      }
    } else {
      gameState.grid[targetIndex] = hero;
      gameState.grid[sourceIndex] = targetHero;
      hero.slotIndex = targetIndex;
      targetHero.slotIndex = sourceIndex;
      hero.mesh.position.copy(gridSlotPositions[targetIndex]);
      targetHero.mesh.position.copy(gridSlotPositions[sourceIndex]);
    }
  } else {
    hero.mesh.position.copy(gridSlotPositions[sourceIndex]);
  }

  recalcSynergies();
  gameState.draggedItem = null;
}

const viewEl = document.getElementById("game-view");
viewEl.addEventListener("touchstart", e => {
  e.preventDefault();
  if (e.touches.length > 0) onPointerDown(e.touches[0].clientX, e.touches[0].clientY);
}, { passive: false });
viewEl.addEventListener("touchmove", e => {
  e.preventDefault();
  if (e.touches.length > 0) onPointerMove(e.touches[0].clientX, e.touches[0].clientY);
}, { passive: false });
viewEl.addEventListener("touchend", e => {
  e.preventDefault();
  onPointerUp();
}, { passive: false });

viewEl.addEventListener("mousedown", e => onPointerDown(e.clientX, e.clientY));
window.addEventListener("mousemove", e => onPointerMove(e.clientX, e.clientY));
window.addEventListener("mouseup", () => onPointerUp());

/* ==========================================================================
   11. Faction Synergies & Combat Engine
========================================================================== */
function recalcSynergies() {
  let shu = 0, wei = 0, qun = 0;
  gameState.grid.forEach(h => {
    if (!h) return;
    if (h.config.faction === "촉") shu++;
    else if (h.config.faction === "위") wei++;
    else if (h.config.faction === "군웅") qun++;
  });

  gameState.synergyAspdBonus = shu >= 3 ? 25 : 0;
  gameState.synergyAtkRangeBonus = wei >= 2 ? 15 : 0;
  gameState.synergyCritChance = qun >= 3 ? 0.40 : 0.15;

  const shuEl = document.getElementById("syn-shu");
  const weiEl = document.getElementById("syn-wei");
  const qunEl = document.getElementById("syn-qun");

  shuEl.innerText = `촉(공속+25%) ${shu}/3`;
  weiEl.innerText = `위(화력+15%) ${wei}/2`;
  qunEl.innerText = `군웅(치명+25%) ${qun}/3`;

  shuEl.className = "syn-badge" + (shu >= 3 ? " active-shu" : "");
  weiEl.className = "syn-badge" + (wei >= 2 ? " active-wei" : "");
  qunEl.className = "syn-badge" + (qun >= 3 ? " active-qun" : "");
}

function applyDamage(enemy, rawAmount) {
  const isCrit = Math.random() < gameState.synergyCritChance;
  const finalDmg = isCrit ? Math.round(rawAmount * 2.0) : rawAmount;
  enemy.hp -= finalDmg;
  audioEngine.playSound("hit");

  const pos = enemy.mesh.position.clone().add(new THREE.Vector3(0, 1.3, 0));
  gameState.floatingTexts.push(
    new FloatingText2D(
      pos,
      isCrit ? `💥 -${finalDmg}!` : `-${finalDmg}`,
      isCrit ? "#fde047" : "#f87171",
      isCrit ? 17 : 13
    )
  );

  if (enemy.hp <= 0) {
    const reward = Math.round(enemy.goldReward * gameState.goldMultiplier);
    gameState.gold += reward;
    gameState.kills += 1;
    gameState.floatingTexts.push(new FloatingText2D(pos, `+${reward}🌾`, "#34d399", 14));
    spawn3DImpactRing(enemy.mesh.position, 0xfacc15, 1.6);
  }
}

function updateCombat(dt, time) {
  const aliveEnemies = gameState.enemies.filter(e => e.hp > 0);
  let totalDps = 0;

  for (let i = 0; i < gameState.grid.length; i++) {
    const hero = gameState.grid[i];
    if (!hero) continue;

    totalDps += Math.round(hero.getAtk() * hero.getAttackSpeed());
    hero.updateAnimation(dt, time);
    hero.attackCooldown -= dt;

    if (hero.attackCooldown <= 0 && aliveEnemies.length > 0) {
      let target = null;
      let bestProg = -1;
      const heroPos = gridSlotPositions[i];
      const maxRange = hero.getRange();

      aliveEnemies.forEach(e => {
        const dist = heroPos.distanceTo(e.mesh.position);
        if (dist <= maxRange && e.pathProgress > bestProg) {
          bestProg = e.pathProgress;
          target = e;
        }
      });

      if (target) {
        hero.attackCooldown = 1.0 / hero.getAttackSpeed();
        const dx = target.mesh.position.x - heroPos.x;
        const dz = target.mesh.position.z - heroPos.z;
        hero.mesh.rotation.y = Math.atan2(dx, dz);

        hero.mesh.userData.attackAnimTimer = 1.0;

        const type = hero.config.attackType;
        if (type === "single" || type === "rapid" || type === "pierce" || type === "aoe") {
          audioEngine.playSound(type === "aoe" ? "spear" : "bow");
          gameState.projectiles.push(new Projectile3D(heroPos, target, hero));
        } else if (type === "rapid_spear") {
          audioEngine.playSound("spear");
          applyDamage(target, hero.getAtk());
          spawn3DImpactRing(target.mesh.position, 0x06b6d4, 1.5);
        } else if (type === "slow_aoe") {
          audioEngine.playSound("boss");
          aliveEnemies.forEach(e => {
            if (heroPos.distanceTo(e.mesh.position) <= maxRange) {
              applyDamage(e, hero.getAtk());
              e.slowTimer = 2.5;
              e.slowFactor = 0.45;
              spawn3DImpactRing(e.mesh.position, 0xa855f7, 2.2, true);
            }
          });
        } else if (type === "musou") {
          audioEngine.playSound("lubu");
          triggerScreenShake(0.45, 0.35);
          spawn3DImpactRing(new THREE.Vector3(0, 0, -5), 0xef4444, 11.0, true);
          aliveEnemies.forEach(e => {
            applyDamage(e, hero.getAtk());
            spawn3DImpactRing(e.mesh.position, 0xef4444, 2.0);
          });
          gameState.floatingTexts.push(
            new FloatingText2D(new THREE.Vector3(0, 2, -5), "⚡ 천하무쌍 방천화극!! ⚡", "#ef4444", 20)
          );
        }
      }
    }
  }
  document.getElementById("dps-val").innerText = totalDps;
}

/* ==========================================================================
   12. Wave Engine, Recruitment (Lucky High-Tier) & Active Skill
========================================================================== */
function startNextWave() {
  gameState.waveInProgress = true;
  const cfg = getWaveConfig(gameState.wave);
  document.getElementById("wave-title").innerText = cfg.name;

  if (cfg.isBoss) {
    audioEngine.playSound("boss");
    triggerScreenShake(0.5, 0.4);
    gameState.floatingTexts.push(
      new FloatingText2D(new THREE.Vector3(0, 2, -6), `⚠️ ${cfg.enemyName} 출현! ⚠️`, "#ef4444", 22)
    );
    gameState.enemiesToSpawn = 1;
  } else {
    gameState.enemiesToSpawn = 8 + Math.floor(gameState.wave * 1.5);
  }
  gameState.spawnTimer = 0.2;
}

function updateWave(dt) {
  if (!gameState.waveInProgress) return;
  const cfg = getWaveConfig(gameState.wave);

  if (gameState.enemiesToSpawn > 0) {
    gameState.spawnTimer -= dt;
    if (gameState.spawnTimer <= 0) {
      gameState.spawnTimer = cfg.isBoss ? 1.2 : 0.95;
      gameState.enemies.push(new Enemy(cfg));
      gameState.enemiesToSpawn--;
    }
  }

  gameState.enemies = gameState.enemies.filter(e => {
    if (e.hp <= 0) {
      e.destroy();
      return false;
    }
    const reached = e.update(dt);
    if (reached) {
      const dmg = e.isBoss ? 30 : 10;
      gameState.gateHp = Math.max(0, gameState.gateHp - dmg);
      spawn3DImpactRing(e.mesh.position, 0xff0000, 2.5, true);
      triggerScreenShake(0.35, 0.25);
      audioEngine.playSound("hit");
      e.destroy();
      if (gameState.gateHp <= 0) triggerGameOver();
      return false;
    }
    return true;
  });

  if (gameState.enemiesToSpawn <= 0 && gameState.enemies.length === 0) {
    gameState.waveInProgress = false;
    showStrategyModal();
  }
}

function recruitHero() {
  if (gameState.gold < gameState.recruitCost) return;
  const emptySlots = [];
  gameState.grid.forEach((h, idx) => {
    if (!h) emptySlots.push(idx);
  });

  if (emptySlots.length === 0) {
    gameState.floatingTexts.push(
      new FloatingText2D(new THREE.Vector3(0, 1, 5), "진영이 꽉 찼습니다! (하단 드래그로 해산 가능)", "#ef4444", 15)
    );
    return;
  }

  gameState.gold -= gameState.recruitCost;
  gameState.recruitCost = Math.round(gameState.recruitCost * 1.15);

  const roll = Math.random();
  let spawnedTier = 1;
  if (roll > 0.96) spawnedTier = 3;
  else if (roll > 0.80) spawnedTier = 2;

  const slot = emptySlots[Math.floor(Math.random() * emptySlots.length)];
  const newHero = new Hero(spawnedTier, slot);
  gameState.grid[slot] = newHero;
  recalcSynergies();

  spawn3DImpactRing(newHero.mesh.position, newHero.config.hex, spawnedTier > 1 ? 2.5 : 1.4, spawnedTier === 3);
  if (spawnedTier === 3) {
    audioEngine.playSound("merge");
    gameState.floatingTexts.push(new FloatingText2D(newHero.mesh.position, "🌟 명장 황충 초고속 발탁!!", "#fde047", 17));
  } else if (spawnedTier === 2) {
    audioEngine.playSound("merge");
    gameState.floatingTexts.push(new FloatingText2D(newHero.mesh.position, "⚡ 정예 창병 발탁!", "#60a5fa", 15));
  } else {
    audioEngine.playSound("spear");
  }
}

function upgradeForce() {
  if (gameState.gold < gameState.upgradeCost) return;
  gameState.gold -= gameState.upgradeCost;
  gameState.upgradeLevel++;
  gameState.atkBonusPercent += 15;
  gameState.upgradeCost = Math.round(gameState.upgradeCost * 1.3);
  audioEngine.playSound("merge");
  gameState.floatingTexts.push(
    new FloatingText2D(new THREE.Vector3(0, 2, 4), `⚔️ 전체 무력 강화 Lv.${gameState.upgradeLevel}! (+15%)`, "#fde047", 18)
  );
}

function castRedCliffsFireAttack() {
  if (gameState.skillCooldown > 0 || gameState.paused || gameState.gameOver) return;
  gameState.skillCooldown = 20.0;
  audioEngine.playSound("lubu");
  triggerScreenShake(0.65, 0.55);

  spawn3DImpactRing(new THREE.Vector3(0, 0.2, -6), 0xf97316, 13.0, true);
  const skillDmg = gameState.wave * 135;
  gameState.enemies.forEach(e => {
    if (e.hp > 0) {
      applyDamage(e, skillDmg);
      e.slowTimer = 3.5;
      e.slowFactor = 0.4;
      spawn3DImpactRing(e.mesh.position, 0xef4444, 2.4, true);
    }
  });

  gameState.floatingTexts.push(
    new FloatingText2D(new THREE.Vector3(0, 2.5, -6), "🔥 적벽의 화공이 적진을 불태웁니다!! 🔥", "#fb923c", 20)
  );
}

/* ==========================================================================
   13. Strategy Modal & Controls Binding
========================================================================== */
const STRATEGY_POOL = [
  { name: "도원결의", desc: "전체 장수 공격력 +25% 증가", icon: "🍶", apply: () => gameState.atkBonusPercent += 25 },
  { name: "병량 확보", desc: "적 처치 시 군량미 획득량 +30%", icon: "🌾", apply: () => gameState.goldMultiplier += 0.3 },
  { name: "연노 개량", desc: "전체 장수 공격속도 +20% 증가", icon: "🏹", apply: () => gameState.aspdBonusPercent += 20 },
  { name: "호로관 보수", desc: "관문 내구도 40 즉시 회복", icon: "🏯", apply: () => gameState.gateHp = Math.min(gameState.maxGateHp, gameState.gateHp + 40) },
  { name: "군자금 조달", desc: "즉시 군량미 160🌾 획득", icon: "💰", apply: () => gameState.gold += 160 }
];

function showStrategyModal() {
  gameState.paused = true;
  const container = document.getElementById("strategy-cards");
  container.innerHTML = "";
  const picks = [...STRATEGY_POOL].sort(() => 0.5 - Math.random()).slice(0, 3);

  picks.forEach(card => {
    const el = document.createElement("div");
    el.className = "strategy-card";
    el.innerHTML = `
      <div class="card-icon">${card.icon}</div>
      <div>
        <div class="card-name">${card.name}</div>
        <div class="card-desc">${card.desc}</div>
      </div>
    `;
    el.onclick = () => {
      card.apply();
      audioEngine.playSound("merge");
      document.getElementById("strategy-modal").classList.add("hidden");
      gameState.paused = false;
      gameState.wave++;
      startNextWave();
    };
    container.appendChild(el);
  });
  document.getElementById("strategy-modal").classList.remove("hidden");
}

function triggerGameOver() {
  gameState.gameOver = true;
  gameState.paused = true;
  document.getElementById("final-wave").innerText = getWaveConfig(gameState.wave).name;
  document.getElementById("final-kills").innerText = gameState.kills;
  document.getElementById("gameover-modal").classList.remove("hidden");
}

document.getElementById("recruit-btn").addEventListener("click", recruitHero);
document.getElementById("upgrade-btn").addEventListener("click", upgradeForce);
document.getElementById("skill-btn").addEventListener("click", castRedCliffsFireAttack);
document.getElementById("restart-btn").addEventListener("click", () => location.reload());

document.getElementById("cam-btn").addEventListener("click", () => {
  currentCamIdx = (currentCamIdx + 1) % CAM_PRESETS.length;
  camTargetPos.copy(CAM_PRESETS[currentCamIdx].pos);
  document.getElementById("cam-btn").innerText = CAM_PRESETS[currentCamIdx].name;
});

document.getElementById("sound-btn").addEventListener("click", () => {
  SOUND_CONFIG.enabled = !SOUND_CONFIG.enabled;
  document.getElementById("sound-btn").innerText = SOUND_CONFIG.enabled ? "🔊" : "🔇";
});

function onResize() {
  const w = viewEl.clientWidth;
  const h = viewEl.clientHeight;
  camera.aspect = w / h;
  camera.updateProjectionMatrix();
  renderer.setSize(w, h);
  if (composer) composer.setSize(w, h);
  hudCanvas.width = w;
  hudCanvas.height = h;
}
window.addEventListener("resize", onResize);

/* ==========================================================================
   14. Main Render & Telemetry Loop
========================================================================== */
function draw2DOverlay() {
  hudCtx.clearRect(0, 0, hudCanvas.width, hudCanvas.height);

  gameState.enemies.forEach(e => {
    const headWorld = e.mesh.position.clone().add(new THREE.Vector3(0, e.isBoss ? 2.4 : 1.5, 0));
    const sp = worldToScreen(headWorld);
    const barW = e.isBoss ? 68 : 38;
    const barH = e.isBoss ? 6 : 4;
    const pct = Math.max(0, e.hp / e.maxHp);

    hudCtx.fillStyle = "rgba(0,0,0,0.75)";
    hudCtx.fillRect(sp.x - barW / 2, sp.y - 10, barW, barH);
    hudCtx.fillStyle = pct > 0.5 ? "#22c55e" : (pct > 0.25 ? "#f59e0b" : "#ef4444");
    hudCtx.fillRect(sp.x - barW / 2, sp.y - 10, barW * pct, barH);

    if (e.isBoss) {
      hudCtx.fillStyle = "#fde047";
      hudCtx.font = "800 11px sans-serif";
      hudCtx.textAlign = "center";
      hudCtx.fillText(e.name, sp.x, sp.y - 14);
    }
  });

  gameState.grid.forEach(h => {
    if (!h) return;
    const tagWorld = h.mesh.position.clone().add(new THREE.Vector3(0, 0.1, 0.95));
    const sp = worldToScreen(tagWorld);
    hudCtx.save();
    hudCtx.font = "800 10px sans-serif";
    hudCtx.textAlign = "center";
    hudCtx.fillStyle = "rgba(3, 7, 18, 0.8)";
    hudCtx.fillRect(sp.x - 28, sp.y - 9, 56, 14);
    hudCtx.fillStyle = h.config.color;
    hudCtx.fillText(`T${h.tier} ${h.config.name}`, sp.x, sp.y + 1);
    hudCtx.restore();
  });

  if (gameState.draggedItem) {
    const zoneH = 54;
    const yTop = hudCanvas.height - zoneH;
    hudCtx.save();
    hudCtx.fillStyle = gameState.draggedItem.inSellZone
      ? "rgba(220, 38, 38, 0.85)"
      : "rgba(153, 27, 27, 0.55)";
    hudCtx.fillRect(12, yTop, hudCanvas.width - 24, zoneH - 6);
    hudCtx.strokeStyle = "#fca5a5";
    hudCtx.lineWidth = 2;
    hudCtx.strokeRect(12, yTop, hudCanvas.width - 24, zoneH - 6);

    const refund = Math.max(10, Math.round(gameState.recruitCost * gameState.draggedItem.hero.tier * 0.5));
    hudCtx.fillStyle = "#ffffff";
    hudCtx.font = "800 13px sans-serif";
    hudCtx.textAlign = "center";
    hudCtx.fillText(`🌾 이곳에 드롭하여 장수 해산 (+${refund}🌾 환급)`, hudCanvas.width / 2, yTop + 28);
    hudCtx.restore();
  }

  gameState.floatingTexts.forEach(ft => ft.draw(hudCtx));
}

function updateHUD() {
  document.getElementById("gold-val").innerText = gameState.gold;
  document.getElementById("hp-val").innerText = `${gameState.gateHp}/${gameState.maxGateHp}`;
  document.getElementById("kill-val").innerText = gameState.kills;
  document.getElementById("gate-hp-bar").style.width = `${(gameState.gateHp / gameState.maxGateHp) * 100}%`;

  document.getElementById("recruit-cost").innerText = gameState.recruitCost;
  document.getElementById("upgrade-lvl").innerText = gameState.upgradeLevel;
  document.getElementById("upgrade-cost").innerText = gameState.upgradeCost;

  document.getElementById("recruit-btn").classList.toggle("disabled", gameState.gold < gameState.recruitCost);
  document.getElementById("upgrade-btn").classList.toggle("disabled", gameState.gold < gameState.upgradeCost);

  const skillBtn = document.getElementById("skill-btn");
  const skillCdEl = document.getElementById("skill-cd");
  if (gameState.skillCooldown > 0) {
    skillBtn.classList.add("disabled");
    skillCdEl.innerText = `${Math.ceil(gameState.skillCooldown)}초 대기`;
  } else {
    skillBtn.classList.remove("disabled");
    skillCdEl.innerText = "즉시 발동";
  }
}

let lastTime = performance.now();
function animate(now) {
  const dt = Math.min(0.1, (now - lastTime) / 1000);
  lastTime = now;
  const elapsed = now * 0.001;

  if (!gameState.paused && !gameState.gameOver) {
    if (gameState.skillCooldown > 0) {
      gameState.skillCooldown = Math.max(0, gameState.skillCooldown - dt);
    }
    updateWave(dt);
    updateCombat(dt, elapsed);

    gameState.projectiles.forEach(p => p.update(dt, gameState.enemies));
    gameState.projectiles = gameState.projectiles.filter(p => p.active);

    gameState.effects3D.forEach(fx => {
      fx.life -= dt;
      const progress = 1 - Math.max(0, fx.life / fx.maxLife);
      const s = 1 + progress * fx.maxRadius * 2.2;
      fx.ring.scale.set(s, s, 1);
      fx.ring.material.opacity = Math.max(0, (fx.life / fx.maxLife) * 0.9);
      if (fx.life <= 0) scene.remove(fx.group);
    });
    gameState.effects3D = gameState.effects3D.filter(fx => fx.life > 0);

    gameState.floatingTexts.forEach(ft => ft.update(dt));
    gameState.floatingTexts = gameState.floatingTexts.filter(ft => ft.life > 0);
  }

  camera.position.lerp(camTargetPos, dt * 5.5);
  camera.lookAt(CAM_PRESETS[currentCamIdx].look);
  if (screenShakeTimer > 0) {
    screenShakeTimer -= dt;
    camera.position.x += (Math.random() - 0.5) * screenShakeIntensity;
    camera.position.y += (Math.random() - 0.5) * screenShakeIntensity;
  }

  updateHUD();
  if (composer) composer.render();
  else renderer.render(scene, camera);
  draw2DOverlay();

  requestAnimationFrame(animate);
}

window.addEventListener("load", () => {
  onResize();
  gameState.grid[7] = new Hero(1, 7);
  gameState.grid[12] = new Hero(1, 12);
  recalcSynergies();
  startNextWave();
  requestAnimationFrame(animate);
});
