const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const scoreEl = document.getElementById('score');

const cellSize = 20;
const rows = canvas.width / cellSize;
const cols = canvas.height / cellSize;

const pacman = { x: 10, y: 10, dx: 0, dy: 0 };
const ghosts = [
  { x: 1, y: 1, color: 'red' },
  { x: rows - 2, y: cols - 2, color: 'cyan' }
];

let dots = [];
let walls = new Set();
let score = 0;

function initWalls() {
  for (let i = 0; i < rows; i++) {
    walls.add(`${i},0`);
    walls.add(`${i},${cols - 1}`);
  }
  for (let j = 0; j < cols; j++) {
    walls.add(`0,${j}`);
    walls.add(`${rows - 1},${j}`);
  }
  for (let i = 5; i < rows - 5; i++) {
    walls.add(`${i},10`);
    walls.add(`10,${i}`);
  }
}

function initDots() {
  dots = [];
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      const key = `${i},${j}`;
      if (!walls.has(key) && !(i === pacman.x && j === pacman.y)) {
        dots.push({ x: i, y: j });
      }
    }
  }
  score = 0;
  updateScore();
}

initWalls();
initDots();

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

function drawGhosts() {
  ghosts.forEach(g => drawCircle(g.x, g.y, g.color));
}

function drawWalls() {
  ctx.fillStyle = '#222';
  walls.forEach(pos => {
    const [x, y] = pos.split(',').map(Number);
    ctx.fillRect(x * cellSize, y * cellSize, cellSize, cellSize);
  });
}

function updateScore() {
  scoreEl.textContent = `Score: ${score}`;
}

function drawDots() {
    ctx.fillStyle = 'white';
    dots.forEach(d => {
        ctx.beginPath();
        ctx.arc(d.x * cellSize + cellSize / 2, d.y * cellSize + cellSize / 2, 3, 0, Math.PI * 2);
        ctx.fill();
    });
}

function tryMove(entity, dx, dy) {
  const nx = Math.max(0, Math.min(rows - 1, entity.x + dx));
  const ny = Math.max(0, Math.min(cols - 1, entity.y + dy));
  if (!walls.has(`${nx},${ny}`)) {
    entity.x = nx;
    entity.y = ny;
  }
}

function moveGhost(g) {
  const options = [];
  [[1,0],[-1,0],[0,1],[0,-1]].forEach(([dx,dy]) => {
    const nx = g.x + dx;
    const ny = g.y + dy;
    if (!walls.has(`${nx},${ny}`)) options.push({dx,dy});
  });
  if (options.length === 0) return;
  options.sort((a,b) => (
    Math.abs(pacman.x-(g.x+a.dx))+Math.abs(pacman.y-(g.y+a.dy)) -
    (Math.abs(pacman.x-(g.x+b.dx))+Math.abs(pacman.y-(g.y+b.dy)))
  ));
  const chase = Math.random() < 0.7;
  const choice = chase ? options[0] : options[Math.floor(Math.random()*options.length)];
  g.x += choice.dx;
  g.y += choice.dy;
}

function update() {
  tryMove(pacman, pacman.dx, pacman.dy);
  pacman.dx = pacman.dy = 0;
  ghosts.forEach(moveGhost);
  dots = dots.filter(d => {
    if (d.x === pacman.x && d.y === pacman.y) {
      score += 10;
      updateScore();
      return false;
    }
    return true;
  });
  if (ghosts.some(g => g.x === pacman.x && g.y === pacman.y)) {
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
  ghosts[0].x = 1; ghosts[0].y = 1;
  ghosts[1].x = rows - 2; ghosts[1].y = cols - 2;
  initDots();
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
setInterval(loop, 150);

document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowUp') { pacman.dy = -1; pacman.dx = 0; }
  if (e.key === 'ArrowDown') { pacman.dy = 1; pacman.dx = 0; }
  if (e.key === 'ArrowLeft') { pacman.dx = -1; pacman.dy = 0; }
  if (e.key === 'ArrowRight') { pacman.dx = 1; pacman.dy = 0; }
});
