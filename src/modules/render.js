// Renders TODOS for the currently selected project
function renderTodos(sortedTodos) {
    console.log("renderTodo's triggered");
    console.log(sortedTodos); // for debugging

    // Select content div ID
    const content = document.querySelector("#content");
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
        description.textContent = todo.description;
        todoCard.appendChild(description);

        // Create dueDate portion of card
        const dueDate = document.createElement("p");
        dueDate.textContent = todo.dueDate;
        todoCard.appendChild(dueDate);

        // Create priority portion of card
        const priority = document.createElement("p");
        priority.textContent = todo.priority;
        todoCard.appendChild(priority);

        // Create status portion of card
        const status = document.createElement("p");
        status.textContent = todo.status;
        todoCard.appendChild(status);

        // Append card to #content
        content.appendChild(todoCard);
        console.log("I looped");
    }
}

export { renderTodos };
