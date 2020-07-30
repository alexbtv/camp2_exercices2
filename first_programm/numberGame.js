const readline = require("readline");


function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

let numberToDiscover=getRandomInt(100);

const reader = readline.createInterface({
  input: process.stdin,
  output:process.stdout
});

let compteur=0;

function numberGame(){

  reader.question("Entrez un nombre entre 1 et 100 ? ", number => {

      if (number<0 || number >100 || isNaN(number)=== true){

        console.log('Entrez une information valide');
        numberGame();

      } else if (number > numberToDiscover){

        console.log('Trop grand !!!');
        compteur = compteur + 1;
        numberGame();

      } else if (number < numberToDiscover){

        console.log('Trop petit !!!');
        compteur = compteur + 1;
        numberGame();

      } else {

        compteur = compteur + 1;
        console.log('Bravo !!! ' + number + ' est bien le bon nombre !!!')
        console.log("Tu l'as trouvé en " + compteur + " coup !!!");

        reader.question("Voulez vous rejouer ? Taper O pour oui ou N pour non : ", response => {

          if (response === "O"){

            replay();

          } else {

            console.log("a bientôt");
            reader.close();

          }

        });

      }

  });
  
}

function replay(){

    numberToDiscover = getRandomInt(100);
    compteur = 0;
    numberGame();
}

numberGame();
