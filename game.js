/**
 * Three Kingdoms Merge Defense 2.5D (삼국지 머지 & 관문 로그라이크 디펜스)
 * game.js - High-End WebGL / Canvas Engine
 */

/* ==========================================================================
   1. HERO_CONFIG & SOUND_CONFIG (Asset Replacement Ready)
   ========================================================================== */

const HERO_CONFIG = {
    1: {
        tier: 1,
        name: "의용병",
        faction: "군웅",
        atk: 15,
        attackSpeed: 1.1,
        range: 220,
        attackType: "single",
        color: "#4AE3B5",
        shape: "triangle",
        spritePath: null,
        soundPath: null,
        desc: "기본 단발 사격을 수행하는 의용병"
    },
    2: {
        tier: 2,
        name: "정예 창병",
        faction: "위",
        atk: 32,
        attackSpeed: 1.6,
        range: 250,
        attackType: "rapid",
        color: "#3B82F6",
        shape: "square",
        spritePath: null,
        soundPath: null,
        desc: "빠른 2연타 공격을 퍼붓는 창병"
    },
    3: {
        tier: 3,
        name: "황충",
        faction: "촉",
        atk: 75,
        attackSpeed: 1.0,
        range: 350,
        attackType: "pierce",
        color: "#F59E0B",
        shape: "pentagon",
        spritePath: null,
        soundPath: null,
        desc: "황금빛 바람 잔상이 남는 관통 신궁 화살"
    },
    4: {
        tier: 4,
        name: "조운",
        faction: "촉",
        atk: 160,
        attackSpeed: 2.6,
        range: 280,
        attackType: "rapid_spear",
        color: "#06B6D4",
        shape: "hexagon",
        spritePath: null,
        soundPath: null,
        desc: "타격 지점에 창격 섬광이 연속 교차하는 초고속 창 연타"
    },
    5: {
        tier: 5,
        name: "관우",
        faction: "촉",
        atk: 380,
        attackSpeed: 0.9,
        range: 320,
        attackType: "aoe",
        color: "#10B981",
        shape: "crescent",
        spritePath: null,
        soundPath: null,
        desc: "청룡언월도의 초록색 거대한 검기 파동 광역 타격"
    },
    6: {
        tier: 6,
        name: "제갈량",
        faction: "촉",
        atk: 850,
        attackSpeed: 0.8,
        range: 380,
        attackType: "slow_aoe",
        color: "#8B5CF6",
        shape: "star",
        spritePath: null,
        soundPath: null,
        desc: "팔진도 홀로그램 진법과 하늘에서 내리꽂히는 체인 벼락"
    },
    7: {
        tier: 7,
        name: "무신 여포",
        faction: "군웅",
        atk: 2200,
        attackSpeed: 1.2,
        range: 999, // Full screen range
        attackType: "musou",
        color: "#EF4444",
        shape: "musou_star",
        spritePath: null,
        soundPath: null,
        desc: "천하무쌍! 카메라 쉐이크 + 진홍색 충격파 링 광역 폭발"
    }
};

const SOUND_CONFIG = {
    enabled: true,
    paths: {
        bow: null,
        spear: null,
        merge: null,
        lubu: null,
        boss: null,
        hit: null,
        fire: null
    }
};

/* ==========================================================================
   2. Advanced Web Audio API Multi-Layer Synthesizer
   ========================================================================== */

class SoundEngine {
    constructor() {
        this.ctx = null;
        this.initialized = false;
        this.audioCache = {};
    }

    init() {
        if (this.initialized) return;
        try {
            const AudioCtx = window.AudioContext || window.webkitAudioContext;
            this.ctx = new AudioCtx();
            this.initialized = true;
        } catch (e) {
            console.warn("Web Audio API not supported", e);
        }
    }

    createNoiseBuffer(duration = 0.5) {
        if (!this.ctx) return null;
        const bufferSize = this.ctx.sampleRate * duration;
        const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
        const output = buffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) {
            output[i] = Math.random() * 2 - 1;
        }
        return buffer;
    }

    playSound(type) {
        if (!SOUND_CONFIG.enabled) return;
        if (!this.initialized) this.init();
        if (!this.ctx) return;
        if (this.ctx.state === 'suspended') {
            this.ctx.resume();
        }

        if (SOUND_CONFIG.paths[type]) {
            this.playFileSound(SOUND_CONFIG.paths[type]);
            return;
        }

        const t = this.ctx.currentTime;

        if (type === 'bow') {
            // Bowstring release: Sine sweep + filtered noise whirr
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            osc.type = 'sine';
            osc.frequency.setValueAtTime(520, t);
            osc.frequency.exponentialRampToValueAtTime(130, t + 0.12);
            gain.gain.setValueAtTime(0.25, t);
            gain.gain.exponentialRampToValueAtTime(0.01, t + 0.12);
            osc.connect(gain);
            gain.connect(this.ctx.destination);
            osc.start(t);
            osc.stop(t + 0.12);
        } else if (type === 'spear') {
            // Metallic spear strike: Triangle + Square transient
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            osc.type = 'triangle';
            osc.frequency.setValueAtTime(850, t);
            osc.frequency.exponentialRampToValueAtTime(220, t + 0.08);
            gain.gain.setValueAtTime(0.3, t);
            gain.gain.exponentialRampToValueAtTime(0.01, t + 0.08);
            osc.connect(gain);
            gain.connect(this.ctx.destination);
            osc.start(t);
            osc.stop(t + 0.08);
        } else if (type === 'merge') {
            // Synthesis major chord arpeggio
            const freqs = [523.25, 659.25, 783.99, 1046.50];
            freqs.forEach((f, index) => {
                const osc = this.ctx.createOscillator();
                const gain = this.ctx.createGain();
                osc.type = 'sine';
                osc.frequency.setValueAtTime(f, t + index * 0.04);
                gain.gain.setValueAtTime(0.2, t + index * 0.04);
                gain.gain.exponentialRampToValueAtTime(0.001, t + index * 0.04 + 0.22);
                osc.connect(gain);
                gain.connect(this.ctx.destination);
                osc.start(t + index * 0.04);
                osc.stop(t + index * 0.04 + 0.22);
            });
        } else if (type === 'lubu') {
            // War gong + deep rumble
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            osc.type = 'sawtooth';
            osc.frequency.setValueAtTime(160, t);
            osc.frequency.exponentialRampToValueAtTime(30, t + 0.8);
            gain.gain.setValueAtTime(0.45, t);
            gain.gain.exponentialRampToValueAtTime(0.001, t + 0.8);
            osc.connect(gain);
            gain.connect(this.ctx.destination);
            osc.start(t);
            osc.stop(t + 0.8);
        } else if (type === 'hit') {
            // Impact noise
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            osc.type = 'square';
            osc.frequency.setValueAtTime(140, t);
            osc.frequency.exponentialRampToValueAtTime(45, t + 0.06);
            gain.gain.setValueAtTime(0.12, t);
            gain.gain.exponentialRampToValueAtTime(0.01, t + 0.06);
            osc.connect(gain);
            gain.connect(this.ctx.destination);
            osc.start(t);
            osc.stop(t + 0.06);
        } else if (type === 'boss') {
            // War horn / War drum
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            osc.type = 'sawtooth';
            osc.frequency.setValueAtTime(200, t);
            osc.frequency.linearRampToValueAtTime(320, t + 0.35);
            gain.gain.setValueAtTime(0.4, t);
            gain.gain.exponentialRampToValueAtTime(0.01, t + 0.6);
            osc.connect(gain);
            gain.connect(this.ctx.destination);
            osc.start(t);
            osc.stop(t + 0.6);
        } else if (type === 'fire') {
            // Firestorm explosion: Low-pass filtered noise
            const noise = this.createNoiseBuffer(0.8);
            if (noise) {
                const src = this.ctx.createBufferSource();
                src.buffer = noise;
                const filter = this.ctx.createBiquadFilter();
                filter.type = 'lowpass';
                filter.frequency.setValueAtTime(800, t);
                filter.frequency.exponentialRampToValueAtTime(100, t + 0.8);

                const gain = this.ctx.createGain();
                gain.gain.setValueAtTime(0.5, t);
                gain.gain.exponentialRampToValueAtTime(0.01, t + 0.8);

                src.connect(filter);
                filter.connect(gain);
                gain.connect(this.ctx.destination);
                src.start(t);
            }
        }
    }

    playFileSound(path) {
        if (!this.audioCache[path]) {
            this.audioCache[path] = new Audio(path);
        }
        const audio = this.audioCache[path].cloneNode();
        audio.play().catch(e => console.warn("Audio play blocked", e));
    }
}

