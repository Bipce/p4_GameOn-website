import { hideErrorMessage, setErrorMessage } from "./errorsMessages.js";

/** Show or hide error message according input value
 * @param regex {RegExp}
 * @param element {HTMLInputElement}
 * @param message {string}
 * @returns {boolean}
 */
export const checkInputValue = (regex, element, message) => {
  if (!regex.test(element.value)) {
    setErrorMessage(element, message);
    return false;
  }
  hideErrorMessage(element);
  return true;
};

/** Check value of input with event listener
 * @param element {HTMLInputElement}
 * @param regex {RegExp}
 * @param message {string}
 */
export const setInputValueEvent = (element, regex, message) => {
  element.addEventListener("input", () => checkInputValue(regex, element, message));
};


/** Check if one city is selected
 * @param cities { NodeListOf<HTMLInputElement>}
 * @param message {string}
 * @returns {boolean}
 */
export const checkIfCitySelected = (cities, message) => {
  const isChecked = Array.from(cities).some(city => city.checked);
  if (!isChecked) {
    setErrorMessage(cities[0], message);
    return false;
  }
  hideErrorMessage(cities[0]);
  return true;
};

/**  Check if checkbox is checked
 * @param element {HTMLInputElement}
 * @param message {string}
 * @returns {boolean}
 */
export const checkIfCheckBoxIsChecked = (element, message) => {
  if (!element.checked) {
    setErrorMessage(element, message);
    return false;
  } else {
    hideErrorMessage(element);
    return true;
  }
};