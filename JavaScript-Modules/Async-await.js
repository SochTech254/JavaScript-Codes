// If your function is awaiting on some asynchronous data you have to define
// your function as async
// And you have to use await keyword for the function call that is making the 
// network API call
// In the eaxample below we have defined fetchAndPrintUser function which fetches 
// the user name and prints it
// Your function fetchAndPrintUser is defined as async because internally it is
// calling await fetchUserData()
// fetchUserData is the function that is making network call to the API to 
// fetch the user data
// To handle errors using async-await you have to wrap the code inside try-catch block

// Your async function
async function fetchAndPrintUser() 
{
    try {
        // await on the API call to return the data
        const name = await fetchUserData();

        // Your data is now available
        console.log(name);
    } catch(Error) 
    {
    // there was some error
    console.log(Error);
    }
}