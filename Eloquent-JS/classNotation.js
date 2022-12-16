class Rabbit {
    
    constructor(type) {
        this.type = type;
    }

    speak(line) {
        console.log(`The ${this.type} rabbit says '${line}'`);
    }
}

let killerRabbit = new Rabbit("killer");
let blackRabbit = new Rabbit("black");

// You are allowed to omit the class name in a class expression.
let Object = new class {
    getWord() {
        return "hello";
    }
};
console.log(Object.getWord());    // -> hello