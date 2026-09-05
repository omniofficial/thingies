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

function deleteTodo(todos) {
    console.log("deleteTodo triggered");

    // todos pop?
    renderTodos(todos);
}

function editTodo(todos) {
    console.log("editTodo triggered");
}

function sortAlphabetical(todos) {
    console.log("sortAlphabetical triggered");

    for (const todo of todos) {
    }

    const testTodos = [
        { title: "Zebra" },
        { title: "Apple" },
        { title: "Monkey" },
    ];

    sortAlphabetical(testTodos);

    // renderTodos(todos);
}

function sortDueDate(todos) {
    console.log("sortDueDate triggered");

    // renderTodos(todos);
}

function sortPriority(todos) {
    console.log("sortPriority triggered");

    // renderTodos(todos);
}

function sortStatus(todos) {
    console.log("sortStatus triggered");

    // renderTodos(todos);
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
