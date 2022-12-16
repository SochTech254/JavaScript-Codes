// apply also attaches this to a function and invokes the function immediately
// apply is similar to call() except it takes an array of arguments instead of 
// the comma-separated list

// In the below example this is set to the ngNinja object
// You can send arguments to the function as a comma-separated list following the
// owner object

var person = {
    hello: function(message) {
        console.log(this.name + " says hello " + message);
    }
}

var ngNinja = {
    name: "NgNinja Academy"
}

person.hello.apply(ngNinja, ["world"]);    // output: "NgNinja says hello world"