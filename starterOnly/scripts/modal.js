// DOM Elements
const modalBg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const closeModalButton = document.getElementById("close");

// Launch and close modal function
const launchModal = () => {
  modalBg.style.display = "block";
};

const closeModal = () => {
  modalBg.style.display = "none";
};

// Launch and close modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
closeModalButton.addEventListener("click", closeModal);