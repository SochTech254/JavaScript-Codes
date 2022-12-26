/* 
Hoisting is a phenomenon in JS where variables and functions
can be accessed even before they are initialized.
*/

getName(); 
console.log(x);    // This produces undefined which means it is hoisted

var x = 7;

function getName() {
    console.log("Namaste Javascript");
} 
/* 
Hoisting a variable produces undefined
This is the same case for arrow functions and functions stored 
in a variable
*/