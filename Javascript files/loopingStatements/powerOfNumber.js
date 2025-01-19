// write a programe to find power of any number
// base =2 , exponent = 5 (2^5)

let i;
let base = 2;
let exponent = 5;
let r = 1;


for (i = 1; i <= exponent; i++) {
    r = r * base;
}

console.log(base + " power of " + exponent + " is " + r);