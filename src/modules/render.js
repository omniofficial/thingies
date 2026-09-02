import { createProject } from "./project";
import { projects } from "./state";

function renderProjectForm() {
    console.log("renderProjectForm function ran");
    const content = document.querySelector("#project-form");

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
        const projectTitle = input.value;
        createProject(projectTitle);
        content.innerHTML = ""; // Clear sidebar once form is submitted
        renderProjectSidebar(projects);
    });

    // Append form to content
    content.appendChild(form);
}

// Renders Sidebar with all projects list data
function renderProjectSidebar(projects) {
    console.log("renderProjectSidebar function ran");

    // Select project list div
    const projectList = document.querySelector("#project-list");

    projectList.innerHTML = "";
    // Loop through each project. Create list element(s) for each project
    for (const project of projects) {
        const projectItem = document.createElement("button");
        projectItem.textContent = project.name;

        // For every project, add clickable event listener. When clicked, render the project object associated with this button.
        projectItem.addEventListener("click", function () {
            renderProjectPage(project);
        });
        projectList.appendChild(projectItem);
    }
}

function renderProjectPage(project) {
    console.log("renderProjectPage function ran");

    renderProjectTitle(project);
    renderTodoForm(project);
    renderProjectTodos(project.todos);
}

function renderProjectTitle(project) {
    const projectTitleContainer = document.querySelector("#project-title");
    console.log("renderProjectTitle function ran");
    projectTitleContainer.innerHTML = "";

    // Create project title element
    const titleElement = document.createElement("h1");

    // Populate with title
    titleElement.textContent = project.name;

    // Append projectTitle div to content
    projectTitleContainer.appendChild(titleElement);
}

/*
// FIX THIS: Renders TODOS for the currently selected project
function renderProjectTodos(sortedTodos) {
    // Select content div ID
    const content = document.querySelector("#todo-list");
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
*/
export { renderProjectForm, renderProjectSidebar, renderProjectPage };
