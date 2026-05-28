const accountId = 144553
let accountEmail = "krushna@gmail.com"
var accountPassword = "12345"
accountCity = "jaipur"
// accountId = 2 //not allowed
accountPassword = "21212121"
accountCity = "bangalurr";
let accountState;
console.log(accountId);
/*
prefer not to use var
because of issue in block scope and functional scope
*/
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])