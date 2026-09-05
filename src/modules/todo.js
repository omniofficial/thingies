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

function deleteTodo(todos) {
    console.log("deleteTodo triggered");

    // todos pop?
    renderTodos(todos);
}

function editTodo(todos) {
    console.log("editTodo triggered");
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
    console.log("sortStatus triggered");

    renderTodos(todos);
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
