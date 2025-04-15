// singleton
// Object.create
// singleton always made by construction, not by literals.. 

//++++++++ OBJECT LITERALS ++++++++

const mySym = Symbol("key1")

const JsUser = {
    name : "sharvari",
    "full name": "Sharvari Thigale",
    [mySym] : "myKey1",
    age : 20,
    location : "pune",
    email : "sharvari@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ["monday", "saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "sharvari@google.com"
//Object.freeze(JsUser)
JsUser.email = "sharvari@microsoft.com"
//console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS User");  
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`);  
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
