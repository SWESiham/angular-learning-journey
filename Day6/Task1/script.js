// var num2 = prompt("Enter a num to determine if the num is +ve or -ve");
// (num2 > 0) ? console.log("Positive") : console.log("negative");

// var num1 = prompt("Enter a num to determine if the num is even or odd");
// (num1 % 2 == 0) ? console.log("even") : console.log("odd");

// var age = Number(prompt("Enter Your Age"));
// if (age < 12) {
//     console.log(5);
// }
// else if(age <18){
//      console.log(10);
// }
// else if(age <60){
//      console.log(20);
// }
// else if(age >60){
//      console.log(15);
// }


// for (var i = 0; i < 16; i++){
//     if (i % 2 == 0) {
//         console.log(i+" is even")
//     } else {
//          console.log(i+" is odd")
//     }
// }

var num1 = Number(prompt("Enter a 1st num"));
var num2 = Number(prompt("Enter a 2nd num"));
var op = prompt("Enter a operation  (+, -, *, /, %)");
function sum(num1,num2) {
    return num1 + num2;
}
function mul(num1,num2)  {
    return num1 * num2;
}
function sub(num1,num2)  {
    return num1 - num2;
}
function div(num1,num2)  {
    if(num2!=0)
    return num1 / num2;
}
function mod(num1,num2)  {
    return num1 % num2;
}

function HigherOrderFunction(callback) {
    return callback(num1, num2);
}

let res;
if (op === '+')
    res = HigherOrderFunction(sum);
else if (op === '-')
    res = HigherOrderFunction(sub);
else if (op === '*')
    res = HigherOrderFunction(mul);
else if (op === '/')
    res = HigherOrderFunction(div);
else if (op === '%')
    res = HigherOrderFunction(mod);

console.log(res);