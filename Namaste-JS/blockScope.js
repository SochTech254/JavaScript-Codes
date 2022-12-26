// {} defines a block hence code appearing in {} is in a block
// Block is also known as compound statement
// let & const are block-scoped: they are hoisted only inside a block whereas var is hoisted in the global scope/object
// Check the below code in the chrome dev tools: sources & scope
// 10  is printed instead of 100 a = 10 shadows a = 100 :
var a = 100;
let b = 200;
const c = 300;
{
    var a = 10;
    let b = 20;
    const c = 30;
    console.log(a);
    console.log(b);
    console.log(c);
}
console.log(a);
console.log(b);   // prints 200 to the console because let is in the global scope and shadows the one in the block
console.log(c);
// shadowing behaves in a similar way inside a function block
/* 
Below is illegal shadowing:
let/const a = 200;
{
    var a = 50;
} 
*/

/* 
Legal shadowing:
var a = 10;
{
    let/const a = 20; 
}

let b = 20;
function x() 
{
    var b = 30;
}
*/
