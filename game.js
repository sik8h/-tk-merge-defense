/* ==========================================================================
   Three Kingdoms 3D Merge Defense - 120 Heroes & Bagua Tactical Engine
   ========================================================================== */

/* 1. 120-Hero Compact DB Parser */
const RAW_HEROES_COMPACT = [
  // id|tier|name|hanja|faction|weapon|mount|head|beard|isCoreLocked|unlockCost|unlockCond|skillDesc
  // --- Tier 1: 16 Default Troops (All Unlocked) ---
  "1|1|촉나라 단궁병|劉|촉|bow|none|headband|none|0|0||기본 촉나라 의용 궁병",
  "2|1|촉나라 창수|關|촉|spear|none|headband|none|0|0||기본 촉나라 보병",
  "3|1|위나라 단도병|曹|위|sword|none|headband|none|0|0||기본 위나라 단도병",
  "4|1|위나라 보병|夏|위|spear|none|headband|none|0|0||기본 위나라 장창병",
  "5|1|오나라 수병|孫|오|sword|none|headband|none|0|0||기본 오나라 수병",
  "6|1|오나라 궁병|甘|오|bow|none|headband|none|0|0||기본 오나라 강궁병",
  "7|1|군웅 의용병|黃|군웅|bow|none|headband|none|0|0||기본 황건적 의용병",
  "8|1|군웅 산적|張|군웅|sword|none|headband|beard_short|0|0||기본 군웅 산적",
  "9|1|촉나라 낭선병|張|촉|spear|none|headband|none|0|0||촉나라 대나무 낭선병",
  "10|1|위나라 돌격병|許|위|sword|none|headband|none|0|0||위나라 경갑 돌격병",
  "11|1|오나라 노수|陸|오|bow|none|headband|none|0|0||오나라 석궁 노수",
  "12|1|군웅 기병|董|군웅|spear|horse|headband|none|0|0||기본 동탁군 서량 기병",
  "13|1|촉나라 신궁병|趙|촉|bow|none|headband|none|0|0||촉나라 훈련 신궁병",
  "14|1|위나라 철갑병|張|위|spear|none|helmet|none|0|0||위나라 중장 철갑병",
  "15|1|오나라 화병|周|오|fan|none|headband|none|0|0||오나라 화염 투척병",
  "16|1|군웅 주술사|張|군웅|staff|none|headband|beard_white|0|0||군웅 태평도 주술사",

  // --- Tier 2: 20 Novice Generals (All Unlocked) ---
  "17|2|미축|彌|촉|sword|none|headband|none|0|0||촉나라 재정 및 보급 보좌",
  "18|2|손건|孫|촉|sword|none|headband|none|0|0||촉나라 외교 및 내정 보좌",
  "19|2|간옹|簡|촉|sword|none|headband|beard_short|0|0||촉나라 유비의 고향 벗",
  "20|2|유봉|劉|촉|spear|none|helmet|none|0|0||유비의 양자 장수",
  "21|2|관평(청년)|關|촉|crescent|none|helmet|none|0|0||관우의 장남 용맹 장수",
  "22|2|조홍|曹|위|sword|none|helmet|none|0|0||위나라 조조의 충직한 사촌",
  "23|2|조휴|曹|위|spear|horse|helmet|none|0|0||위나라 천리마 호위 장수",
  "24|2|조진|曹|위|spear|horse|helmet|beard_short|0|0||위나라 대도독 기병 장수",
  "25|2|하후무|夏|위|sword|none|helmet|none|0|0||위나라 하후돈의 아들",
  "26|2|곽회|郭|위|spear|none|helmet|beard_short|0|0||위나라 서북 방어명장",
  "27|2|한당|韓|오|spear|none|helmet|beard_short|0|0||오나라 삼대를 모신 베테랑",
  "28|2|정보|程|오|spear|none|helmet|beard_white|0|0||오나라 손견 시절 최고참",
  "29|2|주치|朱|오|sword|none|headband|beard_short|0|0||오나라 내정 겸 수군 장수",
  "30|2|장흠|蔣|오|sword|none|helmet|none|0|0||오나라 수군 돌격장",
  "31|2|전종|全|오|spear|none|helmet|none|0|0||오나라 손권의 사위 장수",
  "32|2|장보|張|군웅|staff|none|headband|beard_wild|0|0||태평도 지공장군",
  "33|2|장량|張|군웅|staff|none|headband|beard_wild|0|0||태평도 인공장군",
  "34|2|이각|李|군웅|spear|horse|helmet|beard_short|0|0||동탁군 서량 기병 장수",
  "35|2|곽사|郭|군웅|sword|horse|helmet|beard_short|0|0||동탁군 서량 흉악 장수",
  "36|2|번조|樊|군웅|spear|none|helmet|none|0|0||동탁군 서량 보병 장수",

  // --- Tier 3: 24 Skilled Generals (12 Unlocked, 12 Core Locked) ---
  "37|3|관흥|關|촉|crescent|none|helmet|none|0|0||관우의 의지를 이은 명장",
  "38|3|장포|張|촉|spear|none|helmet|beard_short|0|0||장비의 아들 장팔사모 장수",
  "39|3|마속|馬|촉|fan|none|crown|none|0|0||가정 전투의 읍참마속 책사",
  "40|3|서서|徐|촉|sword|none|crown|beard_short|1|80|제3장 클리어|촉나라 초기 신산 책사",
  "41|3|황월영|黃|촉|fan|none|hairpin|none|1|80|제3장 클리어|제갈량의 지혜로운 부인",
  "42|3|법정|法|촉|fan|none|crown|beard_short|1|80|제3장 클리어|한중 공방전 촉나라 최고 책사",
  "43|3|이전|李|위|spear|none|helmet|beard_short|0|0||위나라 학식과 무예의 명장",
  "44|3|악진|樂|위|sword|none|helmet|none|0|0||위나라 오자양장 선봉장",
  "45|3|우금|于|위|spear|none|helmet|beard_short|0|0||위나라 엄격한 규율의 명장",
  "46|3|서황|徐|위|spear|none|helmet|beard_short|1|80|제3장 클리어|대부끼의 위나라 오자양장",
  "47|3|하후연|夏|위|bow|horse|helmet|beard_short|1|80|제3장 클리어|정군산의 초고속 신궁장수",
  "48|3|순욱|荀|위|fan|none|crown|beard_short|1|80|제3장 클리어|조조의 왕佐지재 대책사",
  "49|3|황개|黃|오|spear|none|helmet|beard_white|0|0||적벽대전 고육지계 노장",
  "50|3|서성|徐|오|spear|none|helmet|beard_short|0|0||오나라 철벽 방어 대도독",
  "51|3|정봉|丁|오|sword|none|helmet|beard_short|0|0||오나라 단도 돌격 노장",
  "52|3|능통|凌|오|spear|none|helmet|none|1|80|제3장 클리어|오나라 협기 넘치는 명장",
  "53|3|손상향|孫|오|bow|none|hairpin|none|1|80|제3장 클리어|오나라 궁요공주 여걸",
  "54|3|대교|大|오|fan|none|hairpin|none|1|80|제3장 클리어|강동의 미인 대교",
  "55|3|고순|高|군웅|spear|none|helmet|beard_short|0|0||여포군 함진영 특공장수",
  "56|3|장임|張|군웅|bow|none|helmet|beard_short|0|0||유장군 낙봉파 충신 장수",
  "57|3|엄안|嚴|군웅|bow|none|helmet|beard_white|0|0||파서의 백발 호걸 노장",
  "58|3|화웅|華|군웅|spear|horse|helmet|beard_wild|1|80|제5장 보스 화웅 격파|사곡 관문의 거구 사마장군",
  "59|3|안량|顔|군웅|spear|horse|helmet|beard_wild|1|80|제5장 보스 화웅 격파|원소군 최고 용맹 상장군",
  "60|3|문추|文|군웅|spear|horse|helmet|beard_wild|1|80|제5장 보스 화웅 격파|원소군 백마의 호걸 장수",

  // --- Tier 4: 24 Famous Generals & Strategists (20 Core Locked) ---
  "61|4|위연|魏|촉|sword|none|helmet|beard_wild|0|0||촉나라 자오곡 계책의 맹장",
  "62|4|강유|姜|촉|spear|horse|dragon_helm|beard_short|0|0||제갈량의 후계자 문무겸비",
  "63|4|황충|黃|촉|bow|none|gold_helm|beard_white|0|0||오호대장군 백발 신궁 노장",
  "64|4|왕평|王|촉|spear|none|helmet|beard_short|1|100|명성 100🎖️|촉나라 무당飛軍 총사령관",
  "65|4|장억|張|촉|spear|none|helmet|beard_short|1|100|명성 100🎖️|촉나라 남만 평정 맹장",
  "66|4|마충|馬|촉|bow|none|helmet|none|1|100|명성 100🎖️|촉나라 포박의 달인 장수",
  "67|4|장합|張|위|spear|horse|helmet|beard_short|0|0||위나라 오자양장 변幻무쌍",
  "68|4|조인|曹|위|spear|none|gold_helm|beard_short|0|0||위나라 번성 철벽 방어 대장군",
  "69|4|방덕|龐|위|sword|horse|helmet|beard_short|1|100|명성 100🎖️|관우와 맞선 백마장군",
  "70|4|가후|賈|위|fan|none|crown|beard_white|1|100|명성 100🎖️|위나라 신산 칠숙 책사",
  "71|4|순유|荀|위|fan|none|crown|beard_short|1|100|명성 100🎖️|조조의 12가지 묘책 책사",
  "72|4|정욱|程|위|staff|none|crown|beard_white|1|100|명성 100🎖️|위나라 강직한 십면매복 책사",
  "73|4|주태|周|오|sword|none|helmet|beard_wild|0|0||손권을 온몸으로 구한 불사신",
  "74|4|감녕|甘|오|twin_blade|none|helmet|beard_short|0|0||오나라 방울 소리의 해적 호걸",
  "75|4|태사자|太|오|bow|horse|helmet|beard_short|1|100|명성 100🎖️|소패왕과 맞선 활의 달인",
  "76|4|소교|小|오|fan|none|hairpin|none|1|100|명성 100🎖️|주유의 아름다운 부인 소교",
  "77|4|보연사|步|오|fan|none|hairpin|none|1|100|명성 100🎖️|손권의 덕망 높은 황후",
  "78|4|주치(대도독)|朱|오|spear|none|helmet|beard_short|1|100|명성 100🎖️|오나라 육손 이전의 지장",
  "79|4|공손찬|公|군웅|spear|white_horse|helmet|beard_short|1|100|명성 100🎖️|백마의종의 북방 패왕",
  "80|4|초선|貂|군웅|twin_blade|none|hairpin|none|1|100|명성 100🎖️|삼국지 경국지색 여걸",
  "81|4|맹획|孟|군웅|spear|elephant|helmet|beard_wild|1|100|명성 100🎖️|남만 칠종칠금의 야성 왕",
  "82|4|축융|祝|군웅|twin_blade|none|hairpin|none|1|100|명성 100🎖️|남만 비도 여걸 왕후",
  "83|4|진궁|陳|군웅|fan|none|crown|beard_short|1|100|명성 100🎖️|여포의 강직한 책사",
  "84|4|이유|李|군웅|staff|none|crown|beard_short|1|100|명성 100🎖️|동탁의 책사 독사 가후급",

  // --- Tier 5: 20 Great Generals & Grand Admirals (20 Core Locked) ---
  "85|5|조운|趙|촉|spear|white_horse|dragon_helm|none|1|150|명성 150🎖️|장판파 단기필마 오호대장군",
  "86|5|장비|張|촉|spear|none|helmet|beard_wild|1|150|명성 150🎖️|장판교 일성호통 오호대장군",
  "87|5|마초|馬|촉|spear|white_horse|helmet|none|1|150|명성 150🎖️|서량의 서경 서황 오호대장군",
  "88|5|방통|龐|촉|staff|none|crown|beard_short|1|150|명성 150🎖️|봉추 신산 낙봉파 책사",
  "89|5|관우(청년)|關|촉|crescent|none|guan_cap|beard_long|1|150|명성 150🎖️|의형제 청룡언월도 무신",
  "90|5|하후돈|夏|위|sword|none|helmet|beard_short|1|150|명성 150🎖️|외눈 안대의 위나라 맹장",
  "91|5|장료|張|위|spear|horse|helmet|beard_short|1|150|명성 150🎖️|합비 전투 료래료래 오자양장",
  "92|5|허저|許|위|sword|none|helmet|beard_wild|1|150|명성 150🎖️|호치 조조의 천하무적 호위",
  "93|5|전위|典|위|twin_blade|none|helmet|beard_wild|1|150|명성 150🎖️|완성 전투의 악래 충신",
  "94|5|곽가|郭|위|fan|none|crown|none|1|150|명성 150🎖️|봉효 십승십패 신산 책사",
  "95|5|손책|孫|오|spear|horse|helmet|none|1|150|명성 150🎖️|강동의 소패왕 패기 정복자",
  "96|5|손견|孫|오|sword|horse|helmet|beard_short|1|150|명성 150🎖️|강동의 호랑이 반동탁 선봉",
  "97|5|육손|陸|오|sword|none|crown|none|1|150|명성 150🎖️|이릉대전 화공 대도독",
  "98|5|여몽|呂|오|spear|none|helmet|beard_short|1|150|명성 150🎖️|괄목상대 형주 공략 대도독",
  "99|5|노숙|魯|오|fan|none|crown|beard_short|1|150|명성 150🎖️|손촉연합 결성 덕망 대도독",
  "100|5|장각|張|군웅|staff|none|crown|beard_wild|1|150|명성 150🎖️|황건적의 난 천공장군",
  "101|5|원소|袁|군웅|sword|horse|crown|beard_short|1|150|명성 150🎖️|하북 명문 명주 명사 사세삼공",
  "102|5|동탁|董|군웅|sword|horse|crown|beard_wild|1|150|명성 150🎖️|낙양을 초토화한 마왕 패왕",
  "103|5|유표|劉|군웅|sword|none|crown|beard_white|1|150|명성 150🎖️|형주 팔성 팔주 군주",
  "104|5|유장|劉|군웅|sword|none|crown|beard_short|1|150|명성 150🎖️|익주 세력 서천 군주",

  // --- Tier 6: 12 Ultimate Strategists & Divine Generals (12 Core Locked) ---
  "105|6|무성 관우|關|촉|crescent|red_hare|guan_cap|beard_long|1|300|제5장 보스 격파 또는 300🎖️|만인지적 신화적인 무성",
  "106|6|와룡 제갈량|諸|촉|fan|none|crown|beard_short|1|300|촉 시너지 6인 또는 300🎖️|팔진도 적벽화공 천하삼분지계",
  "107|6|중달 사마의|司|위|fan|none|crown|beard_short|1|300|위 시너지 6인 또는 300🎖️|낭고상 위나라 최고 신산",
  "108|6|기린 등애|鄧|위|spear|horse|helmet|beard_short|1|300|명성 300🎖️|음평 절벽을 넘어선 장수",
  "109|6|야심 종회|鍾|위|sword|none|crown|none|1|300|명성 300🎖️|촉나라를 함락시킨 위나라 천재",
  "110|6|미주랑 주유|周|오|fan|none|crown|none|1|300|적벽 화공 10회 또는 300🎖️|적벽대전 천하무적 미주랑 대도독",
  "111|6|진국 육항|陸|오|sword|none|crown|beard_short|1|300|명성 300🎖️|오나라 마지막 보루 명장",
  "112|6|신선 좌자|左|군웅|staff|none|crown|beard_white|1|300|명성 300🎖️|조조를 신통력으로 골탕먹인 신선",
  "113|6|태평 우길|于|군웅|staff|none|crown|beard_white|1|300|명성 300🎖️|손책을 시달리게 한 태평도 도사",
  "114|6|신의 화타|華|군웅|staff|none|headband|beard_white|1|300|명성 300🎖️|관우의 팔을 수술한 의성",
  "115|6|수경 선생|水|촉|staff|none|crown|beard_white|1|300|명성 300🎖️|와룡과 봉추를 추천한 사마휘",
  "116|6|채염|蔡|군웅|fan|none|hairpin|none|1|300|명성 300🎖️|호가十八拍 천재 여류 시인",

  // --- Tier 7: 4 Supreme Warlords & Emperors (4 Core Locked) ---
  "117|7|무신 여포|呂|군웅|halberd|red_hare|lubu_crown|none|1|600|제10장 보스 여포 격파 또는 600🎖️|적토마 탑승 천하무쌍 방천화극",
  "118|7|소열제 유비|劉|촉|twin_blade|white_horse|crown|beard_short|1|600|도원결의 시너지 또는 600🎖️|촉한 건국 덕망의 소열황제",
  "119|7|무제 조조|曹|위|sword|horse|crown|beard_short|1|600|제15장 도달 또는 600🎖️|위나라 건국 난세의 간웅 무제",
  "120|7|대제 손권|孫|오|sword|horse|crown|beard_short|1|600|오나라 화염 200회 또는 600🎖️|동오 건국 자염목 강동의 대제"
];

