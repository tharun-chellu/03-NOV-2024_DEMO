// the given number if we reverse the number it should be same  (121)

let rn = 121;
let ld = 0;
let fd = 0;
let num = rn;

while (rn > 0) {
    ld = rn % 10;

    fd = (fd * 10) + ld;

    rn = Math.floor(rn / 10);
}

if (num == fd)
    console.log(" given number is palindrome");
else
    console.log(" given number is not a palindrome");