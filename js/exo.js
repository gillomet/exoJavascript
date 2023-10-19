
// COURS : VOIR, ESSAYER DE COMPRENDRE SUR LES CHAINE DE CARACTERE : Documentation
// officielle https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/String
// Exo1 :
// Dans cet exercice vous devez créer les variables suivantes :
//  num qui contient le nombre 23
//  txt qui contient la chaine de caractère 33
//  tmp qui contient le nombre 0
//  Convertir la chaîne contenue dans txt en nombre et la mettre tmp
//  Ajouter à num le contenu de tmp
// Vous devez réaliser un programme permettant de saisir le nom, le prénom, et l'âge d’un
// utilisateur.
// Le programme affiche ensuite le message suivant :



function exo1() {
  let num = 23;
  let txt = "33";
  let tmp = 0;

  tmp = parseInt(txt);

  let userLastName = prompt("Quel est votre nom ?");
  let userFirstName = prompt("Quel est votre prénom ?");
  let userAge = prompt("Quel est votre age ?");

  alert(
    "Quel est votre nom : " + userLastName +
    "\nQuel est votre prénom : " + userFirstName +
    "\nQuel est votre age : " + userAge +
    "\n--------------------------------------" +
    "\n----------- BIENVENUE ----------------" +
    "\n--------------------------------------" +
    "\nVotre nom est : " + userLastName +
    "\nVotre prénom est : " + userFirstName +
    "\nVous avez " + userAge + " ans"
  )


}

// 1 Demander à l’utilisateur de rentrer une phrase et afficher la phrase et le nombre de
// caractère de la phrase.
// 2 Soit une variable texte =`Je suis en distanciel aujourd’hui’.
// Scinder le texte,
// Récupérez le mot ‘distanciel’,
// Affichez-le en majuscule

function exo2() {
  let userText = prompt("Veuillez entrer une phrase");
  alert(
    "Vous avez écrit la phrase : " + userText +
    "\nLa phrase contient  : " + userText.length + " caractères"
  );

  let text = "Je suis en distanciel aujourd'hui";
  let textSplit = text.split(" ");

  // to display inside alert popup
  let displayTextForAlertPopup = "";
  for (let index = 0; index < textSplit.length; index++) {
    displayTextForAlertPopup += textSplit[index] + "\n";
  }

  alert(
    "texte scindé : \n" + displayTextForAlertPopup
  );


  let researchText = "distanciel";
  let textIndexStart = text.indexOf(researchText);
  let textIndexEnd = textIndexStart + researchText.length;
  let wordFound = text.substring(textIndexStart, textIndexEnd);

  console.log("text : " + text);
  console.log("textIndexStart : " + textIndexStart);
  console.log("wordFound : " + wordFound);
  console.log("researchText.length : " + researchText.length);

  alert(
    "Le mot recherché est : " + wordFound +
    "\nLe mot recherché en majuscule : " + wordFound.toUpperCase()
  );

}

// Qu'est-ce que l'on va essayer de faire ? Quelque chose de tout simple : fournir un
// commentaire selon l'âge de la personne. Vous devez fournir un commentaire sur quatre
// tranches d'âge différentes qui sont les suivantes :
function exo3() {
  let userAge = parseInt(prompt("Quel est votre age ?"));
  let message = "undifined message";
  if (userAge > 0 && userAge <= 17) {
    message = "Vous n'êtes pas encore majeur";
  } else if (userAge > 17 && userAge <= 49) {
    message = "Vous êtes majeur mais pas encore senior";
  } else if (userAge > 49 && userAge <= 59) {
    message = "Vous êtes senior mais pas encore retraité";
  } else if (userAge > 59 && userAge <= 120) {
    message = "Vous êtes retraité, profitez de votre temps libre";
  } else {
    message = "Vous êtes mort RIP";
  }

  alert(message);

}

function exo4() {
  let number1 = parseInt(prompt("Saisissez un nombre"));
  let number2 = parseInt(prompt("Saisissez un nombre"));
  let message = "undifined message";

  if (number1 === number2) {
    message = "les nombres " + number1 + " et " + number2 + " sont égaux";
  } else {
    message = "les nombres " + number1 + " et " + number2 + " ne sont pas égaux";
  }

  alert(message);
}


