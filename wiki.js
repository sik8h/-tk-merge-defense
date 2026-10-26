const SAVE_KEY = 'TK_ARGON_SAVE_V4';

// 눈이 편안한 전통 수묵·칠기 컬러 팔레트
const FACTION_META = {
  shu: { name: '촉(蜀)', hanja: '蜀', color: '#3d8b6e', bg: '#182c25', hex: 0x3d8b6e, lord: '소열제 유비 (공속+15%)', syn: '3인 공속 +30%' },
  wei: { name: '위(魏)', hanja: '魏', color: '#4a75a0', bg: '#192636', hex: 0x4a75a0, lord: '무제 조조 (화력+15%)', syn: '3인 화력·사거리 +25%' },
  wu:  { name: '오(吳)', hanja: '吳', color: '#b85d3b', bg: '#301d17', hex: 0xb85d3b, lord: '대제 손권 (화염+25%)', syn: '3인 3초 화염 지속피해' },
  qun: { name: '군웅(群)', hanja: '群', color: '#8c629c', bg: '#271b2e', hex: 0x8c629c, lord: '무신 여포 (치명+12%)', syn: '3인 치명타율 +22%' }
};

// 28인 전 장수 상세 조형 파라미터 + 해방 스토리 완비
const HERO_DB = [
  { id:'shu_1', tier:1, faction:'shu', name:'백이병', hanja:'白', weapon:'spear', wName:'백이장창', helm:'helm', beard:'none', atk:24, spd:1.0, range:8.5, stamp:'百毦精兵', unlockWave:1, fameCost:0, bonds:[], desc:'유비 직속 백이 정예 창병', story:'제1장부터 참전하는 촉한 기본 정예병' },
  { id:'wei_1', tier:1, faction:'wei', name:'청주병', hanja:'青', weapon:'spear', wName:'청주철창', helm:'helm', beard:'none', atk:26, spd:0.95, range:8.5, stamp:'青州強兵', unlockWave:1, fameCost:0, bonds:[], desc:'조조가 편성한 청주 정예병', story:'제1장부터 참전하는 조위 기본 정예병' },
  { id:'wu_1',  tier:1, faction:'wu',  name:'강동수군', hanja:'水', weapon:'bow',   wName:'수군단궁', helm:'turban', beard:'none', atk:22, spd:1.1, range:9.5, stamp:'江東水軍', unlockWave:1, fameCost:0, bonds:[], desc:'장강 물길을 지키는 궁병', story:'제1장부터 참전하는 손오 수군 사수' },
  { id:'qun_1', tier:1, faction:'qun', name:'황건병', hanja:'黃', weapon:'mace',  wName:'황건철추', helm:'turban', beard:'none', atk:28, spd:0.9, range:8.0, stamp:'蒼天已死', unlockWave:1, fameCost:0, bonds:[], desc:'노란 두건을 두른 태평도 병사', story:'제1장부터 참전하는 군웅 선봉병' },

  { id:'shu_2', tier:2, faction:'shu', name:'관평', hanja:'平', weapon:'glaive', wName:'참마언월도', helm:'helm', beard:'none', atk:55, spd:1.05, range:9.0, stamp:'忠義少將', unlockWave:1, fameCost:0, bonds:[], desc:'관우의 양자이자 충의의 소장', story:'초기 해방된 촉한의 젊은 선봉장' },
  { id:'wei_2', tier:2, faction:'wei', name:'악진', hanja:'樂', weapon:'sword',  wName:'선등돌격검', helm:'helm', beard:'goatee', atk:58, spd:1.0, range:9.0, stamp:'先登陷陣', unlockWave:1, fameCost:0, bonds:['오자양장'], desc:'성벽에 가장 먼저 오르는 오자양장', story:'초기 해방된 위나라 선등 대장' },
  { id:'wu_2',  tier:2, faction:'wu',  name:'주태', hanja:'泰', weapon:'sword',  wName:'혈전장도', helm:'helm', beard:'wild', atk:54, spd:1.15, range:8.5, stamp:'全身刀痕', unlockWave:1, fameCost:0, bonds:[], desc:'온몸의 상처로 손권을 지킨 호위장', story:'초기 해방된 강동의 불굴 호위무사' },
  { id:'qun_2', tier:2, faction:'qun', name:'화웅', hanja:'華', weapon:'axe',    wName:'개산대부', helm:'helm', beard:'wild', atk:65, spd:0.9, range:8.5, stamp:'汜水猛將', unlockWave:1, fameCost:0, bonds:[], desc:'사수관을 호령한 거대 도끼 맹장', story:'초기 해방된 서량군의 선봉 맹장' },

  { id:'shu_3', tier:3, faction:'shu', name:'황충', hanja:'黃', weapon:'bow',    wName:'백보철태궁', helm:'helm', beard:'white', atk:120, spd:1.2, range:11.5, stamp:'百步穿楊', unlockWave:1, fameCost:0, bonds:['오호대장군'], desc:'백 걸음 밖 버들잎을 꿰뚫는 노장 신궁', story:'정군산에서 위군을 격파한 오호대장군' },
  { id:'wei_3', tier:3, faction:'wei', name:'서황', hanja:'徐', weapon:'axe',    wName:'백전개산부', helm:'helm', beard:'goatee', atk:135, spd:1.0, range:9.5, stamp:'周亞夫風', unlockWave:1, fameCost:0, bonds:['오자양장'], desc:'주아부의 기풍을 지닌 대부 명장', story:'번성 구원전에서 위명을 떨친 오자양장' },
  { id:'wu_3',  tier:3, faction:'wu',  name:'감녕', hanja:'甘', weapon:'mace',   wName:'금범쌍철추', helm:'turban', beard:'wild', atk:125, spd:1.25, range:9.5, stamp:'錦帆遊俠', unlockWave:1, fameCost:0, bonds:[], desc:'방울 소리와 비단 돛의 강동 유협', story:'백기야습으로 조조군을 뒤흔든 맹장' },
  { id:'qun_3', tier:3, faction:'qun', name:'초선', hanja:'貂', weapon:'fan',    wName:'폐월무희선', helm:'female', beard:'none', atk:115, spd:1.35, range:10.5, stamp:'閉月連環', unlockWave:1, fameCost:0, bonds:['연환계'], desc:'달을 가리는 미모로 난세를 구한 무희', story:'왕윤의 연환계를 완성한 절세 무희', female:true },

  { id:'wu_4',  tier:4, faction:'wu',  name:'손상향', hanja:'香', weapon:'bow',   wName:'화염연노궁', helm:'female', beard:'none', atk:250, spd:1.4, range:11.5, stamp:'弓腰姬君', unlockWave:2, fameCost:30, bonds:[], desc:'무장 시녀를 거느린 강동의 궁요희', story:'[제2장 해방] 강동의 호걸 손상향이 전장에 합류!', female:true },
  { id:'qun_4', tier:4, faction:'qun', name:'맹획', hanja:'孟', weapon:'mace',   wName:'남만왕철추', helm:'turban', beard:'wild', atk:310, spd:1.0, range:9.5, stamp:'南蠻獸王', unlockWave:2, fameCost:30, bonds:[], desc:'전투 코끼리를 몰고 진격하는 남만왕', story:'[제2장 해방] 칠종칠금 끝에 코끼리 군단과 함께 귀순!', mount:'elephant' },
  { id:'shu_4', tier:4, faction:'shu', name:'조운', hanja:'趙', weapon:'spear',  wName:'용담량은창', helm:'helm', beard:'none', atk:260, spd:1.35, range:10.5, stamp:'一身是膽', unlockWave:3, fameCost:40, bonds:['오호대장군'], desc:'백마를 타고 장판파를 뚫은 상산 조자룡', story:'[제3장 해방] 단기필마로 아두를 구출해 합류!', mount:'white' },
  { id:'wei_4', tier:4, faction:'wei', name:'하후돈', hanja:'夏', weapon:'sword', wName:'독안기린도', helm:'helm', beard:'goatee', atk:285, spd:1.15, range:10.0, stamp:'拔矢啖睛', unlockWave:3, fameCost:40, bonds:[], desc:'화살 박힌 눈을 삼키고 적장을 벤 맹장', story:'[제3장 해방] 서주 전선에서 깨어난 조위의 총사령관!', eyepatch:true },

  { id:'shu_5', tier:5, faction:'shu', name:'장비', hanja:'張', weapon:'snake',  wName:'장팔사모', helm:'helm', beard:'wild', atk:560, spd:1.3, range:10.5, stamp:'萬夫不當', unlockWave:5, fameCost:70, bonds:['도원결의','오호대장군'], desc:'장판교 위에서 우레 같은 포효로 대군을 물리친 맹장', story:'[제5장 해방] 만부부당 장비가 장팔사모를 들고 출진!' },
  { id:'wei_5', tier:5, faction:'wei', name:'장료', hanja:'遼', weapon:'glaive', wName:'황룡구겸도', helm:'helm', beard:'goatee', atk:590, spd:1.25, range:11.0, stamp:'威震逍遙', unlockWave:5, fameCost:70, bonds:['오자양장'], desc:'합비 소요진에서 800기로 대군을 격파한 오자양장 필두', story:'[제5장 해방] 손권의 담을 서늘하게 한 장료 합류!' },
  { id:'wu_5',  tier:5, faction:'wu',  name:'육손', hanja:'陸', weapon:'dual',   wName:'비연쌍검', helm:'scholar', beard:'none', atk:540, spd:1.45, range:11.0, stamp:'火燒連營', unlockWave:7, fameCost:80, bonds:['적벽화신'], desc:'이릉의 칠백 리 연영을 불태운 오나라 대도독', story:'[제7장 해방] 화소연영의 천재 지략가 육손 참전!' },
  { id:'qun_5', tier:5, faction:'qun', name:'장각', hanja:'角', weapon:'fan',    wName:'태평구절장', helm:'turban', beard:'long', atk:620, spd:1.15, range:12.0, stamp:'黃天當立', unlockWave:7, fameCost:80, bonds:[], desc:'태평요술로 천둥과 벼락을 부르는 천공장군', story:'[제7장 해방] 황천당립의 뇌전 도술사 장각 해방!' },

  { id:'shu_6', tier:6, faction:'shu', name:'관우', hanja:'關', weapon:'glaive', wName:'청룡언월도', helm:'helm', beard:'long', atk:1250, spd:1.35, range:11.5, stamp:'義薄雲天', unlockWave:10, fameCost:130, bonds:['도원결의','오호대장군'], desc:'적토마와 청룡언월도로 오관육참을 돌파한 무성(武聖)', story:'[제10장 해방] 다섯 관문을 뚫고 무성 관우 귀환!', redFace:true, mount:'red' },
  { id:'wei_6', tier:6, faction:'wei', name:'사마의', hanja:'司', weapon:'fan',  wName:'흑우선', helm:'scholar', beard:'goatee', atk:1320, spd:1.3, range:12.5, stamp:'塚虎奇謀', unlockWave:10, fameCost:130, bonds:[], desc:'오장원에서 천하를 도모한 중달의 귀모', story:'[제10장 해방] 총호 사마의가 심연의 책략을 개방!' },
  { id:'wu_6',  tier:6, faction:'wu',  name:'주유', hanja:'周', weapon:'fan',    wName:'적벽화선', helm:'scholar', beard:'none', atk:1200, spd:1.5, range:12.0, stamp:'赤壁業火', unlockWave:12, fameCost:150, bonds:['적벽화신'], desc:'적벽의 동남풍으로 조조의 대선단을 불태운 미주랑', story:'[제12장 해방] 적벽대전의 영웅 대도독 주유 출진!' },
  { id:'qun_6', tier:6, faction:'qun', name:'동탁', hanja:'董', weapon:'mace',   wName:'암흑마왕추', helm:'crown', beard:'wild', atk:1400, spd:1.15, range:10.5, stamp:'暴虐魔王', unlockWave:12, fameCost:150, bonds:[], desc:'서량 철기군으로 낙양을 장악한 폭군', story:'[제12장 해방] 폭학마왕 동탁이 흑마를 타고 합류!', mount:'black' },

  { id:'shu_7', tier:7, faction:'shu', name:'제갈량', hanja:'諸', weapon:'fan',  wName:'백우선·팔진도', helm:'scholar', beard:'goatee', atk:2900, spd:1.6, range:13.5, stamp:'臥龍出世', unlockWave:15, fameCost:220, bonds:['도원결의','적벽화신'], desc:'팔진도와 천뢰로 전장을 지배하는 와룡 승상', story:'[제15장 해방] 삼고초려 끝에 와룡 제갈량 출사!', halo:true },
  { id:'wei_7', tier:7, faction:'wei', name:'무제 조조', hanja:'曹', weapon:'sword', wName:'의천검', helm:'crown', beard:'goatee', atk:3100, spd:1.5, range:13.0, stamp:'唯才是擧', unlockWave:16, fameCost:220, bonds:[], desc:'천하의 인재를 거느린 난세의 간웅이자 위무제', story:'[제16장 해방] 중원의 패왕 무제 조조 강림!', mount:'black', halo:true },
  { id:'wu_7',  tier:7, faction:'wu',  name:'대제 손권', hanja:'孫', weapon:'sword', wName:'백홍검', helm:'crown', beard:'goatee', atk:2850, spd:1.7, range:13.0, stamp:'江東猛虎', unlockWave:18, fameCost:220, bonds:[], desc:'강동 6군 81주를 수호한 벽안자염의 오나라 황제', story:'[제18장 해방] 강동맹호 대제 손권 각성!', halo:true },
  { id:'qun_7', tier:7, faction:'qun', name:'무신 여포', hanja:'呂', weapon:'halberd', wName:'방천화극', helm:'plumes', beard:'none', atk:3600, spd:1.65, range:13.0, stamp:'天下無雙', unlockWave:20, fameCost:260, bonds:['연환계'], desc:'적토마와 방천화극으로 천하를 압도한 무신', story:'[제20장 해방] 인중여포 마중적토, 무신 여포 해방!', mount:'red', halo:true }
];

