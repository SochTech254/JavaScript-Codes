let rabbit = {};
rabbit.speak = function(line) {
    console.log(`The rabbit says '${line}' `);
}
rabbit.speak("I'm alive");    // The rabbit says 'I'm alive.'

console.log("\n");

function speak(line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
}
let whiteRabbit = {type: "white", speak};
let hungryRabbbit = {type: "hungry", speak};

whiteRabbit.speak("Oh my ears and whiskers, " + "how late it's getting!");
hungryRabbbit.speak("I could use a carrot right now.");