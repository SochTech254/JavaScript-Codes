let day1 = {
    squirrel: false,
    events: ["work", "touched tree", "pizza", "running"]
};

console.log(day1.squirrel);
day1.wolf = false;
console.log(day1.wolf);

let anObject = {left: 1, right: 2};
console.log(anObject.left);

delete anObject.left;
console.log(anObject.left);     // -> undefined

console.log("left" in anObject);    // -> false

console.log("right" in anObject);   // -> true

let objectA = {a: 1, b: 2};
Object.assign(objectA, {b: 3, c: 4});
console.log(objectA);   // -> {a: 1, b: 3, c: 4}

let object1 = {value: 10};
let object2 = object1;
let object3 = {value: 10};

console.log(object1 == object2);    // -> true
console.log(object1 == object3);    // -> false

object1.value = 15;
console.log(object2.value);     // -> 15
console.log(object3.value);     // -> 10