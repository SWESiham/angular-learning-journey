import { IPerson, greet } from './IPerson.js';
import { multiply } from "./MathOperations.js";
import { IAnimal,IDog, DogDetails } from "./animal.js";
const person: IPerson = {
  name: "siham",
  age: 20,
};

greet(person); 
console.log("----------------------")

console.log(multiply(4, 5));

console.log("----------------------")

const dog : IDog = {
    name: "meme",
    age: 3,
    breed: "--"
};

DogDetails(dog);
console.log("----------------------")



// ----------------------
export function min<T>(arr:T[]):T | undefined {
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
