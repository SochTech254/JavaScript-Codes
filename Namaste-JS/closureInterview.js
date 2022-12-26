/*  
Closure is a combination of a function and its lexical scope bundled together
Each and every function in JS has access to its outer lexical environment i.e. access to variables or functions which is present in the environment of its parent. This is shown below: 
*/
function outest()
{
    var c = 20;
    function outer(b)
    {
        function inner()
        {
            console.log(a,b,c,d);    // d prints 300
        }
    var a = 10;    // still works the same way with let & const
    let d = 300;
    return inner;
    }

    return outer;
}
let d = 400;
outest()("Namaste JavaScript!")();
/* 
The above outer()(); line of code is similar to the below:
outer()();
var close = outer();
close();
*/

/* 
Use of closure:
Module Design Pattern
Currying functions
Functions like once
memoize
maintaining state in async world
setTimeouts
Iterators
Encapsulation and data Hiding-> shown below:
*/
function Counter()    // constructor function
{
    var count = 0;
    this.incrementCounter = function()
    {
        count++;
        console.log(count);   
    }

    this.decrementCounter = function()
    {
        count--;
        console.log(count);
    }
}
var counter1 = new Counter();
counter1.incrementCounter();
counter1.incrementCounter();
counter1.decrementCounter();
// using console.log(count); in this global scope produces an error.
// The error emanates from the data i.e count which has been hidden by using
// closure 