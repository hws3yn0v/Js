const taskForm = document.getElementById('taskForm');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');
let tasks = [];

function renderTasks() {
    if (tasks.length === 0) {
        taskList.innerHTML = '<li>No tasks</li>';
    } else {
        taskList.innerHTML = '';
        tasks.forEach((task, index) => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `
        ${task}
        <span class="delete-icon" onclick="deleteTask(${index})"> &#x2715; </span>`;
            taskList.appendChild(listItem);
        });
    }
}

function addTask(task) {
    tasks.push(task);
    renderTasks();
}

function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}

taskForm.addEventListener('submit', event => {
    event.preventDefault();
    addTask(taskInput.value);
    taskInput.value = '';
});
