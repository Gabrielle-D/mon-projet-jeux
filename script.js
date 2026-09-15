//champ formulaire
const form = document.querySelector('form');
const nomInput = document.querySelector('#nom');
const createurInput = document.querySelector('#createur');
const anneeInput = document.querySelector('#annee');
const prixInput = document.querySelector('#prix');

//zones de carte
const nomZone = document.querySelector('#nom-zone');
const createurZone = document.querySelector('#createur-zone');
const anneeZone = document.querySelector('#annee-zone');
const prixZone = document.querySelector('#prix-zone');

//valeurs par défauts
nomInput.value = "Nom";
createurInput.value = "Créateur";
anneeInput.value = "0000";
prixInput.value = "00.00 €";

//fonction d'affichage des données
function modifierCarte(event){
    event.preventDefault();
    console.log(event);
    nomZone.textContent = lieuInput.value;
    createurZone.textContent = createurInput.value;
    anneeZone.textContent = anneeInput.value;
    prixZone.textContent = prixInput.value;
}
