const accountId = 233445
let accountEmail = "sharvarit@gmail.com"
var accountPassword = "12345"
accountCity = "Nagpur"
let accountState;

// accountId = 2 // this is not allowed//

// for (let index = 0; index < Array.length; index++) {
//     const element = array[index];
// }

/*
PREFER NOT TO USE " VAR "
BECAUSE OF ISSUE IN BLOCK SCOPE AND FUNCTIONAL SCOPE
*/

accountEmail = "st@gmail.com"
accountPassword = "98765"
accountCity = "Banglore"

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);

// console.log(accountId);