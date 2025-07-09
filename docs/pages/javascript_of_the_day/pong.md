# Pong Game

### Try It Now

To play **Pong** right here in your browser, click the link below:

<!-- Button to open modal -->
<button id="openModalButton" class="cta-btn">Open Pong Game</button>

<!-- Modal -->
<div id="pongModal">
  <div id="modalContent">
    <span id="closeModal" class="close">&times;</span>
    <iframe src="../../_static/apps/pong/pong.html" title="Pong Game"></iframe>
  </div>
</div>

### Overview

The **Pong Game** is a minimalist recreation of the classic arcade game. Use the arrow keys or drag on the left side of the screen to move your paddle while the computer controls the paddle on the right. First to score wins!

### Features

- **Keyboard/Touch Controls:** Use the Up and Down arrow keys or drag on the canvas to move your paddle.
- **Computer Opponent:** The AI paddle automatically tracks the ball.
- **Score Display:** Points are shown below the canvas.
- **Pure Client-Side:** Built entirely with HTML5 Canvas and vanilla JavaScript.

### Purpose

This project demonstrates how Codex can generate a playable browser game with basic physics and input handling. The entire experience runs locally in your browser without any backend code.

### How It Works

1. **Ball Movement:** The ball bounces between the paddles and the top/bottom walls.
2. **Paddle Collision:** When the ball hits a paddle, it reverses direction.
3. **Scoring:** If the ball passes a paddle, the opposing player scores and the ball resets to the center.

<script>
document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("pongModal");
  const openBtn = document.getElementById("openModalButton");
  const closeBtn = document.getElementById("closeModal");
  openBtn.addEventListener("click", () => {
    modal.style.display = "flex";
  });
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });
  modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.style.display = "none";
  });
});
</script>

<style>
/* Same styles as other JavaScript of the Day modals */
#pongModal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: none;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}
#modalContent {
  background: white;
  padding: 20px;
  border-radius: 8px;
  position: relative;
  width: 90%;
  max-width: 600px;
}
#modalContent iframe {
  width: 100%;
  height: 70vh;
  border: none;
}
#closeModal {
  position: absolute;
  top: 10px;
  right: 15px;
  font-size: 24px;
  cursor: pointer;
}
.cta-btn {
  background-color: #ff9800;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
}
.cta-btn:hover {
  background-color: #e68900;
}
</style>
