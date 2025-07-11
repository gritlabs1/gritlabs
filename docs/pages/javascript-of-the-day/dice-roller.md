# Dice Roller App

### Try It Now

To test the **Dice Roller App** yourself and see the functionality in action, click the link below:

<!-- Button to open modal -->
<button id="openModalButton" class="cta-btn">Open Dice Roller App</button>

<!-- Modal -->
<div id="dice_rollerModal">
  <div id="modalContent">
    <span id="closeModal" class="close">&times;</span>
    <iframe src="../../static/apps/dice-roller/dice-roller.html" title="Dice Roller App"></iframe>
  </div>
</div>

### Overview

The **Dice Roller App** is a lightweight web application that simulates rolling two dice. It records each result in your browser's `localStorage`, so the latest rolls persist even after you refresh.

### Features

- **Roll Two Dice:** Click a button to generate two random numbers from 1 to 6.
- **Random Outcomes:** Dice faces change every roll.
- **History Tracking:** Stores the last ten rolls in a list.
- **Persistent Storage:** Keeps history using `localStorage` across reloads.

### Purpose

Demonstrates Codex's ability to generate a small, stateful game entirely in the browser.

### How It Works

1. **Rolling:** Press the "Roll Dice" button to generate new values for each die.
2. **Updating History:** The combination and total are prepended to the history list.
3. **Persisting:** History is saved in `localStorage` so previous rolls appear on reload.

<script>
// Modal behavior (same as landing page)
document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("dice_rollerModal");
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
#dice_rollerModal {
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
