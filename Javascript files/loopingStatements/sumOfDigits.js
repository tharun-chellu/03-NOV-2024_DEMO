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
// 
//  we can pickup only last digit
//  console.log("sum of n value" + n);

/* n=345 ld=0 sum=0+ (n/10 = answer (it is last digit "ld"))
   n=34  ld=5 sum=5+
   n=3   ld=4 sum=9+
   n=0   ld=3 sum=12
   if n=0 it will stop the process
10 ) 345( 34 -> quotient(/)
     340
     ---
     5 -> reminder(%-modules)
     
*/