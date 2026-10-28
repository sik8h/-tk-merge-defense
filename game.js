const FACTION_META = {
  shu: { name: '촉', hanja: '蜀', color: '#10B981', hex: 0x10B981 },
  wei: { name: '위', hanja: '魏', color: '#3B82F6', hex: 0x3B82F6 },
  wu:  { name: '오', hanja: '吳', color: '#F97316', hex: 0xF97316 },
  qun: { name: '군웅', hanja: '群', color: '#EF4444', hex: 0xEF4444 }
};

// 28인 명장 + 스테이지 등반 해방 스토리(unlockWave, fameCost, story) 탑재
const HERO_DB = [

  { id: 'shu_1', tier: 1, faction: 'shu', name: '백이병', hanja: '白', weapon: 'spear', atk: 24, spd: 1.0, range: 8.5, stamp: '百毦精兵', unlockWave: 1, fameCost: 0, story: '유비의 곁을 지키는 기본 정예병' },
  { id: 'wei_1', tier: 1, faction: 'wei', name: '청주병', hanja: '青', weapon: 'spear', atk: 26, spd: 0.95, range: 8.5, stamp: '青州強兵', unlockWave: 1, fameCost: 0, story: '조조가 거느린 청주 정예병' },
  { id: 'wu_1',  tier: 1, faction: 'wu',  name: '강동수군', hanja: '水', weapon: 'bow',   atk: 22, spd: 1.1, range: 9.5, stamp: '江東水軍', unlockWave: 1, fameCost: 0, story: '장강을 수호하는 수군 사수' },
  { id: 'qun_1', tier: 1, faction: 'qun', name: '황건병', hanja: '黃', weapon: 'mace',  atk: 28, spd: 0.9, range: 8.0, stamp: '蒼天已死', unlockWave: 1, fameCost: 0, story: '난세의 시작을 알린 선봉병' },
  { id: 'shu_2', tier: 2, faction: 'shu', name: '관평', hanja: '平', weapon: 'glaive', atk: 55, spd: 1.05, range: 9.0, stamp: '忠義少將', unlockWave: 1, fameCost: 0, story: '관우를 보좌하는 충의의 소장' },
  { id: 'wei_2', tier: 2, faction: 'wei', name: '악진', hanja: '樂', weapon: 'sword',  atk: 58, spd: 1.0, range: 9.0, stamp: '先登陷陣', unlockWave: 1, fameCost: 0, story: '성벽에 가장 먼저 오르는 선등장' },
  { id: 'wu_2',  tier: 2, faction: 'wu',  name: '주태', hanja: '泰', weapon: 'sword',  atk: 54, spd: 1.15, range: 8.5, stamp: '全身刀痕', unlockWave: 1, fameCost: 0, story: '손권을 구한 강철의 호위장' },
  { id: 'qun_2', tier: 2, faction: 'qun', name: '화웅', hanja: '華', weapon: 'axe',    atk: 65, spd: 0.9, range: 8.5, stamp: '汜水猛將', unlockWave: 1, fameCost: 0, story: '사수관의 거대 도끼 맹장' },
  { id: 'shu_3', tier: 3, faction: 'shu', name: '황충', hanja: '黃', weapon: 'bow',    atk: 120, spd: 1.2, range: 11.5, stamp: '百步穿楊', unlockWave: 1, fameCost: 0, story: '정군산을 호령한 백보천양 신궁' },
  { id: 'wei_3', tier: 3, faction: 'wei', name: '서황', hanja: '徐', weapon: 'axe',    atk: 135, spd: 1.0, range: 9.5, stamp: '周亞夫風', unlockWave: 1, fameCost: 0, story: '대부를 휘두르는 위나라 오자양장' },
  { id: 'wu_3',  tier: 3, faction: 'wu',  name: '감녕', hanja: '甘', weapon: 'mace',   atk: 125, spd: 1.25, range: 9.5, stamp: '錦帆遊俠', unlockWave: 1, fameCost: 0, story: '방울 소리와 함께 적진을 기습하는 금범적' },
  { id: 'qun_3', tier: 3, faction: 'qun', name: '초선', hanja: '貂', weapon: 'fan',    atk: 115, spd: 1.35, range: 10.5, stamp: '閉月連環', unlockWave: 1, fameCost: 0, story: '달을 가리는 미모로 난세를 흔든 무희', female: true },
  { id: 'wu_4',  tier: 4, faction: 'wu',  name: '손상향', hanja: '香', weapon: 'bow',   atk: 250, spd: 1.4, range: 11.5, stamp: '弓腰姬君', unlockWave: 2, fameCost: 30, story: '[제2장 강동 결집] 무장을 거느린 궁요희 손상향이 전장에 합류했습니다!', female: true },
  { id: 'qun_4', tier: 4, faction: 'qun', name: '맹획', hanja: '孟', weapon: 'mace',   atk: 310, spd: 1.0, range: 9.5, stamp: '南蠻獸王', unlockWave: 2, fameCost: 30, story: '[제2장 남만 귀순] 칠종칠금 끝에 남만왕 맹획이 코끼리 군단을 이끌고 합류했습니다!', mount: 'elephant' },
  { id: 'shu_4', tier: 4, faction: 'shu', name: '조운', hanja: '趙', weapon: 'spear',  atk: 260, spd: 1.35, range: 10.5, stamp: '一身是膽', unlockWave: 3, fameCost: 40, story: '[제3장 장판파 단기필마] 상산 조자룡이 백마를 타고 적진을 뚫어 아군에 합류했습니다!', mount: 'white' },
  { id: 'wei_4', tier: 4, faction: 'wei', name: '하후돈', hanja: '夏', weapon: 'sword', atk: 285, spd: 1.15, range: 10.0, stamp: '拔矢啖睛', unlockWave: 3, fameCost: 40, story: '[제3장 서주 출격] 화살 박힌 눈을 삼킨 맹장 하후돈이 봉인에서 깨어났습니다!' },
  { id: 'shu_5', tier: 5, faction: 'shu', name: '장비', hanja: '張', weapon: 'snake',  atk: 560, spd: 1.3, range: 10.5, stamp: '萬夫不當', unlockWave: 5, fameCost: 70, story: '[제5장 장판교의 포효] 장팔사모를 쥔 익덕 장비의 우레 같은 고함이 적군을 물리칩니다!' },
  { id: 'wei_5', tier: 5, faction: 'wei', name: '장료', hanja: '遼', weapon: 'glaive', atk: 590, spd: 1.25, range: 11.0, stamp: '威震逍遙', unlockWave: 5, fameCost: 70, story: '[제5장 합비 소요진] 800기로 대군을 격파한 오자양장 필두 장료가 해방되었습니다!' },
  { id: 'wu_5',  tier: 5, faction: 'wu',  name: '육손', hanja: '陸', weapon: 'dual',   atk: 540, spd: 1.45, range: 11.0, stamp: '火燒連營', unlockWave: 7, fameCost: 80, story: '[제7장 이릉 화계] 칠백 리 진영을 불태운 대도독 육손이 전군 지휘에 합류합니다!' },
  { id: 'qun_5', tier: 5, faction: 'qun', name: '장각', hanja: '角', weapon: 'staff',  atk: 620, spd: 1.15, range: 12.0, stamp: '黃天當立', unlockWave: 7, fameCost: 80, story: '[제7장 태평요술] 천공장군 장각의 황천 벼락이 아군의 편에서 작렬합니다!' },
  { id: 'shu_6', tier: 6, faction: 'shu', name: '관우', hanja: '關', weapon: 'glaive', atk: 1250, spd: 1.35, range: 11.5, stamp: '義薄雲天', unlockWave: 10, fameCost: 130, story: '[제10장 오관육참 돌파] 다섯 관문을 뚫고 적토마에 오른 무성 관우가 주군 곁으로 귀환했습니다!', redFace: true, beard: 'long', mount: 'red' },
  { id: 'wei_6', tier: 6, faction: 'wei', name: '사마의', hanja: '司', weapon: 'fan',  atk: 1320, spd: 1.3, range: 12.5, stamp: '塚虎奇謀', unlockWave: 10, fameCost: 130, story: '[제10장 총호의 출사] 깊은 침묵을 깨고 중달 사마의가 암흑 귀모를 펼칩니다!' },
  { id: 'wu_6',  tier: 6, faction: 'wu',  name: '주유', hanja: '周', weapon: 'fan',    atk: 1200, spd: 1.5, range: 12.0, stamp: '赤壁業火', unlockWave: 12, fameCost: 150, story: '[제12장 적벽대전] 동남풍과 함께 미주랑 주유의 적벽 업화가 강산을 불태웁니다!' },
  { id: 'qun_6', tier: 6, faction: 'qun', name: '동탁', hanja: '董', weapon: 'mace',   atk: 1400, spd: 1.15, range: 10.5, stamp: '暴虐魔王', unlockWave: 12, fameCost: 150, story: '[제12장 낙양 제압] 서량의 패도 폭군 동탁이 압도적 무력으로 전장에 복종합니다!', mount: 'black' },
  { id: 'shu_7', tier: 7, faction: 'shu', name: '제갈량', hanja: '諸', weapon: 'fan',  atk: 2900, spd: 1.6, range: 13.5, stamp: '臥龍出世', unlockWave: 15, fameCost: 220, story: '[제15장 삼고초려 완성] 융중의 초당에서 잠자던 와룡 제갈량이 마침내 천하를 위해 출사했습니다!', halo: true },
  { id: 'wei_7', tier: 7, faction: 'wei', name: '무제 조조', hanja: '曹', weapon: 'sword', atk: 3100, spd: 1.5, range: 13.0, stamp: '唯才是擧', unlockWave: 16, fameCost: 220, story: '[제16장 패왕 등극] 천하의 인재를 모두 거느린 난세의 간웅 무제 조조가 강림합니다!', mount: 'black', halo: true },
  { id: 'wu_7',  tier: 7, faction: 'wu',  name: '대제 손권', hanja: '孫', weapon: 'sword', atk: 2850, spd: 1.7, range: 13.0, stamp: '江東猛虎', unlockWave: 18, fameCost: 220, story: '[제18장 강동 제왕] 벽안자염의 대제 손권이 오나라 황룡의 기운을 해방합니다!', halo: true },
  { id: 'qun_7', tier: 7, faction: 'qun', name: '무신 여포', hanja: '呂', weapon: 'halberd', atk: 3600, spd: 1.65, range: 13.0, stamp: '天下無雙', unlockWave: 20, fameCost: 260, story: '[제20장 인중여포 마중적토] 호로관의 전설, 천하무쌍 무신 여포가 아군 최강의 신화로 해방되었습니다!', mount: 'red', plumes: true, halo: true }
,
  { id: 'shu_new_1', tier: 1, faction: 'shu', name: '간옹', hanja: '간', weapon: 'halberd', atk: 27, spd: 1.0, range: 9.7, stamp: '名將出擊', unlockWave: 1, fameCost: 0, story: '도감에 등록된 명장 간옹이(가) 합류했습니다.' },
  { id: 'shu_new_2', tier: 1, faction: 'shu', name: '손건', hanja: '손', weapon: 'mace', atk: 25, spd: 1.0, range: 9.7, stamp: '名將出擊', unlockWave: 1, fameCost: 0, story: '도감에 등록된 명장 손건이(가) 합류했습니다.' },
  { id: 'shu_new_3', tier: 1, faction: 'shu', name: '미축', hanja: '미', weapon: 'spear', atk: 27, spd: 1.0, range: 9.7, stamp: '名將出擊', unlockWave: 1, fameCost: 0, story: '도감에 등록된 명장 미축이(가) 합류했습니다.', beard: 'long' },
  { id: 'shu_new_4', tier: 1, faction: 'shu', name: '미방', hanja: '미', weapon: 'fan', atk: 25, spd: 1.0, range: 9.7, stamp: '名將出擊', unlockWave: 1, fameCost: 0, story: '도감에 등록된 명장 미방이(가) 합류했습니다.', beard: 'long' },
  { id: 'shu_new_5', tier: 1, faction: 'shu', name: '번궁', hanja: '번', weapon: 'fan', atk: 27, spd: 1.0, range: 9.7, stamp: '名將出擊', unlockWave: 1, fameCost: 0, story: '도감에 등록된 명장 번궁이(가) 합류했습니다.' },
  { id: 'shu_new_6', tier: 2, faction: 'shu', name: '주창', hanja: '주', weapon: 'snake', atk: 58, spd: 1.0, range: 9.9, stamp: '名將出擊', unlockWave: 1, fameCost: 0, story: '도감에 등록된 명장 주창이(가) 합류했습니다.' },
  { id: 'shu_new_7', tier: 2, faction: 'shu', name: '요화', hanja: '요', weapon: 'fan', atk: 58, spd: 1.0, range: 9.9, stamp: '名將出擊', unlockWave: 1, fameCost: 0, story: '도감에 등록된 명장 요화이(가) 합류했습니다.' },
  { id: 'shu_new_8', tier: 2, faction: 'shu', name: '마량', hanja: '마', weapon: 'sword', atk: 59, spd: 1.0, range: 9.9, stamp: '名將出擊', unlockWave: 1, fameCost: 0, story: '도감에 등록된 명장 마량이(가) 합류했습니다.' },
  { id: 'shu_new_9', tier: 2, faction: 'shu', name: '이적', hanja: '이', weapon: 'fan', atk: 59, spd: 1.0, range: 9.9, stamp: '名將出擊', unlockWave: 1, fameCost: 0, story: '도감에 등록된 명장 이적이(가) 합류했습니다.' },
  { id: 'shu_new_10', tier: 3, faction: 'shu', name: '마속', hanja: '마', weapon: 'axe', atk: 125, spd: 1.1, range: 10.1, stamp: '名將出擊', unlockWave: 1, fameCost: 0, story: '도감에 등록된 명장 마속이(가) 합류했습니다.' },
  { id: 'shu_new_11', tier: 3, faction: 'shu', name: '왕평', hanja: '왕', weapon: 'snake', atk: 127, spd: 1.1, range: 10.1, stamp: '名將出擊', unlockWave: 1, fameCost: 0, story: '도감에 등록된 명장 왕평이(가) 합류했습니다.' },
  { id: 'shu_new_12', tier: 3, faction: 'shu', name: '장익', hanja: '장', weapon: 'glaive', atk: 125, spd: 1.1, range: 10.1, stamp: '名將出擊', unlockWave: 1, fameCost: 0, story: '도감에 등록된 명장 장익이(가) 합류했습니다.' },
  { id: 'shu_new_13', tier: 3, faction: 'shu', name: '장억', hanja: '장', weapon: 'dual', atk: 127, spd: 1.1, range: 10.1, stamp: '名將出擊', unlockWave: 1, fameCost: 0, story: '도감에 등록된 명장 장억이(가) 합류했습니다.', beard: 'long' },
  { id: 'shu_new_14', tier: 3, faction: 'shu', name: '오의', hanja: '오', weapon: 'snake', atk: 125, spd: 1.1, range: 10.1, stamp: '名將出擊', unlockWave: 1, fameCost: 0, story: '도감에 등록된 명장 오의이(가) 합류했습니다.' },
  { id: 'shu_new_15', tier: 4, faction: 'shu', name: '황권', hanja: '황', weapon: 'bow', atk: 270, spd: 1.2, range: 10.3, stamp: '名將出擊', unlockWave: 2, fameCost: 30, story: '도감에 등록된 명장 황권이(가) 합류했습니다.' },
  { id: 'shu_new_16', tier: 4, faction: 'shu', name: '법정', hanja: '법', weapon: 'fan', atk: 272, spd: 1.2, range: 10.3, stamp: '名將出擊', unlockWave: 2, fameCost: 30, story: '도감에 등록된 명장 법정이(가) 합류했습니다.' },
  { id: 'shu_new_17', tier: 4, faction: 'shu', name: '유봉', hanja: '유', weapon: 'staff', atk: 274, spd: 1.2, range: 10.3, stamp: '名將出擊', unlockWave: 2, fameCost: 30, story: '도감에 등록된 명장 유봉이(가) 합류했습니다.' },
  { id: 'shu_new_18', tier: 4, faction: 'shu', name: '맹달', hanja: '맹', weapon: 'glaive', atk: 271, spd: 1.2, range: 10.3, stamp: '名將出擊', unlockWave: 2, fameCost: 30, story: '도감에 등록된 명장 맹달이(가) 합류했습니다.' },
  { id: 'shu_new_19', tier: 4, faction: 'shu', name: '관흥', hanja: '관', weapon: 'axe', atk: 273, spd: 1.2, range: 10.3, stamp: '名將出擊', unlockWave: 2, fameCost: 30, story: '도감에 등록된 명장 관흥이(가) 합류했습니다.' },
  { id: 'shu_new_20', tier: 5, faction: 'shu', name: '위연', hanja: '위', weapon: 'fan', atk: 570, spd: 1.3, range: 10.5, stamp: '名將出擊', unlockWave: 5, fameCost: 70, story: '도감에 등록된 명장 위연이(가) 합류했습니다.', mount: 'white', beard: 'long' },
  { id: 'shu_new_21', tier: 5, faction: 'shu', name: '엄안', hanja: '엄', weapon: 'mace', atk: 572, spd: 1.3, range: 10.5, stamp: '名將出擊', unlockWave: 5, fameCost: 70, story: '도감에 등록된 명장 엄안이(가) 합류했습니다.' },
  { id: 'shu_new_22', tier: 5, faction: 'shu', name: '장포', hanja: '장', weapon: 'dual', atk: 574, spd: 1.3, range: 10.5, stamp: '名將出擊', unlockWave: 5, fameCost: 70, story: '도감에 등록된 명장 장포이(가) 합류했습니다.', mount: 'black' },
  { id: 'shu_new_23', tier: 5, faction: 'shu', name: '마대', hanja: '마', weapon: 'staff', atk: 571, spd: 1.3, range: 10.5, stamp: '名將出擊', unlockWave: 5, fameCost: 70, story: '도감에 등록된 명장 마대이(가) 합류했습니다.' },
  { id: 'shu_new_24', tier: 6, faction: 'shu', name: '방통', hanja: '방', weapon: 'sword', atk: 1250, spd: 1.4, range: 10.7, stamp: '名將出擊', unlockWave: 10, fameCost: 130, story: '도감에 등록된 명장 방통이(가) 합류했습니다.', beard: 'long' },
  { id: 'shu_new_25', tier: 6, faction: 'shu', name: '강유', hanja: '강', weapon: 'halberd', atk: 1250, spd: 1.4, range: 10.7, stamp: '名將出擊', unlockWave: 10, fameCost: 130, story: '도감에 등록된 명장 강유이(가) 합류했습니다.', beard: 'long' },
  { id: 'shu_new_26', tier: 6, faction: 'shu', name: '마초', hanja: '마', weapon: 'snake', atk: 1250, spd: 1.4, range: 10.7, stamp: '名將出擊', unlockWave: 10, fameCost: 130, story: '도감에 등록된 명장 마초이(가) 합류했습니다.' },
  { id: 'shu_new_27', tier: 7, faction: 'shu', name: '유비', hanja: '유', weapon: 'snake', atk: 3000, spd: 1.5, range: 10.9, stamp: '名將出擊', unlockWave: 15, fameCost: 220, story: '도감에 등록된 명장 유비이(가) 합류했습니다.' },
  { id: 'wei_new_1', tier: 1, faction: 'wei', name: '조홍', hanja: '조', weapon: 'bow', atk: 27, spd: 1.0, range: 9.7, stamp: '名將出擊', unlockWave: 1, fameCost: 0, story: '도감에 등록된 명장 조홍이(가) 합류했습니다.' },
  { id: 'wei_new_2', tier: 1, faction: 'wei', name: '조순', hanja: '조', weapon: 'mace', atk: 25, spd: 1.0, range: 9.7, stamp: '名將出擊', unlockWave: 1, fameCost: 0, story: '도감에 등록된 명장 조순이(가) 합류했습니다.', beard: 'long' },
  { id: 'wei_new_3', tier: 1, faction: 'wei', name: '이전', hanja: '이', weapon: 'snake', atk: 27, spd: 1.0, range: 9.7, stamp: '名將出擊', unlockWave: 1, fameCost: 0, story: '도감에 등록된 명장 이전이(가) 합류했습니다.', beard: 'long' },
  { id: 'wei_new_4', tier: 1, faction: 'wei', name: '만총', hanja: '만', weapon: 'fan', atk: 25, spd: 1.0, range: 9.7, stamp: '名將出擊', unlockWave: 1, fameCost: 0, story: '도감에 등록된 명장 만총이(가) 합류했습니다.' },
  { id: 'wei_new_5', tier: 2, faction: 'wei', name: '우금', hanja: '우', weapon: 'axe', atk: 57, spd: 1.0, range: 9.9, stamp: '名將出擊', unlockWave: 1, fameCost: 0, story: '도감에 등록된 명장 우금이(가) 합류했습니다.' },
  { id: 'wei_new_6', tier: 2, faction: 'wei', name: '조진', hanja: '조', weapon: 'halberd', atk: 58, spd: 1.0, range: 9.9, stamp: '名將出擊', unlockWave: 1, fameCost: 0, story: '도감에 등록된 명장 조진이(가) 합류했습니다.' },
  { id: 'wei_new_7', tier: 2, faction: 'wei', name: '조휴', hanja: '조', weapon: 'mace', atk: 58, spd: 1.0, range: 9.9, stamp: '名將出擊', unlockWave: 1, fameCost: 0, story: '도감에 등록된 명장 조휴이(가) 합류했습니다.' },
  { id: 'wei_new_8', tier: 2, faction: 'wei', name: '유엽', hanja: '유', weapon: 'spear', atk: 59, spd: 1.0, range: 9.9, stamp: '名將出擊', unlockWave: 1, fameCost: 0, story: '도감에 등록된 명장 유엽이(가) 합류했습니다.' },
  { id: 'wei_new_9', tier: 3, faction: 'wei', name: '장합', hanja: '장', weapon: 'bow', atk: 127, spd: 1.1, range: 10.1, stamp: '名將出擊', unlockWave: 1, fameCost: 0, story: '도감에 등록된 명장 장합이(가) 합류했습니다.', beard: 'long' },
  { id: 'wei_new_10', tier: 3, faction: 'wei', name: '하후상', hanja: '하', weapon: 'glaive', atk: 125, spd: 1.1, range: 10.1, stamp: '名將出擊', unlockWave: 1, fameCost: 0, story: '도감에 등록된 명장 하후상이(가) 합류했습니다.' },
  { id: 'wei_new_11', tier: 3, faction: 'wei', name: '문빙', hanja: '문', weapon: 'mace', atk: 127, spd: 1.1, range: 10.1, stamp: '名將出擊', unlockWave: 1, fameCost: 0, story: '도감에 등록된 명장 문빙이(가) 합류했습니다.', beard: 'long' },
  { id: 'wei_new_12', tier: 3, faction: 'wei', name: '방덕', hanja: '방', weapon: 'snake', atk: 125, spd: 1.1, range: 10.1, stamp: '名將出擊', unlockWave: 1, fameCost: 0, story: '도감에 등록된 명장 방덕이(가) 합류했습니다.' },
  { id: 'wei_new_13', tier: 3, faction: 'wei', name: '정욱', hanja: '정', weapon: 'snake', atk: 127, spd: 1.1, range: 10.1, stamp: '名將出擊', unlockWave: 1, fameCost: 0, story: '도감에 등록된 명장 정욱이(가) 합류했습니다.' },
  { id: 'wei_new_14', tier: 4, faction: 'wei', name: '순유', hanja: '순', weapon: 'sword', atk: 273, spd: 1.2, range: 10.3, stamp: '名將出擊', unlockWave: 2, fameCost: 30, story: '도감에 등록된 명장 순유이(가) 합류했습니다.' },
  { id: 'wei_new_15', tier: 4, faction: 'wei', name: '가후', hanja: '가', weapon: 'glaive', atk: 270, spd: 1.2, range: 10.3, stamp: '名將出擊', unlockWave: 2, fameCost: 30, story: '도감에 등록된 명장 가후이(가) 합류했습니다.' },
  { id: 'wei_new_16', tier: 4, faction: 'wei', name: '하후연', hanja: '하', weapon: 'bow', atk: 272, spd: 1.2, range: 10.3, stamp: '名將出擊', unlockWave: 2, fameCost: 30, story: '도감에 등록된 명장 하후연이(가) 합류했습니다.' },
  { id: 'wei_new_17', tier: 4, faction: 'wei', name: '조비', hanja: '조', weapon: 'spear', atk: 274, spd: 1.2, range: 10.3, stamp: '名將出擊', unlockWave: 2, fameCost: 30, story: '도감에 등록된 명장 조비이(가) 합류했습니다.' },
  { id: 'wei_new_18', tier: 4, faction: 'wei', name: '사마사', hanja: '사', weapon: 'sword', atk: 271, spd: 1.2, range: 10.3, stamp: '名將出擊', unlockWave: 2, fameCost: 30, story: '도감에 등록된 명장 사마사이(가) 합류했습니다.' },
  { id: 'wei_new_19', tier: 5, faction: 'wei', name: '허저', hanja: '허', weapon: 'mace', atk: 573, spd: 1.3, range: 10.5, stamp: '名將出擊', unlockWave: 5, fameCost: 70, story: '도감에 등록된 명장 허저이(가) 합류했습니다.', mount: 'white' },
  { id: 'wei_new_20', tier: 5, faction: 'wei', name: '전위', hanja: '전', weapon: 'sword', atk: 570, spd: 1.3, range: 10.5, stamp: '名將出擊', unlockWave: 5, fameCost: 70, story: '도감에 등록된 명장 전위이(가) 합류했습니다.' },
  { id: 'wei_new_21', tier: 5, faction: 'wei', name: '사마소', hanja: '사', weapon: 'glaive', atk: 572, spd: 1.3, range: 10.5, stamp: '名將出擊', unlockWave: 5, fameCost: 70, story: '도감에 등록된 명장 사마소이(가) 합류했습니다.' },
  { id: 'wei_new_22', tier: 6, faction: 'wei', name: '순욱', hanja: '순', weapon: 'spear', atk: 1250, spd: 1.4, range: 10.7, stamp: '名將出擊', unlockWave: 10, fameCost: 130, story: '도감에 등록된 명장 순욱이(가) 합류했습니다.', mount: 'elephant' },
  { id: 'wei_new_23', tier: 6, faction: 'wei', name: '곽가', hanja: '곽', weapon: 'axe', atk: 1250, spd: 1.4, range: 10.7, stamp: '名將出擊', unlockWave: 10, fameCost: 130, story: '도감에 등록된 명장 곽가이(가) 합류했습니다.', mount: 'elephant' },
  { id: 'wei_new_24', tier: 6, faction: 'wei', name: '하후패', hanja: '하', weapon: 'sword', atk: 1250, spd: 1.4, range: 10.7, stamp: '名將出擊', unlockWave: 10, fameCost: 130, story: '도감에 등록된 명장 하후패이(가) 합류했습니다.' },
  { id: 'wu_new_1', tier: 1, faction: 'wu', name: '우번', hanja: '우', weapon: 'dual', atk: 27, spd: 1.0, range: 9.7, stamp: '名將出擊', unlockWave: 1, fameCost: 0, story: '도감에 등록된 명장 우번이(가) 합류했습니다.' },
  { id: 'wu_new_2', tier: 1, faction: 'wu', name: '장소', hanja: '장', weapon: 'dual', atk: 25, spd: 1.0, range: 9.7, stamp: '名將出擊', unlockWave: 1, fameCost: 0, story: '도감에 등록된 명장 장소이(가) 합류했습니다.' },
  { id: 'wu_new_3', tier: 1, faction: 'wu', name: '고옹', hanja: '고', weapon: 'halberd', atk: 27, spd: 1.0, range: 9.7, stamp: '名將出擊', unlockWave: 1, fameCost: 0, story: '도감에 등록된 명장 고옹이(가) 합류했습니다.' },
  { id: 'wu_new_4', tier: 1, faction: 'wu', name: '보즐', hanja: '보', weapon: 'glaive', atk: 25, spd: 1.0, range: 9.7, stamp: '名將出擊', unlockWave: 1, fameCost: 0, story: '도감에 등록된 명장 보즐이(가) 합류했습니다.' },
  { id: 'wu_new_5', tier: 1, faction: 'wu', name: '여범', hanja: '여', weapon: 'sword', atk: 27, spd: 1.0, range: 9.7, stamp: '名將出擊', unlockWave: 1, fameCost: 0, story: '도감에 등록된 명장 여범이(가) 합류했습니다.', beard: 'long' },
  { id: 'wu_new_6', tier: 2, faction: 'wu', name: '한당', hanja: '한', weapon: 'snake', atk: 58, spd: 1.0, range: 9.9, stamp: '名將出擊', unlockWave: 1, fameCost: 0, story: '도감에 등록된 명장 한당이(가) 합류했습니다.' },
  { id: 'wu_new_7', tier: 2, faction: 'wu', name: '정보', hanja: '정', weapon: 'spear', atk: 58, spd: 1.0, range: 9.9, stamp: '名將出擊', unlockWave: 1, fameCost: 0, story: '도감에 등록된 명장 정보이(가) 합류했습니다.', beard: 'long' },
  { id: 'wu_new_8', tier: 2, faction: 'wu', name: '황개', hanja: '황', weapon: 'halberd', atk: 59, spd: 1.0, range: 9.9, stamp: '名將出擊', unlockWave: 1, fameCost: 0, story: '도감에 등록된 명장 황개이(가) 합류했습니다.' },
  { id: 'wu_new_9', tier: 2, faction: 'wu', name: '조무', hanja: '조', weapon: 'fan', atk: 59, spd: 1.0, range: 9.9, stamp: '名將出擊', unlockWave: 1, fameCost: 0, story: '도감에 등록된 명장 조무이(가) 합류했습니다.' },
  { id: 'wu_new_10', tier: 2, faction: 'wu', name: '진무', hanja: '진', weapon: 'halberd', atk: 55, spd: 1.0, range: 9.9, stamp: '名將出擊', unlockWave: 1, fameCost: 0, story: '도감에 등록된 명장 진무이(가) 합류했습니다.' },
  { id: 'wu_new_11', tier: 3, faction: 'wu', name: '주환', hanja: '주', weapon: 'spear', atk: 127, spd: 1.1, range: 10.1, stamp: '名將出擊', unlockWave: 1, fameCost: 0, story: '도감에 등록된 명장 주환이(가) 합류했습니다.' },
  { id: 'wu_new_12', tier: 3, faction: 'wu', name: '반장', hanja: '반', weapon: 'sword', atk: 125, spd: 1.1, range: 10.1, stamp: '名將出擊', unlockWave: 1, fameCost: 0, story: '도감에 등록된 명장 반장이(가) 합류했습니다.' },
  { id: 'wu_new_13', tier: 3, faction: 'wu', name: '서성', hanja: '서', weapon: 'halberd', atk: 127, spd: 1.1, range: 10.1, stamp: '名將出擊', unlockWave: 1, fameCost: 0, story: '도감에 등록된 명장 서성이(가) 합류했습니다.' },
  { id: 'wu_new_14', tier: 3, faction: 'wu', name: '정봉', hanja: '정', weapon: 'spear', atk: 125, spd: 1.1, range: 10.1, stamp: '名將出擊', unlockWave: 1, fameCost: 0, story: '도감에 등록된 명장 정봉이(가) 합류했습니다.' },
  { id: 'wu_new_15', tier: 3, faction: 'wu', name: '능통', hanja: '능', weapon: 'mace', atk: 127, spd: 1.1, range: 10.1, stamp: '名將出擊', unlockWave: 1, fameCost: 0, story: '도감에 등록된 명장 능통이(가) 합류했습니다.' },
  { id: 'wu_new_16', tier: 4, faction: 'wu', name: '장흠', hanja: '장', weapon: 'sword', atk: 272, spd: 1.2, range: 10.3, stamp: '名將出擊', unlockWave: 2, fameCost: 30, story: '도감에 등록된 명장 장흠이(가) 합류했습니다.' },
  { id: 'wu_new_17', tier: 4, faction: 'wu', name: '대교', hanja: '대', weapon: 'fan', atk: 274, spd: 1.2, range: 10.3, stamp: '名將出擊', unlockWave: 2, fameCost: 30, story: '도감에 등록된 명장 대교이(가) 합류했습니다.', female: true },
  { id: 'wu_new_18', tier: 4, faction: 'wu', name: '소교', hanja: '소', weapon: 'bow', atk: 271, spd: 1.2, range: 10.3, stamp: '名將出擊', unlockWave: 2, fameCost: 30, story: '도감에 등록된 명장 소교이(가) 합류했습니다.', female: true },
  { id: 'wu_new_19', tier: 4, faction: 'wu', name: '노숙', hanja: '노', weapon: 'dual', atk: 273, spd: 1.2, range: 10.3, stamp: '名將出擊', unlockWave: 2, fameCost: 30, story: '도감에 등록된 명장 노숙이(가) 합류했습니다.', beard: 'long' },
  { id: 'wu_new_20', tier: 5, faction: 'wu', name: '태사자', hanja: '태', weapon: 'halberd', atk: 570, spd: 1.3, range: 10.5, stamp: '名將出擊', unlockWave: 5, fameCost: 70, story: '도감에 등록된 명장 태사자이(가) 합류했습니다.', mount: 'white', beard: 'long' },
  { id: 'wu_new_21', tier: 5, faction: 'wu', name: '육항', hanja: '육', weapon: 'dual', atk: 572, spd: 1.3, range: 10.5, stamp: '名將出擊', unlockWave: 5, fameCost: 70, story: '도감에 등록된 명장 육항이(가) 합류했습니다.' },
  { id: 'wu_new_22', tier: 5, faction: 'wu', name: '제갈각', hanja: '제', weapon: 'bow', atk: 574, spd: 1.3, range: 10.5, stamp: '名將出擊', unlockWave: 5, fameCost: 70, story: '도감에 등록된 명장 제갈각이(가) 합류했습니다.' },
  { id: 'wu_new_23', tier: 6, faction: 'wu', name: '손견', hanja: '손', weapon: 'snake', atk: 1250, spd: 1.4, range: 10.7, stamp: '名將出擊', unlockWave: 10, fameCost: 130, story: '도감에 등록된 명장 손견이(가) 합류했습니다.', mount: 'black' },
  { id: 'wu_new_24', tier: 6, faction: 'wu', name: '손책', hanja: '손', weapon: 'bow', atk: 1250, spd: 1.4, range: 10.7, stamp: '名將出擊', unlockWave: 10, fameCost: 130, story: '도감에 등록된 명장 손책이(가) 합류했습니다.' },
  { id: 'wu_new_25', tier: 6, faction: 'wu', name: '여몽', hanja: '여', weapon: 'fan', atk: 1250, spd: 1.4, range: 10.7, stamp: '名將出擊', unlockWave: 10, fameCost: 130, story: '도감에 등록된 명장 여몽이(가) 합류했습니다.' },
  { id: 'qun_new_1', tier: 1, faction: 'qun', name: '송헌', hanja: '송', weapon: 'sword', atk: 27, spd: 1.0, range: 9.7, stamp: '名將出擊', unlockWave: 1, fameCost: 0, story: '도감에 등록된 명장 송헌이(가) 합류했습니다.' },
  { id: 'qun_new_2', tier: 1, faction: 'qun', name: '후성', hanja: '후', weapon: 'axe', atk: 25, spd: 1.0, range: 9.7, stamp: '名將出擊', unlockWave: 1, fameCost: 0, story: '도감에 등록된 명장 후성이(가) 합류했습니다.' },
  { id: 'qun_new_3', tier: 1, faction: 'qun', name: '위속', hanja: '위', weapon: 'bow', atk: 27, spd: 1.0, range: 9.7, stamp: '名將出擊', unlockWave: 1, fameCost: 0, story: '도감에 등록된 명장 위속이(가) 합류했습니다.' },
  { id: 'qun_new_4', tier: 1, faction: 'qun', name: '장만성', hanja: '장', weapon: 'glaive', atk: 25, spd: 1.0, range: 9.7, stamp: '名將出擊', unlockWave: 1, fameCost: 0, story: '도감에 등록된 명장 장만성이(가) 합류했습니다.' },
  { id: 'qun_new_5', tier: 1, faction: 'qun', name: '파재', hanja: '파', weapon: 'fan', atk: 27, spd: 1.0, range: 9.7, stamp: '名將出擊', unlockWave: 1, fameCost: 0, story: '도감에 등록된 명장 파재이(가) 합류했습니다.', beard: 'long' },
  { id: 'qun_new_6', tier: 2, faction: 'qun', name: '장보', hanja: '장', weapon: 'staff', atk: 58, spd: 1.0, range: 9.9, stamp: '名將出擊', unlockWave: 1, fameCost: 0, story: '도감에 등록된 명장 장보이(가) 합류했습니다.' },
  { id: 'qun_new_7', tier: 2, faction: 'qun', name: '장량', hanja: '장', weapon: 'fan', atk: 58, spd: 1.0, range: 9.9, stamp: '名將出擊', unlockWave: 1, fameCost: 0, story: '도감에 등록된 명장 장량이(가) 합류했습니다.', beard: 'long' },
  { id: 'qun_new_8', tier: 2, faction: 'qun', name: '고순', hanja: '고', weapon: 'staff', atk: 59, spd: 1.0, range: 9.9, stamp: '名將出擊', unlockWave: 1, fameCost: 0, story: '도감에 등록된 명장 고순이(가) 합류했습니다.', beard: 'long' },
  { id: 'qun_new_9', tier: 2, faction: 'qun', name: '장임', hanja: '장', weapon: 'dual', atk: 59, spd: 1.0, range: 9.9, stamp: '名將出擊', unlockWave: 1, fameCost: 0, story: '도감에 등록된 명장 장임이(가) 합류했습니다.' },
  { id: 'qun_new_10', tier: 2, faction: 'qun', name: '엄백호', hanja: '엄', weapon: 'staff', atk: 55, spd: 1.0, range: 9.9, stamp: '名將出擊', unlockWave: 1, fameCost: 0, story: '도감에 등록된 명장 엄백호이(가) 합류했습니다.' },
  { id: 'qun_new_11', tier: 3, faction: 'qun', name: '번조', hanja: '번', weapon: 'fan', atk: 127, spd: 1.1, range: 10.1, stamp: '名將出擊', unlockWave: 1, fameCost: 0, story: '도감에 등록된 명장 번조이(가) 합류했습니다.' },
  { id: 'qun_new_12', tier: 3, faction: 'qun', name: '이각', hanja: '이', weapon: 'spear', atk: 125, spd: 1.1, range: 10.1, stamp: '名將出擊', unlockWave: 1, fameCost: 0, story: '도감에 등록된 명장 이각이(가) 합류했습니다.' },
  { id: 'qun_new_13', tier: 3, faction: 'qun', name: '곽사', hanja: '곽', weapon: 'bow', atk: 127, spd: 1.1, range: 10.1, stamp: '名將出擊', unlockWave: 1, fameCost: 0, story: '도감에 등록된 명장 곽사이(가) 합류했습니다.' },
  { id: 'qun_new_14', tier: 3, faction: 'qun', name: '공손찬', hanja: '공', weapon: 'snake', atk: 125, spd: 1.1, range: 10.1, stamp: '名將出擊', unlockWave: 1, fameCost: 0, story: '도감에 등록된 명장 공손찬이(가) 합류했습니다.', beard: 'long' },
  { id: 'qun_new_15', tier: 4, faction: 'qun', name: '안량', hanja: '안', weapon: 'snake', atk: 270, spd: 1.2, range: 10.3, stamp: '名將出擊', unlockWave: 2, fameCost: 30, story: '도감에 등록된 명장 안량이(가) 합류했습니다.' },
  { id: 'qun_new_16', tier: 4, faction: 'qun', name: '문추', hanja: '문', weapon: 'snake', atk: 272, spd: 1.2, range: 10.3, stamp: '名將出擊', unlockWave: 2, fameCost: 30, story: '도감에 등록된 명장 문추이(가) 합류했습니다.', beard: 'long' },
  { id: 'qun_new_17', tier: 4, faction: 'qun', name: '장로', hanja: '장', weapon: 'bow', atk: 274, spd: 1.2, range: 10.3, stamp: '名將出擊', unlockWave: 2, fameCost: 30, story: '도감에 등록된 명장 장로이(가) 합류했습니다.' },
  { id: 'qun_new_18', tier: 4, faction: 'qun', name: '마등', hanja: '마', weapon: 'sword', atk: 271, spd: 1.2, range: 10.3, stamp: '名將出擊', unlockWave: 2, fameCost: 30, story: '도감에 등록된 명장 마등이(가) 합류했습니다.', beard: 'long' },
  { id: 'qun_new_19', tier: 4, faction: 'qun', name: '원술', hanja: '원', weapon: 'spear', atk: 273, spd: 1.2, range: 10.3, stamp: '名將出擊', unlockWave: 2, fameCost: 30, story: '도감에 등록된 명장 원술이(가) 합류했습니다.' },
  { id: 'qun_new_20', tier: 5, faction: 'qun', name: '원소', hanja: '원', weapon: 'dual', atk: 570, spd: 1.3, range: 10.5, stamp: '名將出擊', unlockWave: 5, fameCost: 70, story: '도감에 등록된 명장 원소이(가) 합류했습니다.', mount: 'white' },
  { id: 'qun_new_21', tier: 5, faction: 'qun', name: '진궁', hanja: '진', weapon: 'sword', atk: 572, spd: 1.3, range: 10.5, stamp: '名將出擊', unlockWave: 5, fameCost: 70, story: '도감에 등록된 명장 진궁이(가) 합류했습니다.' },
  { id: 'qun_new_22', tier: 5, faction: 'qun', name: '축융', hanja: '축', weapon: 'sword', atk: 574, spd: 1.3, range: 10.5, stamp: '名將出擊', unlockWave: 5, fameCost: 70, story: '도감에 등록된 명장 축융이(가) 합류했습니다.', female: true },
  { id: 'qun_new_23', tier: 6, faction: 'qun', name: '좌자', hanja: '좌', weapon: 'bow', atk: 1250, spd: 1.4, range: 10.7, stamp: '名將出擊', unlockWave: 10, fameCost: 130, story: '도감에 등록된 명장 좌자이(가) 합류했습니다.' },
  { id: 'qun_new_24', tier: 6, faction: 'qun', name: '우길', hanja: '우', weapon: 'spear', atk: 1250, spd: 1.4, range: 10.7, stamp: '名將出擊', unlockWave: 10, fameCost: 130, story: '도감에 등록된 명장 우길이(가) 합류했습니다.', beard: 'long' },
];

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
  { id: 'shu_bond_1', name: '도원결의 (+25% 화력)', ids: ['shu_new_27', 'shu_6', 'shu_5'], min: 3, atkBonus: 0.25 },
  { id: 'shu_bond_2', name: '오호대장군 (+25% 화력)', ids: ['shu_6', 'shu_5', 'shu_4', 'shu_new_26', 'shu_3'], min: 5, atkBonus: 0.25 },
  { id: 'shu_bond_3', name: '와룡봉추 (+25% 화력)', ids: ['shu_7', 'shu_new_24'], min: 2, atkBonus: 0.25 },
  { id: 'shu_bond_4', name: '북벌의별 (+25% 화력)', ids: ['shu_7', 'shu_new_25', 'shu_new_23', 'shu_new_11'], min: 4, atkBonus: 0.25 },
  { id: 'shu_bond_5', name: '노익장 (+25% 화력)', ids: ['shu_3', 'shu_new_21'], min: 2, atkBonus: 0.25 },
  { id: 'shu_bond_6', name: '촉한의방패 (+25% 화력)', ids: ['shu_new_20', 'shu_new_7', 'shu_new_12'], min: 3, atkBonus: 0.25 },
  { id: 'wei_bond_1', name: '오자양장 (+25% 화력)', ids: ['wei_5', 'wei_2', 'wei_new_5', 'wei_new_9', 'wei_3'], min: 5, atkBonus: 0.25 },
  { id: 'wei_bond_2', name: '호위쌍벽 (+25% 화력)', ids: ['wei_new_20', 'wei_new_19'], min: 2, atkBonus: 0.25 },
  { id: 'wei_bond_3', name: '왕좌의지략 (+25% 화력)', ids: ['wei_new_22', 'wei_new_14', 'wei_new_23', 'wei_new_13', 'wei_new_15'], min: 5, atkBonus: 0.25 },
  { id: 'wei_bond_4', name: '하후일족 (+25% 화력)', ids: ['wei_4', 'wei_new_16', 'wei_new_24'], min: 3, atkBonus: 0.25 },
  { id: 'wei_bond_5', name: '사마씨의야망 (+25% 화력)', ids: ['wei_6', 'wei_new_18', 'wei_new_21'], min: 3, atkBonus: 0.25 },
  { id: 'wu_bond_1', name: '강동삼대 (+25% 화력)', ids: ['wu_new_23', 'wu_new_24', 'wu_7'], min: 3, atkBonus: 0.25 },
  { id: 'wu_bond_2', name: '적벽화공 (+25% 화력)', ids: ['wu_6', 'wu_new_8', 'wu_5', 'wu_new_25'], min: 4, atkBonus: 0.25 },
  { id: 'wu_bond_3', name: '강동호신 (+25% 화력)', ids: ['wu_new_20', 'wu_3', 'wu_2', 'wu_new_15'], min: 4, atkBonus: 0.25 },
  { id: 'wu_bond_4', name: '강동이교 (+25% 화력)', ids: ['wu_new_17', 'wu_new_18'], min: 2, atkBonus: 0.25 },
  { id: 'wu_bond_5', name: '오의기둥 (+25% 화력)', ids: ['wu_new_19', 'wu_new_2', 'wu_new_21'], min: 3, atkBonus: 0.25 },
  { id: 'qun_bond_1', name: '경국지색 (+25% 화력)', ids: ['qun_7', 'qun_3'], min: 2, atkBonus: 0.25 },
  { id: 'qun_bond_2', name: '하북쌍벽 (+25% 화력)', ids: ['qun_new_15', 'qun_new_16'], min: 2, atkBonus: 0.25 },
  { id: 'qun_bond_3', name: '태평황건 (+25% 화력)', ids: ['qun_5', 'qun_new_6', 'qun_new_7'], min: 3, atkBonus: 0.25 },
  { id: 'qun_bond_4', name: '남만부부 (+25% 화력)', ids: ['qun_4', 'qun_new_22'], min: 2, atkBonus: 0.25 },
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

