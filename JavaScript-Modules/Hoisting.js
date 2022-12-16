/*
In the below example value of a is logged as 4
This is because JavaScript function variables are scoped to the entire function
Even if that variable is declared in a block - in this case, the if-block
This phenomenon is called as Hoisting in JavaScript 
*/

var a = 1;
function four() {
    if(true) {
        var a = 4;
    }

    console.log(a);    // logs '4', not the global value of '1'
}