//hosting
//function declaration => tmam m3aha el hosting
// function sum(a,b){
//     return a+b;
// }


// sub();
//function expression => X
// const sub = function(a,b){
//     return a-b;
// }
//arrow function
// const mul = (a,b)=>{
//     return a*b;
// }


///////////////////////////

// foo();
// function foo() {
//     function bar() {
//         console.log("bar");
//     }
//     bar();
//     function bar(params) {
//         console.log("bar2");
//     }
// }


// console.log(foo());
// function foo() {
//     function bar() {
//         return 3;
//     }
//     return bar();
//    var bar = function () {
//     return 5;
//     }
    
// }

// console.log(foo());
// function foo() {
//     var bar = function () {
//         return 5;
//     }
//     return bar();
//     // dy et3mel leha hosting w etkateb 3leha expression function
    
//     function bar() {
//         return 3;
//     }
// }

//foo() Not a fuction
// console.log(foo());
// var foo=function() {
//     var bar = function() {
//         return 3;
//     }
//     return bar();
//    var bar = function () {
//     return 5;
//     }
    
// }

//types of functions
//1- named function
//2- anonymous function => expression function
//3- arrow function
//4- IIFE => self invoking function
// 1 - named function
// function sum(a, b) {
    
// }
// 2 - anonymous function
// var sum = function (a, b) {
    
// }
// 3 - arrow function
// var sum = (a, b) => {
    
// }
// 4 - IIFE
// (function (a, b) {
    
// })();



/********************************es6**********  */

// let x = 10;
// console.log(x);
// let : block scope
// if(true){
//     let x = 20;
// }
// console.log(x);

// function test() {
//     var k = 10; // function scope => var
//     let l = 20; // block scope => let
// }
// console.log(k);
// console.log(l);


// REASSIGNMENT => tmam
// let m = 10;
// m = 20;
// console.log(m);

// redeclaration
// let n;
// // n = "siham";
// // n = 12;
// console.log(n);



// const obj = {
//     name:"siham",
//     age:20,
//     gender:"male"
// }
// var { name, age, gender } = obj;
// console.log(name, age, gender);


//spread operator => array to element
// var arr1 = [1, 2, 3];
// var arr2 = [4, 5, 6];
// var arr3 = [...arr1, ...arr2];
// console.log(arr3);


//reset parameter => numbers of parameters to array
// function sum(...arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     return sum;
// }
// console.log(sum(1, 2, 3, 4, 5));




// arrow function
// let sum = (a, b) => a + b;
// console.log(sum(1, 2));

//  this
// console.log(this);  // window

// function test() {
//     console.log(this);
// }
// test(); // this gwa fuction t3od 3la el "window"


let employee = {
    name:"siham",
    age:20,
    gender: "female",
    salary: 1000,
    // calculateSalary: function () {
    //     console.log(this);  //key gwa object 4ayf el object -> this t3od 3la el employee 
    //     var that = this;
    //     var netsalary = function (params) {
    //        //window.salary*5 => undefined*5 => NaN
    //     return that.salary*5;
    //     }
    //     return netsalary();
    // }
    calculateSalary: function () {
        console.log(this);  //key gwa object 4ayf el object -> this t3od 3la el employee 
        var that = this;
        var netsalary = (params) => {
            //key gwa object 4ayf el object -> this t3od 3la el employee 
        return this.salary*5;
        }
        return netsalary();
    }
}
let emp2={
    name : "sara",
    age : 22,
    gender : "female",
    salary : 2000,
}
console.log(employee.calculateSalary()); //Not a numbers NaN

//call apply bind

employee.calculateSalary.call(emp2);
//
//****************************** */

//  every some map
// 1. map => return new array
// 1. foreach => return elements
let arr = [1,2,3,4,5];
// let res = arr.map((element) => element +=10);
// console.log(res);

// 2. some => return boolean  some of elements are true return true else false 
let res2 = arr.some((element, index)=> {
    return element > 10;
} )
console.log(res2);

// 2. every => return boolean all elements are true return true else false 
let res3 = arr.every((element, index)=> {
    return element > 0;
} )
console.log(res3);
