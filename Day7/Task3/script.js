let num = document.getElementById("input");
let output = document.getElementById("output");
output.value = "";
num.addEventListener("input", Input);

function Input() {
  var input = Number(num.value);
  if (input === 0 || isNaN(input)) {
    output.value = "";
    return;
  } else if (input % 3 === 0 && input % 5 === 0) {
    output.value = "fizz buzz";
  } else if (input % 3 === 0) {
    output.value = "fizz";
  } else if (input % 5 === 0) {
    output.value = "buzz";
  } else {
    output.value = "none";
  }
}
