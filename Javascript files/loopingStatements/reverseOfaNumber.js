// reverse of the number
// 4597 - > 7954


/* explanation :
ld = rn % 10: Extract the last digit of rn.
reversed = reversed * 10 + ld: Multiply the current reversed value by 10 and add ld to build the reversed number.
rn = Math.floor(rn / 10): Remove the last digit from rn by dividing it by 10 and keeping only the integer part.
Loop continues until rn becomes 0.
Final reversed number is stored in reversed.
*/

let rn = 4567;
let reverse = 0;


while (rn > 0) {

    ld = rn % 10;  // 4567%10 -> reminder is 7
    console.log("ld values is : " + ld);

    reverse = reverse * 10 + ld; //  0*10+7 -> 7
    console.log("The addition of rev number is : " + reverse);


    rn = Math.floor(rn / 10);  // 456/10 -> quetient is 45   (in js math.floor will take quotient)
    console.log("ld value is : " + rn);

}
console.log("reverse of number is : " + reverse);

// 2nd itterartion with out using while condition

// ld = rn%10;
// console.log("ld values is : "+ld);

// sum1 = sum+ld;
// console.log("sum value is : "+sum);


// rn = Math.floor(rn/10);
// console.log("ld value is : "+rn);



