function addTask() {
  var taskInput = document.getElementById("taskInput");
  var taskList = document.getElementById("taskList");

  if (taskInput.value !== "") {
    var task = document.createElement("li");
    task.textContent = taskInput.value;
    task.className = "task";

    var deleteButton = document.createElement("span");
    deleteButton.textContent = " ";
    deleteButton.className = "delete-button fa fa-trash";

    deleteButton.addEventListener("click", function () {
      task.parentNode.removeChild(task);
    });

    task.appendChild(deleteButton);
    taskList.appendChild(task);

    taskInput.value = "";
  }
}
