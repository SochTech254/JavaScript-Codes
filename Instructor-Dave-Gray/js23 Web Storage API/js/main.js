// Web Storage API

// Not part of the DOM - refers to the window API
// Available to js via the global variable: window
// we do not have to type window. It is implied;

// sessionStorage keeps data only during the session -> while logged on a website 
// localStorage stores persistent data and will continue to store that data but not attached to the open tab or even browsers
// sessionStorage and localStorage only store String data

const myArray = ["eat", "sleep", "code"];
const myObject = {
    name: "Soch",
    hobbies: ["eat", "sleep", "code"],
    logName: function() {
        console.log(this.name);
    }
};
/* 
sessionStorage.setItem("mySessionStore", JSON.stringify(myObject));
const mySessionData = JSON.parse(sessionStorage.getItem("mySessionStore"));
console.log(mySessionData); */

sessionStorage.setItem("mySessionStore", JSON.stringify(myArray));
const mySessionData = JSON.parse(sessionStorage.getItem("mySessionStore"));
console.log(mySessionData);

localStorage.setItem("myLocalStore", JSON.stringify(myArray));
/* localStorage.removeItem("myLocalStore"); .removeItem method for the webStorage API .clear can be used to remove everything from the localStorage */
const myLocalData = JSON.parse(localStorage.getItem("myLocalStore"));
console.log(myLocalData);

const storeLength = localStorage.length;
console.log(storeLength);