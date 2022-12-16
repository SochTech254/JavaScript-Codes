class Car {
    constructor(vehicle) {
        this._vehicle = vehicle;
    }

    move() {
        console.log("drive", this._vehicle);
    }
}

class Bike {
    constructor(vehicle) {
        this._vehicle = vehicle;
    }

    move() {
        console.log("ride", this._vehicle)
    }
}

function getVehicle(vehicle) {
    switch (vehicle.type) {
        case "bike" :
            return new Bike(vehicle);
        case "car" :
            return new Car(vehicle);
        default :
            break;
    }
}

// this would create the appropriate vehicle using the above classes
let vehicle = getVehicle({
    type: "bike",
});

vehicle.move();    // ride {type : 'bike'}

vehicle = getVehicle ({
    type: "car",
});

vehicle.move();    // drive {type: 'car'}