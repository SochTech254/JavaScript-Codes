// Fetch API requires a discussion of ...
// callbacks, Promises, Thenables, and Async/Await

// Callbacks are functions that are passed to other functions as parameters

// Promises
// 3 states: Pending, Fulfilling, Rejected

const myPromise = new Promise((resolve, reject) => {
    const error = false;
    if(!error) {
        resolve("Yes! I resolved the promise!");
    } else {
        reject("No! rejected the promise.");
    }
});

console.log(myPromise);

const myNextPromise = new Promise((resolve, reject) => {
    setTimeout(function() {
        resolve("myNextPromise resolved!");
    }, 3000);
});

myNextPromise.then(value => {
    console.log(value);
});

myPromise.then(value => {
    console.log(value);
});

const users = fetch("https://jsonplaceholder.typicode.com/users")
.then(response => {
    return response.json();
})
.then(data => {
    data.forEach(user => {
        console.log(user);
    }) 
});

// Async/Await
const myUsers = {
    userList: []
}

const myCoolFunction = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const jsonUserData = await response.json();
    return jsonUserData;
}

const anotherFunc = async () => {
    const data = await myCoolFunction();
    myUsers.userList = data;
    console.log(myUsers.userList);
}

anotherFunc();
console.log(myUsers.userList);

// workflow function
const getAllUserEmails = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const jsonUserData1 = await response.json();

    const userEmailArray = jsonUserData1.map(user =>{
        return user.email;
    });

    postToWebPage(userEmailArray);
}

const postToWebPage = (data) => {
    console.log(data);
}
getAllUserEmails();

// 2nd parameter of Fetch is an object
const getDadJoke = async () => {
    const response = await fetch("https://icanhazdadjoke.com/", {
        method: "GET",
        headers: {
            Accept: "application/json" // change type of data from application/json to text/plain
        }
    });
    const jsonJokeData = await response.json(); // change wherever there is json to text e.g jsonJokeData to textJokeData and response.json() to response.text()

    console.log(jsonJokeData); // change jsonJokeData to textJokeData and remove .joke
}

getDadJoke();

const jokeObject = {
    id: 'DtcaMmWDImb', 
    joke: 'Why did Dracula lie in the wrong coffin? He made a grave mistake.'
}

const postData = async (jokeObj) => {
    const response = await fetch("https://httpbin.org/post", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(jokeObj)
    });

    const jsonResponse = await response.json();

    console.log(jsonResponse.headers);
}

postData(jokeObject);

const getDataFromForm = () => {
    const requestObj = {
        firstName: "Bruce",
        lastName: "Lee",
        categories: ["nerdy"]
    };
    return requestObj;
}

const buildRequestUrl = (requestData) => {
    return "http://api.icndb.com/jokes/random?firstName=${requestData.firstName}&lastName=${requestData.lastName}&limitTo=${requestData.categories}";
}

const requestJoke = async (url) => {
    const response = await fetch(url);
    const jsonResponse = await response.json();
    const joke = jsonResponse.value.joke;
    postJokeToPage(joke);
}

const postJokeToPage = () => {
    console.log(joke);
}

// Procedural "workflow" function
const processJokeRequest = async () => {
    const requestData = getDataFromForm();
    const requestUrl = buildRequestUrl(requestData);
    await requestJoke(requestUrl);
    console.log("finished");
}

processJokeRequest();