const BOND_DB = [
  { name:'🍑 도원결의', members:'장비(T5) · 관우(T6) · 제갈량(T7)', cond:'2인 이상 배치', effect:'전군 공격력 +25% 영구 증가' },
  { name:'🐯 오호대장군', members:'황충(T3) · 조운(T4) · 장비(T5) · 관우(T6)', cond:'2인 이상 배치', effect:'전군 공격력 +25% 영구 증가' },
  { name:'🦅 오자양장', members:'악진(T2) · 서황(T3) · 장료(T5)', cond:'2인 이상 배치', effect:'전군 공격력 +25% 영구 증가' },
  { name:'🔥 적벽화신', members:'육손(T5) · 주유(T6) · 제갈량(T7)', cond:'2인 이상 배치', effect:'전군 공격력 +30% 영구 증가' },
  { name:'🌙 연환계', members:'초선(T3) · 무신 여포(T7)', cond:'2인 모두 배치', effect:'전군 공격력 +35% 영구 증가' }
];

const TERRAIN_DB = [
  { pos:'3번 타일 (1행 3열)', name:'⛰️ 고지대', effect:'배치된 장수 사거리 +2.5m 및 공격력 +20% 상승', tip:'황충·제갈량·사마의 등 원거리 주력 배치 추천' },
  { pos:'7번 타일 (2행 2열)', name:'🔥 화염단', effect:'배치된 장수의 모든 공격에 3초 화상(Burn DoT) 확정 부여', tip:'공속이 빠른 조운·장비 배치 시 화상 무한 중첩' },
  { pos:'9번 타일 (2행 4열)', name:'🌪️ 풍신단', effect:'배치된 장수의 공격속도 +35% 상승', tip:'관우·여포·동탁 등 한 방이 강력한 무장 배치 추천' },
  { pos:'13번 타일 (3행 3열)', name:'☯️ 태극석', effect:'배치된 장수의 치명타 확률 +30% 상승', tip:'군웅 세력 장수 배치 시 치명타 확정급 발동' },
  { pos:'18번 타일 (4행 3열)', name:'🌾 둔전소', effect:'장수 배치 시 5초마다 군량미 +12🌾 자동 생산', tip:'1티어 보병이라도 반드시 올려두어 경제력 확보' }
];

const WEATHER_DB = [
  { name:'☀️ 천시: 쾌청', effect:'전군 사거리 +1.0m 증가', note:'초반 원거리 선제 타격에 유리' },
  { name:'🌪️ 천시: 동남풍', effect:'오(吳)나라 장수 및 [적벽 화공] 스킬 피해량 +40% 증가', note:'화공 스킬을 동남풍 웨이브에 맞춰 쓰면 보스 순삭' },
  { name:'🌧️ 천시: 폭우', effect:'적군 이동속도 -20% 둔화 (화염 피해 소폭 감소)', note:'성루 공성 병기(제갈연노·벽력거) 프리딜 타이밍' },
  { name:'🌫️ 천시: 안개', effect:'사거리 -0.5m 감소 대신 전군 치명타율 +15% 상승', note:'근중거리 맹장들의 폭딜 구간' }
];

const SIEGE_DB = [
  { id:'s_left', name:'🏹 좌성루 제갈연노탑', cost:'초기 80🌾 (+레벨당 60🌾)', cycle:'1.5초', desc:'다연장 3D 석궁 포대. 전방 최대 3명의 적에게 동시 관통 화살 발사.', stamp:'諸葛連弩' },
  { id:'s_right', name:'☄️ 우성루 벽력거(발석차)', cost:'초기 100🌾 (+레벨당 75🌾)', cycle:'3.8초', desc:'거대 3D 지렛대 투석기. 고화력 화염 바위를 던져 확정 치명타와 화상 부여.', stamp:'霹靂投石' },
  { id:'s_cart', name:'🐂 황금 목우유마 보급 수레', cost:'25초마다 자동 출현', cycle:'터치 즉시', desc:'성벽 앞 도로를 횡단하는 황금 소 수레. 터치 시 군량미와 무공 명성(+8🎖️) 즉시 지급.', stamp:'木牛流馬' }
];

