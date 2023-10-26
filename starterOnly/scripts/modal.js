import { form, successPopup } from "./constants.js";

// DOM Elements
const modalBg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const closeModalButtons = document.querySelectorAll(".close-btn");


// Launch modal
const launchModal = () => {
  modalBg.style.display = "block";
  form.style.visibility = "visible";
  successPopup.style.display = "none";
};

// Close modal
const closeModal = () => {
  modalBg.style.display = "none";
};

// Launch and close modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
closeModalButtons.forEach((btn) => btn.addEventListener("click", closeModal));