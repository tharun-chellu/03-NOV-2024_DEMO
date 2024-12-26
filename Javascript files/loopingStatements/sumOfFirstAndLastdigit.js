// sum of first and last digit of a number.

// (*10 -> reverse number)(/10 -> sum of the number)

let ld = 4597;

// ld = n%10;

let fs = 0;

n = ld%10; // reminder(%) of 4597 is 7
console.log("The n value is : "+n);

fs = fs/10 ; // 0 / 459
console.log("The sum of first and last digit value is : "+fs);

ld = Math.floor(ld/10);
console.log("The last digit value is : "+ld);


