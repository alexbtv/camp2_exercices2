//without function
function filterWithoutfunction(array, type){
  const newArray=[];

  for (i=0;i<=array.length;i++){
    if (array[i] % 2 === 0 && type === 'even'){
      newArray.push(array[i]);
    }
  }
  console.log(newArray);
}

filterWithoutfunction([1,2,3,4],'even');

//with function

const newArray2=[];

function pickEvenNumbers(array){
  for (i=0;i<=array.length;i++){
    if (array[i] % 2 === 0){
      newArray2.push(array[i]);
    }
  }
    console.log(newArray2);
}

function filterWithFunction(array,functionToUse){
  functionToUse(array);
}

filterWithFunction([1,2,3,4],pickEvenNumbers);

//with high function (filter)

function pickEvenNumbers2(array){
  return array.filter(even => even % 2 === 0);
}

function filterWithHighFunction(array,functionToUse){
const newArrayWithFilter = functionToUse(array);
console.log (newArrayWithFilter);
}


filterWithHighFunction([1,2,3,4,5,6],pickEvenNumbers2);
