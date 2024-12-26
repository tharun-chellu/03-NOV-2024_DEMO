// sum of digits in a number

// (%10 for last digit)
// n/ 10 of 3657/10 is quotient is 365
// (% modulus -> reminder )

// n / 10 computes the division.
// Math.floor() ensures only the integer part (quotient) is retained.

let n = 4597;
let sum = 0;
let ld = 0;

while (n>0)
{

    console.log("sum value is " + sum);
    console.log("ld value is " + ld);

    ld = n%10; 459/10
    console.log("ld value is " + ld);

    sum = sum +ld;
    console.log("sum value after ld is " + sum);

    n = Math.floor(n/10);/// 459/10 -> quetient is 45   (in js math.floor will take quotient)
    console.log("sum of n value" + n);
}

console.log("sum is :"+ sum);







// ld = n%10;
// console.log("ld value is " + ld);

// sum = sum +ld;
// console.log("sum value after ld is " + sum);


// n = Math.floor(n/10);/// 4597/10 -> quetient is 45   (in js math.floor will take quotient)
// console.log("sum of n value" + n);

