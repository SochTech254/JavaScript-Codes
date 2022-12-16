// Map is used for creating a new array from an existing one
// It applies the given function to each item in that array

function getSquare(item) {
    return item * item;
}

const numbers = [1, 2, 3, 4];
const squareOfNumbers = numbers.map(getSquare);
console.log(squareOfNumbers);    // [1, 4, 9, 16]