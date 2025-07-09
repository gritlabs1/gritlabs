# JavaScript of the Day

Welcome to **JavaScript of the Day**, a small corner of Grit Labs where we ask Codex to build a tiny, self contained JavaScript application. Each entry showcases how a language model can turn a short specification into runnable code. These projects are not meant to be production ready—instead they serve as simple, reproducible examples you can explore or extend on your own.

The featured project is a Pong Game written in vanilla JavaScript. It brings the classic arcade experience right to your browser. Click the button below to try it without leaving the page.

<!-- Button to open modal -->
<button id="openModalButton" class="cta-btn">Open Pong Game</button>

<!-- Modal -->
<div id="pongModal">
  <div id="modalContent">
    <span id="closeModal" class="close">&times;</span>
    <iframe src="../../_static/apps/pong/pong.html" title="Pong Game"></iframe>
  </div>
</div>

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
