# Roulette App

### Try It Now

To test the **Roulette App** yourself and see the functionality in action, click the link below:

<!-- Button to open modal -->
<button id="openModalButton" class="cta-btn">Open Roulette App</button>

<!-- Modal -->
<div id="rouletteModal" style="display:none;">
  <div id="modalContent">
    <span id="closeModal" class="close">&times;</span>
    <iframe src="../../_static/apps/roulette/roulette.html" title="Roulette App"></iframe>
  </div>
</div>

### Overview

The **Roulette App** is a minimalist roulette simulator written in vanilla JavaScript. It runs entirely in the browser and lets you place simple bets, spin the wheel, and track a virtual balance.

### Features

- **Place Bets:** Wager on a single number, a color, or odd/even.
- **Spinning Animation:** A lightweight CSS wheel spins on each bet.
- **Payout Calculation:** Wins and losses update your balance instantly.
- **Client-Side Only:** No backend or server is required.

### Purpose

Demonstrates Codex's ability to generate a playable mini game with nothing more than HTML, CSS, and JavaScript.

### How It Works

1. **Choose a Bet:** Select a bet type and amount (and a number if applicable).
2. **Spin the Wheel:** Click **Spin** to animate the wheel and reveal the winning number.
3. **View Results:** Your balance increases or decreases based on standard roulette payouts.

<script>
// Modal behavior (same as landing page)
document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("rouletteModal");
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
// Use the same styles as defined for the landing page modal and button, adjusting the modal ID selector accordingly.
#rouletteModal {
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
