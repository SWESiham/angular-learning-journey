const numbers = [10, 20, 30];
let newNumbers = [0,...numbers,100];
console.log("Numbers: ",numbers);
console.log("New Numbers: ",newNumbers);

const details = { name: "Bob", age: 30 }
let newDetails = { ...details, country: "Egypt" };
console.log("Details: ",details);
console.log("New Details: ", newDetails);


function calcAvg(...nums){
    return nums.reduce((acc, num) => acc + num, 0) / nums.length;
}
console.log(calcAvg(10, 20, 30, 40, 50));

function findMax(...nums) {
    return Math.max(...nums);
}
console.log(findMax(100, 20, 30, 40, 50));

const numbrs = [1, 2, 3, 4, 5];
let res = numbrs.map((ele) => {
    return ele * ele;
});
console.log("Numbers: ", numbrs);
console.log("New Numbers: ", res);



const words = ["apple", "banana", "cherry", "date", "fig"];
let res2 = words.some((ele) => {
    return ele.length>5;
});
console.log(res2);


const students = [
    { name: 'Alice', score: 85 },
    { name: 'Bob', score: 95 },
    { name: 'Charlie', score: 45 },
    { name: 'David', score: 60 },
    { name: 'Eve', score: 100 }
];
let passStudents = students.filter((ele) => {
    return ele.score >= 60;
});
console.log("Pass Students: ",passStudents.map((ele) => {
    return ele.name;
}))


let allPass = students.every((ele) => {
    return ele.score >= 50;
});
console.log("All Pass: ",allPass)


let perfectScore = students.some((ele) => {
    return ele.score==100
});
console.log("Perfect Score: ",perfectScore)



var str = 'hello';
let arr = [...str];
console.log("String: ",str);
console.log("Array: ", arr);