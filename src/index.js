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
const title = "blah";
const description = "blah";
const dueDate = "blah";
const priority = "blah";

const todo = new Todo(title, description, dueDate, priority);

console.log(todo);
