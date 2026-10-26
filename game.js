const FACTION_META = {
  shu: { name: '촉', hanja: '蜀', color: '#10B981', hex: 0x10B981 },
  wei: { name: '위', hanja: '魏', color: '#3B82F6', hex: 0x3B82F6 },
  wu:  { name: '오', hanja: '吳', color: '#F97316', hex: 0xF97316 },
  qun: { name: '군웅', hanja: '群', color: '#EF4444', hex: 0xEF4444 }
};

// 28인 명장 + 스테이지 등반 해방 스토리(unlockWave, fameCost, story) 탑재
const HERO_DB = [
  {
    "id": "shu_1",
    "tier": 1,
    "faction": "shu",
    "branch": "tactician",
    "name": "간옹",
    "hanja": "憲",
    "weapon": "sword",
    "wName": "서촉단검",
    "helm": "scholar",
    "beard": "goatee",
    "atk": 24,
    "spd": 1.0,
    "range": 8.5,
    "stamp": "蜀漢開國",
    "sealHanja": "蜀漢開國",
    "unlockWave": 1,
    "fameCost": 0,
    "bonds": [],
    "desc": "유비를 오랫동안 보좌한 충직한 논객",
    "story": "유비의 입촉과 촉한 창업을 도운 개국 공신"
  },
  {
    "id": "shu_1_2",
    "tier": 1,
    "faction": "shu",
    "branch": "tactician",
    "name": "미축",
    "hanja": "竺",
    "weapon": "fan",
    "wName": "수죽선",
    "helm": "scholar",
    "beard": "goatee",
    "atk": 25,
    "spd": 0.95,
    "range": 9.0,
    "stamp": "傾家助軍",
    "sealHanja": "傾家助軍",
    "unlockWave": 1,
    "fameCost": 0,
    "bonds": [],
    "desc": "가산을 털어 유비를 지원한 촉한의 문신",
    "story": "서주 시절부터 유비의 진영을 지지한 재력가"
  },
  {
    "id": "shu_1_3",
    "tier": 1,
    "faction": "shu",
    "branch": "tactician",
    "name": "손건",
    "hanja": "乾",
    "weapon": "fan",
    "wName": "외교깃선",
    "helm": "scholar",
    "beard": "none",
    "atk": 23,
    "spd": 1.05,
    "range": 9.0,
    "stamp": "禮義文臣",
    "sealHanja": "禮義文臣",
    "unlockWave": 1,
    "fameCost": 0,
    "bonds": [],
    "desc": "각지 군웅과의 외교를 수행한 사절",
    "story": "유비의 뜻을 받들어 외교 관계를 성사시킨 유능한 사절"
  },
  {
    "id": "shu_1_4",
    "tier": 1,
    "faction": "shu",
    "branch": "vanguard",
    "name": "요화",
    "hanja": "化",
    "weapon": "spear",
    "wName": "촉한정창",
    "helm": "helm",
    "beard": "wild",
    "atk": 27,
    "spd": 0.9,
    "range": 8.5,
    "stamp": "蜀中先鋒",
    "sealHanja": "蜀中先鋒",
    "unlockWave": 1,
    "fameCost": 0,
    "bonds": [],
    "desc": "황건적 출신으로 촉한의 처음과 끝을 지킨 장수",
    "story": "관우의 부하에서 시작하여 북벌까지 선봉에 선 노장"
  },
  {
    "id": "shu_1_5",
    "tier": 1,
    "faction": "shu",
    "branch": "vanguard",
    "name": "주창",
    "hanja": "倉",
    "weapon": "glaive",
    "wName": "철담대도",
    "helm": "helm",
    "beard": "wild",
    "atk": 28,
    "spd": 0.9,
    "range": 8.5,
    "stamp": "鐵膽忠義",
    "sealHanja": "鐵膽忠義",
    "unlockWave": 1,
    "fameCost": 0,
    "bonds": [],
    "desc": "관우의 언월도를 받들며 충성을 다한 호위무사",
    "story": "관우의 곁을 수호한 괴력의 충신"
  },
  {
    "id": "shu_2_1",
    "tier": 2,
    "faction": "shu",
    "branch": "tactician",
    "name": "마속",
    "hanja": "謖",
    "weapon": "fan",
    "wName": "가정병서",
    "helm": "scholar",
    "beard": "none",
    "atk": 52,
    "spd": 1.1,
    "range": 9.5,
    "stamp": "紙上談兵",
    "sealHanja": "紙上談兵",
    "unlockWave": 1,
    "fameCost": 0,
    "bonds": [],
    "desc": "제갈량의 총애를 받았으나 가정 전투에서 재앙을 부른 참모",
    "story": "병법 이론에 탁월했으나 실전 군령 위반으로 스러진 참모"
  },
  {
    "id": "shu_2_2",
    "tier": 2,
    "faction": "shu",
    "branch": "tactician",
    "name": "마량",
    "hanja": "良",
    "weapon": "fan",
    "wName": "백미학선",
    "helm": "scholar",
    "beard": "none",
    "atk": 54,
    "spd": 1.05,
    "range": 9.5,
    "stamp": "馬氏白眉",
    "sealHanja": "馬氏白眉",
    "unlockWave": 1,
    "fameCost": 0,
    "bonds": [],
    "desc": "마씨 오형제 중 가장 뛰어난 백미의 모사",
    "story": "흰 눈썹을 지닌 촉한 최고의 참모이자 외교관"
  },
  {
    "id": "shu_2_3",
    "tier": 2,
    "faction": "shu",
    "branch": "tactician",
    "name": "비의",
    "hanja": "禕",
    "weapon": "sword",
    "wName": "관인보검",
    "helm": "scholar",
    "beard": "goatee",
    "atk": 55,
    "spd": 1.0,
    "range": 9.0,
    "stamp": "寬仁明察",
    "sealHanja": "寬仁明察",
    "unlockWave": 1,
    "fameCost": 0,
    "bonds": [],
    "desc": "제갈량 사후 촉한의 재정을 맡아 국정을 안정시킨 승상",
    "story": "너그럽고 명철한 성품으로 촉한을 총괄한 명재상"
  },
  {
    "id": "shu_2_4",
    "tier": 2,
    "faction": "shu",
    "branch": "tactician",
    "name": "동윤",
    "hanja": "允",
    "weapon": "fan",
    "wName": "정직의선",
    "helm": "scholar",
    "beard": "goatee",
    "atk": 53,
    "spd": 1.0,
    "range": 9.0,
    "stamp": "貞亮正直",
    "sealHanja": "貞亮正直",
    "unlockWave": 1,
    "fameCost": 0,
    "bonds": [],
    "desc": "황제의 간신을 물리치고 조정의 기강을 세운 직언의 신하",
    "story": "유선의 곁에서 간신 환호를 견제한 곧은 신하"
  },
  {
    "id": "shu_2_5",
    "tier": 2,
    "faction": "shu",
    "branch": "cavalry",
    "name": "미방",
    "hanja": "芳",
    "weapon": "spear",
    "wName": "강릉보창",
    "helm": "helm",
    "beard": "none",
    "atk": 56,
    "spd": 1.15,
    "range": 8.5,
    "stamp": "邊陣臨戰",
    "sealHanja": "邊陣臨戰",
    "unlockWave": 1,
    "fameCost": 0,
    "bonds": [],
    "desc": "미축의 아우이자 강릉 수비를 맡았던 장수",
    "story": "형주 수비를 맡았던 무장"
  },
  {
    "id": "shu_2",
    "tier": 3,
    "faction": "shu",
    "branch": "vanguard",
    "name": "관평",
    "hanja": "平",
    "weapon": "glaive",
    "wName": "참마언월도",
    "helm": "helm",
    "beard": "none",
    "atk": 120,
    "spd": 1.05,
    "range": 9.0,
    "stamp": "忠義少將",
    "sealHanja": "忠義少將",
    "unlockWave": 1,
    "fameCost": 0,
    "bonds": [],
    "desc": "관우의 양자이자 충의의 소장",
    "story": "관우를 보좌하여 형주 전선을 수호한 용맹한 소장"
  },
  {
    "id": "shu_3_2",
    "tier": 3,
    "faction": "shu",
    "branch": "cavalry",
    "name": "관흥",
    "hanja": "興",
    "weapon": "glaive",
    "wName": "소언월도",
    "helm": "helm",
    "beard": "none",
    "atk": 125,
    "spd": 1.15,
    "range": 9.5,
    "stamp": "將門虎子",
    "sealHanja": "將門虎子",
    "unlockWave": 1,
    "fameCost": 0,
    "bonds": [],
    "desc": "관우의 친아들이자 북벌의 핵심으로 활약한 장수",
    "story": "아버지의 무용을 물려받아 공을 세운 호장"
  },
  {
    "id": "shu_3_3",
    "tier": 3,
    "faction": "shu",
    "branch": "cavalry",
    "name": "장포",
    "hanja": "苞",
    "weapon": "snake",
    "wName": "소장팔창",
    "helm": "helm",
    "beard": "wild",
    "atk": 130,
    "spd": 1.1,
    "range": 9.5,
    "stamp": "燕人繼承",
    "sealHanja": "燕人繼承",
    "unlockWave": 1,
    "fameCost": 0,
    "bonds": [],
    "desc": "장비의 아들로 용맹을 떨친 용장",
    "story": "장팔사모 무용을 계승해 제갈량의 북벌에서 활약한 선봉장"
  },
  {
    "id": "shu_3_4",
    "tier": 3,
    "faction": "shu",
    "branch": "archer",
    "name": "왕평",
    "hanja": "平",
    "weapon": "bow",
    "wName": "무당강궁",
    "helm": "helm",
    "beard": "goatee",
    "atk": 118,
    "spd": 1.25,
    "range": 11.0,
    "stamp": "無當飛軍",
    "sealHanja": "無當飛軍",
    "unlockWave": 1,
    "fameCost": 0,
    "bonds": [],
    "desc": "무당비군을 이끌고 가정 후방을 사수한 장수",
    "story": "침착하게 한중을 지켜낸 촉한의 명장"
  },
  {
    "id": "shu_3_5",
    "tier": 3,
    "faction": "shu",
    "branch": "cavalry",
    "name": "마대",
    "hanja": "岱",
    "weapon": "spear",
    "wName": "서량철창",
    "helm": "helm",
    "beard": "none",
    "atk": 122,
    "spd": 1.2,
    "range": 9.5,
    "stamp": "斬將立功",
    "sealHanja": "斬將立功",
    "unlockWave": 1,
    "fameCost": 0,
    "bonds": [],
    "desc": "마초의 사촌 동생이자 밀명을 완수한 장수",
    "story": "위연의 반란을 제압하고 임무를 완수한 촉한의 충직한 장수"
  },
  {
    "id": "shu_4_1",
    "tier": 4,
    "faction": "shu",
    "branch": "vanguard",
    "name": "이엄",
    "hanja": "嚴",
    "weapon": "sword",
    "wName": "영州보검",
    "helm": "helm",
    "beard": "goatee",
    "atk": 255,
    "spd": 1.15,
    "range": 10.0,
    "stamp": "腹心將帥",
    "sealHanja": "腹心將帥",
    "unlockWave": 2,
    "fameCost": 30,
    "bonds": [],
    "desc": "유비가 제갈량과 함께 탁고의 명을 내린 장수",
    "story": "[제2장 해방] 군량을 총괄하며 영주를 지킨 촉한의 탁고중신"
  },
  {
    "id": "shu_4_2",
    "tier": 4,
    "faction": "shu",
    "branch": "tactician",
    "name": "법정",
    "hanja": "正",
    "weapon": "fan",
    "wName": "한중묘책선",
    "helm": "scholar",
    "beard": "goatee",
    "atk": 245,
    "spd": 1.3,
    "range": 11.5,
    "stamp": "蜀漢奇謀",
    "sealHanja": "蜀漢奇謀",
    "unlockWave": 2,
    "fameCost": 30,
    "bonds": [],
    "desc": "한중 공방전에서 하후연을 참살하도록 책략을 세운 천재 참모",
    "story": "[제2장 해방] 유비가 가장 신뢰한 대담한 기략의 모사"
  },
  {
    "id": "shu_4_3",
    "tier": 4,
    "faction": "shu",
    "branch": "archer",
    "name": "엄안",
    "hanja": "顏",
    "weapon": "bow",
    "wName": "파군철궁",
    "helm": "helm",
    "beard": "white",
    "atk": 260,
    "spd": 1.2,
    "range": 11.0,
    "stamp": "嚴顏豪氣",
    "sealHanja": "嚴顏豪氣",
    "unlockWave": 3,
    "fameCost": 40,
    "bonds": [],
    "desc": "장비에게 항복하면서도 단두장군의 기개를 보인 파군의 노장",
    "story": "[제3장 해방] 머리는 잘릴지언정 항복하지 않는 기개를 보여준 노장"
  },
  {
    "id": "shu_4_4",
    "tier": 4,
    "faction": "shu",
    "branch": "tactician",
    "name": "황권",
    "hanja": "權",
    "weapon": "sword",
    "wName": "진납장검",
    "helm": "scholar",
    "beard": "goatee",
    "atk": 250,
    "spd": 1.1,
    "range": 10.5,
    "stamp": "弘雅思索",
    "sealHanja": "弘雅思索",
    "unlockWave": 3,
    "fameCost": 40,
    "bonds": [],
    "desc": "유장 수하에서 유비의 책사로 도의와 주견이 깊었던 모사",
    "story": "[제3장 해방] 이릉대전에서 고립되었으나 도의를 지킨 모사"
  },
  {
    "id": "shu_5_1",
    "tier": 5,
    "faction": "shu",
    "branch": "archer",
    "name": "황월영",
    "hanja": "英",
    "weapon": "bow",
    "wName": "목우연노",
    "helm": "female",
    "beard": "none",
    "atk": 520,
    "spd": 1.35,
    "range": 12.0,
    "stamp": "巧思木牛",
    "sealHanja": "巧思木牛",
    "unlockWave": 4,
    "fameCost": 50,
    "bonds": [],
    "desc": "제갈량의 아내로 목우유마와 연노 창안을 도운 발명가",
    "story": "[제4장 해방] 비범한 지혜로 발명품을 함께 제작한 여걸",
    "female": true
  },
  {
    "id": "shu_5_2",
    "tier": 5,
    "faction": "shu",
    "branch": "vanguard",
    "name": "위연",
    "hanja": "延",
    "weapon": "glaive",
    "wName": "자오곡쌍도",
    "helm": "helm",
    "beard": "wild",
    "atk": 580,
    "spd": 1.25,
    "range": 10.5,
    "stamp": "勇猛剛烈",
    "sealHanja": "勇猛剛烈",
    "unlockWave": 4,
    "fameCost": 60,
    "bonds": [],
    "desc": "한중태수로 발탁되어 자오곡 기습책을 제안한 맹장",
    "story": "[제4장 해방] 압도적 무력과 대담함으로 한중 방어선을 사수한 맹장"
  },
  {
    "id": "shu_5_3",
    "tier": 5,
    "faction": "shu",
    "branch": "cavalry",
    "name": "강유",
    "hanja": "維",
    "weapon": "spear",
    "wName": "녹각단창",
    "helm": "helm",
    "beard": "none",
    "atk": 550,
    "spd": 1.35,
    "range": 11.0,
    "stamp": "繼志北伐",
    "sealHanja": "繼志北伐",
    "unlockWave": 5,
    "fameCost": 70,
    "bonds": [],
    "desc": "제갈량의 병법을 전수받고 북벌을 감행한 촉한의 대장군",
    "story": "[제5장 해방] 스승의 뜻을 받들어 촉한의 국운을 걸고 북벌을 감행한 장수"
  },
  {
    "id": "shu_5_4",
    "tier": 5,
    "faction": "shu",
    "branch": "tactician",
    "name": "방통",
    "hanja": "統",
    "weapon": "fan",
    "wName": "봉추칠선",
    "helm": "scholar",
    "beard": "goatee",
    "atk": 540,
    "spd": 1.4,
    "range": 12.0,
    "stamp": "鳳雛奇策",
    "sealHanja": "鳳雛奇策",
    "unlockWave": 5,
    "fameCost": 70,
    "bonds": [],
    "desc": "와룡과 쌍벽을 이룬 봉추. 기책을 선보인 명모사",
    "story": "[제5장 해방] 와룡 제갈량과 함께 천하를 논한 천재 책사 봉추"
  },
  {
    "id": "shu_3",
    "tier": 6,
    "faction": "shu",
    "branch": "archer",
    "name": "황충",
    "hanja": "黃",
    "weapon": "bow",
    "wName": "백보철태궁",
    "helm": "helm",
    "beard": "white",
    "atk": 1200,
    "spd": 1.3,
    "range": 12.5,
    "stamp": "百步穿楊",
    "sealHanja": "百步穿楊",
    "unlockWave": 8,
    "fameCost": 100,
    "bonds": [
      "five"
    ],
    "desc": "백 걸음 밖 버들잎을 꿰뚫는 노장 신궁",
    "story": "[제8장 해방] 정군산에서 위군을 격파한 오호대장군"
  },
  {
    "id": "shu_6_2",
    "tier": 6,
    "faction": "shu",
    "branch": "cavalry",
    "name": "마초",
    "hanja": "超",
    "weapon": "spear",
    "wName": "서량용담창",
    "helm": "helm",
    "beard": "none",
    "atk": 1280,
    "spd": 1.4,
    "range": 11.0,
    "stamp": "西涼錦馬",
    "sealHanja": "西涼錦馬",
    "unlockWave": 9,
    "fameCost": 110,
    "bonds": [
      "five"
    ],
    "desc": "서량의 금마초. 조조를 도망치게 만든 신위천장",
    "story": "[제9장 해방] 사자 투구와 은갑주를 입고 용맹을 떨친 오호대장군",
    "mount": "white"
  },
  {
    "id": "shu_4",
    "tier": 6,
    "faction": "shu",
    "branch": "cavalry",
    "name": "조운",
    "hanja": "趙",
    "weapon": "spear",
    "wName": "용담량은창",
    "helm": "helm",
    "beard": "none",
    "atk": 1250,
    "spd": 1.4,
    "range": 11.0,
    "stamp": "一身是膽",
    "sealHanja": "一身是膽",
    "unlockWave": 9,
    "fameCost": 120,
    "bonds": [
      "five"
    ],
    "desc": "백마를 타고 장판파를 뚫은 상산 조자룡",
    "story": "[제9장 해방] 단기필마로 적진을 누비며 아두를 구출한 오호대장군",
    "mount": "white"
  },
  {
    "id": "shu_5",
    "tier": 6,
    "faction": "shu",
    "branch": "vanguard",
    "name": "장비",
    "hanja": "張",
    "weapon": "snake",
    "wName": "장팔사모",
    "helm": "helm",
    "beard": "wild",
    "atk": 1320,
    "spd": 1.3,
    "range": 10.5,
    "stamp": "萬夫不當",
    "sealHanja": "萬夫不當",
    "unlockWave": 10,
    "fameCost": 130,
    "bonds": [
      "oath",
      "five"
    ],
    "desc": "장판교 위에서 우레 같은 포효로 대군을 물리친 맹장",
    "story": "[제10장 해방] 장팔사모를 쥐고 다리를 지켜낸 만부부당 맹장"
  },
  {
    "id": "shu_6",
    "tier": 7,
    "faction": "shu",
    "branch": "vanguard",
    "name": "관우",
    "hanja": "關",
    "weapon": "glaive",
    "wName": "청룡언월도",
    "helm": "helm",
    "beard": "long",
    "atk": 2800,
    "spd": 1.45,
    "range": 11.5,
    "stamp": "義薄雲天",
    "sealHanja": "義薄雲天",
    "unlockWave": 12,
    "fameCost": 180,
    "bonds": [
      "oath",
      "five"
    ],
    "desc": "적토마와 청룡언월도로 오관육참을 돌파한 무성(武聖)",
    "story": "[제12장 해방] 만인이 존경하는 의리의 상징이자 충의의 무성",
    "redFace": true,
    "mount": "red",
    "halo": true
  },
  {
    "id": "shu_7",
    "tier": 7,
    "faction": "shu",
    "branch": "tactician",
    "name": "제갈량",
    "hanja": "諸",
    "weapon": "fan",
    "wName": "백우선·팔진도",
    "helm": "scholar",
    "beard": "goatee",
    "atk": 3100,
    "spd": 1.6,
    "range": 13.5,
    "stamp": "臥龍出世",
    "sealHanja": "鞠躬盡瘁",
    "unlockWave": 15,
    "fameCost": 220,
    "bonds": [
      "oath",
      "burn"
    ],
    "desc": "팔진도와 천뢰로 전장을 지배하는 와룡 승상",
    "story": "[제15장 해방] 삼고초려 끝에 출사하여 국궁진쇄 천하를 도모한 천재 지략가",
    "halo": true
  },
  {
    "id": "shu_7_3",
    "tier": 7,
    "faction": "shu",
    "branch": "vanguard",
    "name": "유비",
    "hanja": "劉",
    "weapon": "dual",
    "wName": "자웅일대검",
    "helm": "crown",
    "beard": "goatee",
    "atk": 2950,
    "spd": 1.5,
    "range": 12.5,
    "stamp": "弘毅寬厚",
    "sealHanja": "弘毅寬厚",
    "unlockWave": 15,
    "fameCost": 220,
    "bonds": [
      "three_lords"
    ],
    "desc": "인덕으로 천하의 호걸들을 끌어모은 촉한의 창업 군주 소열제",
    "story": "[제15장 해방] 도원결의를 맺고 난세를 극복하며 황제에 오른 주군",
    "halo": true
  },
  {
    "id": "wei_1",
    "tier": 1,
    "faction": "wei",
    "branch": "vanguard",
    "name": "조홍",
    "hanja": "洪",
    "weapon": "sword",
    "wName": "위국장검",
    "helm": "helm",
    "beard": "goatee",
    "atk": 26,
    "spd": 0.95,
    "range": 8.5,
    "stamp": "青州強兵",
    "sealHanja": "揚校忠勇",
    "unlockWave": 1,
    "fameCost": 0,
    "bonds": [],
    "desc": "조조의 목숨을 여러 번 구한 충직한 친족 장수",
    "story": "형양 전투에서 말에서 내려 조조를 구한 충신"
  },
  {
    "id": "wei_1_2",
    "tier": 1,
    "faction": "wei",
    "branch": "cavalry",
    "name": "조순",
    "hanja": "純",
    "weapon": "spear",
    "wName": "호표기창",
    "helm": "helm",
    "beard": "none",
    "atk": 27,
    "spd": 1.0,
    "range": 8.5,
    "stamp": "虎豹騎將",
    "sealHanja": "虎豹騎將",
    "unlockWave": 1,
    "fameCost": 0,
    "bonds": [],
    "desc": "조조의 정예 호표기를 지배한 용맹한 기병 대장",
    "story": "남전북벌에서 호표기를 지휘해 당양까지 추격한 기병장"
  },
  {
    "id": "wei_1_3",
    "tier": 1,
    "faction": "wei",
    "branch": "tactician",
    "name": "모개",
    "hanja": "階",
    "weapon": "fan",
    "wName": "청렴의선",
    "helm": "scholar",
    "beard": "goatee",
    "atk": 23,
    "spd": 1.05,
    "range": 9.0,
    "stamp": "淸選인재",
    "sealHanja": "淸選인재",
    "unlockWave": 1,
    "fameCost": 0,
    "bonds": [],
    "desc": "인재를 선발하고 군량을 충실히 한 위나라 개국 문신",
    "story": "청렴함과 공정함으로 조조의 중용을 받은 문관"
  },
  {
    "id": "wei_1_4",
    "tier": 1,
    "faction": "wei",
    "branch": "vanguard",
    "name": "한호",
    "hanja": "浩",
    "weapon": "spear",
    "wName": "둔전철창",
    "helm": "helm",
    "beard": "goatee",
    "atk": 25,
    "spd": 0.95,
    "range": 8.5,
    "stamp": "屯田創始",
    "sealHanja": "屯田創始",
    "unlockWave": 1,
    "fameCost": 0,
    "bonds": [],
    "desc": "둔전제를 창안하여 조조군의 군량을 책임진 장수",
    "story": "군량미 생산을 획기적으로 늘린 둔전제 창시자"
  },
  {
    "id": "wei_1_5",
    "tier": 1,
    "faction": "wei",
    "branch": "vanguard",
    "name": "우금",
    "hanja": "禁",
    "weapon": "spear",
    "wName": "위국용창",
    "helm": "helm",
    "beard": "goatee",
    "atk": 28,
    "spd": 0.9,
    "range": 8.5,
    "stamp": "毅重嚴整",
    "sealHanja": "毅重嚴整",
    "unlockWave": 1,
    "fameCost": 0,
    "bonds": [],
    "desc": "군율이 엄격하고 규율을 지킨 오자양장 반열의 충장",
    "story": "조조 초기 진영의 엄격한 군율을 담당한 무장"
  },
  {
    "id": "wei_2",
    "tier": 2,
    "faction": "wei",
    "branch": "vanguard",
    "name": "악진",
    "hanja": "樂",
    "weapon": "sword",
    "wName": "선등돌격검",
    "helm": "helm",
    "beard": "goatee",
    "atk": 58,
    "spd": 1.0,
    "range": 9.0,
    "stamp": "先登陷陣",
    "sealHanja": "先登陷陣",
    "unlockWave": 1,
    "fameCost": 0,
    "bonds": [
      "wei5"
    ],
    "desc": "성벽에 가장 먼저 오르는 선등장",
    "story": "초기 해방된 위나라 선등 대장"
  },
  {
    "id": "wei_2_2",
    "tier": 2,
    "faction": "wei",
    "branch": "vanguard",
    "name": "이전",
    "hanja": "典",
    "weapon": "spear",
    "wName": "겸양단창",
    "helm": "helm",
    "beard": "none",
    "atk": 57,
    "spd": 1.05,
    "range": 9.0,
    "stamp": "儒雅將帥",
    "sealHanja": "儒雅將帥",
    "unlockWave": 1,
    "fameCost": 0,
    "bonds": [],
    "desc": "학문을 좋아하고 대도를 지킨 유아한 무장",
    "story": "합비 방어전에서 장료를 도와 공을 세운 장수"
  },
  {
    "id": "wei_2_3",
    "tier": 2,
    "faction": "wei",
    "branch": "tactician",
    "name": "만총",
    "hanja": "寵",
    "weapon": "sword",
    "wName": "법가보검",
    "helm": "scholar",
    "beard": "goatee",
    "atk": 55,
    "spd": 1.1,
    "range": 9.5,
    "stamp": "嚴法堅守",
    "sealHanja": "嚴法堅守",
    "unlockWave": 1,
    "fameCost": 0,
    "bonds": [],
    "desc": "엄격한 법 집행과 번성 요새 수비로 위명을 떨친 장수",
    "story": "번성과 신성을 지켜내어 오군의 침공을 막아낸 명장"
  },
  {
    "id": "wei_2_4",
    "tier": 2,
    "faction": "wei",
    "branch": "archer",
    "name": "문빙",
    "hanja": "聘",
    "weapon": "bow",
    "wName": "형북강궁",
    "helm": "helm",
    "beard": "goatee",
    "atk": 59,
    "spd": 1.0,
    "range": 9.5,
    "stamp": "江夏鎭守",
    "sealHanja": "江夏鎭守",
    "unlockWave": 1,
    "fameCost": 0,
    "bonds": [],
    "desc": "강하를 다스리며 오나라 수군의 침입을 철통같이 막은 장수",
    "story": "손권의 대군을 단 한 번의 움직임으로 물리친 강하 수호신"
  },
  {
    "id": "wei_2_5",
    "tier": 2,
    "faction": "wei",
    "branch": "cavalry",
    "name": "장패",
    "hanja": "霸",
    "weapon": "glaive",
    "wName": "청주참도",
    "helm": "helm",
    "beard": "wild",
    "atk": 60,
    "spd": 0.95,
    "range": 8.5,
    "stamp": "威震徐青",
    "sealHanja": "威震徐青",
    "unlockWave": 1,
    "fameCost": 0,
    "bonds": [],
    "desc": "서주와 청주 일대를 호령한 정예 수장",
    "story": "조조에게 귀순한 후 동방 전선을 견고히 지킨 장수"
  },
  {
    "id": "wei_3",
    "tier": 3,
    "faction": "wei",
    "branch": "vanguard",
    "name": "서황",
    "hanja": "徐",
    "weapon": "axe",
    "wName": "백전개산부",
    "helm": "helm",
    "beard": "goatee",
    "atk": 135,
    "spd": 1.0,
    "range": 9.5,
    "stamp": "周亞夫風",
    "sealHanja": "周亞夫風",
    "unlockWave": 1,
    "fameCost": 0,
    "bonds": [
      "wei5"
    ],
    "desc": "주아부의 기풍을 지닌 대부 명장",
    "story": "번성 구원전에서 위명을 떨친 오자양장"
  },
  {
    "id": "wei_3_2",
    "tier": 3,
    "faction": "wei",
    "branch": "cavalry",
    "name": "조휴",
    "hanja": "休",
    "weapon": "spear",
    "wName": "천리호창",
    "helm": "helm",
    "beard": "none",
    "atk": 128,
    "spd": 1.15,
    "range": 9.5,
    "stamp": "千里駒將",
    "sealHanja": "千里駒將",
    "unlockWave": 1,
    "fameCost": 0,
    "bonds": [],
    "desc": "조조가 내 집안의 천리마라 칭찬한 기병 총사령관",
    "story": "석정 전투에서 활약한 조위 종친 명장"
  },
  {
    "id": "wei_3_3",
    "tier": 3,
    "faction": "wei",
    "branch": "cavalry",
    "name": "하후상",
    "hanja": "尚",
    "weapon": "spear",
    "wName": "정서철창",
    "helm": "helm",
    "beard": "none",
    "atk": 126,
    "spd": 1.2,
    "range": 9.5,
    "stamp": "征西勇將",
    "sealHanja": "征西勇將",
    "unlockWave": 1,
    "fameCost": 0,
    "bonds": [],
    "desc": "하후돈의 조카로 상용을 공략하고 형주 전선을 맡았던 장수",
    "story": "서방 전선에서 공을 세운 용감한 위나라 무장"
  },
  {
    "id": "wei_3_4",
    "tier": 3,
    "faction": "wei",
    "branch": "cavalry",
    "name": "조진",
    "hanja": "眞",
    "weapon": "sword",
    "wName": "지휘장검",
    "helm": "helm",
    "beard": "goatee",
    "atk": 132,
    "spd": 1.1,
    "range": 9.5,
    "stamp": "邵陵大將",
    "sealHanja": "邵陵大將",
    "unlockWave": 1,
    "fameCost": 0,
    "bonds": [],
    "desc": "제갈량의 1차, 2차 북벌을 봉쇄한 조위의 대장군",
    "story": "서북 전선을 총괄하며 촉한의 진격을 저지한 대장"
  },
  {
    "id": "wei_3_5",
    "tier": 3,
    "faction": "wei",
    "branch": "archer",
    "name": "장합",
    "hanja": "郃",
    "weapon": "spear",
    "wName": "변화강창",
    "helm": "helm",
    "beard": "goatee",
    "atk": 130,
    "spd": 1.25,
    "range": 10.0,
    "stamp": "巧變巧戰",
    "sealHanja": "巧變巧戰",
    "unlockWave": 1,
    "fameCost": 0,
    "bonds": [
      "wei5"
    ],
    "desc": "지형을 잘 이용하고 변화무쌍한 지용을 겸비한 명장",
    "story": "가정 전투에서 마속을 파하고 승리를 거둔 오자양장"
  },
  {
    "id": "wei_4_2",
    "tier": 4,
    "faction": "wei",
    "branch": "vanguard",
    "name": "조인",
    "hanja": "仁",
    "weapon": "sword",
    "wName": "번성철벽검",
    "helm": "helm",
    "beard": "goatee",
    "atk": 290,
    "spd": 1.1,
    "range": 10.0,
    "stamp": "鐵壁大司馬",
    "sealHanja": "鐵壁大司馬",
    "unlockWave": 2,
    "fameCost": 30,
    "bonds": [],
    "desc": "번성에서 관우의 대군과 수공을 끝까지 견뎌낸 철벽의 대사마",
    "story": "[제2장 해방] 조위 진영 최강의 방어력을 자랑하는 용장"
  },
  {
    "id": "wei_4_3",
    "tier": 4,
    "faction": "wei",
    "branch": "cavalry",
    "name": "방덕",
    "hanja": "德",
    "weapon": "axe",
    "wName": "백마서룡부",
    "helm": "helm",
    "beard": "wild",
    "atk": 300,
    "spd": 1.15,
    "range": 9.5,
    "stamp": "棺桶決死",
    "sealHanja": "棺桶決死",
    "unlockWave": 3,
    "fameCost": 40,
    "bonds": [],
    "desc": "관우와의 결전을 앞두고 관을 짜가지고 나아간 결사 맹장",
    "story": "[제3장 해방] 백마를 타고 관우와 가열찬 일기토를 벌인 백마장군",
    "mount": "white"
  },
  {
    "id": "wei_4_4",
    "tier": 4,
    "faction": "wei",
    "branch": "tactician",
    "name": "정욱",
    "hanja": "昱",
    "weapon": "fan",
    "wName": "태산계책선",
    "helm": "scholar",
    "beard": "long",
    "atk": 270,
    "spd": 1.25,
    "range": 11.5,
    "stamp": "泰山智謀",
    "sealHanja": "泰山智謀",
    "unlockWave": 3,
    "fameCost": 40,
    "bonds": [],
    "desc": "조조의 서주와 연주 방어를 총괄한 지략의 대참모",
    "story": "[제3장 해방] 대담한 책략으로 조조의 기반을 사수한 명모사"
  },
  {
    "id": "wei_4_5",
    "tier": 4,
    "faction": "wei",
    "branch": "tactician",
    "name": "순유",
    "hanja": "攸",
    "weapon": "fan",
    "wName": "십이奇策",
    "helm": "scholar",
    "beard": "goatee",
    "atk": 280,
    "spd": 1.3,
    "range": 11.5,
    "stamp": "十二奇策",
    "sealHanja": "十二奇策",
    "unlockWave": 3,
    "fameCost": 40,
    "bonds": [],
    "desc": "조조의 군사로 12가지 기책을 올린 천재 군사",
    "story": "[제3장 해방] 관도대전에서 백마의 포위를 풀 계책을 세운 참모"
  },
  {
    "id": "wei_5_1",
    "tier": 5,
    "faction": "wei",
    "branch": "tactician",
    "name": "가후",
    "hanja": "詡",
    "weapon": "fan",
    "wName": "완사묘책선",
    "helm": "scholar",
    "beard": "goatee",
    "atk": 570,
    "spd": 1.35,
    "range": 12.0,
    "stamp": "算無遺策",
    "sealHanja": "算無遺策",
    "unlockWave": 4,
    "fameCost": 60,
    "bonds": [],
    "desc": "단 한 번도 책략을 틀린 적이 없는 가웅 백발백중의 명모사",
    "story": "[제4장 해방] 조조와 사마의마저 조심스러워한 산무유책의 수재"
  },
  {
    "id": "wei_5_2",
    "tier": 5,
    "faction": "wei",
    "branch": "vanguard",
    "name": "등애",
    "hanja": "艾",
    "weapon": "spear",
    "wName": "음평단애창",
    "helm": "helm",
    "beard": "goatee",
    "atk": 600,
    "spd": 1.3,
    "range": 11.0,
    "stamp": "陰平險道",
    "sealHanja": "陰平險道",
    "unlockWave": 5,
    "fameCost": 70,
    "bonds": [],
    "desc": "음평의 험준한 산길을 넘어 촉한을 전격 멸망시킨 천재 장수",
    "story": "[제5장 해방] 등산을 감행하여 촉한의 수도 성도를 급습한 명장"
  },
  {
    "id": "wei_5_3",
    "tier": 5,
    "faction": "wei",
    "branch": "archer",
    "name": "하후연",
    "hanja": "淵",
    "weapon": "bow",
    "wName": "신속정군궁",
    "helm": "helm",
    "beard": "goatee",
    "atk": 580,
    "spd": 1.4,
    "range": 12.0,
    "stamp": "神速疾行",
    "sealHanja": "神速疾行",
    "unlockWave": 5,
    "fameCost": 70,
    "bonds": [],
    "desc": "사흘에 오백 리, 엿새에 천 리를 달리던 신속의 명장",
    "story": "[제5장 해방] 정군산을 수호하며 활을 쏘아 적을 압도한 활의 달인"
  },
  {
    "id": "wei_5_4",
    "tier": 5,
    "faction": "wei",
    "branch": "vanguard",
    "name": "전위",
    "hanja": "韋",
    "weapon": "mace",
    "wName": "쌍철극",
    "helm": "helm",
    "beard": "wild",
    "atk": 610,
    "spd": 1.2,
    "range": 10.0,
    "stamp": "惡來勇將",
    "sealHanja": "惡來勇將",
    "unlockWave": 6,
    "fameCost": 80,
    "bonds": [],
    "desc": "고지 전투에서 조조를 구하고 홀로 문을 막아선 고대 악래",
    "story": "[제6장 해방] 완성 전투에서 두 자루 철극으로 조조를 호위한 맹장"
  },
  {
    "id": "wei_6_1",
    "tier": 6,
    "faction": "wei",
    "branch": "vanguard",
    "name": "허저",
    "hanja": "褚",
    "weapon": "sword",
    "wName": "호치대도",
    "helm": "helm",
    "beard": "wild",
    "atk": 1350,
    "spd": 1.2,
    "range": 10.5,
    "stamp": "虎痴勇猛",
    "sealHanja": "虎痴勇猛",
    "unlockWave": 8,
    "fameCost": 100,
    "bonds": [],
    "desc": "마초와 웃통을 벗고 혈전을 벌인 호치 맹장",
    "story": "[제8장 해방] 조조의 신변을 호위하는 위나라 최고의 장사"
  },
  {
    "id": "wei_4",
    "tier": 6,
    "faction": "wei",
    "branch": "vanguard",
    "name": "하후돈",
    "hanja": "惇",
    "weapon": "sword",
    "wName": "독안기린도",
    "helm": "helm",
    "beard": "goatee",
    "atk": 1285,
    "spd": 1.25,
    "range": 10.5,
    "stamp": "拔矢啖睛",
    "sealHanja": "拔矢啖睛",
    "unlockWave": 9,
    "fameCost": 120,
    "bonds": [],
    "desc": "화살 박힌 눈을 삼키고 적장을 벤 맹장",
    "story": "[제9장 해방] 서주 전선에서 깨어난 조위의 총사령관",
    "eyepatch": true
  },
  {
    "id": "wei_5",
    "tier": 6,
    "faction": "wei",
    "branch": "vanguard",
    "name": "장료",
    "hanja": "遼",
    "weapon": "glaive",
    "wName": "황룡구겸도",
    "helm": "helm",
    "beard": "goatee",
    "atk": 1390,
    "spd": 1.3,
    "range": 11.0,
    "stamp": "威震逍遙",
    "sealHanja": "威震逍遙",
    "unlockWave": 10,
    "fameCost": 130,
    "bonds": [
      "wei5"
    ],
    "desc": "합비 소요진에서 800기로 대군을 격파한 오자양장 필두",
    "story": "[제10장 해방] 손권의 담을 서늘하게 한 장료 합류"
  },
  {
    "id": "wei_6_4",
    "tier": 6,
    "faction": "wei",
    "branch": "tactician",
    "name": "순욱",
    "hanja": "彧",
    "weapon": "fan",
    "wName": "왕佐지재선",
    "helm": "scholar",
    "beard": "goatee",
    "atk": 1220,
    "spd": 1.45,
    "range": 12.5,
    "stamp": "王佐之才",
    "sealHanja": "王佐之才",
    "unlockWave": 10,
    "fameCost": 130,
    "bonds": [],
    "desc": "조조의 관도 승리를 진언하고 전략을 총괄한 왕좌지재",
    "story": "[제10장 해방] 조조 진영의 영혼이자 전략을 입증한 명참모"
  },
  {
    "id": "wei_7_1",
    "tier": 7,
    "faction": "wei",
    "branch": "tactician",
    "name": "곽가",
    "hanja": "嘉",
    "weapon": "fan",
    "wName": "십승십패선",
    "helm": "scholar",
    "beard": "none",
    "atk": 3000,
    "spd": 1.65,
    "range": 13.5,
    "stamp": "鬼謀奉孝",
    "sealHanja": "鬼謀奉孝",
    "unlockWave": 14,
    "fameCost": 200,
    "bonds": [],
    "desc": "십승십패론으로 관도대전의 승리를 예언한 귀모 봉효",
    "story": "[제14장 해방] 조조가 가장 안타까워한 요절한 천재 군사"
  },
  {
    "id": "wei_6",
    "tier": 7,
    "faction": "wei",
    "branch": "tactician",
    "name": "사마의",
    "hanja": "懿",
    "weapon": "fan",
    "wName": "흑우선",
    "helm": "scholar",
    "beard": "goatee",
    "atk": 3200,
    "spd": 1.55,
    "range": 13.5,
    "stamp": "塚虎奇謀",
    "sealHanja": "塚虎奇謀",
    "unlockWave": 15,
    "fameCost": 220,
    "bonds": [],
    "desc": "오장원에서 제갈량과 천하를 다툰 중달 총호",
    "story": "[제15장 해방] 심연의 책략으로 제갈량과 맞선 사마중달"
  },
  {
    "id": "wei_7",
    "tier": 7,
    "faction": "wei",
    "branch": "vanguard",
    "name": "조조",
    "hanja": "操",
    "weapon": "sword",
    "wName": "의천검",
    "helm": "crown",
    "beard": "goatee",
    "atk": 3300,
    "spd": 1.5,
    "range": 13.0,
    "stamp": "唯才是擧",
    "sealHanja": "唯才是擧",
    "unlockWave": 16,
    "fameCost": 220,
    "bonds": [
      "three_lords"
    ],
    "desc": "천하의 인재를 거느린 난세의 간웅이자 위무제",
    "story": "[제16장 해방] 중원의 패권을 쥐고 천하를 호령한 위무제 조조",
    "mount": "black",
    "halo": true
  },
  {
    "id": "wu_1",
    "tier": 1,
    "faction": "wu",
    "branch": "archer",
    "name": "주치",
    "hanja": "治",
    "weapon": "bow",
    "wName": "수군단궁",
    "helm": "turban",
    "beard": "none",
    "atk": 22,
    "spd": 1.1,
    "range": 9.5,
    "stamp": "江東水軍",
    "sealHanja": "江東元勳",
    "unlockWave": 1,
    "fameCost": 0,
    "bonds": [],
    "desc": "장강 물길을 지키고 손가를 보좌한 원훈",
    "story": "손견 시절부터 손씨 일가를 섬긴 강동 충신"
  },
  {
    "id": "wu_1_2",
    "tier": 1,
    "faction": "wu",
    "branch": "tactician",
    "name": "여범",
    "hanja": "範",
    "weapon": "fan",
    "wName": "강동수선",
    "helm": "scholar",
    "beard": "goatee",
    "atk": 23,
    "spd": 1.05,
    "range": 9.0,
    "stamp": "忠勤佐命",
    "sealHanja": "忠勤佐命",
    "unlockWave": 1,
    "fameCost": 0,
    "bonds": [],
    "desc": "손책과 손권을 도와 강동의 재정과 행정을 다진 신하",
    "story": "오나라 재정을 튼튼히 한 충직한 신하"
  },
  {
    "id": "wu_1_3",
    "tier": 1,
    "faction": "wu",
    "branch": "tactician",
    "name": "우번",
    "hanja": "翻",
    "weapon": "fan",
    "wName": "직언학선",
    "helm": "scholar",
    "beard": "long",
    "atk": 24,
    "spd": 1.0,
    "range": 9.0,
    "stamp": "易學直言",
    "sealHanja": "易學直言",
    "unlockWave": 1,
    "fameCost": 0,
    "bonds": [],
    "desc": "주역에 능통하고 굽히지 않는 직언을 올린 학자",
    "story": "강직한 성품으로 학문을 크게 진흥시킨 문신"
  },
  {
    "id": "wu_1_4",
    "tier": 1,
    "faction": "wu",
    "branch": "tactician",
    "name": "보즐",
    "hanja": "騭",
    "weapon": "sword",
    "wName": "교주정검",
    "helm": "scholar",
    "beard": "goatee",
    "atk": 25,
    "spd": 0.95,
    "range": 9.0,
    "stamp": "交州平定",
    "sealHanja": "交州平定",
    "unlockWave": 1,
    "fameCost": 0,
    "bonds": [],
    "desc": "교주를 평정하고 손권의 신임을 받은 명신",
    "story": "남방 전선을 안정시키고 대승상이 된 문무 겸비의 신하"
  },
  {
    "id": "wu_1_5",
    "tier": 1,
    "faction": "wu",
    "branch": "tactician",
    "name": "엄준",
    "hanja": "濬",
    "weapon": "fan",
    "wName": "학자유선",
    "helm": "scholar",
    "beard": "none",
    "atk": 21,
    "spd": 1.15,
    "range": 9.5,
    "stamp": "溫和博覽",
    "sealHanja": "溫和博覽",
    "unlockWave": 1,
    "fameCost": 0,
    "bonds": [],
    "desc": "온화한 성품으로 의리와 학문을 지킨 인물",
    "story": "손권의 탄탄한 신망을 얻은 온후한 학자"
  },
  {
    "id": "wu_2_1",
    "tier": 2,
    "faction": "wu",
    "branch": "cavalry",
    "name": "반장",
    "hanja": "璋",
    "weapon": "glaive",
    "wName": "형주포획도",
    "helm": "helm",
    "beard": "wild",
    "atk": 56,
    "spd": 1.1,
    "range": 8.5,
    "stamp": "擒獲關羽",
    "sealHanja": "擒獲關羽",
    "unlockWave": 1,
    "fameCost": 0,
    "bonds": [],
    "desc": "관우를 매복으로 사로잡은 강동의 장수",
    "story": "형주 공방전에서 맹활약한 용맹한 오나라 장수"
  },
  {
    "id": "wu_2_2",
    "tier": 2,
    "faction": "wu",
    "branch": "vanguard",
    "name": "주환",
    "hanja": "桓",
    "weapon": "sword",
    "wName": "유수철검",
    "helm": "helm",
    "beard": "goatee",
    "atk": 58,
    "spd": 1.05,
    "range": 9.0,
    "stamp": "濡須防衛",
    "sealHanja": "濡須防衛",
    "unlockWave": 1,
    "fameCost": 0,
    "bonds": [],
    "desc": "유수구 방어전에서 위나라 대군을 격퇴한 대장",
    "story": "병사들을 자식처럼 아끼고 승리를 거둔 명장"
  },
  {
    "id": "wu_2_3",
    "tier": 2,
    "faction": "wu",
    "branch": "cavalry",
    "name": "전종",
    "hanja": "琮",
    "weapon": "spear",
    "wName": "강동기창",
    "helm": "helm",
    "beard": "none",
    "atk": 55,
    "spd": 1.15,
    "range": 9.0,
    "stamp": "吳國駙馬",
    "sealHanja": "吳國駙馬",
    "unlockWave": 1,
    "fameCost": 0,
    "bonds": [],
    "desc": "손권의 사위이자 형주 전선에서 공을 세운 장수",
    "story": "위나라의 침공을 막아낸 강동의 호장"
  },
  {
    "id": "wu_2_4",
    "tier": 2,
    "faction": "wu",
    "branch": "vanguard",
    "name": "정봉",
    "hanja": "奉",
    "weapon": "sword",
    "wName": "설중단도",
    "helm": "helm",
    "beard": "wild",
    "atk": 60,
    "spd": 1.0,
    "range": 8.5,
    "stamp": "雪中奮短兵",
    "sealHanja": "雪中奮短兵",
    "unlockWave": 1,
    "fameCost": 0,
    "bonds": [
      "wu12"
    ],
    "desc": "눈속에서 웃옷을 벗고 위군을 기습한 수호신",
    "story": "동흥 전투에서 단도로 위나라 대군을 격파한 노장"
  },
  {
    "id": "wu_2_5",
    "tier": 2,
    "faction": "wu",
    "branch": "archer",
    "name": "서성",
    "hanja": "盛",
    "weapon": "bow",
    "wName": "유수강궁",
    "helm": "helm",
    "beard": "goatee",
    "atk": 59,
    "spd": 1.1,
    "range": 9.5,
    "stamp": "假城退敵",
    "sealHanja": "假城退敵",
    "unlockWave": 1,
    "fameCost": 0,
    "bonds": [
      "wu12"
    ],
    "desc": "가짜 성벽을 쌓아 조진의 대군을 놀라 후퇴시킨 지장",
    "story": "강장과 연못을 이용하여 오나라를 지킨 명장"
  },
  {
    "id": "wu_3_1",
    "tier": 3,
    "faction": "wu",
    "branch": "vanguard",
    "name": "한당",
    "hanja": "當",
    "weapon": "spear",
    "wName": "강동숙창",
    "helm": "helm",
    "beard": "goatee",
    "atk": 122,
    "spd": 1.15,
    "range": 9.5,
    "stamp": "江東元老",
    "sealHanja": "江東元老",
    "unlockWave": 1,
    "fameCost": 0,
    "bonds": [
      "wu12"
    ],
    "desc": "손견, 손책, 손권 3대를 섬긴 강동의 베테랑 장수",
    "story": "적벽대전과 이릉대전에서 공을 세운 오나라 원로"
  },
  {
    "id": "wu_3_2",
    "tier": 3,
    "faction": "wu",
    "branch": "vanguard",
    "name": "황개",
    "hanja": "蓋",
    "weapon": "mace",
    "wName": "적벽화철추",
    "helm": "helm",
    "beard": "white",
    "atk": 128,
    "spd": 1.1,
    "range": 9.5,
    "stamp": "苦肉計火攻",
    "sealHanja": "苦肉計火攻",
    "unlockWave": 1,
    "fameCost": 0,
    "bonds": [
      "wu12"
    ],
    "desc": "고육지책으로 거짓 항복하여 적벽 화공을 성공시킨 영웅",
    "story": "몸을 사리지 않고 동남풍에 불을 지른 강동의 용장"
  },
  {
    "id": "wu_3_3",
    "tier": 3,
    "faction": "wu",
    "branch": "vanguard",
    "name": "정보",
    "hanja": "普",
    "weapon": "spear",
    "wName": "철척뱀창",
    "helm": "helm",
    "beard": "white",
    "atk": 125,
    "spd": 1.12,
    "range": 9.5,
    "stamp": "程公德望",
    "sealHanja": "程公德望",
    "unlockWave": 1,
    "fameCost": 0,
    "bonds": [
      "wu12"
    ],
    "desc": "손씨 3대를 섬기며 정보 어르신이라 불린 덕망의 명장",
    "story": "주유와 함께 적벽대전 좌우 수장이 되어 승리한 노장"
  },
  {
    "id": "wu_3_4",
    "tier": 3,
    "faction": "wu",
    "branch": "cavalry",
    "name": "장흠",
    "hanja": "欽",
    "weapon": "glaive",
    "wName": "장강협도",
    "helm": "helm",
    "beard": "goatee",
    "atk": 120,
    "spd": 1.2,
    "range": 9.0,
    "stamp": "勵學將帥",
    "sealHanja": "勵學將帥",
    "unlockWave": 1,
    "fameCost": 0,
    "bonds": [
      "wu12"
    ],
    "desc": "손권의 권유로 학문에 힘써 지용을 겸비한 수군 장수",
    "story": "장강 물길을 수호하고 검소함을 지킨 명장"
  },
  {
    "id": "wu_2",
    "tier": 3,
    "faction": "wu",
    "branch": "vanguard",
    "name": "주태",
    "hanja": "泰",
    "weapon": "sword",
    "wName": "혈전장도",
    "helm": "helm",
    "beard": "wild",
    "atk": 134,
    "spd": 1.15,
    "range": 8.5,
    "stamp": "全身刀痕",
    "sealHanja": "全身刀痕",
    "unlockWave": 1,
    "fameCost": 0,
    "bonds": [
      "wu12"
    ],
    "desc": "온몸의 상처로 손권을 지킨 강철의 호위장",
    "story": "초기 해방된 강동의 불굴 호위무사"
  },
  {
    "id": "wu_4_1",
    "tier": 4,
    "faction": "wu",
    "branch": "tactician",
    "name": "장소",
    "hanja": "昭",
    "weapon": "fan",
    "wName": "강동원로선",
    "helm": "scholar",
    "beard": "white",
    "atk": 240,
    "spd": 1.25,
    "range": 11.0,
    "stamp": "江東柱石",
    "sealHanja": "江東柱石",
    "unlockWave": 2,
    "fameCost": 30,
    "bonds": [],
    "desc": "손책이 내정을 맡긴 강동 안살림의 주석",
    "story": "[제2장 해방] 오나라 조정의 중심을 잡은 학자"
  },
  {
    "id": "wu_4_2",
    "tier": 4,
    "faction": "wu",
    "branch": "tactician",
    "name": "노숙",
    "hanja": "肅",
    "weapon": "fan",
    "wName": "천하분할선",
    "helm": "scholar",
    "beard": "goatee",
    "atk": 255,
    "spd": 1.3,
    "range": 11.5,
    "stamp": "獨榻天下論",
    "sealHanja": "獨榻天下論",
    "unlockWave": 2,
    "fameCost": 30,
    "bonds": [],
    "desc": "천하분할론을 주장하고 손유 동맹을 성사시킨 대도독",
    "story": "[제2장 해방] 후덕함과 혜안으로 적벽 승리를 이끌어낸 도독"
  },
  {
    "id": "wu_4_3",
    "tier": 4,
    "faction": "wu",
    "branch": "cavalry",
    "name": "능통",
    "hanja": "統",
    "weapon": "sword",
    "wName": "협기장검",
    "helm": "helm",
    "beard": "none",
    "atk": 265,
    "spd": 1.35,
    "range": 10.0,
    "stamp": "國士之風",
    "sealHanja": "國士之風",
    "unlockWave": 3,
    "fameCost": 40,
    "bonds": [],
    "desc": "합비에서 목숨을 걸고 손권을 구출한 강동의 호걸",
    "story": "[제3장 해방] 감녕과의 원한을 씻고 전우애를 발휘한 용장"
  },
  {
    "id": "wu_4_4",
    "tier": 4,
    "faction": "wu",
    "branch": "archer",
    "name": "대교",
    "hanja": "喬",
    "weapon": "fan",
    "wName": "강동화선",
    "helm": "female",
    "beard": "none",
    "atk": 250,
    "spd": 1.4,
    "range": 11.5,
    "stamp": "江東二喬",
    "sealHanja": "江東二喬",
    "unlockWave": 3,
    "fameCost": 40,
    "bonds": [
      "two_qiaos"
    ],
    "desc": "손책의 부인이자 국색천향의 절세미인",
    "story": "[제3장 해방] 아름다움과 현숙함으로 손책의 곁을 지킨 자매",
    "female": true
  },
  {
    "id": "wu_5_1",
    "tier": 5,
    "faction": "wu",
    "branch": "archer",
    "name": "소교",
    "hanja": "喬",
    "weapon": "fan",
    "wName": "적벽유선",
    "helm": "female",
    "beard": "none",
    "atk": 530,
    "spd": 1.45,
    "range": 12.0,
    "stamp": "國色天香",
    "sealHanja": "國色天香",
    "unlockWave": 4,
    "fameCost": 60,
    "bonds": [
      "two_qiaos"
    ],
    "desc": "주유의 부인이자 동남풍의 전설을 함께한 절세가인",
    "story": "[제4장 해방] 적벽의 대승을 뒤에서 보좌한 강동의 자매",
    "female": true
  },
  {
    "id": "wu_3",
    "tier": 5,
    "faction": "wu",
    "branch": "vanguard",
    "name": "감녕",
    "hanja": "甘",
    "weapon": "mace",
    "wName": "금범쌍철추",
    "helm": "turban",
    "beard": "wild",
    "atk": 590,
    "spd": 1.25,
    "range": 9.5,
    "stamp": "錦帆遊俠",
    "sealHanja": "錦帆遊俠",
    "unlockWave": 5,
    "fameCost": 70,
    "bonds": [],
    "desc": "방울 소리와 비단 돛의 강동 유협",
    "story": "[제5장 해방] 백기야습으로 조조군을 뒤흔든 맹장"
  },
  {
    "id": "wu_5_3",
    "tier": 5,
    "faction": "wu",
    "branch": "archer",
    "name": "태사자",
    "hanja": "慈",
    "weapon": "bow",
    "wName": "소패왕강궁",
    "helm": "helm",
    "beard": "goatee",
    "atk": 610,
    "spd": 1.35,
    "range": 11.5,
    "stamp": "篤烈信義",
    "sealHanja": "篤烈信義",
    "unlockWave": 6,
    "fameCost": 80,
    "bonds": [],
    "desc": "손책과 신주정에서 일대일 신화적 혈전을 벌인 신의의 맹장",
    "story": "[제6장 해방] 신의를 목숨처럼 지키고 적진을 꿰뚫은 활의 달인"
  },
  {
    "id": "wu_4",
    "tier": 5,
    "faction": "wu",
    "branch": "archer",
    "name": "손상향",
    "hanja": "香",
    "weapon": "bow",
    "wName": "화염연노궁",
    "helm": "female",
    "beard": "none",
    "atk": 550,
    "spd": 1.4,
    "range": 11.5,
    "stamp": "弓腰姬君",
    "sealHanja": "弓腰姬君",
    "unlockWave": 7,
    "fameCost": 80,
    "bonds": [],
    "desc": "무장 시녀를 거느린 강동의 궁요희",
    "story": "[제7장 해방] 무예에 능하고 강개한 성품의 강동 공주",
    "female": true
  },
  {
    "id": "wu_6_1",
    "tier": 6,
    "faction": "wu",
    "branch": "tactician",
    "name": "육항",
    "hanja": "抗",
    "weapon": "sword",
    "wName": "진동진무검",
    "helm": "scholar",
    "beard": "goatee",
    "atk": 1210,
    "spd": 1.35,
    "range": 11.5,
    "stamp": "荊州鎭守",
    "sealHanja": "荊州鎭守",
    "unlockWave": 8,
    "fameCost": 100,
    "bonds": [],
    "desc": "육손의 아들이자 양호와 덕으로 교류한 오나라 마지막 명장",
    "story": "[제8장 해방] 명석한 지혜로 위나라 양호의 공세를 저지한 도독"
  },
  {
    "id": "wu_6_2",
    "tier": 6,
    "faction": "wu",
    "branch": "tactician",
    "name": "여몽",
    "hanja": "蒙",
    "weapon": "glaive",
    "wName": "형주습격도",
    "helm": "helm",
    "beard": "goatee",
    "atk": 1310,
    "spd": 1.3,
    "range": 11.0,
    "stamp": "吳下阿蒙",
    "sealHanja": "吳下阿蒙",
    "unlockWave": 9,
    "fameCost": 120,
    "bonds": [],
    "desc": "괄목상대하여 형주를 단숨에 제압한 대도독",
    "story": "[제9장 해방] 학문을 닦아 도독이 되어 형주를 회복한 명장"
  },
  {
    "id": "wu_5",
    "tier": 6,
    "faction": "wu",
    "branch": "tactician",
    "name": "육손",
    "hanja": "陸",
    "weapon": "dual",
    "wName": "비연쌍검",
    "helm": "scholar",
    "beard": "none",
    "atk": 1300,
    "spd": 1.45,
    "range": 11.0,
    "stamp": "火燒連營",
    "sealHanja": "火燒連營",
    "unlockWave": 10,
    "fameCost": 130,
    "bonds": [
      "burn"
    ],
    "desc": "이릉의 칠백 리 연영을 불태운 오나라 대도독",
    "story": "[제10장 해방] 화소연영의 천재 지략가 육손 참전"
  },
  {
    "id": "wu_6_4",
    "tier": 6,
    "faction": "wu",
    "branch": "vanguard",
    "name": "손견",
    "hanja": "堅",
    "weapon": "sword",
    "wName": "고정도",
    "helm": "helm",
    "beard": "wild",
    "atk": 1380,
    "spd": 1.3,
    "range": 10.5,
    "stamp": "江東猛虎",
    "sealHanja": "江東猛虎",
    "unlockWave": 10,
    "fameCost": 130,
    "bonds": [],
    "desc": "반동탁 연합군의 선봉에서 낙양에 첫발을 디딘 강동맹호",
    "story": "[제10장 해방] 옥새를 얻고 용맹을 떨친 손씨 가문의 창업주"
  },
  {
    "id": "wu_6",
    "tier": 7,
    "faction": "wu",
    "branch": "tactician",
    "name": "주유",
    "hanja": "周",
    "weapon": "fan",
    "wName": "적벽화선",
    "helm": "scholar",
    "beard": "none",
    "atk": 3100,
    "spd": 1.5,
    "range": 12.0,
    "stamp": "赤壁業火",
    "sealHanja": "赤壁業火",
    "unlockWave": 12,
    "fameCost": 180,
    "bonds": [
      "burn"
    ],
    "desc": "적벽의 동남풍으로 조조의 대선단을 불태운 미주랑",
    "story": "[제12장 해방] 적벽대전의 영웅 대도독 주유 출진"
  },
  {
    "id": "wu_7_2",
    "tier": 7,
    "faction": "wu",
    "branch": "vanguard",
    "name": "손책",
    "hanja": "策",
    "weapon": "spear",
    "wName": "소패왕창",
    "helm": "helm",
    "beard": "none",
    "atk": 3300,
    "spd": 1.6,
    "range": 11.5,
    "stamp": "小霸王勇",
    "sealHanja": "小霸王勇",
    "unlockWave": 14,
    "fameCost": 200,
    "bonds": [],
    "desc": "단 궤멸적인 기세로 강동 6군을 한 번에 평정한 소패왕",
    "story": "[제14장 해방] 압도적 무력으로 강동의 터전을 다진 젊은 패왕"
  },
  {
    "id": "wu_7",
    "tier": 7,
    "faction": "wu",
    "branch": "vanguard",
    "name": "손권",
    "hanja": "權",
    "weapon": "sword",
    "wName": "백홍검",
    "helm": "crown",
    "beard": "goatee",
    "atk": 3000,
    "spd": 1.7,
    "range": 13.0,
    "stamp": "碧眼紫髯",
    "sealHanja": "江東猛虎",
    "unlockWave": 18,
    "fameCost": 220,
    "bonds": [
      "three_lords"
    ],
    "desc": "강동 6군 81주를 수호한 벽안자염의 오나라 황제",
    "story": "[제18장 해방] 강동 황룡의 기운을 해방한 대제 손권",
    "halo": true
  },
  {
    "id": "qun_1",
    "tier": 1,
    "faction": "qun",
    "branch": "vanguard",
    "name": "송헌",
    "hanja": "憲",
    "weapon": "spear",
    "wName": "원소진창",
    "helm": "helm",
    "beard": "none",
    "atk": 28,
    "spd": 0.9,
    "range": 8.0,
    "stamp": "蒼天已死",
    "sealHanja": "呂布八健",
    "unlockWave": 1,
    "fameCost": 0,
    "bonds": [],
    "desc": "여포 수하의 팔건장 중 한 명",
    "story": "서주 시절 여포의 신임을 받은 선봉병"
  },
  {
    "id": "qun_1_2",
    "tier": 1,
    "faction": "qun",
    "branch": "vanguard",
    "name": "후성",
    "hanja": "成",
    "weapon": "sword",
    "wName": "서량단검",
    "helm": "helm",
    "beard": "wild",
    "atk": 26,
    "spd": 0.95,
    "range": 8.0,
    "stamp": "八健將士",
    "sealHanja": "八健將士",
    "unlockWave": 1,
    "fameCost": 0,
    "bonds": [],
    "desc": "여포의 팔건장으로 말을 관리했던 장수",
    "story": "하비성 방어전에서 여포와 동고동락한 무장"
  },
  {
    "id": "qun_1_3",
    "tier": 1,
    "faction": "qun",
    "branch": "vanguard",
    "name": "위속",
    "hanja": "續",
    "weapon": "spear",
    "wName": "변진철창",
    "helm": "helm",
    "beard": "none",
    "atk": 27,
    "spd": 0.9,
    "range": 8.5,
    "stamp": "邊陣猛將",
    "sealHanja": "邊陣猛將",
    "unlockWave": 1,
    "fameCost": 0,
    "bonds": [],
    "desc": "여포의 친척이자 팔건장으로 활동한 용장",
    "story": "난세의 전장에서 여포를 수호한 보병"
  },
  {
    "id": "qun_1_4",
    "tier": 1,
    "faction": "qun",
    "branch": "tactician",
    "name": "장양",
    "hanja": "楊",
    "weapon": "sword",
    "wName": "하내보검",
    "helm": "helm",
    "beard": "goatee",
    "atk": 25,
    "spd": 1.0,
    "range": 8.5,
    "stamp": "河內太守",
    "sealHanja": "河內太守",
    "unlockWave": 1,
    "fameCost": 0,
    "bonds": [],
    "desc": "하내태수로 여포와 정원 사이를 중재한 제후",
    "story": "의리를 중시하여 여포를 지원한 군웅"
  },
  {
    "id": "qun_1_5",
    "tier": 1,
    "faction": "qun",
    "branch": "cavalry",
    "name": "한수",
    "hanja": "遂",
    "weapon": "spear",
    "wName": "서량기창",
    "helm": "helm",
    "beard": "white",
    "atk": 29,
    "spd": 0.95,
    "range": 9.0,
    "stamp": "九曲黃河",
    "sealHanja": "九曲黃河",
    "unlockWave": 1,
    "fameCost": 0,
    "bonds": [],
    "desc": "마등과 손잡고 서량을 호령한 구곡황하의 장수",
    "story": "서량 군벌의 수장으로 관중에서 활약한 제후"
  },
  {
    "id": "qun_2_1",
    "tier": 2,
    "faction": "qun",
    "branch": "vanguard",
    "name": "이각",
    "hanja": "傕",
    "weapon": "sword",
    "wName": "서량마도",
    "helm": "helm",
    "beard": "wild",
    "atk": 62,
    "spd": 0.95,
    "range": 8.5,
    "stamp": "長安亂臣",
    "sealHanja": "長安亂臣",
    "unlockWave": 1,
    "fameCost": 0,
    "bonds": [],
    "desc": "동탁 사후 장안을 점령하고 권력을 휘두른 맹장",
    "story": "서량 철기군을 몰고 장안을 대혼란에 빠뜨린 장수"
  },
  {
    "id": "qun_2_2",
    "tier": 2,
    "faction": "qun",
    "branch": "vanguard",
    "name": "곽사",
    "hanja": "汜",
    "weapon": "spear",
    "wName": "암흑기창",
    "helm": "helm",
    "beard": "wild",
    "atk": 61,
    "spd": 0.95,
    "range": 8.5,
    "stamp": "西涼暴將",
    "sealHanja": "西涼暴將",
    "unlockWave": 1,
    "fameCost": 0,
    "bonds": [],
    "desc": "이각과 함께 장안을 유린한 서량의 맹장",
    "story": "패도적인 무력으로 동탁의 잔당을 이끈 기병장"
  },
  {
    "id": "qun_2_3",
    "tier": 2,
    "faction": "qun",
    "branch": "vanguard",
    "name": "번조",
    "hanja": "稠",
    "weapon": "mace",
    "wName": "서량철추",
    "helm": "helm",
    "beard": "wild",
    "atk": 59,
    "spd": 1.0,
    "range": 8.5,
    "stamp": "邊境將帥",
    "sealHanja": "邊境將帥",
    "unlockWave": 1,
    "fameCost": 0,
    "bonds": [],
    "desc": "이각, 곽사와 함께 장안을 공격한 동탁 수하 장수",
    "story": "서량군의 한 축을 맡았던 용맹한 부장"
  },
  {
    "id": "qun_2_4",
    "tier": 2,
    "faction": "qun",
    "branch": "tactician",
    "name": "장제",
    "hanja": "濟",
    "weapon": "sword",
    "wName": "표기보검",
    "helm": "helm",
    "beard": "goatee",
    "atk": 57,
    "spd": 1.05,
    "range": 9.0,
    "stamp": "표기將軍",
    "sealHanja": "표기將軍",
    "unlockWave": 1,
    "fameCost": 0,
    "bonds": [],
    "desc": "장수의 숙부이자 서량군의 군사적 요직을 맡은 장수",
    "story": "표기장군으로 위세를 떨친 동탁 진영의 무장"
  },
  {
    "id": "qun_2",
    "tier": 2,
    "faction": "qun",
    "branch": "vanguard",
    "name": "화웅",
    "hanja": "華",
    "weapon": "axe",
    "wName": "개산대부",
    "helm": "helm",
    "beard": "wild",
    "atk": 65,
    "spd": 0.9,
    "range": 8.5,
    "stamp": "汜水猛將",
    "sealHanja": "汜水猛將",
    "unlockWave": 1,
    "fameCost": 0,
    "bonds": [],
    "desc": "사수관을 호령한 거대 도끼 맹장",
    "story": "초기 해방된 서량군의 선봉 맹장"
  },
  {
    "id": "qun_3_1",
    "tier": 3,
    "faction": "qun",
    "branch": "vanguard",
    "name": "고순",
    "hanja": "順",
    "weapon": "spear",
    "wName": "함진영창",
    "helm": "helm",
    "beard": "none",
    "atk": 135,
    "spd": 1.05,
    "range": 9.0,
    "stamp": "陷陣營主",
    "sealHanja": "陷陣營主",
    "unlockWave": 1,
    "fameCost": 0,
    "bonds": [],
    "desc": "공격하는 곳마다 적진을 무너뜨린 함진영의 장수",
    "story": "충직하고 청렴하여 여포 진영 최고 정예를 이끈 명장"
  },
  {
    "id": "qun_3_2",
    "tier": 3,
    "faction": "qun",
    "branch": "archer",
    "name": "장임",
    "hanja": "任",
    "weapon": "bow",
    "wName": "낙봉파강궁",
    "helm": "helm",
    "beard": "goatee",
    "atk": 128,
    "spd": 1.25,
    "range": 11.0,
    "stamp": "落鳳坡弓",
    "sealHanja": "落鳳坡弓",
    "unlockWave": 1,
    "fameCost": 0,
    "bonds": [],
    "desc": "낙봉파에서 매복하여 방통을 사살한 익주의 명장",
    "story": "유장을 끝까지 수호하며 단두의 충절을 지킨 용장"
  },
  {
    "id": "qun_3_3",
    "tier": 3,
    "faction": "qun",
    "branch": "cavalry",
    "name": "공손찬",
    "hanja": "瓚",
    "weapon": "spear",
    "wName": "백마의종창",
    "helm": "helm",
    "beard": "none",
    "atk": 130,
    "spd": 1.2,
    "range": 9.5,
    "stamp": "白馬義從",
    "sealHanja": "白馬義從",
    "unlockWave": 1,
    "fameCost": 0,
    "bonds": [],
    "desc": "백마의종을 이끌고 오랑캐를 물리친 유주의 제후",
    "story": "백마 기병대를 몰고 북방을 호령한 용장",
    "mount": "white"
  },
  {
    "id": "qun_3_4",
    "tier": 3,
    "faction": "qun",
    "branch": "cavalry",
    "name": "마등",
    "hanja": "騰",
    "weapon": "spear",
    "wName": "서량패창",
    "helm": "helm",
    "beard": "white",
    "atk": 132,
    "spd": 1.15,
    "range": 9.5,
    "stamp": "西涼太守",
    "sealHanja": "西涼太守",
    "unlockWave": 1,
    "fameCost": 0,
    "bonds": [],
    "desc": "마초의 아버지이자 서량을 다스린 웅장",
    "story": "서량의 철기군을 모아 조조에게 맞선 정절의 군웅"
  },
  {
    "id": "qun_3_5",
    "tier": 3,
    "faction": "qun",
    "branch": "tactician",
    "name": "도겸",
    "hanja": "謙",
    "weapon": "fan",
    "wName": "서주인선",
    "helm": "scholar",
    "beard": "white",
    "atk": 115,
    "spd": 1.1,
    "range": 9.5,
    "stamp": "徐州讓賢",
    "sealHanja": "徐州讓賢",
    "unlockWave": 1,
    "fameCost": 0,
    "bonds": [],
    "desc": "서주를 유비에게 세 번 양도한 어진 태수",
    "story": "난세 속에서 백성을 사랑하고 인덕을 베푼 제후"
  },
  {
    "id": "qun_4_1",
    "tier": 4,
    "faction": "qun",
    "branch": "tactician",
    "name": "유표",
    "hanja": "表",
    "weapon": "sword",
    "wName": "형주지배검",
    "helm": "crown",
    "beard": "goatee",
    "atk": 245,
    "spd": 1.15,
    "range": 10.5,
    "stamp": "荊州八俊",
    "sealHanja": "荊州八俊",
    "unlockWave": 2,
    "fameCost": 30,
    "bonds": [],
    "desc": "형주 9군을 평정하고 학문을 진흥시킨 형주목",
    "story": "[제2장 해방] 형주 팔준의 으뜸으로 난세를 수호한 군웅"
  },
  {
    "id": "qun_4_2",
    "tier": 4,
    "faction": "qun",
    "branch": "tactician",
    "name": "진궁",
    "hanja": "宮",
    "weapon": "fan",
    "wName": "연환묘책선",
    "helm": "scholar",
    "beard": "goatee",
    "atk": 270,
    "spd": 1.3,
    "range": 11.5,
    "stamp": "剛直智謀",
    "sealHanja": "剛直智謀",
    "unlockWave": 2,
    "fameCost": 30,
    "bonds": [],
    "desc": "조조를 떠나 여포의 책사로서 기책을 올린 강직한 책사",
    "story": "[제2장 해방] 여포를 패왕으로 만들기 위해 진력한 명모사"
  },
  {
    "id": "qun_4_3",
    "tier": 4,
    "faction": "qun",
    "branch": "tactician",
    "name": "전풍",
    "hanja": "豐",
    "weapon": "fan",
    "wName": "하북지계선",
    "helm": "scholar",
    "beard": "long",
    "atk": 280,
    "spd": 1.25,
    "range": 12.0,
    "stamp": "剛直忠言",
    "sealHanja": "剛直忠言",
    "unlockWave": 3,
    "fameCost": 40,
    "bonds": [],
    "desc": "원소에게 관도대전의 허점을 경고한 강직한 군사",
    "story": "[제3장 해방] 하북 최고의 혜안을 지녔던 비운의 참모"
  },
  {
    "id": "qun_4_4",
    "tier": 4,
    "faction": "qun",
    "branch": "tactician",
    "name": "저수",
    "hanja": "授",
    "weapon": "fan",
    "wName": "지연전략선",
    "helm": "scholar",
    "beard": "goatee",
    "atk": 275,
    "spd": 1.2,
    "range": 11.5,
    "stamp": "監軍遠謀",
    "sealHanja": "監軍遠謀",
    "unlockWave": 3,
    "fameCost": 40,
    "bonds": [],
    "desc": "지연전술로 조조를 말려죽이려 했던 원소 진영 최고의 군사",
    "story": "[제3장 해방] 원소군의 총사령관으로서 대계 전략을 세운 지장"
  },
  {
    "id": "qun_5_1",
    "tier": 5,
    "faction": "qun",
    "branch": "vanguard",
    "name": "안량",
    "hanja": "良",
    "weapon": "glaive",
    "wName": "하북참마도",
    "helm": "helm",
    "beard": "wild",
    "atk": 600,
    "spd": 1.25,
    "range": 10.5,
    "stamp": "河北雙壁",
    "sealHanja": "河北雙壁",
    "unlockWave": 4,
    "fameCost": 60,
    "bonds": [
      "hebei_twins"
    ],
    "desc": "원소 진영 최강의 무력을 자랑한 하북쌍벽의 맹장",
    "story": "[제4장 해방] 백마 전투에서 위나라 대군을 압도한 대장소장"
  },
  {
    "id": "qun_5_2",
    "tier": 5,
    "faction": "qun",
    "branch": "vanguard",
    "name": "문추",
    "hanja": "醜",
    "weapon": "spear",
    "wName": "하북철파창",
    "helm": "helm",
    "beard": "wild",
    "atk": 595,
    "spd": 1.25,
    "range": 10.5,
    "stamp": "顏良文醜",
    "sealHanja": "顏良文醜",
    "unlockWave": 4,
    "fameCost": 60,
    "bonds": [
      "hebei_twins"
    ],
    "desc": "안량과 함께 하북을 호령한 원소군의 최고 맹장",
    "story": "[제4장 해방] 연진 전투에서 서황과 장합을 사로잡을 뻔한 맹장"
  },
  {
    "id": "qun_5_3",
    "tier": 5,
    "faction": "qun",
    "branch": "tactician",
    "name": "화타",
    "hanja": "佗",
    "weapon": "fan",
    "wName": "청낭의선",
    "helm": "scholar",
    "beard": "white",
    "atk": 510,
    "spd": 1.4,
    "range": 12.0,
    "stamp": "神醫麻沸",
    "sealHanja": "神醫麻沸",
    "unlockWave": 5,
    "fameCost": 70,
    "bonds": [],
    "desc": "마沸산을 개발하고 관우의 뼈를 깎아 치료한 신의",
    "story": "[제5장 해방] 난세의 병자들을 구하고 관우를 치료한 신의"
  },
  {
    "id": "qun_5_4",
    "tier": 5,
    "faction": "qun",
    "branch": "vanguard",
    "name": "축융",
    "hanja": "融",
    "weapon": "spear",
    "wName": "비도비창",
    "helm": "female",
    "beard": "none",
    "atk": 580,
    "spd": 1.35,
    "range": 11.0,
    "stamp": "火神後裔",
    "sealHanja": "火神後裔",
    "unlockWave": 5,
    "fameCost": 70,
    "bonds": [],
    "desc": "비도를 자유자재로 던지는 남만왕 맹획의 여걸 왕비",
    "story": "[제5장 해방] 불신의 후예로서 전장에서 무예를 떨친 남만 여걸",
    "female": true
  },
  {
    "id": "qun_4",
    "tier": 6,
    "faction": "qun",
    "branch": "vanguard",
    "name": "맹획",
    "hanja": "孟",
    "weapon": "mace",
    "wName": "남만왕철추",
    "helm": "turban",
    "beard": "wild",
    "atk": 1310,
    "spd": 1.15,
    "range": 10.0,
    "stamp": "南蠻獸王",
    "sealHanja": "南蠻獸王",
    "unlockWave": 8,
    "fameCost": 100,
    "bonds": [],
    "desc": "전투 코끼리를 몰고 진격하는 남만왕",
    "story": "[제8장 해방] 칠종칠금 끝에 코끼리 군단과 귀순한 남만왕",
    "mount": "elephant"
  },
  {
    "id": "qun_3",
    "tier": 6,
    "faction": "qun",
    "branch": "tactician",
    "name": "초선",
    "hanja": "貂",
    "weapon": "fan",
    "wName": "폐월무희선",
    "helm": "female",
    "beard": "none",
    "atk": 1250,
    "spd": 1.45,
    "range": 12.0,
    "stamp": "閉月連環",
    "sealHanja": "閉月連環",
    "unlockWave": 9,
    "fameCost": 120,
    "bonds": [
      "chain_strat"
    ],
    "desc": "달을 가리는 미모로 난세를 구한 무희",
    "story": "[제9장 해방] 왕윤의 연환계를 완성한 절세 무희",
    "female": true
  },
  {
    "id": "qun_6_3",
    "tier": 6,
    "faction": "qun",
    "branch": "tactician",
    "name": "원소",
    "hanja": "紹",
    "weapon": "sword",
    "wName": "명문명검",
    "helm": "crown",
    "beard": "goatee",
    "atk": 1330,
    "spd": 1.35,
    "range": 11.5,
    "stamp": "四世三公",
    "sealHanja": "四世三公",
    "unlockWave": 10,
    "fameCost": 130,
    "bonds": [],
    "desc": "사세삼공의 명문가 출신으로 하북 4주를 통일한 맹주",
    "story": "[제10장 해방] 반동탁 연합군의 맹주로서 위세를 떨친 패자"
  },
  {
    "id": "qun_6",
    "tier": 6,
    "faction": "qun",
    "branch": "vanguard",
    "name": "동탁",
    "hanja": "董",
    "weapon": "mace",
    "wName": "암흑마왕추",
    "helm": "crown",
    "beard": "wild",
    "atk": 1400,
    "spd": 1.2,
    "range": 10.5,
    "stamp": "暴虐魔王",
    "sealHanja": "暴虐魔王",
    "unlockWave": 12,
    "fameCost": 150,
    "bonds": [],
    "desc": "서량 철기군으로 낙양을 장악한 폭군",
    "story": "[제12장 해방] 폭학마왕 동탁이 흑마를 타고 강림",
    "mount": "black"
  },
  {
    "id": "qun_7_1",
    "tier": 7,
    "faction": "qun",
    "branch": "tactician",
    "name": "좌자",
    "hanja": "慈",
    "weapon": "fan",
    "wName": "도술둔갑선",
    "helm": "scholar",
    "beard": "white",
    "atk": 2900,
    "spd": 1.6,
    "range": 13.5,
    "stamp": "遁甲天書",
    "sealHanja": "遁甲天書",
    "unlockWave": 14,
    "fameCost": 200,
    "bonds": [],
    "desc": "둔갑천서를 익혀 조조를 조롱하고 신통력을 부린 도사",
    "story": "[제14장 해방] 신선과 같은 도술로 난세를 희롱한 방사"
  },
  {
    "id": "qun_5",
    "tier": 7,
    "faction": "qun",
    "branch": "tactician",
    "name": "장각",
    "hanja": "角",
    "weapon": "fan",
    "wName": "태평구절장",
    "helm": "turban",
    "beard": "long",
    "atk": 3200,
    "spd": 1.5,
    "range": 13.0,
    "stamp": "黃天當立",
    "sealHanja": "黃天當立",
    "unlockWave": 15,
    "fameCost": 220,
    "bonds": [],
    "desc": "태평요술로 천둥과 벼락을 부르는 천공장군",
    "story": "[제15장 해방] 황천당립의 뇌전 도술사 장각 해방"
  },
  {
    "id": "qun_7",
    "tier": 7,
    "faction": "qun",
    "branch": "vanguard",
    "name": "여포",
    "hanja": "呂",
    "weapon": "halberd",
    "wName": "방천화극",
    "helm": "plumes",
    "beard": "none",
    "atk": 3600,
    "spd": 1.65,
    "range": 13.0,
    "stamp": "天下無雙",
    "sealHanja": "天下無雙",
    "unlockWave": 20,
    "fameCost": 260,
    "bonds": [
      "chain_strat"
    ],
    "desc": "적토마와 방천화극으로 천하를 압도한 무신",
    "story": "[제20장 해방] 인중여포 마중적토 무신 여포 해방",
    "mount": "red",
    "plumes": true,
    "halo": true
  }
];;

