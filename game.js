// ============================================================================
// 삼국지 3D 택티컬 머지 디펜스 - 100% Argon Zero-Asset & Zero-Voice Engine
// ============================================================================

const FACTION_META = {
  shu: { name: '촉', hanja: '蜀', color: '#10B981', hex: 0x10B981 },
  wei: { name: '위', hanja: '魏', color: '#3B82F6', hex: 0x3B82F6 },
  wu:  { name: '오', hanja: '吳', color: '#F97316', hex: 0xF97316 },
  qun: { name: '군웅', hanja: '群', color: '#EF4444', hex: 0xEF4444 }
};

// 4세력 × 7티어 = 28인 정예 매트릭스 (성우 없음, 사자성어 낙관 내장)
const HERO_DB = [
  // Tier 1
  { id: 'shu_1', tier: 1, faction: 'shu', name: '백이병', hanja: '白', weapon: 'spear', atk: 24, spd: 1.0, range: 8.5, stamp: '百毦精兵', desc: '유비 친위 장창병' },
  { id: 'wei_1', tier: 1, faction: 'wei', name: '청주병', hanja: '青', weapon: 'spear', atk: 26, spd: 0.95, range: 8.5, stamp: '青州強兵', desc: '조조 직속 정예병' },
  { id: 'wu_1',  tier: 1, faction: 'wu',  name: '강동수군', hanja: '水', weapon: 'bow',   atk: 22, spd: 1.1, range: 9.5, stamp: '江東水軍', desc: '장강의 화살 사수' },
  { id: 'qun_1', tier: 1, faction: 'qun', name: '황건병', hanja: '黃', weapon: 'mace',  atk: 28, spd: 0.9, range: 8.0, stamp: '蒼天已死', desc: '태평도 선봉대' },
  // Tier 2
  { id: 'shu_2', tier: 2, faction: 'shu', name: '관평', hanja: '平', weapon: 'glaive', atk: 55, spd: 1.05, range: 9.0, stamp: '忠義少將', desc: '관우의 양자·청룡의 후예' },
  { id: 'wei_2', tier: 2, faction: 'wei', name: '악진', hanja: '樂', weapon: 'sword',  atk: 58, spd: 1.0, range: 9.0, stamp: '先登陷陣', desc: '위나라 선등 대장' },
  { id: 'wu_2',  tier: 2, faction: 'wu',  name: '주태', hanja: '泰', weapon: 'sword',  atk: 54, spd: 1.15, range: 8.5, stamp: '全身刀痕', desc: '손권을 지킨 강철 방패' },
  { id: 'qun_2', tier: 2, faction: 'qun', name: '화웅', hanja: '華', weapon: 'axe',    atk: 65, spd: 0.9, range: 8.5, stamp: '汜水猛將', desc: '사수관의 거대 도끼장군' },
  // Tier 3
  { id: 'shu_3', tier: 3, faction: 'shu', name: '황충', hanja: '黃', weapon: 'bow',    atk: 120, spd: 1.2, range: 11.5, stamp: '百步穿楊', desc: '백보천양 신궁 노장' },
  { id: 'wei_3', tier: 3, faction: 'wei', name: '서황', hanja: '徐', weapon: 'axe',    atk: 135, spd: 1.0, range: 9.5, stamp: '周亞夫風', desc: '대부 개산부를 휘두르는 명장' },
  { id: 'wu_3',  tier: 3, faction: 'wu',  name: '감녕', hanja: '甘', weapon: 'mace',   atk: 125, spd: 1.25, range: 9.5, stamp: '錦帆遊俠', desc: '방울 소리의 금범적 두령' },
  { id: 'qun_3', tier: 3, faction: 'qun', name: '초선', hanja: '貂', weapon: 'fan',    atk: 115, spd: 1.35, range: 10.5, stamp: '閉月連環', desc: '달을 가리는 연환계의 무희', female: true },
  // Tier 4
  { id: 'shu_4', tier: 4, faction: 'shu', name: '조운', hanja: '趙', weapon: 'spear',  atk: 260, spd: 1.35, range: 10.5, stamp: '一身是膽', desc: '장판파의 백마 은창 상산 조자룡', mount: 'white' },
  { id: 'wei_4', tier: 4, faction: 'wei', name: '하후돈', hanja: '夏', weapon: 'sword', atk: 285, spd: 1.15, range: 10.0, stamp: '拔矢啖睛', desc: '화살 박힌 눈을 삼킨 맹장', eyepatch: true },
  { id: 'wu_4',  tier: 4, faction: 'wu',  name: '손상향', hanja: '香', weapon: 'bow',   atk: 250, spd: 1.4, range: 11.5, stamp: '弓腰姬君', desc: '강동의 호걸 궁요희', female: true },
  { id: 'qun_4', tier: 4, faction: 'qun', name: '맹획', hanja: '孟', weapon: 'mace',   atk: 310, spd: 1.0, range: 9.5, stamp: '南蠻獸王', desc: '전투 코끼리를 탄 남만왕', mount: 'elephant' },
  // Tier 5
  { id: 'shu_5', tier: 5, faction: 'shu', name: '장비', hanja: '張', weapon: 'snake',  atk: 560, spd: 1.3, range: 10.5, stamp: '萬夫不當', desc: '장판교의 포효·장팔사모', beard: 'wild' },
  { id: 'wei_5', tier: 5, faction: 'wei', name: '장료', hanja: '遼', weapon: 'glaive', atk: 590, spd: 1.25, range: 11.0, stamp: '威震逍遙', desc: '합비에서 손권을떤 오자양장 필두' },
  { id: 'wu_5',  tier: 5, faction: 'wu',  name: '육손', hanja: '陸', weapon: 'dual',   atk: 540, spd: 1.45, range: 11.0, stamp: '火燒連營', desc: '이릉 대첩 화공의 대도독' },
  { id: 'qun_5', tier: 5, faction: 'qun', name: '장각', hanja: '角', weapon: 'staff',  atk: 620, spd: 1.15, range: 12.0, stamp: '黃天當立', desc: '태평요술의 천공장군' },
  // Tier 6
  { id: 'shu_6', tier: 6, faction: 'shu', name: '관우', hanja: '關', weapon: 'glaive', atk: 1250, spd: 1.35, range: 11.5, stamp: '義薄雲天', desc: '청룡언월도와 적토마의 무성(武聖)', redFace: true, beard: 'long', mount: 'red' },
  { id: 'wei_6', tier: 6, faction: 'wei', name: '사마의', hanja: '司', weapon: 'fan',  atk: 1320, spd: 1.3, range: 12.5, stamp: '塚虎奇謀', desc: '중달의 심연 계략과 낙뢰' },
  { id: 'wu_6',  tier: 6, faction: 'wu',  name: '주유', hanja: '周', weapon: 'fan',    atk: 1200, spd: 1.5, range: 12.0, stamp: '赤壁業火', desc: '적벽을 불태운 미주랑' },
  { id: 'qun_6', tier: 6, faction: 'qun', name: '동탁', hanja: '董', weapon: 'mace',   atk: 1400, spd: 1.15, range: 10.5, stamp: '暴虐魔王', desc: '낙양을 집어삼킨 폭군', mount: 'black' },
  // Tier 7 (신화)
  { id: 'shu_7', tier: 7, faction: 'shu', name: '제갈량', hanja: '諸', weapon: 'fan',  atk: 2900, spd: 1.6, range: 13.5, stamp: '臥龍出世', desc: '팔진도 천뢰를 부르는 와룡 승상', halo: true },
  { id: 'wei_7', tier: 7, faction: 'wei', name: '무제 조조', hanja: '曹', weapon: 'sword', atk: 3100, spd: 1.5, range: 13.0, stamp: '唯才是擧', desc: '천하를 호령하는 난세의 간웅', mount: 'black', halo: true },
  { id: 'wu_7',  tier: 7, faction: 'wu',  name: '대제 손권', hanja: '孫', weapon: 'sword', atk: 2850, spd: 1.7, range: 13.0, stamp: '江東猛虎', desc: '벽안자염의 오나라 황제', halo: true },
  { id: 'qun_7', tier: 7, faction: 'qun', name: '무신 여포', hanja: '呂', weapon: 'halberd', atk: 3600, spd: 1.65, range: 13.0, stamp: '天下無雙', desc: '적토마와 방천화극의 인중여포', mount: 'red', plumes: true, halo: true }
];

