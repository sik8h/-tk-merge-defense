const WIKI_HEROS = [
  { id: 'shu_1', tier: 1, faction: '촉', color: '#10B981', name: '백이병', hanja: '白', stamp: '百毦精兵', atk: 24 },
  { id: 'wei_1', tier: 1, faction: '위', color: '#3B82F6', name: '청주병', hanja: '青', stamp: '青州強兵', atk: 26 },
  { id: 'wu_1',  tier: 1, faction: '오', color: '#F97316', name: '강동수군', hanja: '水', stamp: '江東水軍', atk: 22 },
  { id: 'qun_1', tier: 1, faction: '군웅', color: '#EF4444', name: '황건병', hanja: '黃', stamp: '蒼天已死', atk: 28 },
  { id: 'shu_2', tier: 2, faction: '촉', color: '#10B981', name: '관평', hanja: '平', stamp: '忠義少將', atk: 55 },
  { id: 'wei_2', tier: 2, faction: '위', color: '#3B82F6', name: '악진', hanja: '樂', stamp: '先登陷陣', atk: 58 },
  { id: 'wu_2',  tier: 2, faction: '오', color: '#F97316', name: '주태', hanja: '泰', stamp: '全身刀痕', atk: 54 },
  { id: 'qun_2', tier: 2, faction: '군웅', color: '#EF4444', name: '화웅', hanja: '華', stamp: '汜水猛將', atk: 65 },
  { id: 'shu_3', tier: 3, faction: '촉', color: '#10B981', name: '황충', hanja: '黃', stamp: '百步穿楊', atk: 120 },
  { id: 'wei_3', tier: 3, faction: '위', color: '#3B82F6', name: '서황', hanja: '徐', stamp: '周亞夫風', atk: 135 },
  { id: 'wu_3',  tier: 3, faction: '오', color: '#F97316', name: '감녕', hanja: '甘', stamp: '錦帆遊俠', atk: 125 },
  { id: 'qun_3', tier: 3, faction: '군웅', color: '#EF4444', name: '초선', hanja: '貂', stamp: '閉月連環', atk: 115 },
  { id: 'shu_4', tier: 4, faction: '촉', color: '#10B981', name: '조운', hanja: '趙', stamp: '一身은膽', atk: 260 },
  { id: 'wei_4', tier: 4, faction: '위', color: '#3B82F6', name: '하후돈', hanja: '夏', stamp: '拔矢啖睛', atk: 285 },
  { id: 'wu_4',  tier: 4, faction: '오', color: '#F97316', name: '손상향', hanja: '香', stamp: '弓腰姬君', atk: 250 },
  { id: 'qun_4', tier: 4, faction: '군웅', color: '#EF4444', name: '맹획', hanja: '孟', stamp: '南蠻獸王', atk: 310 },
  { id: 'shu_5', tier: 5, faction: '촉', color: '#10B981', name: '장비', hanja: '張', stamp: '萬夫不當', atk: 560 },
  { id: 'wei_5', tier: 5, faction: '위', color: '#3B82F6', name: '장료', hanja: '遼', stamp: '威震逍遙', atk: 590 },
  { id: 'wu_5',  tier: 5, faction: '오', color: '#F97316', name: '육손', hanja: '陸', stamp: '火燒連營', atk: 540 },
  { id: 'qun_5', tier: 5, faction: '군웅', color: '#EF4444', name: '장각', hanja: '角', stamp: '黃天當立', atk: 620 },
  { id: 'shu_6', tier: 6, faction: '촉', color: '#10B981', name: '관우', hanja: '關', stamp: '義薄雲天', atk: 1250 },
  { id: 'wei_6', tier: 6, faction: '위', color: '#3B82F6', name: '사마의', hanja: '司', stamp: '塚虎奇謀', atk: 1320 },
  { id: 'wu_6',  tier: 6, faction: '오', color: '#F97316', name: '주유', hanja: '周', stamp: '赤壁業火', atk: 1200 },
  { id: 'qun_6', tier: 6, faction: '군웅', color: '#EF4444', name: '동탁', hanja: '董', stamp: '暴虐魔王', atk: 1400 },
  { id: 'shu_7', tier: 7, faction: '촉', color: '#10B981', name: '제갈량', hanja: '諸', stamp: '臥龍出世', atk: 2900 },
  { id: 'wei_7', tier: 7, faction: '위', color: '#3B82F6', name: '무제 조조', hanja: '曹', stamp: '唯才是擧', atk: 3100 },
  { id: 'wu_7',  tier: 7, faction: '오', color: '#F97316', name: '대제 손권', hanja: '孫', stamp: '江東猛虎', atk: 2850 },
  { id: 'qun_7', tier: 7, faction: '군웅', color: '#EF4444', name: '무신 여포', hanja: '呂', stamp: '天下無雙', atk: 3600 }
];

function getUnlockedSet() {
  try {
    const raw = localStorage.getItem('TK_ARGON_SAVE_V4');
    if (!raw) return new Set(['shu_1', 'wei_1', 'wu_1', 'qun_1']);
    const parsed = JSON.parse(raw);
    return new Set(parsed.unlockedIds || []);
  } catch (e) {
    return new Set(['shu_1', 'wei_1', 'wu_1', 'qun_1']);
  }
}