/* 2. Parse Compact DB */
const HERO_120_DB = {};
RAW_HEROES_COMPACT.forEach(row => {
  const [idStr, tierStr, name, hanja, faction, weapon, mount, head, beard, isCoreLockedStr, unlockCostStr, unlockCond, skillDesc] = row.split("|");
  const id = parseInt(idStr);
  HERO_120_DB[id] = {
    id,
    tier: parseInt(tierStr),
    name, hanja, faction, weapon, mount, head, beard,
    isCoreLocked: isCoreLockedStr === "1",
    unlockCost: parseInt(unlockCostStr) || 0,
    unlockCond: unlockCond || "",
    skillDesc: skillDesc || "",
    color: faction === "촉" ? "#34d399" : (faction === "위" ? "#60a5fa" : (faction === "오" ? "#facc15" : "#f87171")),
    hex: faction === "촉" ? 0x34d399 : (faction === "위" ? 0x60a5fa : (faction === "오" ? 0xfacc15 : 0xf87171))
  };
});

/* 3. Audio Engine Synthesizer */
class SoundEngine {
  constructor() { this.ctx = null; this.initialized = false; }
  init() {
    if (this.initialized) return;
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioCtx();
      this.initialized = true;
    } catch (e) {}
  }
  playSound(type) {
    if (!this.initialized) this.init();
    if (!this.ctx) return;
    if (this.ctx.state === "suspended") this.ctx.resume();
    const t = this.ctx.currentTime;
    if (type === "bow" || type === "spear" || type === "sword") {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = "sawtooth";
      osc.frequency.setValueAtTime(type === "bow" ? 520 : 680, t);
      osc.frequency.exponentialRampToValueAtTime(120, t + 0.1);
      gain.gain.setValueAtTime(0.18, t);
      gain.gain.exponentialRampToValueAtTime(0.01, t + 0.1);
      osc.connect(gain); gain.connect(this.ctx.destination);
      osc.start(t); osc.stop(t + 0.1);
    } else if (type === "merge") {
      [523.25, 659.25, 783.99, 1046.5].forEach((f, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = "triangle";
        osc.frequency.setValueAtTime(f, t + idx * 0.045);
        gain.gain.setValueAtTime(0.2, t + idx * 0.045);
        gain.gain.exponentialRampToValueAtTime(0.001, t + idx * 0.045 + 0.22);
        osc.connect(gain); gain.connect(this.ctx.destination);
        osc.start(t + idx * 0.045); osc.stop(t + idx * 0.045 + 0.22);
      });
    } else if (type === "lubu" || type === "boss") {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = "sawtooth";
      osc.frequency.setValueAtTime(220, t);
      osc.frequency.exponentialRampToValueAtTime(40, t + 0.6);
      gain.gain.setValueAtTime(0.35, t);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.6);
      osc.connect(gain); gain.connect(this.ctx.destination);
      osc.start(t); osc.stop(t + 0.6);
    }
  }
}
const audioEngine = new SoundEngine();

