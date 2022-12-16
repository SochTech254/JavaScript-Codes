// In JavaScript function declarations and variable declarations are 'hoisted'
// Meaning variables can be used before they are declared
// But, remember - the value of the variable is still undefined because the value is
// really assigned on AFTER it is being logged

console.log(bar);    // undefined - but no error

var bar = 1;

// Functions are hoisted first, and then variables
// But, this does not mean that assigned values(in the middle of function) will still
// be associated with the variable from the start of the function
// It only means tat the variable name will be recognized starting from the 
// very beginning of the function
// That is the reason, bar is undefined in the above function

// NOTE: Variables and constants declaared with let or const are not hoisted

// NOTE: Function declarations are hoisted - but function expressions are not!

// Function declarations
foo();    // 11

function foo() {
    console.log(11);
}
