function Building(address) {
    this.address = address;
}

Building.prototype.getAddress = function() {
    return this.address;
}

function Home(owner, address) {
    Building.call(this, address);
    this.owner = owner;
}

Home.prototype.getOwner = function() {
    return this.owner;
}

var myHome = new Home("Joe", "1 Baker Street");

console.log(myHome);
// Home {address: "1 Baker Street", owner: "Joe", constructor: Object}

console.log(myHome.owner);      // Joe
console.log(myHome.address);    // 1 Baker Street

// Let's define accessor methods on the above constructor function
// getAddress method is defined on Building
// getOwner method is defined on Home

// on Building constructor
Building.prototype.getAddress = function() {
    return this.address;
}

// on Home constructor
Home.prototype.getOwner = function() {
    return this.owner;
}

var myHome = new Home("Joe", "1 Baker Street");

console.log(myHome.getOwner);    // Joe
// console.log(myHome.getAddress());    // ERROR: myHome.getAddress is not a function

/* getOwner works correctly
But - getAddress method gives error
That is because we have not linked the prototype of Home 
to the prototype of Building
We canlink the prototype by using Object.create
Now when we call getAddress we get the value correctly as expected
*/

Home.prototype = Object.create(Building.prototype);

console.log(myHome.getOwner());    // Joe
console.log(myHome.getAddress);    // 1 Baker Street