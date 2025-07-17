const nameInput = document.getElementById("studName");
const ageInput = document.getElementById("studAge");
const emailInput = document.getElementById("studEmail");
const passwordInput = document.getElementById("studPassword");
const btn = document.getElementById("btn");
const tbody = document.getElementById("tbody");

const nameError = document.getElementById("nameError");
const ageError = document.getElementById("ageError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");

let students = [];

if (localStorage.getItem("students")) {
  students = JSON.parse(localStorage.getItem("students"));
  display();
}

btn.addEventListener("click", function (e) {
  e.preventDefault();

  clearErrors();

  if (!validateInputs()) return;

  const student = {
    name: nameInput.value.trim(),
    age: ageInput.value.trim(),
    email: emailInput.value.trim(),
    password: passwordInput.value.trim()
  };

  students.push(student);
  localStorage.setItem("students", JSON.stringify(students));
  resetForm();
  display();
});

function validateInputs() {
  let valid = true;

  const name = nameInput.value.trim();
  const age = parseInt(ageInput.value.trim());
  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{5,}$/;

  if (name.length < 3) {
    nameError.innerText = "Name must be at least 3 characters.";
    valid = false;
  }

  if (isNaN(age) || age <= 18) {
    ageError.innerText = "Age must be greater than 18.";
    valid = false;
  }

  if (!emailRegex.test(email)) {
    emailError.innerText = "Please enter a valid email address.";
    valid = false;
  }

  if (!passwordRegex.test(password)) {
    passwordError.innerText = "Password must be at least 5 characters and include capital, small, and a number.";
    valid = false;
  }

  return valid;
}

function clearErrors() {
  nameError.innerText = "";
  ageError.innerText = "";
  emailError.innerText = "";
  passwordError.innerText = "";
}

function resetForm() {
  nameInput.value = "";
  ageInput.value = "";
  emailInput.value = "";
  passwordInput.value = "";
}

function display() {
  tbody.innerHTML = "";

  students.forEach((student, index) => {
    const tr = document.createElement("tr");

    tr.innerHTML = `
      <td>${student.name}</td>
      <td>${student.age}</td>
      <td>${student.email}</td>
    `;

    tbody.appendChild(tr);
  });

  document.querySelector("table").style.visibility = "visible";
}
