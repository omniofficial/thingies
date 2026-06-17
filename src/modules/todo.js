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
}

// Adds a Todo
function addTodo(todo) {
    console.log("addTodo triggered");
}

// Deletes a Todo
function deleteTodo(todo) {
    console.log("deleteTodo triggered");
}

// Edits a Todo
function editTodo(todo) {
    console.log("editTodo triggered");
}

export { createTodo, addTodo, deleteTodo, editTodo };
