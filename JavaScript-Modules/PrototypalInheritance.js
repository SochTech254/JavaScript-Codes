function Animal(name) {
    this.name = name;
}

Animal.prototype.move = function() {
    console.log("move");
};

function Cat(name) {
    Animal.call(this, name);
}

Cat.prototype.meow = function() {
    console.log("meow");
};

/*
Animal object is at the top of the inheritance (for this example)
It has a Animal.prototype property on it
We then have Cat object
To execute a prototypal inheritance we have to link their prototypes
Below is how you do it
*/

Cat.prototype = Object.create(Animal.prototype);

// Now Cat.prototype is linked with Animal.prototype
// Then we create misty object from Cat

var misty = new Cat('misty');

// Now our new misty cat object will inherit all the properties on Animal
// and Cat object and also the properties on Animal.prototype and Cat.prototype 

console.log(misty);    // constructor: "Animal"
console.log(misty.name);    // cat
console.log(misty.meow);    // meow
console.log(misty.move);    // move