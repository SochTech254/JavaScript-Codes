/* 
The difference between function statement and function expression is hoisting.
A function statement can be hoisted i.e can be called before declared whereas
function expression cannot be hoisted.
*/

// function statement aka function declaration
function a()
{
    console.log("a called");
}

// function expression -> result of function stored in a variable
var b = function()
{
    console.log("b called");
}

// When a function is used as a value it is anonymous
// Anonymous function -> a function without a name 


// named function expression
var d = function xyz()
{
    console.log("b called");
}
// xyz(); produces a ReferenceError 

// Diferrence between parameters and arguments
/* 
A parameter is a value passed in the function declaration for later use inside the function
An argument is a value passed in the function call to take the place of a parameter in the function declaration
*/

// First-class functions -> ability to be used like values
/* 
This is a function that can be assigned to a variable or  used as an argument to another function's call or can be used as return function to another funtion
*/