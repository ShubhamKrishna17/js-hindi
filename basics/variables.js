const accountId = 14453;
let account_email = "abc@gmail.com";
var account_pass = "12345";
account_city = "Delhi";

let account_state;

// accountId= 2; This is not allowed for contants //
account_email ="xyz@gmail.com";
account_pass = "98765";
account_city ="Muzaffarpur";


console.log(accountId);

console.table([account_email, account_pass, account_city, account_state]);

/* prefer not to use var because of issue in block and function scope */