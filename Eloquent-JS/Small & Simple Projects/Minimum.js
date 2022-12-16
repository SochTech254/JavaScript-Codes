/* 
Chapter Function: Exercises.
Minimum

The previous chapter introduced the standard function Math.min that returns
its smallest argument. We can build something like that now. Write a function
min that takes two arguments and returns their minimum.
*/

function min(num1, num2) {
    if ((num1 != num2) && num1 < num2)
        return num1;
    else if ((num1 != num2) && num2 < num1)
        return num2;
    else
        return "Both numbers are equal";
}

console.log(min(6, 8));