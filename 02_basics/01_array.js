// Arrays aren't primitive 
// JavaScript arrays are resizable and can contain mix of different datatypes 
// Array elements are cannot be access using arbitrary strings as indexes
//JavaScript array-copy operations create shallow copies.(All standard built-in copy operations with any JavaScript objects create shallow copies, rather than deep copies).
// SHALLO COPY --> A shallow copy of an object is a copy whose properties share the same references (point to the same underlying values) as those of the source object from which the copy was made. As a result, when you change either the source or the copy, you may also cause the other object to change too. That behavior contrasts with the behavior of a deep copy, in which the source and copy are completely independent.
// DEEP COPY --> A deep copy of an object is a copy whose properties do not share the same references (point to the same underlying values) as those of the source object from which the copy was made. As a result, when you change either the source or the copy, you can be assured you're not causing the other object to change too. That behavior contrasts with the behavior of a shallow copy, in which changes to nested properties in the source or the copy may cause the other object to change too.

const myArr = [0,1,2,3,4,5]
const myHeros = ["superman", "batman"]
const myArr2 = new Array(1,2,3,4)

console.log(myArr[3]);

// ARRAY METHODS 

// myArr.push(6)
// myArr.push(8)
// myArr.pop()

// myArr.unshift(9) // it added element 9 in the starting of the array
// myArr.shift() // it deleted the element which is in the first place

// console.log(myArr.includes(11));
// console.log(myArr.indexOf(10));

// const newArr = myArr.join()
// console.log(myArr); // typeof -- array 
// console.log(newArr); // typeof -- string

// SLICE AND SPLICE

console.log("A ", myArr);

const myn1 = myArr.slice(1,3)

console.log(myn1);
console.log("B ", myArr);