/* 4. CanvasTexture Hanja Banner Cache (`bannerCache`) */
const bannerCache = new Map();
function getHeroBannerTexture(heroData) {
  const key = `${heroData.id}_${heroData.hanja}`;
  if (bannerCache.has(key)) return bannerCache.get(key);

  const canvas = document.createElement("canvas");
  canvas.width = 128; canvas.height = 256;
  const ctx = canvas.getContext("2d");

  ctx.fillStyle = "rgba(15, 23, 42, 0.9)";
  ctx.fillRect(8, 8, 112, 240);
  ctx.strokeStyle = heroData.color;
  ctx.lineWidth = 6;
  ctx.strokeRect(8, 8, 112, 240);

  ctx.fillStyle = heroData.color;
  ctx.font = "bold 90px serif";
  ctx.textAlign = "center";
  ctx.fillText(heroData.hanja, 64, 110);

  ctx.fillStyle = "#ffffff";
  ctx.font = "bold 22px sans-serif";
  ctx.fillText(heroData.name.substring(0, 5), 64, 180);

  ctx.fillStyle = heroData.color;
  ctx.font = "bold 18px sans-serif";
  ctx.fillText(`[${heroData.faction}]`, 64, 215);

  const texture = new THREE.CanvasTexture(canvas);
  bannerCache.set(key, texture);
  return texture;
}

