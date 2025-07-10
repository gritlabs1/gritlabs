const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const cellSize = 20;
const rows = canvas.width / cellSize;
const cols = canvas.height / cellSize;

const pacman = { x: 10, y: 10, dx: 0, dy: 0 };
const ghost = { x: 1, y: 1 };
let dots = [];

for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
        if (!(i === pacman.x && j === pacman.y)) {
            dots.push({ x: i, y: j });
        }
    }
}

function drawCircle(x, y, color) {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(x * cellSize + cellSize / 2, y * cellSize + cellSize / 2, cellSize / 2 - 2, 0, Math.PI * 2);
    ctx.fill();
}

function drawPacman() {
    ctx.fillStyle = 'yellow';
    ctx.beginPath();
    const px = pacman.x * cellSize + cellSize / 2;
    const py = pacman.y * cellSize + cellSize / 2;
    ctx.arc(px, py, cellSize / 2 - 2, 0.25 * Math.PI, 1.75 * Math.PI);
    ctx.lineTo(px, py);
    ctx.fill();
}

function drawGhost() {
    drawCircle(ghost.x, ghost.y, 'red');
}

function drawDots() {
    ctx.fillStyle = 'white';
    dots.forEach(d => {
        ctx.beginPath();
        ctx.arc(d.x * cellSize + cellSize / 2, d.y * cellSize + cellSize / 2, 3, 0, Math.PI * 2);
        ctx.fill();
    });
}

function move(entity, dx, dy) {
    entity.x = Math.max(0, Math.min(rows - 1, entity.x + dx));
    entity.y = Math.max(0, Math.min(cols - 1, entity.y + dy));
}

function update() {
    move(pacman, pacman.dx, pacman.dy);
    pacman.dx = pacman.dy = 0;
    if (Math.random() < 0.3) {
        const dir = Math.floor(Math.random() * 4);
        if (dir === 0) move(ghost, 1, 0);
        if (dir === 1) move(ghost, -1, 0);
        if (dir === 2) move(ghost, 0, 1);
        if (dir === 3) move(ghost, 0, -1);
    }
    dots = dots.filter(d => !(d.x === pacman.x && d.y === pacman.y));
    if (pacman.x === ghost.x && pacman.y === ghost.y) {
        alert('Game Over!');
        reset();
    }
    if (dots.length === 0) {
        alert('You Win!');
        reset();
    }
}

function reset() {
    pacman.x = 10; pacman.y = 10;
    ghost.x = 1; ghost.y = 1;
    dots = [];
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (!(i === pacman.x && j === pacman.y)) {
                dots.push({ x: i, y: j });
            }
        }
    }
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawDots();
    drawGhost();
    drawPacman();
}

function loop() {
    update();
    draw();
}
setInterval(loop, 200);

document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowUp') pacman.dy = -1;
    if (e.key === 'ArrowDown') pacman.dy = 1;
    if (e.key === 'ArrowLeft') pacman.dx = -1;
    if (e.key === 'ArrowRight') pacman.dx = 1;
});
