// global scope
var a = 1;

function one() {
    console.log(a);    // 1
}

// local scope - parameter
function two(a) {
    console.log(a);    // parameter value
}

// local scope variable
function three(a) {
    var a = 3;
    console.log(a);    // 3
}

one();    // 1
two();    // 2
three();    // 3