/* 5. Procedural 3D Hero Character Assembly Engine */
function buildHeroCharacter3D(heroData) {
  const root = new THREE.Group();

  const pedMat = new THREE.MeshStandardMaterial({ color: 0x1e293b, metalness: 0.8, roughness: 0.2 });
  const pedestal = new THREE.Mesh(new THREE.CylinderGeometry(0.85, 0.98, 0.18, 8), pedMat);
  pedestal.position.y = 0.09;
  root.add(pedestal);

  const runeRing = new THREE.Mesh(
    new THREE.RingGeometry(0.72, 0.86, 6),
    new THREE.MeshBasicMaterial({ color: heroData.hex, side: THREE.DoubleSide, transparent: true, opacity: 0.75 })
  );
  runeRing.rotation.x = -Math.PI / 2;
  runeRing.position.y = 0.2;
  root.add(runeRing);

  const charGroup = new THREE.Group();
  root.add(charGroup);

  const skinMat = new THREE.MeshStandardMaterial({ color: heroData.name.includes("관우") ? 0xc0392b : 0xf5cba7, roughness: 0.4 });
  const armorMat = new THREE.MeshStandardMaterial({ color: heroData.hex, metalness: 0.6, roughness: 0.3, emissive: heroData.hex, emissiveIntensity: 0.18 });
  const goldMat = new THREE.MeshStandardMaterial({ color: 0xfbbf24, metalness: 0.9, roughness: 0.15, emissive: 0xd97706, emissiveIntensity: 0.25 });
  const darkMetalMat = new THREE.MeshStandardMaterial({ color: 0x1f2937, metalness: 0.8, roughness: 0.2 });
  const whiteMat = new THREE.MeshStandardMaterial({ color: 0xf8fafc, roughness: 0.3 });
  const blackHairMat = new THREE.MeshStandardMaterial({ color: 0x0f172a, roughness: 0.6 });

  if (heroData.mount !== "none") {
    const mountGroup = new THREE.Group();
    if (heroData.mount === "elephant") {
      const eleMat = new THREE.MeshStandardMaterial({ color: 0x475569, roughness: 0.8 });
      const body = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.8, 1.4), eleMat);
      body.position.y = 0.7;
      const head = new THREE.Mesh(new THREE.SphereGeometry(0.4, 8, 8), eleMat);
      head.position.set(0, 0.9, 0.7);
      mountGroup.add(body, head);
      charGroup.position.set(0, 0.8, 0);
    } else {
      const horseColor = heroData.mount === "red_hare" ? 0x991b1b : (heroData.mount === "white_horse" ? 0xe2e8f0 : 0x451a03);
      const horseMat = new THREE.MeshStandardMaterial({ color: horseColor, roughness: 0.4 });
      const hBody = new THREE.Mesh(new THREE.BoxGeometry(0.65, 0.52, 1.3), horseMat);
      hBody.position.y = 0.7;
      mountGroup.add(hBody);
      charGroup.position.set(0, 0.68, -0.05);
    }
    root.add(mountGroup);
  }

  const torso = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.24, 0.6, 8), armorMat);
  torso.position.y = 0.85;
  const belt = new THREE.Mesh(new THREE.CylinderGeometry(0.26, 0.26, 0.1, 8), goldMat);
  belt.position.y = 0.62;
  charGroup.add(torso, belt);

  const headGroup = new THREE.Group();
  headGroup.position.set(0, 1.35, 0);
  const headMesh = new THREE.Mesh(new THREE.SphereGeometry(0.22, 12, 12), skinMat);
  headGroup.add(headMesh);

  if (heroData.head === "crown" || heroData.head === "lubu_crown") {
    const crown = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.22, 0.25, 8), goldMat);
    crown.position.y = 0.2;
    headGroup.add(crown);
  } else if (heroData.head === "dragon_helm" || heroData.head === "gold_helm" || heroData.head === "helmet") {
    const helmMat = heroData.head === "gold_helm" ? goldMat : (heroData.head === "dragon_helm" ? whiteMat : armorMat);
    const helm = new THREE.Mesh(new THREE.SphereGeometry(0.24, 10, 8, 0, Math.PI * 2, 0, Math.PI * 0.55), helmMat);
    helm.position.y = 0.04;
    headGroup.add(helm);
  }
  charGroup.add(headGroup);

  if (heroData.beard !== "none") {
    const beardLen = heroData.beard === "beard_long" ? 0.75 : (heroData.beard === "beard_white" ? 0.5 : 0.35);
    const beardMat = heroData.beard === "beard_white" ? whiteMat : blackHairMat;
    const beardMesh = new THREE.Mesh(new THREE.ConeGeometry(0.16, beardLen, 6), beardMat);
    beardMesh.rotation.x = Math.PI;
    beardMesh.position.set(0, -0.22, 0.16);
    headGroup.add(beardMesh);
  }

  const rightArmPivot = new THREE.Group();
  rightArmPivot.position.set(0.36, 1.05, 0);
  const armMesh = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.07, 0.42, 8), armorMat);
  armMesh.position.set(0, -0.18, 0.1);
  armMesh.rotation.x = Math.PI / 3;
  rightArmPivot.add(armMesh);

  const weaponGroup = new THREE.Group();
  weaponGroup.position.set(0, -0.32, 0.22);
  rightArmPivot.add(weaponGroup);
  charGroup.add(rightArmPivot);

  const wType = heroData.weapon;
  if (wType === "crescent") {
    const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 2.1, 8), goldMat);
    pole.rotation.x = Math.PI / 2; pole.position.z = 0.4;
    const blade = new THREE.Mesh(new THREE.TorusGeometry(0.35, 0.07, 6, 16, Math.PI * 0.8), new THREE.MeshBasicMaterial({ color: 0x34d399 }));
    blade.rotation.x = Math.PI / 2; blade.position.set(0.1, 0, 1.5);
    weaponGroup.add(pole, blade);
  } else if (wType === "halberd") {
    const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.035, 2.4, 8), goldMat);
    pole.rotation.x = Math.PI / 2; pole.position.z = 0.5;
    const spear = new THREE.Mesh(new THREE.ConeGeometry(0.1, 0.55, 6), new THREE.MeshBasicMaterial({ color: 0xfef08a }));
    spear.rotation.x = Math.PI / 2; spear.position.z = 1.8;
    weaponGroup.add(pole, spear);
  } else if (wType === "bow") {
    const bowArc = new THREE.Mesh(new THREE.TorusGeometry(0.48, 0.04, 6, 16, Math.PI), goldMat);
    bowArc.rotation.z = -Math.PI / 2; bowArc.position.set(0, 0, 0.2);
    weaponGroup.add(bowArc);
  } else if (wType === "fan") {
    const fan = new THREE.Mesh(new THREE.ConeGeometry(0.28, 0.45, 6), whiteMat);
    fan.rotation.x = Math.PI / 3;
    weaponGroup.add(fan);
  } else {
    const shaft = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.025, 1.6, 6), darkMetalMat);
    shaft.rotation.x = Math.PI / 2; shaft.position.z = 0.3;
    const tip = new THREE.Mesh(new THREE.ConeGeometry(0.07, 0.35, 6), whiteMat);
    tip.rotation.x = Math.PI / 2; tip.position.z = 1.2;
    weaponGroup.add(shaft, tip);
  }

  const bannerMat = new THREE.MeshBasicMaterial({ map: getHeroBannerTexture(heroData), side: THREE.DoubleSide, transparent: true });
  const bannerMesh = new THREE.Mesh(new THREE.PlaneGeometry(0.55, 1.1), bannerMat);
  bannerMesh.position.set(-0.35, 1.25, -0.32);
  bannerMesh.rotation.y = Math.PI / 6;
  charGroup.add(bannerMesh);

  root.userData = { heroData, charGroup, rightArmPivot, weaponGroup, runeRing, animPhase: Math.random() * Math.PI * 2 };
  return root;
}

/* 6. Game State & Persistence */
const SAVE_KEY = "3k_defense_save_v2";
const gameState = {
  gold: 100,
  reputation: 0,
  gateHp: 100,
  maxGateHp: 100,
  kills: 0,
  wave: 1,
  enemiesSpawnedInWave: 0,
  maxEnemiesPerWave: 10,
  recruitCost: 20,
  upgradeLevel: 1,
  upgradeCost: 30,
  unlockedHeroes: new Set(),
  favorites: new Set(),
  taixue: { goldBonus: 0, recruitBonus: 0, gateBonus: 0, atkBonus: 0 },
  buffs: { atk: 0, aspd: 0, goldMult: 1.0, skillDmg: 1.0 },
  relics: new Set(),
  terrainGrid: [],
  grid: Array(20).fill(null),
  enemies: [],
  projectiles: [],
  effects3D: [],
  floatingTexts: [],
  draggedHero: null,
  dragSourcePos: { row: -1, col: -1 },
  dragCurrentWorldPos: new THREE.Vector3(),
  waveInProgress: true,
  spawnTimer: 0,
  bossEntity: null,
  duelActive: false,
  duelProgress: 50,
  duelTimer: 5.0,
  activeFilterFaction: "all",
  skillCooldown: 0,
  paused: false,
  gameOver: false
};

// Default Unlocked Heroes (48)
Object.values(HERO_120_DB).forEach(h => {
  if (!h.isCoreLocked) gameState.unlockedHeroes.add(h.id);
});

function loadSave() {
  try {
    const raw = localStorage.getItem(SAVE_KEY);
    if (raw) {
      const data = JSON.parse(raw);
      if (data.reputation !== undefined) gameState.reputation = data.reputation;
      if (data.unlocked) data.unlocked.forEach(id => gameState.unlockedHeroes.add(id));
      if (data.favorites) data.favorites.forEach(id => gameState.favorites.add(id));
      if (data.taixue) gameState.taixue = data.taixue;
    }
  } catch(e) {}
}

function triggerSave() {
  try {
    const data = {
      reputation: gameState.reputation,
      unlocked: Array.from(gameState.unlockedHeroes),
      favorites: Array.from(gameState.favorites),
      taixue: gameState.taixue
    };
    localStorage.setItem(SAVE_KEY, JSON.stringify(data));
  } catch(e) {}
}

/* 7. Tactical Terrain Grid System (팔진도 지형) */
const TERRAIN_TYPES = [
  { name: "⛰️고지", color: 0x38bdf8, desc: "사거리 +35%, 치명타 +20%" },
  { name: "🔥화염", color: 0xef4444, desc: "폭발 화염 데미지 +30%" },
  { name: "⚡신속", color: 0x10b981, desc: "공격속도 +40%" },
  { name: "☯️팔진", color: 0xa855f7, desc: "합성 시 25% 확률 대성공(+2 Tier)" },
  { name: "🌾보급", color: 0xfacc15, desc: "5초마다 군량미 자동 생산" }
];

function initTacticalTerrainGrid() {
  gameState.terrainGrid = Array(20).fill(null);
  const slots = Array.from({ length: 20 }, (_, i) => i).sort(() => 0.5 - Math.random());
  for (let i = 0; i < 5; i++) {
    gameState.terrainGrid[slots[i]] = TERRAIN_TYPES[i];
  }
}

/* 8. Scene & Camera Setup */
const webglContainer = document.getElementById("webgl-container");
const hudCanvas = document.getElementById("hudCanvas");
const hudCtx = hudCanvas.getContext("2d");

const scene = new THREE.Scene();
scene.fog = new THREE.FogExp2(0x030712, 0.014);

const CAM_PRESETS = [
  { name: "🎥 쿼터뷰", pos: new THREE.Vector3(0, 26, 23), look: new THREE.Vector3(0, 0, 1.2) },
  { name: "🎥 탑뷰", pos: new THREE.Vector3(0, 37, 2.5), look: new THREE.Vector3(0, 0, 0.5) },
  { name: "🎥 성문뷰", pos: new THREE.Vector3(0, 10.5, 16.5), look: new THREE.Vector3(0, 1.0, -6) }
];
let currentCamIdx = 0;

