// A do-while loop defers from a while loop on one point :
// A do-while loop always executes its body at least once, and it starts testing 
// whether it should stop only after that first execution

let yourName;
do {
    yourName = prompt("who are you?");
} while (!yourName);
console.log(yourName);