const STRATEGY_DB = [
  { id:'oat', name:'🍑 도원결의', grade:'전설', effect:'전체 장수 공격속도 영구 +20% 상승', note:'촉(蜀) 시너지 및 유비 주군 패시브와 곱연산 중첩' },
  { id:'sup', name:'🌾 군량 징발 & 명성', grade:'희귀', effect:'즉시 군량미 +240🌾, 무공 명성 +25🎖️, 내구도 +30 회복', note:'삼고초려 명장 조기 해방용 핵심 카드' },
  { id:'bow', name:'🏹 제갈연노 개량', grade:'전설', effect:'전체 장수 공격력 +25% 및 사거리 +1.5m 증가', note:'후열 장수도 전방 S자 경로 전체 타격 가능' },
  { id:'crt', name:'⚡ 패왕의 기세', grade:'희귀', effect:'전군 치명타 확률 영구 +15% 증가', note:'군웅 시너지 및 태극석 타일과 결합 시 극대화' },
  { id:'rec', name:'📜 구품관인법', grade:'영웅', effect:'장수 모집 시 Tier 2~3 초고속 발탁 확률 2배 증가', note:'후반 고티어(Tier 6~7) 합성 속도 대폭 단축' }
];

const TREE_DOCS = [
  { group:'1. 코어 & 아키텍처', id:'overview', title:'1장. 게임 개요 & 수묵 3D 엔진' },
  { group:'1. 코어 & 아키텍처', id:'merge', title:'2장. 세력 계승 합성 & 자동합체' },
  { group:'2. 전술 & 시너지', id:'factions', title:'3장. 4대 주군 · 세력 · 5대 인연' },
  { group:'2. 전술 & 시너지', id:'terrain', title:'4장. 팔진도 지형 · 천시 · 일기토' },
  { group:'3. 해방 & 음향', id:'liberation', title:'5장. 연대기 등반 & 명장 해방 스토리' },
  { group:'3. 해방 & 음향', id:'audio', title:'6장. Zero-Voice 국악 & 한자 낙관' }
];

const DB_TABS = [
  { group:'통합 데이터베이스', id:'heroes', title:'⚔️ 28인 명장 & 18파츠 3D 도감' },
  { group:'통합 데이터베이스', id:'bonds', title:'🍑 5대 명장 인연 & 4대 주군 DB' },
  { group:'통합 데이터베이스', id:'terrains', title:'☯️ 팔진도 지형 & 천시 기상 DB' },
  { group:'통합 데이터베이스', id:'siege', title:'🏹 성루 공성 병기 & 목우유마 DB' },
  { group:'통합 데이터베이스', id:'strategies', title:'🪶 제갈량의 금낭묘계 DB' }
];

// ============================================================================
// 1. Zero-Voice 국악 타악 신디사이저 & 낙관 시연기
// ============================================================================
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
  gain.gain.setValueAtTime(0.45, now);
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
    gain.gain.setValueAtTime(0.14 / (idx + 1), now);
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

// ============================================================================
// 2. 장수별 고유 디테일 2D 상반신 초상화 생성기 (단색 박스 탈피!)
// ============================================================================
function drawHeroPortraitCanvas(hero) {
  const c = document.createElement('canvas');
  c.width = 140;
  c.height = 160;
  c.className = 'portrait-canvas';
  const ctx = c.getContext('2d');
  const f = FACTION_META[hero.faction];

  // 1. 수묵 그라데이션 배경 & 후광
  const grad = ctx.createRadialGradient(70, 75, 10, 70, 80, 85);
  grad.addColorStop(0, f.color);
  grad.addColorStop(0.55, f.bg);
  grad.addColorStop(1, '#0e121a');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, 140, 160);

  // 배경 한자 워터마크
  ctx.fillStyle = 'rgba(255,255,255,0.07)';
  ctx.font = 'bold 88px serif';
  ctx.textAlign = 'center';
  ctx.fillText(hero.hanja, 70, 110);

  // 신화 광륜(Halo)
  if (hero.halo) {
    ctx.strokeStyle = '#d4af37';
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    ctx.arc(70, 66, 42, 0, Math.PI * 2);
    ctx.stroke();
  }

  // 2. 갑주 어깨 견갑 & 흉갑
  ctx.fillStyle = f.color;
  ctx.beginPath();
  ctx.ellipse(70, 132, 42, 28, 0, Math.PI, 0, false);
  ctx.fill();
  ctx.strokeStyle = '#d4af37';
  ctx.lineWidth = 2;
  ctx.stroke();

  // 좌우 돔형 어깨 견갑
  ctx.fillStyle = '#283244';
  ctx.beginPath();
  ctx.arc(34, 122, 16, Math.PI, 0);
  ctx.arc(106, 122, 16, Math.PI, 0);
  ctx.fill();

  // 3. 얼굴 (관우는 붉은 홍안, 여걸은 밝은 피부톤)
  ctx.fillStyle = hero.redFace ? '#b8332a' : (hero.female ? '#fce7d2' : '#eac096');
  ctx.beginPath();
  ctx.arc(70, 76, 22, 0, Math.PI * 2);
  ctx.fill();

  // 눈 & 눈썹
  ctx.strokeStyle = hero.beard === 'white' ? '#f1f5f9' : '#1e293b';
  ctx.lineWidth = 2.2;
  ctx.beginPath();
  ctx.moveTo(56, 69); ctx.lineTo(65, 72);
  ctx.moveTo(84, 69); ctx.lineTo(75, 72);
  ctx.stroke();

  ctx.fillStyle = '#0f172a';
  ctx.fillRect(58, 73, 4, 4);
  ctx.fillRect(78, 73, 4, 4);

  // 하후돈 외눈 안대
  if (hero.eyepatch) {
    ctx.strokeStyle = '#090d16';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(50, 62); ctx.lineTo(88, 84);
    ctx.stroke();
    ctx.fillStyle = '#090d16';
    ctx.beginPath();
    ctx.arc(60, 74, 6, 0, Math.PI * 2);
    ctx.fill();
  }

  // 4. 장수별 수염 디테일 (장수염 / 폭풍수염 / 백발수염 / 삼각수염)
  if (hero.beard === 'long') {
    ctx.fillStyle = '#111827';
    ctx.beginPath();
    ctx.moveTo(56, 92); ctx.lineTo(70, 146); ctx.lineTo(84, 92);
    ctx.fill();
  } else if (hero.beard === 'wild') {
    ctx.fillStyle = '#1f2937';
    ctx.beginPath();
    ctx.arc(70, 88, 22, 0.1 * Math.PI, 0.9 * Math.PI);
    ctx.fill();
  } else if (hero.beard === 'white') {
    ctx.fillStyle = '#f8fafc';
    ctx.beginPath();
    ctx.moveTo(55, 90); ctx.lineTo(70, 138); ctx.lineTo(85, 90);
    ctx.fill();
  } else if (hero.beard === 'goatee') {
    ctx.fillStyle = '#1e293b';
    ctx.beginPath();
    ctx.moveTo(64, 92); ctx.lineTo(70, 114); ctx.lineTo(76, 92);
    ctx.fill();
  }

  // 5. 투구·관모·꿩깃·여걸 비녀 디테일
  if (hero.helm === 'plumes') {
    // 여포 쌍영 자금관 꿩깃
    ctx.strokeStyle = '#dc2626';
    ctx.lineWidth = 3.5;
    ctx.beginPath();
    ctx.moveTo(64, 52); ctx.quadraticCurveTo(32, 16, 16, 42);
    ctx.moveTo(76, 52); ctx.quadraticCurveTo(108, 16, 124, 42);
    ctx.stroke();
    ctx.fillStyle = '#d4af37';
    ctx.fillRect(54, 48, 32, 10);
  } else if (hero.helm === 'scholar') {
    // 제갈량·사마의·주유 도사관
    ctx.fillStyle = '#1e293b';
    ctx.fillRect(54, 38, 32, 20);
    ctx.strokeStyle = '#d4af37';
    ctx.strokeRect(54, 38, 32, 20);
  } else if (hero.helm === 'crown') {
    // 조조·손권·동탁 면류관
    ctx.fillStyle = '#d4af37';
    ctx.fillRect(48, 44, 44, 12);
  } else if (hero.helm === 'female') {
    // 초선·손상향 쌍계머리 & 금비녀
    ctx.fillStyle = '#18181b';
    ctx.beginPath();
    ctx.arc(70, 62, 23, Math.PI, 0);
    ctx.arc(48, 52, 9, 0, Math.PI * 2);
    ctx.arc(92, 52, 9, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#d4af37';
    ctx.fillRect(42, 48, 12, 3);
    ctx.fillRect(86, 48, 12, 3);
  } else if (hero.helm === 'turban') {
    ctx.fillStyle = hero.faction === 'qun' ? '#ca8a04' : '#b91c1c';
    ctx.fillRect(47, 50, 46, 12);
  } else {
    // 일반 장군 투구 + 붉은 술
    ctx.fillStyle = '#334155';
    ctx.beginPath();
    ctx.arc(70, 62, 24, Math.PI, 0);
    ctx.fill();
    ctx.fillStyle = '#dc2626';
    ctx.beginPath();
    ctx.arc(70, 36, 6, 0, Math.PI * 2);
    ctx.fill();
  }

  // 6. 우측 주무기 실루엣 표시
  ctx.strokeStyle = '#e5c76b';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(114, 145); ctx.lineTo(114, 42);
  ctx.stroke();
  if (hero.weapon === 'fan') {
    ctx.fillStyle = '#f8fafc';
    ctx.beginPath();
    ctx.arc(114, 52, 14, Math.PI * 0.8, Math.PI * 1.9);
    ctx.fill();
  } else if (hero.weapon === 'glaive' || hero.weapon === 'halberd') {
    ctx.fillStyle = '#3d8b6e';
    ctx.beginPath();
    ctx.arc(114, 42, 12, -Math.PI / 2, Math.PI / 2);
    ctx.fill();
  }

  // 7. 좌상단 세력·등급 인장
  ctx.fillStyle = 'rgba(15, 23, 42, 0.85)';
  ctx.fillRect(6, 6, 42, 20);
  ctx.strokeStyle = f.color;
  ctx.lineWidth = 1;
  ctx.strokeRect(6, 6, 42, 20);
  ctx.fillStyle = '#e6e1d6';
  ctx.font = 'bold 11px sans-serif';
  ctx.fillText(`${f.hanja} T${hero.tier}`, 27, 20);

  return c;
}