const STRATEGY_CARDS = [
  { id: 'oat', title: '🍑 도원결의', desc: '전체 장수 공격속도 영구 +20% 상승', apply: (s) => { s.buffSpd *= 1.2; } },
  { id: 'sup', title: '🌾 군량 징발', desc: '즉시 군량미 +220 획득 및 호로관 체력 30 회복', apply: (s) => { s.gold += 220; s.hp = Math.min(s.maxHp, s.hp + 30); } },
  { id: 'bow', title: '🏹 제갈연노 개량', desc: '전체 장수 공격력 +25% 및 사거리 +1.5m', apply: (s) => { s.buffAtk *= 1.25; s.buffRange += 1.5; } },
  { id: 'crt', title: '⚡ 패왕의 기세', desc: '치명타 확률 +15% 영구 증가', apply: (s) => { s.buffCrit += 0.15; } },
  { id: 'rec', title: '📜 구품관인법', desc: '장수 모집 시 2~3티어 등장 확률 2배 증가', apply: (s) => { s.highRecruitBonus += 0.12; } }
];

// ============================================================================
// 1. 순수 수식 기반 국악·전장 타악 신디사이저 (Zero-Voice / Pure Web Audio)
// ============================================================================
class BattlefieldAudioEngine {
  constructor() {
    this.ctx = null;
    this.enabled = true;
    this.bgmTimer = 0;
    this.pentatonic = [261.63, 293.66, 329.63, 392.00, 440.00, 523.25];
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

  // 전장 대북 (War Drum: 65Hz -> 24Hz 지수 감쇠 + 로우패스 타격 노이즈)
  playWarDrum() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;
    const now = this.ctx.currentTime;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(68, now);
    osc.frequency.exponentialRampToValueAtTime(24, now + 0.28);
    gain.gain.setValueAtTime(0.55, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.32);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start(now);
    osc.stop(now + 0.33);
  }

  // 전장 청동 징 (Battle Gong: 비정수 금속 배음 4중 합성)
  playGong() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;
    const now = this.ctx.currentTime;
    const ratios = [210, 296.1, 405.3, 560.7];
    ratios.forEach((freq, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = idx % 2 === 0 ? 'triangle' : 'sine';
      osc.frequency.setValueAtTime(freq, now);
      gain.gain.setValueAtTime(0.18 / (idx + 1), now);
      gain.gain.exponentialRampToValueAtTime(0.0008, now + 1.4);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 1.45);
    });
  }

  // 동양 5음계(궁상각치우) 현악 탄현음
  playGuqinNote(freq) {
    if (!this.enabled || !this.ctx) return;
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(freq * 0.98, now);
    osc.frequency.linearRampToValueAtTime(freq, now + 0.04);
    gain.gain.setValueAtTime(0.08, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.55);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start(now);
    osc.stop(now + 0.56);
  }

  // 창검 타격음
  playBladeSlash() {
    if (!this.enabled || !this.ctx) return;
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(520, now);
    osc.frequency.exponentialRampToValueAtTime(140, now + 0.07);
    gain.gain.setValueAtTime(0.09, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start(now);
    osc.stop(now + 0.085);
  }

  // 화공/벽력거 대폭발음
  playCatapultBoom() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;
    this.playWarDrum();
    this.playGong();
  }

  updateBgm(dt) {
    if (!this.enabled || !this.ctx) return;
    this.bgmTimer += dt;
    if (this.bgmTimer >= 0.65) {
      this.bgmTimer = 0;
      const note = this.pentatonic[Math.floor(Math.random() * this.pentatonic.length)];
      this.playGuqinNote(note);
    }
  }
}

const sound = new BattlefieldAudioEngine();

// ============================================================================
// 2. 무쌍 한자 사자성어 낙관(Stamp) 연출기
// ============================================================================
let stampTimeout = null;
function triggerHanjaStamp(hanja4, subtitle) {
  const overlay = document.getElementById('hanja-stamp-overlay');
  const hanjaEl = document.getElementById('stamp-hanja');
  const subEl = document.getElementById('stamp-sub');
  if (!overlay || !hanjaEl || !subEl) return;

  hanjaEl.textContent = hanja4;
  subEl.textContent = subtitle;
  overlay.classList.remove('stamp-hidden');
  sound.playWarDrum();
  sound.playGong();
  gameState.screenShake = 0.45;

  if (stampTimeout) clearTimeout(stampTimeout);
  stampTimeout = setTimeout(() => {
    overlay.classList.add('stamp-hidden');
  }, 1500);
}

// ============================================================================
// 3. 게임 상태 및 Safe localStorage 연동
// ============================================================================
const SAVE_KEY = 'TK_ARGON_SAVE_V4';

const gameState = {
  gold: 120,
  hp: 100,
  maxHp: 100,
  wave: 1,
  kills: 0,
  recruitCost: 20,
  upgradeLvl: 1,
  upgradeCost: 35,
  buffAtk: 1.0,
  buffSpd: 1.0,
  buffRange: 0,
  buffCrit: 0.12,
  highRecruitBonus: 0,
  skillCd: 0,
  gameSpeed: 1,
  camMode: 0,
  screenShake: 0,
  siegeLeftLv: 0,
  siegeRightLv: 0,
  siegeLeftTimer: 0,
  siegeRightTimer: 0,
  supplyCartTimer: 0,
  unlockedIds: ['shu_1', 'wei_1', 'wu_1', 'qun_1'],
  grid: new Array(20).fill(null),
  enemies: [],
  projectiles: [],
  floatingTexts: [],
  supplyCart: null,
  draggedIndex: -1,
  dragWorldPos: new THREE.Vector3(),
  selectedIndex: -1,
  spawnTimer: 0,
  waveRemaining: 10,
  isGameOver: false
};

function saveGameSafe() {
  try {
    const payload = {
      gold: gameState.gold,
      wave: gameState.wave,
      kills: gameState.kills,
      recruitCost: gameState.recruitCost,
      upgradeLvl: gameState.upgradeLvl,
      upgradeCost: gameState.upgradeCost,
      siegeLeftLv: gameState.siegeLeftLv,
      siegeRightLv: gameState.siegeRightLv,
      unlockedIds: gameState.unlockedIds,
      gridIds: gameState.grid.map(h => h ? h.data.id : null)
    };
    localStorage.setItem(SAVE_KEY, JSON.stringify(payload));
  } catch (e) {
    // 저장소 에러 무시
  }
}

