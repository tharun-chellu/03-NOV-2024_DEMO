// console.log("chellu");

// heroName = "Prabhas";
// movieName = "salaar";
// console.log(heroName + movieName);


// const prompt = require('prompt-sync')();
// let rValue = prompt("Please give the r value:");
// console.log("r value:" + rValue);





// let username = "Alice";  // Can be reassigned
// const maxScore = 100;    // Cannot be reassigned
// var userLoggedIn = true; // Function-scoped (use with caution)

// username = "Bob";        // Allowed because 'let' allows reassignment
// // maxScore = 200;       // Error: 'maxScore' is read-only because it's a constant
// userLoggedIn = false;    // Allowed because 'var' allows reassignment

// for (let i = 5; i <= 10; i++);
// console.log(i);


function celsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;

}

console.log(celsiusToFahrenheit(35));


function FahrenheitToCelsius(Fahrenheit) {
    return (Fahrenheit - 32) * 5 / 9;
}
console.log(FahrenheitToCelsius(97));


function revrseNumber(str) {
    return str.split("").reverse().join("");
}
console.log(revrseNumber("chellu"));

function isPalindrome(str) {
    const reversed = str.split("").reverse().join("");
    return str === reversed;

}
console.log(isPalindrome("CHHC"));


//star pattren

let rows = 5;

// pattern variable carries the final pattern in string format
let pattern = "";

// outer loop runs for `rows` no. of times
for (let n = 1; n <= rows; n++) {
    // inner loop runs for n
    for (let num = 1; num <= n; num++) {
        pattern += num;
    }

    // Add a new line character after contents of each line
    pattern += "\n";
}
console.log(pattern);