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
console.log("Result = ", result);

