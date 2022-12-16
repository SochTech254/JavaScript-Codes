/* let ages = {
    Boris: 39,
    Liang: 22,
    Julia: 62
};
 */

// Using the Map class
let ages = new Map();
ages.set("Boris", 39);
ages.set("Liang", 22);
ages.set("Julia", 62);
console.log(`Julia is ${ages["Julia"]}`);    // Julia is 62.
console.log("Is Jack's age known?", "Jack" in ages);    // Is Jack's age known? false
console.log("Is toString's age known?", "toString" in ages);    // -> Is toString's age known? true