function renderWiki() {
  const hash = location.hash || '#/tree';
  const main = document.getElementById('wiki-main');
  const unlocked = getUnlockedSet();
  document.getElementById('sync-badge').textContent = `📖 도감 동기화: ${unlocked.size}/28 (+${unlocked.size * 2}%)`;

  if (hash.startsWith('#/audio')) {
    main.innerHTML = `
      <h1>🥁 Zero-Voice 국악·전장 타악 신디사이저 & 한자 낙관</h1>
      <p>본 게임은 어색한 성우/TTS 기계음을 100% 배제(Zero-Voice Policy)하고, 순수 Web Audio 수학 공식과 전서체 한자 낙관(Stamp) 임팩트로 전장의 위엄을 전달합니다.</p>
      <h2>1. 절차적 사운드 합성 수식</h2>
      <table>
        <tr><th>사운드 구분</th><th>Web Audio 수식 명세</th><th>발동 시점</th></tr>
        <tr><td>전장 대북 (War Drum)</td><td>68Hz → 24Hz 지수 주파수 하강 사인파</td><td>장수 모집, 낙관 타격, 보스 출현</td></tr>
        <tr><td>청동 징 (Battle Gong)</td><td>[210, 296.1, 405.3, 560.7]Hz 비정수 금속 배음</td><td>상위 장수 승급, 태학 연구, 화공</td></tr>
        <tr><td>5음계 고쟁/가야금</td><td>궁·상·각·치·우 5음계 탄현 시퀀서</td><td>전투 중 실시간 자동 연주</td></tr>
      </table>`;
  } else if (hash.startsWith('#/siege')) {
    main.innerHTML = `
      <h1>🏹 호로관 성루 3D 공성 병기 & 목우유마</h1>
      <table>
        <tr><th>병기 명칭</th><th>위치 및 역할</th><th>비용 및 성장</th></tr>
        <tr><td>🏹 제갈연노탑</td><td>좌측 성루 배치 / 1.5초마다 다중 표적 관통 사격</td><td>초기 80🌾 (레벨당 +60🌾)</td></tr>
        <tr><td>☄️ 벽력거(발석차)</td><td>우측 성루 배치 / 3.8초마다 고화력 화염 바위 투척</td><td>초기 100🌾 (레벨당 +75🌾)</td></tr>
        <tr><td>🐂 황금 목우유마</td><td>25초마다 성벽 앞 도로 횡단 / 터치 시 대량 군량미 획득</td><td>즉시 보너스 군량미 지급</td></tr>
      </table>`;
  } else if (hash.startsWith('#/db')) {
    const q = (document.getElementById('wiki-search').value || '').trim();
    const list = WIKI_HEROS.filter(h => !q || h.name.includes(q) || h.hanja.includes(q) || h.stamp.includes(q));
    main.innerHTML = `<h1>🗂️ 삼국지 28인 명장 DB & 사자성어 낙관</h1>
      <div class="hero-grid">${list.map(h => `
        <div class="hero-card ${unlocked.has(h.id) ? 'unlocked' : ''}">
          <div class="hanja-badge" style="color:${h.color}">[${h.hanja}]</div>
          <div><strong>T${h.tier} ${h.name}</strong> (${h.faction})</div>
          <div style="font-size:12px;color:#fbbf24;margin:4px 0;">낙관: ${h.stamp}</div>
          <div style="font-size:11px;color:#94a3b8">기본 공격력: ${h.atk}</div>
          <div style="font-size:10px;margin-top:4px;">${unlocked.has(h.id) ? '✅ 해금 완료' : '🔒 미해금'}</div>
        </div>`).join('')}</div>`;
  } else {
    main.innerHTML = `
      <h1>📖 삼국지 3D 머지 디펜스 - 전술 위키</h1>
      <h2>1. 세력 계승 합성 (Faction Inheritance Merge)</h2>
      <table>
        <tr><th>합성 조건</th><th>결과 세력 확률</th><th>전술적 활용</th></tr>
        <tr><td>동일 세력 + 동일 Tier 합성</td><td><strong>100% 같은 세력</strong> 상위 Tier 승급</td><td>원하는 세력 신화 장수(관우·제갈량·여포) 확정 저격</td></tr>
        <tr><td>타 세력 + 동일 Tier 합성</td><td>두 재료 세력 중 <strong>50 : 50</strong> 확률 승급</td><td>진영 포화 해소 및 유연한 티어업</td></tr>
      </table>
      <h2>2. 4대 세력 시너지 (3인 이상 배치 시 자동 발동)</h2>
      <table>
        <tr><th>세력</th><th>발동 효과</th></tr>
        <tr><td>🟢 촉(蜀)</td><td>전군 공격속도 +30% 상승</td></tr>
        <tr><td>🔵 위(魏)</td><td>전군 공격력 및 사거리 +25% 상승</td></tr>
        <tr><td>🔴 오(吳)</td><td>공격 적중 시 3초간 화염 지속 피해(Burn DoT) 부여</td></tr>
        <tr><td>🟣 군웅(群)</td><td>치명타 확률 +22% 증가 (치명타 피해 2.2배)</td></tr>
      </table>`;
  }
}

window.addEventListener('hashchange', renderWiki);
document.getElementById('wiki-search').addEventListener('input', () => {
  location.hash = '#/db';
  renderWiki();
});
window.addEventListener('DOMContentLoaded', renderWiki);
