// Below example demonstrates how to achieve the same result using vanilla functions
// and using new classes. Class make your code cleaner and less verbose

var Person = function(name) {
    this.name = name;
}

var Man = function(name) {
    Person.call(this, name);
    this.gender = "Male";
}

Man.prototype = Object.create(Person.prototype);
Man.prototype.constructor = Man;

var John = new Man("John");

console.log(John.name);
console.log(John.gender);

console.log("\n");

class Person1
{
    constructor(name) 
    {
        this.name = name;
    }
}

class Man1 extends Person1 
{
    constructor(name)
    {
        super(name);
        this.gender = "Male";
    }

}

var John1 = new Man1("John");

console.log(John1.name);
console.log(John1.gender);