const SAVE_KEY = 'TK_ARGON_SAVE_V4';

const FACTION_META = {
  shu: { name: '촉(蜀)', hanja: '蜀', color: '#10B981', hex: 0x10B981, buff: '전군 공격속도 +30%' },
  wei: { name: '위(魏)', hanja: '魏', color: '#3B82F6', hex: 0x3B82F6, buff: '전군 공격력·사거리 +25%' },
  wu:  { name: '오(吳)', hanja: '吳', color: '#F97316', hex: 0xF97316, buff: '3초 화염 지속피해(Burn DoT)' },
  qun: { name: '군웅(群)', hanja: '群', color: '#EF4444', hex: 0xEF4444, buff: '치명타 확률 +22% (피해 2.2배)' }
};

const HERO_DB = [
  { id: 'shu_1', tier: 1, faction: 'shu', name: '백이병', hanja: '白', weapon: '장창', atk: 24, spd: 1.0, range: 8.5, stamp: '百毦精兵', desc: '유비 직속 정예 친위병' },
  { id: 'wei_1', tier: 1, faction: 'wei', name: '청주병', hanja: '青', weapon: '장창', atk: 26, spd: 0.95, range: 8.5, stamp: '青州強兵', desc: '조조가 조직한 정예 강병' },
  { id: 'wu_1',  tier: 1, faction: 'wu',  name: '강동수군', hanja: '水', weapon: '단궁', atk: 22, spd: 1.1, range: 9.5, stamp: '江東水軍', desc: '장강 물길을 지배하는 궁병' },
  { id: 'qun_1', tier: 1, faction: 'qun', name: '황건병', hanja: '黃', weapon: '철추', atk: 28, spd: 0.9, range: 8.0, stamp: '蒼天已死', desc: '황천당립을 외치는 선봉병' },
  { id: 'shu_2', tier: 2, faction: 'shu', name: '관평', hanja: '平', weapon: '참마도', atk: 55, spd: 1.05, range: 9.0, stamp: '忠義少將', desc: '관우의 곁을 지키는 충의의 소장' },
  { id: 'wei_2', tier: 2, faction: 'wei', name: '악진', hanja: '樂', weapon: '돌격검', atk: 58, spd: 1.0, range: 9.0, stamp: '先登陷陣', desc: '모든 공성전에 가장 먼저 오르는 선등장' },
  { id: 'wu_2',  tier: 2, faction: 'wu',  name: '주태', hanja: '泰', weapon: '혈전도', atk: 54, spd: 1.15, range: 8.5, stamp: '全身刀痕', desc: '온몸의 칼자국으로 손권을 지킨 호위장' },
  { id: 'qun_2', tier: 2, faction: 'qun', name: '화웅', hanja: '華', weapon: '개산대부', atk: 65, spd: 0.9, range: 8.5, stamp: '汜水猛將', desc: '사수관을 호령한 동탁군의 거대 맹장' },
  { id: 'shu_3', tier: 3, faction: 'shu', name: '황충', hanja: '黃', weapon: '철태궁', atk: 120, spd: 1.2, range: 11.5, stamp: '百步穿楊', desc: '백 걸음 밖 버들잎을 꿰뚫는 오호대장군' },
  { id: 'wei_3', tier: 3, faction: 'wei', name: '서황', hanja: '徐', weapon: '백전대부', atk: 135, spd: 1.0, range: 9.5, stamp: '周亞夫風', desc: '한나라 주아부의 기풍을 지닌 오자양장' },
  { id: 'wu_3',  tier: 3, faction: 'wu',  name: '감녕', hanja: '甘', weapon: '쌍철추', atk: 125, spd: 1.25, range: 9.5, stamp: '錦帆遊俠', desc: '비단 돛과 방울 소리의 강동 유협' },
  { id: 'qun_3', tier: 3, faction: 'qun', name: '초선', hanja: '貂', weapon: '월하선', atk: 115, spd: 1.35, range: 10.5, stamp: '閉月連環', desc: '달마저 구름 뒤에 숨게 한 연환계의 무희' },
  { id: 'shu_4', tier: 4, faction: 'shu', name: '조운', hanja: '趙', weapon: '용담은창', atk: 260, spd: 1.35, range: 10.5, stamp: '一身是膽', desc: '단기필마로 장판파를 뚫은 상산 조자룡', mount: 'white' },
  { id: 'wei_4', tier: 4, faction: 'wei', name: '하후돈', hanja: '夏', weapon: '기린아도', atk: 285, spd: 1.15, range: 10.0, stamp: '拔矢啖睛', desc: '부모에게 받은 눈을 삼키고 적장을 벤 맹장' },
  { id: 'wu_4',  tier: 4, faction: 'wu',  name: '손상향', hanja: '香', weapon: '화염연노', atk: 250, spd: 1.4, range: 11.5, stamp: '弓腰姬君', desc: '무장을 거느린 강동의 호걸 궁요희' },
  { id: 'qun_4', tier: 4, faction: 'qun', name: '맹획', hanja: '孟', weapon: '남만철추', atk: 310, spd: 1.0, range: 9.5, stamp: '南蠻獸王', desc: '전투 코끼리를 몰고 진격하는 남만왕', mount: 'elephant' },
  { id: 'shu_5', tier: 5, faction: 'shu', name: '장비', hanja: '張', weapon: '장팔사모', atk: 560, spd: 1.3, range: 10.5, stamp: '萬夫不當', desc: '장판교 위에서 조조 대군을 물리친 만부부당' },
  { id: 'wei_5', tier: 5, faction: 'wei', name: '장료', hanja: '遼', weapon: '황룡구겸도', atk: 590, spd: 1.25, range: 11.0, stamp: '威震逍遙', desc: '소요진에서 손권의 담을 서늘하게 한 위진소요' },
  { id: 'wu_5',  tier: 5, faction: 'wu',  name: '육손', hanja: '陸', weapon: '비연쌍검', atk: 540, spd: 1.45, range: 11.0, stamp: '火燒連營', desc: '이릉의 칠백 리 연영을 불태운 대도독' },
  { id: 'qun_5', tier: 5, faction: 'qun', name: '장각', hanja: '角', weapon: '구절석장', atk: 620, spd: 1.15, range: 12.0, stamp: '黃天當立', desc: '태평요술로 천둥과 번개를 부르는 대현량사' },
  { id: 'shu_6', tier: 6, faction: 'shu', name: '관우', hanja: '關', weapon: '청룡언월도', atk: 1250, spd: 1.35, range: 11.5, stamp: '義薄雲天', desc: '오관육참의 신화를 쓴 천하의 무성(武聖)', mount: 'red', redFace: true, beard: 'long' },
  { id: 'wei_6', tier: 6, faction: 'wei', name: '사마의', hanja: '司', weapon: '흑우선', atk: 1320, spd: 1.3, range: 12.5, stamp: '塚虎奇謀', desc: '오장원에서 천하를 도모한 중달의 귀모' },
  { id: 'wu_6',  tier: 6, faction: 'wu',  name: '주유', hanja: '周', weapon: '적벽화선', atk: 1200, spd: 1.5, range: 12.0, stamp: '赤壁業火', desc: '적벽의 동남풍과 함께 위군 함대를 소각한 미주랑' },
  { id: 'qun_6', tier: 6, faction: 'qun', name: '동탁', hanja: '董', weapon: '암흑철추', atk: 1400, spd: 1.15, range: 10.5, stamp: '暴虐魔王', desc: '낙양을 유린한 패도 폭군', mount: 'black' },
  { id: 'shu_7', tier: 7, faction: 'shu', name: '제갈량', hanja: '諸', weapon: '백우선', atk: 2900, spd: 1.6, range: 13.5, stamp: '臥龍出世', desc: '팔진도와 천뢰로 전장을 지배하는 와룡 승상', halo: true },
  { id: 'wei_7', tier: 7, faction: 'wei', name: '무제 조조', hanja: '曹', weapon: '의천검', atk: 3100, spd: 1.5, range: 13.0, stamp: '唯才是擧', desc: '오직 인재만을 들어 천하의 패권을 쥔 난세의 간웅', mount: 'black', halo: true },
  { id: 'wu_7',  tier: 7, faction: 'wu',  name: '대제 손권', hanja: '孫', weapon: '백홍검', atk: 2850, spd: 1.7, range: 13.0, stamp: '江東猛虎', desc: '강동 6군 81주를 수호한 벽안자염의 황제', halo: true },
  { id: 'qun_7', tier: 7, faction: 'qun', name: '무신 여포', hanja: '呂', weapon: '방천화극', atk: 3600, spd: 1.65, range: 13.0, stamp: '天下無雙', desc: '적토마와 방천화극으로 호로관을 뒤흔든 천하무쌍', mount: 'red', plumes: true, halo: true }
];

