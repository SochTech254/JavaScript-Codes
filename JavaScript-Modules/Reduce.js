/*
Reduce calls the given method for each element in the array
The result of each method call is passed over to the next method call in the array
This result is called as accumulator
*/

function getSum(result, item) {
    return result + item;
}

const numbers = [1, 2, 3, 4];
const sumOfNumbers = numbers.reduce(getSum, 0);
console.log(sumOfNumbers);    // 10

/*
getSum method is called for each item in the numbers array
0 is passed as the initial value of the accumulator
result is the variable name of the accumulator
The above .reduce method adds each item in the array and stors that sum in the result variable
Finally the result is returned to sumOfNumbers
*/