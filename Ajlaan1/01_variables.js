const accountId = 144553
let accountEmail = "Ajlaan@google.com"
var accountPassword = "12345"
accountCity = "jaitpur"
let accountState;

// accountId = 2 // not allowed

accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Delhi"

console.log(accountId);

/*
prefer not to use var
becoz of scope issue and functional scope issue etc.
*/

console.table([accountEmail, accountCity, accountPassword, accountId, accountState])