const STRATEGY_DB = [
  { id: 'oat', name: '🍑 도원결의', grade: '전설', effect: '전체 장수 공격속도 영구 +20% 상승', note: '촉(蜀) 시너지와 중첩 시 폭발적 연사력 발휘' },
  { id: 'sup', name: '🌾 군량 징발', grade: '희귀', effect: '즉시 군량미 +220 획득 및 호로관 내구도 +30 회복', note: '초중반 장수 모집 가속 및 위기 탈출용' },
  { id: 'bow', name: '🏹 제갈연노 개량', grade: '전설', effect: '전체 장수 공격력 +25% 및 사거리 +1.5m 증가', note: '후열 장수도 전방 S자 경로 전체 타격 가능' },
  { id: 'crt', name: '⚡ 패왕의 기세', grade: '희귀', effect: '전군 치명타 확률 영구 +15% 증가', note: '군웅(群) 시너지와 결합 시 치명타 확률 대폭 상승' },
  { id: 'rec', name: '📜 구품관인법', grade: '영웅', effect: '장수 모집 시 Tier 2~3 초고속 발탁 확률 2배 증가', note: '후반 고티어(Tier 6~7) 합성 속도 대폭 단축' }
];

const SIEGE_DB = [
  { id: 's_left', name: '🏹 좌성루 제갈연노탑', cost: '초기 80🌾 (+레벨당 60🌾)', cycle: '1.5초', desc: '다연장 3D 석궁 포대. 전방 최대 3명의 적에게 동시 관통 화살 발사.', stamp: '諸葛連弩' },
  { id: 's_right', name: '☄️ 우성루 벽력거(발석차)', cost: '초기 100🌾 (+레벨당 75🌾)', cycle: '3.8초', desc: '거대 3D 투석기. 고화력 화염 바위를 던져 확정 치명타와 화상 부여.', stamp: '霹靂投石' },
  { id: 's_cart', name: '🐂 황금 목우유마 보급 수레', cost: '25초마다 자동 출현', cycle: '터치 즉시', desc: '성벽 앞 도로를 횡단하는 황금 수레. 터치 시 대량 군량미 즉시 지급.', stamp: '木牛流馬' }
];

