let num = document.getElementById('input')
num.addEventListener('input', Input);
function Input() {

let ready = document.getElementsByClassName('ready')[0]
let steady = document.getElementsByClassName('steady')[0]
    let go = document.getElementsByClassName('go')[0]
    let readyy = document.getElementById('ready')
    let steadyy = document.getElementById('steady')
    let goy = document.getElementById('go')
    var input = Number(num.value);
    readyy.style.visibility = 'hidden';
    steadyy.style.visibility = 'hidden';
    goy.style.visibility = 'hidden';
if (input === 1) {
    ready.style.backgroundColor = 'red';
    steady.style.backgroundColor = 'gray';
    go.style.backgroundColor = 'gray';
    readyy.style.visibility = 'visible';
}
if (input === 2) {
    steady.style.backgroundColor = 'yellow';
    ready.style.backgroundColor = 'gray';
    go.style.backgroundColor = 'gray';
    steadyy.style.visibility = 'visible';
}
if (input === 3) {
    go.style.backgroundColor = 'green';
    steady.style.backgroundColor = 'gray';
    ready.style.backgroundColor = 'gray';
    goy.style.visibility = 'visible';
}
}
