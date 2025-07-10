const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const scoreEl = document.getElementById('score');
const newGameBtn = document.getElementById('newGameBtn');

let tileSize = 20;
const levelMap = [
    "1111111111111111111111111111",
    "1............11............1",
    "1.1111.11111.11.11111.1111.1",
    "1o1111.11111.11.11111.1111o1",
    "1.1111.11111.11.11111.1111.1",
    "1..........................1",
    "1.1111.11.11111111.11.1111.1",
    "1.1111.11.11111111.11.1111.1",
    "1......11....11....11......1",
    "111111.11111 11 11111.111111",
    "0    1.11111 11 11111.1    0",
    "0    1.11          11.1    0",
    "0    1.11 111--111 11.1    0",
    "111111.11 1      1 11.111111",
    "1........1 1      1 1........1",
    "111111.11 1      1 11.111111",
    "0    1.11 11111111 11.1    0",
    "0    1.11          11.1    0",
    "0    1.11 11111111 11.1    0",
    "111111.11 11111111 11.111111",
    "1............11............1",
    "1.1111.11111.11.11111.1111.1",
    "1o..11................11..o1",
    "111.11.11.11111111.11.11.111",
    "111.11.11.11111111.11.11.111",
    "1......11....11....11......1",
    "1.111111111.11.111111111.1",
    "1.111111111.11.111111111.1",
    "1..........................1",
    "1111111111111111111111111111"
];

const rows = levelMap.length;
const cols = levelMap[0].length;

const pacman = { x: 13, y: 23, dx: 0, dy: 0 };
const ghosts = [
    { x: 13, y: 14, color: 'red', homeTimer: 40 },
    { x: 14, y: 14, color: 'cyan', homeTimer: 80 }
];

let dots = [];
let powerDots = [];
const walls = new Set();
let startX;
let startY;
let score = 0;
let intervalId;

function resizeCanvas() {
    const size = document.querySelector('.game-wrapper').clientWidth;
    canvas.width = canvas.height = size;
    tileSize = size / cols;
}

function initLevel() {
    walls.clear();
    dots = [];
    powerDots = [];
    levelMap.forEach((row, y) => {
        [...row].forEach((ch, x) => {
            const key = `${x},${y}`;
            if (ch === '1') walls.add(key);
            else if (ch === '.') dots.push({ x, y });
            else if (ch === 'o') powerDots.push({ x, y });
        });
    });
    score = 0;
    updateScore();
}

function drawRect(x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x * tileSize, y * tileSize, tileSize, tileSize);
}

function drawCircle(x, y, r, color) {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(x * tileSize + tileSize / 2, y * tileSize + tileSize / 2, r, 0, Math.PI * 2);
    ctx.fill();
}

function drawPacman() {
    ctx.fillStyle = 'yellow';
    ctx.beginPath();
    const px = pacman.x * tileSize + tileSize / 2;
    const py = pacman.y * tileSize + tileSize / 2;
    ctx.arc(px, py, tileSize / 2 - 2, 0.25 * Math.PI, 1.75 * Math.PI);
    ctx.lineTo(px, py);
    ctx.fill();
}

function drawGhosts() {
    ghosts.forEach(g => drawCircle(g.x, g.y, tileSize / 2 - 2, g.color));
}

function drawWalls() {
    walls.forEach(pos => {
        const [x, y] = pos.split(',').map(Number);
        drawRect(x, y, '#222');
    });
}

function drawDots() {
    dots.forEach(d => drawCircle(d.x, d.y, 3, 'white'));
    powerDots.forEach(d => drawCircle(d.x, d.y, tileSize / 3, 'white'));
}

function tryMove(entity, dx, dy) {
    const nx = entity.x + dx;
    const ny = entity.y + dy;
    if (!walls.has(`${nx},${ny}`)) {
        entity.x = nx;
        entity.y = ny;
    }
}

function moveGhost(g) {
    if (g.homeTimer > 0) { g.homeTimer--; return; }
    const dirs = [[1,0],[-1,0],[0,1],[0,-1]];
    const options = dirs.filter(([dx,dy]) => !walls.has(`${g.x+dx},${g.y+dy}`));
    if (options.length === 0) return;
    options.sort((a,b) =>
        Math.abs(pacman.x-(g.x+a[0])) + Math.abs(pacman.y-(g.y+a[1])) -
        (Math.abs(pacman.x-(g.x+b[0])) + Math.abs(pacman.y-(g.y+b[1]))));
    const [dx,dy] = Math.random() < 0.7 ? options[0] : options[Math.floor(Math.random()*options.length)];
    g.x += dx; g.y += dy;
}

function update() {
    tryMove(pacman, pacman.dx, pacman.dy);
    pacman.dx = pacman.dy = 0;
    ghosts.forEach(moveGhost);
    dots = dots.filter(d => {
        if (d.x === pacman.x && d.y === pacman.y) {
            score += 10;
            return false;
        }
        return true;
    });
    powerDots = powerDots.filter(d => {
        if (d.x === pacman.x && d.y === pacman.y) {
            score += 50;
            return false;
        }
        return true;
    });
    updateScore();
    if (ghosts.some(g => g.x === pacman.x && g.y === pacman.y)) {
        alert('Game Over!');
        startGame();
    }
    if (dots.length === 0 && powerDots.length === 0) {
        alert('You Win!');
        startGame();
    }
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawWalls();
    drawDots();
    drawGhosts();
    drawPacman();
}

function loop() {
    update();
    draw();
}

function handleKey(e) {
    if (e.key === 'ArrowUp') { pacman.dy = -1; pacman.dx = 0; }
    if (e.key === 'ArrowDown') { pacman.dy = 1; pacman.dx = 0; }
    if (e.key === 'ArrowLeft') { pacman.dx = -1; pacman.dy = 0; }
    if (e.key === 'ArrowRight') { pacman.dx = 1; pacman.dy = 0; }
}

function handleTouchStart(e) {
    const t = e.touches[0];
    startX = t.clientX; startY = t.clientY;
}

function handleTouchEnd(e) {
    const t = e.changedTouches[0];
    const dx = t.clientX - startX;
    const dy = t.clientY - startY;
    if (Math.abs(dx) > Math.abs(dy)) {
        pacman.dx = dx > 0 ? 1 : -1;
        pacman.dy = 0;
    } else {
        pacman.dy = dy > 0 ? 1 : -1;
        pacman.dx = 0;
    }
}

function updateScore() {
    scoreEl.textContent = `Score: ${score}`;
}

function startGame() {
    pacman.x = 13; pacman.y = 23; pacman.dx = pacman.dy = 0;
    ghosts[0].x = 13; ghosts[0].y = 14; ghosts[0].homeTimer = 40;
    ghosts[1].x = 14; ghosts[1].y = 14; ghosts[1].homeTimer = 80;
    initLevel();
    clearInterval(intervalId);
    intervalId = setInterval(loop, 150);
}

document.addEventListener('keydown', handleKey);
canvas.addEventListener('touchstart', handleTouchStart);
canvas.addEventListener('touchend', handleTouchEnd);
newGameBtn.addEventListener('click', startGame);
window.addEventListener('resize', resizeCanvas);
window.addEventListener('load', () => { resizeCanvas(); startGame(); });
