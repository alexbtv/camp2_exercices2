//while (true) {}
const nbAffichage=4;

let nbBoucle=0;

while (nbBoucle < nbAffichage){

  console.log('boucle numéro : ' + nbBoucle);

  nbBoucle ++;

}

//for (var i = 0; i < array.length; i++) {  array[i]}

const fruits = ['banane', 'orange','kiwi'];

console.log("nombre de colonne : " + fruits.length);
for (i=0; i < fruits.length;i++){
  console.log(fruits[i]);
}

const hero = {
  name : "Kanwalde",
  firstname : "Michael",
  age : 46
};

console.log("Mon héro est " + hero.name + " " + hero.firstname);
console.log ("Il a " + hero.age + " ans" );
