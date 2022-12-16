// JavaScript Errors and Error Handling
"use strict";

const makeError = () => {
    try {
        const name = "SochTech";
        name = "Soch";
    } catch (err) {
        console.log(err); // try changing .log to .error .warn .table
        console.error(err.name); // try changing .name to .message .stack
    }
};
makeError();

// custom error
const makeError1 = () => {
    let i = 1;
    while (i <= 5) {
        try {
            // throw new customError("This is a custom error!"); /*  you can also use an error() constructor to create a generic error in form throw new Error() and pass a message in the constructor. */
            if (i <= 5) {
                throw new Error("Odd number!")
            }
            console.log("Even number!");
        } catch (err) {
            console.error(err.name);    // customError
            console.error(err.message); // This is a custom errro
            console.error(err.stack);
        } finally {
            console.log("...finally!");
            i++;
        }
    }
};
makeError1();

function customError(message) {
    this.message = message;
    this.name = "customError";
    this.stack = "${this.name} : ${this.message}";
}
