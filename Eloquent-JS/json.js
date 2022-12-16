// JSON.stringify takes a JavaScript value and returns a JSON-encoded string
// JSON.parse takes such a string and converts it to the value it encodes
let string = JSON.stringify({squirrel: false,
                            events: ["weekend"]});
console.log(string);    // -> {"squirrel":false, "events":["weekend"]}
console.log(JSON.parse(string).events); // -> ["weekend"]