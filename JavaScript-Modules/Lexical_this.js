// It means forcing the this variable to always point to the object 
// where it is physically located within
// This phenomenon is called as Lexical Scoping
// Arrow function let's you achieve a lexical this via lexical scoping
// Unlike a regular function, an arrow function does not bind this
// It preserves the original context
// It means that it uses this from the code that contains the Arrow Function

// Example of lexical this
// Below example declares person object
// It has a name: 'John' and a function printName()

// When you invoke printName() using person.printName()
// The this operator originally points to the person object
// Therefore this.name logs John correctly

// Then we have declared two function getName() and getNameArrowFunction()
// Both of them do the same thing - they return the name of the person

// But, getName() gives an error because this is undefined inside the function
// Because in traditional function this represent the object that calls the function
// And we have not assigned any object to the function invocation

// getNameArrowFunction() logs John correctly
// That is becuase it uses this object from the code that contains the Arrow Function
// which is person

var person = 
{
    name: 'John',
    printName: function() 
    {
        console.log(this.name);

        // following code has an ERROR
        /*
        var getName = function() {
            return this.name;       // ERROR
        }
        */

        var getNameArrowFunction = () =>
        {
            return this.name;
        }

        // TypeError: Cannot read property 'name' of undefined shown below
        // console.log(getName());

        // John
        console.log(getNameArrowFunction())
    }
}

person.printName();