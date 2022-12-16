console.log("coconuts".slice(4, 7));    // -> nut
console.log("coconut".indexOf("u"));    // -> 5
console.log("one two three".indexOf("ee")); // -> 11

// The trim method removes whitespace (spaces, newlines, tabs, and similar characters)
// from the start and end of a string.
console.log("   okay \n ".trim());

// The padStart method takes the desired length and padding character as arguments
console.log(String(6).padStart(3, "0"));    // -> 006

// You can split a string on every occurrence of another string with split and join it again with join.
let sentence = "Secretarybirds specialize in stomping";
let words = sentence.split(" ");
console.log(words);    // -> ["Secretarybirds", "specialize", "in", "stomping"]
console.log(words.join(". "));    // -> Secretarybirds. specialize. in. stomping

// A string can be repeated with the repeat method, which creates a new string 
// containing multiple copies of the original string, glued together
console.log("LA".repeat(3));