const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 500);
camera.position.copy(CAM_PRESETS[0].pos);
camera.lookAt(CAM_PRESETS[0].look);

const renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: "high-performance" });
renderer.setPixelRatio(1);
renderer.toneMapping = THREE.ACESFilmicToneMapping;
webglContainer.appendChild(renderer.domElement);

let composer = null;
try {
  const renderPass = new THREE.RenderPass(scene, camera);
  const bloomPass = new THREE.UnrealBloomPass(new THREE.Vector2(window.innerWidth || 480, window.innerHeight || 800), 0.95, 0.4, 0.2);
  composer = new THREE.EffectComposer(renderer);
  composer.addPass(renderPass); composer.addPass(bloomPass);
} catch (e) { composer = null; }

const ambientLight = new THREE.AmbientLight(0xdbeafe, 0.85);
scene.add(ambientLight);
const dirLight = new THREE.DirectionalLight(0xfffbeb, 1.35);
dirLight.position.set(12, 28, 18);
scene.add(dirLight);

const pathCurve = new THREE.CatmullRomCurve3([
  new THREE.Vector3(-4.8, 0.1, -12.5),
  new THREE.Vector3(4.8, 0.1, -9.2),
  new THREE.Vector3(-4.8, 0.1, -5.6),
  new THREE.Vector3(3.8, 0.1, -3.0),
  new THREE.Vector3(0.0, 0.1, -0.8)
]);

const gridSlotPositions = [];
const tileMeshes = [];

function buildBattlefield3D() {
  const groundMesh = new THREE.Mesh(new THREE.PlaneGeometry(60, 60), new THREE.MeshStandardMaterial({ color: 0x050914, roughness: 0.9 }));
  groundMesh.rotation.x = -Math.PI / 2; groundMesh.position.y = -0.15;
  scene.add(groundMesh);

  const tubeGeo = new THREE.TubeGeometry(pathCurve, 64, 0.85, 8, false);
  const roadMesh = new THREE.Mesh(tubeGeo, new THREE.MeshStandardMaterial({ color: 0x332411, emissive: 0x78350f, emissiveIntensity: 0.25 }));
  roadMesh.scale.set(1, 0.12, 1);
  scene.add(roadMesh);

  for (let r = 0; r < 4; r++) {
    for (let c = 0; c < 5; c++) {
      const idx = r * 5 + c;
      const wx = (c - 2) * 2.75;
      const wz = 2.2 + r * 2.55;
      gridSlotPositions.push(new THREE.Vector3(wx, 0, wz));

      const tileGroup = new THREE.Group();
      tileGroup.position.set(wx, 0, wz);

      const baseGeo = new THREE.BoxGeometry(2.35, 0.24, 2.15);
      const tAttr = gameState.terrainGrid[idx];
      const baseMat = new THREE.MeshStandardMaterial({
        color: tAttr ? tAttr.color : 0x0f172a,
        metalness: 0.7, roughness: 0.3,
        emissive: tAttr ? tAttr.color : 0x0c4a6e,
        emissiveIntensity: tAttr ? 0.35 : 0.15
      });
      const baseMesh = new THREE.Mesh(baseGeo, baseMat);
      baseMesh.userData = { tileIndex: idx };

      const borderLine = new THREE.LineSegments(
        new THREE.EdgesGeometry(baseGeo),
        new THREE.LineBasicMaterial({ color: tAttr ? tAttr.color : 0x38bdf8 })
      );
      baseMesh.add(borderLine);
      tileGroup.add(baseMesh);
      scene.add(tileGroup);
      tileMeshes.push(baseMesh);
    }
  }

  // Dismissal Zone
  const dismissGeo = new THREE.BoxGeometry(12, 0.1, 2);
  const dismissMat = new THREE.MeshStandardMaterial({ color: 0xb91c1c, emissive: 0x7f1d1d, emissiveIntensity: 0.4, transparent: true, opacity: 0.8 });
  const dismissMesh = new THREE.Mesh(dismissGeo, dismissMat);
  dismissMesh.position.set(0, 0, 12.8);
  dismissMesh.name = "dismissZone";
  scene.add(dismissMesh);
}

function onResize() {
  const container = document.getElementById('game-view');
  if (!container) return;
  const w = container.clientWidth || 480;
  const h = container.clientHeight || 700;
  hudCanvas.width = w;
  hudCanvas.height = h;
  if (renderer && composer) {
    renderer.setSize(w, h);
    composer.setSize(w, h);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  }
}
window.addEventListener("resize", onResize);

/* 9. Hero Instance Class */
class Hero {
  constructor(heroData, slotIndex) {
    this.heroData = heroData;
    this.tier = heroData.tier;
    this.slotIndex = slotIndex;
    this.kills = 0;
    this.rank = 1;
    this.attackCooldown = 0;
    this.mesh = buildHeroCharacter3D(heroData);
    this.mesh.position.copy(gridSlotPositions[slotIndex]);
    scene.add(this.mesh);
  }
  getAtk() {
    const encBonus = gameState.unlockedHeroes.size * 1.5;
    const relicAtk = gameState.relics.has("청강검") ? 20 : 0;
    const rankMult = this.rank === 3 ? 1.35 : (this.rank === 2 ? 1.15 : 1.0);
    const taixueAtk = gameState.taixue.atkBonus * 10;
    const synAtk = (gameState.synergyBuffs && gameState.synergyBuffs.atk) || 0;
    const roguelikeAtk = gameState.buffs.atk || 0;
    const tAttr = gameState.terrainGrid[this.slotIndex];
    const terrainAtk = (tAttr && tAttr.name === "🔥화염") ? 1.3 : 1.0;
    return Math.round((this.heroData.tier * 22 + 10) * (1 + (gameState.upgradeLevel * 15 + encBonus + relicAtk + taixueAtk + synAtk + roguelikeAtk) / 100) * rankMult * terrainAtk);
  }
  getAttackSpeed() {
    const relicSpd = gameState.relics.has("한혈마 등자") ? 0.2 : 0;
    const synSpd = (gameState.synergyBuffs && gameState.synergyBuffs.aspd) || 0;
    const roguelikeSpd = gameState.buffs.aspd || 0;
    const tAttr = gameState.terrainGrid[this.slotIndex];
    const terrainSpd = (tAttr && tAttr.name === "⚡신속") ? 0.4 : 0;
    return (1.0 + this.tier * 0.15 + relicSpd + synSpd + roguelikeSpd + terrainSpd) * (this.rank === 3 ? 1.35 : 1.0);
  }
  getRange() {
    const tAttr = gameState.terrainGrid[this.slotIndex];
    const terrainRng = (tAttr && tAttr.name === "⛰️고지") ? 1.35 : 1.0;
    return (14 + this.tier * 2) * terrainRng;
  }
  addKill() {
    this.kills++;
    if (this.kills >= 10 && this.rank < 3) {
      this.rank = 3;
      this.mesh.scale.set(1.2, 1.2, 1.2);
    } else if (this.kills >= 4 && this.rank < 2) {
      this.rank = 2;
    }
  }
  update(dt) {
    if (this.mesh && this.mesh.children[1]) {
      this.mesh.children[1].rotation.y += dt * 0.8;
    }
  }
  destroy() { scene.remove(this.mesh); }
}

class Projectile {
  constructor(startPos, targetEnemy, color, damage, attackerHero) {
    this.startPos = startPos.clone();
    this.target = targetEnemy;
    this.progress = 0;
    this.speed = 5.5;
    this.damage = damage;
    this.attacker = attackerHero;
    const geo = new THREE.SphereGeometry(0.25, 8, 8);
    const mat = new THREE.MeshBasicMaterial({ color: color });
    this.mesh = new THREE.Mesh(geo, mat);
    this.mesh.position.copy(startPos);
    scene.add(this.mesh);
  }
  update(dt) {
    if (!this.target || this.target.hp <= 0) {
      this.destroy();
      return false;
    }
    this.progress += this.speed * dt;
    this.mesh.position.lerpVectors(this.startPos, this.target.mesh.position, Math.min(1.0, this.progress));
    if (this.progress >= 1.0) {
      if (this.target && this.target.hp > 0) {
        this.target.hp -= this.damage;
        if (this.target.hp <= 0 && this.attacker) {
          this.attacker.addKill();
        }
      }
      this.destroy();
      return false;
    }
    return true;
  }
  destroy() {
    scene.remove(this.mesh);
  }
}

