// Trust issues with setTimeout.
// the main thread using a while loop
console.log("Start");

function cb()
{
    console.log("Callback");
}

setTimeout(cb, 5000);

console.log("End");

let startDate = new Date().getTime();
let endDate = startDate;

while(endDate < startDate + 10000) 
{
    endDate = new Date().getTime();
}

console.log("while expires");
