function squareDigits(number){
  const monTableau=number.toString().split('');
  const newTableau=[];

  for (i=0;i<monTableau.length;i++){
    newValue=Number(monTableau[i])* Number(monTableau[i]);
    newTableau.push(newValue);
  }
  console.log(newTableau.join(''));
}

squareDigits(9129);
