/* 
let & const declarations are hoisted but differently from var declarations
var stores its memory in the global object whereas let and const stores somewhere else
let & const are hoisted automatically
Temporal Dead Zone is a time between when let was hoisted and when it was initialized with a value.
Whenever you try to access a variable in the Temporal Dead Zone it produces a reference error. This is shown below by let
Once a variable has been initialized with let & const it cannot be re-initialized with another value
const declaration has to be initialized: cannot be assigned a value later as is the case with let and var
** research on : TypeError SyntaxError and ReferenceError
*/

console.log(a);

let a = 10;

var b = 100;