const audioEngine = new SoundEngine();

/* ==========================================================================
   3. Sprite & Geometry Fallback Canvas Renderer
   ========================================================================== */

const imageCache = {};

function drawHeroVisual(ctx, x, y, radius, tierConfig, auraTimer = 0) {
    if (tierConfig.spritePath) {
        if (!imageCache[tierConfig.spritePath]) {
            const img = new Image();
            img.src = tierConfig.spritePath;
            imageCache[tierConfig.spritePath] = img;
        }
        const img = imageCache[tierConfig.spritePath];
        if (img.complete && img.naturalWidth !== 0) {
            ctx.drawImage(img, x - radius, y - radius, radius * 2, radius * 2);
            return;
        }
    }

    ctx.save();
    ctx.translate(x, y);

    // Neon Glow & Musou Outer Halo
    if (tierConfig.tier >= 5 || tierConfig.shape === 'musou_star') {
        const glowRadius = radius + 8 + Math.sin(auraTimer * 6) * 4;
        const grad = ctx.createRadialGradient(0, 0, radius * 0.4, 0, 0, glowRadius);
        grad.addColorStop(0, tierConfig.color);
        grad.addColorStop(1, 'transparent');
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(0, 0, glowRadius, 0, Math.PI * 2);
        ctx.fill();
    }

    ctx.shadowColor = tierConfig.color;
    ctx.shadowBlur = 12;
    ctx.fillStyle = tierConfig.color;
    ctx.strokeStyle = "#ffffff";
    ctx.lineWidth = 2;

    const shape = tierConfig.shape;
    ctx.beginPath();

    if (shape === "triangle") {
        ctx.moveTo(0, -radius);
        ctx.lineTo(radius * 0.866, radius * 0.5);
        ctx.lineTo(-radius * 0.866, radius * 0.5);
        ctx.closePath();
    } else if (shape === "square") {
        const side = radius * 1.4;
        ctx.rect(-side / 2, -side / 2, side, side);
    } else if (shape === "pentagon") {
        drawPolygon(ctx, 0, 0, radius, 5);
    } else if (shape === "hexagon") {
        drawPolygon(ctx, 0, 0, radius, 6);
    } else if (shape === "crescent") {
        ctx.arc(0, 0, radius, 0.2 * Math.PI, 1.8 * Math.PI, false);
        ctx.arc(radius * 0.4, 0, radius * 0.8, 1.6 * Math.PI, 0.4 * Math.PI, true);
        ctx.closePath();
    } else if (shape === "star" || shape === "musou_star") {
        drawStar(ctx, 0, 0, shape === "musou_star" ? 8 : 5, radius, radius * 0.5);
    } else {
        ctx.arc(0, 0, radius, 0, Math.PI * 2);
    }

    ctx.fill();
    ctx.stroke();

    ctx.shadowBlur = 0;
    ctx.fillStyle = "#ffffff";
    ctx.font = "bold " + Math.round(radius * 0.5) + "px sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(tierConfig.name, 0, 1);

    // Tier badge
    ctx.fillStyle = "#0f172a";
    ctx.beginPath();
    ctx.arc(radius * 0.7, -radius * 0.7, radius * 0.35, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = tierConfig.color;
    ctx.lineWidth = 1.5;
    ctx.stroke();

    ctx.fillStyle = "#FFD700";
    ctx.font = "bold " + Math.round(radius * 0.35) + "px sans-serif";
    ctx.fillText("T" + tierConfig.tier, radius * 0.7, -radius * 0.7 + 1);

    ctx.restore();
}

function drawPolygon(ctx, x, y, radius, sides) {
    const angle = (Math.PI * 2) / sides;
    ctx.moveTo(x + radius * Math.sin(0), y - radius * Math.cos(0));
    for (let i = 1; i < sides; i++) {
        ctx.lineTo(x + radius * Math.sin(i * angle), y - radius * Math.cos(i * angle));
    }
    ctx.closePath();
}

function drawStar(ctx, cx, cy, spikes, outerRadius, innerRadius) {
    let rot = (Math.PI / 2) * 3;
    let x = cx;
    let y = cy;
    const step = Math.PI / spikes;

    ctx.moveTo(cx, cy - outerRadius);
    for (let i = 0; i < spikes; i++) {
        x = cx + Math.cos(rot) * outerRadius;
        y = cy + Math.sin(rot) * outerRadius;
        ctx.lineTo(x, y);
        rot += step;

        x = cx + Math.cos(rot) * innerRadius;
        y = cy + Math.sin(rot) * innerRadius;
        ctx.lineTo(x, y);
        rot += step;
    }
    ctx.lineTo(cx, cy - outerRadius);
    ctx.closePath();
}

/* ==========================================================================
   4. Game State & Global Variables
   ========================================================================== */

const COLS = 5;
const ROWS = 4;

const gameState = {
    gold: 100,
    gateHp: 100,
    maxGateHp: 100,
    kills: 0,
    wave: 1,
    recruitCost: 20,
    upgradeLevel: 1,
    upgradeCost: 30,
    atkBonusPercent: 0,
    goldMultiplier: 1.0,
    aspdBonusPercent: 0,
    skillCooldown: 0,
    paused: false,
    gameOver: false,
    perspectiveView: false,
    grid: Array(ROWS * COLS).fill(null),
    enemies: [],
    projectiles: [],
    particles: [],
    floatingTexts: [],
    shockwaves: [],
    draggedItem: null,
    hoveredHero: null,
    waveInProgress: false,
    enemiesToSpawn: 0,
    spawnTimer: 0,
    auraTimer: 0,
    shakeTimer: 0,
    shakeIntensity: 0,
    synergies: {
        shu: false,
        wei: false,
        qun: false
    }
};

const SKILL_MAX_COOLDOWN = 20;

// Parallax Background Stars & Embers
const bgStars = [];
for (let i = 0; i < 35; i++) {
    bgStars.push({
        x: Math.random(),
        y: Math.random(),
        size: Math.random() * 2 + 0.5,
        alpha: Math.random()
    });
}

const bgEmbers = [];
for (let i = 0; i < 18; i++) {
    bgEmbers.push({
        x: Math.random(),
        y: Math.random(),
        speed: Math.random() * 30 + 15,
        size: Math.random() * 2.5 + 1
    });
}

const CHAPTERS = [
    { wave: 1, name: "제1장 황건적의 난", enemyName: "황건적", hp: 45, speed: 60, gold: 12, isBoss: false },
    { wave: 2, name: "제2장 황건적 정예", enemyName: "황건적 장수", hp: 90, speed: 65, gold: 15, isBoss: false },
    { wave: 3, name: "제3장 서량 기병대", enemyName: "서량 기병", hp: 180, speed: 75, gold: 20, isBoss: false },
    { wave: 4, name: "제4장 동탁 선봉대", enemyName: "동탁 중장병", hp: 320, speed: 62, gold: 25, isBoss: false },
    { wave: 5, name: "제5장 사곡의 결전 [보스: 화웅]", enemyName: "보스 화웅", hp: 1600, speed: 45, gold: 100, isBoss: true },
    { wave: 6, name: "제6장 연합군 격돌", enemyName: "서량 정예기병", hp: 600, speed: 70, gold: 35, isBoss: false },
    { wave: 7, name: "제7장 호뢰관 관문전", enemyName: "동탁 친위대", hp: 1000, speed: 65, gold: 45, isBoss: false },
    { wave: 8, name: "제8장 하북의 강호", enemyName: "원소철기", hp: 1600, speed: 68, gold: 55, isBoss: false },
    { wave: 9, name: "제9장 야망의 동탁군", enemyName: "동탁 근위대장", hp: 2500, speed: 60, gold: 70, isBoss: false },
    { wave: 10, name: "제10장 호뢰관의 악몽 [보스: 무신 여포]", enemyName: "보스 무신 여포", hp: 10000, speed: 48, gold: 300, isBoss: true }
];

function getWaveConfig(waveNum) {
    if (waveNum <= CHAPTERS.length) {
        return CHAPTERS[waveNum - 1];
    }
    const isBoss = waveNum % 5 === 0;
    const baseHp = Math.round(1000 * Math.pow(1.4, waveNum - 5));
    const bossName = isBoss ? `무신 여포 Lv.${waveNum / 5}` : `정예 대장 Lv.${waveNum}`;
    return {
        wave: waveNum,
        name: `제${waveNum}장 ${isBoss ? '[보스전] ' + bossName : '천하패권전'}`,
        enemyName: isBoss ? bossName : `패왕의 군사`,
        hp: isBoss ? baseHp * 5 : baseHp,
        speed: Math.min(100, 50 + waveNum * 1.2),
        gold: Math.round(30 + waveNum * 8),
        isBoss: isBoss
    };
}

/* ==========================================================================
   5. Class Definitions (Entities & VFX)
   ========================================================================== */

class Hero {
    constructor(tier) {
        this.tier = tier;
        this.config = HERO_CONFIG[tier];
        this.attackCooldown = 0;
    }

    getAtk() {
        let bonus = gameState.atkBonusPercent;
        if (gameState.synergies.wei) bonus += 15;
        return Math.round(this.config.atk * (1 + bonus / 100));
    }

    getAttackSpeed() {
        let bonus = gameState.aspdBonusPercent;
        if (gameState.synergies.shu) bonus += 25;
        return this.config.attackSpeed * (1 + bonus / 100);
    }

    getRange() {
        let r = this.config.range;
        if (gameState.synergies.wei) r *= 1.15;
        return r;
    }
}

class Enemy {
    constructor(config) {
        this.name = config.enemyName;
        this.maxHp = config.hp;
        this.hp = config.hp;
        this.speed = config.speed;
        this.goldReward = config.gold;
        this.isBoss = config.isBoss;
        this.pathProgress = 0;
        this.x = 0;
        this.y = 0;
        this.radius = config.isBoss ? 22 : 12;
        this.slowTimer = 0;
        this.slowFactor = 1.0;
    }

    update(dt, pathPoints) {
        if (this.slowTimer > 0) {
            this.slowTimer -= dt;
            if (this.slowTimer <= 0) {
                this.slowFactor = 1.0;
            }
        }

        const effectiveSpeed = this.speed * this.slowFactor;
        this.pathProgress += (effectiveSpeed * dt) / 260;

        if (this.pathProgress >= 1) {
            this.pathProgress = 1;
            return true;
        }

        const pos = getPointOnPath(pathPoints, this.pathProgress);
        this.x = pos.x;
        this.y = pos.y;
        return false;
    }

    draw(ctx) {
        ctx.save();
        ctx.translate(this.x, this.y);

        if (this.isBoss) {
            ctx.shadowColor = "#FF2222";
            ctx.shadowBlur = 18;
            ctx.fillStyle = "#B91C1C";
            ctx.beginPath();
            ctx.arc(0, 0, this.radius + 4, 0, Math.PI * 2);
            ctx.fill();
        }

        ctx.fillStyle = this.slowTimer > 0 ? "#38BDF8" : (this.isBoss ? "#DC2626" : "#EAB308");
        ctx.beginPath();
        ctx.arc(0, 0, this.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.lineWidth = 2;
        ctx.strokeStyle = "#FFFFFF";
        ctx.stroke();

        ctx.fillStyle = "#FFFFFF";
        ctx.font = `bold ${this.isBoss ? 13 : 10}px sans-serif`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(this.name.substring(0, 2), 0, 0);

        // HP Bar
        const barW = this.radius * 2 + 4;
        const barH = 4;
        const hpPct = Math.max(0, this.hp / this.maxHp);
        ctx.fillStyle = "rgba(0,0,0,0.7)";
        ctx.fillRect(-barW / 2, -this.radius - 8, barW, barH);
        ctx.fillStyle = hpPct > 0.5 ? "#22C55E" : (hpPct > 0.2 ? "#EAB308" : "#EF4444");
        ctx.fillRect(-barW / 2, -this.radius - 8, barW * hpPct, barH);

        ctx.restore();
    }
}

class Projectile {
    constructor(x, y, target, hero) {
        this.x = x;
        this.y = y;
        this.target = target;
        this.hero = hero;
        this.type = hero.config.attackType;
        this.damage = hero.getAtk();
        this.speed = 520;
        this.active = true;
        this.color = hero.config.color;
        this.trail = [];

        if (this.type === 'pierce') {
            const dx = target.x - x;
            const dy = target.y - y;
            const dist = Math.hypot(dx, dy) || 1;
            this.vx = (dx / dist) * this.speed;
            this.vy = (dy / dist) * this.speed;
            this.hitEnemies = new Set();
        }
    }

    update(dt, enemies) {
        if (!this.active) return;

        // Motion Trail
        this.trail.push({ x: this.x, y: this.y });
        if (this.trail.length > 6) this.trail.shift();

        if (this.type === 'pierce') {
            this.x += this.vx * dt;
            this.y += this.vy * dt;

            enemies.forEach(e => {
                if (!this.hitEnemies.has(e) && Math.hypot(e.x - this.x, e.y - this.y) < e.radius + 12) {
                    this.hitEnemies.add(e);
                    performAttackHit(e, this.damage);
                    createImpactParticles(e.x, e.y, this.color, 6);
                }
            });

            if (this.x < 0 || this.x > canvasWidth || this.y < 0 || this.y > canvasHeight) {
                this.active = false;
            }
        } else {
            if (!enemies.includes(this.target)) {
                if (enemies.length > 0) {
                    this.target = enemies[0];
                } else {
                    this.active = false;
                    return;
                }
            }

            const dx = this.target.x - this.x;
            const dy = this.target.y - this.y;
            const dist = Math.hypot(dx, dy);

            if (dist < 14) {
                this.active = false;
                performAttackHit(this.target, this.damage);
                createImpactParticles(this.target.x, this.target.y, this.color, 8);
            } else {
                this.x += (dx / dist) * this.speed * dt;
                this.y += (dy / dist) * this.speed * dt;
            }
        }
    }

    draw(ctx) {
        if (!this.active) return;
        ctx.save();
        ctx.globalCompositeOperation = 'lighter';

        // Draw Motion Trail
        for (let i = 0; i < this.trail.length; i++) {
            const pt = this.trail[i];
            const alpha = (i + 1) / this.trail.length;
            ctx.fillStyle = this.color;
            ctx.globalAlpha = alpha * 0.6;
            ctx.beginPath();
            ctx.arc(pt.x, pt.y, 3 * alpha, 0, Math.PI * 2);
            ctx.fill();
        }

        ctx.globalAlpha = 1.0;
        ctx.fillStyle = this.color;
        ctx.shadowColor = this.color;
        ctx.shadowBlur = 10;
        ctx.beginPath();
        ctx.arc(this.x, this.y, 6, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
    }
}

class Shockwave {
    constructor(x, y, color = "#EF4444") {
        this.x = x;
        this.y = y;
        this.color = color;
        this.radius = 10;
        this.maxRadius = 180;
        this.alpha = 1.0;
    }

    update(dt) {
        this.radius += 350 * dt;
        this.alpha = Math.max(0, 1 - (this.radius / this.maxRadius));
    }

    draw(ctx) {
        if (this.alpha <= 0) return;
        ctx.save();
        ctx.globalCompositeOperation = 'lighter';
        ctx.globalAlpha = this.alpha;
        ctx.strokeStyle = this.color;
        ctx.lineWidth = 4;
        ctx.shadowColor = this.color;
        ctx.shadowBlur = 15;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.stroke();
        ctx.restore();
    }
}

class Particle {
    constructor(x, y, color) {
        this.x = x;
        this.y = y;
        this.color = color;
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 160 + 40;
        this.vx = Math.cos(angle) * speed;
        this.vy = Math.sin(angle) * speed;
        this.life = 0.4 + Math.random() * 0.4;
        this.maxLife = this.life;
        this.radius = 2 + Math.random() * 3;
    }

    update(dt) {
        this.x += this.vx * dt;
        this.y += this.vy * dt;
        this.life -= dt;
    }

    draw(ctx) {
        if (this.life <= 0) return;
        ctx.save();
        ctx.globalAlpha = Math.max(0, this.life / this.maxLife);
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
    }
}

class FloatingText {
    constructor(x, y, text, color = "#FFD700", fontSize = 16) {
        this.x = x;
        this.y = y;
        this.text = text;
        this.color = color;
        this.fontSize = fontSize;
        this.life = 0.8;
        this.maxLife = 0.8;
    }

    update(dt) {
        this.y -= 32 * dt;
        this.life -= dt;
    }

    draw(ctx) {
        if (this.life <= 0) return;
        ctx.save();
        ctx.globalAlpha = Math.max(0, this.life / this.maxLife);
        ctx.fillStyle = this.color;
        ctx.font = `bold ${this.fontSize}px sans-serif`;
        ctx.textAlign = "center";
        ctx.shadowColor = "#000000";
        ctx.shadowBlur = 6;
        ctx.fillText(this.text, this.x, this.y);
        ctx.restore();
    }
}

/* ==========================================================================
   6. DOM Elements, Canvas Setup & Pathing
   ========================================================================== */

const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const waveTitleEl = document.getElementById("wave-title");
const goldValEl = document.getElementById("gold-val");
const hpValEl = document.getElementById("hp-val");
const killValEl = document.getElementById("kill-val");
const totalDpsValEl = document.getElementById("total-dps-val");
const synergyBadgesContainer = document.getElementById("synergy-badges-container");
const gateHpBarEl = document.getElementById("gate-hp-bar");

const soundBtnEl = document.getElementById("sound-btn");
const camToggleBtnEl = document.getElementById("cam-toggle-btn");

const recruitBtn = document.getElementById("recruit-btn");
const recruitCostEl = document.getElementById("recruit-cost");
const upgradeBtn = document.getElementById("upgrade-btn");
const upgradeLvlEl = document.getElementById("upgrade-lvl");
const upgradeCostEl = document.getElementById("upgrade-cost");
const skillBtn = document.getElementById("skill-btn");
const skillSubEl = document.getElementById("skill-sub");

const briefingPanel = document.getElementById("hero-briefing-panel");
const briefingName = document.getElementById("briefing-name");
const briefingTier = document.getElementById("briefing-tier");
const briefingFaction = document.getElementById("briefing-faction");
const briefingAtk = document.getElementById("briefing-atk");
const briefingAspd = document.getElementById("briefing-aspd");
const briefingRange = document.getElementById("briefing-range");
const briefingDesc = document.getElementById("briefing-desc");

const strategyModal = document.getElementById("strategy-modal");
const strategyCardsContainer = document.getElementById("strategy-cards");

const gameoverModal = document.getElementById("gameover-modal");
const gameoverTitleEl = document.getElementById("gameover-title");
const gameoverSubtitleEl = document.getElementById("gameover-subtitle");
const finalWaveEl = document.getElementById("final-wave");
const finalKillsEl = document.getElementById("final-kills");
const restartBtn = document.getElementById("restart-btn");

let canvasWidth = 0;
let canvasHeight = 0;
let gridStartY = 0;
let gridHeight = 0;
let cellWidth = 0;
let cellHeight = 0;
let pathPoints = [];
let sellZoneRect = { x: 0, y: 0, width: 0, height: 0 };

function resizeCanvas() {
    const view = document.getElementById("game-view");
    const cssWidth = view.clientWidth;
    const cssHeight = view.clientHeight;
    const dpr = window.devicePixelRatio || 1;

    canvasWidth = cssWidth;
    canvasHeight = cssHeight;

    canvas.width = Math.round(cssWidth * dpr);
    canvas.height = Math.round(cssHeight * dpr);

    ctx.resetTransform();
    ctx.scale(dpr, dpr);

    gridHeight = canvasHeight * 0.38;
    gridStartY = canvasHeight - gridHeight - 38;
    cellWidth = canvasWidth / COLS;
    cellHeight = gridHeight / ROWS;

    sellZoneRect = {
        x: 12,
        y: gridStartY + gridHeight + 4,
        width: canvasWidth - 24,
        height: 30
    };

    const topY = 15;
    const gateY = gridStartY - 25;
    const midY1 = topY + (gateY - topY) * 0.3;
    const midY2 = topY + (gateY - topY) * 0.65;

    pathPoints = [
        { x: canvasWidth * 0.15, y: topY },
        { x: canvasWidth * 0.85, y: midY1 },
        { x: canvasWidth * 0.15, y: midY2 },
        { x: canvasWidth * 0.50, y: gateY }
    ];
}

window.addEventListener("resize", resizeCanvas);

function getPointOnPath(points, t) {
    if (points.length < 4) return { x: 0, y: 0 };
    const p0 = points[0];
    const p1 = points[1];
    const p2 = points[2];
    const p3 = points[3];

    const cx = 3 * (p1.x - p0.x);
    const bx = 3 * (p2.x - p1.x) - cx;
    const ax = p3.x - p0.x - cx - bx;

    const cy = 3 * (p1.y - p0.y);
    const by = 3 * (p2.y - p1.y) - cy;
    const ay = p3.y - p0.y - cy - by;

    const x = (ax * Math.pow(t, 3)) + (bx * Math.pow(t, 2)) + (cx * t) + p0.x;
    const y = (ay * Math.pow(t, 3)) + (by * Math.pow(t, 2)) + (cy * t) + p0.y;

    return { x, y };
}

function triggerScreenShake(intensity = 10, duration = 0.3) {
    gameState.shakeIntensity = intensity;
    gameState.shakeTimer = duration;
}

/* ==========================================================================
   7. Grid Touch, Drag-and-Drop & Dismiss System
   ========================================================================== */

function getCellCenter(index) {
    const col = index % COLS;
    const row = Math.floor(index / COLS);
    return {
        x: col * cellWidth + cellWidth / 2,
        y: gridStartY + row * cellHeight + cellHeight / 2
    };
}

function getIndexFromCoords(x, y) {
    if (y < gridStartY || y > gridStartY + gridHeight) return -1;
    const col = Math.floor(x / cellWidth);
    const row = Math.floor((y - gridStartY) / cellHeight);
    if (col < 0 || col >= COLS || row < 0 || row >= ROWS) return -1;
    return row * COLS + col;
}

function isInsideSellZone(x, y) {
    return (
        x >= sellZoneRect.x &&
        x <= sellZoneRect.x + sellZoneRect.width &&
        y >= sellZoneRect.y &&
        y <= sellZoneRect.y + sellZoneRect.height
    );
}

function showBriefingPanel(hero) {
    if (!hero) {
        briefingPanel.classList.add("hidden");
        return;
    }
    briefingName.innerText = hero.config.name;
    briefingTier.innerText = "T" + hero.tier;
    briefingFaction.innerText = hero.config.faction;
    briefingAtk.innerText = hero.getAtk();
    briefingAspd.innerText = hero.getAttackSpeed().toFixed(1) + "/초";
    briefingRange.innerText = Math.round(hero.getRange());
    briefingDesc.innerText = hero.config.desc;
    briefingPanel.classList.remove("hidden");
}

function handleDragStart(clientX, clientY) {
    if (gameState.gameOver || gameState.paused) return;
    const rect = canvas.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;

    const index = getIndexFromCoords(x, y);
    if (index !== -1 && gameState.grid[index] !== null) {
        const hero = gameState.grid[index];
        gameState.draggedItem = {
            sourceIndex: index,
            hero: hero,
            x: x,
            y: y
        };
        showBriefingPanel(hero);
        audioEngine.playSound('spear');
    }
}

function handleDragMove(clientX, clientY) {
    const rect = canvas.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;

    if (gameState.draggedItem) {
        gameState.draggedItem.x = x;
        gameState.draggedItem.y = y;
    } else {
        const index = getIndexFromCoords(x, y);
        if (index !== -1 && gameState.grid[index] !== null) {
            showBriefingPanel(gameState.grid[index]);
        } else {
            showBriefingPanel(null);
        }
    }
}

function handleDragEnd() {
    if (!gameState.draggedItem) return;
    const { sourceIndex, hero, x, y } = gameState.draggedItem;

    if (isInsideSellZone(x, y)) {
        const refundGold = Math.round(gameState.recruitCost * hero.tier * 0.5);
        gameState.gold += refundGold;
        gameState.grid[sourceIndex] = null;

        audioEngine.playSound('merge');
        createImpactParticles(x, y, "#FFD700", 16);
        gameState.floatingTexts.push(new FloatingText(x, y - 10, `+${refundGold}🌾 환급!`, "#FFD700", 18));
    } else {
        const targetIndex = getIndexFromCoords(x, y);

        if (targetIndex !== -1 && targetIndex !== sourceIndex) {
            const targetHero = gameState.grid[targetIndex];

            if (targetHero === null) {
                gameState.grid[targetIndex] = hero;
                gameState.grid[sourceIndex] = null;
            } else if (targetHero.tier === hero.tier && hero.tier < 7) {
                const nextTier = hero.tier + 1;
                const newHero = new Hero(nextTier);
                gameState.grid[targetIndex] = newHero;
                gameState.grid[sourceIndex] = null;

                const targetPos = getCellCenter(targetIndex);
                createImpactParticles(targetPos.x, targetPos.y, newHero.config.color, 24);
                gameState.floatingTexts.push(new FloatingText(targetPos.x, targetPos.y - 15, `${newHero.config.name} 승급!`, newHero.config.color, 18));

                if (nextTier === 7) {
                    audioEngine.playSound('lubu');
                    triggerScreenShake(12, 0.5);
                    gameState.shockwaves.push(new Shockwave(targetPos.x, targetPos.y, "#EF4444"));
                } else {
                    audioEngine.playSound('merge');
                }
            } else {
                gameState.grid[targetIndex] = hero;
                gameState.grid[sourceIndex] = targetHero;
            }
        }
    }

    gameState.draggedItem = null;
    showBriefingPanel(null);
    updateSynergies();
}

// Touch & Mouse Event Listeners
canvas.addEventListener("touchstart", (e) => {
    e.preventDefault();
    audioEngine.init();
    if (e.touches.length > 0) {
        handleDragStart(e.touches[0].clientX, e.touches[0].clientY);
    }
}, { passive: false });

canvas.addEventListener("touchmove", (e) => {
    e.preventDefault();
    if (e.touches.length > 0) {
        handleDragMove(e.touches[0].clientX, e.touches[0].clientY);
    }
}, { passive: false });

canvas.addEventListener("touchend", (e) => {
    e.preventDefault();
    handleDragEnd();
}, { passive: false });

canvas.addEventListener("mousedown", (e) => {
    audioEngine.init();
    handleDragStart(e.clientX, e.clientY);
});

canvas.addEventListener("mousemove", (e) => {
    handleDragMove(e.clientX, e.clientY);
});

canvas.addEventListener("mouseup", () => {
    handleDragEnd();
});

/* ==========================================================================
   8. Faction Synergies & Combat System
   ========================================================================== */

function updateSynergies() {
    let shu = 0;
    let wei = 0;
    let qun = 0;
    let totalDps = 0;

    for (let i = 0; i < gameState.grid.length; i++) {
        const hero = gameState.grid[i];
        if (!hero) continue;
        const faction = hero.config.faction;
        if (faction === "촉") shu++;
        else if (faction === "위") wei++;
        else if (faction === "군웅") qun++;

        totalDps += hero.getAtk() * hero.getAttackSpeed();
    }

    gameState.synergies.shu = (shu >= 3);
    gameState.synergies.wei = (wei >= 2);
    gameState.synergies.qun = (qun >= 3);

    totalDpsValEl.innerText = Math.round(totalDps) + " DPS";

    // Update Telemetry Badges in HUD
    synergyBadgesContainer.innerHTML = "";
    const badges = [
        { active: gameState.synergies.shu, text: "🟢촉의 의지", color: "#10b981" },
        { active: gameState.synergies.wei, text: "🔵위의 군율", color: "#3b82f6" },
        { active: gameState.synergies.qun, text: "🔴패왕기세", color: "#ef4444" }
    ];

    badges.forEach(b => {
        if (b.active) {
            const span = document.createElement("span");
            span.style.cssText = `background: rgba(15,23,42,0.8); color: ${b.color}; border: 1px solid ${b.color}; border-radius: 4px; padding: 1px 4px; font-size: 10px; font-weight: bold;`;
            span.innerText = b.text;
            synergyBadgesContainer.appendChild(span);
        }
    });
}

function performAttackHit(enemy, baseDamage, forceCrit = false) {
    let critChance = 0.15;
    if (gameState.synergies.qun) critChance += 0.25;

    const isCrit = forceCrit || (Math.random() < critChance);
    const finalDamage = isCrit ? baseDamage * 2 : baseDamage;

    applyDamage(enemy, finalDamage, isCrit);
}

function applyDamage(enemy, amount, isCrit = false) {
    enemy.hp -= amount;
    audioEngine.playSound('hit');

    if (isCrit) {
        gameState.floatingTexts.push(new FloatingText(enemy.x + (Math.random() * 10 - 5), enemy.y - 12, `💥 -${amount}!`, "#FFD700", 18));
    } else {
        gameState.floatingTexts.push(new FloatingText(enemy.x + (Math.random() * 10 - 5), enemy.y - 10, `-${amount}`, "#FF5555", 13));
    }

    if (enemy.hp <= 0) {
        const reward = Math.round(enemy.goldReward * gameState.goldMultiplier);
        gameState.gold += reward;
        gameState.kills += 1;
        gameState.floatingTexts.push(new FloatingText(enemy.x, enemy.y - 20, `+${reward}🌾`, "#FFD700", 14));
        createImpactParticles(enemy.x, enemy.y, "#FFD700", 10);
    }
}

function createImpactParticles(x, y, color, count = 8) {
    for (let i = 0; i < count; i++) {
        gameState.particles.push(new Particle(x, y, color));
    }
}

function updateCombat(dt) {
    const aliveEnemies = gameState.enemies.filter(e => e.hp > 0);

    for (let i = 0; i < gameState.grid.length; i++) {
        const hero = gameState.grid[i];
        if (!hero) continue;

        const pos = getCellCenter(i);
        hero.attackCooldown -= dt;

        if (hero.attackCooldown <= 0 && aliveEnemies.length > 0) {
            let target = null;
            let maxProgress = -1;

            aliveEnemies.forEach(e => {
                const dist = Math.hypot(e.x - pos.x, e.y - pos.y);
                if (dist <= hero.getRange()) {
                    if (e.pathProgress > maxProgress) {
                        maxProgress = e.pathProgress;
                        target = e;
                    }
                }
            });

            if (target) {
                hero.attackCooldown = 1.0 / hero.getAttackSpeed();
                const type = hero.config.attackType;

                if (type === 'single' || type === 'rapid' || type === 'pierce') {
                    audioEngine.playSound('bow');
                    gameState.projectiles.push(new Projectile(pos.x, pos.y, target, hero));
                } else if (type === 'rapid_spear') {
                    audioEngine.playSound('spear');
                    performAttackHit(target, hero.getAtk());
                    createImpactParticles(target.x, target.y, hero.config.color, 6);
                } else if (type === 'aoe') {
                    // Guan Yu Green Crescent Moon Blade Wave
                    audioEngine.playSound('spear');
                    aliveEnemies.forEach(e => {
                        if (Math.hypot(e.x - pos.x, e.y - pos.y) <= hero.getRange()) {
                            performAttackHit(e, hero.getAtk());
                            createImpactParticles(e.x, e.y, "#10B981", 6);
                        }
                    });
                } else if (type === 'slow_aoe') {
                    // Zhuge Liang Eight Trigram Lightning Magic
                    audioEngine.playSound('boss');
                    aliveEnemies.forEach(e => {
                        if (Math.hypot(e.x - pos.x, e.y - pos.y) <= hero.getRange()) {
                            performAttackHit(e, hero.getAtk());
                            e.slowTimer = 2.5;
                            e.slowFactor = 0.5;
                            createImpactParticles(e.x, e.y, "#8B5CF6", 8);
                        }
                    });
                } else if (type === 'musou') {
                    // Lu Bu Musou Strike
                    audioEngine.playSound('lubu');
                    triggerScreenShake(14, 0.4);
                    gameState.shockwaves.push(new Shockwave(pos.x, pos.y, "#EF4444"));

                    aliveEnemies.forEach(e => {
                        performAttackHit(e, hero.getAtk());
                        createImpactParticles(e.x, e.y, "#EF4444", 12);
                    });
                    gameState.floatingTexts.push(new FloatingText(canvasWidth / 2, canvasHeight * 0.3, "천하무쌍 방천화극!!", "#EF4444", 22));
                }
            }
        }
    }
}

/* ==========================================================================
   9. Spawning & Wave Engine
   ========================================================================== */

function startNextWave() {
    gameState.waveInProgress = true;
    const waveConfig = getWaveConfig(gameState.wave);
    waveTitleEl.innerText = waveConfig.name;

    if (waveConfig.isBoss) {
        audioEngine.playSound('boss');
        triggerScreenShake(10, 0.4);
        gameState.floatingTexts.push(new FloatingText(canvasWidth / 2, canvasHeight * 0.25, "⚠️ 보스 출현 ⚠️", "#FF2222", 24));
        gameState.enemiesToSpawn = 1;
    } else {
        gameState.enemiesToSpawn = 8 + Math.floor(gameState.wave * 1.5);
    }
    gameState.spawnTimer = 0;
}

function updateWave(dt) {
    if (!gameState.waveInProgress) return;

    const waveConfig = getWaveConfig(gameState.wave);

    if (gameState.enemiesToSpawn > 0) {
        gameState.spawnTimer -= dt;
        if (gameState.spawnTimer <= 0) {
            gameState.spawnTimer = waveConfig.isBoss ? 1.0 : 0.9;
            gameState.enemies.push(new Enemy(waveConfig));
            gameState.enemiesToSpawn -= 1;
        }
    }

    gameState.enemies = gameState.enemies.filter(e => {
        if (e.hp <= 0) return false;

        const reachedGate = e.update(dt, pathPoints);
        if (reachedGate) {
            const dmg = e.isBoss ? 30 : 10;
            gameState.gateHp = Math.max(0, gameState.gateHp - dmg);
            createImpactParticles(e.x, e.y, "#FF0000", 12);
            audioEngine.playSound('hit');
            triggerScreenShake(6, 0.2);

            if (gameState.gateHp <= 0) {
                triggerGameOver();
            }
            return false;
        }
        return true;
    });

    if (gameState.enemiesToSpawn <= 0 && gameState.enemies.length === 0) {
        gameState.waveInProgress = false;
        showStrategyModal();
    }
}

/* ==========================================================================
   10. Roguelike Strategy Cards ("제갈량의 금낭묘계")
   ========================================================================== */

const STRATEGY_POOL = [
    { id: "atk_up", name: "도원결의", desc: "전체 장수 공격력 +25% 증가", icon: "🍶", apply: () => gameState.atkBonusPercent += 25 },
    { id: "gold_up", name: "병량 확보", desc: "적 처치 시 군량미 획득량 +30%", icon: "🌾", apply: () => gameState.goldMultiplier += 0.3 },
    { id: "aspd_up", name: "연노 개량", desc: "전체 장수 공격속도 +20% 증가", icon: "🏹", apply: () => gameState.aspdBonusPercent += 20 },
    { id: "gate_repair", name: "성벽 보수", desc: "관문 내구도 40 회복", icon: "🏯", apply: () => gameState.gateHp = Math.min(gameState.maxGateHp, gameState.gateHp + 40) },
    { id: "free_gold", name: "군자금 조달", desc: "즉시 군량미 150🌾 획득", icon: "💰", apply: () => gameState.gold += 150 }
];

function showStrategyModal() {
    gameState.paused = true;
    strategyCardsContainer.innerHTML = "";

    const shuffled = [...STRATEGY_POOL].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 3);

    selected.forEach(card => {
        const cardEl = document.createElement("div");
        cardEl.className = "strategy-card";
        cardEl.innerHTML = `
            <div class="card-icon">${card.icon}</div>
            <div class="card-info">
                <div class="card-name">${card.name}</div>
                <div class="card-desc">${card.desc}</div>
            </div>
        `;
        cardEl.onclick = () => {
            card.apply();
            audioEngine.playSound('merge');
            strategyModal.classList.add("hidden");
            gameState.paused = false;
            gameState.wave += 1;
            startNextWave();
            updateSynergies();
        };
        strategyCardsContainer.appendChild(cardEl);
    });

    strategyModal.classList.remove("hidden");
}

/* ==========================================================================
   11. Recruitment, Active Skill & Actions
   ========================================================================== */

function recruitHero() {
    if (gameState.gold < gameState.recruitCost) return;

    const emptyIndices = [];
    for (let i = 0; i < gameState.grid.length; i++) {
        if (gameState.grid[i] === null) emptyIndices.push(i);
    }

    if (emptyIndices.length === 0) {
        gameState.floatingTexts.push(new FloatingText(canvasWidth / 2, gridStartY - 20, "진영에 빈 자리가 없습니다!", "#FF4444", 16));
        return;
    }

    gameState.gold -= gameState.recruitCost;
    gameState.recruitCost = Math.round(gameState.recruitCost * 1.15);

    const targetSlot = emptyIndices[0];

    // Probabilistic recruitment (80% T1, 16% T2, 4% T3)
    const roll = Math.random();
    let recruitedTier = 1;
    let recruitText = null;
    let recruitTextColor = "#4AE3B5";

    if (roll < 0.80) {
        recruitingTier = 1;
    } else if (roll < 0.96) {
        recruitingTier = 2;
        recruitText = "⚡ 정예 발탁!";
        recruitTextColor = "#3B82F6";
    } else {
        recruitingTier = 3;
        recruitText = "🌟 명장 초고속 등용!!";
        recruitTextColor = "#FFD700";
    }

    const newHero = new Hero(recruitingTier);
    gameState.grid[targetSlot] = newHero;

    const pos = getCellCenter(targetSlot);

    if (recruitingTier === 3) {
        createImpactParticles(pos.x, pos.y, "#FFD700", 30);
        audioEngine.playSound('merge');
        triggerScreenShake(8, 0.3);
        gameState.shockwaves.push(new Shockwave(pos.x, pos.y, "#FFD700"));
    } else {
        createImpactParticles(pos.x, pos.y, newHero.config.color, 12);
        audioEngine.playSound('spear');
    }

    if (recruitText) {
        gameState.floatingTexts.push(new FloatingText(pos.x, pos.y - 20, recruitText, recruitTextColor, 18));
    }

    updateSynergies();
}

function upgradeForce() {
    if (gameState.gold < gameState.upgradeCost) return;

    gameState.gold -= gameState.upgradeCost;
    gameState.upgradeLevel += 1;
    gameState.atkBonusPercent += 10;
    gameState.upgradeCost = Math.round(gameState.upgradeCost * 1.3);

    audioEngine.playSound('merge');
    gameState.floatingTexts.push(new FloatingText(canvasWidth / 2, canvasHeight / 2, `전체 무력 강화 Lv.${gameState.upgradeLevel}!`, "#FFD700", 20));
    updateSynergies();
}

function triggerRedCliffSkill() {
    if (gameState.skillCooldown > 0 || gameState.paused || gameState.gameOver) return;

    gameState.skillCooldown = SKILL_MAX_COOLDOWN;
    const fireDamage = gameState.wave * 120;

    audioEngine.playSound('fire');
    triggerScreenShake(16, 0.6);
    gameState.shockwaves.push(new Shockwave(canvasWidth / 2, canvasHeight * 0.35, "#FF4400"));

    gameState.enemies.forEach(e => {
        applyDamage(e, fireDamage, true);
        e.slowTimer = 3.0;
        e.slowFactor = 0.4;
    });

    createImpactParticles(canvasWidth / 2, canvasHeight * 0.35, "#FF4400", 50);
    gameState.floatingTexts.push(new FloatingText(canvasWidth / 2, canvasHeight * 0.35, "🔥 적벽의 화공이 적진을 불태웁니다!!", "#FF4400", 22));
}

recruitBtn.addEventListener("click", recruitHero);
upgradeBtn.addEventListener("click", upgradeForce);
skillBtn.addEventListener("click", triggerRedCliffSkill);

camToggleBtnEl.addEventListener("click", () => {
    gameState.perspectiveView = !gameState.perspectiveView;
    camToggleBtnEl.innerText = gameState.perspectiveView ? "🎥 시점: 입체뷰" : "🎥 시점: 전술뷰";
});

soundBtnEl.addEventListener("click", () => {
    SOUND_CONFIG.enabled = !SOUND_CONFIG.enabled;
    soundBtnEl.innerText = SOUND_CONFIG.enabled ? "🔊" : "🔇";
});

function triggerGameOver() {
    gameState.gameOver = true;
    gameState.paused = true;
    finalWaveEl.innerText = getWaveConfig(gameState.wave).name;
    finalKillsEl.innerText = gameState.kills;
    gameoverModal.classList.remove("hidden");
}

restartBtn.addEventListener("click", () => {
    location.reload();
});

/* ==========================================================================
   12. High-End Canvas Render Loop
   ========================================================================== */

function updateUI() {
    goldValEl.innerText = gameState.gold;
    hpValEl.innerText = `${gameState.gateHp}/${gameState.maxGateHp}`;
    killValEl.innerText = gameState.kills;
    gateHpBarEl.style.width = `${Math.max(0, (gameState.gateHp / gameState.maxGateHp) * 100)}%`;

    recruitCostEl.innerText = gameState.recruitCost;
    upgradeLvlEl.innerText = gameState.upgradeLevel;
    upgradeCostEl.innerText = gameState.upgradeCost;

    recruitBtn.classList.toggle("disabled", gameState.gold < gameState.recruitCost);
    upgradeBtn.classList.toggle("disabled", gameState.gold < gameState.upgradeCost);

    if (gameState.skillCooldown > 0) {
        skillBtn.classList.add("disabled");
        skillSubEl.innerText = `${Math.ceil(gameState.skillCooldown)}초 후 가능`;
    } else {
        skillBtn.classList.remove("disabled");
        skillSubEl.innerText = "필살기 발동";
    }
}

function drawGame() {
    ctx.save();

    // Camera Screen Shake Offset
    if (gameState.shakeTimer > 0) {
        const dx = (Math.random() - 0.5) * gameState.shakeIntensity;
        const dy = (Math.random() - 0.5) * gameState.shakeIntensity;
        ctx.translate(dx, dy);
    }

    ctx.clearRect(0, 0, canvasWidth, canvasHeight);

    // 2.5D Isometric Perspective Tilt View Transformation
    if (gameState.perspectiveView) {
        ctx.translate(canvasWidth / 2, canvasHeight / 2);
        ctx.scale(1.0, 0.72);
        ctx.translate(-canvasWidth / 2, -canvasHeight / 2 + 35);
    }

    // 1. Parallax Night Battlefield Background & Stars
    ctx.save();
    bgStars.forEach(s => {
        ctx.fillStyle = `rgba(255, 255, 255, ${0.2 + Math.sin(gameState.auraTimer * 2 + s.alpha) * 0.3})`;
        ctx.beginPath();
        ctx.arc(s.x * canvasWidth, s.y * canvasHeight * 0.5, s.size, 0, Math.PI * 2);
        ctx.fill();
    });

    bgEmbers.forEach(e => {
        ctx.fillStyle = `rgba(255, 120, 0, ${0.4 + Math.sin(gameState.auraTimer * 3 + e.x) * 0.3})`;
        ctx.beginPath();
        ctx.arc(e.x * canvasWidth, (e.y * canvasHeight - gameState.auraTimer * e.speed) % canvasHeight, e.size, 0, Math.PI * 2);
        ctx.fill();
    });
    ctx.restore();

    // 2. Torch Flickering Lights at Gate Flanks
    ctx.save();
    const torch1Glow = ctx.createRadialGradient(25, gridStartY - 15, 2, 25, gridStartY - 15, 35);
    torch1Glow.addColorStop(0, "rgba(255, 140, 0, 0.4)");
    torch1Glow.addColorStop(1, "transparent");
    ctx.fillStyle = torch1Glow;
    ctx.beginPath();
    ctx.arc(25, gridStartY - 15, 35, 0, Math.PI * 2);
    ctx.fill();

    const torch2Glow = ctx.createRadialGradient(canvasWidth - 25, gridStartY - 15, 2, canvasWidth - 25, gridStartY - 15, 35);
    torch2Glow.addColorStop(0, "rgba(255, 140, 0, 0.4)");
    torch2Glow.addColorStop(1, "transparent");
    ctx.fillStyle = torch2Glow;
    ctx.beginPath();
    ctx.arc(canvasWidth - 25, gridStartY - 15, 35, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();

    // 3. Draw S-Curve Defense Path
    ctx.save();
    ctx.strokeStyle = "rgba(212, 175, 55, 0.25)";
    ctx.lineWidth = 26;
    ctx.lineCap = "round";
    ctx.beginPath();
    for (let t = 0; t <= 1; t += 0.02) {
        const pt = getPointOnPath(pathPoints, t);
        if (t === 0) ctx.moveTo(pt.x, pt.y);
        else ctx.lineTo(pt.x, pt.y);
    }
    ctx.stroke();

    ctx.strokeStyle = "rgba(255, 215, 0, 0.5)";
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.restore();

    // 4. Draw Gate Line
    const gateY = gridStartY - 15;
    ctx.save();
    ctx.fillStyle = "#1e140a";
    ctx.fillRect(0, gateY, canvasWidth, 12);
    ctx.strokeStyle = "#d4af37";
    ctx.lineWidth = 1;
    ctx.strokeRect(0, gateY, canvasWidth, 12);
    ctx.fillStyle = "#FFD700";
    ctx.font = "bold 12px sans-serif";
    ctx.textAlign = "center";
    ctx.fillText("🏯 성문 관문 방어선", canvasWidth / 2, gateY + 9);
    ctx.restore();

    // 5. Draw Enemies & Projectiles
    gameState.enemies.forEach(e => e.draw(ctx));
    gameState.projectiles.forEach(p => p.draw(ctx));

    // 6. Draw 5x4 Grid Tiles as 3D Bevelled Obsidian Altars
    for (let row = 0; row < ROWS; row++) {
        for (let col = 0; col < COLS; col++) {
            const x = col * cellWidth;
            const y = gridStartY + row * cellHeight;
            const index = row * COLS + col;

            ctx.save();
            // Bevelled Obsidian Tile Base
            const grad = ctx.createLinearGradient(x, y, x, y + cellHeight);
            grad.addColorStop(0, "#1e293b");
            grad.addColorStop(1, "#0f172a");
            ctx.fillStyle = grad;
            ctx.fillRect(x + 3, y + 3, cellWidth - 6, cellHeight - 6);

            ctx.strokeStyle = "rgba(212, 175, 55, 0.35)";
            ctx.lineWidth = 1;
            ctx.strokeRect(x + 3, y + 3, cellWidth - 6, cellHeight - 6);

            const hero = gameState.grid[index];
            const centerX = x + cellWidth / 2;
            const centerY = y + cellHeight / 2;

            if (hero) {
                // Rotating Magic Circle Floor Effect
                ctx.save();
                ctx.translate(centerX, centerY);
                ctx.rotate(gameState.auraTimer * 1.2);
                ctx.strokeStyle = hero.config.color;
                ctx.globalAlpha = 0.4;
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.arc(0, 0, Math.min(cellWidth, cellHeight) * 0.4, 0, Math.PI * 2);
                ctx.stroke();
                ctx.restore();

                if (!gameState.draggedItem || gameState.draggedItem.sourceIndex !== index) {
                    const radius = Math.min(cellWidth, cellHeight) * 0.35;
                    drawHeroVisual(ctx, centerX, centerY, radius, hero.config, gameState.auraTimer);
                }
            }
            ctx.restore();
        }
    }

    // 7. Draw Dismiss Drop Zone when dragging
    if (gameState.draggedItem) {
        ctx.save();
        ctx.fillStyle = "rgba(220, 38, 38, 0.35)";
        ctx.strokeStyle = "#EF4444";
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.roundRect(sellZoneRect.x, sellZoneRect.y, sellZoneRect.width, sellZoneRect.height, 6);
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = "#FFFFFF";
        ctx.font = "bold 13px sans-serif";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        const refundAmt = Math.round(gameState.recruitCost * gameState.draggedItem.hero.tier * 0.5);
        ctx.fillText(`🌾 장수 해산 (+${refundAmt}🌾 환급)`, sellZoneRect.x + sellZoneRect.width / 2, sellZoneRect.y + sellZoneRect.height / 2);
        ctx.restore();

        // Draw Dragged Hero Following Cursor
        const { hero, x, y } = gameState.draggedItem;
        const radius = Math.min(cellWidth, cellHeight) * 0.4;
        drawHeroVisual(ctx, x, y, radius, hero.config, gameState.auraTimer);
    }

    // 8. Draw Shockwaves, Particles & Floating Text
    gameState.shockwaves.forEach(sw => sw.draw(ctx));
    gameState.particles.forEach(p => p.draw(ctx));
    gameState.floatingTexts.forEach(ft => ft.draw(ctx));

    ctx.restore();
}

let lastTime = performance.now();
function gameLoop(now) {
    const dt = Math.min(0.1, (now - lastTime) / 1000);
    lastTime = now;

    if (!gameState.paused && !gameState.gameOver) {
        gameState.auraTimer += dt;
        if (gameState.shakeTimer > 0) {
            gameState.shakeTimer -= dt;
        }
        if (gameState.skillCooldown > 0) {
            gameState.skillCooldown = Math.max(0, gameState.skillCooldown - dt);
        }

        updateWave(dt);
        updateCombat(dt);

        gameState.projectiles.forEach(p => p.update(dt, gameState.enemies));
        gameState.projectiles = gameState.projectiles.filter(p => p.active);

        gameState.shockwaves.forEach(sw => sw.update(dt));
        gameState.shockwaves = gameState.shockwaves.filter(sw => sw.alpha > 0);

        gameState.particles.forEach(p => p.update(dt));
        gameState.particles = gameState.particles.filter(p => p.life > 0);

        gameState.floatingTexts.forEach(ft => ft.update(dt));
        gameState.floatingTexts = gameState.floatingTexts.filter(ft => ft.life > 0);
    }

    updateUI();
    drawGame();
    requestAnimationFrame(gameLoop);
}

/* ==========================================================================
   13. Initialization
   ========================================================================== */

function initGame() {
    resizeCanvas();
    gameState.grid[7] = new Hero(1);
    gameState.grid[12] = new Hero(1);
    updateSynergies();
    startNextWave();
    requestAnimationFrame(gameLoop);
}

window.onload = initGame;
