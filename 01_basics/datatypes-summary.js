// primitive and non primitive datatypes
// difference is that.. how to store data in memory and access the data

// #PRIMITIVE DATATYPES

// 7 types = String, Boolean, Number, null, Undefined, Symbol(used to make any value unique), BigInt
//ex
const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

//console.log(id === anotherId); // false
const bigNumber = 34567345678n

// Reference (Non Primitive)

// array, objects, functions ==> // datatypes of all these are FUNCTION

// Array 
const heros = ["spiderman","ironman","batman"];

// Object
let myObj= {
    name : "sharvari",
    age: 24,
}

//Function
const myFunction = function(){
    console.log("Hello World");
}

// console.log(typeof bigNumber); // undefined
// console.log(typeof outsideTemp); // object
// console.log(typeof scoreValue); // number
// console.log(typeof myFunction); // function... but it's object function
// console.log(typeof anotherId); // symbol


// +++++++++++++++++ MEMORY ++++++++++++++++++++

// 1. STACK MEMORY (primitive) AND  2. HEAP MEMORY (non primitive)

let myYoutube = "sharvarithigale"
let anotherName = myYoutube
anotherName = "chaiaurcode"

console.log(myYoutube); //sharvarithigale
console.log(anotherName); //chaiaurcode


let userOne ={
    email: "user@gmail.com",
    upi: "user@ybl",
}

let userTwo = userOne

userTwo.email = "sharvari@gmail.com" // email changes user@gmail.com to sharvari@gmail.com

console.log(userOne.email); // sharvari@gmail.com
console.log(userTwo.email); // sharvari@gmail.com