function loadGameSafe() {
  try {
    const raw = localStorage.getItem(SAVE_KEY);
    if (!raw) return false;
    const data = JSON.parse(raw);
    if (!data || !Array.isArray(data.unlockedIds)) return false;
    gameState.gold = Number(data.gold) || 120;
    gameState.wave = Number(data.wave) || 1;
    gameState.kills = Number(data.kills) || 0;
    gameState.recruitCost = Number(data.recruitCost) || 20;
    gameState.upgradeLvl = Number(data.upgradeLvl) || 1;
    gameState.upgradeCost = Number(data.upgradeCost) || 35;
    gameState.siegeLeftLv = Number(data.siegeLeftLv) || 0;
    gameState.siegeRightLv = Number(data.siegeRightLv) || 0;
    gameState.unlockedIds = data.unlockedIds;
    gameState.waveRemaining = 8 + gameState.wave * 3;
    return data.gridIds || null;
  } catch (e) {
    localStorage.removeItem(SAVE_KEY);
    return false;
  }
}

// ============================================================================
// 4. Three.js 3D 렌더러 + 절차적 한자 등깃발 캐시 + 3D 조형
// ============================================================================
let scene, camera, renderer, composer;
let gridTiles3D = [];
let siegeLeftMesh = null, siegeRightMesh = null;
const bannerTextureCache = {};

const CAM_PRESETS = [
  { pos: new THREE.Vector3(0, 27, 25), look: new THREE.Vector3(0, 0, 1) },
  { pos: new THREE.Vector3(0, 40, 0.1), look: new THREE.Vector3(0, 0, 0) },
  { pos: new THREE.Vector3(0, 8, 16), look: new THREE.Vector3(0, 1, -10) }
];

// 절차적 한자 군기 텍스처 생성 (캐싱)
function getHeroBannerTexture(heroData) {
  if (bannerTextureCache[heroData.id]) return bannerTextureCache[heroData.id];
  const c = document.createElement('canvas');
  c.width = 128;
  c.height = 256;
  const ctx = c.getContext('2d');
  const fMeta = FACTION_META[heroData.faction];

  ctx.fillStyle = fMeta.color;
  ctx.fillRect(0, 0, 128, 256);
  ctx.strokeStyle = '#fbbf24';
  ctx.lineWidth = 8;
  ctx.strokeRect(6, 6, 116, 244);

  ctx.fillStyle = '#fef08a';
  ctx.font = 'bold 28px serif';
  ctx.textAlign = 'center';
  ctx.fillText(`[${fMeta.hanja}]`, 64, 42);

  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 92px serif';
  ctx.fillText(heroData.hanja, 64, 148);

  ctx.fillStyle = '#fde68a';
  ctx.font = 'bold 24px sans-serif';
  ctx.fillText(heroData.name, 64, 215);

  const tex = new THREE.CanvasTexture(c);
  bannerTextureCache[heroData.id] = tex;
  return tex;
}

// 3D 장수 입체 조립
function buildHeroCharacter3D(heroData) {
  const root = new THREE.Group();
  const fMeta = FACTION_META[heroData.faction];

  // 1. 팔각 제단 받침대 & 마법진
  const baseMat = new THREE.MeshStandardMaterial({ color: 0x1e293b, metalness: 0.8, roughness: 0.25 });
  const base = new THREE.Mesh(new THREE.CylinderGeometry(0.95, 1.1, 0.3, 8), baseMat);
  base.position.y = 0.15;
  root.add(base);

  const ringMat = new THREE.MeshBasicMaterial({ color: fMeta.hex, side: THREE.DoubleSide });
  const auraRing = new THREE.Mesh(new THREE.RingGeometry(0.85, 1.05, 16), ringMat);
  auraRing.rotation.x = -Math.PI / 2;
  auraRing.position.y = 0.32;
  root.add(auraRing);
  root.userData.auraRing = auraRing;

  let yOffset = 0.3;

  // 2. 탈것 (적토마, 백마, 흑마, 남만 코끼리)
  if (heroData.mount) {
    const mountColor = heroData.mount === 'red' ? 0xb91c1c : heroData.mount === 'white' ? 0xf8fafc : heroData.mount === 'elephant' ? 0x64748b : 0x1e293b;
    const mMat = new THREE.MeshStandardMaterial({ color: mountColor, roughness: 0.5 });
    const body = new THREE.Mesh(new THREE.BoxGeometry(0.8, 0.65, 1.25), mMat);
    body.position.set(0, 0.65, 0);
    root.add(body);
    if (heroData.mount === 'elephant') {
      const tuskMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
      const t1 = new THREE.Mesh(new THREE.ConeGeometry(0.08, 0.6, 6), tuskMat);
      t1.rotation.x = Math.PI / 3;
      t1.position.set(-0.22, 0.7, 0.75);
      const t2 = t1.clone();
      t2.position.x = 0.22;
      root.add(t1, t2);
    }
    yOffset = 0.95;
  }

  // 3. 몸통 갑주 & 머리
  const armorMat = new THREE.MeshStandardMaterial({ color: fMeta.hex, metalness: 0.6, roughness: 0.3 });
  const torso = new THREE.Mesh(new THREE.CylinderGeometry(0.38, 0.46, 0.9, 8), armorMat);
  torso.position.y = yOffset + 0.45;
  root.add(torso);

  const faceColor = heroData.redFace ? 0xdc2626 : 0xfde68a;
  const head = new THREE.Mesh(new THREE.SphereGeometry(0.32, 12, 12), new THREE.MeshStandardMaterial({ color: faceColor }));
  head.position.y = yOffset + 1.15;
  root.add(head);

  // 수염 / 여포 꿩깃 / 신화 후광
  if (heroData.beard === 'long') {
    const beard = new THREE.Mesh(new THREE.ConeGeometry(0.18, 0.65, 6), new THREE.MeshBasicMaterial({ color: 0x0f172a }));
    beard.rotation.x = Math.PI;
    beard.position.set(0, yOffset + 0.85, 0.26);
    root.add(beard);
  }
  if (heroData.plumes) {
    const pMat = new THREE.MeshBasicMaterial({ color: 0xef4444 });
    const p1 = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.01, 1.2), pMat);
    p1.position.set(-0.18, yOffset + 1.8, -0.15);
    p1.rotation.z = 0.3;
    const p2 = p1.clone();
    p2.position.x = 0.18;
    p2.rotation.z = -0.3;
    root.add(p1, p2);
  }
  if (heroData.halo) {
    const halo = new THREE.Mesh(new THREE.TorusGeometry(0.65, 0.05, 8, 24), new THREE.MeshBasicMaterial({ color: 0xfbbf24 }));
    halo.position.set(0, yOffset + 1.2, -0.25);
    root.add(halo);
    root.userData.halo = halo;
  }

  // 4. 오른팔 무기 피벗
  const armPivot = new THREE.Group();
  armPivot.position.set(0.5, yOffset + 0.7, 0);
  const wMat = new THREE.MeshStandardMaterial({ color: 0xfbbf24, metalness: 0.9, roughness: 0.15, emissive: fMeta.hex, emissiveIntensity: 0.35 });
  const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 1.7, 6), wMat);
  pole.position.y = 0.4;
  armPivot.add(pole);
  const blade = new THREE.Mesh(new THREE.ConeGeometry(0.22, 0.65, 4), wMat);
  blade.position.y = 1.35;
  armPivot.add(blade);
  root.add(armPivot);
  root.userData.armPivot = armPivot;

  // 5. 등 뒤 한자 군기 (CanvasTexture)
  const flagPole = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 2.3, 6), new THREE.MeshBasicMaterial({ color: 0xfbbf24 }));
  flagPole.position.set(-0.35, yOffset + 1.1, -0.35);
  root.add(flagPole);

  const bannerTex = getHeroBannerTexture(heroData);
  const bannerMesh = new THREE.Mesh(
    new THREE.PlaneGeometry(0.85, 1.5),
    new THREE.MeshBasicMaterial({ map: bannerTex, side: THREE.DoubleSide })
  );
  bannerMesh.position.set(-0.35, yOffset + 1.65, -0.42);
  root.add(bannerMesh);

  return root;
}

