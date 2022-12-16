// Math Methods and Properties
console.log(Math.PI); // 3.1415926

// trunc returns the integer portion of a number an truncates any decimal
console.log(Math.trunc(Math.PI));

console.log(Math.round(Math.PI));   // 3
console.log(Math.round(3.5));  // 4


console.log(Math.ceil(Math.PI));  // 4
console.log(Math.floor(Math.PI));  // 3

console.log(Math.pow(2, 4));

// returns smallest number from the given values
console.log(Math.min(2, 5, 9));  // 2

// returns the greatest number from the given values
console.log(Math.max(2, 5, 9));  // 9

// provides a pseudo-random number between 0 and 1
console.log(Math.random());

// provides a random number from the given values
console.log(Math.random(2, 5, 9));

// To get a random number between 1 and 10
console.log(Math.floor(Math.random() * 10) + 1);