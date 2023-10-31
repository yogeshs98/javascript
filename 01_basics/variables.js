const AccountNumber = 45632
let AccountName = "Yogesh"
var AccountType  = "Personal"

let AccountCity;
/*
Prefer not to use var
because of issue in block scope and functional scope
*/

//AccountNumber = 45632 - Not allowed 
console.table([AccountName, AccountNumber, AccountType, AccountCity])