// ============================================================================
// 3. 18파츠 정밀 3D 캐릭터 + 10종 무기 + 4족 군마/코끼리 조립 엔진
// ============================================================================
function buildDetailedHero3D(hero) {
  const root = new THREE.Group();
  const f = FACTION_META[hero.faction];

  // 1. 팔각 전술 제단 받침대
  const base = new THREE.Mesh(
    new THREE.CylinderGeometry(1.05, 1.2, 0.26, 8),
    new THREE.MeshStandardMaterial({ color: 0x1e2533, metalness: 0.6, roughness: 0.4 })
  );
  base.position.y = -1.25;
  root.add(base);

  const ring = new THREE.Mesh(
    new THREE.RingGeometry(0.92, 1.04, 24),
    new THREE.MeshBasicMaterial({ color: f.hex, side: THREE.DoubleSide })
  );
  ring.rotation.x = -Math.PI / 2;
  ring.position.y = -1.11;
  root.add(ring);

  let yOff = -1.12;

  // 2. 정밀 4족 탈것 (적토마 / 백마 / 흑마 / 남만 코끼리)
  if (hero.mount) {
    const mountGroup = new THREE.Group();
    if (hero.mount === 'elephant') {
      const elMat = new THREE.MeshStandardMaterial({ color: 0x64748b, roughness: 0.7 });
      const body = new THREE.Mesh(new THREE.BoxGeometry(1.1, 0.85, 1.55), elMat);
      body.position.set(0, 0.65, 0);
      const head = new THREE.Mesh(new THREE.SphereGeometry(0.48, 12, 12), elMat);
      head.position.set(0, 0.85, 0.85);
      // 코끼리 귀 2개 + 긴 코 + 흰 상아 2개
      const earL = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.55, 0.45), elMat);
      earL.position.set(-0.48, 0.85, 0.75);
      const earR = earL.clone(); earR.position.x = 0.48;
      const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.08, 0.75, 8), elMat);
      trunk.position.set(0, 0.52, 1.25);
      trunk.rotation.x = 0.35;
      const tuskMat = new THREE.MeshBasicMaterial({ color: 0xf8fafc });
      const tuskL = new THREE.Mesh(new THREE.ConeGeometry(0.07, 0.55, 8), tuskMat);
      tuskL.rotation.x = Math.PI / 2.6; tuskL.position.set(-0.22, 0.65, 1.25);
      const tuskR = tuskL.clone(); tuskR.position.x = 0.22;
      mountGroup.add(body, head, earL, earR, trunk, tuskL, tuskR);
      // 코끼리 4다리
      [[-0.38,-0.55],[0.38,-0.55],[-0.38,0.55],[0.38,0.55]].forEach(([lx,lz]) => {
        const leg = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.16, 0.65, 8), elMat);
        leg.position.set(lx, 0.25, lz);
        mountGroup.add(leg);
      });
      yOff = -0.15;
    } else {
      // 군마 (적토마 red / 백마 white / 흑마 black)
      const hColor = hero.mount === 'red' ? 0x991b1b : hero.mount === 'white' ? 0xe2e8f0 : 0x1e293b;
      const hMat = new THREE.MeshStandardMaterial({ color: hColor, roughness: 0.45 });
      const body = new THREE.Mesh(new THREE.BoxGeometry(0.72, 0.56, 1.35), hMat);
      body.position.set(0, 0.58, 0);
      const neck = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.24, 0.6, 8), hMat);
      neck.position.set(0, 0.92, 0.58);
      neck.rotation.x = 0.45;
      const head = new THREE.Mesh(new THREE.BoxGeometry(0.28, 0.28, 0.52), hMat);
      head.position.set(0, 1.15, 0.78);
      head.rotation.x = 0.35;
      const tail = new THREE.Mesh(new THREE.ConeGeometry(0.12, 0.55, 6), hMat);
      tail.position.set(0, 0.55, -0.78);
      tail.rotation.x = -2.5;
      mountGroup.add(body, neck, head, tail);
      [[-0.25,-0.48],[0.25,-0.48],[-0.25,0.48],[0.25,0.48]].forEach(([lx,lz]) => {
        const leg = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.07, 0.58, 8), hMat);
        leg.position.set(lx, 0.22, lz);
        mountGroup.add(leg);
      });
      yOff = -0.25;
    }
    mountGroup.position.y = -1.12;
    root.add(mountGroup);
  }

  // 3. 두 다리(전투화) + 허리 갑주 치마 + 금빛 벨트
  const legMat = new THREE.MeshStandardMaterial({ color: 0x1e293b });
  const legL = new THREE.Mesh(new THREE.CylinderGeometry(0.13, 0.11, 0.48, 8), legMat);
  legL.position.set(-0.18, yOff + 0.24, 0);
  const legR = legL.clone(); legR.position.x = 0.18;
  root.add(legL, legR);

  const armorMat = new THREE.MeshStandardMaterial({ color: f.hex, metalness: 0.45, roughness: 0.35 });
  const goldMat = new THREE.MeshStandardMaterial({ color: 0xd4af37, metalness: 0.75, roughness: 0.25 });

  const waistSkirt = new THREE.Mesh(new THREE.CylinderGeometry(0.38, 0.48, 0.36, 8), armorMat);
  waistSkirt.position.y = yOff + 0.55;
  const belt = new THREE.Mesh(new THREE.CylinderGeometry(0.40, 0.40, 0.09, 12), goldMat);
  belt.position.y = yOff + 0.72;
  root.add(waistSkirt, belt);

  // 4. 흉갑(Torso) + 양어깨 돔형 견갑 + 등 뒤 망토
  const torso = new THREE.Mesh(new THREE.CylinderGeometry(0.36, 0.38, 0.62, 8), armorMat);
  torso.position.y = yOff + 1.02;
  root.add(torso);

  const pauldronGeo = new THREE.SphereGeometry(0.22, 10, 10, 0, Math.PI * 2, 0, Math.PI / 1.8);
  const paulL = new THREE.Mesh(pauldronGeo, goldMat);
  paulL.position.set(-0.44, yOff + 1.22, 0);
  paulL.rotation.z = 0.35;
  const paulR = paulL.clone();
  paulR.position.x = 0.44;
  paulR.rotation.z = -0.35;
  root.add(paulL, paulR);

  const cape = new THREE.Mesh(
    new THREE.PlaneGeometry(0.76, 1.15),
    new THREE.MeshStandardMaterial({ color: f.hex, side: THREE.DoubleSide, roughness: 0.6 })
  );
  cape.position.set(0, yOff + 0.82, -0.38);
  cape.rotation.x = 0.18;
  root.add(cape);

  // 5. 얼굴 + 눈 + 눈썹 + 하후돈 안대 + 4종 입체 수염
  const skinColor = hero.redFace ? 0xb8332a : (hero.female ? 0xfce7d2 : 0xeac096);
  const head = new THREE.Mesh(
    new THREE.SphereGeometry(0.31, 16, 16),
    new THREE.MeshStandardMaterial({ color: skinColor, roughness: 0.45 })
  );
  head.position.y = yOff + 1.58;
  root.add(head);

  const eyeMat = new THREE.MeshBasicMaterial({ color: 0x0f172a });
  const eyeL = new THREE.Mesh(new THREE.SphereGeometry(0.038, 6, 6), eyeMat);
  eyeL.position.set(-0.11, yOff + 1.61, 0.28);
  const eyeR = eyeL.clone(); eyeR.position.x = 0.11;
  root.add(eyeL, eyeR);

  if (hero.eyepatch) {
    const patch = new THREE.Mesh(new THREE.SphereGeometry(0.075, 8, 8), eyeMat);
    patch.position.set(-0.11, yOff + 1.61, 0.27);
    root.add(patch);
  }

  // 수염 4종 조형
  if (hero.beard === 'long') {
    const bMat = new THREE.MeshStandardMaterial({ color: 0x111827 });
    const bCenter = new THREE.Mesh(new THREE.ConeGeometry(0.16, 0.72, 6), bMat);
    bCenter.rotation.x = Math.PI;
    bCenter.position.set(0, yOff + 1.18, 0.25);
    root.add(bCenter);
  } else if (hero.beard === 'wild') {
    const bMat = new THREE.MeshStandardMaterial({ color: 0x1f2937 });
    for (let i = -2; i <= 2; i++) {
      const spike = new THREE.Mesh(new THREE.ConeGeometry(0.08, 0.28, 5), bMat);
      spike.rotation.x = Math.PI * 0.85;
      spike.position.set(i * 0.09, yOff + 1.42, 0.24);
      root.add(spike);
    }
  } else if (hero.beard === 'white') {
    const bMat = new THREE.MeshStandardMaterial({ color: 0xf8fafc });
    const bWhite = new THREE.Mesh(new THREE.ConeGeometry(0.15, 0.62, 6), bMat);
    bWhite.rotation.x = Math.PI;
    bWhite.position.set(0, yOff + 1.22, 0.25);
    root.add(bWhite);
  } else if (hero.beard === 'goatee') {
    const bMat = new THREE.MeshStandardMaterial({ color: 0x1e293b });
    const gt = new THREE.Mesh(new THREE.ConeGeometry(0.08, 0.28, 5), bMat);
    gt.rotation.x = Math.PI;
    gt.position.set(0, yOff + 1.38, 0.26);
    root.add(gt);
  }

  // 6. 투구·관모·꿩깃·비녀 6종 조형
  if (hero.helm === 'plumes') {
    const crown = new THREE.Mesh(new THREE.CylinderGeometry(0.24, 0.28, 0.22, 10), goldMat);
    crown.position.y = yOff + 1.88;
    root.add(crown);
    const pMat = new THREE.MeshBasicMaterial({ color: 0xdc2626 });
    const pL = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.01, 1.35, 6), pMat);
    pL.position.set(-0.24, yOff + 2.38, -0.22);
    pL.rotation.set(-0.35, 0, 0.32);
    const pR = pL.clone();
    pR.position.x = 0.24;
    pR.rotation.z = -0.32;
    root.add(pL, pR);
  } else if (hero.helm === 'scholar') {
    const hat = new THREE.Mesh(
      new THREE.CylinderGeometry(0.22, 0.26, 0.34, 8),
      new THREE.MeshStandardMaterial({ color: 0x1e293b })
    );
    hat.position.y = yOff + 1.92;
    const band = new THREE.Mesh(new THREE.CylinderGeometry(0.265, 0.265, 0.06, 8), goldMat);
    band.position.y = yOff + 1.82;
    root.add(hat, band);
  } else if (hero.helm === 'crown') {
    const crown = new THREE.Mesh(new THREE.CylinderGeometry(0.28, 0.28, 0.22, 10), goldMat);
    crown.position.y = yOff + 1.88;
    const topBoard = new THREE.Mesh(new THREE.BoxGeometry(0.62, 0.04, 0.72), goldMat);
    topBoard.position.y = yOff + 2.0;
    root.add(crown, topBoard);
  } else if (hero.helm === 'female') {
    const hairMat = new THREE.MeshStandardMaterial({ color: 0x18181b });
    const hair = new THREE.Mesh(new THREE.SphereGeometry(0.32, 12, 12, 0, Math.PI * 2, 0, Math.PI / 1.8), hairMat);
    hair.position.y = yOff + 1.60;
    const bunL = new THREE.Mesh(new THREE.SphereGeometry(0.12, 8, 8), hairMat);
    bunL.position.set(-0.26, yOff + 1.82, -0.05);
    const bunR = bunL.clone(); bunR.position.x = 0.26;
    const pin = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 0.75, 6), goldMat);
    pin.rotation.z = Math.PI / 2;
    pin.position.set(0, yOff + 1.82, -0.05);
    root.add(hair, bunL, bunR, pin);
  } else if (hero.helm === 'turban') {
    const tMat = new THREE.MeshStandardMaterial({ color: hero.faction === 'qun' ? 0xca8a04 : 0x991b1b });
    const turb = new THREE.Mesh(new THREE.CylinderGeometry(0.32, 0.32, 0.16, 12), tMat);
    turb.position.y = yOff + 1.78;
    root.add(turb);
  } else {
    const helm = new THREE.Mesh(
      new THREE.SphereGeometry(0.33, 12, 12, 0, Math.PI * 2, 0, Math.PI / 1.8),
      new THREE.MeshStandardMaterial({ color: 0x334155, metalness: 0.7, roughness: 0.3 })
    );
    helm.position.y = yOff + 1.60;
    const crest = new THREE.Mesh(new THREE.ConeGeometry(0.09, 0.28, 6), new THREE.MeshBasicMaterial({ color: 0xdc2626 }));
    crest.position.y = yOff + 1.98;
    root.add(helm, crest);
  }

  if (hero.halo) {
    const halo = new THREE.Mesh(new THREE.TorusGeometry(0.68, 0.04, 8, 28), goldMat);
    halo.position.set(0, yOff + 1.55, -0.28);
    root.add(halo);
  }

  // 7. 왼팔 보조장비 (쌍검 / 보주 / 방패) & 오른팔 10종 전용 무기 조립
  const steelMat = new THREE.MeshStandardMaterial({ color: 0xe2e8f0, metalness: 0.85, roughness: 0.2 });
  const shaftMat = new THREE.MeshStandardMaterial({ color: 0x78350f, roughness: 0.5 });

  // 왼손 보조 파츠
  const leftHand = new THREE.Group();
  leftHand.position.set(-0.52, yOff + 0.95, 0.18);
  if (hero.weapon === 'dual') {
    const bladeL = new THREE.Mesh(new THREE.BoxGeometry(0.08, 1.05, 0.16), steelMat);
    bladeL.position.y = 0.45;
    leftHand.add(bladeL);
  } else if (hero.weapon === 'fan') {
    const orb = new THREE.Mesh(new THREE.OctahedronGeometry(0.18, 0), goldMat);
    orb.position.y = 0.15;
    leftHand.add(orb);
  } else if (hero.weapon === 'sword') {
    const shield = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.68, 0.48), armorMat);
    leftHand.add(shield);
  }
  root.add(leftHand);

  // 오른손 주무기 10종 정밀 조립
  const rightHand = new THREE.Group();
  rightHand.position.set(0.54, yOff + 0.95, 0.15);

  if (hero.weapon === 'glaive') {
    // 청룡언월도: 긴 자루 + 황금 용머리 코등이 + 휘어진 초승달 대도
    const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.045, 0.045, 1.9, 8), shaftMat);
    pole.position.y = 0.4;
    const guard = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.14, 0.18), goldMat);
    guard.position.y = 1.32;
    const blade = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.72, 0.32), steelMat);
    blade.position.set(0, 1.68, 0.08);
    const tip = new THREE.Mesh(new THREE.ConeGeometry(0.16, 0.35, 4), steelMat);
    tip.position.set(0, 2.12, 0.04);
    rightHand.add(pole, guard, blade, tip);
  } else if (hero.weapon === 'halberd') {
    // 방천화극: 긴 자루 + 중앙 창날 + 양옆 초승달 날
    const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.045, 0.045, 2.0, 8), shaftMat);
    pole.position.y = 0.45;
    const tip = new THREE.Mesh(new THREE.ConeGeometry(0.12, 0.55, 4), steelMat);
    tip.position.y = 1.65;
    const crescentL = new THREE.Mesh(new THREE.TorusGeometry(0.24, 0.045, 6, 12, Math.PI), goldMat);
    crescentL.rotation.z = Math.PI / 2;
    crescentL.position.set(-0.08, 1.35, 0);
    const crescentR = crescentL.clone();
    crescentR.rotation.z = -Math.PI / 2;
    crescentR.position.x = 0.08;
    rightHand.add(pole, tip, crescentL, crescentR);
  } else if (hero.weapon === 'snake') {
    // 장팔사모: 구불구불한 뱀 모양 창날
    const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.045, 0.045, 1.8, 8), shaftMat);
    pole.position.y = 0.35;
    for (let s = 0; s < 4; s++) {
      const seg = new THREE.Mesh(new THREE.BoxGeometry(0.07, 0.24, 0.12), steelMat);
      seg.position.set((s % 2 === 0 ? 0.05 : -0.05), 1.32 + s * 0.18, 0);
      seg.rotation.z = s % 2 === 0 ? 0.35 : -0.35;
      rightHand.add(seg);
    }
    rightHand.add(pole);
  } else if (hero.weapon === 'bow') {
    // 철태궁: 곡선 활대 + 활시위
    const bowArc = new THREE.Mesh(new THREE.TorusGeometry(0.58, 0.05, 8, 18, Math.PI), goldMat);
    bowArc.rotation.z = -Math.PI / 2;
    bowArc.position.y = 0.35;
    const str = new THREE.Mesh(new THREE.CylinderGeometry(0.01, 0.01, 1.15, 4), steelMat);
    str.position.y = 0.35;
    rightHand.add(bowArc, str);
  } else if (hero.weapon === 'fan') {
    // 백우선: 7갈래로 펼쳐진 입체 부채
    const featherMat = new THREE.MeshStandardMaterial({ color: hero.faction === 'wei' ? 0x334155 : 0xf8fafc });
    for (let a = -3; a <= 3; a++) {
      const fMesh = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.52, 0.03), featherMat);
      fMesh.position.set(a * 0.06, 0.42, 0);
      fMesh.rotation.z = -a * 0.16;
      rightHand.add(fMesh);
    }
  } else if (hero.weapon === 'axe') {
    // 개산대부
    const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 1.7, 8), shaftMat);
    pole.position.y = 0.35;
    const axeHead = new THREE.Mesh(new THREE.CylinderGeometry(0.42, 0.42, 0.12, 12), steelMat);
    axeHead.rotation.z = Math.PI / 2;
    axeHead.position.set(0.15, 1.15, 0);
    rightHand.add(pole, axeHead);
  } else if (hero.weapon === 'mace') {
    // 철추
    const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 1.5, 8), shaftMat);
    pole.position.y = 0.3;
    const ball = new THREE.Mesh(new THREE.DodecahedronGeometry(0.28, 0), steelMat);
    ball.position.y = 1.15;
    rightHand.add(pole, ball);
  } else if (hero.weapon === 'sword' || hero.weapon === 'dual') {
    // 보검
    const guard = new THREE.Mesh(new THREE.BoxGeometry(0.28, 0.08, 0.14), goldMat);
    guard.position.y = 0.15;
    const blade = new THREE.Mesh(new THREE.BoxGeometry(0.07, 1.15, 0.16), steelMat);
    blade.position.y = 0.75;
    rightHand.add(guard, blade);
  } else {
    // 용담은창 / 장창
    const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.042, 0.042, 1.95, 8), shaftMat);
    pole.position.y = 0.45;
    const tassel = new THREE.Mesh(new THREE.ConeGeometry(0.11, 0.22, 8), new THREE.MeshBasicMaterial({ color: 0xdc2626 }));
    tassel.position.y = 1.38;
    const spearTip = new THREE.Mesh(new THREE.ConeGeometry(0.11, 0.52, 4), steelMat);
    spearTip.position.y = 1.68;
    rightHand.add(pole, tassel, spearTip);
  }
  root.add(rightHand);

  // 8. 등 뒤 고전 비단 군기
  const flagPole = new THREE.Mesh(new THREE.CylinderGeometry(0.028, 0.028, 2.3, 6), goldMat);
  flagPole.position.set(-0.38, yOff + 1.15, -0.44);
  root.add(flagPole);

  const bc = document.createElement('canvas');
  bc.width = 96; bc.height = 160;
  const bctx = bc.getContext('2d');
  bctx.fillStyle = f.bg;
  bctx.fillRect(0, 0, 96, 160);
  bctx.strokeStyle = '#d4af37';
  bctx.lineWidth = 5;
  bctx.strokeRect(4, 4, 88, 152);
  bctx.fillStyle = '#e6e1d6';
  bctx.font = 'bold 54px serif';
  bctx.textAlign = 'center';
  bctx.fillText(hero.hanja, 48, 92);
  bctx.fillStyle = '#d4af37';
  bctx.font = 'bold 16px sans-serif';
  bctx.fillText(hero.name, 48, 134);

  const bannerMesh = new THREE.Mesh(
    new THREE.PlaneGeometry(0.78, 1.32),
    new THREE.MeshBasicMaterial({ map: new THREE.CanvasTexture(bc), side: THREE.DoubleSide })
  );
  bannerMesh.position.set(-0.38, yOff + 1.55, -0.50);
  root.add(bannerMesh);

  return root;
}

