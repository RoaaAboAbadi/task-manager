

let tasks = [];
let taskId = 1;

function displayTasks() {
    if (tasks.length === 0) {
        console.log("No tasks available.");
        return;
    }
    console.log("Tasks:");
    tasks.forEach(task => {
        console.log(`ID: ${task.id}, Description: ${task.description}, Completed: ${task.completed}`);
    });
}

function addTask(description) {
    const task = {
        id: taskId++,
        description: description,
        completed: false,
    };
    tasks.push(task);
    console.log(`Task added: ${task.description}`);
}

function toggleTaskCompletion(id) {
    const task = tasks.find(task => task.id === id);
    if (task) {
        task.completed = !task.completed;
        console.log(`Task ID ${id} is now ${task.completed ? "completed" : "not completed"}.`);
    } else {
        console.log(`Task ID ${id} not found.`);
    }
}

function updateTask(id, newDescription) {
    const task = tasks.find(task => task.id === id);
    if (task) {
        task.description = newDescription;
        console.log(`Task ID ${id} updated to: ${newDescription}`);
    } else {
        console.log(`Task ID ${id} not found.`);
    }
}

function removeTask(id) {
    const index = tasks.findIndex(task => task.id === id);
    if (index !== -1) {
        const removedTask = tasks.splice(index, 1);
        console.log(`Task removed: ${removedTask[0].description}`);
    } else {
        console.log(`Task ID ${id} not found.`);
    }
}


function showMenu() {
    const option = prompt(`
    Task Manager:
    1. Add a task
    2. View tasks
    3. Toggle task completion
    4. Update a task
    5. Remove a task
    6. Exit
    Choose an option:`);

    switch (option) {
        case '1':
            const desc = prompt("Enter task description:");
            addTask(desc);
            showMenu();
            break;
        case '2':
            displayTasks();
            showMenu();
            break;
        case '3':
            const toggleId = parseInt(prompt("Enter task ID to toggle completion:"));
            toggleTaskCompletion(toggleId);
            showMenu();
            break;
        case '4':
            const updateId = parseInt(prompt("Enter task ID to update:"));
            const newDesc = prompt("Enter the new task description:");
            updateTask(updateId, newDesc);
            showMenu();
            break;
        case '5':
            const removeId = parseInt(prompt("Enter task ID to remove:"));
            removeTask(removeId);
            showMenu();
            break;
        case '6':
            console.log("Exiting Task Manager. Goodbye!");
            break;
        default:
            console.log("Invalid option, please try again.");
            showMenu();
            break;
    }
}

showMenu();
