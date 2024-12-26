// check given number is prime or not (divide by 1, 14) should not divide with same number 
// 14 -> 2, 7 divide by -> not a prime
// 17 ->d ivde by only 1 -> prime
// 17 ( 2.....16) divide by any thing not a prime , divde means it is a prime.
// n=17   2...n/2  n%i == 0
// break : break the loop, continue = only stop for 1 condition


// const prompt = require ('prompt-sync')();
// let n = prompt ("enter the number");

// let n = 3;
// let p = 0;
// let i ;
// for (let i = 2 ; i<=n/2 ; i++){
//     if (n%i == 0){
//         p = 1;
//         console.log("not a prime");
//         break;
//     }
// }
//     if (p==0)
//         {
//             console.log("It is a prime");
//         }




// example 2 

let i;
let p = 0;
const prompt = require('prompt-sync')();
let n = prompt ("enter the following number");
for (let i =2 ; i<=n/2 ; i++){
    if (n % i == 0){
        p = 1;
        console.log ("It is a Prime number");
        break;
    }
}
if (p==0){
    console.log("not a prime number")
}


