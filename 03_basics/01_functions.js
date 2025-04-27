function sayMyName(){
    console.log("D");
    console.log("E");
    console.log("M");
    console.log("O");
    console.log("N");
} //-------------------------- it's the definition of function #syntax

//sayMyName()

// function addTwoNumbers(number1, number2){  //---------------> number1, number2 are parameters
//    console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){ 
    //    let result = number1 + number2
    //    return result;
      // console.log("Hello world");
        return number1+number2
    }

//addTwoNumbers() // NaN
addTwoNumbers(4,5)
// addTwoNumbers(4,"6") // 46 ---> computer convert it like a string
// addTwoNumbers(6,"a") // 6a
// addTwoNumbers(3,null) // 3

const result = addTwoNumbers(3,5)
//console.log("Result = ", result);


function loginUserMessage(username = "Sam"){
    if (!username) // you can write it as(username === undefined)
    {
        console.log("Please enter a user name.. ");
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("Sharvari")) // Sharvari just logged in
console.log(loginUserMessage()) // empty space leads to ----> undefined just logged in


function calculateCartPrice(val1, val2, ...num1){  //rest operator and spred operator
    return num1
}

console.log(calculateCartPrice(300, 400, 500, 2000)); // [500,2000] because---> val1=300 , val2=400, ...num1=500,2000

const user ={
    username: "Sharvari",
    price: 199
}

function handleObject(anyobject){
    console.log(` Username is ${anyobject.username} and Price is ${anyobject.price} `);
    
}

// handleObject(user) // Username is Sharvari and Price is 199
handleObject({
    username : "Sam",
    price: 349,
}) // direct calling function method 


const myNewArray = [100, 50, 200, 150]

function returnSecondValue(getArray){
    return getArray[2]
}

//console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([100, 50, 200, 150]));

