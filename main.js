const form = document.querySelector(".form");
const emailField = document.querySelector(".email_field");
const errorMessage = document.querySelector(".error_message");
const sucessMessage = document.querySelector(".sucess_message");

const regex =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

function main() {
  try {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      validateEmail();
    });
  } catch (err) {
    if (err) throw err;
  }
}

function validateEmail() {
  try {
    if (emailField.value === "" || emailField.value === null) {
      errorMessage.style.display = "block";
      errorMessage.textContent = "Please fill out blank email address";
      return setTimeout(() => {
        errorMessage.style.display = "none";
      }, 1000);
    } else if (!emailField.value.match(regex)) {
      errorMessage.style.display = "block";
      return setTimeout(() => {
        errorMessage.style.display = "none";
      }, 1000);
    } else {
      sucessMessage.style.display = "block";
      return setTimeout(() => {
        sucessMessage.style.display = "none";
      }, 1000);
    }
    emailField.value = "";
  } catch (err) {
    if (err) throw err;
  }
}

main();
!emailField.value.match(regex);
