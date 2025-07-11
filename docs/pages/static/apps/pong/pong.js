const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

const paddleHeight = 60;
const paddleWidth = 10;
const player = { x: 10, y: canvas.height / 2 - paddleHeight / 2, dy: 0 };
const ai = { x: canvas.width - paddleWidth - 10, y: canvas.height / 2 - paddleHeight / 2 };
const ball = { x: canvas.width / 2, y: canvas.height / 2, radius: 7, dx: 4, dy: 4 };
let playerScore = 0;
let aiScore = 0;

function drawRect(x, y, w, h) {
    ctx.fillRect(x, y, w, h);
}

function drawBall() {
    ctx.beginPath();
    ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
    ctx.fill();
}

function resetBall() {
    ball.x = canvas.width / 2;
    ball.y = canvas.height / 2;
    ball.dx = -ball.dx;
    ball.dy = 4 * (Math.random() > 0.5 ? 1 : -1);
}

function update() {
    // move player
    player.y += player.dy;
    if (player.y < 0) player.y = 0;
    if (player.y + paddleHeight > canvas.height) player.y = canvas.height - paddleHeight;

    // simple AI
    if (ball.y < ai.y + paddleHeight / 2) ai.y -= 3;
    else if (ball.y > ai.y + paddleHeight / 2) ai.y += 3;
    if (ai.y < 0) ai.y = 0;
    if (ai.y + paddleHeight > canvas.height) ai.y = canvas.height - paddleHeight;

    // move ball
    ball.x += ball.dx;
    ball.y += ball.dy;

    // collision with top/bottom
    if (ball.y - ball.radius < 0 || ball.y + ball.radius > canvas.height) {
        ball.dy = -ball.dy;
    }

    // collision with player paddle
    if (
        ball.x - ball.radius < player.x + paddleWidth &&
        ball.y > player.y &&
        ball.y < player.y + paddleHeight
    ) {
        ball.dx = Math.abs(ball.dx);
    }

    // collision with ai paddle
    if (
        ball.x + ball.radius > ai.x &&
        ball.y > ai.y &&
        ball.y < ai.y + paddleHeight
    ) {
        ball.dx = -Math.abs(ball.dx);
    }

    // scoring
    if (ball.x - ball.radius < 0) {
        aiScore++;
        resetBall();
    } else if (ball.x + ball.radius > canvas.width) {
        playerScore++;
        resetBall();
    }

    document.getElementById('score').textContent = `${playerScore} : ${aiScore}`;
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawRect(player.x, player.y, paddleWidth, paddleHeight);
    drawRect(ai.x, ai.y, paddleWidth, paddleHeight);
    drawBall();
}

function loop() {
    update();
    draw();
    requestAnimationFrame(loop);
}

// keyboard input
window.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowUp') player.dy = -5;
    if (e.key === 'ArrowDown') player.dy = 5;
});
window.addEventListener('keyup', (e) => {
    if (e.key === 'ArrowUp' || e.key === 'ArrowDown') player.dy = 0;
});

// touch/pointer input for mobile devices
function movePaddleWithPointer(evt) {
    const rect = canvas.getBoundingClientRect();
    const clientY = evt.touches ? evt.touches[0].clientY : evt.clientY;
    player.y = clientY - rect.top - paddleHeight / 2;
    if (player.y < 0) player.y = 0;
    if (player.y + paddleHeight > canvas.height) player.y = canvas.height - paddleHeight;
    evt.preventDefault();
}

canvas.addEventListener('pointerdown', movePaddleWithPointer);
canvas.addEventListener('pointermove', movePaddleWithPointer);
canvas.addEventListener('touchstart', movePaddleWithPointer, { passive: false });
canvas.addEventListener('touchmove', movePaddleWithPointer, { passive: false });

ctx.fillStyle = '#fff';
loop();
