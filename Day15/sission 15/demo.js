var urerName = 'ahmed';
var num = 4;
var bol = true;
var x = undefined;
var y = null;
var arr = [2, 4, 3, 'd', true];
//tuple
var arr1 = [5, 'a', 'b'];
//uonion 
var str = 'ahmed';
var c;
// function add(nu1:number,num2:number):number{
//     return nu1+num2
// }
// console.log(add(2,3))
function message() {
    console.log('hello');
}
message();
//generic
function getList(list) {
    return list;
}
console.log(getList([2, 3, 's']));
console.log(getList(['a', 'b']));
console.log(getList([true, false]));
var obj = {
    name: 'ahmed',
    age: 20,
    job: 'developer',
    details: function () {
        console.log(this);
    }
};
console.log(obj);
class user {
    constructor(name, age, job) {
        this.name = name;
        this.age = age;
        this.job = job;
        name = name;
        age = age;
    }
    details() {
        console.log(this);
    }
}
var u = new user('ahmed', 20, 'developer');
console.log(u);
import { add } from './add.js';
console.log(add(2, 3));
var std = {
    id: 1,
    name: 'ali',
    age: 30, job: 'doctor'
};
console.log(std);
