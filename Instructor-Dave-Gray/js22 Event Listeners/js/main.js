// JavaScript Event Listeners
/* 
const view = document.querySelector("#view2");
const div = view.querySelector("div");
const h2 = div.querySelector("h2"); */

// Syntax: addEventListener(event, function, useCapture)

const doSOmething = () => {
    alert("doing something");
};

h2.addEventListener("click", doSOmething, false);
// how to remove event listener as below:
h2.removeEventListener("click", doSOmething, false);

h2.addEventListener("click", (event) => {
    console.log(event.target);
    event.target.textContent = "clicked";
});

document.addEventListener("readystatechange", (event) => {
    if (event.target.readyState === "complete") {
        console.log("readyState: complete");
        initApp();
        init();
    }
});

const initApp = () => {
const view = document.querySelector("#view2");
const div = view.querySelector("div");
const h2 = div.querySelector("h2");

view.addEventListener("click", (event) => {
    /* event.stopPropagation(); */
    view.style.backgroundColor = "purple"; // try changing view to event.target 
    /*  view.classList.add("purple"); same as above line of code */
    view.classList.remove("darkblue");  // use .toggle in place of .add and .remove in this line and above comment
}, false);

div.addEventListener("click", (event) => {
    /* div.style.backgroundColor = "blue"; this line can be replaced as below */ // try changing div to event.target as above at the same time
    div.classList.toggle("blue");
    div.classList.toggle("black");
},false);

h2.addEventListener("click", (event) => {
    const myText = event.target.textContent;
    myText === "My 2nd View" ? (event.target.textContent = "Clicked") : (event.target.textContent = "My 2nd View");
}, false);

const nav = document.querySelector("nav");
nav.addEventListener("mouseover", (event) => {
    event.target.classList.add("height100");
});
nav.addEventListener("mouseout", (event) => {
    event.target.classList.remove("height100");
});
};

// event handler for submit in the form
const init = () => {
    const view3 = document.querySelector("#view3");
    const myForm = view3.querySelector("myForm");
    myForm.addEventListener("submit", (event) => {
        event.preventDefault();
        console.log("submit event");
    });
};