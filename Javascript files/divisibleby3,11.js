// check the given number is divisbe by 3, 11
// && (AND) BOTH NEED TO BE TRUE THEN ONLY IT WILL EXECUTE , || (OR) ANY ONE CAN BE TURE THEN IT EXECUTE
// we can combine one or more conditions by using this operator

const prompt = require ('prompt-sync')();
let a = prompt ("enter the number");

if (a%3 == 0 || a%11==0)  // (a%3 == 0 && a%11==0)
{
    console.log("given number is divisble by both 3 and 11");
}
else
{
    console.log("given number is not divisble by 3 and 11");
}

// let b = prompt ("enter the number");
// if (b%11 == 0)
// {
//     console.log("given number is divisble by 11");
// }
// else
// {
//     console.log("given number is not divisble by 11");
// }