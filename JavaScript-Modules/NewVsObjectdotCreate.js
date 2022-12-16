// New operator is used to create an object from a constructor function
// The new keywords also execute the constructor function
function Car() {
    console.log(this);      // this points to myCar
    this.name = "Honda";
}
var myCar = new Car();
console.log(myCar);     // Car{name : "Honda", constructor : Objects}
console.log(myCar.name);    // Honda
console.log(myCar instanceof Car);      // true
console.log(myCar.constructor);     // function Car() {}
console.log(myCar.constructor === Car);     // true
console.log(typeof myCar);      // obect
console.log("\n");
// You can also use Object.Create to create a new object
// But, it does not execute the constructor function
// Object.create is used toc create an object from another object

const Car1 = {
    name : "Honda"
}

var myCar1 = Object.create(Car1);

console.log(myCar1);     // Object {}
console.log(myCar1.name);    // Honda
console.log(myCar1 instanceof Car);      // ERROR
console.log(myCar1.constructor);     // anonymous function object
console.log(myCar1.constructor === Car);     // false
console.log(typeof myCar1);      // object