const TREE_DOCS = [
  { group: '코어 시스템', id: 'overview', title: '1. 게임 개요 & 아르곤 엔진' },
  { group: '코어 시스템', id: 'merge', title: '2. 세력 계승 합성 & 해산 공식' },
  { group: '전술 & 시너지', id: 'factions', title: '3. 4대 세력 시너지 & 금낭묘계' },
  { group: '전술 & 시너지', id: 'siege', title: '4. 성루 3D 공성 병기 & 목우유마' },
  { group: '시각·청각 연출', id: 'audio', title: '5. Zero-Voice 국악 신디 & 한자 낙관' }
];

const DB_TABS = [
  { group: '통합 데이터베이스', id: 'heroes', title: '⚔️ 28인 명장 & 3D 뷰어' },
  { group: '통합 데이터베이스', id: 'siege', title: '🏹 공성 병기·보급 제원' },
  { group: '통합 데이터베이스', id: 'strategies', title: '🪶 제갈량의 금낭묘계 DB' }
];

let wikiAudioCtx = null;
function initWikiAudio() {
  if (!wikiAudioCtx) {
    const Ctx = window.AudioContext || window.webkitAudioContext;
    if (Ctx) wikiAudioCtx = new Ctx();
  }
  if (wikiAudioCtx && wikiAudioCtx.state === 'suspended') wikiAudioCtx.resume();
}

window.playWikiWarDrum = function() {
  initWikiAudio();
  if (!wikiAudioCtx) return;
  const now = wikiAudioCtx.currentTime;
  const osc = wikiAudioCtx.createOscillator();
  const gain = wikiAudioCtx.createGain();
  osc.type = 'sine';
  osc.frequency.setValueAtTime(68, now);
  osc.frequency.exponentialRampToValueAtTime(24, now + 0.28);
  gain.gain.setValueAtTime(0.5, now);
  gain.gain.exponentialRampToValueAtTime(0.001, now + 0.32);
  osc.connect(gain);
  gain.connect(wikiAudioCtx.destination);
  osc.start(now);
  osc.stop(now + 0.33);
};

window.playWikiGong = function() {
  initWikiAudio();
  if (!wikiAudioCtx) return;
  const now = wikiAudioCtx.currentTime;
  [210, 296.1, 405.3, 560.7].forEach((freq, idx) => {
    const osc = wikiAudioCtx.createOscillator();
    const gain = wikiAudioCtx.createGain();
    osc.type = idx % 2 === 0 ? 'triangle' : 'sine';
    osc.frequency.setValueAtTime(freq, now);
    gain.gain.setValueAtTime(0.16 / (idx + 1), now);
    gain.gain.exponentialRampToValueAtTime(0.0008, now + 1.3);
    osc.connect(gain);
    gain.connect(wikiAudioCtx.destination);
    osc.start(now);
    osc.stop(now + 1.35);
  });
};

let wikiStampTimer = null;
window.demoStamp = function(hanja, sub) {
  window.playWikiWarDrum();
  window.playWikiGong();
  const ov = document.getElementById('wiki-stamp-overlay');
  document.getElementById('wiki-stamp-hanja').textContent = hanja;
  document.getElementById('wiki-stamp-sub').textContent = sub;
  ov.classList.remove('stamp-hidden');
  if (wikiStampTimer) clearTimeout(wikiStampTimer);
  wikiStampTimer = setTimeout(() => ov.classList.add('stamp-hidden'), 1500);
};

let currentFactionFilter = 'all';
let currentTierFilter = 0;
let currentUnlockFilter = 'all';

function getUnlockedSet() {
  try {
    const raw = localStorage.getItem(SAVE_KEY);
    if (!raw) return new Set(['shu_1', 'wei_1', 'wu_1', 'qun_1']);
    const data = JSON.parse(raw);
    return new Set(Array.isArray(data.unlockedIds) ? data.unlockedIds : ['shu_1', 'wei_1', 'wu_1', 'qun_1']);
  } catch (e) {
    return new Set(['shu_1', 'wei_1', 'wu_1', 'qun_1']);
  }
}

