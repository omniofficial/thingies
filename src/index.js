// Assets Import
import pendingIcon from "./assets/pending_icon.svg";
import completedIcon from "./assets/completed_icon.svg";
import deletedIcon from "./assets/deleted_icon.svg";

// Styling Import
import "./styles.css";

// Modules Import
import { Todo } from "./modules/todo";

// ----------- Assets DOM Loading -----------
document.querySelector("#pending-icon").src = pendingIcon;
document.querySelector("#completed-icon").src = completedIcon;
document.querySelector("#deleted-icon").src = deletedIcon;

// ----------- MAIN LOGIC -----------
let todos = [];

// Create ToDo (MOCK, FOR DEBUGGING)
const todo1 = new Todo("Buy milk", "2%", "today", "low", "pending");
const todo2 = new Todo("Study JS", "Webpack", "tomorrow", "high", "pending");
todos.push(todo1, todo2);
console.log(todos);

// DO THIS NEXT. TAKE INPUT FROM FRONTEND
// Create ToDo (REAL)
// const todo = new Todo(title, description, dueDate, priority, status);

// User Actions (Add, delete, edit)
// Event listener for if add / delete / edit button is clicked. Pass todo object.
