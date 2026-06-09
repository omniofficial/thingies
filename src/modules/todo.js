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

function addTodo(todo) {
    console.log("addTodo triggered");
}

function deleteTodo(todo) {
    console.log("deleteTodo triggered");
}

function editTodo(todo) {
    console.log("editTodo triggered");
}
