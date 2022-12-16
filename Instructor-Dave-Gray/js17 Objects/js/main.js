// Objects
// key-value pairs in curly braces

const myObj = {name: "Dave"};
console.log(myObj);
console.log(myObj.name);

const anotherObj = {
    alive: true,
    answer: 42,
    hobbies: ["Eat", "Sleep", "Code"],
    beverage: {
        morning: "coffee",
        afternoon: "Iced Tea"
    },
    action: function() {
        return "Time for ${this.beverage.morning}";
    }
};
console.log(anotherObj.action());

console.log(anotherObj.answer);
console.log(anotherObj.beverage.morning);
console.log(anotherObj.hobbies[1]);

const vehicle = {
    wheels: 4,
    engine: function() {
        return "Vrooooom!";
    }
};

const truck = Object.create(vehicle);
truck.doors = 2;
console.log(truck);
console.log(truck.wheels); // Inheritance
console.log(truck .engine());

const car = Object.create(vehicle);
car.doors = 4;
car.engine = function() {
    return "whooooosh!";
};
console.log(car.engine());
console.log(car.wheels);

const tesla = Object.create(car);
console.log(tesla.wheels);
tesla.engine = function() {
    return "shhhhhh...";
};
console.log(tesla.engine());

const band = {
    vocals: "Robert Plant",
    guitar: "Jimmy Page",
    bass: "John Paul Jones",
    drums: "John Bonhan"
};

console.log(Object.keys(band)); //  object keys
console.log(Object.values(band));

for (let job in band) { // for-in-loop used to iterate over an object
    console.log(band[job]); // Getting the values
    console.log("On ${job}, it's ${band[job]}!");
}

// To delete a property:
delete band.guitar;
console.log(drums.hasOwnProperty("drums")); // boolean value: false

// destructuring objects ude the band object
const {guitar, bass, drums, vocals} = band;
console.log(guitar);
console.log(bass);

// another wat to destructure by using functions
function sings({vocals}) {
    return "${vocals} sings!";
}

console.log(sings(band))