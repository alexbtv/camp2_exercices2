const valueList=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];

function checkModulo(number){
  if (number % 3 === 0 && number % 5 === 0 ){
    return "FizzBuzz"
  } else if (number % 3 === 0){
    return "Fizz"
  } else if (number % 5 === 0){
    return "Buzz"
  }
  return number;
}

function fizzBuzz(list){
  return list.map(checkModulo)
}


console.log(fizzBuzz(valueList));
