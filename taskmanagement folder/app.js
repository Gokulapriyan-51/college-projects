// Get references to DOM elements
const addTaskButton = document.querySelector("#addTask");
const taskInput = document.querySelector("#taskInput");
const taskList = document.querySelector(".task-list");

// Add Task Button Event Listener
addTaskButton.addEventListener("click", () => {
    const taskText = taskInput.value.trim(); // Trim to remove extra spaces

    // Validate if the input is empty
    if (taskText === "") {
        alert("Task cannot be empty. Please enter a task!");
        return;
    }

    // Create a new task item
    const taskItem = document.createElement("div");
    taskItem.classList.add("task-item");

    // Add task details
    taskItem.innerHTML = `
        <h3>${taskText}</h3>
        <button class="delete-btn">Delete</button>
    `;

    // Append the task item to the list
    taskList.appendChild(taskItem);

    // Clear the input field
    taskInput.value = "";

    // Add Delete Functionality
    const deleteButton = taskItem.querySelector(".delete-btn");
    deleteButton.addEventListener("click", () => {
        taskItem.remove(); // Remove the task item
    });
});

