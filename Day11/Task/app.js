import {add, subtract} from "./mathUtils.js";
console.log(add(10, 20));
console.log(subtract(20, 10));

//----------------------------------------
// app.js
import { TaskManager } from "./taskManager.js";

const taskManager = new TaskManager();

taskManager.addTask("Task 1", "Description 1", false);
taskManager.addTask("Task 2", "Description 2", true);
taskManager.addTask("Task 3", "Description 3", true);
taskManager.addTask("Task 4", "Description 4", true);
taskManager.addTask("Task 5", "Description 5", false);

console.log("All Tasks:");
taskManager.listTasks();

taskManager.removeTask();
console.log("After Removing Task 1:");
taskManager.listTasks();
