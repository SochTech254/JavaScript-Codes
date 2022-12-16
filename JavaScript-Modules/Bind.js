// It returns a function
// This returned function can later be called with a certain context set for calling
// the original function
// The returned function needs to be invoked separately

// person object has a method called hello()
// ngNinja object does not have it
// You can bind hello() method to ngNinja object and call it later in the scope
var person = {
    hello : function(message) {
        console.log(this.name + " says hello" + message);
    }
}

var ngNinja = {
    name: "NgNinja Academy"
}

var sayHello = person.hello.bind(ngNinja);

sayHello(" world");    // output: "NgNinja Academy says hello world"