import { createProject } from "./project";

function renderProjectForm() {
    console.log("renderProjectForm function ran");
    const content = document.querySelector("#main-content");

    content.innerHTML = "";

    // Create form
    const form = document.createElement("form");
    form.id = "project-form";

    // Create title
    const title = document.createElement("h2");
    title.textContent = "Create New Project";
    form.appendChild(title);

    // Create label
    const label = document.createElement("label");
    label.textContent = "Project Name:";
    label.setAttribute("for", "project-name");
    form.appendChild(label);

    // Create input
    const input = document.createElement("input");
    input.type = "text";
    input.id = "project-name";
    input.placeholder = "Enter project name";
    form.appendChild(input);

    // Create submit button
    const button = document.createElement("button");
    button.type = "submit";
    button.textContent = "Create Project";
    form.appendChild(button);

    // Listener for form submit.
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        const project_title = input.value;
        const newProject = createProject(project_title);
        renderProjectSidebar(newProject);
    });

    // Append form to content
    content.appendChild(form);
}

// Renders Sidebar with new project data
function renderProjectSidebar(project_title) {
    console.log("renderProjectSidebar function ran");
    // Select project list div

    // Create list element

    // Title list element with project_title

    // Append list element to div
}

function renderProjectPage(project) {
    console.log("renderProjectPage function ran");
    renderProjectTitle(project);
    renderTodos(project);
}

function renderProjectTitle(project) {
    const content = document.querySelector("#main-content");
    console.log("renderProjectTitle function ran");

    // Get title of selected project.

    // Create project title div?

    // Populate with title

    // Append projectTitle div to content
}

// FIX THIS: Renders TODOS for the currently selected project
function renderTodos(sortedTodos) {
    // Select content div ID
    const content = document.querySelector("#main-content");
    content.innerHTML = ""; // clears whatever is in the #content div.

    // Loop through sorted array. Only call render TODO's with sorted array.
    for (const todo of sortedTodos) {
        // Create new todo card
        const todoCard = document.createElement("div");
        todoCard.classList.add("todo-card");

        // Create title portion of card
        const title = document.createElement("h2");
        title.textContent = todo.title;
        todoCard.appendChild(title);

        // Create description portion of card
        const description = document.createElement("p");
        description.textContent = `Description: ${todo.description}`;
        todoCard.appendChild(description);

        // Create dueDate portion of card
        const dueDate = document.createElement("p");
        dueDate.textContent = `Due Date: ${todo.dueDate}`;
        todoCard.appendChild(dueDate);

        // Create priority portion of card
        const priority = document.createElement("p");
        priority.textContent = `Priority: ${todo.priority}`;
        todoCard.appendChild(priority);

        // Create status portion of card
        const status = document.createElement("p");
        status.textContent = `Status: ${todo.status}`;
        todoCard.appendChild(status);

        // Append card to #content
        content.appendChild(todoCard);
        console.log("I looped");
    }
}

export {
    renderProjectForm,
    renderProjectSidebar,
    renderProjectPage,
    renderTodos,
};