const CHAPTER_TITLES = {
  1: '제1장 황건적의 난',
  2: '제2장 사수관·남만 정벌',
  3: '제3장 장판파 단기필마',
  4: '제4장 서주 방어전',
  5: '제5장 장판교 & 합비 결전',
  7: '제7장 이릉 화계 & 태평도',
  10: '제10장 관우의 오관육참',
  12: '제12장 적벽대전 업화',
  15: '제15장 삼고초려 와룡출세',
  16: '제16장 관도·패왕 조조',
  18: '제18장 강동 대제 손권',
  20: '제20장 천하무쌍 무신 여포'
};

const TERRAIN_MAP = {
  2:  { type: 'high',   name: '⛰️ 고지대 (사거리+2.5m·화력+20%)', color: 0x0ea5e9 },
  6:  { type: 'fire',   name: '🔥 화염단 (공격 시 확정 화상)',   color: 0xea580c },
  8:  { type: 'wind',   name: '🌪️ 풍신단 (공격속도 +35%)',      color: 0x10b981 },
  12: { type: 'taichi', name: '☯️ 태극석 (치명타율 +30%)',      color: 0xa855f7 },
  17: { type: 'supply', name: '🌾 둔전소 (5초마다 군량미 +12)', color: 0xeab308 }
};

