/* 
Window ->this is a global object which is created along with the global
execution context
Whenever any Javascript program is run a global object(window in browsers in node is called sth else) is created, a global 
execution context is created, along with the gec the this variable is created.
JS Engine in chrome is called V8

Anything not inside a function is in the global space
*/
// console.log(this === Window);    // In browser this should print true

var a = 10;
function b() {
    var x = 10;
}
// console.log(window.a);    In browser this should print 10
console.log(a);

