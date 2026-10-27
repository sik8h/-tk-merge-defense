with open("game.js", "r") as f:
    content = f.read()

# Fix the wave clear block
import re

wave_clear_conflict = re.search(r'<<<<<<< HEAD\n\s*if \(gameState.isTowerMode\) \{.*?\n\s*\} else \{.*?\n\s*\}\n=======\n(.*?)\n>>>>>>> origin/main', content, re.DOTALL)
if wave_clear_conflict:
    # We want to keep both!
    replacement = """
    if (gameState.isTowerMode) {
      const reward = 10 + gameState.towerFloor * 2;
      gameState.fame += reward;
      gameState.towerFloor++;
      gameState.waveRemaining = 5 + Math.floor(gameState.towerFloor / 2);
      gameState.gold += 50 + gameState.towerFloor * 5;
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
"""
    content = content[:wave_clear_conflict.start()] + replacement + content[wave_clear_conflict.end():]

# Fix the combat math conflict
combat_math = re.search(r'<<<<<<< HEAD\n(.*?)=======\n(.*?)>>>>>>> origin/main', content, re.DOTALL)
if combat_math:
    # We want to keep the new logic but adapt to what's there
    replacement = """
        const rankAtkBonus = 1 + (0.15 * upgrades.rankLv);
        const totalCodexMult = codexMult + globalRankBonus;
        const dmg = cell.data.atk * rankAtkBonus * starMult * terrainAtk * towerAtkBonus * wuMod * gameState.buffAtk * syn.weiMult * totalCodexMult * upgradeMult * factionTechBonus * (isCrit ? 2.2 : 1.0);
        const applyBurn = syn.wuBurn || (tInfo && tInfo.type === 'fire') || (gameState.isTowerMode && gameState.towerFloor % 4 === 0 && cell.data.faction === 'wu');
"""
    content = content[:combat_math.start()] + replacement + content[combat_math.end():]

with open("game.js", "w") as f:
    f.write(content)