// 성루 3D 공성 병기 조립 (좌성루 제갈연노 / 우성루 벽력거)
function buildSiegeWeapons3D() {
  // 좌성루 제갈연노
  siegeLeftMesh = new THREE.Group();
  siegeLeftMesh.position.set(-8.2, 2.2, -1.2);
  const baseL = new THREE.Mesh(new THREE.BoxGeometry(1.8, 0.8, 1.8), new THREE.MeshStandardMaterial({ color: 0x334155 }));
  const bowArc = new THREE.Mesh(new THREE.TorusGeometry(0.9, 0.08, 6, 16, Math.PI), new THREE.MeshBasicMaterial({ color: 0x38bdf8 }));
  bowArc.rotation.x = Math.PI / 2;
  bowArc.position.y = 0.6;
  siegeLeftMesh.add(baseL, bowArc);
  siegeLeftMesh.visible = gameState.siegeLeftLv > 0;
  scene.add(siegeLeftMesh);

  // 우성루 벽력거 (투석기)
  siegeRightMesh = new THREE.Group();
  siegeRightMesh.position.set(8.2, 2.2, -1.2);
  const baseR = new THREE.Mesh(new THREE.BoxGeometry(1.8, 0.8, 1.8), new THREE.MeshStandardMaterial({ color: 0x475569 }));
  const arm = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.1, 2.2), new THREE.MeshBasicMaterial({ color: 0xf97316 }));
  arm.position.y = 1.0;
  arm.rotation.x = -0.5;
  siegeRightMesh.add(baseR, arm);
  siegeRightMesh.userData.arm = arm;
  siegeRightMesh.visible = gameState.siegeRightLv > 0;
  scene.add(siegeRightMesh);
}

// S자 적 진격 경로 좌표
const ENEMY_PATH = [
  new THREE.Vector3(-8, 0, -13),
  new THREE.Vector3(8, 0, -10),
  new THREE.Vector3(-8, 0, -6.5),
  new THREE.Vector3(8, 0, -3.5),
  new THREE.Vector3(0, 0, -1.2)
];

function initThreeScene() {
  const container = document.getElementById('webgl-container');
  const w = container.clientWidth || 420;
  const h = container.clientHeight || 680;

  scene = new THREE.Scene();
  scene.background = new THREE.Color(0x040812);
  scene.fog = new THREE.FogExp2(0x040812, 0.015);

  camera = new THREE.PerspectiveCamera(45, w / h, 0.1, 200);
  camera.position.copy(CAM_PRESETS[0].pos);
  camera.lookAt(CAM_PRESETS[0].look);

  renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
  renderer.setSize(w, h);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  container.innerHTML = '';
  container.appendChild(renderer.domElement);

  // UnrealBloomPass 안전 초기화 (실패 시 기본 렌더러 폴백)
  try {
    composer = new THREE.EffectComposer(renderer);
    composer.addPass(new THREE.RenderPass(scene, camera));
    const bloom = new THREE.UnrealBloomPass(new THREE.Vector2(w, h), 0.95, 0.35, 0.25);
    composer.addPass(bloom);
  } catch (e) {
    composer = null;
  }

  scene.add(new THREE.AmbientLight(0xffffff, 0.85));
  const dirLight = new THREE.DirectionalLight(0xfef08a, 1.2);
  dirLight.position.set(12, 25, 18);
  scene.add(dirLight);

  // 호로관 성벽 및 에너지 방어선
  const wall = new THREE.Mesh(
    new THREE.BoxGeometry(20, 2.0, 1.0),
    new THREE.MeshStandardMaterial({ color: 0x1e293b, metalness: 0.7, roughness: 0.3 })
  );
  wall.position.set(0, 1.0, -1.2);
  scene.add(wall);

  const laserLine = new THREE.Mesh(
    new THREE.BoxGeometry(20, 0.12, 0.12),
    new THREE.MeshBasicMaterial({ color: 0x38bdf8 })
  );
  laserLine.position.set(0, 2.05, -1.2);
  scene.add(laserLine);

  // 적 이동 경로 라인 표시
  const pathGeo = new THREE.BufferGeometry().setFromPoints(ENEMY_PATH);
  const pathLine = new THREE.Line(pathGeo, new THREE.LineBasicMaterial({ color: 0xef4444 }));
  pathLine.position.y = 0.15;
  scene.add(pathLine);

  // 하단 5x4 전술 그리드 타일 생성
  gridTiles3D = [];
  const startX = -5.6, startZ = 1.6, gapX = 2.8, gapZ = 2.8;
  for (let row = 0; row < 4; row++) {
    for (let col = 0; col < 5; col++) {
      const idx = row * 5 + col;
      const tileMat = new THREE.MeshStandardMaterial({
        color: (row + col) % 2 === 0 ? 0x0f172a : 0x1e293b,
        metalness: 0.5,
        roughness: 0.4
      });
      const tile = new THREE.Mesh(new THREE.BoxGeometry(2.45, 0.25, 2.45), tileMat);
      tile.position.set(startX + col * gapX, 0, startZ + row * gapZ);
      tile.userData.gridIndex = idx;
      scene.add(tile);
      gridTiles3D.push(tile);
    }
  }

  buildSiegeWeapons3D();
}

// ============================================================================
// 5. 핵심 게임플레이 로직 (모집, 세력 계승 합성, 해산, 공성 병기, 목우유마)
// ============================================================================
function spawnHeroAtGrid(idx, heroData) {
  if (gameState.grid[idx] && gameState.grid[idx].mesh) {
    scene.remove(gameState.grid[idx].mesh);
  }
  const mesh = buildHeroCharacter3D(heroData);
  mesh.position.copy(gridTiles3D[idx].position);
  scene.add(mesh);

  gameState.grid[idx] = {
    data: heroData,
    mesh,
    cooldown: 0
  };

  if (!gameState.unlockedIds.includes(heroData.id)) {
    gameState.unlockedIds.push(heroData.id);
    addFloatingText(`📖 신장 해금: ${heroData.name}!`, gridTiles3D[idx].position, '#fbbf24');
  }
  updateSynergyAndHUD();
  saveGameSafe();
}

function getHeroByFactionAndTier(faction, tier) {
  return HERO_DB.find(h => h.faction === faction && h.tier === tier) || HERO_DB[0];
}

