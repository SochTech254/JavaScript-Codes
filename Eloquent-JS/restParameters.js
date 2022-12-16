// It can be useful for a function to accept any number of arguments
// T write such a function, you put three dots before the function's last parameter
// like below:
function max(...numbers) {
    let result = -Infinity;
    for (let number of numbers) {
        if (number > result) result = number;
    }
    return result;
}
console.log(max(4, 1, 9, -2));      // -> 9

// You can use a similar three-dot notation to call a function with an array of arguments.
let numbers = [5, 1, 7];
console.log(max(...numbers));   // -> 7

let words = ["never", "fully"];
console.log("will", ...words, "understand"); // -> ["will", "never", "fully","understand"]
