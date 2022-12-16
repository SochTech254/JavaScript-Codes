export default class User {
    constructor(email, name) {
        this._id = email;
        this._name = name;
    }

    greeting() {
        return "Hi, my name is ${this._name}.";
    }
}

import User from "./user.js";
const me = new User("email@email.com", "Dave");
console.log(me);
console.log(me.greeting());