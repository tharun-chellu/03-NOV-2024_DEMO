// check the given number is even or odd  (a % 2 == 0)
// (%)modular operator will give the reminder to check
// { } are not reuired for single statement we can give more statements in if block we can use {}

// const prompt = require('prompt-sync')();

// function isEvenOrOdd(a) {

//     let a = parseInt(prompt("enter the number"));
//     if (a % 2 == 0)
//         console.log("given number is even number");
//     else
//         console.log("given number is odd number");
// }

const prompt = require('prompt-sync')();

function isEvenOrOdd() {
    let a = parseInt(prompt("Enter the number: "));

    if (a % 2 === 0)
        console.log("Given number is even");
    else
        console.log("Given number is odd");
}

isEvenOrOdd(); // Call the function


for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break;  // Exits the loop when i equals 5
    }
    console.log(i);
}