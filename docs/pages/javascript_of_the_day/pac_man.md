# Pac Man App

### Try It Now

To play **Pac Man** right here in your browser, click the link below:

<!-- Button to open modal -->
<button id="openModalButton" class="cta-btn">Open Pac Man App</button>

<!-- Modal -->
<div id="pac_manModal">
  <div id="modalContent">
    <span id="closeModal" class="close">&times;</span>
    <iframe src="../../_static/apps/pac_man/pac_man.html" title="Pac Man App"></iframe>
  </div>
</div>

### Overview

The **Pac Man App** is a simplified homage to the classic arcade game. Move Pac Man around the grid to eat all the dots while avoiding the roaming ghost.

### Features

- **Arrow Key Controls:** Use the arrow keys to navigate Pac Man.
- **Random Ghost:** A red ghost moves unpredictably around the board.
- **Dot Collection:** Clear the board by eating every dot.
- **Pure Client-Side:** Built entirely with HTML5 Canvas and vanilla JavaScript.

### Purpose

This project demonstrates how Codex can generate an interactive game complete with basic AI and keyboard controls. Everything runs locally in your browser with no backend.

### How It Works

1. **Movement:** Pac Man moves one grid cell in the direction of the pressed arrow key.
2. **Ghost AI:** The ghost randomly chooses a direction at intervals.
3. **Win/Lose Conditions:** Clear all dots to win or collide with the ghost to end the game.

<script>
document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("pac_manModal");
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
#pac_manModal {
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
