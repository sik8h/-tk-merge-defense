/* ==========================================================================
   Three Kingdoms 3D Merge Defense - Official Public Wiki & Argon 3D DB
   ========================================================================== */

/* 1. 120-Hero Compact Database */
const RAW_HEROES_COMPACT = [
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
  "117|7|무신 여포|呂|군웅|halberd|red_hare|lubu_crown|none|1|600|제10장 보스 여포 격파 또는 600🎖️|적토마 탑승 천하무쌍 방천화극",
  "118|7|소열제 유비|劉|촉|twin_blade|white_horse|crown|beard_short|1|600|도원결의 시너지 또는 600🎖️|촉한 건국 덕망의 소열황제",
  "119|7|무제 조조|曹|위|sword|horse|crown|beard_short|1|600|제15장 도달 또는 600🎖️|위나라 건국 난세의 간웅 무제",
  "120|7|대제 손권|孫|오|sword|horse|crown|beard_short|1|600|오나라 화염 200회 또는 600🎖️|동오 건국 자염목 강동의 대제"
];

const HERO_DB = {};
RAW_HEROES_COMPACT.forEach(row => {
  const [idStr, tierStr, name, hanja, faction, weapon, mount, head, beard, isCoreLockedStr, unlockCostStr, unlockCond, skillDesc] = row.split("|");
  const id = parseInt(idStr);
  HERO_DB[id] = {
    id, tier: parseInt(tierStr), name, hanja, faction, weapon, mount, head, beard,
    isCoreLocked: isCoreLockedStr === "1", unlockCost: parseInt(unlockCostStr) || 0,
    unlockCond: unlockCond || "", skillDesc: skillDesc || "",
    color: faction === "촉" ? "#34d399" : (faction === "위" ? "#60a5fa" : (faction === "오" ? "#facc15" : "#f87171")),
    hex: faction === "촉" ? 0x34d399 : (faction === "위" ? 0x60a5fa : (faction === "오" ? 0xfacc15 : 0xf87171))
  };
});

/* LocalStorage Sync Check */
const SAVE_KEY = "3k_defense_save_v2";
const userUnlockedSet = new Set();
// default unlocked
Object.values(HERO_DB).forEach(h => { if (!h.isCoreLocked) userUnlockedSet.add(h.id); });

try {
  const raw = localStorage.getItem(SAVE_KEY);
  if (raw) {
    const data = JSON.parse(raw);
    if (data.unlocked) data.unlocked.forEach(id => userUnlockedSet.add(id));
  }
} catch (e) {}

function updateSyncRateBadge() {
  const pct = Math.round((userUnlockedSet.size / 120) * 100);
  const badge = document.getElementById("sync-badge");
  if (badge) badge.innerText = `📖 도감 동기화: ${pct}% (${userUnlockedSet.size}/120)`;
}

/* 2. Logo Canvas & Flag Canvas Generators */
function drawWikiLogo() {
  const canvas = document.getElementById("wiki-logo");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, 40, 40);

  // Bagua Outer Gold Ring
  ctx.fillStyle = "#0f172a";
  ctx.beginPath(); ctx.arc(20, 20, 18, 0, Math.PI * 2); ctx.fill();
  ctx.strokeStyle = "#f59e0b"; ctx.lineWidth = 2; ctx.stroke();

  // Hanja '三'
  ctx.fillStyle = "#fde047";
  ctx.font = "bold 18px serif";
  ctx.textAlign = "center"; ctx.textBaseline = "middle";
  ctx.fillText("蜀", 20, 20);
}

function drawHeroFlagCanvas(canvas, heroData) {
  canvas.width = 140; canvas.height = 180;
  const ctx = canvas.getContext("2d");

  // Banner background
  ctx.fillStyle = "rgba(15, 23, 42, 0.95)";
  ctx.fillRect(10, 10, 120, 160);
  ctx.strokeStyle = heroData.color;
  ctx.lineWidth = 4;
  ctx.strokeRect(10, 10, 120, 160);

  // Faction Surname Hanja
  ctx.fillStyle = heroData.color;
  ctx.font = "bold 70px serif";
  ctx.textAlign = "center";
  ctx.fillText(heroData.hanja, 70, 92);

  // Hero Name
  ctx.fillStyle = "#ffffff";
  ctx.font = "bold 16px sans-serif";
  ctx.fillText(heroData.name.substring(0, 6), 70, 135);

  // Faction tag
  ctx.fillStyle = heroData.color;
  ctx.font = "bold 13px sans-serif";
  ctx.fillText(`[${heroData.faction}]`, 70, 156);
}

