const todoCol = document.getElementById('todo');
const progressCol = document.getElementById('inProgress');
const doneCol = document.getElementById('done');
const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addTask');

let tasks = JSON.parse(localStorage.getItem('kanbanTasks')) || [];

function saveTasks() {
    localStorage.setItem('kanbanTasks', JSON.stringify(tasks));
}

function render() {
    todoCol.innerHTML = '';
    progressCol.innerHTML = '';
    doneCol.innerHTML = '';
    tasks.forEach(task => {
        const div = document.createElement('div');
        div.className = 'task';
        div.draggable = true;
        div.textContent = task.text;
        div.dataset.id = task.id;
        div.addEventListener('dragstart', e => {
            e.dataTransfer.setData('text/plain', task.id);
        });
        const col = task.status === 'todo' ? todoCol : task.status === 'in-progress' ? progressCol : doneCol;
        col.appendChild(div);
    });
}

function addTask() {
    const text = taskInput.value.trim();
    if (!text) return;
    tasks.push({ id: Date.now().toString(), text, status: 'todo' });
    taskInput.value = '';
    saveTasks();
    render();
}

addBtn.addEventListener('click', addTask);

taskInput.addEventListener('keyup', e => {
    if (e.key === 'Enter' || e.keyCode === 13) {
        e.preventDefault();
        addTask();
    }
});

[todoCol, progressCol, doneCol].forEach(col => {
    col.addEventListener('dragover', e => e.preventDefault());
    col.addEventListener('drop', e => {
        e.preventDefault();
        const id = e.dataTransfer.getData('text/plain');
        const task = tasks.find(t => t.id === id);
        if (task) {
            if (col.id === 'todo') task.status = 'todo';
            else if (col.id === 'inProgress') task.status = 'in-progress';
            else task.status = 'done';
            saveTasks();
            render();
        }
    });
});

document.addEventListener('DOMContentLoaded', render);
