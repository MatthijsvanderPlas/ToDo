document.getElementById("addTask-el").addEventListener("click", addTask);

function addTask(e) {
  e.preventDefault();
  const input = document.getElementById("input-el").value;
  if (input !== ""){
  const taskList = document.getElementById("tasks");
  const newTask = document.createElement("span");
  const container = document.createElement("div");
  newTask.setAttribute("readonly", true);
  newTask.setAttribute("id", "task-el");
  newTask.setAttribute("role", "textbox");
  const check = document.createElement("a");
  const trash = document.createElement("a")
  check.classList.add("fa", "fa-check", "fa-2x", "check");
  trash.classList.add("fa", "fa-trash", "fa-2x", "trash");
  check.setAttribute("id", "check-el");
  check.setAttribute("id", "trash-el");
  check.addEventListener("click", checkTask);
  check.addEventListener("touchstart", checkTask);
  trash.addEventListener("click", deleteTask);
  trash.addEventListener("touchstart", deleteTask);
  container.classList.add("itemBox");

  newTask.value = input;
  newTask.innerHTML = input;
  document.getElementById("input-el").value = "";
  newTask.classList.add("taskItem");
  container.appendChild(newTask);
  container.appendChild(check);
  container.appendChild(trash);
  taskList.appendChild(container);
  }
}

function checkTask(e) {
  e.preventDefault();
  let task = e.path[0];
  task = task.previousElementSibling;
  task.classList.toggle("line-through");
}

function deleteTask(e) {
  e.preventDefault();
  let task = e.path[1];
  task.parentNode.removeChild(task);

}