/* 3. Three.js 3D Model Procedural Builder for Dialog Viewer */
function buildHero3DModel(heroData) {
  const root = new THREE.Group();

  const pedMat = new THREE.MeshStandardMaterial({ color: 0x1e293b, metalness: 0.8, roughness: 0.2 });
  const pedestal = new THREE.Mesh(new THREE.CylinderGeometry(1.2, 1.35, 0.25, 8), pedMat);
  pedestal.position.y = 0.12;
  root.add(pedestal);

  const runeRing = new THREE.Mesh(
    new THREE.RingGeometry(1.0, 1.2, 6),
    new THREE.MeshBasicMaterial({ color: heroData.hex, side: THREE.DoubleSide, transparent: true, opacity: 0.8 })
  );
  runeRing.rotation.x = -Math.PI / 2;
  runeRing.position.y = 0.26;
  root.add(runeRing);

  const charGroup = new THREE.Group();
  root.add(charGroup);

  const skinMat = new THREE.MeshStandardMaterial({ color: heroData.name.includes("관우") ? 0xc0392b : 0xf5cba7, roughness: 0.4 });
  const armorMat = new THREE.MeshStandardMaterial({ color: heroData.hex, metalness: 0.6, roughness: 0.3, emissive: heroData.hex, emissiveIntensity: 0.2 });
  const goldMat = new THREE.MeshStandardMaterial({ color: 0xfbbf24, metalness: 0.9, roughness: 0.15, emissive: 0xd97706, emissiveIntensity: 0.3 });
  const darkMetalMat = new THREE.MeshStandardMaterial({ color: 0x1f2937, metalness: 0.8, roughness: 0.2 });
  const whiteMat = new THREE.MeshStandardMaterial({ color: 0xf8fafc, roughness: 0.3 });
  const blackHairMat = new THREE.MeshStandardMaterial({ color: 0x0f172a, roughness: 0.6 });

  if (heroData.mount !== "none") {
    const mountGroup = new THREE.Group();
    if (heroData.mount === "elephant") {
      const eleMat = new THREE.MeshStandardMaterial({ color: 0x475569, roughness: 0.8 });
      const body = new THREE.Mesh(new THREE.BoxGeometry(1.3, 1.1, 2.0), eleMat);
      body.position.y = 1.0;
      const head = new THREE.Mesh(new THREE.SphereGeometry(0.6, 8, 8), eleMat);
      head.position.set(0, 1.3, 1.0);
      mountGroup.add(body, head);
      charGroup.position.set(0, 1.1, 0);
    } else {
      const horseColor = heroData.mount === "red_hare" ? 0x991b1b : (heroData.mount === "white_horse" ? 0xe2e8f0 : 0x451a03);
      const horseMat = new THREE.MeshStandardMaterial({ color: horseColor, roughness: 0.4 });
      const hBody = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.75, 1.8), horseMat);
      hBody.position.y = 0.95;
      mountGroup.add(hBody);
      charGroup.position.set(0, 0.95, -0.05);
    }
    root.add(mountGroup);
  }

  const torso = new THREE.Mesh(new THREE.CylinderGeometry(0.42, 0.34, 0.85, 8), armorMat);
  torso.position.y = 1.18;
  const belt = new THREE.Mesh(new THREE.CylinderGeometry(0.36, 0.36, 0.14, 8), goldMat);
  belt.position.y = 0.85;
  charGroup.add(torso, belt);

  const headGroup = new THREE.Group();
  headGroup.position.set(0, 1.88, 0);
  const headMesh = new THREE.Mesh(new THREE.SphereGeometry(0.31, 12, 12), skinMat);
  headGroup.add(headMesh);

  if (heroData.head === "crown" || heroData.head === "lubu_crown") {
    const crown = new THREE.Mesh(new THREE.CylinderGeometry(0.26, 0.31, 0.35, 8), goldMat);
    crown.position.y = 0.28;
    headGroup.add(crown);
  } else if (heroData.head === "dragon_helm" || heroData.head === "gold_helm" || heroData.head === "helmet") {
    const helmMat = heroData.head === "gold_helm" ? goldMat : (heroData.head === "dragon_helm" ? whiteMat : armorMat);
    const helm = new THREE.Mesh(new THREE.SphereGeometry(0.34, 10, 8, 0, Math.PI * 2, 0, Math.PI * 0.55), helmMat);
    helm.position.y = 0.05;
    headGroup.add(helm);
  }
  charGroup.add(headGroup);

  if (heroData.beard !== "none") {
    const beardLen = heroData.beard === "beard_long" ? 1.0 : (heroData.beard === "beard_white" ? 0.7 : 0.5);
    const beardMat = heroData.beard === "beard_white" ? whiteMat : blackHairMat;
    const beardMesh = new THREE.Mesh(new THREE.ConeGeometry(0.22, beardLen, 6), beardMat);
    beardMesh.rotation.x = Math.PI;
    beardMesh.position.set(0, -0.32, 0.22);
    headGroup.add(beardMesh);
  }

  const armGroup = new THREE.Group();
  armGroup.position.set(0.5, 1.45, 0);
  const arm = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.1, 0.6, 8), armorMat);
  arm.position.set(0, -0.25, 0.15);
  arm.rotation.x = Math.PI / 3;
  armGroup.add(arm);

  const weaponGroup = new THREE.Group();
  weaponGroup.position.set(0, -0.45, 0.3);
  armGroup.add(weaponGroup);
  charGroup.add(armGroup);

  const wType = heroData.weapon;
  if (wType === "crescent") {
    const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 3.0, 8), goldMat);
    pole.rotation.x = Math.PI / 2; pole.position.z = 0.6;
    const blade = new THREE.Mesh(new THREE.TorusGeometry(0.5, 0.1, 6, 16, Math.PI * 0.8), new THREE.MeshBasicMaterial({ color: 0x34d399 }));
    blade.rotation.x = Math.PI / 2; blade.position.set(0.15, 0, 2.1);
    weaponGroup.add(pole, blade);
  } else if (wType === "halberd") {
    const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 3.2, 8), goldMat);
    pole.rotation.x = Math.PI / 2; pole.position.z = 0.7;
    const spear = new THREE.Mesh(new THREE.ConeGeometry(0.15, 0.8, 6), new THREE.MeshBasicMaterial({ color: 0xfef08a }));
    spear.rotation.x = Math.PI / 2; spear.position.z = 2.4;
    weaponGroup.add(pole, spear);
  } else if (wType === "bow") {
    const bowArc = new THREE.Mesh(new THREE.TorusGeometry(0.7, 0.06, 6, 16, Math.PI), goldMat);
    bowArc.rotation.z = -Math.PI / 2; bowArc.position.set(0, 0, 0.3);
    weaponGroup.add(bowArc);
  } else if (wType === "fan") {
    const fan = new THREE.Mesh(new THREE.ConeGeometry(0.4, 0.6, 6), whiteMat);
    fan.rotation.x = Math.PI / 3;
    weaponGroup.add(fan);
  } else {
    const shaft = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 2.2, 6), darkMetalMat);
    shaft.rotation.x = Math.PI / 2; shaft.position.z = 0.4;
    const tip = new THREE.Mesh(new THREE.ConeGeometry(0.1, 0.5, 6), whiteMat);
    tip.rotation.x = Math.PI / 2; tip.position.z = 1.6;
    weaponGroup.add(shaft, tip);
  }

  // 3D Banner Flag with CanvasTexture
  const bannerCanvas = document.createElement("canvas");
  bannerCanvas.width = 128; bannerCanvas.height = 256;
  const bCtx = bannerCanvas.getContext("2d");
  bCtx.fillStyle = "rgba(15, 23, 42, 0.95)"; bCtx.fillRect(8, 8, 112, 240);
  bCtx.strokeStyle = heroData.color; bCtx.lineWidth = 6; bCtx.strokeRect(8, 8, 112, 240);
  bCtx.fillStyle = heroData.color; bCtx.font = "bold 90px serif"; bCtx.textAlign = "center"; bCtx.fillText(heroData.hanja, 64, 110);
  bCtx.fillStyle = "#ffffff"; bCtx.font = "bold 22px sans-serif"; bCtx.fillText(heroData.name.substring(0, 5), 64, 180);
  const texture = new THREE.CanvasTexture(bannerCanvas);

  const bannerMesh = new THREE.Mesh(new THREE.PlaneGeometry(0.75, 1.5), new THREE.MeshBasicMaterial({ map: texture, side: THREE.DoubleSide, transparent: true }));
  bannerMesh.position.set(-0.5, 1.75, -0.45);
  bannerMesh.rotation.y = Math.PI / 6;
  charGroup.add(bannerMesh);

  return root;
}

