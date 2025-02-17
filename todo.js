function addTodo() {
    const taskInput = document.getElementById("task");
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        const list = document.getElementById("todoList");
        const newTask = document.createElement("li");
        newTask.textContent = taskText;
        newTask.classList.add("list-group-item");
        newTask.setAttribute("onclick", "changeColor(this)");
        list.appendChild(newTask);
        taskInput.value = "";
    }
}

function changeColor(element) {
    // "#" + Math.floor(Math.random()*16777215).toString(16) d'après des recherches ; 
    element.style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);
    element.style.color = "white";
}