const BOND_LIST = [
  { id: 'oath', name: '🍑 도원결의 (+25% 화력)', ids: ['shu_5', 'shu_6', 'shu_7'], min: 2, atkBonus: 0.25 },
  { id: 'five', name: '🐯 오호대장군 (+25% 화력)', ids: ['shu_3', 'shu_4', 'shu_5', 'shu_6_2', 'shu_6'], min: 2, atkBonus: 0.25 },
  { id: 'wei5', name: '🦅 오자양장 (+25% 화력)', ids: ['wei_1_5', 'wei_2', 'wei_3', 'wei_3_5', 'wei_5'], min: 2, atkBonus: 0.25 },
  { id: 'burn', name: '🔥 적벽화신 (+30% 화력)', ids: ['wu_5', 'wu_6', 'shu_7'], min: 2, atkBonus: 0.30 },
  { id: 'moon', name: '🌙 연환계 (+35% 화력)', ids: ['qun_3', 'qun_7'], min: 2, atkBonus: 0.35 },
  { id: 'two_qiaos', name: '🌸 강동이교 (+20% 화력)', ids: ['wu_4_4', 'wu_5_1'], min: 2, atkBonus: 0.20 },
  { id: 'wu12', name: '🐅 강동호신 (+25% 화력)', ids: ['wu_2_4', 'wu_2_5', 'wu_3_1', 'wu_3_2', 'wu_3_3', 'wu_3_4', 'wu_2'], min: 2, atkBonus: 0.25 },
  { id: 'hebei_twins', name: '⚔️ 하북쌍벽 (+25% 화력)', ids: ['qun_5_1', 'qun_5_2'], min: 2, atkBonus: 0.25 },
  { id: 'three_lords', name: '👑 삼국주군 (+30% 화력)', ids: ['shu_7_3', 'wei_7', 'wu_7'], min: 2, atkBonus: 0.30 }
];