/* 3D Dialog Viewer Controller */
let dialogScene = null, dialogCamera = null, dialogRenderer = null, dialogModelGroup = null, animFrameId = null;
let isDragging = false, prevMousePos = { x: 0, y: 0 };

function init3DDialogViewer(heroData) {
  const container = document.getElementById("dialog-3d-view");
  const canvas = document.getElementById("viewer-canvas");
  if (!container || !canvas) return;

  if (!dialogScene) {
    dialogScene = new THREE.Scene();
    dialogCamera = new THREE.PerspectiveCamera(40, 340 / 380, 0.1, 100);
    dialogCamera.position.set(0, 3.2, 7.5);
    dialogCamera.lookAt(0, 1.6, 0);

    dialogRenderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    dialogRenderer.setSize(340, 380);
    dialogRenderer.setPixelRatio(1);

    const ambient = new THREE.AmbientLight(0xffffff, 0.9);
    const dirLight = new THREE.DirectionalLight(0xfffbeb, 1.2);
    dirLight.position.set(5, 10, 7);
    dialogScene.add(ambient, dirLight);

    // Mouse & Touch Drag Rotation Bindings
    canvas.addEventListener("mousedown", e => { isDragging = true; prevMousePos = { x: e.clientX, y: e.clientY }; });
    window.addEventListener("mousemove", e => {
      if (!isDragging || !dialogModelGroup) return;
      const dx = e.clientX - prevMousePos.x;
      dialogModelGroup.rotation.y += dx * 0.015;
      prevMousePos = { x: e.clientX, y: e.clientY };
    });
    window.addEventListener("mouseup", () => { isDragging = false; });

    canvas.addEventListener("touchstart", e => {
      if (e.touches.length > 0) { isDragging = true; prevMousePos = { x: e.touches[0].clientX, y: e.touches[0].clientY }; }
    }, { passive: true });
    window.addEventListener("touchmove", e => {
      if (!isDragging || !dialogModelGroup || e.touches.length === 0) return;
      const dx = e.touches[0].clientX - prevMousePos.x;
      dialogModelGroup.rotation.y += dx * 0.015;
      prevMousePos = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    }, { passive: true });
    window.addEventListener("touchend", () => { isDragging = false; });
  }

  if (dialogModelGroup) dialogScene.remove(dialogModelGroup);
  if (animFrameId) cancelAnimationFrame(animFrameId);

  dialogModelGroup = buildHero3DModel(heroData);
  dialogScene.add(dialogModelGroup);

  function animate() {
    animFrameId = requestAnimationFrame(animate);
    if (!isDragging && dialogModelGroup) {
      dialogModelGroup.rotation.y += 0.008;
    }
    dialogRenderer.render(dialogScene, dialogCamera);
  }
  animate();
}

