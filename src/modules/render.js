import { createProject } from "./project";
import { createTodo, sortA } from "./todo";
import { projects } from "./state";
import {
    sortAlphabetical,
    sortDueDate,
    sortPriority,
    sortStatus,
} from "./todo";

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
    renderTodos(project.todos);
    renderSort(project.todos);
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
function renderTodoForm(project) {
    const todoFormContainer = document.querySelector("#todo-form-container");

    // Clear existing form
    todoFormContainer.innerHTML = "";

    // Create form
    const form = document.createElement("form");
    form.id = "todo-form";

    // Create title
    const title = document.createElement("h2");
    title.textContent = `Add Todo to ${project.name}`;

    // Title input
    const titleLabel = document.createElement("label");
    titleLabel.setAttribute("for", "todo_title");
    titleLabel.textContent = "Title";

    const titleInput = document.createElement("input");
    titleInput.type = "text";
    titleInput.id = "todo_title";
    titleInput.name = "title";
    titleInput.required = true;

    // Description input
    const descriptionLabel = document.createElement("label");
    descriptionLabel.setAttribute("for", "todo_description");
    descriptionLabel.textContent = "Description";

    const descriptionInput = document.createElement("textarea");
    descriptionInput.id = "todo_description";
    descriptionInput.name = "description";

    // Due date input
    const dueDateLabel = document.createElement("label");
    dueDateLabel.setAttribute("for", "todo_dueDate");
    dueDateLabel.textContent = "Due Date";

    const dueDateInput = document.createElement("input");
    dueDateInput.type = "date";
    dueDateInput.id = "todo_dueDate";
    dueDateInput.name = "dueDate";

    // Priority input
    const priorityLabel = document.createElement("label");
    priorityLabel.setAttribute("for", "priority");
    priorityLabel.textContent = "Priority";

    const priorityInput = document.createElement("select");
    priorityInput.id = "priority";
    priorityInput.name = "priority";

    const lowOption = document.createElement("option");
    lowOption.value = "low";
    lowOption.textContent = "Low";

    const mediumOption = document.createElement("option");
    mediumOption.value = "medium";
    mediumOption.textContent = "Medium";

    const highOption = document.createElement("option");
    highOption.value = "high";
    highOption.textContent = "High";

    priorityInput.append(lowOption, mediumOption, highOption);

    // Status input
    const statusLabel = document.createElement("label");
    statusLabel.setAttribute("for", "status");
    statusLabel.textContent = "Status";

    const statusInput = document.createElement("select");
    statusInput.id = "status";
    statusInput.name = "status";

    const incompleteOption = document.createElement("option");
    incompleteOption.value = "incomplete";
    incompleteOption.textContent = "Incomplete";

    const completeOption = document.createElement("option");
    completeOption.value = "complete";
    completeOption.textContent = "Complete";

    statusInput.append(incompleteOption, completeOption);

    // Submit button
    const submitButton = document.createElement("button");
    submitButton.type = "submit";
    submitButton.id = "submit_form";
    submitButton.textContent = "Add Todo";

    // Add elements to form
    form.append(
        title,
        titleLabel,
        titleInput,
        descriptionLabel,
        descriptionInput,
        dueDateLabel,
        dueDateInput,
        priorityLabel,
        priorityInput,
        statusLabel,
        statusInput,
        submitButton,
    );

    // Add form to container
    todoFormContainer.appendChild(form);

    /* SUBMISION LOGIC */
    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const formData = {
            title: titleInput.value,
            description: descriptionInput.value,
            dueDate: dueDateInput.value,
            priority: priorityInput.value,
            status: statusInput.value,
        };
        // Create a Todo instance
        const newTodo = createTodo(formData);

        // Add the Todo the current project's todos array
        project.addTodo(newTodo);

        // Re renders list of todos
        renderTodos(project.todos);
    });
}

function renderTodos(sortedTodos) {
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
    }
}

function renderSort(todos) {
    const sortContainer = document.querySelector("#sort-container");
    sortContainer.innerHTML = "";

    const heading = document.createElement("h1");
    heading.textContent = "Sort Todos by: ";

    // Sort dropdown
    const select = document.createElement("select");

    const alphabeticalOption = document.createElement("option");
    alphabeticalOption.value = "alphabetical";
    alphabeticalOption.textContent = "Alphabetical";

    const dueDateOption = document.createElement("option");
    dueDateOption.value = "duedate";
    dueDateOption.textContent = "Due Date";

    const priorityOption = document.createElement("option");
    priorityOption.value = "priority";
    priorityOption.textContent = "Priority";

    const statusOption = document.createElement("option");
    statusOption.value = "status";
    statusOption.textContent = "Status";

    select.append(
        alphabeticalOption,
        dueDateOption,
        priorityOption,
        statusOption,
    );

    sortContainer.append(select);

    // Watches if the value of the drop down changes. EX: select.value becomes "alphabetical" from "dueDate"
    // event.target targets the specific select element.
    select.addEventListener("change", function (event) {
        if (event.target.value == "alphabetical") {
            sortAlphabetical(todos);
        }

        if (event.target.value == "duedate") {
            sortDueDate(todos);
        }

        if (event.target.value == "priority") {
            sortPriority(todos);
        }

        if (event.target.value == "status") {
            sortStatus(todos);
        }
    });
}

export { renderProjectForm, renderTodos };