const WEATHER_LIST = [
  { id: 'clear', name: '☀️ 쾌청', rangeMod: 1.0, fireMod: 1.0 },
  { id: 'wind',  name: '🌪️ 동남풍', rangeMod: 0, fireMod: 1.4 },
  { id: 'rain',  name: '🌧️ 폭우', rangeMod: 0, fireMod: 0.9, slowEnemy: 0.8 },
  { id: 'fog',   name: '🌫️ 안개', rangeMod: -0.5, fireMod: 1.0, critMod: 0.15 }
];

const STRATEGY_CARDS = [
  { id: 'oat', title: '🍑 도원결의', desc: '전체 장수 공격속도 영구 +20% 상승', apply: (s) => { s.buffSpd *= 1.2; } },
  { id: 'sup', title: '🌾 군량 징발 & 명성', desc: '군량미 +240, 무공 명성 +25🎖️, 내구도 +30 회복', apply: (s) => { s.gold += 240; s.fame += 25; s.hp = Math.min(s.maxHp, s.hp + 30); } },
  { id: 'bow', title: '🏹 제갈연노 개량', desc: '전체 장수 공격력 +25% 및 사거리 +1.5m', apply: (s) => { s.buffAtk *= 1.25; s.buffRange += 1.5; } },
  { id: 'crt', title: '⚡ 패왕의 기세', desc: '치명타 확률 +15% 영구 증가', apply: (s) => { s.buffCrit += 0.15; } },
  { id: 'rec', title: '📜 구품관인법', desc: '장수 모집 시 2~3티어 등장 확률 2배 증가', apply: (s) => { s.highRecruitBonus += 0.12; } }
];

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
    if (this.ctx && this.ctx.state === 'suspended') this.ctx.resume();
  }
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
  playGong() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;
    const now = this.ctx.currentTime;
    [210, 296.1, 405.3, 560.7].forEach((freq, idx) => {
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
  playGuqinNote(freq) {
    if (!this.enabled || !this.ctx) return;
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(freq * 0.98, now);
    osc.frequency.linearRampToValueAtTime(freq, now + 0.04);
    gain.gain.setValueAtTime(0.06, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.55);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start(now);
    osc.stop(now + 0.56);
  }
  playBladeSlash() {
    if (!this.enabled || !this.ctx) return;
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(520, now);
    osc.frequency.exponentialRampToValueAtTime(140, now + 0.07);
    gain.gain.setValueAtTime(0.08, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start(now);
    osc.stop(now + 0.085);
  }
  playCatapultBoom() {
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
  stampTimeout = setTimeout(() => overlay.classList.add('stamp-hidden'), 1500);
}

let toastTimer = null;
function showStoryToast(chapterTxt, titleTxt, descTxt) {
  const box = document.getElementById('story-toast');
  document.getElementById('toast-chapter').textContent = chapterTxt;
  document.getElementById('toast-title').textContent = titleTxt;
  document.getElementById('toast-desc').textContent = descTxt;
  box.classList.remove('hidden');
  if (toastTimer) clearTimeout(toastTimer);
  toastTimer = setTimeout(() => box.classList.add('hidden'), 4200);
}

const SAVE_KEY = 'TK_ARGON_SAVE_V4';
const INITIAL_UNLOCKED = HERO_DB.filter(h => h.unlockWave <= 1).map(h => h.id);

const gameState = {
  inLobby: true,
  selectedLord: 'shu',
  gold: 120,
  fame: 30,
  bestWave: 1,
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
  weatherIdx: 0,
  supplyTileTimer: 0,
  duelTimer: 0,
  duelHits: 0,
  activeBoss: null,
  siegeLeftLv: 0,
  siegeRightLv: 0,
  siegeLeftTimer: 0,
  siegeRightTimer: 0,
  supplyCartTimer: 0,
  unlockedIds: [...INITIAL_UNLOCKED],
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
      selectedLord: gameState.selectedLord,
      gold: gameState.gold,
      fame: gameState.fame,
      bestWave: Math.max(gameState.bestWave, gameState.wave),
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
  } catch (e) {}
}

function loadGameSafe() {
  try {
    const raw = localStorage.getItem(SAVE_KEY);
    if (!raw) return null;
    const data = JSON.parse(raw);
    if (!data || !Array.isArray(data.unlockedIds)) return null;
    gameState.selectedLord = data.selectedLord || 'shu';
    gameState.gold = Number(data.gold) || 120;
    gameState.fame = Number(data.fame) || 30;
    gameState.bestWave = Number(data.bestWave) || 1;
    gameState.wave = Number(data.wave) || 1;
    gameState.kills = Number(data.kills) || 0;
    gameState.recruitCost = Number(data.recruitCost) || 20;
    gameState.upgradeLvl = Number(data.upgradeLvl) || 1;
    gameState.upgradeCost = Number(data.upgradeCost) || 35;
    gameState.siegeLeftLv = Number(data.siegeLeftLv) || 0;
    gameState.siegeRightLv = Number(data.siegeRightLv) || 0;
    const mergedUnlock = new Set([...INITIAL_UNLOCKED, ...data.unlockedIds]);
    gameState.unlockedIds = Array.from(mergedUnlock);
    gameState.waveRemaining = 8 + gameState.wave * 3;
    return data.gridIds || null;
  } catch (e) {
    return null;
  }
}

// 스테이지 등반 시 중요 장수 자동 해방 점검
function checkStageLiberation(waveNum) {
  const newlyLiberated = HERO_DB.filter(h => h.unlockWave === waveNum && !gameState.unlockedIds.includes(h.id));
  if (newlyLiberated.length > 0) {
    newlyLiberated.forEach(h => gameState.unlockedIds.push(h.id));
    const mainHero = newlyLiberated[0];
    triggerHanjaStamp(mainHero.stamp, `명장 해방: ${mainHero.name} 합류!`);
    showStoryToast(
      `📜 제${waveNum}장 역사 해방 달성!`,
      `✨ ${newlyLiberated.map(x => `[${x.name}]`).join(' · ')} 해방 완료!`,
      mainHero.story
    );
    saveGameSafe();
  }
}

// 본영 메인 메뉴 UI 갱신
function refreshMainMenuUI() {
  gameState.bestWave = Math.max(gameState.bestWave, gameState.wave);
  document.getElementById('menu-best-wave').textContent = `제${gameState.bestWave}장`;
  document.getElementById('menu-fame-val').textContent = gameState.fame;
  document.getElementById('menu-unlock-cnt').textContent = `${gameState.unlockedIds.length}/120`;
  document.getElementById('cont-wave-txt').textContent = `제${gameState.wave}장`;

  document.querySelectorAll('.lord-card').forEach(card => {
    card.classList.toggle('active', card.dataset.lord === gameState.selectedLord);
  });

  // 다음 해방 목표 표시
  const nextLocked = HERO_DB.find(h => !gameState.unlockedIds.includes(h.id));
  const banner = document.getElementById('next-story-banner');
  if (nextLocked) {
    banner.innerHTML = `
      <div>🔒 <strong>다음 해방 명장: [T${nextLocked.tier} ${nextLocked.name}]</strong> (제${nextLocked.unlockWave}장 돌파 또는 ${nextLocked.fameCost}🎖️ 삼고초려)</div>
      <div style="font-size:11px;color:#94a3b8;margin-top:2px;">${nextLocked.story}</div>`;
  } else {
    banner.innerHTML = `<div style="color:#fde047;font-weight:800;">🎉 삼국지 120인 전 명장 해방 완료! 천하통일을 달성했습니다!</div>`;
  }
}

let scene, camera, renderer, composer;
let gridTiles3D = [];
let siegeLeftMesh = null, siegeRightMesh = null;
const bannerTextureCache = {};

const CAM_PRESETS = [
  { pos: new THREE.Vector3(0, 27, 25), look: new THREE.Vector3(0, 0, 1) },
  { pos: new THREE.Vector3(0, 40, 0.1), look: new THREE.Vector3(0, 0, 0) },
  { pos: new THREE.Vector3(0, 8, 16), look: new THREE.Vector3(0, 1, -10) }
];

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

function buildHeroCharacter3D(heroData) {
  const root = new THREE.Group();
  const fMeta = FACTION_META[heroData.faction];

  // 1. 팔각 전술 제단 받침대
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

  // 2. 4족 탈것 (적토마 / 백마 / 흑마 / 남만 코끼리)
  if (heroData.mount) {
    if (heroData.mount === 'elephant') {
      const elMat = new THREE.MeshStandardMaterial({ color: 0x64748b, roughness: 0.7 });
      const eBody = new THREE.Mesh(new THREE.BoxGeometry(0.95, 0.75, 1.35), elMat);
      eBody.position.set(0, 0.65, 0);
      const eHead = new THREE.Mesh(new THREE.SphereGeometry(0.42, 10, 10), elMat);
      eHead.position.set(0, 0.82, 0.72);
      const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.07, 0.65, 6), elMat);
      trunk.position.set(0, 0.52, 1.08); trunk.rotation.x = 0.35;
      root.add(eBody, eHead, trunk);
      yOffset = 0.95;
    } else {
      const mountColor = heroData.mount === 'red' ? 0x991b1b : heroData.mount === 'white' ? 0xf8fafc : 0x1e293b;
      const mMat = new THREE.MeshStandardMaterial({ color: mountColor, roughness: 0.45 });
      const body = new THREE.Mesh(new THREE.BoxGeometry(0.72, 0.56, 1.25), mMat);
      body.position.set(0, 0.62, 0);
      const neck = new THREE.Mesh(new THREE.CylinderGeometry(0.16, 0.22, 0.55, 6), mMat);
      neck.position.set(0, 0.88, 0.52); neck.rotation.x = 0.45;
      const mHead = new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.24, 0.45), mMat);
      mHead.position.set(0, 1.1, 0.7); mHead.rotation.x = 0.35;
      root.add(body, neck, mHead);
      yOffset = 0.92;
    }
  }

  // 3. 갑주, 어깨 견갑, 망토
  const armorMat = new THREE.MeshStandardMaterial({ color: fMeta.hex, metalness: 0.6, roughness: 0.3 });
  const goldMat = new THREE.MeshStandardMaterial({ color: 0xfbbf24, metalness: 0.85, roughness: 0.2 });

  const torso = new THREE.Mesh(new THREE.CylinderGeometry(0.38, 0.46, 0.85, 8), armorMat);
  torso.position.y = yOffset + 0.45;
  root.add(torso);

  const paulL = new THREE.Mesh(new THREE.SphereGeometry(0.18, 8, 8), goldMat);
  paulL.position.set(-0.42, yOffset + 0.72, 0);
  const paulR = paulL.clone(); paulR.position.x = 0.42;
  root.add(paulL, paulR);

  const cape = new THREE.Mesh(
    new THREE.PlaneGeometry(0.7, 1.0),
    new THREE.MeshStandardMaterial({ color: fMeta.hex, side: THREE.DoubleSide, roughness: 0.6 })
  );
  cape.position.set(0, yOffset + 0.4, -0.32);
  cape.rotation.x = 0.15;
  root.add(cape);

  // 4. 얼굴 + 수염 + 안대
  const faceColor = heroData.redFace ? 0xdc2626 : (heroData.female ? 0xfce7d2 : 0xfde68a);
  const head = new THREE.Mesh(new THREE.SphereGeometry(0.32, 12, 12), new THREE.MeshStandardMaterial({ color: faceColor, roughness: 0.4 }));
  head.position.y = yOffset + 1.15;
  root.add(head);

  if (heroData.eyepatch) {
    const patch = new THREE.Mesh(new THREE.SphereGeometry(0.08, 6, 6), new THREE.MeshBasicMaterial({ color: 0x0f172a }));
    patch.position.set(-0.12, yOffset + 1.18, 0.28);
    root.add(patch);
  }

  if (heroData.beard === 'long') {
    const beard = new THREE.Mesh(new THREE.ConeGeometry(0.16, 0.65, 6), new THREE.MeshBasicMaterial({ color: 0x0f172a }));
    beard.rotation.x = Math.PI;
    beard.position.set(0, yOffset + 0.85, 0.26);
    root.add(beard);
  } else if (heroData.beard === 'wild') {
    const beard = new THREE.Mesh(new THREE.ConeGeometry(0.18, 0.35, 6), new THREE.MeshBasicMaterial({ color: 0x1e293b }));
    beard.rotation.x = Math.PI * 0.85;
    beard.position.set(0, yOffset + 0.95, 0.25);
    root.add(beard);
  } else if (heroData.beard === 'white') {
    const beard = new THREE.Mesh(new THREE.ConeGeometry(0.16, 0.55, 6), new THREE.MeshBasicMaterial({ color: 0xf8fafc }));
    beard.rotation.x = Math.PI;
    beard.position.set(0, yOffset + 0.88, 0.26);
    root.add(beard);
  } else if (heroData.beard === 'goatee') {
    const beard = new THREE.Mesh(new THREE.ConeGeometry(0.08, 0.25, 5), new THREE.MeshBasicMaterial({ color: 0x0f172a }));
    beard.rotation.x = Math.PI;
    beard.position.set(0, yOffset + 0.98, 0.27);
    root.add(beard);
  }

  // 5. 투구 / 관모 / 꿩깃 / 광륜
  if (heroData.plumes) {
    const pMat = new THREE.MeshBasicMaterial({ color: 0xef4444 });
    const p1 = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.01, 1.2), pMat);
    p1.position.set(-0.18, yOffset + 1.8, -0.15); p1.rotation.z = 0.3;
    const p2 = p1.clone(); p2.position.x = 0.18; p2.rotation.z = -0.3;
    root.add(p1, p2);
  }
  if (heroData.helm === 'crown') {
    const crown = new THREE.Mesh(new THREE.CylinderGeometry(0.25, 0.25, 0.2, 8), goldMat);
    crown.position.y = yOffset + 1.42;
    root.add(crown);
  } else if (heroData.helm === 'scholar') {
    const hat = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.25, 0.3, 8), new THREE.MeshStandardMaterial({ color: 0x1e293b }));
    hat.position.y = yOffset + 1.45;
    root.add(hat);
  }

  if (heroData.halo) {
    const halo = new THREE.Mesh(new THREE.TorusGeometry(0.65, 0.05, 8, 24), new THREE.MeshBasicMaterial({ color: 0xfbbf24 }));
    halo.position.set(0, yOffset + 1.15, -0.25);
    root.add(halo);
    root.userData.halo = halo;
  }

  // 6. 전용 무기 피벗
  const armPivot = new THREE.Group();
  armPivot.position.set(0.5, yOffset + 0.7, 0);
  const wMat = new THREE.MeshStandardMaterial({ color: 0xfbbf24, metalness: 0.9, roughness: 0.15, emissive: fMeta.hex, emissiveIntensity: 0.35 });
  const steelMat = new THREE.MeshStandardMaterial({ color: 0xe2e8f0, metalness: 0.85, roughness: 0.2 });

  if (heroData.weapon === 'fan') {
    const fan = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.45, 0.45), steelMat);
    fan.position.y = 0.6;
    armPivot.add(fan);
  } else if (heroData.weapon === 'bow') {
    const bow = new THREE.Mesh(new THREE.TorusGeometry(0.45, 0.04, 6, 12, Math.PI), goldMat);
    bow.rotation.z = -Math.PI / 2; bow.position.y = 0.5;
    armPivot.add(bow);
  } else if (heroData.weapon === 'axe' || heroData.weapon === 'mace') {
    const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 1.4, 6), wMat);
    pole.position.y = 0.3;
    const head = new THREE.Mesh(new THREE.DodecahedronGeometry(0.25, 0), steelMat);
    head.position.y = 1.0;
    armPivot.add(pole, head);
  } else {
    const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.045, 0.045, 1.7, 6), wMat);
    pole.position.y = 0.4;
    const blade = new THREE.Mesh(new THREE.ConeGeometry(0.2, 0.65, 4), wMat);
    blade.position.y = 1.35;
    armPivot.add(pole, blade);
  }

  root.add(armPivot);
  root.userData.armPivot = armPivot;

  // 7. 군기
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

