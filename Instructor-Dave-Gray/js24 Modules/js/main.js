// Modules - used to export different sections of code from one file to another
/* import playGuitar from "./guitars.js";
import { shredding as shred, plucking as fingerpicking } from "./guitars.js";
 */
/* The below are used with the above imports 
console.log(playGuitar());
console.log(shred());
console.log(fingerpicking()); */

// The below mode imports all:
import * as Guitars from "./guitars.js";

console.log(Guitars.playGuitar());
console.log(Guitars.shredding());
console.log(Guitars.plucking());
