with open("wiki.js", "r") as f:
    content = f.read()

import re

c1 = re.search(r'<<<<<<< HEAD\n\s*const raw = localStorage\.getItem\(SAVE_KEY\);\n\s*if \(!raw\).*?\n\s*const data = JSON\.parse\(raw\);\n=======\n\s*const rawStr = localStorage\.getItem\(SAVE_KEY\);\n\s*if \(!rawStr\).*?\n\s*const data = JSON\.parse\(rawStr\);\n>>>>>>> origin/main', content, re.DOTALL)

if c1:
    repl = """
    const rawStr = localStorage.getItem(SAVE_KEY);
    if (!rawStr) return { unlockedSet: new Set(defaultIds), fame: 30, bestWave: 1, towerFloor: 1, heroUpgrades: {}, factionTech: { shu: 0, wei: 0, wu: 0, qun: 0 }, raw: null };
    const data = JSON.parse(rawStr);
"""
    content = content[:c1.start()] + repl + content[c1.end():]


c2 = re.search(r'<<<<<<< HEAD\n\s*bestWave:.*?\n\s*towerFloor:.*?\n=======\n>>>>>>> origin/main', content, re.DOTALL)
if c2:
    repl = """
      towerFloor: Number(data.towerFloor) || 1,
"""
    content = content[:c2.start()] + repl + content[c2.end():]


c3 = re.search(r'<<<<<<< HEAD\n\s*return { unlockedSet:.*?\n=======\n\s*return { unlockedSet:.*?\n>>>>>>> origin/main', content, re.DOTALL)
if c3:
    repl = """
    return { unlockedSet: new Set(defaultIds), fame: 30, bestWave: 1, towerFloor: 1, heroUpgrades: {}, factionTech: { shu: 0, wei: 0, wu: 0, qun: 0 }, raw: null };
"""
    content = content[:c3.start()] + repl + content[c3.end():]


with open("wiki.js", "w") as f:
    f.write(content)
