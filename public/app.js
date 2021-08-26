const inputs = document.querySelectorAll("input:not(input[type='submit'])");
const inputValues = [];
const inputCon = document.querySelector(".input-con");
const btn = document.querySelector("input[type = 'submit']");

console.log(inputs[0]);

let firstName = "";
let lastName = "";
let userEmail = "";
let userPassword = "";

disable();
// loop for inputs
for (let index = 0; index < inputs.length; index++) {
  inputs[index].addEventListener("keydown", checkText);
}

function checkText(e) {
  // check if empty
  let x = document.createElement("i");
  x.className = "fas fa-exclamation-circle";
  x.id = "remove";
  x.id = "remove";
  if (e.keyCode === 13 && e.target.value === "") {
    this.style.border = "solid 2px hsl(0, 100%, 74%) ";
    if (this.id === "userFirstName") {
      this.parentElement.appendChild(x);
    } else if (this.id === "userLastName") {
      x.className = "fas fa-exclamation-circle";
      this.parentElement.appendChild(x);
    } else if (this.id === "email") {
      x.className = "fas fa-exclamation-circle";
      this.parentElement.appendChild(x);
    } else if (this.id === "password") {
      x.className = "fas fa-exclamation-circle";
      this.parentElement.appendChild(x);
    }
  } else if (e.keyCode === 13 && this.value !== "") {
    this.style.pointerEvents = "none";
    this.style.backgroundColor = "#7bc6f1";
    this.style.border = "solid 1px #000 ";
    if (this.parentElement.lastElementChild.id === "remove") {
      this.parentElement.lastElementChild.style.display = "none";
    }
    if (this.id === "userFirstName") {
      firstName = this.value;
    } else if (this.id === "userLastName") {
      lastName = this.value;
    } else if (this.id === "email") {
      userEmail = this.value;
    } else if (this.id === "password") {
      userPassword = this.value;
    }
    disable();
  }
}

function disable() {
  if (
    firstName === "" &&
    lastName === "" &&
    userEmail === "" &&
    userPassword === ""
  ) {
    btn.style.pointerEvents = "none";
  } else if (
    firstName !== "" &&
    lastName !== "" &&
    userEmail !== "" &&
    userPassword !== ""
  ) {
    btn.style.pointerEvents = "auto";
  }
}

btn.addEventListener("click", function () {
  inputValues.push(firstName);
  inputValues.push(lastName);
  inputValues.push(userEmail);
  inputValues.push(userPassword);
  console.log(inputValues);
  inputs[0].value = "";
  inputs[1].value = "";
  inputs[2].value = "";
  inputs[3].value = "";
  inputs[0].style.backgroundColor = "#fff";
  inputs[0].style.border = "#ccc 1px solid";
  inputs[1].style.backgroundColor = "#fff";
  inputs[1].style.border = "#ccc 1px solid";
  inputs[2].style.backgroundColor = "#fff";
  inputs[2].style.border = "#ccc 1px solid";
  inputs[3].style.backgroundColor = "#fff";
  inputs[3].style.border = "#ccc 1px solid";
  btn.style.pointerEvents = "none";
});
