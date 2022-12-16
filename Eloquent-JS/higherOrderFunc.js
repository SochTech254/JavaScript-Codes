// Functions that operate on other functions, either by taking them as arguments or
// by returning them, are called higher-order functions

function repeat(n, action) {
    for (let i = 0; i < n; i++) {
        action(i);
    }
}

repeat(3, console.log);

// Higher-order functions allow us to abstract over actions, not just values. They come
// in several forms. e.g. we can have functions that create new functions as below
function greaterThan(n) {
    return m => m > n;
}

let greaterThan10 = greaterThan(10);
console.log(greaterThan10(11));    // -> true

// And we can have functions that change other functions.
function noisy(f) {
    return (...args) => {
        console.log("calling with", args);
        let result = f(...args);
        console.log("called with", args, ", returned", result);
        return result;
    };
}
noisy(Math.min)(3, 2, 1);

// We can even write functions that provide new types of control flow.
function unless(test, then) {
    if (!test) then();
}

repeat (3, n => {
    unless(n % 2 == 1, () => {
        console.log(n, "is even");
    });
});


