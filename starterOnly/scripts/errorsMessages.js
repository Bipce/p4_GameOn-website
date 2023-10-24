// Error messages
export const errorMessage = {
  name: "Veuillez entrer 2 caractères ou plus.",
  email: "Veuillez saisir une adresse email valide.",
  birthdate: "Vous devez entrer votre date de naissance..",
  quantity: "Veuillez entrer la quantité de tournois participé(s).",
  city: "Veuillez sélectionner une ville.",
  condition: "Veuillez valider les conditions générales.",
};

// Check state of error message
export const setErrorVisible = (element, state) => {
  element.parentElement.setAttribute("data-error-visible", state);
};

// Show message error is state is true
export const setErrorMessage = (element, message) => {
  setErrorVisible(element, true);
  element.parentElement.setAttribute("data-error", message);
};

// Hide message error if state is false
export const hideErrorMessage = (element) => {
  setErrorVisible(element, false);
};