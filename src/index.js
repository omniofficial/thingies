import pendingIcon from "./assets/pending_icon.svg";
import completedIcon from "./assets/completed_icon.svg";
import deletedIcon from "./assets/deleted_icon.svg";

import "./styles.css";
import { Todo, createTodo, deleteTodo, editTodo } from "./modules/todo";

import {
    renderTodos,
    renderProjectForm,
    renderProjectSidebar,
    renderProjectPage,
} from "./modules/render";

import { projects, todos } from "./modules/state";

document.querySelector("#pending-icon").src = pendingIcon;
document.querySelector("#completed-icon").src = completedIcon;
document.querySelector("#deleted-icon").src = deletedIcon;

// ----------- MAIN LOGIC -----------
// Create Project
const addProjectBtn = document.querySelector("#addproject");
addProjectBtn.addEventListener("click", function (event) {
    renderProjectForm();
});

/* Create TODO (OUTDATED, FIX)
const submitButton = document.querySelector("#submit_form");
const form = document.querySelector("form");

submitButton.addEventListener("click", function (event) {
    event.preventDefault();

    console.log("Button clicked");

    // Convert form data into a formData JS object
    const titleInput = document.querySelector("#todo_title");
    const descriptionInput = document.querySelector("#todo_description");
    const dueDateInput = document.querySelector("#todo_dueDate");
    const priorityInput = document.querySelector("#priority");
    const statusInput = document.querySelector("#status");

    const formData = {
        title: titleInput.value,
        description: descriptionInput.value,
        dueDate: dueDateInput.value,
        priority: priorityInput.value,
        status: statusInput.value,
    };

    // Call createTodo function and pass paramaters
    const newTodo = createTodo(formData);

    // Push newTodo into todos array
    todos.push(newTodo);

    // Call renderer
    renderTodos(todos);
});
*/
// DOTHISLATER
// User Actions (Add, delete, edit)
// Event listener for if add / delete / edit button is clicked. Pass todo object.
