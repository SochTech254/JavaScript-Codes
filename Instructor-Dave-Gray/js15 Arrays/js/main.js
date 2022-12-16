// Arrays
const myArray = [];

// add elements to an array
myArray[0] = "Dave";
myArray[1] = 1001;
myArray[2] = false;

// refer to an array
console.log(myArray);

// length property
console.log(myArray.length);

// last element in an array
console.log(myArray[myArray.length - 1]);

// refer to a particular element in the array
console.log(myArray[1]);

// add item into the array
myArray.push("school");
console.log(myArray);

const lastItem = myArray.pop(); // removes the last item added into the array
console.log(lastItem);

const newLength = myArray.unshift(42); // adds item into the array and takes index 0
console.log(newLength);

const firstItem = myArray.shift(); // removes item at index 0 from the array  
console.log(firstItem);

console.log(myArray[5]); // If you try to print an item with index which is not in the array the console prints undefined

// Never use the delete keyword to delete an element at the middle of the Array rather use splice method as below
myArray.splice(1,1); // selects starting index and the number of elements
console.log(myArray[1]);

// splice can also be used to replace elements in the array as below
myArray.splice(1, 1, 42); // replaces element at index 1 with 42
console.log(myArray[1]);

const myArray1 = ["A", "B", "C", "D", "E", "F"];
const newArray = myArray1.slice(2,5); // prints "C", "D" and "E"
console.log(newArray);

myArray1.reverse();
console.log(myArray1);

const newString = myArray1.join(); // creates a string of all the elements in the array
console.log(newString);

const newArray1 = newString.split(","); // creates a new array and uses comma as a separator
console.log(newArray1);

const myArrayA = ["A", "B", "C"];
const myArrayB = ["D", "E", "F"];

const newArrayC = myArrayA.concat(myArrayB);
console.log(newArrayC);

// The spread operator can be used in place of concat method
const newArrayD = [...myArrayA, ...myArrayB];
console.log(newArrayD);