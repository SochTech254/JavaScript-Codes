// = operator is used to assign value to a variable
//      e.g: var x = 10 - variable x is assigned value 10

// + operator is used to add numbers
//      e.g: var x = 10 + 5 - variable x is now 15

// + is also used to concatenate strings
//      e.g: var x = "hi" + " there" - variable x is now hi there

// - operator is used to subtract numbers
//      e.g: var x = 10 - 5 - variable x value is now 5

// * operator is used to multiply numbers
//      e.g: var x = 10 * 5 - variable x value is now  50

// / operator is used to divide numbers
//      e.g: var x = 10 / 5 - variable x value is now 2

// ++ operator is used to increment value of the variable
//      e.g: var x = 10; x++; variable x value is now 11

// -- operator is used to decrement value of the variable
//      e.g: var x = 10; x--; - variable x value is now 9

// Special Operators
/*
typeof operator can be used to return the type of a variable
    Use typeof for simple built-in types

instanceof operator can be used to check if the object is an instance of a certain object type
    Use instanceof for custom types
*/

'my string' instanceof String;    // false
typeof 'my string' == 'string';    // true

(function c() {}) instanceof Function;    // true
typeof function x() {} == 'function';    // true

var a = 15 + 5;    //  20
var b = "hi";

var c = a + b;    // 20hi

var d = "hi" + 15 + 5;