// sum of first and last digit of a number.

// (*10 -> reverse number)(/10 -> sum of the number)

let n = 345;   // ld = n%10;

let fd = 0;
let ld = 0;

    // finding last digit (reminder is last digit)
    ld = n%10;
    console.log("The last digit ld value is : "+ ld);

while (n>0)
    {
    //finding first digit 
    n = Math.floor(n/10)
    if (n>0){
        fd=n
    }
}

console.log("The first digit fd value is : "+ fd);
sum = fd +ld
console.log("sum of first digit fd and last digit ld is : "+ sum);


// ld = ld/10; // reminder(%) of 345 is 7
// console.log("The n value is : "+ld);

// fs = fs/10 ; // 0 / 459
// console.log("The sum of first and last digit value is : "+fs);

// ld = Math.floor(ld/10);
// console.log("The last digit value is : "+ld);

