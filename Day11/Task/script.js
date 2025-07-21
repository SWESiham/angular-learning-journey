/**
 * -Create a base class Shape with a method to calculate the area. 
 * Then create subclasses Circle and Rectangle that extend Shape and override the area method
 */

class Shape {
    constructor(_r) {
        this.r = _r;
    }
    area() {
        
    }
}

class Circle extends Shape {
    constructor(_r) {
        super(_r);
    }
    area() {
        return Math.PI * this.r * this.r;
    }
}
class Rectangle extends Shape {
    constructor(_w, _h) {
        super(_w);
        this.width = _w;
        this.height = _h;
    }
    area() {
        return this.width * this.height;
    }
}

let circle = new Circle(1);
let rectangle = new Rectangle(5, 10);
console.log(circle.area());
console.log(rectangle.area());
console.log("========================")
//----------------------------------------

/**
 * -Create a BankAccount class with the following requirements:

Private Variables:

accountNumber (string): The account number of the bank account.
balance (number): The balance of the bank account.
Privileged Methods:

getAccountDetails(): Returns an object containing the account number and balance.
deposit(amount): Adds the specified amount to the balance. Ensure the amount is positive.
withdraw(amount): Subtracts the specified amount from the balance. Ensure the amount is positive and does not exceed the current balance.
Public Methods:

displayBalance(): Logs the current balance to the console.
 */
class BankAccount{
    constructor(_accountNumber, _balance) {
        let accountNumber = _accountNumber;
        let balance = _balance;
        this.getAccountDetails = () => {
            return {
                acc: accountNumber,
                bal: balance
            }
        }
        this.deposit = (amount) => {
            if (amount > 0)
                balance += amount;
            else
                console.log("Amount must be positive");
        }
        this.withdraw = (amount) => {
            if (amount > 0 && amount <= balance)
                balance -= amount;
            else {
                console.log("Amount must be positive and less than balance");
            }
        }
    
       
    }
    displayBalance() {
        console.log(this.getAccountDetails().bal);
    }
    
}

let bank = new BankAccount("170193", 1000);
console.log(bank.getAccountDetails());
bank.deposit(100); //1100
bank.displayBalance();
bank.withdraw(50); //1050
bank.displayBalance();
bank.withdraw(1500); //Amount must be positive and less than balance
bank.displayBalance();


//----------------------------------------

/**
 * 
 * Create an Employee class with the following requirements:

A private field #salary to store the employee's salary.
A method setSalary(amount) to update the salary (ensure the amount is positive).
A method getSalary() that returns the current salary.
Prevent direct access to the #salary field.
 */

class Employee{
    #salary;
    constructor(_salary) {
        this.#salary = _salary;
    }
    setSalary(amount){
        if (amount > 0)
            this.#salary = amount;
        else
            console.log("Amount must be positive")
    }

    getSalary() {
        return this.#salary;
    }
}
console.log("========================")
let emp = new Employee();
emp.setSalary(2000)
console.log(emp.getSalary());

console.log("========================")
//----------------------------------------

/**
 * Create a class Product that stores the details of a product in a store inventory system with the following requirements:

Private fields: #name, #quantity, and #price.
A method addStock(quantity) that increases the stock of the product.
A method sell(quantity) that reduces the stock of the product (if enough stock is available).
A method getDetails() that returns the product's details (name, price, quantity).
Prevent direct access to the private fields.
 */

class Product{
    #name;
    #quantity;
    #price;
    constructor(_name, _quantity, _price) {
        this.#name = _name;
        this.#quantity = _quantity;
        this.#price = _price;
    }
    addStock(quantity) {
        this.#quantity += quantity;
    }
    sell(quantity) {
        if (this.#quantity >= quantity) {
            this.#quantity -= quantity;
        }
        else {
            console.log("Not enough stock");
        }   
    }
    getDetails() {
        return {
            name: this.#name,
            quantity: this.#quantity,
            price: this.#price
        }
    }
}

let product = new Product("Iphone", 10, 60000);
product.addStock(10);
console.log(product.getDetails());
product.sell(5);
console.log(product.getDetails());
console.log("========================")
//----------------------------------------
/**
 * 
 * Create a file called mathUtils.js that exports a function add() to add two numbers and subtract() to subtract two numbers.
Create another file app.js where you import these functions and use them to perform some calculations.
 */


//----------------------------------------

/**
 * Create a module task.js that exports a class Task to create task objects.
Create a module taskManager.js that exports a class TaskManager to manage#name; tasks (add, remove  when completed, and list tasks).
In app.js, import both modules and implement the app logic.
 */