/* 10. Enemy Class */
class Enemy {
  constructor(wave) {
    this.wave = wave;
    this.isBoss = wave % 5 === 0;
    const baseHp = Math.round(55 * Math.pow(1.35, wave - 1));
    this.maxHp = this.isBoss ? baseHp * 5.5 : baseHp;
    this.hp = this.maxHp;
    this.speed = this.isBoss ? 0.022 : 0.042;
    this.progress = 0;
    this.stunTimer = 0;
    this.bossRoarTimer = 8.0;

    const size = this.isBoss ? 1.3 : 0.65;
    this.mesh = new THREE.Mesh(
      this.isBoss ? new THREE.DodecahedronGeometry(size) : new THREE.SphereGeometry(size, 8, 8),
      new THREE.MeshStandardMaterial({ color: this.isBoss ? 0xef4444 : 0xf97316, emissive: this.isBoss ? 0xef4444 : 0x000000, emissiveIntensity: 0.3 })
    );
    this.mesh.position.copy(pathCurve.getPointAt(0));
    scene.add(this.mesh);
  }
  update(dt) {
    if (this.stunTimer > 0) {
      this.stunTimer -= dt;
      return true;
    }
    this.progress += this.speed * dt;
    if (this.progress >= 1.0) {
      gameState.gateHp = Math.max(0, gameState.gateHp - (this.isBoss ? 30 : 10));
      this.destroy();
      return false;
    }
    this.mesh.position.copy(pathCurve.getPointAt(this.progress));
    this.mesh.position.y = this.isBoss ? 1.2 : 0.65;

    if (this.isBoss) {
      this.bossRoarTimer -= dt;
      if (this.bossRoarTimer <= 0) {
        this.bossRoarTimer = 8.0;
        const occupied = gameState.grid.filter(h => h !== null);
        if (occupied.length > 0) {
          const victim = occupied[Math.floor(Math.random() * occupied.length)];
          victim.attackCooldown = 2.5;
          audioEngine.playSound("boss");
        }
      }
    }
    return true;
  }
  destroy() { scene.remove(this.mesh); }
}

/* 11. Raycaster Drag-and-Drop, Merge & Sell */
const raycaster = new THREE.Raycaster();
const mouseVec = new THREE.Vector2();

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
    if (gameState.gameOver || gameState.paused) return;
    audioEngine.init();

    const ndc = getNDC(e);
    mouseVec.set(ndc.x, ndc.y);
    raycaster.setFromCamera(mouseVec, camera);

    const heroMeshes = [];
    gameState.grid.forEach(h => { if (h) heroMeshes.push(h.mesh); });

    const intersects = raycaster.intersectObjects(heroMeshes, true);
    if (intersects.length > 0) {
      let topMesh = intersects[0].object;
      while (topMesh.parent && topMesh.parent.type !== 'Scene') {
        topMesh = topMesh.parent;
      }
      for (let i = 0; i < gameState.grid.length; i++) {
        const h = gameState.grid[i];
        if (h && h.mesh === topMesh) {
          gameState.draggedHero = h;
          gameState.dragSourcePos = { index: i };
          h.mesh.position.y = 2.5;
          showInspector(h);
          break;
        }
      }
    } else {
      showInspector(null);
    }
  }

  function onPointerMove(e) {
    if (!gameState.draggedHero) return;
    const ndc = getNDC(e);
    mouseVec.set(ndc.x, ndc.y);
    raycaster.setFromCamera(mouseVec, camera);

    const plane = new THREE.Plane(new THREE.Vector3(0, 1, 0), -2.5);
    const target = new THREE.Vector3();
    raycaster.ray.intersectPlane(plane, target);
    if (target) {
      gameState.dragCurrentWorldPos.copy(target);
      gameState.draggedHero.mesh.position.copy(target);
    }
  }

  function onPointerUp(e) {
    if (!gameState.draggedHero) return;
    const sourceIdx = gameState.dragSourcePos.index;
    const hero = gameState.draggedHero;

    const allTargets = [...tileMeshes];
    const dismissZone = scene.getObjectByName("dismissZone");
    if (dismissZone) allTargets.push(dismissZone);

    const intersects = raycaster.intersectObjects(allTargets, true);
    if (intersects.length > 0) {
      let obj = intersects[0].object;
      while (obj.parent && obj.parent.type !== 'Scene' && obj.userData.tileIndex === undefined) {
        if (obj.name === "dismissZone") break;
        obj = obj.parent;
      }

      if (obj.name === "dismissZone") {
        const refund = Math.round(gameState.recruitCost * hero.tier * 0.5);
        gameState.gold += refund;
        gameState.grid[sourceIdx] = null;
        hero.destroy();
        audioEngine.playSound("merge");
      } else if (obj.userData.tileIndex !== undefined) {
        const targetIdx = obj.userData.tileIndex;
        const targetHero = gameState.grid[targetIdx];

        if (targetIdx === sourceIdx) {
          hero.mesh.position.copy(gridSlotPositions[sourceIdx]);
        } else if (!targetHero) {
          gameState.grid[sourceIdx] = null;
          gameState.grid[targetIdx] = hero;
          hero.slotIndex = targetIdx;
          hero.mesh.position.copy(gridSlotPositions[targetIdx]);
        } else if (targetHero.heroData.tier === hero.heroData.tier && hero.heroData.tier < 7) {
          // Merge Hero! Check Bagua Core 25% skip
          const tAttr = gameState.terrainGrid[targetIdx];
          const isBagua = tAttr && tAttr.name === "☯️팔진";
          const skipTier = (isBagua && Math.random() < 0.25) ? 2 : 1;
          const nextTier = Math.min(7, hero.heroData.tier + skipTier);

          gameState.grid[sourceIdx] = null;
          hero.destroy();
          targetHero.destroy();

          // Pick candidate for nextTier using favorite boost
          const candidates = Object.values(HERO_120_DB).filter(h => h.tier === nextTier && gameState.unlockedHeroes.has(h.id));
          const chosenData = selectWeightedHeroFromPool(candidates) || Object.values(HERO_120_DB).find(h => h.tier === nextTier);

          const promoted = new Hero(chosenData, targetIdx);
          gameState.grid[targetIdx] = promoted;
          audioEngine.playSound("merge");
          updateFactionSynergies();
        } else {
          // Swap positions
          gameState.grid[sourceIdx] = targetHero;
          gameState.grid[targetIdx] = hero;
          targetHero.slotIndex = sourceIdx;
          hero.slotIndex = targetIdx;
          targetHero.mesh.position.copy(gridSlotPositions[sourceIdx]);
          hero.mesh.position.copy(gridSlotPositions[targetIdx]);
        }
      } else {
        hero.mesh.position.copy(gridSlotPositions[sourceIdx]);
      }
    } else {
      hero.mesh.position.copy(gridSlotPositions[sourceIdx]);
    }

    gameState.draggedHero = null;
  }

  container.addEventListener('mousedown', onPointerDown);
  window.addEventListener('mousemove', onPointerMove);
  window.addEventListener('mouseup', onPointerUp);

  container.addEventListener('touchstart', onPointerDown, { passive: true });
  window.addEventListener('touchmove', onPointerMove, { passive: true });
  window.addEventListener('touchend', onPointerUp);
}

function showInspector(hero) {
  const panel = document.getElementById('unit-inspector');
  if (!panel) return;
  if (!hero) {
    panel.classList.add('hidden');
    return;
  }
  document.getElementById('insp-name').textContent = `${hero.heroData.name} [Tier ${hero.tier}]`;
  document.getElementById('insp-desc').textContent = hero.heroData.skillDesc;
  document.getElementById('insp-atk').textContent = hero.getAtk();
  document.getElementById('insp-spd').textContent = hero.getAttackSpeed().toFixed(1) + "/s";
  document.getElementById('insp-rank').textContent = `★${hero.rank}`;
  panel.classList.remove('hidden');
}

/* 12. Faction Synergy Calculation & Merge Helper */
gameState.synergyBuffs = { atk: 0, aspd: 0 };