/* 4. Open Hero Detail Modal */
function openHeroModal(heroId) {
  const hero = HERO_DB[heroId];
  if (!hero) return;

  const dialog = document.getElementById("hero-dialog");
  const infobox = document.getElementById("dialog-infobox");
  const isUnlocked = userUnlockedSet.has(hero.id);

  const baseAtk = hero.tier * 22 + 10;
  const atk2 = Math.round(baseAtk * 1.15);
  const atk3 = Math.round(baseAtk * 1.35);

  infobox.innerHTML = `
    <div class="infobox-header">
      <div class="infobox-title" style="color:${hero.color}">
        [Tier ${hero.tier}] ${hero.name} (${hero.hanja})
      </div>
      <div class="infobox-sub">
        세력: ${hero.faction} | 주무기: ${hero.weapon} | 탈것: ${hero.mount === 'none' ? '보병' : hero.mount}
      </div>
    </div>
    <div class="stat-grid">
      <div class="stat-box"><label>1★ 기본 공격력</label><span>${baseAtk}</span></div>
      <div class="stat-box"><label>2★ 숙련 공격력</label><span>${atk2}</span></div>
      <div class="stat-box"><label>3★ 무쌍 각성</label><span>${atk3}</span></div>
      <div class="stat-box"><label>사거리 / 공속</label><span>${14 + hero.tier * 2}m / ${(1.0 + hero.tier * 0.15).toFixed(2)}/s</span></div>
    </div>
    <div style="margin-bottom:14px;">
      <h4 style="color:#fde047; font-size:13px; margin-bottom:4px;">특기 및 무쌍 스킬</h4>
      <p style="font-size:13px; color:#cbd5e1; line-height:1.5;">${hero.skillDesc}</p>
    </div>
    <div style="margin-bottom:14px;">
      <h4 style="color:#38bdf8; font-size:13px; margin-bottom:4px;">삼고초려 영입 조건</h4>
      <p style="font-size:13px; color:#e2e8f0;">
        ${isUnlocked ? '✅ <strong style="color:#34d399;">해금 완료 (전장 출전 가능)</strong>' : `🔒 미해금 (${hero.unlockCond || '명성 소모 영입'}, 필요 명성: 🎖️${hero.unlockCost})`}
      </p>
    </div>
    <div>
      <h4 style="color:#c084fc; font-size:13px; margin-bottom:4px;">포함 인연 시너지</h4>
      <p style="font-size:12px; color:#94a3b8;">
        • ${hero.faction} 세력 버프 (${hero.faction === '촉' ? '공속+25%' : (hero.faction === '위' ? '화력+15%' : (hero.faction === '오' ? '화염속성' : '치명타+25%'))})<br>
        • <a href="#/tree/factions" style="color:#38bdf8; text-decoration:none;" onclick="document.getElementById('hero-dialog').close()">[상세 인연 매트릭스 보러가기]</a>
      </p>
    </div>
  `;

  dialog.showModal();
  init3DDialogViewer(hero);
}

document.getElementById("dialog-close-btn").onclick = () => {
  document.getElementById("hero-dialog").close();
};

