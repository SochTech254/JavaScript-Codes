// It will create a new instance of an object
// It can be user-defined or builtin type

// built-in type object
var cars = new Array('Honda', 'Audi', 'BMW');

// user-defined object
class Car {
    constructor(name) {
        this.name = name;
    }
}

var car = new Car('Honda');

function Vehicle(name) {
    console.log(this);    // this points to myCar
    this.name = name;
}

var myVehicle = new Vehicle('Honda');
console.log(myVehicle);     // {name : "Honda", constructor : "Car"}