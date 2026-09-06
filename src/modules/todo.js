import { renderTodos } from "./render";

export class Todo {
    constructor(title, description, dueDate, priority, status) {
        this.id = crypto.randomUUID();
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.status = status;
    }
}

// Creates a new Todo
function createTodo(todo) {
    console.log("createTodo triggered");
    const tempTodo = new Todo(
        todo.title,
        todo.description,
        todo.dueDate,
        todo.priority,
        todo.status,
    );

    console.log(tempTodo);
    // Return the created todo object
    return tempTodo;
}

// Edit a single todo within the project.todos array
function editTodo(todo, todoCard, todos) {
    console.log("editTodo triggered");

    // Title Editing
    const title = todoCard.querySelector(".todo-title");
    const titleInputBox = document.createElement("input");
    titleInputBox.value = todo.title;
    // Replaces existing title with an input box.
    title.replaceWith(titleInputBox);

    // Description Editing
    const description = todoCard.querySelector(".todo-description");
    const descriptionInputBox = document.createElement("input");
    descriptionInputBox.value = todo.description;
    description.replaceWith(descriptionInputBox);

    // Due Date Editing
    const dueDate = todoCard.querySelector(".todo-due-date");
    const dueDateInputBox = document.createElement("input");
    dueDateInputBox.value = todo.dueDate;
    dueDate.replaceWith(dueDateInputBox);

    // Priority Editing
    const priority = todoCard.querySelector(".todo-priority");
    const priorityInputBox = document.createElement("input");
    priorityInputBox.value = todo.priority;
    priority.replaceWith(priorityInputBox);

    // Status Editing
    const status = todoCard.querySelector(".todo-status");
    const statusInputBox = document.createElement("input");
    statusInputBox.value = todo.status;
    status.replaceWith(statusInputBox);

    // Creation of cancel and submit buttons while editing
    const cancelButton = document.createElement("button");
    cancelButton.textContent = `Cancel`;
    todoCard.appendChild(cancelButton);

    const submitButton = document.createElement("button");
    submitButton.textContent = `Submit`;
    todoCard.appendChild(submitButton);

    // Event Listeners for both cancelEditButton and deleteButton.
    cancelButton.addEventListener("click", function () {
        renderTodos(todos);
    });

    submitButton.addEventListener("click", function () {
        // Take the existing input. Take any new input and transfer it to my todo object that I am currently tracking.

        // Reassignments to todo properties
        todo.title = titleInputBox.value;
        todo.description = descriptionInputBox.value;
        todo.dueDate = dueDateInputBox.value;
        todo.priority = priorityInputBox.value;
        todo.status = statusInputBox.value;

        renderTodos(todos);
    });
}

// Delete a single todo within the project.todos array
function deleteTodo(todo) {
    console.log("deleteTodo triggered");

    // todos pop?
    // renderTodos(todos);. Pass new todos array.
}

function sortAlphabetical(todos) {
    todos.sort((todo1, todo2) => {
        todo1.title.localeCompare(todo2.title);
    });

    renderTodos(todos);
}

function sortDueDate(todos) {
    todos.sort((todo1, todo2) => {
        new Date(todo1.dueDate) - new Date(todo2.dueDate);
    });

    // Reformats new Date format "" back to "2026-07-20" format
    renderTodos(todos);
}

function sortPriority(todos) {
    todos.sort((todo1, todo2) => {
        // Grab numerical values for each rank.
        let todo1Value = priorityRank(todo1.priority);
        let todo2Value = priorityRank(todo2.priority);

        // Sort ordering. EX: todo1 = 3, todo2 = 2. Need negative number.
        return todo2Value - todo1Value;
    });

    renderTodos(todos);
}

function priorityRank(priorityString) {
    // priorityString can be "low", "medium", or "high"

    let value = 0;

    if (priorityString == "low") {
        value = 1;
    } else if (priorityString == "medium") {
        value = 2;
    } else if (priorityString == "high") {
        value = 3;
    }

    return value;
}

function sortStatus(todos) {
    // Grab numerical value for each priority. Assign weight.
    todos.sort((todo1, todo2) => {
        // Grab numerical values for each rank.
        let todo1Value = statusRank(todo1.status);
        let todo2Value = statusRank(todo2.status);

        // Sort ordering. EX: todo1Value = 1 (complete), todo2Value = 2 (incomplete). Incomplete takes priority
        return todo2Value - todo1Value;
    });

    renderTodos(todos);
}

function statusRank(statusString) {
    let value = 0;

    if (statusString == "complete") {
        value = 1;
    } else if (statusString == "incomplete") {
        value = 2;
    }

    return value;
}

export {
    createTodo,
    deleteTodo,
    editTodo,
    sortAlphabetical,
    sortDueDate,
    sortPriority,
    sortStatus,
};