/* 5. Hash Router & Article Content Matrix */
const ARTICLES = {
  overview: `
    <div class="wiki-doc">
      <h1>1장. 게임 개요 & 아르곤 3D 엔진 (Engine Overview)</h1>
      <div class="doc-callout">
        <b>💡 Zero-Asset Argon Procedural Engine:</b> 본 게임은 100% 절차적 3D 코드 파이프라인으로 구성되어 있어 외부 이미지/텍스처 다운로드 없이 순수 Three.js & Canvas 렌더링으로 스마트폰 세로 화면에서 즉시 구동됩니다.
      </div>
      <h2>🎮 코어 루프 (Core Loop)</h2>
      <p>군량미(Gold)를 소모하여 타일에 1단계 유닛을 등용하고, 동일한 Tier의 장수를 터치 드래그하여 상위 Tier 장수로 합성(Merge)합니다. 출전한 장수들은 황건적부터 무신 여포까지 출현하는 적들을 관문 전방에서 자동으로 맞서 싸웁니다.</p>

      <h2>⚔️ 합성(Merge) 및 세력 계승 법칙</h2>
      <table>
        <thead>
          <tr><th>Tier</th><th>대표 장수</th><th>공격 타입 및 이펙트</th><th>승급 확률 가중치</th></tr>
        </thead>
        <tbody>
          <tr><td>Tier 1</td><td>의용병 (16종)</td><td>단발 사격 / 기본 창격</td><td>등용 시 100% 출현</td></tr>
          <tr><td>Tier 2</td><td>정예 장수 (20종)</td><td>2연타 속사 / 기본 기병</td><td>합성 시 100% 승급</td></tr>
          <tr><td>Tier 3</td><td>서서, 하후연, 황개 등 (24종)</td><td>관통 화살 / 고육지계</td><td>선봉 지정 시 3배 우대</td></tr>
          <tr><td>Tier 4</td><td>조운, 장합, 주태 등 (24종)</td><td>초고속 창격 연타</td><td>명성 100🎖️ 삼고초려 해금</td></tr>
          <tr><td>Tier 5</td><td>관우, 하후돈, 손책 등 (20종)</td><td>청룡언월도 광역 검기</td><td>명성 150🎖️ 삼고초려 해금</td></tr>
          <tr><td>Tier 6</td><td>와룡 제갈량, 사마의 등 (12종)</td><td>적벽 화공 / 팔진도 둔화 마법</td><td>명성 300🎖️ 해금</td></tr>
          <tr><td>Tier 7</td><td>무신 여포, 소열제 유비 (4종)</td><td>화면 전체 사거리 진홍색 방천화극 폭발</td><td>명성 600🎖️ 최고의 패왕</td></tr>
        </tbody>
      </table>

      <h2>🌾 장수 해산 (Refund) 공식</h2>
      <p>장수를 하단 [장수 해산구] 영역으로 드래그 앤 드롭하면 현재 등용 비용 및 Tier 비례 <b>50% 군량미를 즉시 환급</b>받고 타일을 확보할 수 있습니다.</p>
    </div>
  `,
  factions: `
    <div class="wiki-doc">
      <h1>2장. 4대 세력 & 10대 인연 시너지 (Synergy Matrix)</h1>
      <p>전장에 동일한 세력 장수를 배치하면 세력 고유 버프가 즉시 발동됩니다.</p>

      <h2>🚩 4대 세력 버프 수치표</h2>
      <table>
        <thead>
          <tr><th>세력</th><th>발동 조건</th><th>세력 버프 효과</th></tr>
        </thead>
        <tbody>
          <tr><td>🟢 촉나라 (蜀)</td><td>전장 내 촉 장수 3명 이상</td><td><b>전체 아군 공격속도 +25%</b></td></tr>
          <tr><td>🔵 위나라 (魏)</td><td>전장 내 위 장수 2명 이상</td><td><b>전체 아군 화력(데미지) +15%</b></td></tr>
          <tr><td>🔴 오나라 (吳)</td><td>전장 내 오 장수 2명 이상</td><td><b>적 타격 시 지속 화염 데미지</b></td></tr>
          <tr><td>🟣 군웅 (群)</td><td>전장 내 군웅 장수 3명 이상</td><td><b>치명타 확률 +25% & 치명타 데미지 2배</b></td></tr>
        </tbody>
      </table>

      <h2>✨ 10대 특수 인연 매트릭스</h2>
      <table>
        <thead>
          <tr><th>인연명</th><th>조합 구성원</th><th>특수 시너지 효과</th></tr>
        </thead>
        <tbody>
          <tr><td>도원결의 (桃園結義)</td><td>유비 + 관우 + 장비</td><td>전체 아군 공격력 +35% 및 HP 자동 회복</td></tr>
          <tr><td>오호대장군 (五虎大將軍)</td><td>관우 + 장비 + 조운 + 마초 + 황충</td><td>기본 공격 관통 폭발 데미지 추가</td></tr>
          <tr><td>와룡봉추 (臥龍鳳雛)</td><td>제갈량 + 방통</td><td>계책 쿨타임 -30% 단축</td></tr>
          <tr><td>오자양장 (五子良將)</td><td>장료 + 악진 + 우금 + 서황 + 장합</td><td>공격속도 +30% 및 이동 둔화 50%</td></tr>
          <tr><td>호위쌍벽 (護衛雙璧)</td><td>허저 + 전위</td><td>성문 피격 데미지 40% 감소</td></tr>
          <tr><td>적벽화신 (赤壁火神)</td><td>주유 + 육손</td><td>적벽 화공 피해량 2배 증가</td></tr>
          <tr><td>강동이교 (江東二喬)</td><td>대교 + 소교</td><td>5초마다 군량미 +10 자동 수급</td></tr>
          <tr><td>연환계 (連環計)</td><td>초선 + 여포</td><td>여포 방천화극 광역 범위 50% 증가</td></tr>
          <tr><td>하북쌍벽 (河北雙璧)</td><td>안량 + 문추</td><td>보스 타격 시 추가 데미지 +50%</td></tr>
          <tr><td>남만왕 (南蠻王)</td><td>맹획 + 축융</td><td>코끼리/비도 타격 시 적 2초 스턴</td></tr>
        </tbody>
      </table>
    </div>
  `,
  terrain: `
    <div class="wiki-doc">
      <h1>3장. 팔진도 전술 지형 & 보스 일기토 (Terrain & Duels)</h1>
      <h2>☯️ 5x4 팔진도 특수 지형 타일</h2>
      <p>하단 20칸 격자 중 랜덤 생성되는 특수 전술 타일에 장수를 배치하면 강력한 지형 보너스를 얻습니다.</p>
      <table>
        <thead>
          <tr><th>지형 타일</th><th>네온 상징색</th><th>지형 특수 효과</th></tr>
        </thead>
        <tbody>
          <tr><td>⛰️ 고지대 (High Ground)</td><td>시안 무늬 (#38bdf8)</td><td><b>사거리 +35%, 치명타 확률 +20%</b></td></tr>
          <tr><td>🔥 화염단 (Fire Altar)</td><td>붉은 무늬 (#ef4444)</td><td><b>공격 시 폭발 화염 데미지 +30%</b></td></tr>
          <tr><td>⚡ 풍신단 (Wind Altar)</td><td>초록 무늬 (#10b981)</td><td><b>공격속도 +40% 상승</b></td></tr>
          <tr><td>☯️ 팔진도 (Bagua Core)</td><td>보라 무늬 (#a855f7)</td><td><b>합성 시 25% 확률로 2단계 대성공 (+2 Tier)</b></td></tr>
          <tr><td>🌾 보급소 (Supply Depot)</td><td>황금 무늬 (#facc15)</td><td><b>5초마다 군량미 +5 자동 생산</b></td></tr>
        </tbody>
      </table>

      <h2>⚔️ 보스 스턴 기믹 & 1:1 일기토 (Dual Tap Battle)</h2>
      <p>5웨이브마다 대형 보스(화웅, 동탁, 여포 등)가 출현하며 8초마다 전장 포효로 아군을 스턴시킵니다. 보스 HP가 70% 이하로 떨어지면 <b>1:1 일기토 이벤트 Banner</b>가 활성화됩니다. 5초 동안 화면을 미친듯이 연타하여 기강 게이지를 60% 이상 채우면 일기토 승리로 보스 체력 25%를 즉시 삭감하고 4초간 마비시키며 보물 기물을 드랍합니다!</p>
    </div>
  `,
  progression: `
    <div class="wiki-doc">
      <h1>4장. 삼고초려 해금 & 태학 영구 연구소 (Progression & Tech)</h1>
      <h2>🎖️ 명성(Reputation) 획득처</h2>
      <p>웨이브 클리어(+15🎖️), 보스 격파(+30🎖️), 1:1 일기토 승리(+25🎖️) 시 명성을 획득합니다.</p>

      <h2>🏛️ 태학(太學) 영구 연구 효율표</h2>
      <table>
        <thead>
          <tr><th>연구 항목</th><th>효과 설명</th><th>레벨당 투자 명성</th></tr>
        </thead>
        <tbody>
          <tr><td>군량 비축술</td><td>게임 시작 군량미 +25🌾 증대</td><td>(Lv+1) x 30 🎖️</td></tr>
          <tr><td>초고속 천거술</td><td>등용 및 합성 시 고티어 확률 +3%</td><td>(Lv+1) x 40 🎖️</td></tr>
          <tr><td>호로관 축성술</td><td>성문 최대 HP +25 및 자동 수리</td><td>(Lv+1) x 35 🎖️</td></tr>
          <tr><td>병법 연마</td><td>전체 아군 기본 공격력 +10%</td><td>(Lv+1) x 50 🎖️</td></tr>
        </tbody>
      </table>

      <h2>🏺 6대 명품 보물 (Relic Equipment)</h2>
      <p><b>청강검</b>(공격력 +20), <b>태평요술서</b>(스킬 피해 +30%), <b>손자병법</b>(명성 획득 +50%), <b>한혈마 등자</b>(공속 +20%), <b>전국옥새</b>(시작 군량 +50), <b>양유기의 활</b>(사거리 +25%).</p>
    </div>
  `,
  roadmap: `
    <div class="wiki-doc">
      <h1>5장. 마스터 개발 로드맵 & 패치 노트 (Roadmap)</h1>
      <table>
        <thead>
          <tr><th>단계</th><th>마일스톤 목표</th><th>달성 상태</th></tr>
        </thead>
        <tbody>
          <tr><td>Phase 1</td><td>Three.js 3D 엔진 코어 및 5x4 그리드 레이아웃 구축</td><td>✅ 완료 (v1.0)</td></tr>
          <tr><td>Phase 2</td><td>120인 명장 데이터베이스 및 한자 CanvasTexture 파이프라인</td><td>✅ 완료 (v2.0)</td></tr>
          <tr><td>Phase 3</td><td>팔진도 전술 지형, 1:1 일기토 연타 및 보물 시스템 연동</td><td>✅ 완료 (v2.5)</td></tr>
          <tr><td>Phase 4</td><td>HELLSCRIPT 스타일 공식 위키 & 3D 아르곤 DB 탐색기 연동</td><td>✅ 완료 (v3.0)</td></tr>
          <tr><td>Phase 5</td><td>글로벌 멀티플레이어 협동 관문 방어 모드 예정</td><td>⏳ 2025 Q3 예정</td></tr>
        </tbody>
      </table>
    </div>
  `
};

