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
  modalbg.style.display = "block";
}

// Je récupère mon élément et je déclenche la fonction closeModal au click
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

// 3/ Gestion des erreurs du formulaire

// Je récupère les éléments du formulaire dans le DOM
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

//  Traitement du formulaire : initialisation des expressions régulières

let regexNames= /^[A-ZÇÉÈÊËÀÂÎÏÔÙÛ]{1}[a-zçéèêëàâîïôùû]+[-]?[a-zçéèêëàâîïôùû]+$/i;
let regexEmail = /^([a-z0-9]+(?:\.[a-z0-9]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])?$/;
let regexBirthdate = /^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/;
let regexQuantityTounament = /^[0-9]+$/;

//  Traitement du formulaire : fonction validate qui vérifie les données une par une avec une condition

function validate () {

// Vérification du prénom

let firstValidate=false;

// Si le prénom ne correspond pas aux caractères autorisés par ma regex, si il y'a - de 2 caractères, si le champ est vide
if (!firstname.value.match(regexNames) || firstname.value.length < 2 || firstname.value == null) {
    firstnameError.innerHTML = 'Votre prénom est incomplet ou mal orthographié, veuillez le ressaisir.';
    firstnameError.classList.add("error-message");
    firstname.classList.add("error-class");
  } else {
    firstnameError.style.display='none';
    firstnameError.classList.remove("error-message");
    firstname.classList.remove("error-class");
    firstValidate = true;
};

console.log(firstname);

// Vérification du nom

let lastValidate=false;

// Si le nom ne correspond pas aux caractères autorisés par ma regex, si il y'a - de 2 caractères, si le champ est vide
if (!lastname.value.match(regexNames) || lastname.value.length < 2 || lastname.value == null) {
    lastnameError.innerHTML = 'Votre nom est incomplet ou mal orthographié, veuillez le ressaisir.';
    lastnameError.classList.add("error-message");
    lastname.classList.add("error-class");
  } else {
    lastnameError.style.display='none';
    lastnameError.classList.remove("error-message");
    lastname.classList.remove("error-class");
    lastValidate = true;
};

console.log(lastname);

// Vérification de l'e-mail

let emailValidate=false;

// Si le mail ne correspond pas aux caractères autorisés par ma regex, si le champ est vide
if (!email.value.match(regexEmail) || email.value == null) {
    emailError.innerHTML = 'Veuillez entrer une adresse email valide.';
    emailError.classList.add("error-message");
    email.classList.add("error-class");
} else {
    emailError.style.display='none';
    emailError.classList.remove("error-message");
    email.classList.remove("error-class");
    emailValidate = true;
};

console.log(email);

 // Vérification de la date de naissance

let birthValidate=false;

// Si le format de date ne correspond pas aux caractères autorisés par ma regex, si le champ est vide
if (!birthdate.value.match(regexBirthdate) || birthdate.value == null) { 
  birthdateError.innerHTML = 'Veuillez entrer votre date de naissance.';
  birthdateError.classList.add("error-message");
  birthdate.classList.add("error-class");
} else {
  birthdateError.style.display='none';
  birthdateError.classList.remove("error-message");
  birthdate.classList.remove("error-class");
  birthValidate = true;   
};

console.log(birthdate);
console.log(birthdateError);

// Vérification du nombre de tournois

let quantityValidate=false;

// Si le champ ne correspond pas aux caractères autorisés par ma regex, si le champ est vide
if (!quantity.value.match(regexQuantityTounament) || quantity.value == null) { 
  quantityError.innerHTML = 'Veuillez indiquer un nombre de tournois';
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

// Si aucune des checkbox n'est cochée
if (!location1.checked && !location2.checked && !location3.checked && !location4.checked && !location5.checked && !location6.checked) { 
  locationError.innerHTML = 'Veuillez choisir une ville';
  locationError.classList.add("error-message");       
} else {
  locationError.style.display = 'none';
  locationError.classList.add("error-message");
  radioChecked = true;
};

// Validation des conditions

let conditionsChecked = false;

// Si validation n'est pas cochée
  if (!validation.checked) {
    validationError.innerHTML = 'Veuillez accepter les termes et conditions générales';
    validationError.classList.add("error-message");
  } else {
    validationError.style.display = 'none';
    validationError.classList.add("error-message");
    conditionsChecked = true;
  };

  // Confirmation inscription réussie

  // Si toutes mes variables conditionnelles sont à true, alors le formulaire disparaît et le message de confirmation est affiché
  if (firstValidate == true && lastValidate == true && emailValidate == true && birthValidate == true && quantityValidate == true && radioChecked == true && conditionsChecked == true) {
    form.style.display = "none";
    confirmation.style.display = "flex";
  };

};

form.addEventListener('submit', validate);

  // Fermeture de la modale de confirmation
confirmationCloseBtn[0].addEventListener("click", closeModal);