function buildSiegeWeapons3D() {
  siegeLeftMesh = new THREE.Group();
  siegeLeftMesh.position.set(-8.2, 2.2, -1.2);
  const baseL = new THREE.Mesh(new THREE.BoxGeometry(1.8, 0.8, 1.8), new THREE.MeshStandardMaterial({ color: 0x334155 }));
  const bowArc = new THREE.Mesh(new THREE.TorusGeometry(0.9, 0.08, 6, 16, Math.PI), new THREE.MeshBasicMaterial({ color: 0x38bdf8 }));
  bowArc.rotation.x = Math.PI / 2;
  bowArc.position.y = 0.6;
  siegeLeftMesh.add(baseL, bowArc);
  siegeLeftMesh.visible = gameState.siegeLeftLv > 0;
  scene.add(siegeLeftMesh);

  siegeRightMesh = new THREE.Group();
  siegeRightMesh.position.set(8.2, 2.2, -1.2);
  const baseR = new THREE.Mesh(new THREE.BoxGeometry(1.8, 0.8, 1.8), new THREE.MeshStandardMaterial({ color: 0x475569 }));
  const arm = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.1, 2.2), new THREE.MeshBasicMaterial({ color: 0xf97316 }));
  arm.position.y = 1.0;
  arm.rotation.x = -0.5;
  siegeRightMesh.add(baseR, arm);
  siegeRightMesh.visible = gameState.siegeRightLv > 0;
  scene.add(siegeRightMesh);
}

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

  const pathGeo = new THREE.BufferGeometry().setFromPoints(ENEMY_PATH);
  const pathLine = new THREE.Line(pathGeo, new THREE.LineBasicMaterial({ color: 0xef4444 }));
  pathLine.position.y = 0.15;
  scene.add(pathLine);

  gridTiles3D = [];
  const startX = -5.6, startZ = 1.6, gapX = 2.8, gapZ = 2.8;
  for (let row = 0; row < 4; row++) {
    for (let col = 0; col < 5; col++) {
      const idx = row * 5 + col;
      const tInfo = TERRAIN_MAP[idx];
      const tileColor = tInfo ? tInfo.color : ((row + col) % 2 === 0 ? 0x0f172a : 0x1e293b);
      const tileMat = new THREE.MeshStandardMaterial({ color: tileColor, metalness: 0.55, roughness: 0.35 });
      const tile = new THREE.Mesh(new THREE.BoxGeometry(2.45, 0.25, 2.45), tileMat);
      tile.position.set(startX + col * gapX, 0, startZ + row * gapZ);
      tile.userData.gridIndex = idx;
      scene.add(tile);
      gridTiles3D.push(tile);
    }
  }

  buildSiegeWeapons3D();
}

