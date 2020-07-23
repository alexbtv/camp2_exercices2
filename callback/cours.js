setTimeout(function(){
  console.log("second");
},100);

console.log("first");


//with fat arrow function : () => {}

setTimeout(()=>console.log("Second"),100);
console.log('First');
