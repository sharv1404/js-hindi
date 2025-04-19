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

// console.log(JsUser.greeting());
// console.log(JsUser.greetingTwo());


//const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);
const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "sharvari",
            lastname: "thigale",
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "a", 4: "b" }
const obj4 = { 5: "a", 6: "b" }

// const obj3 = {
//     obj1,
//     obj2
// }

// const obj3 = Object.assign({}, obj1, obj2, obj4)
// console.log(obj3)

const obj3 = {...obj1, ...obj2}
//console.log(obj3);

const user = [
    {
        id : 1,
        email : "user1@gmail.com",
    },
    {
        id : 1,
        email : "user1@gmail.com",
    },
    {
        id : 1,
        email : "user1@gmail.com",
    },
]

user[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));

