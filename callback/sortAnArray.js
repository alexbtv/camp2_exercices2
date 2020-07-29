function sortAnArray(array){

let result = [];
  for (i=0; i<array.length; i++){
     if (result.length === 0){
       result.push(array[i]);
     } else if (array[i]>= result[result.length - 1]){
       result.push(array[i]);
     } else {
       let j=0;
       while (array[i]>result[j]){
         j++;
       }
       result.splice(j,0,array[i]);
     }

  }
return result;
}


console.log(sortAnArray([3,5,2,-10,8]));
