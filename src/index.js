import pendingIcon from "./assets/pending_icon.svg";
import completedIcon from "./assets/completed_icon.svg";
import deletedIcon from "./assets/deleted_icon.svg";

import "./styles.css";

import { renderProjectForm } from "./modules/render";
import "./modules/test";

document.querySelector("#pending-icon").src = pendingIcon;
document.querySelector("#completed-icon").src = completedIcon;
document.querySelector("#deleted-icon").src = deletedIcon;

// ----------- MAIN LOGIC -----------
// Create Project
const addProjectBtn = document.querySelector("#addproject");
addProjectBtn.addEventListener("click", function (event) {
    renderProjectForm();
});

// DOTHISLATER
// User Actions (Add, delete, edit)
// Event listener for if add / delete / edit button is clicked. Pass todo object.