function drawMiniBannerCanvas(hero) {
  const c = document.createElement('canvas');
  c.width = 96;
  c.height = 164;
  c.className = 'card-banner-canvas';
  const ctx = c.getContext('2d');
  const f = FACTION_META[hero.faction];
  ctx.fillStyle = f.color;
  ctx.fillRect(0, 0, 96, 164);
  ctx.strokeStyle = '#fbbf24';
  ctx.lineWidth = 6;
  ctx.strokeRect(4, 4, 88, 156);
  ctx.fillStyle = '#fef08a';
  ctx.font = 'bold 18px serif';
  ctx.textAlign = 'center';
  ctx.fillText(`[${f.hanja}] T${hero.tier}`, 48, 28);
  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 58px serif';
  ctx.fillText(hero.hanja, 48, 96);
  ctx.fillStyle = '#fde68a';
  ctx.font = 'bold 16px sans-serif';
  ctx.fillText(hero.name, 48, 138);
  return c;
}

function renderTreeArticle(docId, unlockedSet) {
  const main = document.getElementById('wiki-main');
  let title = '', bodyHtml = '', tocHtml = '';

  if (docId === 'merge') {
    title = '2. 세력 계승 합성(Faction Inheritance) & 해산 공식';
    bodyHtml = `
      <h2 id="s1">⚖️ 세력 계승 합성 법칙</h2>
      <p>무작위 합성의 운빨 스트레스를 제거하고 원하는 세력 덱을 맞출 수 있도록 <strong>세력 계승 합성 공식</strong>이 적용됩니다.</p>
      <table class="wiki-table">
        <tr><th>합성 조합 조건</th><th>상위 Tier 등장 확률</th><th>전술적 의미</th></tr>
        <tr><td><strong>동일 세력 + 동일 Tier</strong></td><td><strong>100% 같은 세력</strong> 상위 장수 승급</td><td>원하는 세력의 신화 군주(제갈량·조조·손권·여포) 확정 저격</td></tr>
        <tr><td><strong>타 세력 + 동일 Tier</strong></td><td>두 재료 세력 중 <strong>50 : 50</strong> 확률 승급</td><td>그리드 포화 시 유연한 티어업 및 주력 세력 전환</td></tr>
      </table>
      <h2 id="s2">🌾 장수 해산(환급) 공식</h2>
      <p>장수를 드래그하여 하단 해산 구역에 드롭하면 <code>Math.floor(현재 모집 비용 × 장수 Tier × 0.5)</code> 군량미를 즉시 환급받습니다.</p>`;
    tocHtml = `<li><a href="#s1">1. 세력 계승 합성 법칙</a></li><li><a href="#s2">2. 장수 해산 환급 공식</a></li>`;
  } else if (docId === 'factions') {
    title = '3. 4대 세력 시너지 & 제갈량의 금낭묘계';
    bodyHtml = `
      <h2 id="s1">🚩 4대 세력 시너지 (3인 이상 배치 시 자동 발동)</h2>
      <table class="wiki-table">
        <tr><th>세력</th><th>대표 신화 무장</th><th>3인 이상 배치 시 발동 효과</th></tr>
        <tr><td>🟢 <strong>촉(蜀)</strong></td><td>관우, 제갈량, 장비, 조운</td><td>전군 공격속도 <strong>+30%</strong> 상승</td></tr>
        <tr><td>🔵 <strong>위(魏)</strong></td><td>무제 조조, 사마의, 장료, 하후돈</td><td>전군 공격력 및 사거리 <strong>+25%</strong> 상승</td></tr>
        <tr><td>🔴 <strong>오(吳)</strong></td><td>대제 손권, 주유, 육손, 손상향</td><td>공격 적중 시 <strong>3초간 화염 지속피해(Burn DoT)</strong> 부여</td></tr>
        <tr><td>🟣 <strong>군웅(群)</strong></td><td>무신 여포, 동탁, 장각, 맹획</td><td>치명타 확률 <strong>+22% 증가</strong> (치명타 피해 2.2배)</td></tr>
      </table>
      <h2 id="s2">🪶 제갈량의 금낭묘계</h2>
      <table class="wiki-table">
        <tr><th>책략명</th><th>등급</th><th>영구 적용 효과</th></tr>
        ${STRATEGY_DB.map(s => `<tr><td><strong>${s.name}</strong></td><td>${s.grade}</td><td>${s.effect}</td></tr>`).join('')}
      </table>`;
    tocHtml = `<li><a href="#s1">1. 4대 세력 시너지</a></li><li><a href="#s2">2. 제갈량의 금낭묘계</a></li>`;
  } else if (docId === 'siege') {
    title = '4. 호로관 성루 3D 공성 병기 & 황금 목우유마';
    bodyHtml = `
      <h2 id="s1">🏹 성루 공성 병기 시스템</h2>
      <table class="wiki-table">
        <tr><th>병기 명칭</th><th>건설/강화 비용</th><th>작동 주기 및 특성</th><th>낙관 시연</th></tr>
        ${SIEGE_DB.map(sg => `<tr>
          <td><strong>${sg.name}</strong></td><td>${sg.cost}</td><td>${sg.cycle} · ${sg.desc}</td>
          <td><button class="demo-btn" onclick="demoStamp('${sg.stamp}', '${sg.name} 가동!')">🥁 ${sg.stamp}</button></td>
        </tr>`).join('')}
      </table>`;
    tocHtml = `<li><a href="#s1">1. 성루 공성 병기 제원</a></li>`;
  } else if (docId === 'audio') {
    title = '5. Zero-Voice 국악 신디사이저 & 한자 낙관(Stamp) 연출';
    bodyHtml = `
      <h2 id="s1">🥁 성우/TTS 완전 배제 (Zero-Voice Policy)</h2>
      <p>어색한 기계음(TTS)이나 외부 음성 파일을 100% 배제하고, 순수 Web Audio 수식 합성과 전서체 한자 낙관(Stamp) 임팩트로 전장의 위엄을 전달합니다.</p>
      <table class="wiki-table">
        <tr><th>음향 모듈</th><th>Web Audio 수식 설계</th><th>직접 청음 테스트</th></tr>
        <tr><td><strong>전장 대북 (War Drum)</strong></td><td><code>68Hz → 24Hz</code> 지수 하강 사인파</td><td><button class="demo-btn" onclick="playWikiWarDrum()">🥁 대북 울리기</button></td></tr>
        <tr><td><strong>청동 징 (Battle Gong)</strong></td><td><code>[210, 296.1, 405.3, 560.7]Hz</code> 금속 배음</td><td><button class="demo-btn" onclick="playWikiGong()">🔔 청동 징 울리기</button></td></tr>
        <tr><td><strong>무쌍 한자 낙관</strong></td><td>대북+징 동시 공명 & 전서체 인장 타격</td><td><button class="demo-btn" onclick="demoStamp('天下無雙', '무신 여포 [Tier 7] 강림!')">💮 天下無雙 찍기</button></td></tr>
      </table>`;
    tocHtml = `<li><a href="#s1">1. Zero-Voice 사운드 철학</a></li>`;
  } else {
    title = '1. 게임 개요 & 100% 아르곤(Argon) 3D 엔진';
    bodyHtml = `
      <h2 id="s1">🏛️ 프로젝트 아키텍처 개요</h2>
      <p><strong>《삼국지 3D 택티컬 머지 디펜스》</strong>는 외부 이미지·3D 모델·음원·성우 보이스 없이 오직 <strong>Three.js 절차적 기하학 조립, THREE.CanvasTexture 한자 비단 군기, Web Audio 수식 합성</strong>만으로 구동되는 하이엔드 웹 전술 디펜스입니다.</p>
      <table class="wiki-table">
        <tr><th>핵심 지표</th><th>명세</th></tr>
        <tr><td><strong>장수 로스터</strong></td><td>촉·위·오·군웅 4대 세력 × 7등급 = <strong>28인 정예 매트릭스</strong></td></tr>
        <tr><td><strong>현재 내 도감 해금</strong></td><td><strong>${unlockedSet.size} / 28인 해금 완료</strong> (영구 화력 보너스 <strong>+${unlockedSet.size * 2}%</strong> 적용 중)</td></tr>
      </table>
      <p><a href="#/db/heroes" class="return-btn" style="display:inline-block;margin-top:8px;">🗂️ 28인 명장 3D DB 열기 →</a></p>`;
    tocHtml = `<li><a href="#s1">1. 프로젝트 아키텍처 개요</a></li>`;
  }

  main.innerHTML = `
    <div class="breadcrumb">WIKI // TREE // ${docId.toUpperCase()}</div>
    <div class="article-layout">
      <article class="article-body"><h1>${title}</h1>${bodyHtml}</article>
      <aside class="article-aside">
        <div class="aside-title">📑 문서 목차 (TOC)</div>
        <ul class="toc-list">${tocHtml}</ul>
        <div class="aside-title" style="margin-top:18px;">📊 내 전장 텔레메트리</div>
        <div style="font-size:12px;color:#cbd5e1;line-height:1.6;">
          • 해금 명장: <b style="color:#fbbf24">${unlockedSet.size} / 28</b><br>
          • 도감 보너스: <b style="color:#34d399">+${unlockedSet.size * 2}%</b><br>
          • 사운드 정책: <b>Zero-Voice</b>
        </div>
      </aside>
    </div>`;
}

