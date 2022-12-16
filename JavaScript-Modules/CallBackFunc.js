// Callback functions are functions that are executed "later"
// Later can be any action that you'd want to be completed before
// calling the callback function
// Callback functions are passed as arguments to the outer function

// Inthe below example greet() is the outer function
// And getName() is the callback function
// We pass getName() function to the outer greet() function 
// as a function argument
// The value from getName() callback function is then used in the
// outer function greet()

function getName() {
    return "Sleepless Yogi";
}

function greet(callbackFn) {
    // call abck function is executed here
    const name = callbackFn();

    return "Hello " + name;
}

var soch = getName();
console.log(soch);