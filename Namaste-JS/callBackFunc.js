// A function passed into another function is a callback. Examples below:
setTimeout(function (){
    console.log("timer");
}, 5000);
function x(y) {
    console.log("x");
    y();
}
x(function y() {
    console.log("y");
})
// JavaScript is a synchronous single-threaded language