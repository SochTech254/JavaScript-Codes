// Callback functions are more often used in assynchronous programming
// Assynchronous programming is the type of programming where actions do not take
// place in a predictable order
// Example: network calls
// When you make an HTTP call you cannot predict when the call will return
// Therefoe your program needs to consider this assynchronism to output 
// the correct results

// In the below example we define a callback function printUser
// This function depends on the variable name
// So, basically until we have value for the name variable we cannot print the value
// We then define fetchAndPrintUser function to fetch the user and then print 
// the user's name
// We are simulating network call using setTimeout method
// Basically it means after 500 ms we will have the name available
//      -> In real world this will be a network call to some user API that queries the
//      -> user database for this information
// After we get the user's name, We call the callback function printUser 
// with the name value

function printUser(name) {
    console.log(name);
}

function fetchAndPrintUser(printCallbackFunction) {

    // simulate fake network call
    setTimeout(() => {
        const fakeUserName = 'Sleepless Yogi';

        // We call the callback function here
        printCallbackFunction(fakeUserName)
    }, 1000)

}

// Execute the functionto fetch user and print the user's name
fetchAndPrintUser(printUser);
