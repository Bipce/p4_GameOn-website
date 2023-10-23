import { errorMessage, hideErrorMessage, setErrorMessage } from "./errorsMessages.js";


// Form and form input
const form = document.querySelector("form");
const firstnameElement = document.getElementById("first");
const lastnameElement = document.getElementById("last");
const emailElement = document.getElementById("email");
const brithDateElement = document.getElementById("birthdate");
const quantityElement = document.getElementById("quantity");

// RegEx
const regExName = new RegExp("[a-zA-Z0-9-_]{2}");
const regexEmail = new RegExp("^[a-z0-9-_.]+@[a-z]+[.][a-z]{2,3}$");
const regExQuantity = new RegExp("[0-9]");

// After validation
const successPopup = document.getElementById("success-popup");

// User
let user = {
  firstname: "",
  lastname: "",
  email: "",
  quantity: 0,
};

// Check if the value of the input is valid
const checkInputValue = (regex, element, message) => {
  if (!regex.test(element.value)) {
    setErrorMessage(element, message);
    return false;
  }

  hideErrorMessage(element);
  return true;
};

// Check input value with event listener
firstnameElement.addEventListener("input", () => checkInputValue(regExName, firstnameElement, errorMessage.name));
lastnameElement.addEventListener("input", () => checkInputValue(regExName, lastnameElement, errorMessage.name));
emailElement.addEventListener("input", () => checkInputValue(regexEmail, emailElement, errorMessage.email));


// Form validation
const validate = (e) => {
  e.preventDefault();

  // Check if all conditions are valid
  const isFirstnameValid = checkInputValue(regExName, firstnameElement, errorMessage.name);
  const isLastnameValid = checkInputValue(regExName, lastnameElement, errorMessage.name);
  const isEmailValid = checkInputValue(regexEmail, emailElement, errorMessage.email);

  if (isFirstnameValid && isLastnameValid && isEmailValid) {
    user.firstname = firstnameElement.value;
    user.lastname = lastnameElement.value;
    user.email = emailElement.value;

    successPopup.style.display = "flex";
    form.style.visibility = "hidden";
    modalBg.style.opacity = "0";
  }
};
form.addEventListener("submit", (e) => validate(e));