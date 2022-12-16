// Prototype property allows you to add properties and methods to any object dynamicalyy
function Animal(name) {
    this.name = name;
}

Animal.prototype.age = 10;

// When Object Cat is inherited from object Animal :
//          Then Animal is the prototype object or the constructor of the Cat

var Cat = new Animal('cat');
console.log(Cat);       // constructor: "Animal"
console.log(Cat.name);      // cat
console.log(Cat.age);

console.log(Animal.prototype.age);