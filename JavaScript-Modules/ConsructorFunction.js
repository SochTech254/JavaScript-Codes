/*
Functions used to create objects are known as constructor functions
Below function Person is a standard function
But the function is used to create a new object called john
Therefore, the Person function by convention is called a constructor function
*/ 

function Person() {
    this.name = "John";
    this.age = 21;
}

var john = new Person(); 
console.log(john.name);
console.log(john.age);