//check wheater given number is +ve or -ve or zero


const prompt = require ('prompt-sync')();
let a = prompt ("enter the number");

if (a<0)
    console.log("given number is negetive");
else if (a==0)
    console.log("given number is zero");
else 
    console.log("given number is postive");

