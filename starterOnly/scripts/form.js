import { errorMessage } from "./errorsMessages.js";
import { form, successPopup } from "./constants.js";
import {
  checkIfCheckBoxIsChecked,
  checkIfCitySelected,
  checkInputValue,
  setInputValueEvent,
} from "./inputFunctions.js";

// Form and form input
const firstnameElement = document.getElementById("first");
const lastnameElement = document.getElementById("last");
const emailElement = document.getElementById("email");
const birthdateElement = document.getElementById("birthdate");
const quantityElement = document.getElementById("quantity");
// Radio and check input locations
const allBtnRadio = document.querySelectorAll(`input[name="location"]`);
const conditionCheckBox = document.getElementById("checkbox1");

// RegEx
const regExName = new RegExp("[a-zA-Z0-9-_]{2}");
const regexEmail = new RegExp("^[a-z0-9-_.]+@[a-z]+[.][a-z]{2,3}$");
const regExQuantity = new RegExp("[0-9]");
const regExBirthdate = new RegExp("^[0-9]{4}-[0-9]{2}-[0-9]{2}$");

// Check value of input with event listener
setInputValueEvent(firstnameElement, regExName, errorMessage.name);
setInputValueEvent(lastnameElement, regExName, errorMessage.name);
setInputValueEvent(emailElement, regexEmail, errorMessage.email);
setInputValueEvent(birthdateElement, regExBirthdate, errorMessage.birthdate);
setInputValueEvent(quantityElement, regExQuantity, errorMessage.quantity);
// Check if one city is selected and hide error message when selected
allBtnRadio.forEach(btn => btn.addEventListener("change", () => checkIfCitySelected(allBtnRadio, errorMessage.city)));
// Check if condition checkbox is checked
conditionCheckBox.addEventListener("change", () => checkIfCheckBoxIsChecked(conditionCheckBox, errorMessage.condition));

// Form validation
const validate = (e) => {
  e.preventDefault();

  // User response
  const userResponse = {
    firstname: checkInputValue(regExName, firstnameElement, errorMessage.name),
    lastname: checkInputValue(regExName, lastnameElement, errorMessage.name),
    email: checkInputValue(regexEmail, emailElement, errorMessage.email),
    birthdate: checkInputValue(regExBirthdate, birthdateElement, errorMessage.birthdate),
    quantity: checkInputValue(regExQuantity, quantityElement, errorMessage.quantity),
    city: checkIfCitySelected(allBtnRadio, errorMessage.city),
    condition: checkIfCheckBoxIsChecked(conditionCheckBox, errorMessage.condition),
  };

  // Check if all string return true
  const isAllValid = Object.keys(userResponse).every(s => userResponse[s]);

  if (isAllValid) {
    // Make modal success appear when validation is good
    successPopup.style.display = "flex";
    form.style.visibility = "hidden";

    // Reset form
    form.reset();
  }
};

form.addEventListener("submit", (e) => validate(e));