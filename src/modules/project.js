import { projects } from "./state";

export class Project {
    constructor(name) {
        this.name = name;
        this.todos = [];
    }

    addTodo(todo) {
        this.todos.push(todo);
    }
}

export function createProject(project_title) {
    console.log("createProject triggered");
    const project = new Project(project_title);
    projects.push(project);
    console.log(projects);

    return project;
}
