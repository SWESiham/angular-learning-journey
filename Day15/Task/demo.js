import { greet } from './IPerson.js';
import { multiply } from "./MathOperations.js";
import { DogDetails } from "./animal.js";
const person = {
    name: "siham",
    age: 20,
};
greet(person);
console.log("----------------------");
console.log(multiply(4, 5));
console.log("----------------------");
const dog = {
    name: "meme",
    age: 3,
    breed: "--"
};
DogDetails(dog);
console.log("----------------------");
export function min(arr) {
    let minimum = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < minimum) {
            minimum = arr[i];
        }
    }
    return minimum;
}
const arr = [2, 4, 3, 5, 1];
console.log(min(arr));
