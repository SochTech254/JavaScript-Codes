// Simple Person class in JavaScript
// You can define constructor inside the class where you can instantiate 
// the class members
// Constructor method is called each time the class object is initialized
class Person {
    constructor(name) {
        this.name = name;
    }
    // You can add your functions inside classes
    // These methods have to be invoked programmatically in your code
    getName() {
        return this.name;
    }
}

var john = new Person("John");

console.log(john.getName());