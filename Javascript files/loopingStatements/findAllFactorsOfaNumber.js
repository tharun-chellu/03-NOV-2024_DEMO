// write a programe to find all factors of a number
//n=12 -> (n /6) -> which is divisble by number 12

const prompt = require('prompt-sync')()
let n = prompt("enter the n value ");

for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
        console.log(i);
    }
}
