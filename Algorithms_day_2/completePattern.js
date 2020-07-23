function pattern(number){
  let i=1;
  const myTab=[];
  while (i<=number){
    myTab.push(i);
    i++;
  }

  const newTab = myTab.map(value => {
    let j=1;
    let newValue="";
    while (value>=j){
      j++;
      newValue=newValue + '' + value;
    }
    return newValue;
    }
  )

console.log(newTab.join('\n'));
}


pattern(8);