function recruitHero() {
  sound.init();
  if (gameState.gold < gameState.recruitCost) return;
  const emptyIndices = [];
  gameState.grid.forEach((cell, i) => { if (!cell) emptyIndices.push(i); });
  if (emptyIndices.length === 0) {
    addFloatingText('진영 포화! 장수를 합치거나 하단으로 해산하세요', new THREE.Vector3(0, 2, 6), '#f87171');
    return;
  }

  gameState.gold -= gameState.recruitCost;
  gameState.recruitCost = Math.floor(gameState.recruitCost * 1.12) + 2;

  const targetIdx = emptyIndices[Math.floor(Math.random() * emptyIndices.length)];
  const factions = ['shu', 'wei', 'wu', 'qun'];
  const f = factions[Math.floor(Math.random() * factions.length)];

  const roll = Math.random();
  let tier = 1;
  if (roll < 0.03 + gameState.highRecruitBonus * 0.3) tier = 3;
  else if (roll < 0.18 + gameState.highRecruitBonus) tier = 2;

  const heroData = getHeroByFactionAndTier(f, tier);
  spawnHeroAtGrid(targetIdx, heroData);
  sound.playWarDrum();

  if (tier >= 2) {
    addFloatingText(`⚡ ${heroData.name} 초고속 발탁!`, gridTiles3D[targetIdx].position, '#38bdf8');
  }
}

// 세력 계승 합성 (동일 세력 = 100% 계승, 타 세력 = 50:50)
function tryMergeOrMove(fromIdx, toIdx) {
  if (fromIdx === toIdx || fromIdx < 0 || toIdx < 0) return;
  const src = gameState.grid[fromIdx];
  const dst = gameState.grid[toIdx];
  if (!src) return;

  if (!dst) {
    // 빈 칸으로 이동
    src.mesh.position.copy(gridTiles3D[toIdx].position);
    gameState.grid[toIdx] = src;
    gameState.grid[fromIdx] = null;
    updateSynergyAndHUD();
    saveGameSafe();
    return;
  }

  if (src.data.tier === dst.data.tier && src.data.tier < 7) {
    const nextTier = src.data.tier + 1;
    let nextFaction = src.data.faction;
    if (src.data.faction !== dst.data.faction) {
      nextFaction = Math.random() < 0.5 ? src.data.faction : dst.data.faction;
    }
    const nextHero = getHeroByFactionAndTier(nextFaction, nextTier);

    scene.remove(src.mesh);
    scene.remove(dst.mesh);
    gameState.grid[fromIdx] = null;
    spawnHeroAtGrid(toIdx, nextHero);

    addFloatingText(`✨ ${nextHero.name} [T${nextTier}] 승급!`, gridTiles3D[toIdx].position, '#fde047');
    if (nextTier >= 4) {
      triggerHanjaStamp(nextHero.stamp, `${nextHero.name} [Tier ${nextTier}] 출진!`);
    } else {
      sound.playGong();
    }
  } else {
    // 위치 스왑
    src.mesh.position.copy(gridTiles3D[toIdx].position);
    dst.mesh.position.copy(gridTiles3D[fromIdx].position);
    gameState.grid[toIdx] = src;
    gameState.grid[fromIdx] = dst;
    updateSynergyAndHUD();
    saveGameSafe();
  }
}

function dismissHero(idx) {
  const h = gameState.grid[idx];
  if (!h) return;
  const refund = Math.floor(gameState.recruitCost * h.data.tier * 0.5);
  gameState.gold += refund;
  addFloatingText(`+${refund}🌾 환급`, h.mesh.position, '#34d399');
  scene.remove(h.mesh);
  gameState.grid[idx] = null;
  sound.playWarDrum();
  updateSynergyAndHUD();
  saveGameSafe();
}

// 적군 스폰
function spawnEnemy(isBoss = false) {
  const hpBase = (45 + Math.pow(gameState.wave, 1.55) * 35) * (isBoss ? 6.5 : 1);
  const group = new THREE.Group();
  const color = isBoss ? 0xdc2626 : 0xa855f7;
  const scale = isBoss ? 1.7 : 1.0;

  const body = new THREE.Mesh(
    new THREE.CylinderGeometry(0.42 * scale, 0.5 * scale, 1.1 * scale, 8),
    new THREE.MeshStandardMaterial({ color, roughness: 0.4 })
  );
  body.position.y = 0.6 * scale;
  group.add(body);

  group.position.copy(ENEMY_PATH[0]);
  scene.add(group);

  gameState.enemies.push({
    mesh: group,
    hp: hpBase,
    maxHp: hpBase,
    speed: isBoss ? 2.1 : 3.2 + Math.min(2.0, gameState.wave * 0.08),
    wpIndex: 1,
    isBoss,
    burnTimer: 0,
    burnDps: 0
  });

  if (isBoss) {
    triggerHanjaStamp('敵將來襲', `제${gameState.wave}장 거대 보스 출현!`);
  }
}

// 황금 목우유마 보급 수레 스폰
function spawnSupplyCart() {
  if (gameState.supplyCart) scene.remove(gameState.supplyCart.mesh);
  const g = new THREE.Group();
  const box = new THREE.Mesh(
    new THREE.BoxGeometry(1.3, 0.9, 1.6),
    new THREE.MeshStandardMaterial({ color: 0xfbbf24, metalness: 0.85, roughness: 0.15 })
  );
  box.position.y = 0.6;
  g.add(box);
  g.position.set(-9.5, 0, -0.2);
  scene.add(g);
  gameState.supplyCart = { mesh: g, hp: 1 };
  addFloatingText('🐂 황금 목우유마 출현! (터치 시 군량미 획득)', new THREE.Vector3(0, 2.5, -1), '#fbbf24');
}

function addFloatingText(text, worldPos, color = '#ffffff') {
  gameState.floatingTexts.push({
    text,
    pos: worldPos.clone(),
    color,
    life: 1.0
  });
}

// 세력 시너지 및 HUD 계산
function getActiveSynergies() {
  const counts = { shu: 0, wei: 0, wu: 0, qun: 0 };
  gameState.grid.forEach(cell => {
    if (cell) counts[cell.data.faction]++;
  });
  return {
    counts,
    shuMult: counts.shu >= 3 ? 1.3 : 1.0,
    weiMult: counts.wei >= 3 ? 1.25 : 1.0,
    wuBurn: counts.wu >= 3,
    qunCrit: counts.qun >= 3 ? 0.22 : 0
  };
}

