// If you want to fetch via multiple APIs and then perform some operation 
// on the entire dataset
// The naive way would be to declare multiple promises and then perform operations
// when all promises are resolved
// Can you imagine how much nesting you would have to do if you had 3 or 10 or 100 promises
// That is clearly bad! Enter promise.all!!!

const userPromise = new Promise();

const orderPromise = new Promise();

Promise.all([userPromise, orderPromise]).then((data) => 
{
    // here we are confident that we have both
    // user data as well as the order data
    console.log(data);
}).catch((Error) => 
{
    // we fall in this code block
    // if either one or all the promise are rjected
    console.log(Error);
})