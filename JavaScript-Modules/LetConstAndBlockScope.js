// let and const keywords were introduced in ES6
// These two keywords are used to declare JavaScript variables

let myFirstName = "NgNinja";

const myLastName = "Academy";

console.log(myFirstName +" "+ myLastName);

// These two keywords provide Block Scope variables in JavaScript
// These variables do not hoist like var variables
// Remember: using var to declare variables creates a function scope variables

// These two keywords let you avoid IIFE
// IIFE is used for not polluting global scope
// But, now you can just use let or const inside a block - {} - which will have same effect

// let keyword works very much like var keyword except it creates block-scoped variables
// let keyword is an ideal candidate for loop variables, garbage collection variables

// Example of let
// var x declares a function scope variable which is available throughout the function
// checkLetKeyword()
// let x declares a block scope variable which is accessible ONLY inside the if-block
// So, after the if-block the value of x is again 10

function checkLetKeyword() 
{
    var x = 10;
    console.log(x);    // 10

    if(x === 10)
    {
        let x = 20;

        console.log(x);
    }

    console.log(x);     // 10

}

// const keyword is used to declare a constant in JavaScript
// value must be assigned to a constant when you declare it
// Once assigned - you cannot change its value

const MY_NAME = "NgNinja Academy";
console.log(MY_NAME);
// MY_NAME = "JavaScript"   Error: "MY_NAME" is read-only

// Tricky const
// If you defined a constant array using const you can change the elements inside it
// You cannot assign a different array to it
// But, you can add or remove elements from it
// This is because const does NOT define a constant value. It defines a constant
// reference to a value. Example below :
const MY_GRADES = [1, 2, 3];
// MY_GRADES = [4, 4, 4] Error: "MY_GRADES" is read-only
MY_GRADES.push(4);
console.log(MY_GRADES);