function updateFactionSynergies() {
  const counts = { 촉: 0, 위: 0, 오: 0, 군웅: 0 };
  gameState.grid.forEach(h => {
    if (h) counts[h.heroData.faction] = (counts[h.heroData.faction] || 0) + 1;
  });

  document.getElementById("syn-shu").innerText = `촉(공속+25%) ${counts['촉']}/3`;
  document.getElementById("syn-wei").innerText = `위(화력+15%) ${counts['위']}/2`;
  document.getElementById("syn-qun").innerText = `군웅(치명+25%) ${counts['군웅']}/3`;

  document.getElementById("syn-shu").classList.toggle("active", counts['촉'] >= 3);
  document.getElementById("syn-wei").classList.toggle("active", counts['위'] >= 2);
  document.getElementById("syn-qun").classList.toggle("active", counts['군웅'] >= 3);

  gameState.synergyBuffs.aspd = counts['촉'] >= 3 ? 0.25 : 0;
  gameState.synergyBuffs.atk = (counts['위'] >= 2 ? 15 : 0) + (counts['군웅'] >= 3 ? 25 : 0);
}

function selectWeightedHeroFromPool(candidates) {
  if (!candidates || candidates.length === 0) return null;
  let totalWeight = 0;
  const weighted = candidates.map(h => {
    const weight = gameState.favorites.has(h.id) ? 3 : 1;
    totalWeight += weight;
    return { hero: h, weight };
  });
  let roll = Math.random() * totalWeight;
  for (const item of weighted) {
    if (roll <= item.weight) return item.hero;
    roll -= item.weight;
  }
  return candidates[0];
}

/* 12. Recruitment with Favorite Probability Boost (3x) */
function recruitHero() {
  if (gameState.gold < gameState.recruitCost) return;

  const emptySlots = [];
  gameState.grid.forEach((h, idx) => { if (!h) emptySlots.push(idx); });
  if (emptySlots.length === 0) return;

  gameState.gold -= gameState.recruitCost;
  gameState.recruitCost = Math.round(gameState.recruitCost * 1.12);

  const pool = Array.from(gameState.unlockedHeroes).map(id => HERO_120_DB[id]);
  const candidates = pool.filter(h => h.tier <= 3);
  const chosenData = selectWeightedHeroFromPool(candidates) || candidates[0];

  const slot = emptySlots[Math.floor(Math.random() * emptySlots.length)];
  const newHero = new Hero(chosenData, slot);
  gameState.grid[slot] = newHero;
  audioEngine.playSound("spear");
  updateFactionSynergies();
}

/* 13. 1:1 Duel System (연타 대결) */
let duelInterval = null;
function checkDuelTrigger(boss) {
  if (!gameState.duelActive && boss.isBoss && (boss.hp / boss.maxHp) <= 0.7) {
    document.getElementById("duel-banner").classList.remove("hidden");
    document.getElementById("start-duel-btn").classList.remove("hidden");
    document.getElementById("duel-gauge-box").classList.add("hidden");
  }
}

document.getElementById("start-duel-btn").onclick = () => {
  document.getElementById("start-duel-btn").classList.add("hidden");
  document.getElementById("duel-gauge-box").classList.remove("hidden");
  gameState.duelActive = true;
  gameState.duelProgress = 50;
  gameState.duelTimer = 5.0;

  audioEngine.playSound("lubu");
  duelInterval = setInterval(() => {
    gameState.duelTimer -= 0.1;
    gameState.duelProgress = Math.max(0, gameState.duelProgress - 1.2);
    document.getElementById("duel-gauge-fill").style.width = `${gameState.duelProgress}%`;
    document.getElementById("duel-timer").innerText = `남은 시간: ${gameState.duelTimer.toFixed(1)}초`;

    if (gameState.duelTimer <= 0) {
      clearInterval(duelInterval);
      endDuel(gameState.duelProgress >= 60);
    }
  }, 100);
};

document.getElementById("tap-duel-btn").onclick = () => {
  if (gameState.duelActive) {
    gameState.duelProgress = Math.min(100, gameState.duelProgress + 8);
    audioEngine.playSound("sword");
  }
};

function endDuel(success) {
  gameState.duelActive = false;
  document.getElementById("duel-banner").classList.add("hidden");
  if (success && gameState.bossEntity) {
    gameState.bossEntity.hp -= gameState.bossEntity.maxHp * 0.25;
    gameState.bossEntity.stunTimer = 4.0;
    gameState.reputation += 25;

    const relicPool = ["청강검", "태평요술서", "손자병법", "한혈마 등자", "전국옥새", "양유기의 활"];
    const drop = relicPool[Math.floor(Math.random() * relicPool.length)];
    gameState.relics.add(drop);
    renderRelicBar();
  }
}

function renderRelicBar() {
  const container = document.getElementById("relic-icons");
  container.innerHTML = "";
  gameState.relics.forEach(r => {
    const chip = document.createElement("span");
    chip.className = "relic-chip";
    chip.innerText = r;
    container.appendChild(chip);
  });
}

/* 14. Roguelike Strategy Modal (제갈량의 금낭묘계) */
const ROGUELIKE_OPTIONS = [
  { title: "도원결의", desc: "전체 아군 공격력 +25%", apply: () => { gameState.buffs.atk += 25; } },
  { title: "연노 개량", desc: "전체 아군 공격속도 +20%", apply: () => { gameState.buffs.aspd += 0.20; } },
  { title: "병량 확보", desc: "적 처치 골드 획득량 +30%", apply: () => { gameState.buffs.goldMult *= 1.30; } },
  { title: "적벽 대화재", desc: "적벽 화공 계책 피해 +50%", apply: () => { gameState.buffs.skillDmg += 0.50; } },
  { title: "호로관 보수", desc: "성문 HP +50 회복 및 최대 HP +20", apply: () => { gameState.maxGateHp += 20; gameState.gateHp = Math.min(gameState.maxGateHp, gameState.gateHp + 50); } }
];

function showStrategyModal() {
  gameState.paused = true;
  const container = document.getElementById("strategy-cards");
  container.innerHTML = "";

  const shuffled = [...ROGUELIKE_OPTIONS].sort(() => 0.5 - Math.random()).slice(0, 3);
  shuffled.forEach(opt => {
    const card = document.createElement("div");
    card.className = "strategy-card";
    card.style.cssText = "background: rgba(15, 23, 42, 0.95); border: 2px solid #38bdf8; border-radius: 10px; padding: 16px; margin-bottom: 12px; cursor: pointer; color: #fff; text-align: center; transition: transform 0.2s;";
    card.innerHTML = `<h3 style="color:#fde047; margin-bottom:6px;">${opt.title}</h3><p style="font-size:13px; color:#cbd5e1;">${opt.desc}</p>`;
    card.onclick = () => {
      opt.apply();
      document.getElementById("strategy-modal").classList.add("hidden");
      gameState.paused = false;
      gameState.waveInProgress = true;
    };
    container.appendChild(card);
  });

  document.getElementById("strategy-modal").classList.remove("hidden");
}

/* 15. Wave Completion & Game Over Checks */
function checkWaveProgression() {
  const maxEnemies = 10 + gameState.wave * 2;
  if (gameState.waveInProgress && gameState.enemiesSpawnedInWave >= maxEnemies && gameState.enemies.length === 0) {
    gameState.waveInProgress = false;
    gameState.wave++;
    gameState.enemiesSpawnedInWave = 0;

    const waveTitle = document.getElementById("wave-title");
    if (waveTitle) {
      waveTitle.innerText = `제${gameState.wave}장 ${gameState.wave % 5 === 0 ? "보스전" : "전장"}`;
    }

    showStrategyModal();
  }
}

function checkGameOver() {
  if (!gameState.gameOver && gameState.gateHp <= 0) {
    gameState.gameOver = true;
    document.getElementById("final-wave").innerText = `제${gameState.wave}장`;
    document.getElementById("final-rep").innerText = gameState.reputation;
    document.getElementById("final-kills").innerText = gameState.kills;
    document.getElementById("gameover-modal").classList.remove("hidden");
  }
}

document.getElementById("restart-btn").onclick = () => {
  location.reload();
};

