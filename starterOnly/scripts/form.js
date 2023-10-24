import { errorMessage } from "./errorsMessages.js";
import {
  checkIfCheckBoxIsChecked, checkIfCitySelected, checkInputValue, checkInputValueEvent,
} from "./inputFunctions.js";

// Form and form input
const form = document.querySelector("form");
const firstnameElement = document.getElementById("first");
const lastnameElement = document.getElementById("last");
const emailElement = document.getElementById("email");
const birthdateElement = document.getElementById("birthdate");
const quantityElement = document.getElementById("quantity");
// Radio and check input locations
const allBtnRadio = document.querySelectorAll(`input[name="location"]`);
const conditionCheckBox = document.getElementById("checkbox1");

// Success popup for after validation
const successPopup = document.getElementById("success-popup");

// RegEx
const regExName = new RegExp("[a-zA-Z0-9-_]{2}");
const regexEmail = new RegExp("^[a-z0-9-_.]+@[a-z]+[.][a-z]{2,3}$");
const regExQuantity = new RegExp("[0-9]");
const regExBirthdate = new RegExp("^[0-9]{4}-[0-9]{2}-[0-9]{2}$");

// User
let user = {
  firstname: "",
  lastname: "",
  email: "",
  quantity: 0,
};

// Check value of input with event listener
checkInputValueEvent(firstnameElement, regExName, errorMessage.name);
checkInputValueEvent(lastnameElement, regExName, errorMessage.name);
checkInputValueEvent(emailElement, regexEmail, errorMessage.email);
checkInputValueEvent(birthdateElement, regExBirthdate, errorMessage.birthdate);
checkInputValueEvent(quantityElement, regExQuantity, errorMessage.quantity);
// Check if one city is selected and hide error message when selected
allBtnRadio.forEach(btn => btn.addEventListener("change",
  () => checkIfCitySelected(allBtnRadio, errorMessage.city)));
// Check if condition checkbox is checked
conditionCheckBox.addEventListener("change", () => checkIfCheckBoxIsChecked(conditionCheckBox, errorMessage.condition));

// Form validation
const validate = (e) => {
  e.preventDefault();

  // Check if all conditions are valid
  const isFirstnameValid = checkInputValue(regExName, firstnameElement, errorMessage.name);
  const isLastnameValid = checkInputValue(regExName, lastnameElement, errorMessage.name);
  const isEmailValid = checkInputValue(regexEmail, emailElement, errorMessage.email);
  const isBirthdateValid = checkInputValue(regExBirthdate, birthdateElement, errorMessage.birthdate);
  const isQuantityValid = checkInputValue(regExQuantity, quantityElement, errorMessage.quantity);
  const ifCitySelected = checkIfCitySelected(allBtnRadio, errorMessage.city);
  const isConditionChecked = checkIfCheckBoxIsChecked(conditionCheckBox, errorMessage.condition);


  if (isFirstnameValid && isLastnameValid && isEmailValid && isBirthdateValid && isQuantityValid && ifCitySelected
    && isConditionChecked) {
    user.firstname = firstnameElement.value;
    user.lastname = lastnameElement.value;
    user.email = emailElement.value;
    user.quantity = quantityElement.value;

    // Make modal success appear when validation is good
    successPopup.style.display = "flex";
    form.style.visibility = "hidden";
  }
};

form.addEventListener("submit", (e) => validate(e));