function spawnHeroAtGrid(idx, heroData, stars = 1) {
  if (gameState.grid[idx] && gameState.grid[idx].mesh) {
    scene.remove(gameState.grid[idx].mesh);
  }
  const mesh = buildHeroCharacter3D(heroData);
  mesh.position.copy(gridTiles3D[idx].position);
  scene.add(mesh);

  gameState.grid[idx] = {
    data: heroData,
    mesh,
    cooldown: 0,
    xp: 0,
    stars
  };

  if (!gameState.unlockedIds.includes(heroData.id)) {
    gameState.unlockedIds.push(heroData.id);
    addFloatingText(`📜 명장 해방: ${heroData.name}!`, gridTiles3D[idx].position, '#fbbf24');
  }
  updateSynergyAndHUD();
  saveGameSafe();
}

// 해방 여부 확인 후 장수 반환 (미해방 시 해방된 장수 또는 삼고초려 안내)
function getUnlockedHeroOrFallback(faction, tier, preferredBranch) {
  // 1. 해당 세력 및 해당 등급 중 선호 병종(preferredBranch)이 일치하고 해방된 장수 탐색
  if (preferredBranch) {
    const branchMatches = HERO_DB.filter(h => h.faction === faction && h.tier === tier && h.branch === preferredBranch && gameState.unlockedIds.includes(h.id));
    if (branchMatches.length > 0) {
      return branchMatches[Math.floor(Math.random() * branchMatches.length)];
    }
  }

  // 2. 해당 세력 및 해당 등급 중 해방된 장수 탐색
  const factionMatches = HERO_DB.filter(h => h.faction === faction && h.tier === tier && gameState.unlockedIds.includes(h.id));
  if (factionMatches.length > 0) {
    return factionMatches[Math.floor(Math.random() * factionMatches.length)];
  }

  // 3. 같은 등급의 해방된 장수 전체 중 탐색
  const unlockedSameTier = HERO_DB.filter(h => h.tier === tier && gameState.unlockedIds.includes(h.id));
  if (unlockedSameTier.length > 0) {
    return unlockedSameTier[Math.floor(Math.random() * unlockedSameTier.length)];
  }

  // 4. 해당 세력 해당 등급 미해방 장수 하나를 전장 긴급 해방!
  const factionTierPool = HERO_DB.filter(h => h.faction === faction && h.tier === tier);
  if (factionTierPool.length > 0) {
    const target = factionTierPool[0];
    gameState.unlockedIds.push(target.id);
    triggerHanjaStamp(target.stamp, `전장 각성: ${target.name} 해방!`);
    showStoryToast(`⚡ 전장 긴급 해방!`, `[${target.name}] 봉인 해제!`, target.story);
    return target;
  }

  // 5. 만약 위 조건도 안 맞으면 해당 등급 첫 장수 해방
  const sameTierPool = HERO_DB.filter(h => h.tier === tier);
  if (sameTierPool.length > 0) {
    const target = sameTierPool[0];
    if (!gameState.unlockedIds.includes(target.id)) gameState.unlockedIds.push(target.id);
    return target;
  }

  return HERO_DB[0];
}