/* 16. Encyclopedia & Taixue UI */
function renderEncyclopedia() {
  const grid = document.getElementById("hero-grid");
  grid.innerHTML = "";

  const list = Object.values(HERO_120_DB).filter(h => {
    if (gameState.activeFilterFaction === "all") return true;
    return h.faction === gameState.activeFilterFaction;
  });

  list.forEach(h => {
    const isUnlocked = gameState.unlockedHeroes.has(h.id);
    const isFav = gameState.favorites.has(h.id);

    const card = document.createElement("div");
    card.className = `hero-card ${isUnlocked ? '' : 'locked'} ${isFav ? 'fav' : ''}`;
    card.innerHTML = `
      <div class="card-top">
        <span class="card-title" style="color:${h.color}">[T${h.tier}] ${h.name} (${h.hanja})</span>
        ${isUnlocked ? `<button class="card-fav-btn">${isFav ? '⭐' : '☆'}</button>` : ''}
      </div>
      <div class="card-body">
        세력: ${h.faction}<br>
        ${isUnlocked ? `특기: ${h.skillDesc}` : `해금: ${h.unlockCond} (소모 🎖️${h.unlockCost})`}
      </div>
      ${!isUnlocked ? `<button class="unlock-btn">🎖️ ${h.unlockCost} 삼고초려 영입</button>` : ''}
    `;

    if (isUnlocked) {
      const favBtn = card.querySelector(".card-fav-btn");
      favBtn.onclick = () => {
        if (gameState.favorites.has(h.id)) gameState.favorites.delete(h.id);
        else gameState.favorites.add(h.id);
        triggerSave();
        renderEncyclopedia();
      };
    } else {
      const unlockBtn = card.querySelector(".unlock-btn");
      unlockBtn.onclick = () => {
        if (gameState.reputation >= h.unlockCost) {
          gameState.reputation -= h.unlockCost;
          gameState.unlockedHeroes.add(h.id);
          triggerSave();
          renderEncyclopedia();
          updateHUD();
        }
      };
    }
    grid.appendChild(card);
  });

  document.getElementById("enc-unlocked-count").innerText = `${gameState.unlockedHeroes.size}/120`;
  document.getElementById("enc-bonus-val").innerText = `+${(gameState.unlockedHeroes.size * 1.5).toFixed(1)}% ATK`;
}

function renderTaixue() {
  const container = document.getElementById("taixue-items");
  container.innerHTML = "";

  const items = [
    { key: "goldBonus", name: "군량 비축술", desc: "시작 군량미 +25🌾", cost: (gameState.taixue.goldBonus + 1) * 30 },
    { key: "recruitBonus", name: "초고속 천거술", desc: "고티어 등용 확률 +3%", cost: (gameState.taixue.recruitBonus + 1) * 40 },
    { key: "gateBonus", name: "호로관 축성술", desc: "성문 HP +25 및 자동 수리 +5", cost: (gameState.taixue.gateBonus + 1) * 35 },
    { key: "atkBonus", name: "병법 연마", desc: "전체 아군 공격력 +10%", cost: (gameState.taixue.atkBonus + 1) * 50 }
  ];

  items.forEach(item => {
    const lvl = gameState.taixue[item.key];
    const div = document.createElement("div");
    div.className = "taixue-item";
    div.innerHTML = `
      <div class="taixue-info">
        <h4>${item.name} <small>Lv.${lvl}</small></h4>
        <p>${item.desc}</p>
      </div>
      <button class="taixue-buy-btn">🎖️ ${item.cost} 연구</button>
    `;
    div.querySelector(".taixue-buy-btn").onclick = () => {
      if (gameState.reputation >= item.cost) {
        gameState.reputation -= item.cost;
        gameState.taixue[item.key]++;
        triggerSave();
        renderTaixue();
        updateHUD();
      }
    };
    container.appendChild(div);
  });
}

/* 15. Controls & Camera Toggle Binding */
document.querySelectorAll(".faction-tabs .tab-btn").forEach(btn => {
  btn.onclick = () => {
    document.querySelectorAll(".faction-tabs .tab-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    gameState.activeFilterFaction = btn.dataset.faction;
    renderEncyclopedia();
  };
});

document.getElementById("cam-btn").onclick = () => {
  currentCamIdx = (currentCamIdx + 1) % CAM_PRESETS.length;
  camera.position.copy(CAM_PRESETS[currentCamIdx].pos);
  camera.lookAt(CAM_PRESETS[currentCamIdx].look);
  document.getElementById("cam-btn").textContent = CAM_PRESETS[currentCamIdx].name;
};

document.getElementById("encyclopedia-btn").onclick = () => {
  renderEncyclopedia();
  document.getElementById("encyclopedia-modal").classList.remove("hidden");
};

document.getElementById("taixue-btn").onclick = () => {
  renderTaixue();
  document.getElementById("taixue-modal").classList.remove("hidden");
};

document.getElementById("recruit-btn").onclick = recruitHero;
document.getElementById("upgrade-btn").onclick = () => {
  if (gameState.gold >= gameState.upgradeCost) {
    gameState.gold -= gameState.upgradeCost;
    gameState.upgradeLevel++;
    gameState.upgradeCost = Math.round(gameState.upgradeCost * 1.35);
  }
};
document.getElementById("skill-btn").onclick = () => {
  if (gameState.skillCooldown <= 0) {
    gameState.skillCooldown = 20.0;
    audioEngine.playSound("lubu");
    gameState.enemies.forEach(e => e.hp -= 300 * gameState.wave);
  }
};

function updateHUD() {
  document.getElementById("gold-val").innerText = gameState.gold;
  document.getElementById("rep-val").innerText = gameState.reputation;
  document.getElementById("hp-val").innerText = `${gameState.gateHp}/${gameState.maxGateHp}`;
  document.getElementById("gate-hp-bar").style.width = `${(gameState.gateHp / gameState.maxGateHp) * 100}%`;
  document.getElementById("recruit-cost").innerText = gameState.recruitCost;
  document.getElementById("upgrade-lvl").innerText = gameState.upgradeLevel;
  document.getElementById("upgrade-cost").innerText = gameState.upgradeCost;
}

/* 16. Main Game Loop */
let lastTime = performance.now();
function animateLoop(now) {
  requestAnimationFrame(animateLoop);
  const dt = Math.min((now - lastTime) / 1000, 0.1);
  lastTime = now;

  if (!gameState.paused && !gameState.gameOver) {
    if (gameState.skillCooldown > 0) gameState.skillCooldown -= dt;

    // Enemy Spawner
    const maxEnemies = 10 + gameState.wave * 2;
    if (gameState.waveInProgress && gameState.enemiesSpawnedInWave < maxEnemies) {
      gameState.spawnTimer += dt;
      if (gameState.spawnTimer > 1.8 && gameState.enemies.length < 12) {
        gameState.spawnTimer = 0;
        gameState.enemiesSpawnedInWave++;
        const enemy = new Enemy(gameState.wave);
        gameState.enemies.push(enemy);
        if (enemy.isBoss) gameState.bossEntity = enemy;
      }
    }

    // Update Enemies
    for (let i = gameState.enemies.length - 1; i >= 0; i--) {
      const e = gameState.enemies[i];
      if (!e.update(dt)) {
        gameState.enemies.splice(i, 1);
        continue;
      }
      checkDuelTrigger(e);
      if (e.hp <= 0) {
        const goldYield = Math.round(15 * gameState.buffs.goldMult);
        gameState.gold += goldYield;
        gameState.reputation += e.isBoss ? 30 : 1;
        gameState.kills++;
        e.destroy();
        gameState.enemies.splice(i, 1);
      }
    }

    // Update Projectiles
    for (let i = gameState.projectiles.length - 1; i >= 0; i--) {
      const p = gameState.projectiles[i];
      if (!p.update(dt)) {
        gameState.projectiles.splice(i, 1);
      }
    }

    // Update Combat
    let dps = 0;
    gameState.grid.forEach(h => {
      if (h) {
        h.update(dt);
        dps += Math.round(h.getAtk() * h.getAttackSpeed());
        h.attackCooldown -= dt;
        if (h.attackCooldown <= 0 && gameState.enemies.length > 0) {
          h.attackCooldown = 1.0 / h.getAttackSpeed();
          const target = gameState.enemies[0];
          audioEngine.playSound("bow");
          gameState.projectiles.push(new Projectile(
            h.mesh.position.clone().add(new THREE.Vector3(0, 1.2, 0)),
            target,
            h.heroData.hex,
            h.getAtk(),
            h
          ));
        }
      }
    });
    document.getElementById("dps-val").innerText = dps;

    checkWaveProgression();
    checkGameOver();
  }

  updateHUD();
  if (composer) composer.render();
  else renderer.render(scene, camera);
}

window.addEventListener("load", () => {
  loadSave();
  initTacticalTerrainGrid();
  buildBattlefield3D();
  setupInteraction();
  onResize();
  recruitHero();
  recruitHero();
  animateLoop(performance.now());
});
