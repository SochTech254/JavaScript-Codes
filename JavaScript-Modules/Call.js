// call() attaches this function and invokes the function immediately
// The owner object is sent as an argument
// With call(), an object can use a method belonging to another object

// In the below example this is set to the ngNinja object
// You can send arguments to the function as a comma-separated list following 
// tthe owner object 
var person = {
    hello: function(message) {
        console.log(this.name + " says hello " + message);
    }
}

var ngNinja = {
    name: "NgNinja Academy"
} 

person.hello.call(ngNinja, "world");    // ouput: "NgNinja Academy says hello world"