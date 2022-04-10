document.getElementById("addTask-el").addEventListener("click", addTask);

function addTask(e) {
  console.log(e);
  e.preventDefault();
  const input = document.getElementById("input-el").value;
  const taskList = document.getElementById("tasks");
  const newTask = document.createElement("li");
  newTask.innerHTML = input;
  newTask.classList.add("taskItem");
  taskList.appendChild(newTask);

}