let num = document.getElementById('input')
num.addEventListener('input', Input);
function Input() {

let ready = document.getElementsByClassName('ready')[0]
let steady = document.getElementsByClassName('steady')[0]
let go = document.getElementsByClassName('go')[0]
var input = Number(num.value);
if (input === 1) {
    ready.style.backgroundColor = 'red';
    steady.style.backgroundColor = 'gray';
    go.style.backgroundColor = 'gray';
}
if (input === 2) {
    steady.style.backgroundColor = 'yellow';
    ready.style.backgroundColor = 'gray';
    go.style.backgroundColor = 'gray';
}
if (input === 3) {
    go.style.backgroundColor = 'green';
    steady.style.backgroundColor = 'gray';
    ready.style.backgroundColor = 'gray';
}
}