/* 6. DB Explorer View Renderer */
let currentDbCategory = "heroes";
let currentFactionFilter = "all";
let currentTierFilter = "all";
let currentUnlockFilter = "all";
let searchQuery = "";

function renderSidebarTree(activeMode, activePath) {
  const nav = document.getElementById("sidebar-nav");
  if (!nav) return;

  if (activeMode === "tree") {
    nav.innerHTML = `
      <div class="nav-section-title">📖 전술 위키 가이드</div>
      <a href="#/tree/overview" class="nav-item ${activePath === 'overview' ? 'active' : ''}">1장. 개요 & 3D 엔진</a>
      <a href="#/tree/factions" class="nav-item ${activePath === 'factions' ? 'active' : ''}">2장. 세력 & 10대 시너지</a>
      <a href="#/tree/terrain" class="nav-item ${activePath === 'terrain' ? 'active' : ''}">3장. 팔진도 & 일기토</a>
      <a href="#/tree/progression" class="nav-item ${activePath === 'progression' ? 'active' : ''}">4장. 삼고초려 & 태학</a>
      <a href="#/tree/roadmap" class="nav-item ${activePath === 'roadmap' ? 'active' : ''}">5장. 로드맵 & 패치노트</a>
    `;
  } else {
    nav.innerHTML = `
      <div class="nav-section-title">🗂️ 리소스 DB 탐색기</div>
      <a href="#/db/heroes" class="nav-item ${activePath === 'heroes' ? 'active' : ''}">⚔️ 전 장수 DB (120인)</a>
      <a href="#/db/treasures" class="nav-item ${activePath === 'treasures' ? 'active' : ''}">🏺 명품 보물 DB</a>
      <a href="#/db/strategies" class="nav-item ${activePath === 'strategies' ? 'active' : ''}">🪶 금낭묘계 DB</a>
      <a href="#/db/enemies" class="nav-item ${activePath === 'enemies' ? 'active' : ''}">👾 적군·보스 DB</a>
    `;
  }
}

