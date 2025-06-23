function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskList = document.getElementById('taskList');
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  const li = document.createElement('li');
  li.innerHTML = `
    <span onclick="toggleComplete(this)">${taskText}</span>
    <button onclick="removeTask(this)">Delete</button>
  `;
  taskList.appendChild(li);
  taskInput.value = "";
}

function removeTask(button) {
  button.parentElement.remove();
}

function toggleComplete(span) {
  span.parentElement.classList.toggle('completed');
}