function recruitHero() {
  sound.init();
  if (gameState.gold < gameState.recruitCost) return;
  const emptyIndices = [];
  gameState.grid.forEach((cell, i) => { if (!cell) emptyIndices.push(i); });
  if (emptyIndices.length === 0) {
    addFloatingText('진영 포화! [📐 합체]를 누르거나 하단으로 해산하세요', new THREE.Vector3(0, 2, 6), '#f87171');
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

  const heroData = getUnlockedHeroOrFallback(f, tier);
  spawnHeroAtGrid(targetIdx, heroData);
  sound.playWarDrum();

  if (tier >= 2) {
    addFloatingText(`⚡ ${heroData.name} 초고속 발탁!`, gridTiles3D[targetIdx].position, '#38bdf8');
  }
}

function tryMergeOrMove(fromIdx, toIdx) {
  if (fromIdx === toIdx || fromIdx < 0 || toIdx < 0) return;
  const src = gameState.grid[fromIdx];
  const dst = gameState.grid[toIdx];
  if (!src) return;

  if (!dst) {
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
    const nextHero = getUnlockedHeroOrFallback(nextFaction, nextTier, src.data.branch);

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
    src.mesh.position.copy(gridTiles3D[toIdx].position);
    dst.mesh.position.copy(gridTiles3D[fromIdx].position);
    gameState.grid[toIdx] = src;
    gameState.grid[fromIdx] = dst;
    updateSynergyAndHUD();
    saveGameSafe();
  }
}

function autoMergeGrid() {
  sound.init();
  for (let i = 0; i < 20; i++) {
    const a = gameState.grid[i];
    if (!a || a.data.tier >= 7) continue;
    for (let j = i + 1; j < 20; j++) {
      const b = gameState.grid[j];
      if (b && b.data.tier === a.data.tier && b.data.faction === a.data.faction) {
        tryMergeOrMove(j, i);
        return;
      }
    }
    for (let j = i + 1; j < 20; j++) {
      const b = gameState.grid[j];
      if (b && b.data.tier === a.data.tier) {
        tryMergeOrMove(j, i);
        return;
      }
    }
  }
  addFloatingText('합성 가능한 동일 등급 장수가 없습니다', new THREE.Vector3(0, 2, 5), '#94a3b8');
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

function spawnEnemy(isBoss = false) {
  const hpBase = (45 + Math.pow(gameState.wave, 1.55) * 35) * (isBoss ? 7.0 : 1);
  const group = new THREE.Group();
  const color = isBoss ? 0xdc2626 : 0xa855f7;
  const scale = isBoss ? 1.75 : 1.0;

  const body = new THREE.Mesh(
    new THREE.CylinderGeometry(0.42 * scale, 0.5 * scale, 1.1 * scale, 8),
    new THREE.MeshStandardMaterial({ color, roughness: 0.4 })
  );
  body.position.y = 0.6 * scale;
  group.add(body);

  group.position.copy(ENEMY_PATH[0]);
  scene.add(group);

  const enemyObj = {
    mesh: group,
    hp: hpBase,
    maxHp: hpBase,
    speed: isBoss ? 2.0 : 3.2 + Math.min(2.0, gameState.wave * 0.08),
    wpIndex: 1,
    isBoss,
    burnTimer: 0,
    burnDps: 0
  };
  gameState.enemies.push(enemyObj);

  if (isBoss) {
    triggerHanjaStamp('敵將來襲', `제${gameState.wave}장 보스 출현! 일기토 개시!`);
    gameState.activeBoss = enemyObj;
    gameState.duelTimer = 5.0;
    gameState.duelHits = 0;
    document.getElementById('duel-hits').textContent = '0';
    document.getElementById('duel-overlay').classList.remove('hidden');
  }
}

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
  addFloatingText('🐂 황금 목우유마 출현! (터치 시 군량미+명성)', new THREE.Vector3(0, 2.5, -1), '#fbbf24');
}

function addFloatingText(text, worldPos, color = '#ffffff') {
  gameState.floatingTexts.push({ text, pos: worldPos.clone(), color, life: 1.0 });
}

function getActiveSynergies() {
  const counts = { shu: 0, wei: 0, wu: 0, qun: 0 };
  const activeIds = new Set();
  gameState.grid.forEach(cell => {
    if (cell) {
      counts[cell.data.faction]++;
      activeIds.add(cell.data.id);
    }
  });

  let bondAtkBonus = 0;
  const activeBonds = [];
  BOND_LIST.forEach(b => {
    let match = 0;
    b.ids.forEach(id => { if (activeIds.has(id)) match++; });
    if (match >= b.min) {
      bondAtkBonus += b.atkBonus;
      activeBonds.push(b.name);
    }
  });

  const lordSpd = gameState.selectedLord === 'shu' ? 1.15 : 1.0;
  const lordAtk = gameState.selectedLord === 'wei' ? 1.15 : 1.0;
  const lordCrit = gameState.selectedLord === 'qun' ? 0.12 : 0;

  return {
    counts,
    shuMult: (counts.shu >= 3 ? 1.3 : 1.0) * lordSpd,
    weiMult: (counts.wei >= 3 ? 1.25 : 1.0) * lordAtk,
    wuBurn: counts.wu >= 3 || gameState.selectedLord === 'wu',
    qunCrit: (counts.qun >= 3 ? 0.22 : 0) + lordCrit,
    bondAtkBonus,
    activeBonds
  };
}

function updateSynergyAndHUD() {
  const syn = getActiveSynergies();
  const codexBonus = gameState.unlockedIds.length * 2 + Math.round(syn.bondAtkBonus * 100);
  const weather = WEATHER_LIST[gameState.weatherIdx];
  const chapTitle = CHAPTER_TITLES[gameState.wave] || `제${gameState.wave}장 중원 진격전`;

  document.getElementById('weather-badge').textContent = weather.name;
  document.getElementById('gold-val').textContent = Math.floor(gameState.gold);
  document.getElementById('hp-val').textContent = `${Math.max(0, Math.floor(gameState.hp))}/${gameState.maxHp}`;
  document.getElementById('fame-val').textContent = gameState.fame;
  document.getElementById('bonus-val').textContent = `+${codexBonus}%`;
  document.getElementById('wave-title').textContent = chapTitle;
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
  setBadge('syn-shu', '🟢 촉', syn.counts.shu);
  setBadge('syn-wei', '🔵 위', syn.counts.wei);
  setBadge('syn-wu',  '🔴 오', syn.counts.wu);
  setBadge('syn-qun', '🟣 군웅', syn.counts.qun);

  const bondBar = document.getElementById('bond-bar');
  bondBar.innerHTML = syn.activeBonds.map(n => `<span class="bond-chip">${n}</span>`).join('');

  document.getElementById('siege-l-lv').textContent = gameState.siegeLeftLv > 0 ? `Lv.${gameState.siegeLeftLv} (${80 + gameState.siegeLeftLv * 60}🌾)` : '건설(80🌾)';
  document.getElementById('siege-r-lv').textContent = gameState.siegeRightLv > 0 ? `Lv.${gameState.siegeRightLv} (${100 + gameState.siegeRightLv * 75}🌾)` : '건설(100🌾)';
}

function updateGame(dt) {
  // 로비에 있을 때는 배경 3D 마법진 회전 연출만 수행
  if (gameState.inLobby || gameState.isGameOver) {
    gameState.grid.forEach(cell => {
      if (cell && cell.mesh.userData.auraRing) cell.mesh.userData.auraRing.rotation.z += dt * 1.5;
    });
    return;
  }

  const effDt = dt * gameState.gameSpeed;
  sound.updateBgm(effDt);
  const weather = WEATHER_LIST[gameState.weatherIdx];

  if (gameState.duelTimer > 0) {
    gameState.duelTimer = Math.max(0, gameState.duelTimer - dt);
    document.getElementById('duel-timer').textContent = gameState.duelTimer.toFixed(1);
    if (gameState.duelTimer <= 0 || !gameState.activeBoss || gameState.activeBoss.hp <= 0) {
      gameState.duelTimer = 0;
      document.getElementById('duel-overlay').classList.add('hidden');
      if (gameState.duelHits >= 8) {
        const reward = 45 + gameState.duelHits * 3;
        gameState.gold += reward;
        gameState.fame += 15;
        triggerHanjaStamp('一騎討勝', `일기토 ${gameState.duelHits}연타 승리! +${reward}🌾 +15🎖️`);
        updateSynergyAndHUD();
      }
    }
  }

  if (gameState.grid[17]) {
    gameState.supplyTileTimer += effDt;
    if (gameState.supplyTileTimer >= 5.0) {
      gameState.supplyTileTimer = 0;
      gameState.gold += 12;
      addFloatingText('+12🌾 둔전', gridTiles3D[17].position, '#fde047');
      updateSynergyAndHUD();
    }
  }

  if (gameState.skillCd > 0) {
    gameState.skillCd = Math.max(0, gameState.skillCd - effDt);
    const btn = document.getElementById('skill-btn');
    const cdEl = document.getElementById('skill-cd');
    btn.disabled = gameState.skillCd > 0;
    cdEl.textContent = gameState.skillCd > 0 ? `${gameState.skillCd.toFixed(1)}s` : '즉시 발동';
  }

  const targetCam = CAM_PRESETS[gameState.camMode];
  camera.position.lerp(targetCam.pos, 0.08);
  if (gameState.screenShake > 0) {
    gameState.screenShake = Math.max(0, gameState.screenShake - dt * 1.8);
    camera.position.x += (Math.random() - 0.5) * gameState.screenShake * 1.4;
  }
  camera.lookAt(targetCam.look);

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

  if (gameState.waveRemaining > 0) {
    gameState.spawnTimer -= effDt;
    if (gameState.spawnTimer <= 0) {
      gameState.spawnTimer = 1.15;
      const isBoss = (gameState.waveRemaining === 1 && gameState.wave % 5 === 0);
      spawnEnemy(isBoss);
      gameState.waveRemaining--;
    }
  } else if (gameState.enemies.length === 0) {
    gameState.wave++;
    gameState.bestWave = Math.max(gameState.bestWave, gameState.wave);
    gameState.weatherIdx = (gameState.wave - 1) % WEATHER_LIST.length;
    gameState.waveRemaining = 8 + gameState.wave * 3;
    gameState.gold += 35 + gameState.wave * 8;
    gameState.fame += 10;
    checkStageLiberation(gameState.wave);
    updateSynergyAndHUD();
    saveGameSafe();
    if (gameState.wave % 2 === 0) openStrategyModal();
  }

  const syn = getActiveSynergies();
  const codexMult = 1 + gameState.unlockedIds.length * 0.02 + syn.bondAtkBonus;
  const upgradeMult = 1 + (gameState.upgradeLvl - 1) * 0.18;

  gameState.grid.forEach((cell, idx) => {
    if (!cell) return;
    if (cell.mesh.userData.auraRing) cell.mesh.userData.auraRing.rotation.z += effDt * 1.8;
    if (cell.mesh.userData.halo) cell.mesh.userData.halo.rotation.z -= effDt * 2.2;
    if (idx === gameState.draggedIndex) return;

    const tInfo = TERRAIN_MAP[idx];
    const terrainSpd = (tInfo && tInfo.type === 'wind') ? 1.35 : 1.0;
    const terrainRange = (tInfo && tInfo.type === 'high') ? 2.5 : 0;
    const terrainAtk = (tInfo && tInfo.type === 'high') ? 1.2 : 1.0;
    const terrainCrit = (tInfo && tInfo.type === 'taichi') ? 0.3 : 0;

    cell.cooldown -= effDt * cell.data.spd * gameState.buffSpd * syn.shuMult * terrainSpd;
    if (cell.cooldown <= 0 && gameState.enemies.length > 0) {
      const range = (cell.data.range + gameState.buffRange + terrainRange + (weather.rangeMod || 0)) * syn.weiMult;
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

        cell.xp++;
        if (cell.stars < 3 && cell.xp >= cell.stars * 12) {
          cell.stars++;
          cell.mesh.scale.setScalar(1 + (cell.stars - 1) * 0.12);
          addFloatingText(`★${cell.stars} 무쌍 각성!`, cell.mesh.position, '#fde047');
        }
        const starMult = 1 + (cell.stars - 1) * 0.28;

        const isCrit = Math.random() < (gameState.buffCrit + syn.qunCrit + terrainCrit + (weather.critMod || 0));
        const wuMod = cell.data.faction === 'wu' ? weather.fireMod : 1.0;
        const dmg = cell.data.atk * starMult * terrainAtk * wuMod * gameState.buffAtk * syn.weiMult * codexMult * upgradeMult * (isCrit ? 2.2 : 1.0);
        const applyBurn = syn.wuBurn || (tInfo && tInfo.type === 'fire');
        spawnProjectile(cell.mesh.position, target, dmg, FACTION_META[cell.data.faction].hex, isCrit, applyBurn);
      }
    }
  });

  if (gameState.siegeLeftLv > 0 && gameState.enemies.length > 0) {
    gameState.siegeLeftTimer += effDt;
    if (gameState.siegeLeftTimer >= 1.5) {
      gameState.siegeLeftTimer = 0;
      gameState.enemies.slice(0, 3).forEach(t => {
        spawnProjectile(siegeLeftMesh.position, t, 85 * gameState.siegeLeftLv * upgradeMult, 0x38bdf8, false, false);
      });
    }
  }
  if (gameState.siegeRightLv > 0 && gameState.enemies.length > 0) {
    gameState.siegeRightTimer += effDt;
    if (gameState.siegeRightTimer >= 3.8) {
      gameState.siegeRightTimer = 0;
      sound.playWarDrum();
      spawnProjectile(siegeRightMesh.position, gameState.enemies[0], 240 * gameState.siegeRightLv * upgradeMult, 0xf97316, true, true);
    }
  }

  for (let i = gameState.projectiles.length - 1; i >= 0; i--) {
    const p = gameState.projectiles[i];
    if (!gameState.enemies.includes(p.target)) {
      scene.remove(p.mesh);
      gameState.projectiles.splice(i, 1);
      continue;
    }
    const dir = new THREE.Vector3().subVectors(p.target.mesh.position, p.mesh.position);
    if (dir.length() < 0.6) {
      p.target.hp -= p.dmg;
      if (p.burn) {
        p.target.burnTimer = 3.0;
        p.target.burnDps = p.dmg * 0.25;
      }
      addFloatingText(`${p.isCrit ? '💥' : ''}-${Math.floor(p.dmg)}`, p.target.mesh.position, p.isCrit ? '#fde047' : '#f8fafc');
      scene.remove(p.mesh);
      gameState.projectiles.splice(i, 1);
    } else {
      dir.normalize();
      p.mesh.position.addScaledVector(dir, effDt * 24);
    }
  }

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
      gameState.gold += en.isBoss ? 90 : 8 + Math.floor(gameState.wave * 1.5);
      if (en.isBoss) gameState.fame += 20;
      else if (gameState.kills % 5 === 0) gameState.fame += 2;
      updateSynergyAndHUD();
      continue;
    }

    const wp = ENEMY_PATH[en.wpIndex];
    const dir = new THREE.Vector3().subVectors(wp, en.mesh.position);
    if (dir.length() < 0.35) {
      en.wpIndex++;
      if (en.wpIndex >= ENEMY_PATH.length) {
        gameState.hp -= en.isBoss ? 30 : 10;
        scene.remove(en.mesh);
        gameState.enemies.splice(i, 1);
        sound.playWarDrum();
        updateSynergyAndHUD();
        if (gameState.hp <= 0) {
          gameState.isGameOver = true;
          saveGameSafe();
          document.getElementById('final-wave').textContent = `제${gameState.wave}장`;
          document.getElementById('final-kills').textContent = gameState.kills;
          document.getElementById('gameover-modal').classList.remove('hidden');
        }
      }
    } else {
      dir.normalize();
      const slowMod = weather.slowEnemy || 1.0;
      en.mesh.position.addScaledVector(dir, effDt * en.speed * slowMod);
    }
  }

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

  gridTiles3D.forEach((tile, idx) => {
    const tInfo = TERRAIN_MAP[idx];
    const cell = gameState.grid[idx];
    if (!tInfo && !cell) return;
    const p = tile.position.clone().project(camera);
    const x = (p.x * 0.5 + 0.5) * canvas.width;
    const y = (-p.y * 0.5 + 0.5) * canvas.height;
    ctx.textAlign = 'center';
    if (tInfo && !cell) {
      ctx.font = 'bold 11px sans-serif';
      ctx.fillStyle = 'rgba(255,255,255,0.65)';
      ctx.fillText(tInfo.name.split(' ')[0], x, y + 4);
    }
    if (cell) {
      ctx.font = 'bold 10px sans-serif';
      ctx.fillStyle = '#fde047';
      ctx.fillText('★'.repeat(cell.stars), x, y + 14);
    }
  });

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

  if (gameState.supplyCart) {
    const cartHits = raycaster.intersectObjects(gameState.supplyCart.mesh.children, true);
    if (cartHits.length > 0) {
      const bonus = 60 + gameState.wave * 15;
      gameState.gold += bonus;
      gameState.fame += 8;
      triggerHanjaStamp('木牛流馬', `보급 수레 확보! +${bonus}🌾 +8🎖️`);
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

// 명성(🎖️)으로 중요 장수 즉시 삼고초려 해방
window.liberateHeroByFame = function(heroId) {
  const h = HERO_DB.find(x => x.id === heroId);
  if (!h || gameState.unlockedIds.includes(heroId)) return;
  if (gameState.fame < h.fameCost) {
    alert(`무공 명성이 부족합니다! (현재 ${gameState.fame}🎖️ / 필요 ${h.fameCost}🎖️)\n적과 보스를 처치하거나 스테이지를 등반하면 자동 해방됩니다.`);
    return;
  }
  gameState.fame -= h.fameCost;
  gameState.unlockedIds.push(heroId);
  triggerHanjaStamp(h.stamp, `삼고초려 성공: ${h.name} 합류!`);
  showStoryToast('🎖️ 삼고초려 명장 영입!', `✨ [${h.name}] 해방 완료!`, h.story);
  saveGameSafe();
  openCodexModal();
  refreshMainMenuUI();
  updateSynergyAndHUD();
};

function startNewCampaign() {
  sound.init();
  sound.playWarDrum();
  gameState.enemies.forEach(e => scene.remove(e.mesh));
  gameState.projectiles.forEach(p => scene.remove(p.mesh));
  gameState.grid.forEach(c => { if (c && c.mesh) scene.remove(c.mesh); });
  gameState.enemies = [];
  gameState.projectiles = [];
  gameState.grid = new Array(20).fill(null);
  gameState.gold = 120;
  gameState.hp = 100;
  gameState.wave = 1;
  gameState.kills = 0;
  gameState.recruitCost = 20;
  gameState.upgradeLvl = 1;
  gameState.upgradeCost = 35;
  gameState.waveRemaining = 10;
  gameState.isGameOver = false;
  gameState.inLobby = false;

  const starterHero = HERO_DB.find(h => h.faction === gameState.selectedLord && h.tier === 1) || HERO_DB[0];
  spawnHeroAtGrid(7, starterHero);
  spawnHeroAtGrid(12, starterHero);

  document.getElementById('main-menu-overlay').classList.add('hidden');
  document.getElementById('gameover-modal').classList.add('hidden');
  updateSynergyAndHUD();
  saveGameSafe();
}

function bindEvents() {
  const canvas = document.getElementById('hudCanvas');

  // 로비 이벤트
  document.querySelectorAll('.lord-card').forEach(card => {
    card.addEventListener('click', () => {
      sound.init();
      sound.playWarDrum();
      gameState.selectedLord = card.dataset.lord;
      refreshMainMenuUI();
      saveGameSafe();
    });
  });

  document.getElementById('continue-game-btn').addEventListener('click', () => {
    sound.init();
    sound.playGong();
    gameState.inLobby = false;
    document.getElementById('main-menu-overlay').classList.add('hidden');
    updateSynergyAndHUD();
  });

  document.getElementById('new-game-btn').addEventListener('click', startNewCampaign);
  document.getElementById('open-story-btn').addEventListener('click', openCodexModal);

  document.getElementById('lobby-return-btn').addEventListener('click', () => {
    saveGameSafe();
    refreshMainMenuUI();
    gameState.inLobby = true;
    document.getElementById('main-menu-overlay').classList.remove('hidden');
  });

  const onDown = (e) => {
    if (gameState.inLobby) return;
    sound.init();
    const idx = getTileIndexFromEvent(e);
    if (idx >= 0 && gameState.grid[idx]) {
      gameState.draggedIndex = idx;
      gameState.selectedIndex = idx;
      const cell = gameState.grid[idx];
      const d = cell.data;
      const tInfo = TERRAIN_MAP[idx];
      document.getElementById('unit-inspector').classList.remove('hidden');
      document.getElementById('insp-name').textContent = `${d.name} [Tier ${d.tier}] ${'★'.repeat(cell.stars)}`;
      document.getElementById('insp-desc').textContent = `${FACTION_META[d.faction].name} · ${tInfo ? tInfo.name : '일반 전술 타일'}`;
      document.getElementById('insp-atk').textContent = Math.floor(d.atk * gameState.buffAtk * (1 + (cell.stars - 1) * 0.28));
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
  document.getElementById('automerge-btn').addEventListener('click', autoMergeGrid);

  document.getElementById('duel-hit-btn').addEventListener('click', () => {
    if (!gameState.activeBoss || gameState.duelTimer <= 0) return;
    gameState.duelHits++;
    document.getElementById('duel-hits').textContent = gameState.duelHits;
    const hitDmg = 65 * gameState.wave * gameState.upgradeLvl;
    gameState.activeBoss.hp -= hitDmg;
    sound.playBladeSlash();
    gameState.screenShake = 0.25;
    addFloatingText(`⚔️ 일기토 -${hitDmg}!`, gameState.activeBoss.mesh.position, '#fef08a');
  });

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
    const weather = WEATHER_LIST[gameState.weatherIdx];
    const skillDmg = Math.floor(150 * gameState.wave * weather.fireMod);
    gameState.enemies.forEach(en => {
      en.hp -= skillDmg;
      en.burnTimer = 4.0;
      en.burnDps = skillDmg * 0.22;
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
    document.getElementById('gameover-modal').classList.add('hidden');
    gameState.hp = 100;
    gameState.isGameOver = false;
    gameState.inLobby = true;
    refreshMainMenuUI();
    document.getElementById('main-menu-overlay').classList.remove('hidden');
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
  document.getElementById('modal-fame-val').textContent = gameState.fame;
  const grid = document.getElementById('codex-grid');
  grid.innerHTML = '';
  HERO_DB.forEach(h => {
    const unlocked = gameState.unlockedIds.includes(h.id);
    const d = document.createElement('div');
    d.className = `codex-item ${unlocked ? 'unlocked' : ''}`;
    d.innerHTML = `
      <div style="display:flex;align-items:center;gap:6px;">
        <span style="font-size:20px;font-weight:900;color:${FACTION_META[h.faction].color};font-family:serif;">[${h.hanja}]</span>
        <div>
          <div style="font-weight:800;color:#fff;">T${h.tier} ${h.name}</div>
          <div style="font-size:9px;color:#fbbf24;">낙관: ${h.stamp}</div>
        </div>
      </div>
      <div style="font-size:10px;color:#cbd5e1;line-height:1.35;">${h.story}</div>
      <div>
        ${unlocked
          ? `<span style="color:#34d399;font-weight:800;font-size:10px;">✅ 해방 완료 (+2% 화력)</span>`
          : `<div style="font-size:9px;color:#f87171;">🔒 제${h.unlockWave}장 돌파 시 자동 해방</div>
             <button class="liberate-btn" onclick="liberateHeroByFame('${h.id}')">🎖️ 삼고초려 즉시 해방 (${h.fameCost}🎖️)</button>`
        }
      </div>`;
    grid.appendChild(d);
  });
  document.getElementById('codex-modal').classList.remove('hidden');
}

window.addEventListener('DOMContentLoaded', () => {
  initThreeScene();
  bindEvents();

  const savedGridIds = loadGameSafe();
  if (Array.isArray(savedGridIds) && savedGridIds.some(x => x !== null)) {
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
  refreshMainMenuUI();
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