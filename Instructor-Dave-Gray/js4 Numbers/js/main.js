// Numbers

// Both integer and floating point are number data types 
// An integer is a whole number.
const myNumber = 42;

console.log(myNumber);

// A number with a decimal point is a float which references the "floating point"
const myFloat = 42.0123;

const myString = "42";

console.log(myNumber === myFloat); // true

console.log(myNumber === myString); // false

console.log(myString + 3); // 423 treats all as strings

// Change a string to a number data type
console.log(Number(myString) + 3);

console.log(Number("SochTech")); // NaN
console.log(Number(undefined)); // NaN
console.log(Number(true)); // 1
console.log(Number(false)); // 0

// Number Methods
// The Number.isInteger() method determines whether the passed value is an integer
console.log(Number.isInteger(myNumber)); // true
console.log(Number.isInteger(myFloat)); // false

// The Number.parseFloat() method parses an argument and returns a floating point number. If a number cannot be parsed from the argument, it returns NaN.

console.log(Number.parseFloat(myString)); // 42.0123
console.log(Number.parseFloat(myNumber)); // 42
console.log(Number.parseFloat(myFloat)); // 42.0123

const myString1 = "42.123abc";
console.log(Number.parseFloat(myString1)); // 42.123
console.log(typeof Number.parseFloat(myString1));

// The toFixed() method formats a number according to how many decimal points you provide as the parameter.
console.log(myFloat.toFixed(2)); // 42.01

// The Number.parseInt() method parses a string argument and returns an integer
console.log(Number.parseInt(myFloat));

// The toString() method returns a string representing the number.
console.log(myFloat.toString);
console.log(typeof myFloat.toString);

// Chaining = using several methods chained together
console.log(Number.parseFloat("4.237abc").toFixed(2).toString());

// NaN is an acronym for Not a Number
// The Number.isNaN() method determines whether the passed value is NaN AND its type is Number
// The gloabl
console.log(Number.isNaN("Dave"));