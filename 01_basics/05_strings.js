const name = "sharvari "
const repoCount = 5

// console.log(name + repoCount + " Points"); // outdated syntax

//console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('valo-rent')
// console.log(gameName[0]);
// console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(4));
console.log(gameName.indexOf('l'));

const newString = gameName.substring(0, 5) // valo- .. end value not included
console.log(newString);

const anotherString = gameName.slice(-6, 5) // o-
console.log(anotherString);

const newStringOne = "   hello    "
console.log(newStringOne); //    hello   => with spaces
console.log(newStringOne.trim()); // hello => without any space 

const url = "https://tokyughoul.com/anime%50world"

console.log(url.replace('%50', '_'));

console.log(url.includes('anime')); // true
console.log(url.includes('hello')); // false
 
console.log(gameName.split('-'));

