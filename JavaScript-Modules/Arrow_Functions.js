// Arrow functions introduced in ES6
// It is another syntax to create functions
// It has a shorter syntax

// syntax :
// (parameters) => {statements}
// Brackets around parameters are optional if you have only 1 parameter
// Statement brackets can be removed if you are returning an expression

// Below arrow function takes in number parameter
// It multiplies the number with 2
// And finally it returns the result

// exammple
var double = number => number * 2;
/*
 equivalent traditional function
var double = function(number)
{
    return number * 2;
}
*/
// You can pass multiple parameters to the arrow function
// You can also write{} and return value like a normal function
// example
var sum = (a, b) => {
    return a + b;
}

// equivalent traditional function
var sum = function(a, b) {
    return a + b;
}