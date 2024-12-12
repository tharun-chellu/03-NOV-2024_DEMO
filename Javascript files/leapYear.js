/*
using if condition

it should be divisble by 4 and reminder should be 0
!=  not equal to
*/

// function isLeapYear (leapYear)
// {
const prompt = require ('prompt-sync')();
let leapYear = prompt ("enter the year :");

if (leapYear % 4 == 0  && leapYear % 100 != 0 || leapYear % 400 == 0)
    console.log("It is the leap year");
else 
    console.log("It is not a leap year");
