// ****************** DATES *******************

const myDate = new Date()
// console.log(myDate.toString()); // Tue Apr 08 2025 08:27:21 GMT+0000
// console.log(myDate.toDateString()); // tue Apr 08 2025
// console.log(myDate.toLocaleString()); // 4/8/2025, 8:27:37 AM
// console.log(typeof myDate); // object

//let myCreateDate = new Date(2024,2,8) // fri mar 08 2024
console.log(myCreateDate.toDateString());

//let myCreateDate = new Date(2024,2,8,6,27) 
console.log(myCreateDate.toLocaleString());

let myCreateDate = new Date("2023-1-14") 
console.log(myCreateDate.toLocaleString());


// ************** TIME *****************

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreateDate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());

// `${newDate.getDay()}and the time is`

newDate.toLocaleString('default',{
    weekday: "long",
})
