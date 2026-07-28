function renderTodos(sortedTodos) {
    console.log("renderTodo's triggered");
    console.log(sortedTodos); // for debugging

    // Select content div ID
    const content = document.querySelector("#content");

    // Loop through sorted array. Only call render TODO's with sorted array.
    for (todo in sortedTodos) {
        // Create new todo card

        // Create title portion of card

        // Append to card

        // Create description portion of card

        // Append to card

        // Create dueDate portion of card

        // Append to card

        // Create priority portion of card

        // Append to card

        // Create status portion of card

        // Append to card
        console.log("I looped");
    }
}

export { renderTodos };
