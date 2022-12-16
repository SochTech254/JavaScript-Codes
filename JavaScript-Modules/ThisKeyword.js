const person = {
    name : 'foo',
    age : 21,
    getMyAge : function() {
        return this.age;    // 21
    }
}

/*
var foo = 10; statement declares foo variable on the window object
print(); belongs to window object of browser
So, this.foo returns the value of foo variable on the window object - which is 10
var myObject = { foo : 20 }; declares foo property which belongs to myObject object
print.apply(myObject); statement simply makes myObject the owner of the print method
So, this.foo now returns the value of foo variable on the window object - which is 20
*/

var myObject = {foo : 20};
var foo = 10;

function print() {
    console.log(this.foo);
}

// This will log window.foo - 10
print();

// This will alert myObject.foo which is 20
print.apply(myObject);