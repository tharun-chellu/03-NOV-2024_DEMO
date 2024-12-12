// check the given number is even or odd  (a % 2 == 0)
// (%)modular operator will give the reminder to check
// { } are not reuired for single statement we can give more statements in if block we can use {}


function isEvenOrOdd (a)
{
const prompt = require('prompt-sync')();
let a = prompt ("enter the number");
 if (a%2==0)
 console.log("given number is even number");
 else 
console.log("given number is odd number");
}