function renderDbView(subRoute, unlockedSet) {
  const main = document.getElementById('wiki-main');
  const query = (document.getElementById('wiki-search').value || '').trim().toLowerCase();

  if (subRoute === 'siege') {
    main.innerHTML = `
      <div class="breadcrumb">DATABASE // SIEGE & SUPPLY</div>
      <div class="article-body">
        <h1>🏹 성루 3D 공성 병기 & 보급품 DB</h1>
        <table class="wiki-table">
          <tr><th>명칭</th><th>비용</th><th>주기</th><th>상세 설명</th><th>사자성어 낙관</th></tr>
          ${SIEGE_DB.map(s => `<tr>
            <td><strong>${s.name}</strong></td><td>${s.cost}</td><td>${s.cycle}</td><td>${s.desc}</td>
            <td><button class="demo-btn" onclick="demoStamp('${s.stamp}', '${s.name}')">${s.stamp}</button></td>
          </tr>`).join('')}
        </table>
      </div>`;
    return;
  }

  if (subRoute === 'strategies') {
    main.innerHTML = `
      <div class="breadcrumb">DATABASE // STRATEGIES</div>
      <div class="article-body">
        <h1>🪶 제갈량의 금낭묘계 DB</h1>
        <table class="wiki-table">
          <tr><th>책략명</th><th>등급</th><th>영구 버프 효과</th><th>전술 운용 팁</th></tr>
          ${STRATEGY_DB.map(s => `<tr>
            <td><strong>${s.name}</strong></td><td>${s.grade}</td><td>${s.effect}</td><td>${s.note}</td>
          </tr>`).join('')}
        </table>
      </div>`;
    return;
  }

  const filtered = HERO_DB.filter(h => {
    if (currentFactionFilter !== 'all' && h.faction !== currentFactionFilter) return false;
    if (currentTierFilter > 0 && h.tier !== currentTierFilter) return false;
    if (currentUnlockFilter === 'unlocked' && !unlockedSet.has(h.id)) return false;
    if (currentUnlockFilter === 'locked' && unlockedSet.has(h.id)) return false;
    if (query) {
      const hay = `${h.name} ${h.hanja} ${h.stamp} ${h.weapon} ${h.desc}`.toLowerCase();
      if (!hay.includes(query)) return false;
    }
    return true;
  });

  main.innerHTML = `
    <div class="breadcrumb">DATABASE // HEROES (${filtered.length} / 28)</div>
    <h1 style="color:var(--gold);font-size:22px;">🗂️ 삼국지 28인 명장 DB & 3D 피규어 아카이브</h1>
    <p style="font-size:13px;color:var(--text-muted);margin-top:4px;">장수 카드를 클릭하면 <strong>Three.js 3D 입체 조형과 한자 등깃발을 360° 회전</strong>하며 상세 스탯과 낙관을 시연할 수 있습니다.</p>
    <div class="db-filter-bar">
      <button class="filter-btn ${currentFactionFilter === 'all' ? 'active' : ''}" onclick="setWikiFilter('faction','all')">전체 세력</button>
      <button class="filter-btn ${currentFactionFilter === 'shu' ? 'active' : ''}" onclick="setWikiFilter('faction','shu')">🟢 촉(蜀)</button>
      <button class="filter-btn ${currentFactionFilter === 'wei' ? 'active' : ''}" onclick="setWikiFilter('faction','wei')">🔵 위(魏)</button>
      <button class="filter-btn ${currentFactionFilter === 'wu' ? 'active' : ''}" onclick="setWikiFilter('faction','wu')">🔴 오(吳)</button>
      <button class="filter-btn ${currentFactionFilter === 'qun' ? 'active' : ''}" onclick="setWikiFilter('faction','qun')">🟣 군웅(群)</button>
      <button class="filter-btn ${currentTierFilter === 0 ? 'active' : ''}" onclick="setWikiFilter('tier',0)">전 등급</button>
      ${[1,2,3,4,5,6,7].map(t => `<button class="filter-btn ${currentTierFilter === t ? 'active' : ''}" onclick="setWikiFilter('tier',${t})">T${t}</button>`).join('')}
      <button class="filter-btn ${currentUnlockFilter === 'all' ? 'active' : ''}" onclick="setWikiFilter('unlock','all')">전체</button>
      <button class="filter-btn ${currentUnlockFilter === 'unlocked' ? 'active' : ''}" onclick="setWikiFilter('unlock','unlocked')">✅ 해금됨</button>
      <button class="filter-btn ${currentUnlockFilter === 'locked' ? 'active' : ''}" onclick="setWikiFilter('unlock','locked')">🔒 미해금</button>
    </div>
    <div class="db-grid" id="hero-db-grid"></div>`;

  const gridEl = document.getElementById('hero-db-grid');
  filtered.forEach(hero => {
    const isUnlocked = unlockedSet.has(hero.id);
    const card = document.createElement('div');
    card.className = `db-card ${isUnlocked ? 'unlocked' : ''}`;
    card.innerHTML = `
      <span class="unlock-tag ${isUnlocked ? 'yes' : 'no'}">${isUnlocked ? '✅ 해금' : '🔒 미해금'}</span>
      <div class="banner-slot"></div>
      <div class="card-title">T${hero.tier} ${hero.name}</div>
      <div class="card-sub">${FACTION_META[hero.faction].name} · ${hero.weapon}</div>
      <div class="card-stamp">${hero.stamp}</div>`;
    card.querySelector('.banner-slot').appendChild(drawMiniBannerCanvas(hero));
    card.addEventListener('click', () => openHero3DDialog(hero, isUnlocked));
    gridEl.appendChild(card);
  });
}

