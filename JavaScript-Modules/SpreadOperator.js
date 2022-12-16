// It looks like has the same Rest parameter as the Rest operator
// But it has a different use case
// In fact, it performs almost the opposite function to Rest operator

// NOTE: Spread operator turns an array to comma-separated values

// Below example spread array1 to a comma-separated list of values into the array2

var array1 = [2, 3];
var array2 = [1, ...array1, 4, 5];    // spread

// array2 = [1, 2, 3, 4, 5]

        // Spread tricks
    // Concat array
const arr1 = ['coffee', 'tea', 'milk'];
const arr2 = ['juice', 'smoothie'];

// Without spread
var beverages = arr1.concat(arr2);

// With spread
var beverages = [...arr1, ...arr2];

// result
// ['coffee', 'tea', 'milk', 'juice', 'smoothie']

// Make copy of array
const arra1 = ['coffee', 'tea', 'milk'];

// Without spread
var arra1Copy = arr1.slice()

// With spread
const arra1Copy = [...arra1];

// Remove duplicate entries from Array
const array1 = ['coffee', 'tea', 'milk', 'coffee', 'milk'];

// Without spread
// Iterate over the array add it to objectas property
// If value present in the object skip it
// Else push it to another array

// With spread
const array1Copy = [...new Set(array1)];

// result
// ['coffee', 'tea', 'milk'];

// Convert string to array
const myBeverage = 'tea';

// Without spread
var bevArr = myBeverage.split('');

// With spread
var bevArr = [myBeverage];

// result
// ['t', 'e', 'a']

// Find min max
// Without spread
var max = Math.max(3, 2, 1, 5, -10);

// With spread
var myNums = [3, 2, 1, 5, -10];
var max = Math.max(...myNums);

// result
// 5