function renderDbHeroesView() {
  const main = document.getElementById("main");

  const heroesList = Object.values(HERO_DB).filter(h => {
    if (currentFactionFilter !== "all" && h.faction !== currentFactionFilter) return false;
    if (currentTierFilter !== "all" && h.tier !== parseInt(currentTierFilter)) return false;
    if (currentUnlockFilter === "unlocked" && !userUnlockedSet.has(h.id)) return false;
    if (currentUnlockFilter === "locked" && userUnlockedSet.has(h.id)) return false;
    if (searchQuery.trim() !== "") {
      const q = searchQuery.toLowerCase().trim();
      return h.name.toLowerCase().includes(q) || h.hanja.includes(q) || h.faction.includes(q) || h.weapon.includes(q);
    }
    return true;
  });

  main.innerHTML = `
    <div class="breadcrumb">
      <a href="#/db/heroes">리소스 DB</a> &gt; <span>⚔️ 전 장수 DB (${heroesList.length}/120)</span>
    </div>
    <div class="db-container">
      <div class="sub-category-tabs">
        <a href="#/db/heroes" class="sub-tab ${currentDbCategory === 'heroes' ? 'active' : ''}">⚔️ 전 장수 DB</a>
        <a href="#/db/treasures" class="sub-tab ${currentDbCategory === 'treasures' ? 'active' : ''}">🏺 명품 보물 DB</a>
        <a href="#/db/strategies" class="sub-tab ${currentDbCategory === 'strategies' ? 'active' : ''}">🪶 금낭묘계 DB</a>
        <a href="#/db/enemies" class="sub-tab ${currentDbCategory === 'enemies' ? 'active' : ''}">👾 적군·보스 DB</a>
      </div>

      <div class="db-filter-bar">
        <div class="filter-group">
          <span class="filter-label">세력:</span>
          <button class="filter-btn ${currentFactionFilter === 'all' ? 'active' : ''}" data-f="all">전체</button>
          <button class="filter-btn ${currentFactionFilter === '촉' ? 'active' : ''}" data-f="촉">🟢 촉(蜀)</button>
          <button class="filter-btn ${currentFactionFilter === '위' ? 'active' : ''}" data-f="위">🔵 위(魏)</button>
          <button class="filter-btn ${currentFactionFilter === '오' ? 'active' : ''}" data-f="오">🔴 오(吳)</button>
          <button class="filter-btn ${currentFactionFilter === '군웅' ? 'active' : ''}" data-f="군웅">🟣 군웅(群)</button>
        </div>
        <div class="filter-group">
          <span class="filter-label">등급:</span>
          <button class="filter-btn ${currentTierFilter === 'all' ? 'active' : ''}" data-t="all">전체 Tier</button>
          <button class="filter-btn ${currentTierFilter === '1' ? 'active' : ''}" data-t="1">T1</button>
          <button class="filter-btn ${currentTierFilter === '3' ? 'active' : ''}" data-t="3">T3</button>
          <button class="filter-btn ${currentTierFilter === '5' ? 'active' : ''}" data-t="5">T5</button>
          <button class="filter-btn ${currentTierFilter === '7' ? 'active' : ''}" data-t="7">T7</button>
        </div>
        <div class="filter-group">
          <span class="filter-label">해금:</span>
          <button class="filter-btn ${currentUnlockFilter === 'all' ? 'active' : ''}" data-u="all">전체</button>
          <button class="filter-btn ${currentUnlockFilter === 'unlocked' ? 'active' : ''}" data-u="unlocked">✅ 내 해금 장수</button>
          <button class="filter-btn ${currentUnlockFilter === 'locked' ? 'active' : ''}" data-u="locked">🔒 미해금</button>
        </div>
      </div>

      <div class="hero-grid" id="cards-container"></div>
    </div>
  `;

  // Render Hero Cards
  const cardsContainer = document.getElementById("cards-container");
  heroesList.forEach(hero => {
    const isUnlocked = userUnlockedSet.has(hero.id);
    const card = document.createElement("div");
    card.className = `hero-card ${isUnlocked ? 'unlocked' : ''}`;
    card.onclick = () => openHeroModal(hero.id);

    card.innerHTML = `
      ${isUnlocked ? `<span class="unlocked-badge">✅ 해금됨</span>` : ''}
      <canvas class="flag-canvas" id="flag-cv-${hero.id}"></canvas>
      <div class="hero-card-name" style="color:${hero.color}">${hero.name}</div>
      <div class="hero-card-tier">Tier ${hero.tier} | ${hero.faction}</div>
      <div class="hero-card-tags">
        <span class="tag-badge">${hero.weapon}</span>
        <span class="tag-badge">${hero.mount === 'none' ? '보병' : hero.mount}</span>
      </div>
    `;
    cardsContainer.appendChild(card);

    // Render Canvas Flag Emblem
    setTimeout(() => {
      const cv = document.getElementById(`flag-cv-${hero.id}`);
      if (cv) drawHeroFlagCanvas(cv, hero);
    }, 0);
  });

  // Attach Event Listeners to Filter Buttons
  document.querySelectorAll(".filter-btn[data-f]").forEach(btn => {
    btn.onclick = () => { currentFactionFilter = btn.dataset.f; renderDbHeroesView(); };
  });
  document.querySelectorAll(".filter-btn[data-t]").forEach(btn => {
    btn.onclick = () => { currentTierFilter = btn.dataset.t; renderDbHeroesView(); };
  });
  document.querySelectorAll(".filter-btn[data-u]").forEach(btn => {
    btn.onclick = () => { currentUnlockFilter = btn.dataset.u; renderDbHeroesView(); };
  });
}

