//-Create a generator function that produces a range of numbers

function* range(start, end) {
    for(let i = start; i <= end; i++) {
        yield i;
    }
}

for(let i of range(2, 5)) {
    console.log(i);
}

//---------------------------------

// create a function that finds the commonn elements between tow array (dont'n duplicatete)
let arr1 = [1, 2, 3, 4, 5, 6]
let arr2 = [2, 3, 5, 6, 7, 8,4]
function common(arr, arr2) {
    const mySet1 = new Set(arr);
    const mySet2 = new Set(arr2);

    let common = [...mySet1].filter((val) => {
        return mySet2.has(val);
    })
    return common;
}
console.log(common(arr1, arr2));

//---------------------------------

/**
 * Create a generator function that generates the Fibonacci sequence. 
The Fibonacci sequence is a series of numbers 
where each number is the sum of the two preceding ones,
 starting from 0 and 1. Generator that stops when Fibonacci number exceeds a given value
-----------------------------------------------------
 */
// 0 1 1 2 3 5 8 13 21 34 55 89 144 
function fibo(stop) {
    let fibos = [];
    let a = 0;
    let b = 1;
    fibos.push(a);
    while(b < stop){
        fibos.push(b);
        [a, b] = [b, a+b];
    }
    return fibos;
}
console.log(fibo(144));

//---------------------------------

// make object itrable

let obj = {
    name: "siham",
    age: 20,
    gender: "female",
    [Symbol.iterator]:function() {
        var idx = 0;
        var pro = Object.keys(this)
        return {
            next: () => {
                return {
                    val: { key: pro[idx], val: this[pro[idx]] },
                    done:idx++==pro.length
                }
            }
        }
    }
}

let itr = obj[Symbol.iterator]();
console.log(itr.next());
console.log(itr.next());
console.log(itr.next());
console.log(itr.next());

/**
 * 
 * Create a generator function that delegates iteration to multiple other generators. 
other generator is one generate odd number ,and other one generate even number
Generator that stops when number exceeds a given value
-----------------------------------------------------
 */

function* ODD(stop) {
    let num = 1;
    while(num < stop){
        yield num;
        num += 2;
    }
}
function* EVEN(stop) {
    let num = 2;
    while(num < stop){
        yield num;
        num += 2;
    }
}

function* DELEGATE(stop) {
    yield* ODD(stop);
    console.log("======")
    yield* EVEN(stop);
}
for(let i of DELEGATE(10)){
    console.log(i);
}

//---------------------------------
console.log("========================")

/**
 * 
 * Create two simple generators, one for letters and one for numbers, 
and a delegate generator to combine their outputs.
 */

function* LETTERS() {
    for (let letter = 'A'.charCodeAt(0); letter <= 'Z'.charCodeAt(0); letter++){
        yield String.fromCharCode(letter);
    }
}
function* NUMBERS() {
    for (let number = 1;  number <= 10; number++){
        yield number;
    }
}

function* DELEGATED() {
    yield* LETTERS();
    console.log("======")
    yield* NUMBERS();
}
for(let i of DELEGATED()){
    console.log(i);
}