window.setWikiFilter = function(type, val) {
  if (type === 'faction') currentFactionFilter = val;
  if (type === 'tier') currentTierFilter = val;
  if (type === 'unlock') currentUnlockFilter = val;
  renderRouter();
};

let dialogRenderer = null, dialogScene = null, dialogCamera = null, dialogHeroMesh = null, dialogAnimId = null;

function create3DHeroForDialog(hero) {
  const root = new THREE.Group();
  const f = FACTION_META[hero.faction];
  const base = new THREE.Mesh(
    new THREE.CylinderGeometry(0.95, 1.1, 0.3, 8),
    new THREE.MeshStandardMaterial({ color: 0x1e293b, metalness: 0.8, roughness: 0.25 })
  );
  base.position.y = -1.1;
  root.add(base);

  let yOff = -0.95;
  if (hero.mount) {
    const mColor = hero.mount === 'red' ? 0xb91c1c : hero.mount === 'white' ? 0xf8fafc : hero.mount === 'elephant' ? 0x64748b : 0x1e293b;
    const mBody = new THREE.Mesh(new THREE.BoxGeometry(0.85, 0.65, 1.3), new THREE.MeshStandardMaterial({ color: mColor }));
    mBody.position.y = -0.6;
    root.add(mBody);
    yOff = -0.3;
  }

  const torso = new THREE.Mesh(
    new THREE.CylinderGeometry(0.38, 0.46, 0.95, 8),
    new THREE.MeshStandardMaterial({ color: f.hex, metalness: 0.6, roughness: 0.3 })
  );
  torso.position.y = yOff + 0.48;
  root.add(torso);

  const head = new THREE.Mesh(
    new THREE.SphereGeometry(0.32, 14, 14),
    new THREE.MeshStandardMaterial({ color: hero.redFace ? 0xdc2626 : 0xfde68a })
  );
  head.position.y = yOff + 1.18;
  root.add(head);

  if (hero.beard === 'long') {
    const beard = new THREE.Mesh(new THREE.ConeGeometry(0.18, 0.65, 6), new THREE.MeshBasicMaterial({ color: 0x0f172a }));
    beard.rotation.x = Math.PI;
    beard.position.set(0, yOff + 0.88, 0.26);
    root.add(beard);
  }
  if (hero.halo) {
    const halo = new THREE.Mesh(new THREE.TorusGeometry(0.68, 0.05, 8, 24), new THREE.MeshBasicMaterial({ color: 0xfbbf24 }));
    halo.position.set(0, yOff + 1.2, -0.25);
    root.add(halo);
  }

  const wMat = new THREE.MeshStandardMaterial({ color: 0xfbbf24, metalness: 0.9, roughness: 0.15 });
  const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 1.75, 6), wMat);
  pole.position.set(0.55, yOff + 0.9, 0.15);
  root.add(pole);

  const bannerTex = new THREE.CanvasTexture(drawMiniBannerCanvas(hero));
  const bannerMesh = new THREE.Mesh(
    new THREE.PlaneGeometry(0.85, 1.45),
    new THREE.MeshBasicMaterial({ map: bannerTex, side: THREE.DoubleSide })
  );
  bannerMesh.position.set(-0.38, yOff + 1.45, -0.42);
  root.add(bannerMesh);

  return root;
}

