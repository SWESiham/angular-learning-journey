// taskManager.js
import { Task } from "./task.js";

export class TaskManager {
    constructor() {
        this.tasks = [];
    }

    addTask(name, description, completed = false) {
        const task = new Task(name, description, completed);
        this.tasks.push(task);
        return task;
    }

    removeTask() {
        this.tasks = this.tasks.filter(task => !task.completed);
    }

    listTasks() {
        if (this.tasks.length === 0) {
            console.log("No tasks available.");
        } else {
            this.tasks.forEach(task => {
                console.log(`Name: ${task.name}`);
                console.log(`Description: ${task.description}`);
                console.log(`Completed: ${task.completed}`);
                console.log("----");
            });
        }
    }
}
