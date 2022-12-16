alert("Hello World!");

let myBoolean = confirm("OK === True\nCancel === False");
console.log(myBoolean);

let name = prompt("Please enter your name.");
if(name) {
    console.log(name.trim());
} else {
    console.log("You didn't enter your name.");
}
