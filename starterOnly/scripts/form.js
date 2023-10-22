const form = document.querySelector("form");

const firstnameElement = document.getElementById("first");
const lastnameElement = document.getElementById("last");
const quantityElement = document.getElementById("quantity");

const errorMsgName = document.createElement("p");


const regExName = new RegExp("[a-zA-Z0-9-_]{2}");
const regExQuantity = new RegExp("[0-9]");


const errorMessage = (element, text, className) => {
  element.textContent = text;
  element.className = className;

  return element;
};

let user = {
  firstname: "",
  lastname: "",
  quantity: 0,
};

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!firstnameElement.value.match(regExName)) {
    errorMessage(errorMsgName, "Veuillez saisir votre prénom !", "error-msg");
    firstnameElement.parentNode.insertBefore(errorMsgName, firstnameElement.nextElementSibling);

  } else if (!lastnameElement.value.match(regExName)) {
    errorMessage(errorMsgName, "Veuillez saisir votre nom !", "error-msg");
    lastnameElement.parentNode.insertBefore(errorMsgName, lastnameElement.nextElementSibling);

  } else if (!quantityElement.value.match(regExQuantity)) {
    errorMessage(errorMsgName, "Veuillez saisir le nombre de tournois participé(s) !", "error-msg");
    quantityElement.parentNode.insertBefore(errorMsgName, quantityElement.nextElementSibling);

  } else if (firstnameElement.value.match(regExName) && lastnameElement.value.match(regExName) && quantityElement.value.match(regExQuantity)) {
    user.firstname = firstnameElement.value;
    user.lastname = lastnameElement.value;
    user.quantity = parseInt(quantityElement.value);

  } else {
    console.log("no");
  }

  console.log(user);
});


// const formData = document.querySelectorAll(".formData");

// let inputChild;
//
// for (let i = 0; i < formData.length; i++) {
//   const element = formData[i];
//   const children = element.children;
//
//   for (let j = 0; j < children.length; j++) {
//     let child = children[j];
//     if (child.tagName === "INPUT") {
//       inputChild = child;
//       console.log(inputChild);
//     }
//   }
// }