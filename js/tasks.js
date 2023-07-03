function addTask() {
  let taskInput = document.getElementById("taskInput");
  let taskList = document.getElementById("taskList");

  if (taskInput.value !== "") {
    let task = document.createElement("li");

    let input = document.createElement("input");
    input.type = "checkbox";
    input.id = "checkmark";
    input.className = "checkmark";

    let label = document.createElement("label");
    label.htmlFor = "checkmark";
    label.id = "text";
    label.textContent = taskInput.value;

    input.addEventListener("click", function () {
      if (input.checked) {
        const label = this.parentElement.children[1];

        label.innerHTML = `<del>${label.textContent}</del>`;
      } else {
        const label = this.parentElement.children[1];

        const removeS = label.textContent
          .replace("<del>", "")
          .replace("</del>", "");

        label.innerHTML = removeS;
      }
    });

    let deleteButton = document.createElement("span");
    deleteButton.className = "delete-button fa fa-trash";

    deleteButton.addEventListener("click", function () {
      const isConfirmed = confirm("Você quer mesmo deletar essa tarefa?");

      if (isConfirmed) {
        task.parentNode.removeChild(task);
      }
    });

    task.appendChild(input);
    task.appendChild(label);
    task.appendChild(deleteButton);
    taskList.appendChild(task);

    taskInput.value = "";
  }
}
