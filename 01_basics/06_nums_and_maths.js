const score = 500 // 500
// console.log(score);

const balance = new Number(100) // [Number: 100]
// console.log(balance);

// console.log(balance.toString().length); // 100
// console.log(balance.toFixed(2)); // 100.00

//const otherNumber = 25.98765 // 25.99
//const otherNumber = 125.98765 // 126
const otherNumber = 1125.98765 // 1126
//console.log(otherNumber.toPrecision(3)); 

const hundreds = 10000000
// console.log(hundreds.toLocaleString('en-IN'));

 

// ***************************** MATHS *********************************

// console.log(Math); // Object [Math] {} <-- "{}" these are properties in maths 

// console.log(Math.abs(-5)) //5
// console.log(Math.round(4.4)); //4
// console.log(Math.ceil(4.3)); //5 -- it chooses top value 
// console.log(Math.floor(4.2)); //4 -- it chooses lowest value 
// console.log(Math.min(3,7,8,5,2)); //2
// console.log(Math.max(3,7,0,9,2)); //9

console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20
console.log(Math.floor(Math.random()*(max - min + 1)) + min);

// random --> gives value in between 0 and 1
// 