function updateSynergyAndHUD() {
  const syn = getActiveSynergies();
  const codexBonus = gameState.unlockedIds.length * 2;

  document.getElementById('gold-val').textContent = Math.floor(gameState.gold);
  document.getElementById('hp-val').textContent = `${Math.max(0, Math.floor(gameState.hp))}/${gameState.maxHp}`;
  document.getElementById('kill-val').textContent = gameState.kills;
  document.getElementById('bonus-val').textContent = `+${codexBonus}%`;
  document.getElementById('wave-title').textContent = `제${gameState.wave}장 호로관 방어전`;
  document.getElementById('recruit-cost').textContent = gameState.recruitCost;
  document.getElementById('upgrade-lvl').textContent = gameState.upgradeLvl;
  document.getElementById('upgrade-cost').textContent = gameState.upgradeCost;
  document.getElementById('gate-hp-bar').style.width = `${Math.max(0, (gameState.hp / gameState.maxHp) * 100)}%`;

  const setBadge = (id, label, cnt) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.textContent = `${label} ${cnt}/3`;
    el.classList.toggle('active', cnt >= 3);
  };
  setBadge('syn-shu', '🟢 촉(공속)', syn.counts.shu);
  setBadge('syn-wei', '🔵 위(화력)', syn.counts.wei);
  setBadge('syn-wu',  '🔴 오(화염)', syn.counts.wu);
  setBadge('syn-qun', '🟣 군웅(치명)', syn.counts.qun);

  document.getElementById('siege-l-lv').textContent = gameState.siegeLeftLv > 0 ? `Lv.${gameState.siegeLeftLv} (${80 + gameState.siegeLeftLv * 60}🌾)` : '건설(80🌾)';
  document.getElementById('siege-r-lv').textContent = gameState.siegeRightLv > 0 ? `Lv.${gameState.siegeRightLv} (${100 + gameState.siegeRightLv * 75}🌾)` : '건설(100🌾)';
}

// ============================================================================
// 6. 실시간 전투 루프 및 2D HUD 오버레이 렌더링
// ============================================================================
function updateGame(dt) {
  if (gameState.isGameOver) return;
  const effDt = dt * gameState.gameSpeed;
  sound.updateBgm(effDt);

  if (gameState.skillCd > 0) {
    gameState.skillCd = Math.max(0, gameState.skillCd - effDt);
    const btn = document.getElementById('skill-btn');
    const cdEl = document.getElementById('skill-cd');
    btn.disabled = gameState.skillCd > 0;
    cdEl.textContent = gameState.skillCd > 0 ? `${gameState.skillCd.toFixed(1)}s` : '즉시 발동';
  }

  // 카메라 시점 보간 & 화면 흔들림
  const targetCam = CAM_PRESETS[gameState.camMode];
  camera.position.lerp(targetCam.pos, 0.08);
  if (gameState.screenShake > 0) {
    gameState.screenShake = Math.max(0, gameState.screenShake - dt * 1.8);
    camera.position.x += (Math.random() - 0.5) * gameState.screenShake * 1.4;
  }
  camera.lookAt(targetCam.look);

  // 목우유마 이동
  gameState.supplyCartTimer += effDt;
  if (gameState.supplyCartTimer >= 25) {
    gameState.supplyCartTimer = 0;
    spawnSupplyCart();
  }
  if (gameState.supplyCart) {
    gameState.supplyCart.mesh.position.x += effDt * 3.2;
    if (gameState.supplyCart.mesh.position.x > 9.5) {
      scene.remove(gameState.supplyCart.mesh);
      gameState.supplyCart = null;
    }
  }

  // 적군 스폰
  if (gameState.waveRemaining > 0) {
    gameState.spawnTimer -= effDt;
    if (gameState.spawnTimer <= 0) {
      gameState.spawnTimer = 1.15;
      const isBoss = (gameState.waveRemaining === 1 && gameState.wave % 5 === 0);
      spawnEnemy(isBoss);
      gameState.waveRemaining--;
    }
  } else if (gameState.enemies.length === 0) {
    // 웨이브 클리어
    gameState.wave++;
    gameState.waveRemaining = 8 + gameState.wave * 3;
    gameState.gold += 35 + gameState.wave * 8;
    updateSynergyAndHUD();
    saveGameSafe();
    if (gameState.wave % 2 === 0) openStrategyModal();
  }

  const syn = getActiveSynergies();
  const codexMult = 1 + gameState.unlockedIds.length * 0.02;
  const upgradeMult = 1 + (gameState.upgradeLvl - 1) * 0.18;

  // 그리드 장수 공격
  gameState.grid.forEach((cell, idx) => {
    if (!cell) return;
    if (cell.mesh.userData.auraRing) cell.mesh.userData.auraRing.rotation.z += effDt * 1.8;
    if (cell.mesh.userData.halo) cell.mesh.userData.halo.rotation.z -= effDt * 2.2;

    if (idx === gameState.draggedIndex) return;

    cell.cooldown -= effDt * cell.data.spd * gameState.buffSpd * syn.shuMult;
    if (cell.cooldown <= 0 && gameState.enemies.length > 0) {
      const range = (cell.data.range + gameState.buffRange) * syn.weiMult;
      let target = null;
      let minDist = Infinity;
      for (const en of gameState.enemies) {
        const d = cell.mesh.position.distanceTo(en.mesh.position);
        if (d <= range && d < minDist) {
          minDist = d;
          target = en;
        }
      }
      if (target) {
        cell.cooldown = 1.0;
        if (cell.mesh.userData.armPivot) {
          cell.mesh.userData.armPivot.rotation.x = -1.2;
          setTimeout(() => { if (cell.mesh && cell.mesh.userData.armPivot) cell.mesh.userData.armPivot.rotation.x = 0; }, 140);
        }
        sound.playBladeSlash();

        const isCrit = Math.random() < (gameState.buffCrit + syn.qunCrit);
        const dmg = cell.data.atk * gameState.buffAtk * syn.weiMult * codexMult * upgradeMult * (isCrit ? 2.2 : 1.0);
        spawnProjectile(cell.mesh.position, target, dmg, FACTION_META[cell.data.faction].hex, isCrit, syn.wuBurn);
      }
    }
  });

  // 성루 공성 병기 자동 사격
  if (gameState.siegeLeftLv > 0 && gameState.enemies.length > 0) {
    gameState.siegeLeftTimer += effDt;
    if (gameState.siegeLeftTimer >= 1.5) {
      gameState.siegeLeftTimer = 0;
      const targets = gameState.enemies.slice(0, 3);
      targets.forEach(t => {
        spawnProjectile(siegeLeftMesh.position, t, 85 * gameState.siegeLeftLv * upgradeMult, 0x38bdf8, false, false);
      });
    }
  }
  if (gameState.siegeRightLv > 0 && gameState.enemies.length > 0) {
    gameState.siegeRightTimer += effDt;
    if (gameState.siegeRightTimer >= 3.8) {
      gameState.siegeRightTimer = 0;
      const target = gameState.enemies[0];
      sound.playWarDrum();
      spawnProjectile(siegeRightMesh.position, target, 240 * gameState.siegeRightLv * upgradeMult, 0xf97316, true, true);
    }
  }

  // 발사체 이동
  for (let i = gameState.projectiles.length - 1; i >= 0; i--) {
    const p = gameState.projectiles[i];
    if (!gameState.enemies.includes(p.target)) {
      scene.remove(p.mesh);
      gameState.projectiles.splice(i, 1);
      continue;
    }
    const dir = new THREE.Vector3().subVectors(p.target.mesh.position, p.mesh.position);
    const dist = dir.length();
    if (dist < 0.6) {
      p.target.hp -= p.dmg;
      if (p.burn) {
        p.target.burnTimer = 3.0;
        p.target.burnDps = p.dmg * 0.25;
      }
      addFloatingText(
        `${p.isCrit ? '💥' : ''}-${Math.floor(p.dmg)}`,
        p.target.mesh.position,
        p.isCrit ? '#fde047' : '#f8fafc'
      );
      scene.remove(p.mesh);
      gameState.projectiles.splice(i, 1);
    } else {
      dir.normalize();
      p.mesh.position.addScaledVector(dir, effDt * 24);
    }
  }

  // 적군 이동 및 처치 판정
  for (let i = gameState.enemies.length - 1; i >= 0; i--) {
    const en = gameState.enemies[i];
    if (en.burnTimer > 0) {
      en.burnTimer -= effDt;
      en.hp -= en.burnDps * effDt;
    }
    if (en.hp <= 0) {
      scene.remove(en.mesh);
      gameState.enemies.splice(i, 1);
      gameState.kills++;
      gameState.gold += en.isBoss ? 80 : 8 + Math.floor(gameState.wave * 1.5);
      updateSynergyAndHUD();
      continue;
    }

    const wp = ENEMY_PATH[en.wpIndex];
    const dir = new THREE.Vector3().subVectors(wp, en.mesh.position);
    const dist = dir.length();
    if (dist < 0.35) {
      en.wpIndex++;
      if (en.wpIndex >= ENEMY_PATH.length) {
        gameState.hp -= en.isBoss ? 30 : 10;
        scene.remove(en.mesh);
        gameState.enemies.splice(i, 1);
        sound.playWarDrum();
        updateSynergyAndHUD();
        if (gameState.hp <= 0) {
          gameState.isGameOver = true;
          document.getElementById('final-wave').textContent = `제${gameState.wave}장`;
          document.getElementById('final-kills').textContent = gameState.kills;
          document.getElementById('gameover-modal').classList.remove('hidden');
        }
      }
    } else {
      dir.normalize();
      en.mesh.position.addScaledVector(dir, effDt * en.speed);
    }
  }

  // 플로팅 텍스트 갱신
  for (let i = gameState.floatingTexts.length - 1; i >= 0; i--) {
    gameState.floatingTexts[i].life -= dt * 1.1;
    gameState.floatingTexts[i].pos.y += dt * 1.8;
    if (gameState.floatingTexts[i].life <= 0) gameState.floatingTexts.splice(i, 1);
  }
}

