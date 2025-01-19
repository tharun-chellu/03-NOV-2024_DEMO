// program to print number in words ( 345 -> three four five)

let n = 1017;
let ld = 0;
let fd = 0;
let num = 0;

while (n > 0) {
    ld = n % 10;

    fd = (fd * 10) + ld;

    n = Math.floor(n / 10);
}
//console.log(" reverse number is : " + fd);

num = fd;

while (num > 0) {
    ld = num % 10;
    if (ld === 0)
        console.log("zero");
    else if (ld === 1)
        console.log("one");
    else if (ld === 2)
        console.log("two");
    else if (ld === 3)
        console.log("three");
    else if (ld === 4)
        console.log("four");
    else if (ld === 5)
        console.log("five");
    else if (ld === 6)
        console.log("six");
    else if (ld === 7)
        console.log("seven");
    else if (ld === 8)
        console.log("eight");
    else if (ld === 9)
        console.log("nine");
    else if (ld === 10)
        console.log("ten");

    num = Math.floor(num / 10);

}