function openHero3DDialog(hero, isUnlocked) {
  const dlg = document.getElementById('hero-dialog');
  const infoBox = document.getElementById('dialog-info-box');
  const f = FACTION_META[hero.faction];

  infoBox.innerHTML = `
    <div>
      <div style="font-size:12px;color:${f.color};font-weight:800;">${f.name} · Tier ${hero.tier}</div>
      <h2 style="font-size:22px;color:var(--gold);margin:4px 0 8px;">${hero.name} (${hero.hanja})</h2>
      <p style="font-size:13px;color:#cbd5e1;margin-bottom:14px;">${hero.desc}</p>
      <table class="wiki-table" style="margin-bottom:12px;">
        <tr><th>전용 무기</th><td>${hero.weapon}</td><th>해금 상태</th><td>${isUnlocked ? '✅ 도감 해금됨' : '🔒 미해금'}</td></tr>
        <tr><th>기본 공격력</th><td>${hero.atk}</td><th>공격 속도</th><td>${hero.spd}/s</td></tr>
        <tr><th>사거리</th><td>${hero.range}m</td><th>한자 낙관</th><td style="color:#fde047;font-family:serif;font-weight:900;">${hero.stamp}</td></tr>
      </table>
      <button class="demo-btn" onclick="demoStamp('${hero.stamp}', '${hero.name} [Tier ${hero.tier}] 출진!')">🥁 '${hero.stamp}' 낙관 & 대북 시연</button>
    </div>
    <button class="dialog-close" id="close-hero-dialog">닫기 (ESC)</button>`;

  document.getElementById('close-hero-dialog').onclick = () => dlg.close();
  dlg.showModal();

  const stage = document.getElementById('dialog-3d-stage');
  const w = stage.clientWidth || 280;
  const h = stage.clientHeight || 320;

  if (!dialogRenderer) {
    dialogRenderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    stage.insertBefore(dialogRenderer.domElement, stage.firstChild);
    dialogScene = new THREE.Scene();
    dialogCamera = new THREE.PerspectiveCamera(42, w / h, 0.1, 100);
    dialogCamera.position.set(0, 0.8, 4.8);
    dialogCamera.lookAt(0, 0.1, 0);
    dialogScene.add(new THREE.AmbientLight(0xffffff, 0.9));
    const dl = new THREE.DirectionalLight(0xfef08a, 1.3);
    dl.position.set(4, 8, 6);
    dialogScene.add(dl);

    let dragging = false, prevX = 0;
    stage.addEventListener('pointerdown', e => { dragging = true; prevX = e.clientX; });
    window.addEventListener('pointerup', () => { dragging = false; });
    window.addEventListener('pointermove', e => {
      if (dragging && dialogHeroMesh) {
        dialogHeroMesh.rotation.y += (e.clientX - prevX) * 0.015;
        prevX = e.clientX;
      }
    });
  }

  dialogRenderer.setSize(w, h);
  if (dialogHeroMesh) dialogScene.remove(dialogHeroMesh);
  dialogHeroMesh = create3DHeroForDialog(hero);
  dialogScene.add(dialogHeroMesh);

  if (dialogAnimId) cancelAnimationFrame(dialogAnimId);
  function loop() {
    if (!dlg.open) return;
    dialogAnimId = requestAnimationFrame(loop);
    if (dialogHeroMesh) dialogHeroMesh.rotation.y += 0.008;
    dialogRenderer.render(dialogScene, dialogCamera);
  }
  loop();
}