function spawnProjectile(fromPos, target, dmg, colorHex, isCrit, burn) {
  const m = new THREE.Mesh(
    new THREE.SphereGeometry(isCrit ? 0.28 : 0.18, 8, 8),
    new THREE.MeshBasicMaterial({ color: colorHex })
  );
  m.position.copy(fromPos);
  m.position.y += 1.0;
  scene.add(m);
  gameState.projectiles.push({ mesh: m, target, dmg, isCrit, burn });
}

function render2DOverlay() {
  const canvas = document.getElementById('hudCanvas');
  const ctx = canvas.getContext('2d');
  if (canvas.width !== canvas.clientWidth || canvas.height !== canvas.clientHeight) {
    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;
  }
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // 드래그 중일 때 하단 해산(환급) 드롭존 표시
  if (gameState.draggedIndex !== -1) {
    ctx.fillStyle = 'rgba(220, 38, 38, 0.78)';
    ctx.fillRect(20, canvas.height - 54, canvas.width - 40, 44);
    ctx.strokeStyle = '#fca5a5';
    ctx.strokeRect(20, canvas.height - 54, canvas.width - 40, 44);
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 13px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('🌾 이곳에 드롭하여 장수 해산 (+군량미 50% 환급)', canvas.width / 2, canvas.height - 27);
  }

  // 적 체력바 렌더링
  gameState.enemies.forEach(en => {
    const p = en.mesh.position.clone();
    p.y += en.isBoss ? 2.4 : 1.5;
    p.project(camera);
    const x = (p.x * 0.5 + 0.5) * canvas.width;
    const y = (-p.y * 0.5 + 0.5) * canvas.height;
    const w = en.isBoss ? 56 : 34;
    ctx.fillStyle = 'rgba(0,0,0,0.7)';
    ctx.fillRect(x - w / 2, y, w, 5);
    ctx.fillStyle = en.isBoss ? '#f59e0b' : '#ef4444';
    ctx.fillRect(x - w / 2, y, w * Math.max(0, en.hp / en.maxHp), 5);
  });

  // 플로팅 텍스트 렌더링
  gameState.floatingTexts.forEach(ft => {
    const p = ft.pos.clone().project(camera);
    const x = (p.x * 0.5 + 0.5) * canvas.width;
    const y = (-p.y * 0.5 + 0.5) * canvas.height;
    ctx.globalAlpha = Math.max(0, ft.life);
    ctx.font = 'bold 13px sans-serif';
    ctx.fillStyle = ft.color;
    ctx.textAlign = 'center';
    ctx.fillText(ft.text, x, y);
    ctx.globalAlpha = 1.0;
  });
}

// ============================================================================
// 7. 터치/마우스 Raycaster 조작 & 모달 이벤트
// ============================================================================
const raycaster = new THREE.Raycaster();
const pointer = new THREE.Vector2();
const dragPlane = new THREE.Plane(new THREE.Vector3(0, 1, 0), -1.2);

function getTileIndexFromEvent(e) {
  const canvas = document.getElementById('hudCanvas');
  const rect = canvas.getBoundingClientRect();
  const clientX = e.changedTouches ? e.changedTouches[0].clientX : e.clientX;
  const clientY = e.changedTouches ? e.changedTouches[0].clientY : e.clientY;
  pointer.x = ((clientX - rect.left) / rect.width) * 2 - 1;
  pointer.y = -((clientY - rect.top) / rect.height) * 2 + 1;
  raycaster.setFromCamera(pointer, camera);

  // 목우유마 터치 체크
  if (gameState.supplyCart) {
    const cartHits = raycaster.intersectObjects(gameState.supplyCart.mesh.children, true);
    if (cartHits.length > 0) {
      const bonus = 60 + gameState.wave * 15;
      gameState.gold += bonus;
      triggerHanjaStamp('木牛流馬', `보급 수레 확보! +${bonus}🌾`);
      scene.remove(gameState.supplyCart.mesh);
      gameState.supplyCart = null;
      updateSynergyAndHUD();
      return -2;
    }
  }

  const hits = raycaster.intersectObjects(gridTiles3D);
  if (hits.length > 0) return hits[0].object.userData.gridIndex;
  return -1;
}

