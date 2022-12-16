// Promises are basically another way to deal with asynchronous programming
// In the below example previously implementednusing callback function we define
// the fetchAndPrintUser function which fetches the user details and prints the user
// But, this time instead of passing any callback function we create a new promise
// New promise can be created as below
// const newPromise = new Promise();

// What is a promise?
// Promise is literally a promise made by some function
// That it will eventually return the result and fulfill that promise
// Promise is a proxy for a value that will eventually become available

// The Promise object itself takes a callback function with two functions as parameters
// resolve - function to be called after successful data retrieval
// reject - function to be called if there was some error during data retrieval
// So, in the example below we return Promise from the fetchAndPrintUser function
// Once the date is available we return the data using resolve(fakeUserName)
// If there were any network error or some server failure - we would return error by
// rejecting the promise
//      -> This is done using reject('Error ocurred!)

function fetchAndPrintUser() 
{

    // create new promise
    return new Promise((resolve, reject) => 
    {

        // simulate fake network call
        setTimeout(() => 
        {
            
            // simulate error
            // when error occurs we reject the promise
            if(Error) 
            {
                reject('Error ocurred!');
            } 

            const fakeUserName = 'Sleepless Yogi';

            // Resolve the user name
            resolve(fakeUserName)
        }, 500)

    })
}

// The usage of promise is done via promise.then.catch pattern
// This means if the data is correctly resolved the execution goes in the then() block
//      -> Where you can do any other thing with the result data
// If the promise was rejected due to some error the execution would go in the 
// catch() block
//      -> Where you can handle errors
// This is demonstrated below :

// Execute function that fetch user and then prints it
fetchAndPrintUser().then((name) => 
{
    console.log(name);
}).catch((Error) => 
    {
        console.log(Error);
    })