// 1/ Lancement et fermeture de la modale

// Je récupère les éléments de la modale dans le DOM
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalCross = document.getElementsByClassName("close");

// Je récupère mon élément et je déclenche la fonction launchModal au click
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// Fonction qui lance la modale
// Je sélectionne le background de ma modale et lui applique un display block pour l'afficher
function launchModal() {
  modalbg.style.display = "flex";
}

// Je récupère mon élément et je déclenche la fonction closeModal au click
// La croix est formée d'un before/after, je sélectionne le premier élement de mon tableau (before)
modalCross[0].addEventListener ("click", closeModal);

// Fonction qui ferme la modale
// Je sélectionne le background de ma modale et lui applique un display none pour le masquer
function closeModal() {
  modalbg.style.display = "none";
};

// 2/ Vérification des données du formulaire

// Je récupère les éléments du formulaire dans le DOM
const form = document.getElementById ('form');
const firstname = document.getElementById ('first');
const lastname = document.getElementById ('last');
const email = document.getElementById ('email');
const birthdate = document.getElementById ('birthdate');
const quantity = document.getElementById ('quantity');
const location1 = document.getElementById ('location1');
const location2 = document.getElementById ('location2');
const location3 = document.getElementById ('location3');
const location4 = document.getElementById ('location4');
const location5 = document.getElementById ('location5');
const location6 = document.getElementById ('location6');

// Désactivation du traitement par défaut du button submit

form.addEventListener('submit', (e) => {
  e.preventDefault();
})

// 3# Gestion des erreurs du formulaire

const validation = document.getElementById ('checkbox1')
const firstnameError = document.getElementById ('first-error');
const lastnameError = document.getElementById ('last-error');
const emailError = document.getElementById ('email-error');
const birthdateError = document.getElementById ('birthdate-error');
const quantityError = document.getElementById ('quantity-error');
const locationError = document.getElementById ('location-error');
const validationError = document.getElementById ('validation-error');
const confirmation = document.getElementById ('confirmation');
const confirmationCloseBtn = document.getElementsByClassName('btn-close');

//  Traitement du formulaire

let regexNames= /^[A-ZÀÄÉÈËÏÖÜÇ][A-Za-zàäéèêëïöüç]+$/i;
let regexEmail = /^([\w-\.]+@(?!gmail.com)(?!yahoo.com)(?!hotmail.com)(?!outlook.com)(?!laposte.net)(?!orange.fr)(?!sfr.fr)(?!bouyges.fr)(?!iclood.com)(?!me.com)(?!mac.com)([\w-]+\.)+[\w -]{2,4}) ?$/;
let regexBirthdate = /^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/;
let regexQuantityTounament = /^[0-9]+$/;


function validate () {

// Vérification du prénom

let firstValidate=false;

if (!firstname.value.match(regexNames) || firstname.value.length < 1 || firstname.value == null) {
    firstnameError.innerHTML = 'Prénom incomplet ou mal orthographié';
    firstnameError.classList.add("error-message");
    firstname.classList.add("error-class");
  } else {
    firstnameError.style.display='none';
    firstnameError.classList.remove("error-message");
    firstname.classList.remove("error-class");
    firstValidate = true;
};

// Vérification du nom

let lastValidate=false;

if (!lastname.value.match(regexNames) || lastname.value.length < 1 || lastname.value == null) {
    lastnameError.innerHTML = 'Nom incomplet ou mal orthographié';
    lastnameError.classList.add("error-message");
    lastname.classList.add("error-class");
  } else {
    lastnameError.style.display='none';
    lastnameError.classList.remove("error-message");
    lastname.classList.remove("error-class");
    lastValidate = true;
};

// Vérification de l'e-mail

let emailValidate=false;

if (regexEmail.test(email) || email.value.length < 1 || email.value == null) {
    emailError.innerHTML = 'Adresse mail invalide';
    emailError.classList.add("error-message");
    email.classList.add("error-class");
} else {
    emailError.style.display='none';
    emailError.classList.remove("error-message");
    email.classList.remove("error-class");
    emailValidate = true;
};

 // Vérification de la date de naissance

let birthValidate=false;

if (!birthdate.value.match(regexBirthdate)) { 
  birthdateError.innerHTML = 'Date de naissance incorrecte';
  birthdateError.classList.add("error-message");
  birthdate.classList.add("error-class");
} else {
  birthdateError.style.display='none';
  birthdateError.classList.remove("error-message");
  birthdate.classList.remove("error-class");
  birthValidate = true;   
};

// Vérification du nombre de tournois

let quantityValidate=false;

if (!quantity.value.match(regexQuantityTounament)) { 
  quantityError.innerHTML = 'Indiquer un nombre de tournois';
  quantityError.classList.add("error-message");
  quantity.classList.add("error-class");
} else {
  quantityError.style.display='none';
  quantityError.classList.remove("error-message");
  quantity.classList.remove("error-class");
  quantityValidate = true; 
};

// Choix des villes

let radioChecked = false;

if (!location1.checked && !location2.checked && !location3.checked && !location4.checked && !location5.checked && !location6.checked) { 
  locationError.innerHTML = 'Choisir au une ville';
  locationError.classList.add("error-message");       
} else {
  locationError.style.display = 'none';
  locationError.classList.add("error-message");
  radioChecked = true;
};

// Validation des conditions

let conditionsChecked = false;

  if (!validation.checked) {
    validationError.innerHTML = 'Accepter les termes et conditions générales';
    validationError.classList.add("error-message");
  } else {
    validationError.style.display = 'none';
    validationError.classList.add("error-message");
    conditionsChecked = true;
  };

  // Confirmation inscription réussie

  if (firstValidate == true && lastValidate == true && emailValidate == true && birthValidate == true && quantityValidate == true && radioChecked == true && conditionsChecked == true) {
    form.style.display = "none";
    confirmation.style.display = "flex";
  };

};

  // Fermeture de la modale de confirmation
confirmationCloseBtn[0].addEventListener("click", closeModal);