function bindEvents() {
  const canvas = document.getElementById('hudCanvas');

  const onDown = (e) => {
    sound.init();
    const idx = getTileIndexFromEvent(e);
    if (idx >= 0 && gameState.grid[idx]) {
      gameState.draggedIndex = idx;
      gameState.selectedIndex = idx;
      const d = gameState.grid[idx].data;
      document.getElementById('unit-inspector').classList.remove('hidden');
      document.getElementById('insp-name').textContent = `${d.name} [Tier ${d.tier}]`;
      document.getElementById('insp-desc').textContent = `${FACTION_META[d.faction].name}(${FACTION_META[d.faction].hanja}) · ${d.desc}`;
      document.getElementById('insp-atk').textContent = Math.floor(d.atk * gameState.buffAtk);
      document.getElementById('insp-spd').textContent = `${(d.spd * gameState.buffSpd).toFixed(2)}/s`;
      document.getElementById('insp-rng').textContent = `${d.range}m`;
    } else {
      document.getElementById('unit-inspector').classList.add('hidden');
    }
  };

  const onMove = (e) => {
    if (gameState.draggedIndex === -1) return;
    const rect = canvas.getBoundingClientRect();
    const clientX = e.changedTouches ? e.changedTouches[0].clientX : e.clientX;
    const clientY = e.changedTouches ? e.changedTouches[0].clientY : e.clientY;
    pointer.x = ((clientX - rect.left) / rect.width) * 2 - 1;
    pointer.y = -((clientY - rect.top) / rect.height) * 2 + 1;
    raycaster.setFromCamera(pointer, camera);
    if (raycaster.ray.intersectPlane(dragPlane, gameState.dragWorldPos)) {
      const cell = gameState.grid[gameState.draggedIndex];
      if (cell) cell.mesh.position.copy(gameState.dragWorldPos);
    }
  };

  const onUp = (e) => {
    if (gameState.draggedIndex === -1) return;
    const rect = canvas.getBoundingClientRect();
    const clientY = e.changedTouches ? e.changedTouches[0].clientY : e.clientY;
    const fromIdx = gameState.draggedIndex;
    gameState.draggedIndex = -1;

    if (clientY - rect.top > rect.height - 58) {
      dismissHero(fromIdx);
      return;
    }

    const toIdx = getTileIndexFromEvent(e);
    if (toIdx >= 0 && toIdx !== fromIdx) {
      tryMergeOrMove(fromIdx, toIdx);
    } else if (gameState.grid[fromIdx]) {
      gameState.grid[fromIdx].mesh.position.copy(gridTiles3D[fromIdx].position);
    }
  };

  canvas.addEventListener('mousedown', onDown);
  canvas.addEventListener('mousemove', onMove);
  window.addEventListener('mouseup', onUp);
  canvas.addEventListener('touchstart', onDown, { passive: false });
  canvas.addEventListener('touchmove', onMove, { passive: false });
  window.addEventListener('touchend', onUp);

  document.getElementById('recruit-btn').addEventListener('click', recruitHero);

  document.getElementById('upgrade-btn').addEventListener('click', () => {
    if (gameState.gold < gameState.upgradeCost) return;
    gameState.gold -= gameState.upgradeCost;
    gameState.upgradeLvl++;
    gameState.upgradeCost = Math.floor(gameState.upgradeCost * 1.35);
    sound.playGong();
    updateSynergyAndHUD();
    saveGameSafe();
  });

  document.getElementById('skill-btn').addEventListener('click', () => {
    if (gameState.skillCd > 0) return;
    gameState.skillCd = 18;
    sound.playCatapultBoom();
    triggerHanjaStamp('赤壁業火', '적벽의 화공이 적진을 불태웁니다!');
    const skillDmg = 140 * gameState.wave;
    gameState.enemies.forEach(en => {
      en.hp -= skillDmg;
      en.burnTimer = 4.0;
      en.burnDps = skillDmg * 0.2;
      addFloatingText(`🔥-${skillDmg}`, en.mesh.position, '#f97316');
    });
  });

  document.getElementById('siege-left-btn').addEventListener('click', () => {
    const cost = 80 + gameState.siegeLeftLv * 60;
    if (gameState.gold < cost) return;
    gameState.gold -= cost;
    gameState.siegeLeftLv++;
    siegeLeftMesh.visible = true;
    triggerHanjaStamp('諸葛連弩', `좌성루 제갈연노 Lv.${gameState.siegeLeftLv} 가동!`);
    updateSynergyAndHUD();
    saveGameSafe();
  });

  document.getElementById('siege-right-btn').addEventListener('click', () => {
    const cost = 100 + gameState.siegeRightLv * 75;
    if (gameState.gold < cost) return;
    gameState.gold -= cost;
    gameState.siegeRightLv++;
    siegeRightMesh.visible = true;
    triggerHanjaStamp('霹靂投石', `우성루 벽력거 Lv.${gameState.siegeRightLv} 가동!`);
    updateSynergyAndHUD();
    saveGameSafe();
  });

  document.getElementById('speed-btn').addEventListener('click', (e) => {
    gameState.gameSpeed = gameState.gameSpeed === 1 ? 2 : 1;
    e.currentTarget.textContent = `⏩ ${gameState.gameSpeed}x`;
  });

  document.getElementById('cam-btn').addEventListener('click', () => {
    gameState.camMode = (gameState.camMode + 1) % CAM_PRESETS.length;
  });

  document.getElementById('sound-btn').addEventListener('click', (e) => {
    sound.enabled = !sound.enabled;
    e.currentTarget.textContent = sound.enabled ? '🔊' : '🔇';
  });

  document.getElementById('codex-btn').addEventListener('click', openCodexModal);
  document.getElementById('close-codex-btn').addEventListener('click', () => {
    document.getElementById('codex-modal').classList.add('hidden');
  });

  document.getElementById('restart-btn').addEventListener('click', () => {
    localStorage.removeItem(SAVE_KEY);
    location.reload();
  });

  window.addEventListener('resize', () => {
    const container = document.getElementById('webgl-container');
    if (!container || !renderer) return;
    const w = container.clientWidth;
    const h = container.clientHeight;
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    renderer.setSize(w, h);
  });
}

function openStrategyModal() {
  const modal = document.getElementById('strategy-modal');
  const box = document.getElementById('strategy-cards');
  box.innerHTML = '';
  const picks = [...STRATEGY_CARDS].sort(() => Math.random() - 0.5).slice(0, 3);
  picks.forEach(c => {
    const div = document.createElement('div');
    div.className = 'strategy-card';
    div.innerHTML = `<h3>${c.title}</h3><p>${c.desc}</p>`;
    div.onclick = () => {
      c.apply(gameState);
      sound.playGong();
      modal.classList.add('hidden');
      updateSynergyAndHUD();
    };
    box.appendChild(div);
  });
  modal.classList.remove('hidden');
}

function openCodexModal() {
  const grid = document.getElementById('codex-grid');
  grid.innerHTML = '';
  HERO_DB.forEach(h => {
    const unlocked = gameState.unlockedIds.includes(h.id);
    const d = document.createElement('div');
    d.className = `codex-item ${unlocked ? 'unlocked' : ''}`;
    d.innerHTML = `<div style="font-size:16px;font-weight:900;color:${FACTION_META[h.faction].color}">${h.hanja}</div>
                   <div>T${h.tier} ${h.name}</div>
                   <div style="font-size:9px;color:#94a3b8">${unlocked ? '✅ 해금' : '🔒 미해금'}</div>`;
    grid.appendChild(d);
  });
  document.getElementById('codex-modal').classList.remove('hidden');
}

// ============================================================================
// 8. 메인 부트스트랩
// ============================================================================
window.addEventListener('DOMContentLoaded', () => {
  initThreeScene();
  bindEvents();

  const savedGridIds = loadGameSafe();
  if (Array.isArray(savedGridIds)) {
    savedGridIds.forEach((id, idx) => {
      if (id) {
        const h = HERO_DB.find(item => item.id === id);
        if (h) spawnHeroAtGrid(idx, h);
      }
    });
  } else {
    spawnHeroAtGrid(7, HERO_DB[0]);
    spawnHeroAtGrid(12, HERO_DB[1]);
  }
  updateSynergyAndHUD();

  let lastTime = performance.now();
  function animate(now) {
    requestAnimationFrame(animate);
    const dt = Math.min(0.1, (now - lastTime) / 1000);
    lastTime = now;
    updateGame(dt);
    if (composer) composer.render();
    else renderer.render(scene, camera);
    render2DOverlay();
  }
  requestAnimationFrame(animate);
});
