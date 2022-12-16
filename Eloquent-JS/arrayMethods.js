// This program demonstrates two methods you can use to manipulate arrays
let sequence = [1, 2, 3];
sequence.push(4);
sequence.push(5);

console.log(sequence);
console.log(sequence.pop()); // -> 5
console.log(sequence.pop(3)); // -> 3
console.log(sequence);

let todoList = [];
function remember(task) {
    todoList.push(task);
}
function getTask() {
    return todoList.shift();
}
function rememberUrgently(task) {
    todoList.unshift(task)
}

console.log([1, 2, 3, 2, 1].indexOf(2));    // -> 1
console.log([1, 2, 3, 2, 1].lastIndexOf(2));    // -> 3

/* 
Another fundamental array method is slice, which takes start and end indices and returns
an array that has only the elements between them. 
The start index is inclusive, the end index exclusive. 
*/
console.log([0, 1, 2, 3, 4].slice(2, 4));   // -> [2, 3]
console.log([0, 1, 2, 3, 4].slice(2));  // -> [2, 3, 4]