// ============================================================================
// 4. 세이브 데이터 연동 및 위키 본문(#/tree/*) 렌더러
// ============================================================================
let currentFactionFilter = 'all';
let currentTierFilter = 0;
let currentUnlockFilter = 'all';

function getSaveData() {
  const defaultIds = HERO_DB.filter(h => h.unlockWave <= 1).map(h => h.id);
  try {
    const raw = localStorage.getItem(SAVE_KEY);
    if (!raw) return { unlockedSet: new Set(defaultIds), fame: 30, bestWave: 1 };
    const data = JSON.parse(raw);
    const merged = new Set([...defaultIds, ...(Array.isArray(data.unlockedIds) ? data.unlockedIds : [])]);
    return {
      unlockedSet: merged,
      fame: Number(data.fame) || 30,
      bestWave: Number(data.bestWave || data.wave) || 1
    };
  } catch (e) {
    return { unlockedSet: new Set(defaultIds), fame: 30, bestWave: 1 };
  }
}

function renderTreeArticle(docId, saveInfo) {
  const main = document.getElementById('wiki-main');
  const unlockedCnt = saveInfo.unlockedSet.size;
  let title = '', bodyHtml = '', tocHtml = '';

  if (docId === 'merge') {
    title = '2장. 세력 계승 합성(Faction Inheritance) & 자동합체 공식';
    bodyHtml = `
      <h2 id="s1">⚖️ 세력 계승 합성 법칙</h2>
      <p>본작은 무작위 합성의 스트레스를 없애고 원하는 세력 덱을 100% 의도대로 구축할 수 있도록 <strong>세력 계승 합성 공식</strong>을 적용합니다.</p>
      <table class="wiki-table">
        <tr><th>합성 조합 조건</th><th>상위 Tier 등장 결과</th><th>전술적 활용</th></tr>
        <tr><td><strong>동일 세력 + 동일 Tier</strong><br>(예: 촉 T3 황충 + 촉 T3 황충)</td><td><strong>100% 같은 세력</strong> 상위 장수<br>(촉 T4 조운 확정 승급)</td><td>원하는 세력의 신화 무장(제갈량·조조·손권·여포) 확정 저격</td></tr>
        <tr><td><strong>타 세력 + 동일 Tier</strong><br>(예: 촉 T3 황충 + 위 T3 서황)</td><td>두 재료 세력 중 <strong>50 : 50</strong> 확률 승급</td><td>그리드 포화 해소 및 유연한 티어업</td></tr>
      </table>
      <h2 id="s2">📐 원터치 자동합체 & 장수 해산(환급)</h2>
      <ul>
        <li><strong>[📐 합체] 버튼</strong>: 상단 HUD의 합체 버튼을 누르면 그리드 내 동일 세력·동일 등급 장수를 최우선으로 찾아 즉시 합성합니다.</li>
        <li><strong>하단 드롭 해산</strong>: 장수를 드래그하여 하단 해산 구역에 놓으면 <code>Math.floor(현재 모집 비용 × 장수 Tier × 0.5)</code> 군량미를 즉시 환급받습니다.</li>
      </ul>`;
    tocHtml = `<li><a href="#s1">1. 세력 계승 합성 법칙</a></li><li><a href="#s2">2. 자동합체 & 해산 공식</a></li>`;
  } else if (docId === 'factions') {
    title = '3장. 4대 주군 패시브 · 세력 시너지 · 5대 명장 인연';
    bodyHtml = `
      <h2 id="s1">👑 4대 주군 패시브 & 세력 시너지</h2>
      <table class="wiki-table">
        <tr><th>세력</th><th>출진 주군 패시브 (상시)</th><th>그리드 3인 이상 배치 시너지</th></tr>
        ${Object.values(FACTION_META).map(f => `<tr><td><strong style="color:${f.color}">${f.name}</strong></td><td>${f.lord}</td><td>${f.syn}</td></tr>`).join('')}
      </table>
      <h2 id="s2">🍑 5대 명장 인연(Bond) 시너지 매트릭스</h2>
      <table class="wiki-table">
        <tr><th>인연 명칭</th><th>대상 명장</th><th>발동 조건</th><th>발동 효과</th></tr>
        ${BOND_DB.map(b => `<tr><td><strong>${b.name}</strong></td><td>${b.members}</td><td>${b.cond}</td><td>${b.effect}</td></tr>`).join('')}
      </table>`;
    tocHtml = `<li><a href="#s1">1. 주군 패시브 & 세력 시너지</a></li><li><a href="#s2">2. 5대 명장 인연 매트릭스</a></li>`;
  } else if (docId === 'terrain') {
    title = '4장. 팔진도 5대 전술 지형 · 천시(기상) · 보스 일기토';
    bodyHtml = `
      <h2 id="s1">☯️ 팔진도 5대 특수 전술 지형</h2>
      <table class="wiki-table">
        <tr><th>그리드 위치</th><th>지형 명칭</th><th>전술 효과</th><th>추천 배치</th></tr>
        ${TERRAIN_DB.map(t => `<tr><td>${t.pos}</td><td><strong>${t.name}</strong></td><td>${t.effect}</td><td>${t.tip}</td></tr>`).join('')}
      </table>
      <h2 id="s2">🌦️ 4대 천시(기상 변화) & 보스 일기토(一騎討)</h2>
      <table class="wiki-table">
        <tr><th>기상 상태</th><th>전장 환경 변화</th><th>전술 활용</th></tr>
        ${WEATHER_DB.map(w => `<tr><td><strong>${w.name}</strong></td><td>${w.effect}</td><td>${w.note}</td></tr>`).join('')}
      </table>
      <p><strong>⚔️ 보스 일기토</strong>: 5웨이브마다 보스 출현 시 5초간 연타 대결이 열리며, 8타 이상 적중 시 추가 군량미와 <strong>무공 명성(+15🎖️)</strong>을 획득합니다.</p>`;
    tocHtml = `<li><a href="#s1">1. 팔진도 5대 전술 지형</a></li><li><a href="#s2">2. 천시 기상 & 보스 일기토</a></li>`;
  } else if (docId === 'liberation') {
    title = '5장. 삼국지 연대기 등반 & 중요 명장 해방(삼고초려) 시스템';
    bodyHtml = `
      <h2 id="s1">📜 스테이지 등반 해방 & 삼고초려 조기 영입</h2>
      <p>Tier 1~3 장수(12인)는 기본 해방되어 있으며, <strong>Tier 4~7 핵심 명장 16인은 캠페인 스테이지(제2장~제20장)를 돌파할 때 역사 스토리와 함께 자동 해방</strong>되거나, 전투에서 모은 <strong>무공 명성(🎖️)으로 본영에서 즉시 삼고초려 영입</strong>할 수 있습니다.</p>
      <table class="wiki-table">
        <tr><th>해방 장수</th><th>등급·세력</th><th>자동 해방 스테이지</th><th>삼고초려 명성</th><th>역사 해방 스토리</th></tr>
        ${HERO_DB.filter(h => h.unlockWave > 1).map(h => `<tr>
          <td><strong>${h.name} (${h.hanja})</strong></td>
          <td>T${h.tier} ${FACTION_META[h.faction].name}</td>
          <td>제${h.unlockWave}장 돌파</td>
          <td>${h.fameCost}🎖️</td>
          <td>${h.story}</td>
        </tr>`).join('')}
      </table>`;
    tocHtml = `<li><a href="#s1">1. 연대기 해방 & 삼고초려 일람</a></li>`;
  } else if (docId === 'audio') {
    title = '6장. Zero-Voice 국악 신디사이저 & 한자 낙관(Stamp) 연출';
    bodyHtml = `
      <h2 id="s1">🥁 성우/TTS 완전 배제 (Zero-Voice Policy)</h2>
      <p>어색한 기계음(TTS)을 100% 배제하고, 순수 Web Audio 수식 합성과 전서체 한자 낙관(Stamp) 임팩트로 전장의 위엄을 전달합니다.</p>
      <table class="wiki-table">
        <tr><th>음향 모듈</th><th>Web Audio 수식 설계</th><th>직접 청음 시연</th></tr>
        <tr><td><strong>전장 대북 (War Drum)</strong></td><td><code>68Hz → 24Hz</code> 지수 하강 사인파</td><td><button class="demo-btn" onclick="playWikiWarDrum()">🥁 대북 울리기</button></td></tr>
        <tr><td><strong>청동 징 (Battle Gong)</strong></td><td><code>[210, 296.1, 405.3, 560.7]Hz</code> 금속 배음</td><td><button class="demo-btn" onclick="playWikiGong()">🔔 청동 징 울리기</button></td></tr>
        <tr><td><strong>무쌍 한자 낙관</strong></td><td>대북+징 동시 공명 & 전서체 인장 타격</td><td><button class="demo-btn" onclick="demoStamp('天下無雙', '무신 여포 [Tier 7] 강림!')">💮 天下無雙 찍기</button></td></tr>
      </table>`;
    tocHtml = `<li><a href="#s1">1. Zero-Voice 사운드 시연</a></li>`;
  } else {
    title = '1장. 게임 개요 & 수묵·금석 18파츠 3D 엔진';
    bodyHtml = `
      <h2 id="s1">🏛️ 프로젝트 아키텍처 개요</h2>
      <p><strong>《삼국지 3D 무쌍 방어전》</strong>은 눈의 피로를 없앤 <strong>고전 수묵·칠기 다크 테마</strong>와 <strong>18파츠 정밀 3D 캐릭터 조형(투구·수염·안대·꿩깃·갑주·망토·10종 전용 무기·4족 적토마/코끼리)</strong>으로 구동되는 전술 머지 디펜스입니다.</p>
      <table class="wiki-table">
        <tr><th>핵심 지표</th><th>명세</th></tr>
        <tr><td><strong>정예 28인 로스터</strong></td><td>촉·위·오·군웅 4대 세력 × 7등급 = <strong>28인 전 장수 고유 2D 초상화 & 18파츠 3D 조형</strong></td></tr>
        <tr><td><strong>내 전장 기록 연동</strong></td><td>해방 명장 <strong>${unlockedCnt} / 28인</strong> (화력 보너스 <strong>+${unlockedCnt * 2}%</strong>) · 최고 도달 <strong>제${saveInfo.bestWave}장</strong> · 보유 명성 <strong>${saveInfo.fame}🎖️</strong></td></tr>
      </table>
      <p><a href="#/db/heroes" class="return-btn" style="display:inline-block;margin-top:8px;">🗂️ 28인 명장 초상화 & 18파츠 3D 도감 열기 →</a></p>`;
    tocHtml = `<li><a href="#s1">1. 아키텍처 개요</a></li>`;
  }

  main.innerHTML = `
    <div class="breadcrumb">ARCHIVE // TREE // ${docId.toUpperCase()}</div>
    <div class="article-layout">
      <article class="article-body"><h1>${title}</h1>${bodyHtml}</article>
      <aside class="article-aside">
        <div class="aside-title">📑 문서 목차</div>
        <ul class="toc-list">${tocHtml}</ul>
        <div class="aside-title" style="margin-top:16px;">📊 내 전장 세이브 연동</div>
        <div style="font-size:12px;color:var(--text-sub);line-height:1.7;">
          • 해방 명장: <b style="color:var(--gold-soft)">${unlockedCnt} / 28</b><br>
          • 해방 화력 보너스: <b style="color:#6ee7b7">+${unlockedCnt * 2}%</b><br>
          • 보유 무공 명성: <b style="color:#e6e1d6">${saveInfo.fame} 🎖️</b><br>
          • 최고 도달 기록: <b>제${saveInfo.bestWave}장</b>
        </div>
      </aside>
    </div>`;
}

