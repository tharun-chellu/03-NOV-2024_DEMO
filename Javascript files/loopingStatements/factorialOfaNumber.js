// werite a programe to find the factorial of a number
// r= r*i for n=5

const prompt = require('prompt-sync')()
let n = prompt("enter then value ");
let fact = 1;

for (let i = 1; i <= n; i++) {
    fact = fact * i;

}
console.log("factorial of " + n + " is : " + fact);