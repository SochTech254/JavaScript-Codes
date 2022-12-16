// Javascript Classes
class Pizza {

    constructor(pizzaType, pizzaSize) {
        this._type = pizzaType;
        this._size = pizzaSize;
        this._crust = "original";
        this._toppings = [];
    }
    getCrust() {
        return this._crust;
    }
    setCrust(pizzaCrust) {
        this._crust = pizzaCrust;
    }

    getToppings() {
        return this._toppings;
    }
    SetToppings(topping) {
        this._toppings.push(topping);
    }
    bake() {    // method
        console.log("Baking a ${this._size} ${this._type} ${this._crust} crust pizza.");
    }
}

const myPizza = new Pizza("pepperoni", "medium");
myPizza.setCrust("thin"); // Change the property of an object using setters and getters 
myPizza.bake();
myPizza.SetToppings("sausage");
myPizza.SetToppings("olives");
console.log(myPizza.getCrust());
console.log(myPizza.getToppings());

class SpecialtyPizza extends Pizza {
    constructor(pizzaSize) {
        super(pizzaSize);
        this._type = "The Works";   // private field
    }

    slice() {
        console.log("Our ${this._type} ${this._size} pizza has 8 slices.");
    }
}

const mySpecialty = new SpecialtyPizza("medium");
mySpecialty.slice();

// Factory function: another to create an object in Javascript
function pizzaFactory(pizzaSize) {
    const crust = "original";
    const size = pizzaSize;
    return {
        bake1: () => console.log("Baking a ${size} ${crust} crust pizza.")
    };
}

const myPizza1 = pizzaFactory("small");
myPizza1.bake1();

// Public and Private Fields
class Pizza1 
{
    crust = "original"; // public field
    #sauce = "traditional"; // private field
    #size;
    constructor(pizza1Size) {
        this.#size = pizza1Size;
    }
    
    getCrust() {
        return this.crust;
    }
    
    setCrust() {
        this.crust = pizza1Crust;
    }

    hereYouGo() {
        console.log("Here's your ${this.crust} ${this.#sauce} sauce ${this.#size} pizza");
    }
}
// The private fields can only be accessed by their getters and setters methods 
const myPizza2 = new Pizza1("large");
myPizza2.hereYouGo();