// ============================================================================
// 5. 통합 도감·DB(#/db/*) 렌더러
// ============================================================================
function renderDbView(subRoute, saveInfo) {
  const main = document.getElementById('wiki-main');
  const unlockedSet = saveInfo.unlockedSet;
  const query = (document.getElementById('wiki-search').value || '').trim().toLowerCase();

  if (subRoute === 'bonds') {
    main.innerHTML = `
      <div class="breadcrumb">DATABASE // BONDS & LORDS</div>
      <div class="article-body">
        <h1>🍑 5대 명장 인연 & 4대 주군 패시브 DB</h1>
        <h2>1. 5대 명장 인연(Bond) 시너지</h2>
        <table class="wiki-table">
          <tr><th>인연 명칭</th><th>필요 명장</th><th>발동 조건</th><th>발동 효과</th></tr>
          ${BOND_DB.map(b => `<tr><td><strong>${b.name}</strong></td><td>${b.members}</td><td>${b.cond}</td><td>${b.effect}</td></tr>`).join('')}
        </table>
        <h2>2. 4대 주군 출진 패시브</h2>
        <table class="wiki-table">
          <tr><th>세력</th><th>주군 및 상시 패시브</th><th>3인 세력 시너지</th></tr>
          ${Object.values(FACTION_META).map(f => `<tr><td><strong style="color:${f.color}">${f.name}</strong></td><td>${f.lord}</td><td>${f.syn}</td></tr>`).join('')}
        </table>
      </div>`;
    return;
  }

  if (subRoute === 'terrains') {
    main.innerHTML = `
      <div class="breadcrumb">DATABASE // TERRAINS & WEATHER</div>
      <div class="article-body">
        <h1>☯️ 팔진도 5대 지형 & 4대 천시(기상) DB</h1>
        <h2>1. 팔진도 5대 전술 지형</h2>
        <table class="wiki-table">
          <tr><th>위치</th><th>지형명</th><th>효과</th><th>전술 팁</th></tr>
          ${TERRAIN_DB.map(t => `<tr><td>${t.pos}</td><td><strong>${t.name}</strong></td><td>${t.effect}</td><td>${t.tip}</td></tr>`).join('')}
        </table>
        <h2>2. 4대 천시(기상 변화)</h2>
        <table class="wiki-table">
          <tr><th>천시 명칭</th><th>효과</th><th>운용 팁</th></tr>
          ${WEATHER_DB.map(w => `<tr><td><strong>${w.name}</strong></td><td>${w.effect}</td><td>${w.note}</td></tr>`).join('')}
        </table>
      </div>`;
    return;
  }

  if (subRoute === 'siege') {
    main.innerHTML = `
      <div class="breadcrumb">DATABASE // SIEGE & SUPPLY</div>
      <div class="article-body">
        <h1>🏹 성루 3D 공성 병기 & 목우유마 DB</h1>
        <table class="wiki-table">
          <tr><th>명칭</th><th>비용</th><th>주기</th><th>상세 설명</th><th>낙관 시연</th></tr>
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

  // 기본: 28인 명장 DB (고유 2D 상반신 초상화 + 상세 스탯 + 해방 조건)
  const filtered = HERO_DB.filter(h => {
    if (currentFactionFilter !== 'all' && h.faction !== currentFactionFilter) return false;
    if (currentTierFilter > 0 && h.tier !== currentTierFilter) return false;
    if (currentUnlockFilter === 'unlocked' && !unlockedSet.has(h.id)) return false;
    if (currentUnlockFilter === 'locked' && unlockedSet.has(h.id)) return false;
    if (query) {
      const hay = `${h.name} ${h.hanja} ${h.stamp} ${h.wName} ${h.desc} ${h.story} ${h.bonds.join(' ')}`.toLowerCase();
      if (!hay.includes(query)) return false;
    }
    return true;
  });

  main.innerHTML = `
    <div class="breadcrumb">DATABASE // HEROES (${filtered.length} / 28)</div>
    <h1 style="color:var(--gold-soft);font-size:21px;">⚔️ 삼국지 28인 명장 초상화 & 18파츠 3D 도감</h1>
    <p style="font-size:13px;color:var(--text-sub);margin-top:4px;">카드를 클릭하면 <strong>투구·수염·안대·꿩깃·전용 무기·군마/코끼리가 구현된 18파츠 3D 피규어</strong>를 360° 회전하며 감상할 수 있습니다.</p>
    <div class="db-filter-bar">
      <button class="filter-btn ${currentFactionFilter === 'all' ? 'active' : ''}" onclick="setWikiFilter('faction','all')">전체 세력</button>
      <button class="filter-btn ${currentFactionFilter === 'shu' ? 'active' : ''}" onclick="setWikiFilter('faction','shu')">🟢 촉(蜀)</button>
      <button class="filter-btn ${currentFactionFilter === 'wei' ? 'active' : ''}" onclick="setWikiFilter('faction','wei')">🔵 위(魏)</button>
      <button class="filter-btn ${currentFactionFilter === 'wu' ? 'active' : ''}" onclick="setWikiFilter('faction','wu')">🔴 오(吳)</button>
      <button class="filter-btn ${currentFactionFilter === 'qun' ? 'active' : ''}" onclick="setWikiFilter('faction','qun')">🟣 군웅(群)</button>
      <button class="filter-btn ${currentTierFilter === 0 ? 'active' : ''}" onclick="setWikiFilter('tier',0)">전 등급</button>
      ${[1,2,3,4,5,6,7].map(t => `<button class="filter-btn ${currentTierFilter === t ? 'active' : ''}" onclick="setWikiFilter('tier',${t})">T${t}</button>`).join('')}
      <button class="filter-btn ${currentUnlockFilter === 'all' ? 'active' : ''}" onclick="setWikiFilter('unlock','all')">전체</button>
      <button class="filter-btn ${currentUnlockFilter === 'unlocked' ? 'active' : ''}" onclick="setWikiFilter('unlock','unlocked')">✅ 해방됨</button>
      <button class="filter-btn ${currentUnlockFilter === 'locked' ? 'active' : ''}" onclick="setWikiFilter('unlock','locked')">🔒 미해방</button>
    </div>
    <div class="db-grid" id="hero-db-grid"></div>`;

  const gridEl = document.getElementById('hero-db-grid');
  filtered.forEach(hero => {
    const isUnlocked = unlockedSet.has(hero.id);
    const card = document.createElement('div');
    card.className = `db-card ${isUnlocked ? 'unlocked' : ''}`;
    card.innerHTML = `
      <span class="unlock-tag ${isUnlocked ? 'yes' : 'no'}">${isUnlocked ? '✅ 해방됨' : `🔒 제${hero.unlockWave}장`}</span>
      <div class="portrait-slot"></div>
      <div class="card-title">T${hero.tier} ${hero.name} (${hero.hanja})</div>
      <div class="card-sub">${FACTION_META[hero.faction].name} · ${hero.wName}</div>
      <div class="card-meta">
        <span>공격: <b>${hero.atk}</b></span>
        <span>공속: <b>${hero.spd}/s</b></span>
        <span>사거리: <b>${hero.range}m</b></span>
        <span>탈것: <b>${hero.mount === 'red' ? '적토마' : hero.mount === 'white' ? '백마' : hero.mount === 'black' ? '흑마' : hero.mount === 'elephant' ? '코끼리' : '보병'}</b></span>
      </div>
      <div class="card-lib-info">${hero.unlockWave === 1 ? '기본 참전 무장' : `제${hero.unlockWave}장 해방 / 삼고초려 ${hero.fameCost}🎖️`}</div>
      <div class="card-stamp">${hero.stamp}</div>`;
    card.querySelector('.portrait-slot').appendChild(drawHeroPortraitCanvas(hero));
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

// ============================================================================
// 6. <dialog> 18파츠 정밀 3D 피규어 360도 뷰어 및 라우터 (잘린 뒷부분 전체)
// ============================================================================
let dialogRenderer = null, dialogScene = null, dialogCamera = null, dialogHeroMesh = null, dialogAnimId = null;

function openHero3DDialog(hero, isUnlocked) {
  const dlg = document.getElementById('hero-dialog');
  const infoBox = document.getElementById('dialog-info-box');
  const f = FACTION_META[hero.faction];

  infoBox.innerHTML = `
    <div>
      <div style="font-size:12px;color:${f.color};font-weight:800;">${f.name} · Tier ${hero.tier}</div>
      <h2 style="font-size:21px;color:var(--gold-soft);margin:4px 0 6px;">${hero.name} (${hero.hanja})</h2>
      <p style="font-size:13px;color:var(--text-main);margin-bottom:8px;">${hero.desc}</p>
      <div style="font-size:11px;color:var(--gold-soft);background:rgba(212,175,55,0.1);padding:6px 8px;border-radius:6px;margin-bottom:10px;">
        📜 <strong>해방 조건</strong>: ${hero.unlockWave === 1 ? '제1장 초기 해방' : `제${hero.unlockWave}장 돌파 또는 삼고초려 ${hero.fameCost}🎖️`}<br>
        ${hero.story}
      </div>
      <table class="wiki-table" style="margin-bottom:10px;">
        <tr><th>전용 무기</th><td>${hero.wName}</td><th>해방 상태</th><td>${isUnlocked ? '✅ 해방 완료' : '🔒 미해방'}</td></tr>
        <tr><th>1성 / 3성 공격력</th><td>${hero.atk} / <b>${Math.floor(hero.atk * 1.56)}</b></td><th>공격 속도</th><td>${hero.spd}/s</td></tr>
        <tr><th>사거리</th><td>${hero.range}m</td><th>소속 인연</th><td>${hero.bonds.length ? hero.bonds.join(', ') : '세력 기본 시너지'}</td></tr>
      </table>
      <button class="demo-btn" onclick="demoStamp('${hero.stamp}', '${hero.name} [Tier ${hero.tier}] 출진!')">🥁 '${hero.stamp}' 낙관 & 대북 시연</button>
    </div>
    <button class="dialog-close" id="close-hero-dialog">닫기 (ESC)</button>`;

  document.getElementById('close-hero-dialog').onclick = () => dlg.close();
  dlg.showModal();

  const stage = document.getElementById('dialog-3d-stage');
  const w = stage.clientWidth || 300;
  const h = stage.clientHeight || 360;

  if (!dialogRenderer) {
    dialogRenderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    dialogRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    stage.insertBefore(dialogRenderer.domElement, stage.firstChild);
    dialogScene = new THREE.Scene();
    dialogCamera = new THREE.PerspectiveCamera(40, w / h, 0.1, 100);
    dialogCamera.position.set(0, 0.7, 5.2);
    dialogCamera.lookAt(0, 0.05, 0);

    dialogScene.add(new THREE.HemisphereLight(0xfff5e4, 0x1e2636, 0.95));
    const dl = new THREE.DirectionalLight(0xfffaed, 1.1);
    dl.position.set(4, 7, 6);
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
  dialogCamera.aspect = w / h;
  dialogCamera.updateProjectionMatrix();

  if (dialogHeroMesh) dialogScene.remove(dialogHeroMesh);
  dialogHeroMesh = buildDetailedHero3D(hero);
  dialogScene.add(dialogHeroMesh);

  if (dialogAnimId) cancelAnimationFrame(dialogAnimId);
  function loop() {
    if (!dlg.open) return;
    dialogAnimId = requestAnimationFrame(loop);
    if (dialogHeroMesh) dialogHeroMesh.rotation.y += 0.007;
    dialogRenderer.render(dialogScene, dialogCamera);
  }
  loop();
}

function renderRouter() {
  const hash = location.hash || '#/tree/overview';
  const saveInfo = getSaveData();
  const cnt = saveInfo.unlockedSet.size;
  document.getElementById('sync-badge').textContent = `📖 해방 동기화: ${cnt}/28 (+${cnt * 2}%)`;

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
    renderDbView(sub, saveInfo);
  } else {
    const docId = hash.split('/')[2] || 'overview';
    renderTreeArticle(docId, saveInfo);
  }
}

function drawHeaderLogo() {
  const c = document.getElementById('wiki-logo');
  if (!c) return;
  const ctx = c.getContext('2d');
  ctx.fillStyle = '#1e2533';
  ctx.beginPath();
  ctx.arc(17, 17, 15, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = '#d4af37';
  ctx.lineWidth = 2;
  ctx.stroke();
  ctx.fillStyle = '#d4af37';
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
});
// === END OF WIKI.JS ===
