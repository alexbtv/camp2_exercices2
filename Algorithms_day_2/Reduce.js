const money=["A","B","C","D"];
const reducer = (accumulator, currentValue) => accumulator + '~' + currentValue;

console.log(money.reduce(reducer));
