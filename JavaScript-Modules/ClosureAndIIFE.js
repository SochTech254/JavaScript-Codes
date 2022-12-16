// It is called as Immediately Invoked Function Expressions
// sum is a Function expression whose value is an IIFE
// So, consequently, the sum is assigned the return value of a self-invoking function
var sum = (function() {
    var foo = 20;

    function bar() {
        foo = foo + 10;

        console.log(foo);
    }

    return bar;
})()

sum();    // 30
sum();    // 40
sum();    // 50
/*
What is happening inside IIFE?
We have defined foo variable as the local variable inside the function
We also have a function called bar()
And, finally, we return the bar function
So, the function bar is getting assigned to the variable sum 

What is happening inside the bar() function?
We are accessing variable foo from the parent  scope
And we are incrementing its value by 10 and reassigning the new value back to the
variable foo from the parent scope
And finally, we are logging the new value of the variable foo
*/