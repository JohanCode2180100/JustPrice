// Etape 1 - Sélectionner nos éléments
let input = document.querySelector("#prix");

let error = document.querySelector("small");

let formulaire = document.querySelector("#formulaire");

let backColor = document.querySelector("borderColor");

// Etape 2 - Cacher l'erreur.

// Etape 3 - Générer un nombre aléatoire

let NumbersGenerator = Math.floor(Math.random() * 1001);
let coups = 0;
let nombreChoisi = 0;

// Etape 6 - Créer la fonction vérifier

function verifier(nombre) {}

// Etape 4 - Vérifier que l'utilisateur donne bien un nombre

input.addEventListener("keyup", () => {
  if (isNaN(input.value)) {
    error.style.display = "inline";
  } //afficher le message d erreur
  else {
    error.style.display = "none";
  }
});

// Etape 5 - Agir à l'envoi du formulaire

formulaire.addEventListener("submit", (e) => {
  e.preventDefault();
}); // annule le submit

//mettre notre bordure de formulaire en rouge

input.addEventListener("keyup", () => {
  if (isNaN(input.value) || input.value == "") {
    input.style.border = "2px solid red";
  } else {
    coups++;
    input.style.border = "2px solid silver";
    nombreChoisi = input.value;
    input.value = ""; // vider le champs de formulaire
    verifier(nombreChoisi);
  }
});
