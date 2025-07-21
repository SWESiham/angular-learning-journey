// task.js
export class Task {
    constructor(name, description, completed = false) {
        this.name = name;
        this.description = description;
        this.completed = completed;
    }
}
