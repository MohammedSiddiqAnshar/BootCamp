const taskInput = document.getElementById("newTask");
const addButton = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");


addButton.addEventListener("click", function() {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        addTask(taskText);
        taskInput.value = ""; 
    }
});


function addTask(taskText) {
    const li = document.createElement("li");
    li.textContent = taskText;

    const completeBtn = document.createElement("button");
    completeBtn.textContent = "Complete";
    completeBtn.classList.add("completeBtn");
    completeBtn.addEventListener("click", function() {
        li.classList.toggle("completed"); 
    });


    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.classList.add("removeBtn");
    removeBtn.addEventListener("click", function() {
        li.remove(); 
    });

    li.appendChild(completeBtn);
    li.appendChild(removeBtn);

    taskList.appendChild(li);
}
