const fibonacci = [];
console.log(fibonacci.length);

function fibonacciFunction(number){

  let i=0;

  if (number === 0){

    console.log("Il faut demander au moins 1 élément pour afficher le nombre de la suite Fibonacci correspondant");

  } else {

//l'utilisateur à entré au moins 1.

    while (i<number) {

// si on a plus d'une entrée dans le tableau, c'est qu'on a fait au moins 2 tour et on pourra additioner les deux dernières valeurs

        if (fibonacci.length>1){
//on récupère  le dernier index du tableau
            let lastIndex=fibonacci.length-1;

//on créer une entrée en additionnant les 2 dernières valeurs du tableau
            fibonacci.push(fibonacci[lastIndex]+fibonacci[lastIndex-1]);

            i++;
// si on a qu'une valeur c'est forcément 0. On va devoir alimenter  le tableau avec 1 en automatique car on ne peut pas récupérer les deux dernière valeur. Il n'y a qu'une entrée.
        } else if (fibonacci.length===1){

                fibonacci.push(1);

                i++;

        } else {
//sinon on a pas de valeur, il faut pousser le 0. Au procahin tour on poussera 1 et pour ous les tours
//suivants, il y aura calcul des 2 dernières valeurs
              console.log("je suis ici" + fibonacci);

              fibonacci.push(0);

              i++;
              console.log("je suis la" + fibonacci);
        }

    }
  }

    console.log(fibonacci)
  }

fibonacciFunction(25);
