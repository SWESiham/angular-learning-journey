
export default function add(x,y) {
    console.log(x + y);
}


export class Student{
    #name;
    #age;
    #level;
    constructor(_name, _age, _level) {
        this.#name = _name;
        this.#age = _age;
        this.#level = _level;
    }
    set setage(age) {
        return this.#age = age;
    }
    get getage() {
        return this.#age;
    }

    show() {
        return `name: ${this.#name}, age: ${this.#age}, level: ${this.#level}`;
    }
}

// let s = new Student("siham", 22, "4");
// console.log(s.show());
// s.setage = 23;
// console.log(s.show());