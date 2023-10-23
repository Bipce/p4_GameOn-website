// Error message
export const errorMessage = {
  name: "Veuillez entrer 2 caractères ou plus.",
  email: "Veuillez saisir une adresse email valide.",
  birthdate: "Vous devez entrer votre date de naissance..",
  quantity: "Veuillez entrer la quantité de tournois participé(s)",
};

// Check state of error message
export const setErrorVisible = (element, state) => {
  element.parentElement.setAttribute("data-error-visible", state);
};

// Show message error
export const setErrorMessage = (element, message) => {
  setErrorVisible(element, true);
  element.parentElement.setAttribute("data-error", message);
};

// Hide message error
export const hideErrorMessage = (element) => {
  setErrorVisible(element, false);
};