function renderOtherDbViews(category) {
  const main = document.getElementById("main");
  let content = "";

  if (category === "treasures") {
    content = `
      <h2>🏺 6대 명품 보물 (Relic Treasures)</h2>
      <table>
        <thead><tr><th>보물명</th><th>기물 속성</th><th>효과 수치</th></tr></thead>
        <tbody>
          <tr><td>청강검 (靑釭劍)</td><td>공격 무구</td><td><b>전체 장수 공격력 +20 증가</b></td></tr>
          <tr><td>태평요술서 (太平要術)</td><td>주술 비기</td><td><b>적벽 화공 계책 피해 +30%</b></td></tr>
          <tr><td>손자병법 (孫子兵法)</td><td>병법서</td><td><b>전장 클리어 명성 획득량 +50%</b></td></tr>
          <tr><td>한혈마 등자 (汗血馬)</td><td>기마 장구</td><td><b>전체 아군 공격속도 +20%</b></td></tr>
          <tr><td>전국옥새 (傳國玉璽)</td><td>황제 옥새</td><td><b>시작 군량미 +50🌾 즉시 지급</b></td></tr>
          <tr><td>양유기의 활 (養由基弓)</td><td>신궁 무구</td><td><b>모든 궁병/창병 사거리 +25%</b></td></tr>
        </tbody>
      </table>
    `;
  } else if (category === "strategies") {
    content = `
      <h2>🪶 제갈량의 금낭묘계 (Roguelike Strategies)</h2>
      <table>
        <thead><tr><th>책략 카드</th><th>효과</th></tr></thead>
        <tbody>
          <tr><td>도원결의 (桃園結義)</td><td>전체 아군 공격력 +25%</td></tr>
          <tr><td>연노 개량 (連弩改良)</td><td>전체 아군 공격속도 +20%</td></tr>
          <tr><td>병량 확보 (兵糧確保)</td><td>적 처치 시 골드 획득 +30%</td></tr>
          <tr><td>적벽 대화재 (赤壁大火災)</td><td>적벽 화공 피해량 +50%</td></tr>
          <tr><td>호로관 보수 (虎牢關補修)</td><td>성문 HP +50 회복 및 최대 HP +20</td></tr>
        </tbody>
      </table>
    `;
  } else {
    content = `
      <h2>👾 적군 & 보스 명장 (Enemies & Bosses)</h2>
      <table>
        <thead><tr><th>적 구분</th><th>출현 웨이브</th><th>특수 기믹</th></tr></thead>
        <tbody>
          <tr><td>황건적 보병</td><td>Wave 1~4</td><td>기본 이동 보병 적군</td></tr>
          <tr><td>서량 기병</td><td>Wave 6~9</td><td>빠른 이동 속도의 돌격 기병</td></tr>
          <tr><td>화웅 (보스)</td><td>Wave 5</td><td>사곡 관문 대형 보스, 8초마다 전장 포효 스턴</td></tr>
          <tr><td>동탁 (보스)</td><td>Wave 10</td><td>마왕 보스, 미친 높은 체력 및 일기토 이벤트</td></tr>
          <tr><td>무신 여포 (최종 보스)</td><td>Wave 15</td><td>천하무쌍 보스, 진홍색 광역 화력 피격 주의</td></tr>
        </tbody>
      </table>
    `;
  }

  main.innerHTML = `
    <div class="breadcrumb"><a href="#/db/heroes">리소스 DB</a> &gt; <span>DB 뷰어</span></div>
    <div class="db-container">
      <div class="sub-category-tabs">
        <a href="#/db/heroes" class="sub-tab ${category === 'heroes' ? 'active' : ''}">⚔️ 전 장수 DB</a>
        <a href="#/db/treasures" class="sub-tab ${category === 'treasures' ? 'active' : ''}">🏺 명품 보물 DB</a>
        <a href="#/db/strategies" class="sub-tab ${category === 'strategies' ? 'active' : ''}">🪶 금낭묘계 DB</a>
        <a href="#/db/enemies" class="sub-tab ${category === 'enemies' ? 'active' : ''}">👾 적군·보스 DB</a>
      </div>
      <div class="wiki-doc">${content}</div>
    </div>
  `;
}

/* 7. Main Hash Router Controller */
function handleRouting() {
  const hash = location.hash || "#/tree/overview";
  const parts = hash.replace("#/", "").split("/");
  const mode = parts[0] || "tree";
  const path = parts[1] || (mode === "tree" ? "overview" : "heroes");

  // Mode Tabs Active state
  document.getElementById("tab-tree").classList.toggle("active", mode === "tree");
  document.getElementById("tab-db").classList.toggle("active", mode === "db");

  renderSidebarTree(mode, path);

  if (mode === "tree") {
    const main = document.getElementById("main");
    const content = ARTICLES[path] || ARTICLES.overview;
    main.innerHTML = `
      <div class="breadcrumb"><a href="#/tree">전술 위키</a> &gt; <span>문서</span></div>
      ${content}
    `;
  } else if (mode === "db") {
    currentDbCategory = path;
    if (path === "heroes") {
      renderDbHeroesView();
    } else {
      renderOtherDbViews(path);
    }
  }

  // Mobile sidebar close on nav
  document.getElementById("wiki-sidebar").classList.remove("open");
}

/* 8. Event Listeners & Search Bindings */
window.addEventListener("hashchange", handleRouting);

document.getElementById("wiki-search").addEventListener("input", e => {
  searchQuery = e.target.value;
  if (!location.hash.startsWith("#/db/heroes")) {
    location.hash = "#/db/heroes";
  } else {
    renderDbHeroesView();
  }
});

// Shortcut ' / ' to focus search input
window.addEventListener("keydown", e => {
  if (e.key === "/" && document.activeElement !== document.getElementById("wiki-search")) {
    e.preventDefault();
    document.getElementById("wiki-search").focus();
  }
});

// Mobile Sidebar Drawer Toggle
document.getElementById("mobile-toggle").onclick = () => {
  document.getElementById("wiki-sidebar").classList.toggle("open");
};

// Initial App Launch
window.addEventListener("DOMContentLoaded", () => {
  drawWikiLogo();
  updateSyncRateBadge();
  handleRouting();
});
