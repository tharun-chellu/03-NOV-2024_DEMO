console.log("chellu");

heroName = "Prabhas";
movieName = "salaar";
console.log (heroName +  movieName);


const prompt = require ('prompt-sync')();
let rValue = prompt("Please give the r value:");
console.log("r value:" + rValue);





let username = "Alice";  // Can be reassigned
const maxScore = 100;    // Cannot be reassigned
var userLoggedIn = true; // Function-scoped (use with caution)

username = "Bob";        // Allowed because 'let' allows reassignment
// maxScore = 200;       // Error: 'maxScore' is read-only because it's a constant
userLoggedIn = false;    // Allowed because 'var' allows reassignment
