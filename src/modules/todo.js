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

    // Return the created todo object
    return tempTodo;
}

// Deletes a Todo
function deleteTodo(todo) {
    console.log("deleteTodo triggered");
}

// Edits a Todo
function editTodo(todo) {
    console.log("editTodo triggered");
}

export { createTodo, deleteTodo, editTodo };
