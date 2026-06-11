const accountId = 144553 //const val can't be changed, constant rhti h value 
let accountEmail= "xyzgoogle.com"
var accountPassword ="12345"
accountCity ="Delhi"
let accountState;
console.log(accountId);

/*
prefer not to use var 
because of issue in block scope 
and functional scope
*/

console.table([accountId,accountEmail,accountCity,accountPassword,accountState])