function exo5() {
  let number1 = parseInt(prompt("Saisissez un nombre entre 0 et 100"));
  let message = "undifined message";
  if (number1 >= 0 && number1 <= 59) {
    message = "Insuffisant";
  } else if (number1 > 59 && number1 <= 69) {
    message = "Suffisant";
  } else if (number1 > 69 && number1 <= 79) {
    message = "Bien";
  } else if (number1 > 79 && number1 <= 89) {
    message = "Très bien";
  } else if (number1 > 89 && number1 <= 100) {
    message = "Excellent";
  } else {
    message = "Le nombre saisie n'est pas compris entre 0 et 100";
  }

  alert(message);



}

function exo6() {

  let number1 = prompt("Saisissez un nombre entre 0 et 100");
  let message = "undifined message";
  // test user entry
  if (!number1.match(/^\d+$/)) {
    message = "La valeur saisie n'est pas un nombre";
    alert("dans regExp : " + message);
    return;
  }

  if (isNaN(number1)) {
    message = "La valeur saisie n'est pas un nombre";
    alert("dans isNaN : " + message);
    return;
  }


  number1 = parseInt(number1);

  if (number1 >= 0 && number1 <= 59) {
    message = "Insuffisant";
  } else if (number1 > 59 && number1 <= 69) {
    message = "Suffisant";
  } else if (number1 > 69 && number1 <= 79) {
    message = "Bien";
  } else if (number1 > 79 && number1 <= 89) {
    message = "Très bien";
  } else if (number1 > 89 && number1 <= 100) {
    message = "Excellent";
  } else {
    message = "Le nombre saisie n'est pas compris entre 0 et 100";
  }

  alert(message);


}

function switch7() {
  var toto = 3;
  var output = "Résultat : ";
  switch (true) {
    case 0 - 10:
      output += "case 0-10 ";
      break;

    case 11 - 20:
      output += "case 11-20: ";
      break;

    default:
      console.log("Veuillez choisir un nombre entre 0 et 5 !");
  }
  console.log(output);
}

function exo8() {
  var dt = new Date();
  var nb = 10;
  var tab = new Array(1, 2, 3, 4);
  console.log(dt.toString());
  console.log(nb.toString());
  console.log(tab.toString());
}

function exo9() {
  const txt = "courage";
  console.log("0,3 : " + txt.substring(0, 3));
  console.log("3,0 : " + txt.substring(3, 0));
}

function exo10() {
  let dte = new Date();
  let day = dte.getDay();
  let message = "";
  switch (day) {
    case 0:
      message = "Dimanche";
      break;
    case 1:
      message = "Lundi";
      break;
    case 2:
      message = "Mardi";
      break;
    case 3:
      message = "Mercredi";
      break;
    case 4:
      message = "Jeudi";
      break;
    case 5:
      message = "Vendredi";
      break;
    case 6:
      message = "Samedi";
      break;
    default:
      message = "nothing"
  }

  console.log("day = " + day);
  console.log("message = " + message);
}

function exo11() {
  let somme = 0;
  let n = 0;
  while (somme < 1000) {
    n++;
    somme+=n;
    console.log("n : " + n);
    console.log("somme : " + somme);
  }
}

function exo12() {
  let userEntry = prompt("Nombre de boucle");
  let n = 0;
  while (n < userEntry) {

    let divElement = document.createElement('div');
    let text = `x stocke ${n} lors du passage n° ${n+1} dans la boucle`; 
    let textNode = document.createTextNode(text);
    divElement.appendChild(textNode);
    document.getElementById("para").appendChild(divElement);
    n++;
  }
}

function exo13(){

  function Voiture(fabricant, modele, annee) {
    this.fabricant = fabricant;
    this.modele = modele;
    this.annee = annee;
  }

  let maVoiture = new Voiture("Eagle", "Talon TSi", 1993);
  console.log("fabricant " + maVoiture.fabricant);
  console.log("model " + maVoiture.modele);
  console.log("anne " + maVoiture.annee);


}


function exo14(){
  let userEntry = prompt("Nombre de boucle");
  let n = 0;
  let text="";
  while (n < userEntry) {

    let divElement = document.createElement('div');
    text += "1"; 
    let textNode = document.createTextNode(text);
    divElement.appendChild(textNode);
    document.getElementById("para").appendChild(divElement);
    n++;
  }


}



