// Closure is when a function is able to remember and access its lexical scope 
// even when that function is executing outside its lexical scope
// Whenever you see a function keyword within another function, the inner function
// has access to variable in the outer function.
// That is a closure
// Closures are just using variables that come from a higher scope.
  
var a = 42;

function foo() {
    return a;
}

function sayHello() {
    var name = 'Hello, World!';

    var log = function() {
        console.log(name);
    }

    return log;
}

foo();
var myClosure = sayHello();
myClosure();    // 'Hello, world!'