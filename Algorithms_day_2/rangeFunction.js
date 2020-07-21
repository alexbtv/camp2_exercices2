function range(number1,number2){
  const arrayResult=[]

  if (number1<number2){

    let numberToPush=number1;

    while (numberToPush<=number2){
      arrayResult.push(numberToPush);
      numberToPush ++;
    }
  } else if (number1>number2) {
      let numberToPush=number1;
      while (numberToPush>=number2){
        arrayResult.push(numberToPush);
        numberToPush --;
      }
  } else {
    arrayResult.push(number1);
  }
  return arrayResult;
}

const ascArray = range(1,4);

const descArray = range(4,1);

const equalArray = range(4,4);

console.log (ascArray);

console.log (descArray);

console.log (equalArray);
