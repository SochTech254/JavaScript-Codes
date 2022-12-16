// It allows us to more easily handle a variable number of function parameters
// Earlier we had to use arguments variable to achieve this

function log() 
{
    for(var i = 0; i < arguments.length; i++)
    {
        console.log(arguments[i]);
    }
}

log(1);    // 1
log(1, 2, 3, 4)    // 1, 2, 3, 4

console.log("\n");

// It will assign all the remaining parameters to a rest-variable after those that were already assigned
// numbersToLog is the rest-variable in the example below
// Rest operator puts all the remaining arguments in an array and assigns it to the rest-variable

// NOTE: Rest operator turna comma-separated value to an array

function log1(a, ...numbersToLog) 
{
    console.log(a);    // 1
    console.log(numbersToLog);    // [2, 3]
    console.log(a,numbersToLog);
    console.log(a,...numbersToLog);
}

log1(1, 2, 3);
