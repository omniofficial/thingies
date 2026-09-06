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
function editTodo(todo, todoCard, todos) {
    console.log("editTodo triggered");

    const title = todoCard.querySelector("h2");
    const titleInput = document.createElement("input");
    titleInput.value = todo.title;

    // Replaces existing title with an input box.
    title.replaceWith(titleInput);

    // Creation of cancel and submit buttons while editing
    const cancelButton = document.createElement("button");
    cancelButton.textContent = `Cancel`;
    todoCard.appendChild(cancelButton);

    const submitButton = document.createElement("button");
    submitButton.textContent = `Submit`;
    todoCard.appendChild(submitButton);

    // Event Listeners for both cancelEditButton and deleteButton
    cancelButton.addEventListener("click", function () {
        renderTodos(todos);
    });

    submitButton.addEventListener("click", function () {
        // blank
    });
}

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
