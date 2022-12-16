// Functions
function sum(num1, num2)
{
    if (num2 === undefined) {
        return num1 + num1;
    }
    return num1 + num2;
}
console.log(sum(2, 6));

function getUserNameFromEmail(email) {
    return email.slice(0, email.indexOf("@"));
}
console.log(getUserNameFromEmail("playerOne@SomeRandomEmail.com"));

// The other way to declare functions is as anonymous functions
// These functions do not have a name 
// The result of anonymous functions could be held in a vraiable name as shown below
const getUserNameFromEmail1 = function (email) 
{
    return email.slice(0, email.indexOf("@"));
} 
console.log(getUserNameFromEmail1("user@GitHub.com"));

// Arrow functions
const getUserNameFromEmail2 = (email) => email.slice(0, email.indexOf("@"));

console.log(getUserNameFromEmail2("sourchcode@sochtech.com"));

const toProperCase = (name) => name.charAt(0).toProperCase() + name.slice(1).toLowerCase();

console.log(toProperCase("sOchtECh"));