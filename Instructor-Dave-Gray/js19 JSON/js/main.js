// JSON: JavaScript Object Notation
/*
JSON is used to send and receive data.
JSON is a text format that is completely language independent.
Meaning JSON is used to send & receive data in many languages
...not just in JavaScript. 
 */

const myObj = {
    name: "SochTech",
    hobbies: ["eat", "sleep", "code"],
    hello: function() {
        console.log("Hello!");
    }
};

console.log(myObj); // {name: "SochTech", hobbies: Array(3), hello: f}
console.log(myObj.name);    // SochTech
myObj.hello();  // Hello!
console.log(typeof myObj);  // object

const sendJSON = JSON.stringify(myObj);
console.log(sendJSON);  // {"name" : "SochTech", "hobbies": ["eat", "sleep", "code"]}
console.log(typeof sendJSON);   // string

const receiveJSON = JSON.parse(sendJSON);
console.log(receiveJSON);   // {name: "SochTech", hobbies: Array(3)}