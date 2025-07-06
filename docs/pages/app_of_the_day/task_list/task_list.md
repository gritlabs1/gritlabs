# Task List App - Proof of Concept

### Try It Now

To test the **Task List App** yourself and see the functionality in action, click the link below:

<!-- Button to open modal -->
<button id="openModalButton" class="cta-btn">Open Task List App</button>

<!-- Modal -->
<div id="taskModal">
  <div id="modalContent">
    <span id="closeModal" class="close">&times;</span>
    <iframe src="~/task_list/task_list.html" title="Task List App"></iframe>
  </div>
</div>


### Overview

The **Task List App** is a lightweight, interactive web application designed to help users manage their tasks. The app allows users to add, mark, and delete tasks, all while utilizing the browser's local storage for persistence. This means that tasks remain even after refreshing or reopening the browser, without requiring an external database or server-side component.

### Features

* **Add Tasks**: Users can input tasks into a text field and add them to the task list.
    
* **Mark Tasks as Completed**: Each task can be marked as completed using a checkbox or toggle, providing clear visual differentiation between active and completed tasks.
    
* **Delete Tasks**: Tasks can be removed from the list with a simple delete button next to each entry.
    
* **Persistent Storage**: The app uses the browser's `localStorage` feature to store tasks locally, ensuring the data persists even after the user closes or refreshes the page.
    

### Purpose

This app serves as a proof of concept to demonstrate how Codex can generate complete, deployable web applications. The app showcases essential functionalities such as form handling, user interaction, and persistent storage, all without relying on an external database.

By utilizing a lightweight structure and browser-side storage, this application highlights the ability of Codex to create fully functional web applications quickly, even with limited resources.

### How It Works

1. **Adding Tasks**: Users type in a task and click "Add Task" to append it to the list. The task is then saved in the browser's local storage.
    
2. **Marking Tasks as Completed**: Users can toggle a checkbox next to a task to mark it as completed. This status is saved in local storage and remains even after the page is refreshed.
    
3. **Deleting Tasks**: Users can click a delete icon next to a task to remove it from the list entirely. The change is reflected immediately, and the task is removed from local storage as well.
    

<script>
document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("taskModal");
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
#taskModal {
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



* * *