const INITIAL_DECK = [];
const DEFAULT_ORIGINAL_28 = ['shu_1', 'wei_1', 'wu_1', 'qun_1', 'shu_2', 'wei_2', 'wu_2', 'qun_2', 'shu_3', 'wei_3', 'wu_3', 'qun_3', 'shu_4', 'wei_4', 'wu_4', 'qun_4', 'shu_5', 'wei_5', 'wu_5', 'qun_5', 'shu_6', 'wei_6', 'wu_6', 'qun_6', 'shu_7', 'wei_7', 'wu_7', 'qun_7'];


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
  stratCd: { fire: 0, rock: 0, flood: 0, buff: 0 },
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
  isGameOver: false,
  activeDeck: [],
  governors: { luoyang: [], chengdu: [], ye: [], jianye: [], xiangyang: [], changan: [] },
  heroUpgrades: {},
  factionTech: { shu: 0, wei: 0, wu: 0, qun: 0 }
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
      gridIds: gameState.grid.map(h => h ? h.data.id : null),
      activeDeck: gameState.activeDeck,
      governors: gameState.governors,
      heroUpgrades: gameState.heroUpgrades,
      factionTech: gameState.factionTech
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
    gameState.activeDeck = data.activeDeck || [...DEFAULT_ORIGINAL_28];
    gameState.governors = data.governors || { luoyang: [], chengdu: [], ye: [], jianye: [], xiangyang: [], changan: [] };
    gameState.heroUpgrades = data.heroUpgrades || {};
    gameState.factionTech = data.factionTech || { shu: 0, wei: 0, wu: 0, qun: 0 };

    gameState.towerFloor = Number(data.towerFloor) || 1;

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
  document.getElementById('menu-unlock-cnt').textContent = `${gameState.unlockedIds.length}/28`;
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
    banner.innerHTML = `<div style="color:#fde047;font-weight:800;">🎉 삼국지 28인 전 명장 해방 완료! 천하통일을 달성했습니다!</div>`;
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
  if (heroData.mount) {
    const mountColor = heroData.mount === 'red' ? 0xb91c1c : heroData.mount === 'white' ? 0xf8fafc : heroData.mount === 'elephant' ? 0x64748b : 0x1e293b;
    const mMat = new THREE.MeshStandardMaterial({ color: mountColor, roughness: 0.5 });
    const body = new THREE.Mesh(new THREE.BoxGeometry(0.8, 0.65, 1.25), mMat);
    body.position.set(0, 0.65, 0);
    root.add(body);
    yOffset = 0.95;
  }

  const armorMat = new THREE.MeshStandardMaterial({ color: fMeta.hex, metalness: 0.6, roughness: 0.3 });
  const torso = new THREE.Mesh(new THREE.CylinderGeometry(0.38, 0.46, 0.9, 8), armorMat);
  torso.position.y = yOffset + 0.45;
  root.add(torso);

  const faceColor = heroData.redFace ? 0xdc2626 : 0xfde68a;
  const head = new THREE.Mesh(new THREE.SphereGeometry(0.32, 12, 12), new THREE.MeshStandardMaterial({ color: faceColor }));
  head.position.y = yOffset + 1.15;
  root.add(head);

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
function getUnlockedHeroOrFallback(faction, tier) {
  const f_idx = ['shu', 'wei', 'wu', 'qun'].indexOf(faction);
  const slot_idx = (tier - 1) * 4 + f_idx;
  if (slot_idx >= 0 && slot_idx < 28) {
    const deckHeroId = gameState.activeDeck[slot_idx];
    const deckHero = HERO_DB.find(h => h.id === deckHeroId);
    if (deckHero && gameState.unlockedIds.includes(deckHero.id)) {
      return deckHero;
    }
  }

  const exact = HERO_DB.find(h => h.faction === faction && h.tier === tier);
  if (exact && gameState.unlockedIds.includes(exact.id)) return exact;

  const unlockedSameTier = HERO_DB.filter(h => h.tier === tier && gameState.unlockedIds.includes(h.id));
  if (unlockedSameTier.length > 0) {
    return unlockedSameTier[Math.floor(Math.random() * unlockedSameTier.length)];
  }
  if (exact) {
    gameState.unlockedIds.push(exact.id);
    triggerHanjaStamp(exact.stamp, `전장 각성: ${exact.name} 해방!`);
    showStoryToast(`⚡ 전장 긴급 해방!`, `[${exact.name}] 봉인 해제!`, exact.story);
    return exact;
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
    const nextHero = getUnlockedHeroOrFallback(nextFaction, nextTier);

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

  let totalRankLv = 0;
  for (const id in gameState.heroUpgrades) {
    totalRankLv += gameState.heroUpgrades[id].rankLv || 0;
  }
  const globalRankBonus = totalRankLv * 0.01;

  const counts = { shu: 0, wei: 0, wu: 0, qun: 0 };
  const activeIds = new Set();
  gameState.grid.forEach(cell => {
    if (cell) {
      counts[cell.data.faction]++;
      activeIds.add(cell.data.id);
    }
  });

  let bondAtkBonus = 0;
  // Collection Bonus (+3% per completed bond in unlockedIds)
  let completedBondsCount = 0;
  BOND_LIST.forEach(b => {
    let unlockedMatch = 0;
    b.ids.forEach(id => { if (gameState.unlockedIds.includes(id)) unlockedMatch++; });
    if (unlockedMatch >= b.min) completedBondsCount++;
  });
  bondAtkBonus += completedBondsCount * 0.03;

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
    if (gameState.isTowerMode) {
      gameState.towerFloor++;
      gameState.waveRemaining = 5 + Math.floor(gameState.towerFloor / 2);
      const reward = 5 + Math.floor(gameState.towerFloor * 1.5);
      gameState.fame += reward;
      sound.playGong();
      triggerHanjaStamp(Math.random() > 0.5 ? '登極' : '破竹', `백층탑 제${gameState.towerFloor - 1}층 돌파! 명성 +${reward}🎖️`);
      updateSynergyAndHUD();
      saveGameSafe();
    } else {
      gameState.wave++;
      gameState.bestWave = Math.max(gameState.bestWave, gameState.wave);
      gameState.weatherIdx = (gameState.wave - 1) % WEATHER_LIST.length;
      gameState.waveRemaining = 8 + gameState.wave * 3;

      // Calculate Dispatch Power Rewards
      let totalDispatchPower = 0;
      try {
        const rawSave = localStorage.getItem(SAVE_KEY);
        const data = rawSave ? JSON.parse(rawSave) : {};
        const heroUpgrades = data.heroUpgrades || {};
        for(const region in gameState.governors) {
          gameState.governors[region].forEach(id => {
            const h = HERO_DB.find(x => x.id === id);
            if(h) {
              const rank = heroUpgrades[id] ? (heroUpgrades[id].rank || 0) : 0;
              totalDispatchPower += h.tier + rank;
            }
          });
        }
      } catch(e) {}

      const dispatchGold = Math.floor(totalDispatchPower * 1.5);
      gameState.gold += 35 + gameState.wave * 8 + dispatchGold;

      let fameGained = 10;
      if (gameState.wave % 5 === 0) {
          fameGained += Math.floor(totalDispatchPower * 0.5);
      }
      gameState.fame += fameGained;

      if(totalDispatchPower > 0) {
        addFloatingText(`🗺️ 태수 징수 +(${dispatchGold}🌾)`, new THREE.Vector3(0, 3, 0), '#fbbf24');
      }

      checkStageLiberation(gameState.wave);
      updateSynergyAndHUD();
      saveGameSafe();
      if (gameState.wave % 2 === 0) openStrategyModal();
    }
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
    let terrainSpd = (tInfo && tInfo.type === 'wind') ? 1.35 : 1.0;
    let terrainRange = (tInfo && tInfo.type === 'high') ? 2.5 : 0;
    let terrainAtk = (tInfo && tInfo.type === 'high') ? 1.2 : 1.0;
    let terrainCrit = (tInfo && tInfo.type === 'taichi') ? 0.3 : 0;
    let towerAtkBonus = 1.0;

    if (gameState.isTowerMode) {
      const modifierType = gameState.towerFloor % 4;
      if (modifierType === 0 && (cell.data.faction === 'wu' || cell.data.faction === 'shu' && cell.data.branch === 'tactician')) {
        towerAtkBonus = 1.5; // 적벽의 화풍
      } else if (modifierType === 1 && cell.data.faction === 'shu') {
        terrainSpd *= 1.35; // 정군산의 기세
      } else if (modifierType === 2 && cell.data.faction === 'wei') {
        terrainCrit += 0.35; // 관도의 철벽 (we will use this for crit)
      } else if (modifierType === 3 && cell.data.faction === 'qun') {
        towerAtkBonus = 1.4; // 무쌍의 포효
      }
    }


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

                const upgrades = gameState.heroUpgrades[cell.data.id] || { rankLv: 0, weaponLv: 0 };
        const factionTech = gameState.factionTech[cell.data.faction] || 0;

        const upgradeMult = 1 + (0.15 * upgrades.rankLv) + (0.25 * upgrades.weaponLv);
        const factionTechBonus = 1 + (0.05 * factionTech);
        const weaponCritBonus = 0.04 * upgrades.weaponLv;

        const isCrit = Math.random() < (gameState.buffCrit + syn.qunCrit + terrainCrit + (weather.critMod || 0) + weaponCritBonus);
        const wuMod = cell.data.faction === 'wu' ? weather.fireMod : 1.0;

        const rankAtkBonus = 1 + (0.15 * upgrades.rankLv);
        const totalCodexMult = codexMult + globalRankBonus;
        const dmg = cell.data.atk * rankAtkBonus * starMult * terrainAtk * towerAtkBonus * wuMod * gameState.buffAtk * syn.weiMult * totalCodexMult * upgradeMult * factionTechBonus * (isCrit ? 2.2 : 1.0);
        const applyBurn = syn.wuBurn || (tInfo && tInfo.type === 'fire') || (gameState.isTowerMode && gameState.towerFloor % 4 === 0 && cell.data.faction === 'wu');


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
    if (en.giantType === 'lubu') {
      if (en.shockwaveTimer === undefined) en.shockwaveTimer = 0;
      en.shockwaveTimer += effDt;
      if (en.shockwaveTimer >= 4.0) {
        en.shockwaveTimer = 0;
        sound.playWarDrum();
        addFloatingText(`💥 마신의 파동!`, en.mesh.position, '#dc2626');
        gameState.grid.forEach(cell => {
          if (cell) {
             const d = cell.mesh.position.distanceTo(en.mesh.position);
             if (d < 5.0) {
                 cell.cooldown += 0.8; // Slow nearby defenders
                 addFloatingText(`공속 감소`, cell.mesh.position, '#ef4444');
             }
          }
        });
      }
    }

    if (en.burnTimer > 0) {
      en.burnTimer -= effDt;
      en.hp -= en.burnDps * effDt;
    }
    if (en.hp <= 0) {
      scene.remove(en.mesh);
      gameState.enemies.splice(i, 1);
      gameState.kills++;
      let goldReward = en.isBoss ? 90 : 8 + Math.floor(gameState.wave * 1.5);
      let fameReward = en.isBoss ? 20 : (gameState.kills % 5 === 0 ? 2 : 0);

      if (en.giantType === 'menghuo') {
        goldReward += 150;
        fameReward += 30; // bonus drops
      }

      gameState.gold += goldReward;
      gameState.fame += fameReward;

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

      // Knockback resistance for Meng Huo
      let moveSpd = en.speed;
      let slowMod = weather.slowEnemy || 1.0;
      if (en.giantType === 'menghuo') {
        slowMod = 1.0; // Immune to weather slow
      }

      en.mesh.position.addScaledVector(dir, effDt * moveSpd * slowMod);

      // Giant bosses face forward
      if (en.isBoss && en.giantType) {
        en.mesh.lookAt(new THREE.Vector3().addVectors(en.mesh.position, dir));
      }

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
    document.body.classList.add('in-battle');
  document.getElementById('gameover-modal').classList.add('hidden');
  updateSynergyAndHUD();
  saveGameSafe();
}


// ====== DECK & DISPATCH UI LOGIC ======
function openDeckModal() {
  renderDeckGrid();
  renderGovGrid();
  document.getElementById('deck-modal').classList.remove('hidden');
}

function closeDeckModal() {
  document.getElementById('deck-modal').classList.add('hidden');
  saveGameSafe();
}

function renderDeckGrid() {
  const grid = document.getElementById('deck-grid');
  grid.innerHTML = '';
  const f = ['shu', 'wei', 'wu', 'qun'];

  for(let t=1; t<=7; t++) {
    for(let i=0; i<4; i++) {
      const idx = (t-1)*4 + i;
      const heroId = gameState.activeDeck[idx];
      const hero = HERO_DB.find(h => h.id === heroId);

      const div = document.createElement('div');
      div.className = 'deck-slot';
      if(hero) {
        div.innerHTML = `<div class="tier">T${t}</div><div class="name" style="color:${FACTION_META[hero.faction].color}">${hero.name}</div>`;
      } else {
        div.innerHTML = `<div class="tier">T${t}</div><div class="name" style="color:#94a3b8">미지정</div>`;
      }
      div.onclick = () => showHeroSelectorForDeck(idx, f[i], t);
      grid.appendChild(div);
    }
  }
}

function showHeroSelectorForDeck(slotIdx, faction, tier) {
  const available = HERO_DB.filter(h => h.faction === faction && h.tier === tier && gameState.unlockedIds.includes(h.id));
  if(available.length <= 1) {
    addFloatingText('교체할 해방 명장이 없습니다.', new THREE.Vector3(0,3,0), '#f87171');
    return;
  }

  let currentIdx = available.findIndex(h => h.id === gameState.activeDeck[slotIdx]);
  currentIdx = (currentIdx + 1) % available.length;
  const newHero = available[currentIdx];

  // Remove from governors if they are there
  for(let r in gameState.governors) {
    const gIdx = gameState.governors[r].indexOf(newHero.id);
    if(gIdx > -1) gameState.governors[r][gIdx] = null;
  }

  gameState.activeDeck[slotIdx] = newHero.id;
  renderDeckGrid();
  renderGovGrid();
}

const REGION_NAMES = { luoyang: '낙양', chengdu: '성도', ye: '업성', jianye: '건업', xiangyang: '양양', changan: '장안' };

function renderGovGrid() {
  const grid = document.getElementById('gov-grid');
  grid.innerHTML = '';

  for(const region in gameState.governors) {
    const slots = gameState.governors[region];
    // ensure 3 slots
    while(slots.length < 3) slots.push(null);

    let html = `<div class="gov-region"><h3>${REGION_NAMES[region]}</h3><div class="gov-slots">`;
    for(let i=0; i<3; i++) {
      const hId = slots[i];
      if(hId) {
        const hero = HERO_DB.find(h => h.id === hId);
        html += `<div class="gov-slot filled" onclick="removeGovernor('${region}', ${i})">${hero.name}<br>T${hero.tier}</div>`;
      } else {
        html += `<div class="gov-slot" onclick="assignGovernor('${region}', ${i})">빈 자리</div>`;
      }
    }
    html += `</div></div>`;
    grid.innerHTML += html;
  }
}

window.removeGovernor = function(region, idx) {
  gameState.governors[region][idx] = null;
  renderGovGrid();
}

window.assignGovernor = function(region, idx) {
  const activeSet = new Set(gameState.activeDeck);
  const govSet = new Set();
  for(let r in gameState.governors) gameState.governors[r].forEach(id => { if(id) govSet.add(id); });

  const available = HERO_DB.filter(h => gameState.unlockedIds.includes(h.id) && !activeSet.has(h.id) && !govSet.has(h.id));
  available.sort((a,b) => b.tier - a.tier);

  if(available.length > 0) {
    gameState.governors[region][idx] = available[0].id;
    renderGovGrid();
  } else {
    alert('파견할 유휴 명장이 없습니다!');
  }
}

window.autoAssignGovernors = function() {
  const activeSet = new Set(gameState.activeDeck);
  let govSet = new Set(); // We will reassign all
  for(let r in gameState.governors) gameState.governors[r] = [null, null, null];

  const available = HERO_DB.filter(h => gameState.unlockedIds.includes(h.id) && !activeSet.has(h.id));
  available.sort((a,b) => b.tier - a.tier);

  let aIdx = 0;
  for(let r in gameState.governors) {
    for(let i=0; i<3; i++) {
      if(aIdx < available.length) {
        gameState.governors[r][i] = available[aIdx].id;
        aIdx++;
      }
    }
  }
  renderGovGrid();
}

window.applyDeckPreset = function(type) {
  let preferredNames = [];
  if (type === 'shu_five') preferredNames = ['관우', '장비', '조운', '마초', '황충'];
  else if (type === 'wei_five') preferredNames = ['장료', '악진', '우금', '장합', '서황'];
  else if (type === 'wu_fire') preferredNames = ['주유', '육손', '황개', '여몽'];
  else if (type === 'qun_boss') preferredNames = ['여포', '초선', '동탁', '장각'];

  const prefHeroes = HERO_DB.filter(h => {
    return preferredNames.includes(h.name.split(' ').pop()) && gameState.unlockedIds.includes(h.id);
  });

  prefHeroes.forEach(ph => {
    const f_idx = ['shu', 'wei', 'wu', 'qun'].indexOf(ph.faction);
    const slotIdx = (ph.tier - 1) * 4 + f_idx;
    gameState.activeDeck[slotIdx] = ph.id;
  });

  renderDeckGrid();
  alert('추천 인연 덱 프리셋이 적용되었습니다!');
}
// ==

function bindEvents() {
  const upgradeCampBtn = document.getElementById('upgrade-camp-btn');
  if (upgradeCampBtn) upgradeCampBtn.addEventListener('click', openUpgradeCampModal);
  const closeUpgradeCampBtn = document.getElementById('close-upgrade-camp-btn');
  if (closeUpgradeCampBtn) closeUpgradeCampBtn.addEventListener('click', () => {
    document.getElementById('upgrade-camp-modal').classList.add('hidden');
    if (campPreviewAnimId) cancelAnimationFrame(campPreviewAnimId);
    campPreviewAnimId = null;
  });

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
    document.body.classList.add('in-battle');
    updateSynergyAndHUD();
  });

  document.getElementById('new-game-btn').addEventListener('click', startNewCampaign);
  document.getElementById('open-story-btn').addEventListener('click', openCodexModal);

  document.getElementById('lobby-return-btn').addEventListener('click', () => {
    saveGameSafe();
    refreshMainMenuUI();
    gameState.inLobby = true;
    document.getElementById('main-menu-overlay').classList.remove('hidden');
    document.body.classList.remove('in-battle');
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

  const skillBtn = document.getElementById('skill-btn');
  if (skillBtn) skillBtn.addEventListener('click', () => {
    if (gameState.skillCd > 0) return;
    gameState.skillCd = 18;
    sound.playCatapultBoom();
    triggerHanjaStamp('赤壁業火', '적벽의 화공이 적진을 불태웁니다!');
    const weather = WEATHER_LIST[gameState.weatherIdx];
    let skillDmg = Math.floor(150 * gameState.wave * weather.fireMod);
    gameState.enemies.forEach(en => {
      let finalDmg = skillDmg;
      if (en.giantType === 'zhangjiao') {
        finalDmg *= 2; // Heavenly General Zhang Jiao takes +100% bonus damage from Commander Stratagems
        addFloatingText(`⚡ 약점 공격!`, en.mesh.position, '#fde047');
      }
      en.hp -= finalDmg;
      en.burnTimer = 4.0;
      en.burnDps = finalDmg * 0.22;
      addFloatingText(`🔥-${finalDmg}`, en.mesh.position, '#f97316');

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

  const towerBtn = document.getElementById('tower-mode-btn');
  if (towerBtn) {
    towerBtn.addEventListener('click', () => {
      gameState.isTowerMode = !gameState.isTowerMode;
      if (gameState.isTowerMode) {
        gameState.waveRemaining = 5 + Math.floor(gameState.towerFloor / 2);
        sound.playWarDrum();
        triggerHanjaStamp('銅雀臺', `백층탑 제${gameState.towerFloor}층 도전에 진입합니다!`);
      } else {
        gameState.waveRemaining = 8 + gameState.wave * 3;
        sound.playGong();
        triggerHanjaStamp('中原復歸', `일반 전장으로 복귀합니다.`);
      }
      gameState.enemies.forEach(e => scene.remove(e.mesh));
      gameState.enemies = [];
      updateSynergyAndHUD();
      saveGameSafe();
    });
  }

  document.getElementById('speed-btn').addEventListener('click', (e) => {
    gameState.gameSpeed = gameState.gameSpeed === 1 ? 2 : 1;
    e.currentTarget.textContent = `⏩ ${gameState.gameSpeed}x`;
  });

  document.getElementById('cam-btn').addEventListener('click', (e) => {
    gameState.camMode = (gameState.camMode + 1) % CAM_PRESETS.length;


  });

  document.getElementById('sound-btn').addEventListener('click', (e) => {
    sound.enabled = !sound.enabled;
    e.currentTarget.textContent = sound.enabled ? '🔊' : '🔇';
  });


  document.getElementById('deck-btn').addEventListener('click', () => {
    sound.init();
    openDeckModal();
  });

  document.getElementById('close-deck-btn').addEventListener('click', closeDeckModal);

  document.getElementById('tab-deck-btn').addEventListener('click', (e) => {
    e.target.classList.add('active');
    document.getElementById('tab-gov-btn').classList.remove('active');
    document.getElementById('deck-tab').classList.remove('hidden');
    document.getElementById('gov-tab').classList.add('hidden');
  });

  document.getElementById('tab-gov-btn').addEventListener('click', (e) => {
    e.target.classList.add('active');
    document.getElementById('tab-deck-btn').classList.remove('active');
    document.getElementById('gov-tab').classList.remove('hidden');
    document.getElementById('deck-tab').classList.add('hidden');
  });

  document.getElementById('codex-btn').addEventListener('click', openCodexModal);
  document.getElementById('close-codex-btn').addEventListener('click', () => {
    document.getElementById('codex-modal').classList.add('hidden');
  });

  const restartBtn = document.getElementById('restart-btn');
  if (restartBtn) restartBtn.addEventListener('click', () => {
    document.getElementById('gameover-modal').classList.add('hidden');
    gameState.hp = 100;
    gameState.isGameOver = false;
    gameState.inLobby = true;
    refreshMainMenuUI();
    document.getElementById('main-menu-overlay').classList.remove('hidden');
    document.body.classList.remove('in-battle');
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
  if (gameState.activeDeck.length < 28) {
      const f = ['shu', 'wei', 'wu', 'qun'];
      for(let t=1; t<=7; t++) {
        for(let i=0; i<4; i++) {
          const idx = (t-1)*4 + i;
          if(!gameState.activeDeck[idx]) {
            const h = HERO_DB.find(x => x.faction === f[i] && x.tier === t && gameState.unlockedIds.includes(x.id));
            gameState.activeDeck[idx] = h ? h.id : DEFAULT_ORIGINAL_28[idx];
          }
        }
      }
  }
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
/* ==========================================================================
   AUTHENTIC ORIENTAL SUMI-E (수묵담채화) 3D ATMOSPHERE & THEME TOGGLE
   ========================================================================== */
(function initSumiEEngine() {
  const SUMI_THEME_KEY = 'tk_merge_sumi_theme_mode'; // 'light' (백선지) or 'dark' (현묵지)

  function getSavedSumiMode() {
    try {
      return localStorage.getItem(SUMI_THEME_KEY) || 'light';
    } catch (e) {
      return 'light';
    }
  }

  function applySumiTheme(mode) {
    const isLight = (mode === 'light');
    document.body.classList.toggle('sumi-light-scroll', isLight);

    try {
      localStorage.setItem(SUMI_THEME_KEY, mode);
    } catch (e) {}

    if (typeof THREE !== 'undefined' && typeof scene !== 'undefined' && scene) {
      const skyHex = isLight ? 0xdfd5c3 : 0x141210;
      const fogDensity = isLight ? 0.016 : 0.022;
      scene.background = new THREE.Color(skyHex);
      scene.fog = new THREE.FogExp2(skyHex, fogDensity);
    }

    const btn = document.getElementById('sumi-theme-toggle-btn');
    if (btn) {
      btn.textContent = isLight ? '🖌️ 백선지(白宣)' : '🖌️ 현묵지(玄墨)';
    }
  }

  function spawnInkSplatter3D(x, y, z) {
    if (typeof THREE === 'undefined' || typeof scene === 'undefined' || !scene) return;
    const droplets = [];
    const count = 14;
    for (let i = 0; i < count; i++) {
      const isCinnabar = (i % 4 === 0);
      const geo = new THREE.SphereGeometry(isCinnabar ? 0.11 : 0.14, 6, 6);
      const mat = new THREE.MeshBasicMaterial({
        color: isCinnabar ? 0xb3241a : 0x141210,
        transparent: true,
        opacity: 0.9
      });
      const mesh = new THREE.Mesh(geo, mat);
      mesh.position.set(x || 0, y || 1.2, z || 0);
      const angle = (Math.PI * 2 * i) / count + (Math.random() * 0.4);
      const speed = 2.2 + Math.random() * 3.0;
      mesh.userData.vx = Math.cos(angle) * speed;
      mesh.userData.vy = 2.0 + Math.random() * 2.5;
      mesh.userData.vz = Math.sin(angle) * speed;
      scene.add(mesh);
      droplets.push(mesh);
    }

    let elapsed = 0;
    function animateInk() {
      elapsed += 0.03;
      droplets.forEach(d => {
        d.position.x += d.userData.vx * 0.03;
        d.position.y += d.userData.vy * 0.03;
        d.position.z += d.userData.vz * 0.03;
        d.userData.vy -= 9.8 * 0.03;
        d.material.opacity = Math.max(0, 1 - elapsed * 1.4);
      });
      if (elapsed < 0.75) {
        requestAnimationFrame(animateInk);
      } else {
        droplets.forEach(d => scene.remove(d));
      }
    }
    requestAnimationFrame(animateInk);
  }

  function mountSumiToggleButton() {
    if (document.getElementById('sumi-theme-toggle-btn')) return;
    const targetBar = document.getElementById('v4-endgame-bar') || document.querySelector('.hud-controls') || document.body;
    const btn = document.createElement('button');
    btn.id = 'sumi-theme-toggle-btn';
    btn.className = 'sumi-theme-toggle-btn';
    btn.onclick = function () {
      const next = document.body.classList.contains('sumi-light-scroll') ? 'dark' : 'light';
      applySumiTheme(next);
      spawnInkSplatter3D(0, 1.5, 0);
    };
    targetBar.appendChild(btn);
    applySumiTheme(getSavedSumiMode());
  }

  window.SumiEngine = {
    applySumiTheme: applySumiTheme,
    spawnInkSplatter3D: spawnInkSplatter3D
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', mountSumiToggleButton);
  } else {
    mountSumiToggleButton();
  }
})();


// ================= PATCH v5.0: CONQUEST, LIEUTENANT & TRUE AWAKENING ENGINE =================
(function() {
  const V5_PROVINCE_DB = [
    { id: 'sili', name: '사주 (司州·낙양)', bossName: '태사 동탁', reqPower: 1500, clearPrestige: 50, buffDesc: '전군 공격력 +10%', buffType: 'atkPct', val: 0.10 },
    { id: 'yuzhou', name: '예주 (豫州·허창)', bossName: '패왕 조조', reqPower: 2800, clearPrestige: 80, buffDesc: '초기 군량미 +30🌾', buffType: 'startGold', val: 30 },
    { id: 'jizhou', name: '기주 (冀州·업성)', bossName: '명문 원소', reqPower: 4200, clearPrestige: 120, buffDesc: '합체 도약 확률 +5%', buffType: 'critMerge', val: 0.05 },
    { id: 'xuzhou', name: '서주 (徐州·하비)', bossName: '무신 여포', reqPower: 6000, clearPrestige: 180, buffDesc: '치명타 피해 +30%', buffType: 'critDmg', val: 0.30 },
    { id: 'jingzhou', name: '형주 (荊州·양양)', bossName: '무성 관우', reqPower: 8500, clearPrestige: 250, buffDesc: '주군 계책 쿨타임 -20%', buffType: 'stratCd', val: 0.20 },
    { id: 'yangzhou', name: '양주 (揚州·건업)', bossName: '미주랑 주유', reqPower: 11500, clearPrestige: 350, buffDesc: '전군 공격 속도 +15%', buffType: 'spdPct', val: 0.15 },
    { id: 'yizhou', name: '익주 (益州·성도)', bossName: '와룡 제갈량', reqPower: 15000, clearPrestige: 500, buffDesc: '인연 시너지 효과 1.5배', buffType: 'bondMult', val: 1.50 },
    { id: 'yongzhou', name: '옹주 (雍州·장안)', bossName: '금마초', reqPower: 20000, clearPrestige: 800, buffDesc: '성벽 최대 내구도 +100', buffType: 'wallHp', val: 100 }
  ];

  const V5_ELITE_SLOTS = [6, 7, 12, 13];
  window.V5_PROVINCE_DB = V5_PROVINCE_DB;

  function ensureV5State() {
    if (typeof gameState === 'undefined') return;
    if (!Array.isArray(gameState.conqueredProvinces)) {
      try {
        const saved = JSON.parse(localStorage.getItem('tk_v5_conquered') || '[]');
        gameState.conqueredProvinces = Array.isArray(saved) ? saved : [];
      } catch (e) { gameState.conqueredProvinces = []; }
    }
    if (!gameState.lieutenants || typeof gameState.lieutenants !== 'object') {
      try {
        const savedL = JSON.parse(localStorage.getItem('tk_v5_lieutenants') || '{}');
        gameState.lieutenants = savedL && typeof savedL === 'object' ? savedL : {};
      } catch (e) { gameState.lieutenants = {}; }
    }
    if (!Array.isArray(gameState.awakenedSlots)) {
      gameState.awakenedSlots = [];
    }
  }

  function saveV5State() {
    if (typeof gameState === 'undefined') return;
    localStorage.setItem('tk_v5_conquered', JSON.stringify(gameState.conqueredProvinces || []));
    localStorage.setItem('tk_v5_lieutenants', JSON.stringify(gameState.lieutenants || {}));
    updateV5Badges();
  }

  function calculateArmyPower() {
    ensureV5State();
    let power = 500;
    if (typeof gameState !== 'undefined') {
      const unlockedCount = Array.isArray(gameState.unlockedIds) ? gameState.unlockedIds.length : 12;
      power += unlockedCount * 65;
      if (Array.isArray(gameState.grid)) {
        gameState.grid.forEach((cell, idx) => {
          if (cell && cell.hero) {
            const tier = cell.hero.tier || 1;
            const stars = cell.stars || 1;
            const awakeMult = (gameState.awakenedSlots && gameState.awakenedSlots.includes(idx)) ? 2.2 : 1.0;
            power += Math.round(tier * 180 * stars * awakeMult);
          }
        });
      }
      power += (gameState.prestige || 0) * 15;
    }
    return power;
  }

  window.getV5BuffMultiplier = function(buffType) {
    ensureV5State();
    let total = 0;
    V5_PROVINCE_DB.forEach(p => {
      if (gameState.conqueredProvinces.includes(p.id) && p.buffType === buffType) {
        total += p.val;
      }
    });
    return total;
  };

  function updateV5Badges() {
    ensureV5State();
    const cBadge = document.getElementById('v5-conquest-badge');
    if (cBadge) cBadge.textContent = (gameState.conqueredProvinces.length) + '/8';
    const lBadge = document.getElementById('v5-lieut-badge');
    if (lBadge) {
      const cnt = V5_ELITE_SLOTS.filter(s => Boolean(gameState.lieutenants[s])).length;
      lBadge.textContent = cnt + '/4';
    }
    const aBadge = document.getElementById('v5-awaken-badge');
    if (aBadge) {
      aBadge.textContent = (gameState.awakenedSlots ? gameState.awakenedSlots.length : 0) + '명';
    }
  }

  let currentV5Tab = 'conquest';

  window.openV5Modal = function(tabName) {
    ensureV5State();
    currentV5Tab = tabName || 'conquest';
    const modal = document.getElementById('v5-conquest-modal');
    if (modal) {
      modal.style.display = 'flex';
      window.switchV5Tab(currentV5Tab);
    }
  };

  window.closeV5Modal = function() {
    const modal = document.getElementById('v5-conquest-modal');
    if (modal) modal.style.display = 'none';
  };

  window.switchV5Tab = function(tabName) {
    currentV5Tab = tabName;
    ['conquest', 'lieutenant', 'awaken'].forEach(t => {
      const btn = document.getElementById('v5-tab-' + t);
      if (btn) btn.classList.toggle('active', t === tabName);
    });
    renderV5ModalBody();
  };

  window.conquerProvinceV5 = function(provId) {
    ensureV5State();
    const prov = V5_PROVINCE_DB.find(p => p.id === provId);
    if (!prov || gameState.conqueredProvinces.includes(provId)) return;
    const power = calculateArmyPower();
    if (power < prov.reqPower) {
      alert('전군 전투력이 부족합니다! (현재: ' + power + ' / 필요: ' + prov.reqPower + ')');
      return;
    }
    gameState.conqueredProvinces.push(provId);
    gameState.prestige = (gameState.prestige || 0) + prov.clearPrestige;
    if (prov.buffType === 'startGold') {
      gameState.gold = (gameState.gold || 0) + prov.val;
    }
    if (prov.buffType === 'wallHp') {
      gameState.maxHp = (gameState.maxHp || 100) + prov.val;
      gameState.hp = Math.min(gameState.maxHp, (gameState.hp || 100) + prov.val);
    }
    saveV5State();
    if (typeof updateUI === 'function') updateUI();
    renderV5ModalBody();
  };

  window.autoAssignLieutenantsV5 = function() {
    ensureV5State();
    const pool = (typeof HERO_DB !== 'undefined' && Array.isArray(HERO_DB)) ? HERO_DB.slice().sort((a,b) => (b.tier||1) - (a.tier||1)) : [];
    V5_ELITE_SLOTS.forEach((slotIdx, i) => {
      if (pool[i]) {
        gameState.lieutenants[slotIdx] = pool[i].id || pool[i].name;
      }
    });
    saveV5State();
    renderV5ModalBody();
  };

  window.assignLieutenantSlotV5 = function(slotIdx, heroKey) {
    ensureV5State();
    if (!heroKey) {
      delete gameState.lieutenants[slotIdx];
    } else {
      gameState.lieutenants[slotIdx] = heroKey;
    }
    saveV5State();
    renderV5ModalBody();
  };

  window.awakenSlotV5 = function(slotIdx) {
    ensureV5State();
    if (!Array.isArray(gameState.grid) || !gameState.grid[slotIdx] || !gameState.grid[slotIdx].hero) return;
    const cell = gameState.grid[slotIdx];
    if ((cell.hero.tier || 1) < 7) return;
    if (gameState.awakenedSlots.includes(slotIdx)) return;
    if ((gameState.gold || 0) < 300 || (gameState.prestige || 0) < 50) {
      alert('진·무쌍 각성에는 군량미 300🌾 및 무공 명성 50🎖이 필요합니다.');
      return;
    }
    gameState.gold -= 300;
    gameState.prestige -= 50;
    gameState.awakenedSlots.push(slotIdx);
    cell.stars = Math.max((cell.stars || 3) + 1, 4);
    if (cell.hero) {
      cell.hero.atk = Math.round((cell.hero.atk || 500) * 2.2);
    }
    saveV5State();
    if (typeof updateUI === 'function') updateUI();
    renderV5ModalBody();
  };

  function renderV5ModalBody() {
    const container = document.getElementById('v5-modal-body');
    if (!container) return;
    ensureV5State();
    const power = calculateArmyPower();

    if (currentV5Tab === 'conquest') {
      let html = `<div style="margin-bottom:12px; padding:10px; background:#2a2019; border-radius:6px; display:flex; justify-content:space-between; align-items:center;">
        <span>⚔ 현재 전군 통합 무력(전투력): <strong style="color:#f0c36d; font-size:16px;">${power.toLocaleString()}</strong></span>
        <span>점령한 주(州): <strong style="color:#66ff99;">${gameState.conqueredProvinces.length} / 8</strong></span>
      </div><div class="v5-grid">`;

      V5_PROVINCE_DB.forEach(p => {
        const done = gameState.conqueredProvinces.includes(p.id);
        const canConquer = !done && power >= p.reqPower;
        html += `<div class="v5-card ${done ? 'conquered' : ''}">
          <div>
            <div style="font-size:16px; font-weight:700; color:#f0c36d;">${p.name}</div>
            <div style="font-size:12px; color:#c2b092; margin-top:4px;">수비장: ${p.bossName} · 권장 전투력: ${p.reqPower.toLocaleString()}</div>
            <div style="font-size:13px; color:#7ce89b; margin-top:6px;">영구 효과: ${p.buffDesc}</div>
            <div style="font-size:12px; color:#ffcc66;">점령 보상: 🎖 +${p.clearPrestige} 명성</div>
          </div>
          <button class="v5-action-btn" ${canConquer ? '' : 'disabled'} onclick="window.conquerProvinceV5('${p.id}')">
            ${done ? '✔ 평정 완료 (영구 적용중)' : (canConquer ? '⚔ 즉시 공성 출격' : '전투력 부족')}
          </button>
        </div>`;
      });
      html += `</div>`;
      container.innerHTML = html;
    } else if (currentV5Tab === 'lieutenant') {
      const heroes = (typeof HERO_DB !== 'undefined' && Array.isArray(HERO_DB)) ? HERO_DB : [];
      let html = `<div style="margin-bottom:12px; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:8px;">
        <span>전장 중앙 4대 핵심 정예석(타일 #7, #8, #13, #14)에 부장을 결속해 화력 +30% 및 연환 협공을 발동합니다.</span>
        <button class="v5-action-btn" onclick="window.autoAssignLieutenantsV5()">⚡ 최고 등급 부장 일괄 책봉</button>
      </div><div class="v5-grid">`;

      V5_ELITE_SLOTS.forEach(slotIdx => {
        const assigned = gameState.lieutenants[slotIdx] || '';
        const mainCell = (Array.isArray(gameState.grid) && gameState.grid[slotIdx]) ? gameState.grid[slotIdx] : null;
        const mainName = (mainCell && mainCell.hero) ? mainCell.hero.name : '배치된 주장 없음';
        let opts = `<option value="">-- 부장 미지정 --</option>`;
        heroes.slice(0, 40).forEach(h => {
          const key = h.id || h.name;
          const sel = (String(assigned) === String(key)) ? 'selected' : '';
          opts += `<option value="${key}" ${sel}>[T${h.tier || 1}] ${h.name}</option>`;
        });
        html += `<div class="v5-card">
          <div>
            <div style="font-weight:700; color:#f0c36d;">🛡 중앙 정예 타일 #${slotIdx + 1}</div>
            <div style="font-size:13px; margin:4px 0;">현재 주장: <strong>${mainName}</strong></div>
            <div style="font-size:12px; color:#7ce89b;">결속 보너스: 주장 공격력 +30% · 25% 확률 연환 협공</div>
          </div>
          <select style="background:#140f0c; color:#f4e8c1; border:1px solid #c89b3c; padding:6px; border-radius:4px;"
                  onchange="window.assignLieutenantSlotV5(${slotIdx}, this.value)">
            ${opts}
          </select>
        </div>`;
      });
      html += `</div>`;
      container.innerHTML = html;
    } else if (currentV5Tab === 'awaken') {
      let html = `<div style="margin-bottom:12px; padding:10px; background:#2a2019; border-radius:6px;">
        전장에 배치된 <strong>Tier 7 무신급 장수</strong>에게 군량미 300🌾와 명성 50🎖을 주입하여 <strong>[★8 진·무쌍 신장]</strong>으로 초월 각성시킵니다. (공격력 2.2배 폭증 & 5타마다 전장 전체 묵룡 참격)
      </div><div class="v5-grid">`;

      let foundT7 = false;
      if (Array.isArray(gameState.grid)) {
        gameState.grid.forEach((cell, idx) => {
          if (cell && cell.hero && (cell.hero.tier || 1) >= 7) {
            foundT7 = true;
            const isAwakened = gameState.awakenedSlots.includes(idx);
            html += `<div class="v5-card ${isAwakened ? 'conquered' : ''}">
              <div>
                <div style="font-size:16px; font-weight:700; color:#f0c36d;">🐉 [타일 #${idx + 1}]${cell.hero.name}</div>
                <div style="font-size:13px; color:#e0cda9; margin-top:4px;">현재 공격력: ${cell.hero.atk || 500} · 성급: ★${cell.stars || 1}</div>
                <div style="font-size:12px; color:#ff9966; margin-top:4px;">소모: 300🌾 군량 + 50🎖 명성</div>
              </div>
              <button class="v5-action-btn" ${isAwakened ? 'disabled' : ''} onclick="window.awakenSlotV5(${idx})">
                ${isAwakened ? '🐉 진·무쌍 각성 완료' : '⚡ 진·무쌍 각성 돌파'}
              </button>
            </div>`;
          }
        });
      }
      if (!foundT7) {
        html += `<div class="v5-card" style="grid-column: 1 / -1; text-align:center; padding:24px;">
          현재 전장 타일에 배치된 <strong>7성(Tier 7) 장수</strong>가 없습니다. 합체를 통해 7성 명장을 소환한 뒤 각성소를 여십시오!
        </div>`;
      }
      html += `</div>`;
      container.innerHTML = html;
    }
  }

  // Periodic Combat Hook for Lieutenant Bonus & Awakened AoE Strike
  setInterval(function() {
    if (typeof gameState === 'undefined' || !Array.isArray(gameState.grid)) return;
    ensureV5State();
    updateV5Badges();

    const provAtkBonus = window.getV5BuffMultiplier('atkPct');
    gameState.grid.forEach((cell, idx) => {
      if (cell && cell.hero) {
        if (!cell._v5BaseAtk) cell._v5BaseAtk = cell.hero.atk || 100;
        const lieutBonus = gameState.lieutenants[idx] ? 0.30 : 0;
        const awakeMult = gameState.awakenedSlots.includes(idx) ? 2.2 : 1.0;
        cell.hero.atk = Math.round(cell._v5BaseAtk * (1 + provAtkBonus + lieutBonus) * awakeMult);
      }
    });

    // Awakened AoE Dragon Slash every tick on active enemies
    if (gameState.awakenedSlots && gameState.awakenedSlots.length > 0 && Array.isArray(gameState.enemies)) {
      gameState.enemies.forEach(en => {
        if (en && typeof en.hp === 'number' && en.hp > 0) {
          en.hp -= 18 * gameState.awakenedSlots.length;
        }
      });
    }
  }, 1500);

  window.addEventListener('DOMContentLoaded', function() {
    setTimeout(updateV5Badges, 600);
  });
})();


// ================= HOTFIX: LOBBY & START BUTTON FAILSAFE RECOVERY =================
(function() {
  function safeInitLobbyAndButtons() {
    try {
      if (typeof loadSaveData === 'function') {
        try { loadSaveData(); } catch (e) { console.warn('Save load recovered:', e); }
      }
      if (typeof updateLobbyUI === 'function') {
        try { updateLobbyUI(); } catch (e) { console.warn('Lobby UI recovered:', e); }
      }
      if (typeof initLobby === 'function') {
        try { initLobby(); } catch (e) { console.warn('initLobby recovered:', e); }
      }

      // Populate blank lobby badges if they are still empty
      const bestEl = document.getElementById('lobby-best-stage') || document.getElementById('best-stage-text');
      if (bestEl && !bestEl.textContent.trim()) bestEl.textContent = '최고 도달: 제1장';
      const presEl = document.getElementById('lobby-prestige') || document.getElementById('prestige-count');
      if (presEl && !presEl.textContent.trim()) presEl.textContent = (typeof gameState !== 'undefined' ? (gameState.prestige || 0) : 0);

      // Force-bind Start / Continue buttons in case earlier bindings failed
      const buttons = Array.from(document.querySelectorAll('button'));
      buttons.forEach(btn => {
        const txt = (btn.textContent || '').trim();
        if (txt.includes('전장 이어하기')) {
          btn.onclick = function(e) {
            e.preventDefault();
            if (typeof startGame === 'function') startGame(true);
            else if (typeof enterBattlefield === 'function') enterBattlefield(true);
            const lobby = document.getElementById('lobby-screen') || document.getElementById('start-screen') || document.querySelector('.lobby-overlay');
            if (lobby) lobby.style.display = 'none';
          };
        } else if (txt.includes('새로운 출진')) {
          btn.onclick = function(e) {
            e.preventDefault();
            if (typeof startGame === 'function') startGame(false);
            else if (typeof enterBattlefield === 'function') enterBattlefield(false);
            const lobby = document.getElementById('lobby-screen') || document.getElementById('start-screen') || document.querySelector('.lobby-overlay');
            if (lobby) lobby.style.display = 'none';
          };
        }
      });
    } catch (err) {
      console.error('Failsafe recovery error:', err);
    }
  }

  if (document.readyState === 'loading') {
    window.addEventListener('DOMContentLoaded', () => setTimeout(safeInitLobbyAndButtons, 150));
  } else {
    setTimeout(safeInitLobbyAndButtons, 150);
  }
})();


// ================= PATCH v6.0: HIGH-DETAIL GRAPHICS & TACTICAL GAMEPLAY ENGINE =================
(function() {
  const V6_FORMATIONS = {
    heyi:     { id: 'heyi', name: '학익진', seal: '鶴翼陣 · 광역포위', atkMult: 1.15, spdMult: 1.10, critAdd: 0.05, splash: 0.25 },
    fengshi:  { id: 'fengshi', name: '봉시진', seal: '鋒矢陣 · 단기극딜', atkMult: 1.55, spdMult: 1.00, critAdd: 0.15, bossBonus: 0.35 },
    yulin:    { id: 'yulin', name: '어린진', seal: '魚鱗陣 · 질풍속공', atkMult: 1.10, spdMult: 1.40, critAdd: 0.25, comboExt: 2.0 },
    fangyuan: { id: 'fangyuan', name: '방원진', seal: '方圓陣 · 철벽수호', atkMult: 0.95, spdMult: 1.00, critAdd: 0.00, wallRegen: 2, slow: 0.30 }
  };

  const V6_WEATHERS = [
    { id: 'clear',    label: '☀ 백주쾌청', tint: '#f4e8c1', fogHex: 0x1a1510, atkMod: 1.10, moraleRate: 1.25 },
    { id: 'firewind', label: '🔥 적벽화풍', tint: '#ff6e40', fogHex: 0x2b120c, atkMod: 1.30, burnDot: 12 },
    { id: 'storm',    label: '⛈ 폭우뇌전', tint: '#4fc3f7', fogHex: 0x0d1b26, atkMod: 1.25, lightningDmg: 45 },
    { id: 'blizzard', label: '❄ 북방설원', tint: '#b3e5fc', fogHex: 0x162229, atkMod: 1.15, enemySlow: 0.25 }
  ];

  const v6State = {
    formation: 'heyi',
    weatherIdx: 0,
    morale: 0,
    musouFever: false,
    feverTimer: 0,
    comboCount: 0,
    comboExpire: 0,
    smartAutoMerge: false,
    hdGraphics: true,
    floatingTexts: [],
    particles: [],
    lightningFlash: 0
  };
  window.v6State = v6State;

  function isLobbyVisible() {
    const overlay = document.getElementById('main-menu-overlay');
    if (overlay) {
      return !overlay.classList.contains('hidden') && getComputedStyle(overlay).display !== 'none';
    }
    return false;
  }

  function syncV6Visibility() {
    const inLobby = isLobbyVisible();
    const dock = document.getElementById('v6-tactical-dock');
    const cvs = document.getElementById('v6-fx-canvas');
    const v5Bar = document.getElementById('v5-hud-bar');
    if (dock) dock.style.display = inLobby ? 'none' : 'flex';
    if (cvs) cvs.style.display = (inLobby || !v6State.hdGraphics) ? 'none' : 'block';
    if (v5Bar) v5Bar.style.display = inLobby ? 'none' : 'flex';
  }

  window. spawnV6FloatingText = function(text, x, y, color, size) {
    if (!v6State.hdGraphics) return;
    v6State.floatingTexts.push({
      text: text,
      x: x || (window.innerWidth * (0.35 + Math.random() * 0.3)),
      y: y || (window.innerHeight * (0.32 + Math.random() * 0.25)),
      vy: -1.4 - Math.random() * 0.8,
      alpha: 1.0,
      color: color || '#ffd54f',
      size: size || 16
    });
    if (v6State.floatingTexts.length > 45) v6State.floatingTexts.shift();
  };

  window.setV6Formation = function(formId) {
    if (!V6_FORMATIONS[formId]) return;
    v6State.formation = formId;
    ['heyi', 'fengshi', 'yulin', 'fangyuan'].forEach(k => {
      const btn = document.getElementById('v6-btn-' + k);
      if (btn) btn.classList.toggle('active', k === formId);
    });
    const f = V6_FORMATIONS[formId];
    window.spawnV6FloatingText('☯ ' + f.seal + ' 전개!', window.innerWidth * 0.5, window.innerHeight * 0.35, '#ffd54f', 22);
    applyV6TacticalMultipliers();
  };

  window.cycleV6Weather = function() {
    v6State.weatherIdx = (v6State.weatherIdx + 1) % V6_WEATHERS.length;
    const w = V6_WEATHERS[v6State.weatherIdx];
    const btn = document.getElementById('v6-weather-btn');
    if (btn) btn.textContent = w.label;
    window.spawnV6FloatingText('천시 변화: ' + w.label, window.innerWidth * 0.5, window.innerHeight * 0.28, w.tint, 20);
    // Update 3D Scene Fog/Ambient if available
    try {
      if (typeof scene !== 'undefined' && scene && scene.fog) {
        scene.fog.color.setHex(w.fogHex);
      }
    } catch (e) {}
  };

  window.toggleV6SmartMerge = function() {
    v6State.smartAutoMerge = !v6State.smartAutoMerge;
    const btn = document.getElementById('v6-smart-merge-btn');
    if (btn) {
      btn.textContent = '🤖 부관합체: ' + (v6State.smartAutoMerge ? 'ON' : 'OFF');
      btn.classList.toggle('on', v6State.smartAutoMerge);
    }
  };

  window.toggleV6HD = function() {
    v6State.hdGraphics = !v6State.hdGraphics;
    const btn = document.getElementById('v6-hd-btn');
    if (btn) btn.classList.toggle('on', v6State.hdGraphics);
    syncV6Visibility();
  };

  window.addV6Morale = function(amount) {
    if (v6State.musouFever) return;
    const w = V6_WEATHERS[v6State.weatherIdx];
    const rate = w.moraleRate || 1.0;
    v6State.morale = Math.min(100, Math.round(v6State.morale + amount * rate));
    updateV6MoraleUI();
  };

  function updateV6MoraleUI() {
    const fill = document.getElementById('v6-morale-fill');
    const lbl = document.getElementById('v6-morale-label');
    const btn = document.getElementById('v6-fever-btn');
    if (fill) fill.style.width = v6State.morale + '%';
    if (lbl) lbl.textContent = v6State.musouFever ? '🐉 무쌍폭주 중!' : ('🔥 사기 ' + v6State.morale + '%');
    if (btn) {
      btn.disabled = !v6State.musouFever && v6State.morale < 100;
      btn.classList.toggle('on', v6State.morale >= 100 || v6State.musouFever);
    }
  }

  window.triggerV6MusouFever = function() {
    if (v6State.musouFever || v6State.morale < 100) return;
    v6State.musouFever = true;
    v6State.feverTimer = 10;
    const vig = document.getElementById('v6-fever-vignette');
    if (vig) vig.style.display = 'block';
    window.spawnV6FloatingText('🐉 全軍 無雙暴走! (10초간 화력·공속 폭증)', window.innerWidth * 0.5, window.innerHeight * 0.3, '#ffeb3b', 26);
    applyV6TacticalMultipliers();
    updateV6MoraleUI();
  };

  function registerV6KillCombo() {
    const now = Date.now();
    const ext = (v6State.formation === 'yulin') ? 7000 : 4000;
    if (now < v6State.comboExpire) {
      v6State.comboCount++;
    } else {
      v6State.comboCount = 1;
    }
    v6State.comboExpire = now + ext;
    window.addV6Morale(4);

    const banner = document.getElementById('v6-combo-banner');
    const cntEl = document.getElementById('v6-combo-count');
    const titEl = document.getElementById('v6-combo-title');
    if (banner && cntEl && titEl && !isLobbyVisible()) {
      banner.style.display = 'block';
      cntEl.textContent = v6State.comboCount + '連斬';
      if (v6State.comboCount >= 100) titEl.textContent = '🐉 천하무쌍(天下無雙)! 화력 +25%';
      else if (v6State.comboCount >= 50) titEl.textContent = '⚡ 일기당천(一騎當千)! 화력 +15%';
      else if (v6State.comboCount >= 15) titEl.textContent = '🔥 파죽지세(破竹之勢)! 화력 +8%';
      else titEl.textContent = '⚔ 무쌍 격파!';
    }
  }

  // Upgrade 3D Hero Meshes with Procedural Halo Rings & Floating Orbs if Three.js is active
  function enhance3DHeroMeshes() {
    if (!v6State.hdGraphics || typeof THREE === 'undefined' || typeof gameState === 'undefined' || !Array.isArray(gameState.grid)) return;
    const factionColors = { shu: 0x2ecc71, wei: 0x3498db, wu: 0xe74c3c, qun: 0x9b59b6 };

    gameState.grid.forEach((cell) => {
      if (!cell || !cell.hero || !cell.mesh) return;
      const mesh = cell.mesh;
      if (!mesh.userData) mesh.userData = {};
      const tier = cell.hero.tier || 1;
      const fac = cell.hero.faction || 'shu';
      const col = factionColors[fac] || 0xf5c542;

      if (!mesh.userData.v6AuraRing || mesh.userData.v6AuraTier !== tier) {
        if (mesh.userData.v6AuraRing) {
          try { mesh.remove(mesh.userData.v6AuraRing); } catch (e) {}
        }
        try {
          const ringGeo = new THREE.RingGeometry(0.55 + tier * 0.05, 0.72 + tier * 0.06, 24);
          const ringMat = new THREE.MeshBasicMaterial({
            color: tier >= 6 ? 0xffd700 : col,
            side: THREE.DoubleSide,
            transparent: true,
            opacity: tier >= 5 ? 0.75 : 0.42
          });
          const ringMesh = new THREE.Mesh(ringGeo, ringMat);
          ringMesh.rotation.x = -Math.PI / 2;
          ringMesh.position.y = 0.06;
          mesh.add(ringMesh);
          mesh.userData.v6AuraRing = ringMesh;
          mesh.userData.v6AuraTier = tier;
        } catch (e) {}
      }
      if (mesh.userData.v6AuraRing) {
        mesh.userData.v6AuraRing.rotation.z += 0.04;
      }
    });
  }

  function applyV6TacticalMultipliers() {
    if (typeof gameState === 'undefined' || !Array.isArray(gameState.grid)) return;
    const form = V6_FORMATIONS[v6State.formation] || V6_FORMATIONS.heyi;
    const weath = V6_WEATHERS[v6State.weatherIdx] || V6_WEATHERS[0];
    const feverAtk = v6State.musouFever ? 1.50 : 1.0;
    const comboBonus = v6State.comboCount >= 100 ? 1.25 : (v6State.comboCount >= 50 ? 1.15 : (v6State.comboCount >= 15 ? 1.08 : 1.0));

    gameState.grid.forEach((cell) => {
      if (cell && cell.hero) {
        if (!cell._v6CleanAtk) cell._v6CleanAtk = cell.hero.atk || 100;
        const rawAtk = cell._v6CleanAtk * form.atkMult * weath.atkMod * feverAtk * comboBonus;
        // Clamp max multiplier to prevent overflow
        cell.hero.atk = Math.round(Math.min(cell._v6CleanAtk * 25, rawAtk));
      }
    });
  }

  // Smart Adjutant Auto-Merge (preserves Tier 6 & Tier 7 heroes, merges Tier 1~5 safely)
  function runSmartAdjutantMerge() {
    if (!v6State.smartAutoMerge || isLobbyVisible() || typeof gameState === 'undefined' || !Array.isArray(gameState.grid)) return;
    for (let i = 0; i < gameState.grid.length; i++) {
      const a = gameState.grid[i];
      if (!a || !a.hero || (a.hero.tier || 1) >= 6) continue;
      for (let j = i + 1; j < gameState.grid.length; j++) {
        const b = gameState.grid[j];
        if (!b || !b.hero) continue;
        if (a.hero.id === b.hero.id && (a.hero.tier || 1) === (b.hero.tier || 1) && (a.stars || 1) === (b.stars || 1)) {
          if (typeof mergeCells === 'function') {
            try { mergeCells(i, j); window.addV6Morale(6); return; } catch (e) {}
          } else if (typeof autoMerge === 'function') {
            try { autoMerge(); window.addV6Morale(6); return; } catch (e) {}
          }
        }
      }
    }
  }

  // 2D High-Detail Weather & Floating Combat Text Renderer
  const canvas = document.getElementById('v6-fx-canvas');
  const ctx = canvas ? canvas.getContext('2d') : null;

  function resizeV6Canvas() {
    if (!canvas) return;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  window.addEventListener('resize', resizeV6Canvas);
  resizeV6Canvas();

  function initWeatherParticles() {
    v6State.particles = [];
    for (let i = 0; i < 55; i++) {
      v6State.particles.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() - 0.5) * 1.5,
        vy: 1.2 + Math.random() * 2.5,
        size: 1.5 + Math.random() * 2.5
      });
    }
  }
  initWeatherParticles();

  function renderV6GraphicsLoop() {
    requestAnimationFrame(renderV6GraphicsLoop);
    if (!ctx || !v6State.hdGraphics || isLobbyVisible()) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const w = V6_WEATHERS[v6State.weatherIdx];

    // Lightning flash overlay during storm
    if (v6State.lightningFlash > 0) {
      ctx.fillStyle = `rgba(200, 235, 255, ${v6State.lightningFlash})`; ctx.fillRect(0, 0, canvas.width, canvas.height); v6State.lightningFlash -= 0.04; }  // Weather particles
    v6State.particles.forEach(p => {
        if (w.id === 'clear') {
            p.x += Math.sin(Date.now() * 0.001 + p.y) * 0.4; p.y += p.vy * 0.45; ctx.fillStyle = 'rgba(245, 215, 120, 0.45)'; ctx.beginPath(); ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2); ctx.fill();
        } else if (w.id === 'firewind') {
            p.x += 1.2; p.y -= p.vy * 0.9; ctx.fillStyle = 'rgba(255, 105, 45, 0.65)'; ctx.beginPath(); ctx.arc(p.x, p.y, p.size * 1.1, 0, Math.PI * 2); ctx.fill();
        } else if (w.id === 'storm') {
            p.x -= 1.8; p.y += p.vy * 3.2; ctx.strokeStyle = 'rgba(130, 205, 255, 0.52)'; ctx.lineWidth = 1.3; ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(p.x - 4, p.y + 12); ctx.stroke();
        } else if (w.id === 'blizzard') {
            p.x -= 1.4; p.y += p.vy * 0.85; ctx.fillStyle = 'rgba(225, 245, 255, 0.68)'; ctx.beginPath(); ctx.arc(p.x, p.y, p.size * 1.15, 0, Math.PI * 2); ctx.fill();
        }
        if (p.y > canvas.height + 10) { p.y = -10; p.x = Math.random() * canvas.width; }
        if (p.y < -10) { p.y = canvas.height + 10; p.x = Math.random() * canvas.width; }
        if (p.x > canvas.width + 10) p.x = -10;
        if (p.x < -10) p.x = canvas.width + 10;
    });  // Floating Combat Damage & Seal Callouts
    for (let i = v6State.floatingTexts.length - 1; i >= 0; i--) {
        const ft = v6State.floatingTexts[i];
        ft.y += ft.vy;
        ft.alpha -= 0.018;
        if (ft.alpha <= 0) {
            v6State.floatingTexts.splice(i, 1);
            continue;
        }
        ctx.save();
        ctx.font = `900 ${ft.size}px "Noto Serif KR", serif`;
      ctx.fillStyle = ft.color;
      ctx.globalAlpha = Math.max(0, ft.alpha);
      ctx.shadowColor = 'rgba(0, 0, 0, 0.9)';
      ctx.shadowBlur = 5;
      ctx.textAlign = 'center';
      ctx.fillText(ft.text, ft.x, ft.y);
      ctx.restore();
    }
  }
  requestAnimationFrame(renderV6GraphicsLoop);

  // Tactical Combat Tick (1s interval)
  let lastEnemyCount = 0;
  setInterval(function() {
    syncV6Visibility();
    if (isLobbyVisible() || typeof gameState === 'undefined') return;

    enhance3DHeroMeshes();
    applyV6TacticalMultipliers();
    runSmartAdjutantMerge();

    // Detect enemy kills & trigger combat damage visuals
    if (Array.isArray(gameState.enemies)) {
      const aliveEnemies = gameState.enemies.filter(e => e && e.hp > 0);
      if (aliveEnemies.length < lastEnemyCount) {
        const killed = lastEnemyCount - aliveEnemies.length;
        for (let k = 0; k < killed; k++) registerV6KillCombo();
      }
      lastEnemyCount = aliveEnemies.length;

      // Apply Weather & Formation Combat Effects on active enemies
      const w = V6_WEATHERS[v6State.weatherIdx];
      const f = V6_FORMATIONS[v6State.formation];

      aliveEnemies.forEach((en, idx) => {
        if (w.id === 'firewind' && w.burnDot) {
          en.hp -= w.burnDot;
        }
        if (w.id === 'storm' && idx === 0 && Math.random() < 0.35) {
          en.hp -= w.lightningDmg;
          v6State.lightningFlash = 0.35;
          window.spawnV6FloatingText('⚡ 뇌전 격파 -' + w.lightningDmg, window.innerWidth * (0.4 + Math.random() * 0.2), window.innerHeight * 0.38, '#80d8ff', 17);
        }
        if (idx === 0 && Math.random() < (0.35 + (f.critAdd || 0) + (v6State.musouFever ? 0.5 : 0))) {
          const critVal = Math.round(85 * f.atkMult * (v6State.musouFever ? 1.8 : 1.0));
          en.hp -= critVal;
          window.spawnV6FloatingText('💥 치명타 -' + critVal, window.innerWidth * (0.38 + Math.random() * 0.24), window.innerHeight * (0.32 + Math.random() * 0.16), '#ff5252', 18);
        }
      });
    }

    // Fangyuan Formation Wall HP Regen
    if (v6State.formation === 'fangyuan' && typeof gameState.hp === 'number') {
      const maxHp = gameState.maxHp || 100;
      gameState.hp = Math.min(maxHp, gameState.hp + 2);
    }

    // Musou Fever Countdown
    if (v6State.musouFever) {
      v6State.feverTimer--;
      if (v6State.feverTimer <= 0) {
        v6State.musouFever = false;
        v6State.morale = 0;
        const vig = document.getElementById('v6-fever-vignette');
        if (vig) vig.style.display = 'none';
      }
      updateV6MoraleUI();
    }

    // Expire Combo Banner
    if (v6State.comboCount > 0 && Date.now() > v6State.comboExpire) {
      v6State.comboCount = 0;
      const banner = document.getElementById('v6-combo-banner');
      if (banner) banner.style.display = 'none';
    }
  }, 1000);
})();


// ================= PATCH v7.0: 120-HERO BESPOKE ILLUSTRATION & 3D APPEARANCE ENGINE =================
(function() {
  const HERO_PRESETS = {
    '관우': { skin: '#c85a3c', helm: 'green_hood', beard: 'long5', eye: 'phoenix', weapon: 'guandao', mount: 'red_hare', cape: '#1e7e34', label: '녹포·청룡언월도·오绺장수' },
    '장비': { skin: '#8d553a', helm: 'iron_band', beard: 'wild', eye: 'fierce', weapon: 'serpent_spear', mount: 'black_steed', cape: '#1b4f28', label: '환안호수·장팔사모·흑갑' },
    '조운': { skin: '#f3d8c2', helm: 'silver_helm', beard: 'none', eye: 'heroic', weapon: 'silver_spear', mount: 'white_steed', cape: '#e8f4f8', label: '백마은창·청강검·백은갑' },
    '제갈량': { skin: '#f5dec9', helm: 'wolong_crown', beard: 'scholar', eye: 'wise', weapon: 'feather_fan', mount: 'chariot', cape: '#d8e8e0', label: '와룡관·백우선·학창의' },
    '유비': { skin: '#f0d4be', helm: 'emperor_crown', beard: 'imperial', eye: 'benevolent', weapon: 'twin_swords', mount: 'white_steed', cape: '#2ecc71', label: '제왕면류관·자웅일대검' },
    '마초': { skin: '#f2d6bd', helm: 'lion_helm', beard: 'none', eye: 'fierce', weapon: 'tiger_spear', mount: 'white_steed', cape: '#ffffff', label: '백수사자투구·호두찬금창' },
    '황충': { skin: '#dfb99b', helm: 'gold_helm', beard: 'white_long', eye: 'sharp', weapon: 'great_bow', mount: 'red_steed', cape: '#27ae60', label: '백발노익장·만석신궁' },
    '위연': { skin: '#a35c3f', helm: 'horned_helm', beard: 'goatee', eye: 'fierce', weapon: 'double_glaive', mount: 'black_steed', cape: '#196f3d', label: '반골뿔투구·쌍날대도' },
    '방통': { skin: '#bca085', helm: 'scholar_hood', beard: 'goatee', eye: 'wise', weapon: 'fire_staff', mount: 'none', cape: '#1e8449', label: '봉추두건·연환화계장' },
    '강유': { skin: '#f0d2b8', helm: 'silver_plume', beard: 'none', eye: 'heroic', weapon: 'lightning_spear', mount: 'white_steed', cape: '#2ecc71', label: '기린금갑·녹침창' },
    '조조': { skin: '#ead0b8', helm: 'emperor_crown', beard: 'imperial', eye: 'sharp', weapon: 'heaven_sword', mount: 'black_steed', cape: '#1f4e78', label: '위왕금관·의천검·절영' },
    '하후돈': { skin: '#d8b496', helm: 'wei_plume', beard: 'short_rough', eye: 'eyepatch_L', weapon: 'heavy_blade', mount: 'black_steed', cape: '#2874a6', label: '좌안안대·칠성단도·창룡갑' },
    '하후연': { skin: '#dfc0a4', helm: 'wei_helm', beard: 'mustache', eye: 'sharp', weapon: 'great_bow', mount: 'white_steed', cape: '#2e86c1', label: '질풍신궁·하후금갑' },
    '장료': { skin: '#e2c4a8', helm: 'gold_wings', beard: 'mustache', eye: 'heroic', weapon: 'guandao', mount: 'black_steed', cape: '#21618c', label: '비익금투구·황룡구렴도' },
    '전위': { skin: '#96583e', helm: 'iron_band', beard: 'wild', eye: 'fierce', weapon: 'twin_axes', mount: 'none', cape: '#1b4f72', label: '악래철갑·쌍철극' },
    '허저': { skin: '#b97755', helm: 'tiger_hood', beard: 'wild', eye: 'fierce', weapon: 'heavy_mace', mount: 'none', cape: '#2874a6', label: '호치백호투구·구환대도' },
    '사마의': { skin: '#e8ded5', helm: 'wolong_crown', beard: 'scholar', eye: 'cunning', weapon: 'feather_fan', mount: 'chariot', cape: '#154360', label: '낭고지상·흑우선·현수포' },
    '곽가': { skin: '#f5e1d0', helm: 'scholar_hood', beard: 'none', eye: 'wise', weapon: 'jade_scroll', mount: 'none', cape: '#3498db', label: '귀재옥관·병법죽간' },
    '손권': { skin: '#eccfb4', helm: 'emperor_crown', beard: 'jade_beard', eye: 'heroic', weapon: 'heaven_sword', mount: 'red_steed', cape: '#b03a2e', label: '벽안자수염·고정도·오왕관' },
    '손책': { skin: '#efd2b8', helm: 'lion_helm', beard: 'none', eye: 'fierce', weapon: 'tiger_spear', mount: 'red_steed', cape: '#e74c3c', label: '소패왕적금투구·패왕창' },
    '손견': { skin: '#d9b18e', helm: 'tiger_hood', beard: 'short_rough', eye: 'fierce', weapon: 'heavy_blade', mount: 'red_steed', cape: '#922b21', label: '강동맹호투구·고정도' },
    '주유': { skin: '#f7e2ce', helm: 'crimson_cap', beard: 'none', eye: 'wise', weapon: 'heaven_sword', mount: 'white_steed', cape: '#cb4335', label: '미주랑적관·적벽화검' },
    '육손': { skin: '#f5dfca', helm: 'scholar_hood', beard: 'none', eye: 'heroic', weapon: 'twin_swords', mount: 'white_steed', cape: '#e74c3c', label: '유생화공관·이릉화검' },
    '감녕': { skin: '#c58762', helm: 'bell_band', beard: 'goatee', eye: 'fierce', weapon: 'chain_flail', mount: 'none', cape: '#c0392b', label: '방울비단두건·쌍철쇄' },
    '태사자': { skin: '#e0be9f', helm: 'gold_wings', beard: 'mustache', eye: 'sharp', weapon: 'twin_axes', mount: 'red_steed', cape: '#a93226', label: '강동신궁·수극쌍창' },
    '손상향': { skin: '#fce8df', helm: 'floral_crown', beard: 'female', eye: 'female', weapon: 'great_bow', mount: 'white_steed', cape: '#ff6b6b', label: '궁요희화관·일월쌍륜궁' },
    '대교': { skin: '#fdf0e8', helm: 'floral_crown', beard: 'female', eye: 'female', weapon: 'feather_fan', mount: 'none', cape: '#f1948a', label: '강동절색·금비녀·비단선' },
    '소교': { skin: '#fdf0e8', helm: 'floral_crown', beard: 'female', eye: 'female', weapon: 'feather_fan', mount: 'none', cape: '#ec7063', label: '국색천향·옥비녀·홍매선' },
    '여포': { skin: '#e5be9e', helm: 'lu_bu_crown', beard: 'none', eye: 'fierce', weapon: 'sky_halberd', mount: 'red_hare', cape: '#8e44ad', label: '삼차자금관·장꿩깃·방천화극·적토마' },
    '초선': { skin: '#fdf0ea', helm: 'floral_crown', beard: 'female', eye: 'female', weapon: 'twin_swords', mount: 'none', cape: '#d2b4de', label: '모란금비녀·폐월홍포·쌍무검' },
    '장각': { skin: '#dfd3c3', helm: 'yellow_talisman', beard: 'white_long', eye: 'cunning', weapon: 'fire_staff', mount: 'none', cape: '#f1c40f', label: '태평황건부적·구절요술장' },
    '동탁': { skin: '#b57c62', helm: 'emperor_crown', beard: 'wild', eye: 'cunning', weapon: 'heavy_blade', mount: 'black_steed', cape: '#5b2c6f', label: '폭군흑금관·칠성보도' },
    '원소': { skin: '#f2dac4', helm: 'gold_wings', beard: 'imperial', eye: 'heroic', weapon: 'heaven_sword', mount: 'white_steed', cape: '#f4d03f', label: '사세삼공황금투구·사왕검' },
    '맹획': { skin: '#9e5b3b', helm: 'nanman_horns', beard: 'wild', eye: 'fierce', weapon: 'heavy_mace', mount: 'elephant', cape: '#d35400', label: '남만왕뿔투구·전투코끼리' },
    '축융': { skin: '#c47d56', helm: 'nanman_horns', beard: 'female', eye: 'female', weapon: 'twin_swords', mount: 'elephant', cape: '#e67e22', label: '불의여신깃털관·비도·전상' }
  };

  const HELM_LIST = ['wei_helm', 'silver_helm', 'gold_wings', 'iron_band', 'scholar_hood', 'tiger_hood', 'horned_helm', 'green_hood', 'crimson_cap', 'wolong_crown'];
  const BEARD_LIST = ['none', 'mustache', 'goatee', 'short_rough', 'scholar', 'long5', 'wild', 'imperial'];
  const WEAPON_LIST = ['guandao', 'serpent_spear', 'silver_spear', 'sky_halberd', 'heaven_sword', 'heavy_blade', 'twin_axes', 'feather_fan', 'great_bow', 'fire_staff'];
  const SKIN_LIST = ['#f2d6bd', '#e5be9e', '#d8b292', '#c88f68', '#ebcfb6', '#dca884'];

  function hashStr(str) {
    let h = 2166136261;
    for (let i = 0; i < str.length; i++) {
      h ^= str.charCodeAt(i);
      h = Math.imul(h, 16777619);
    }
    return Math.abs(h);
  }

  function cleanHeroBaseName(rawName) {
    if (!rawName) return '무명장수';
    const parts = String(rawName).trim().split(/\s+/);
    return parts[parts.length - 1];
  }

  window.getHeroVisualDNA = function(hero) {
    if (!hero) hero = { name: '장수', faction: 'shu', tier: 1 };
    const baseName = cleanHeroBaseName(hero.name);
    const fac = hero.faction || 'shu';
    const tier = hero.tier || 1;
    const h = hashStr(baseName + '_' + fac);

    const facColors = {
      shu: { main: '#1e7e34', accent: '#66ff99', ink: '#12381b', kor: '촉(蜀)' },
      wei: { main: '#1f5a8c', accent: '#66ccff', ink: '#102a42', kor: '위(魏)' },
      wu:  { main: '#9c2720', accent: '#ff8a80', ink: '#47120f', kor: '오(吳)' },
      qun: { main: '#6c3483', accent: '#e0b0ff', ink: '#2e1538', kor: '군(群)' }
    };
    const fCol = facColors[fac] || facColors.shu;

    if (HERO_PRESETS[baseName]) {
      const p = HERO_PRESETS[baseName];
      return {
        baseName: baseName,
        fullName: hero.name || baseName,
        sealChar: baseName.charAt(0),
        faction: fac,
        facColor: fCol,
        tier: tier,
        skin: p.skin,
        helm: p.helm,
        beard: p.beard,
        eye: p.eye,
        weapon: p.weapon,
        mount: p.mount,
        cape: p.cape,
        label: p.label,
        seed: h
      };
    }

    const isFemale = /교|희|녀|부인|초선|상향|축융|채문희|장춘화|황월영|관은병|여령기/.test(baseName);
    const isScholar = /량|통|욱|가|유|의|숙|소|각|흠|윤|식|정|지의|법정|마속|미축|손건|간옹|진궁|이유|가후|정욱|순유|장소|장굉|고옹|제갈근|보즐|육항/.test(baseName);

    const helm = isFemale ? 'floral_crown' : (isScholar ? (h % 2 === 0 ? 'wolong_crown' : 'scholar_hood') : HELM_LIST[h % HELM_LIST.length]);
    const beard = isFemale ? 'female' : (isScholar ? 'scholar' : BEARD_LIST[(h >> 3) % BEARD_LIST.length]);
    const weapon = isScholar ? (h % 2 === 0 ? 'feather_fan' : 'fire_staff') : WEAPON_LIST[(h >> 5) % WEAPON_LIST.length];
    const mount = tier >= 6 ? (h % 2 === 0 ? 'white_steed' : 'red_steed') : (tier >= 4 && h % 3 === 0 ? 'black_steed' : 'none');

    const helmKor = {
      floral_crown: '화관비녀', wolong_crown: '학창관모', scholar_hood: '책사두건',
      wei_helm: '철혈투구', silver_helm: '백은투구', gold_wings: '비익금관',
      iron_band: '호법두건', tiger_hood: '맹호투구', horned_helm: '쌍각투구',
      green_hood: '청록두건', crimson_cap: '적염관모'
    }[helm] || '전술투구';

    const weapKor = {
      guandao: '언월대도', serpent_spear: '장창', silver_spear: '은창',
      sky_halberd: '방천극', heaven_sword: '보검', heavy_blade: '참마도',
      twin_axes: '쌍철극', feather_fan: '백우선', great_bow: '철태궁', fire_staff: '병법장'
    }[weapon] || '신병';

    return {
      baseName: baseName,
      fullName: hero.name || baseName,
      sealChar: baseName.charAt(0),
      faction: fac,
      facColor: fCol,
      tier: tier,
      skin: isFemale ? '#fceae3' : SKIN_LIST[h % SKIN_LIST.length],
      helm: helm,
      beard: beard,
      eye: isFemale ? 'female' : (h % 4 === 0 ? 'fierce' : 'heroic'),
      weapon: weapon,
      mount: mount,
      cape: fCol.main,
      label: helmKor + '·' + weapKor + (mount !== 'none' ? '·기승' : ''),
      seed: h
    };
  };

  // Memoized 2D Ink-Wash Portrait Generator (DataURL)
  const portraitCache = {};

  window.getHeroPortraitDataURL = function(hero) {
    if (!hero) return '';
    const dna = window.getHeroVisualDNA(hero);
    const cacheKey = dna.baseName + '_' + dna.faction + '_' + dna.tier;
    if (portraitCache[cacheKey]) return portraitCache[cacheKey];

    const cvs = document.createElement('canvas');
    cvs.width = 160;
    cvs.height = 200;
    const ctx = cvs.getContext('2d');

    // 1. Xuan Paper (한지 화선지) Background Gradient
    const bgGrad = ctx.createLinearGradient(0, 0, 0, 200);
    bgGrad.addColorStop(0, '#efe4cc');
    bgGrad.addColorStop(0.65, '#dccab0');
    bgGrad.addColorStop(1, '#b89f7d');
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, 160, 200);

    // 2. Faction Ink Halo (수묵 후광) & Mountain Silhouette
    ctx.save();
    ctx.fillStyle = dna.facColor.ink;
    ctx.globalAlpha = 0.22;
    ctx.beginPath();
    ctx.arc(80, 92, 58, 0, Math.PI * 2);
    ctx.fill();
    if (dna.tier >= 6) {
      ctx.strokeStyle = '#d4af37';
      ctx.globalAlpha = 0.65;
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.arc(80, 92, 62, 0, Math.PI * 2);
      ctx.stroke();
    }
    ctx.restore();

    // 3. Background Signature Weapon Silhouette
    ctx.save();
    ctx.strokeStyle = '#2c221b';
    ctx.lineWidth = 5;
    if (dna.weapon === 'guandao' || dna.weapon === 'sky_halberd' || dna.weapon === 'serpent_spear' || dna.weapon === 'silver_spear') {
      ctx.beginPath();
      ctx.moveTo(22, 185);
      ctx.lineTo(138, 20);
      ctx.stroke();
      ctx.fillStyle = dna.weapon === 'sky_halberd' ? '#d4af37' : '#85929e';
      ctx.beginPath();
      ctx.moveTo(138, 20);
      ctx.quadraticCurveTo(155, 42, 120, 56);
      ctx.lineTo(126, 36);
      ctx.closePath();
      ctx.fill();
    } else if (dna.weapon === 'great_bow') {
      ctx.strokeStyle = '#6e4720';
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.arc(95, 95, 56, -Math.PI * 0.45, Math.PI * 0.45);
      ctx.stroke();
    }
    ctx.restore();

    // 4. Armor & Cape Shoulders
    ctx.save();
    ctx.fillStyle = dna.cape;
    ctx.beginPath();
    ctx.moveTo(20, 195);
    ctx.quadraticCurveTo(80, 122, 140, 195);
    ctx.closePath();
    ctx.fill();

    // Armor trim
    ctx.strokeStyle = dna.tier >= 5 ? '#f5c542' : '#7f6a4d';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(42, 145);
    ctx.lineTo(80, 175);
    ctx.lineTo(118, 145);
    ctx.stroke();
    ctx.restore();

    // 5. Head & Face Contour
    ctx.save();
    ctx.fillStyle = dna.skin;
    ctx.strokeStyle = '#2b1d14';
    ctx.lineWidth = 2.2;
    ctx.beginPath();
    ctx.ellipse(80, 96, dna.beard === 'female' ? 25 : 28, 33, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();

    // 6. Eyes, Eyebrows & Eyepatch (하후돈 안대 등)
    ctx.fillStyle = '#1f1610';
    if (dna.eye === 'eyepatch_L') {
      // Left eye eyepatch strap
      ctx.strokeStyle = '#111';
      ctx.lineWidth = 3.5;
      ctx.beginPath();
      ctx.moveTo(52, 82);
      ctx.lineTo(108, 96);
      ctx.stroke();
      ctx.fillStyle = '#111';
      ctx.beginPath();
      ctx.arc(67, 92, 8, 0, Math.PI * 2);
      ctx.fill();
      // Right fierce eye
      ctx.fillRect(89, 90, 9, 4);
    } else if (dna.eye === 'female') {
      // Delicate arched brows & rouge cheeks
      ctx.strokeStyle = '#2e1d14';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.quadraticCurveTo(66, 82, 74, 86);
      ctx.moveTo(86, 86);
      ctx.quadraticCurveTo(94, 82, 100, 86);
      ctx.stroke();
      ctx.fillStyle = '#1a110b';
      ctx.beginPath();
      ctx.arc(68, 92, 3.2, 0, Math.PI * 2);
      ctx.arc(92, 92, 3.2, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = 'rgba(225, 85, 85, 0.35)';
      ctx.beginPath();
      ctx.arc(61, 102, 6, 0, Math.PI * 2);
      ctx.arc(99, 102, 6, 0, Math.PI * 2);
      ctx.fill();
      // Red lips
      ctx.fillStyle = '#c0392b';
      ctx.beginPath();
      ctx.arc(80, 114, 4, 0, Math.PI * 2);
      ctx.fill();
    } else {
      // Heroic / Phoenix / Fierce male eyes & brows
      ctx.strokeStyle = '#1a120c';
      ctx.lineWidth = dna.eye === 'fierce' ? 3.5 : 2.5;
      ctx.beginPath();
      ctx.moveTo(58, dna.eye === 'fierce' ? 84 : 87);
      ctx.lineTo(74, 90);
      ctx.moveTo(102, dna.eye === 'fierce' ? 84 : 87);
      ctx.lineTo(86, 90);
      ctx.stroke();
      ctx.fillStyle = '#1a120c';
      ctx.fillRect(63, 91, 8, 3.5);
      ctx.fillRect(89, 91, 8, 3.5);
    }

    // 7. Beard & Mustache Variations
    const beardCol = dna.beard === 'white_long' ? '#e5e8e8' : '#1c1510';
    ctx.fillStyle = beardCol;
    ctx.strokeStyle = beardCol;
    if (dna.beard === 'long5') {
      // Guan Yu's iconic 5-strand long beard
      ctx.lineWidth = 3;
      for (let b = -2; b <= 2; b++) {
        ctx.beginPath();
        ctx.moveTo(80 + b * 5, 114);
        ctx.quadraticCurveTo(80 + b * 8, 152, 80 + b * 6, 184);
        ctx.stroke();
      }
    } else if (dna.beard === 'wild') {
      // Zhang Fei / Dian Wei bristling full beard
      ctx.beginPath();
      for (let a = 0; a <= Math.PI; a += 0.22) {
        const r = 30 + (a % 0.44 === 0 ? 7 : 0);
        const bx = 80 + Math.cos(a) * r;
        const by = 104 + Math.sin(a) * r;
        if (a === 0) ctx.moveTo(bx, by);
        else ctx.lineTo(bx, by);
      }
      ctx.closePath();
      ctx.fill();
    } else if (dna.beard === 'scholar' || dna.beard === 'imperial' || dna.beard === 'jade_beard') {
      if (dna.beard === 'jade_beard') ctx.strokeStyle = '#5c3317';
      ctx.lineWidth = 2.4;
      [-6, 0, 6].forEach(dx => {
        ctx.beginPath();
        ctx.moveTo(80 + dx, 115);
        ctx.quadraticCurveTo(80 + dx * 1.2, 140, 80 + dx, 158);
        ctx.stroke();
      });
    } else if (dna.beard === 'mustache' || dna.beard === 'goatee' || dna.beard === 'short_rough') {
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(66, 112);
      ctx.quadraticCurveTo(80, 108, 94, 112);
      ctx.stroke();
      if (dna.beard !== 'mustache') {
        ctx.fillRect(76, 120, 8, 12);
      }
    }
    ctx.restore();

    // 8. Bespoke Headgear / Helmet / Plumes
    ctx.save();
    if (dna.helm === 'lu_bu_crown') {
      // Lu Bu Golden Crown + Twin Long Pheasant Feathers
      ctx.strokeStyle = '#c0392b';
      ctx.lineWidth = 3.5;
      ctx.beginPath();
      ctx.moveTo(74, 58);
      ctx.quadraticCurveTo(32, 12, 12, 8);
      ctx.moveTo(86, 58);
      ctx.quadraticCurveTo(128, 12, 148, 8);
      ctx.stroke();
      ctx.fillStyle = '#f1c40f';
      ctx.fillRect(58, 54, 44, 16);
    } else if (dna.helm === 'green_hood') {
      ctx.fillStyle = '#196f3d';
      ctx.beginPath();
      ctx.arc(80, 74, 31, Math.PI, 0);
      ctx.lineTo(114, 92);
      ctx.lineTo(46, 92);
      ctx.closePath();
      ctx.fill();
      ctx.strokeStyle = '#d4af37';
      ctx.lineWidth = 2;
      ctx.strokeRect(68, 58, 24, 10);
    } else if (dna.helm === 'wolong_crown' || dna.helm === 'scholar_hood') {
      ctx.fillStyle = '#2c3e50';
      ctx.fillRect(56, 44, 48, 28);
      ctx.strokeStyle = '#d4af37';
      ctx.lineWidth = 2;
      ctx.strokeRect(66, 48, 28, 18);
    } else if (dna.helm === 'emperor_crown') {
      ctx.fillStyle = '#1c1612';
      ctx.fillRect(46, 46, 68, 12);
      ctx.fillStyle = '#f1c40f';
      ctx.fillRect(56, 56, 48, 14);
      // Hanging jade beads
      ctx.strokeStyle = '#f5c542';
      ctx.lineWidth = 1.5;
      for (let x = 50; x <= 110; x += 10) {
        ctx.beginPath();
        ctx.moveTo(x, 58);
        ctx.lineTo(x, 72);
        ctx.stroke();
      }
    } else if (dna.helm === 'yellow_talisman') {
      ctx.fillStyle = '#d4ac0d';
      ctx.fillRect(50, 56, 60, 18);
      ctx.fillStyle = '#c0392b';
      ctx.fillRect(73, 52, 14, 24);
    } else if (dna.helm === 'floral_crown') {
      ctx.fillStyle = '#1a110b';
      ctx.beginPath();
      ctx.arc(80, 76, 30, Math.PI, 0);
      ctx.fill();
      ctx.fillStyle = '#e74c3c';
      ctx.beginPath();
      ctx.arc(62, 58, 8, 0, Math.PI * 2);
      ctx.arc(98, 58, 8, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#f1c40f';
      ctx.beginPath();
      ctx.arc(80, 54, 7, 0, Math.PI * 2);
      ctx.fill();
    } else {
      // Standard armored war helmet + crest
      ctx.fillStyle = dna.helm === 'silver_helm' ? '#bdc3c7' : (dna.helm === 'gold_wings' ? '#d4af37' : '#34495e');
      ctx.beginPath();
      ctx.arc(80, 74, 30, Math.PI, 0);
      ctx.fill();
      ctx.fillStyle = dna.facColor.main;
      ctx.beginPath();
      ctx.moveTo(80, 34);
      ctx.lineTo(68, 56);
      ctx.lineTo(92, 56);
      ctx.closePath();
      ctx.fill();
    }

    // 9. Feather Fan in front for Strategists
    if (dna.weapon === 'feather_fan') {
      ctx.fillStyle = '#f8f9f9';
      ctx.strokeStyle = '#d4af37';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(115, 152, 24, Math.PI * 0.85, Math.PI * 1.95);
      ctx.lineTo(115, 152);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
    }
    ctx.restore();

    // 10. Top-Left Cinnabar Seal Stamp (경면주사 성씨 낙관)
    ctx.save();
    ctx.fillStyle = '#b82921';
    ctx.fillRect(10, 10, 28, 28);
    ctx.strokeStyle = '#f7dc6f';
    ctx.lineWidth = 1.5;
    ctx.strokeRect(12, 12, 24, 24);
    ctx.fillStyle = '#fff8e7';
    ctx.font = '900 17px "Noto Serif KR", serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(dna.sealChar, 24, 24);
    ctx.restore();

    // 11. Bottom Nameplate & Tier Stars
    ctx.fillStyle = 'rgba(18, 13, 10, 0.88)';
    ctx.fillRect(0, 162, 160, 38);
    ctx.strokeStyle = '#c89b3c';
    ctx.lineWidth = 2;
    ctx.strokeRect(1, 1, 158, 198);

    ctx.fillStyle = '#ffd54f';
    ctx.font = '700 10px "Noto Serif KR", serif';
    ctx.textAlign = 'center';
    ctx.fillText('★'.repeat(Math.min(7, dna.tier)), 80, 173);

    ctx.fillStyle = '#ffffff';
    ctx.font = '900 13px "Noto Serif KR", serif';
    ctx.fillText(dna.baseName, 80, 191);

    const url = cvs.toDataURL('image/png');
    portraitCache[cacheKey] = url;
    return url;
  };

  // 3D Individual Mesh Customizer for Three.js Battlefield Units
  window.applyHeroBespoke3DAppearance = function(cell) {
    if (!cell || !cell.hero || !cell.mesh || typeof THREE === 'undefined') return;
    const mesh = cell.mesh;
    if (!mesh.userData) mesh.userData = {};
    const dna = window.getHeroVisualDNA(cell.hero);
    const sigKey = dna.baseName + '_' + dna.tier;
    if (mesh.userData.v7AppearanceId === sigKey) return;

    if (mesh.userData.v7CustomGroup) {
      try { mesh.remove(mesh.userData.v7CustomGroup); } catch (e) {}
    }

    try {
      const grp = new THREE.Group();

      // 1. Bespoke 3D Back Banner (대장군 등깃발 - 4성 이상 또는 주요 명장)
      if (dna.tier >= 4 || HERO_PRESETS[dna.baseName]) {
        const poleGeo = new THREE.CylinderGeometry(0.03, 0.03, 1.55, 6);
        const poleMat = new THREE.MeshBasicMaterial({ color: 0xd4af37 });
        const pole = new THREE.Mesh(poleGeo, poleMat);
        pole.position.set(-0.28, 0.85, -0.25);
        grp.add(pole);

        const flagGeo = new THREE.PlaneGeometry(0.42, 0.55);
        const flagCol = dna.faction === 'shu' ? 0x1e8449 : (dna.faction === 'wei' ? 0x2874a6 : (dna.faction === 'wu' ? 0xb03a2e : 0x7d3c98));
        const flagMat = new THREE.MeshBasicMaterial({ color: flagCol, side: THREE.DoubleSide });
        const flag = new THREE.Mesh(flagGeo, flagMat);
        flag.position.set(-0.08, 1.32, -0.25);
        grp.add(flag);
      }

      // 2. Bespoke 3D Headgear / Plume Attachment
      if (dna.helm === 'lu_bu_crown') {
        const plumeMat = new THREE.MeshBasicMaterial({ color: 0xe74c3c });
        const pGeo = new THREE.CylinderGeometry(0.015, 0.04, 0.85, 6);
        const pL = new THREE.Mesh(pGeo, plumeMat);
        pL.position.set(-0.22, 1.65, -0.1);
        pL.rotation.z = 0.45;
        const pR = new THREE.Mesh(pGeo, plumeMat);
        pR.position.set(0.22, 1.65, -0.1);
        pR.rotation.z = -0.45;
        grp.add(pL);
        grp.add(pR);
      } else if (dna.helm === 'emperor_crown' || dna.helm === 'gold_wings') {
        const crownGeo = new THREE.CylinderGeometry(0.22, 0.18, 0.22, 8);
        const crownMat = new THREE.MeshBasicMaterial({ color: 0xffd700 });
        const crown = new THREE.Mesh(crownGeo, crownMat);
        crown.position.set(0, 1.42, 0);
        grp.add(crown);
      }

      // 3. Bespoke 3D Signature Weapon Attachment
      if (dna.weapon === 'guandao' || dna.weapon === 'sky_halberd') {
        const bladeGeo = new THREE.ConeGeometry(0.18, 0.48, 4);
        const bladeMat = new THREE.MeshBasicMaterial({ color: dna.weapon === 'sky_halberd' ? 0xffd700 : 0x5dade2 });
        const blade = new THREE.Mesh(bladeGeo, bladeMat);
        blade.position.set(0.42, 1.35, 0.18);
        grp.add(blade);
      } else if (dna.weapon === 'feather_fan') {
        const fanGeo = new THREE.CircleGeometry(0.24, 12);
        const fanMat = new THREE.MeshBasicMaterial({ color: 0xffffff, side: THREE.DoubleSide });
        const fan = new THREE.Mesh(fanGeo, fanMat);
        fan.position.set(0.38, 0.95, 0.28);
        grp.add(fan);
      }

      // 4. Bespoke 3D Mount Pedestal Ring (적토마/백마/남만코끼리 식별 조형)
      if (dna.mount !== 'none') {
        const mountColors = { red_hare: 0xd32f2f, red_steed: 0xc0392b, white_steed: 0xf4f6f7, black_steed: 0x2c3e50, elephant: 0x8d6e63, chariot: 0xd4af37 };
        const mGeo = new THREE.TorusGeometry(0.46, 0.06, 8, 20);
        const mMat = new THREE.MeshBasicMaterial({ color: mountColors[dna.mount] || 0xd4af37 });
        const mRing = new THREE.Mesh(mGeo, mMat);
        mRing.rotation.x = Math.PI / 2;
        mRing.position.y = 0.12;
        grp.add(mRing);
      }

      mesh.add(grp);
      mesh.userData.v7CustomGroup = grp;
      mesh.userData.v7AppearanceId = sigKey;
    } catch (e) {}
  };
})();

// ================= PATCH v7.0: BATTLEFIELD PORTRAIT CARD & MODAL AVATAR INJECTOR =================
(function() {
  function isLobbyOpen() {
    const overlay = document.getElementById('main-menu-overlay');
    if (overlay) return !overlay.classList.contains('hidden') && getComputedStyle(overlay).display !== 'none';
    return false;
  }

  function updateSelectedHeroPortraitCard() {
    const card = document.getElementById('v7-hero-portrait-card');
    if (!card) return;
    if (isLobbyOpen() || typeof gameState === 'undefined' || !Array.isArray(gameState.grid)) {
      card.style.display = 'none';
      return;
    }

    // Find currently selected cell or highest-tier active hero on grid
    let targetCell = null;
    if (typeof selectedCellIndex === 'number' && selectedCellIndex >= 0 && gameState.grid[selectedCellIndex] && gameState.grid[selectedCellIndex].hero) {
      targetCell = gameState.grid[selectedCellIndex];
    } else if (typeof gameState.selectedSlot === 'number' && gameState.grid[gameState.selectedSlot] && gameState.grid[gameState.selectedSlot].hero) {
      targetCell = gameState.grid[gameState.selectedSlot];
    } else {
      gameState.grid.forEach(c => {
        if (c && c.hero) {
          if (!targetCell || (c.hero.tier || 1) > (targetCell.hero.tier || 1)) targetCell = c;
        }
      });
    }

    if (!targetCell || !targetCell.hero) {
      card.style.display = 'none';
      return;
    }

    const dna = window.getHeroVisualDNA(targetCell.hero);
    const imgEl = document.getElementById('v7-portrait-img');
    const nameEl = document.getElementById('v7-portrait-name');
    const subEl = document.getElementById('v7-portrait-sub');
    const tagsEl = document.getElementById('v7-portrait-tags');

    if (imgEl) imgEl.src = window.getHeroPortraitDataURL(targetCell.hero);
    if (nameEl) nameEl.textContent = dna.fullName + ' ★' + (targetCell.stars || 1);
    if (subEl) subEl.textContent = dna.facColor.kor + ' · ' + dna.tier + '성 명장 · 공격력 ' + (targetCell.hero.atk || 100);
    if (tagsEl) {
      tagsEl.innerHTML = dna.label.split('·').map(t => `<span class="v7-app-tag">${t}</span>`).join('');
    }
    card.style.display = 'flex';
  }

  setInterval(function() {
    if (typeof gameState !== 'undefined' && Array.isArray(gameState.grid)) {
      gameState.grid.forEach(cell => {
        if (cell && cell.hero) {
          window.applyHeroBespoke3DAppearance(cell);
        }
      });
    }
    updateSelectedHeroPortraitCard();
  }, 900);
})();
