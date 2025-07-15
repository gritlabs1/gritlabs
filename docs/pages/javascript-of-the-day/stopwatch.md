# Stopwatch App

### Try It Now

To test the **Stopwatch App** yourself and see the functionality in action, click the link below:

<!-- Button to open modal -->
<button id="openModalButton" class="cta-btn">Open Stopwatch App</button>

<!-- Modal -->
<div id="stopwatchModal">
  <div id="modalContent">
    <span id="closeModal" class="close">&times;</span>
    <iframe src="../../_static/apps/stopwatch/stopwatch.html" title="Stopwatch App"></iframe>
  </div>
</div>

### Overview

The **Stopwatch App** is a lightweight, interactive web application designed to help users measure elapsed time. It persists data locally using the browser's `localStorage`, eliminating the need for a backend.

### Features

- **Start the Timer:** Begin counting elapsed time.
- **Stop the Timer:** Pause the current run.
- **Reset:** Clear the timer back to zero.
- **Persistent Storage:** Utilizes `localStorage` so the timer value survives page reloads.

### Purpose

Demonstrates Codex's ability to generate complete, deployable web applications with client-side storage and minimal setup.

### How It Works

1. **Starting:** Press the "Start" button to begin counting; the timestamp is stored.
2. **Stopping:** Press "Stop" to pause and save the elapsed time to `localStorage`.
3. **Resetting:** Clear the stored value and display using the "Reset" button.

<script>
document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("stopwatchModal");
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
#stopwatchModal {
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
