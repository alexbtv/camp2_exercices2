const thisIsThePlayer = callback => {
  const player = {
    name: "Spartacus",
    life:100,
    strength: 100,
    agility: 100
  };

  callback(player);

}

function sayHello(player){
  console.log(player.name);
}

thisIsThePlayer(sayHello);
