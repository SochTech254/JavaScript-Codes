// JavaScript can be a little stricter by enabling strict mode
// This is done by putting the string "use strict" at the top of a file or a
// function body. Here's an example:
function canYouSpotTheProblem()
{
    "use strict";
    for (counter = 0; counter < 10; counter++)
    {
        console.log("Happy Day!");
    }
}

canYouSpotTheProblem();    // -> ReferenceError: counter is not defined

"use strict";
function Person(name) {this.name = name;}
let ferdinand = Person("Ferdinand");    // forgot new
console.log(ferdinand);    // -> TypeError: Cannot set property 'name' of undefined