function renderRouter() {
  const hash = location.hash || '#/tree/overview';
  const unlockedSet = getUnlockedSet();
  document.getElementById('sync-badge').textContent = `📖 도감 동기화: ${unlockedSet.size}/28 (+${unlockedSet.size * 2}%)`;

  const isDbMode = hash.startsWith('#/db');
  document.getElementById('tab-tree').classList.toggle('active', !isDbMode);
  document.getElementById('tab-db').classList.toggle('active', isDbMode);

  const treeNav = document.getElementById('sidebar-tree');
  treeNav.innerHTML = '';

  const items = isDbMode ? DB_TABS : TREE_DOCS;
  let lastGroup = '';
  items.forEach(item => {
    if (item.group !== lastGroup) {
      lastGroup = item.group;
      const g = document.createElement('div');
      g.className = 'tree-group-title';
      g.textContent = item.group;
      treeNav.appendChild(g);
    }
    const targetHash = isDbMode ? `#/db/${item.id}` : `#/tree/${item.id}`;
    const a = document.createElement('a');
    a.href = targetHash;
    a.className = `tree-link ${hash === targetHash ? 'active' : ''}`;
    a.textContent = item.title;
    a.onclick = () => document.getElementById('wiki-sidebar').classList.remove('open');
    treeNav.appendChild(a);
  });

  if (isDbMode) {
    const sub = hash.split('/')[2] || 'heroes';
    renderDbView(sub, unlockedSet);
  } else {
    const docId = hash.split('/')[2] || 'overview';
    renderTreeArticle(docId, unlockedSet);
  }
}

function drawHeaderLogo() {
  const c = document.getElementById('wiki-logo');
  if (!c) return;
  const ctx = c.getContext('2d');
  ctx.fillStyle = '#0f172a';
  ctx.beginPath();
  ctx.arc(17, 17, 15, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = '#fbbf24';
  ctx.lineWidth = 2;
  ctx.stroke();
  ctx.fillStyle = '#fbbf24';
  ctx.font = 'bold 16px serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('三', 17, 18);
}

window.addEventListener('hashchange', renderRouter);
window.addEventListener('DOMContentLoaded', () => {
  drawHeaderLogo();
  renderRouter();
  document.getElementById('drawer-toggle').addEventListener('click', () => {
    document.getElementById('wiki-sidebar').classList.toggle('open');
  });
  const searchInput = document.getElementById('wiki-search');
  searchInput.addEventListener('input', () => {
    if (!location.hash.startsWith('#/db/heroes')) location.hash = '#/db/heroes';
    else renderRouter();
  });
  window.addEventListener('keydown', e => {
    if (e.key === '/' && document.activeElement !== searchInput) {
      e.preventDefault();
      searchInput.focus();
    }
  });
});
// === END OF WIKI.JS ===
