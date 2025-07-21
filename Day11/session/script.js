// class

class user {
    // private fields
    // #name;
    // #age;
    //--------------
    constructor(_name, _age) {
        // this.#name = name;
        // this.#age = age;
        //private variable => previlidge method
        let age = _age;
        let name = _name;
        this.show = ()=> {
            return `name: ${name}, age: ${age}`;
        }
        //private previlidge method
        this.setName = (nm) => {
            name = nm;
        }

    }
    // // set to be as a property
    // set setName(name) {
    //     this.#name = name;
    // }
    // // get to be as a property
    // get getName() {
    //     return this.#name;
    // }
    // set age(age) {
    //     if (age < 0)
    //         console.log("age can't be negative");
    //     else
    //         this.#age = age;
    // }
    // get age() {
    //     return this.#age;
    // }
    // print() {
    //     return `name: ${this.#name}, age: ${this.#age}`;
    // }


    set Name(name) {
        return this.setName(name);
    }
    
}

// let u = new user("siham", 20);
// console.log(u.show());
// u.setName("seham");
// console.log(u.show());
// u.setName = "seham"; // after set
// u.setName("sara"); before set
// console.log(u.getName); //seham
// console.log(u.print()); //name: seham, age: 20
//lw hatet -ve hyhot age bt3 siham
// u.age = 10; // after set
// console.log(u.age); //10
// console.log(u.print()); //name: seham, age: 10
// u.Name = "sara";
// console.log(u.Name);


//----------------------------------------

class Person{
    constructor(_name, _age){
        let name = _name;
        let age = _age;

        // previlidge method to access name & age from outside 
        this.display = () => {
            return {
                Name: name,
                Age: age
            }
        }

        this.print = () => {
            return `name: ${this.display().Name}, age: ${this.display().Age}`;
        }
    }
}

// let p = new Person("siham", 22);
// console.log(p.print());
// console.log(p.display().Name);
// console.log(p.display().Age);


//----------------------------------------

class employee{
    constructor(_name, _age,_gender) {
        //public fields
        this.name = _name;
        this.age = _age;
        this.gender = _gender;
    }
}
// inheritance
class doctor extends employee{
    constructor(_name, _age, _gender, _salary) {
        super(_name, _age, _gender);
        this.salary = _salary;
    }

    display() {
        return {
            Name: this.name,
            Age: this.age,
            Gender: this.gender,
            Salary: this.salary
        }
    }
}


let d = new doctor("siham", 22, "female", 1000);
console.log(d.display());

import add from "./app.js";
add(20, 30);



//----------------------------------------
import {Student} from "./app.js";
const stud = new Student("siham", 22, "4");
console.log(stud.show());
