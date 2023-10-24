import { hideErrorMessage, setErrorMessage } from "./errorsMessages.js";

// Show or hide error message according input value
export const checkInputValue = (regex, element, message) => {
  if (!regex.test(element.value)) {
    setErrorMessage(element, message);
    return false;
  }
  hideErrorMessage(element);
  return true;
};

// Check value of input with event listener
export const checkInputValueEvent = (element, regex, message) => {
  element.addEventListener("input", () => checkInputValue(regex, element, message));
};

// Check if one city is selected
export const checkIfCitySelected = (cities, message) => {
  const isChecked = Array.from(cities).some(radio => radio.checked);
  if (!isChecked) {
    setErrorMessage(cities[0], message);
    return false;
  }
  hideErrorMessage(cities[0]);
  return true;
};

// Check if checkbox is checked
export const checkIfCheckBoxIsChecked = (element, message) => {
  if (!element.checked) {
    setErrorMessage(element, message);
    return false;
  } else {
    hideErrorMessage(element, message);
    return true;
  }
};