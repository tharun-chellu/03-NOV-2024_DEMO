// area of circle : pie r*2
/* take r value
i will need to find pie*r*r
i will declare result */

// variable name of the storing location.
/* 
logic :
1. declare 2 variables r(radius), area
2. area = 3.14*r*r
3. declare result "print area value".
*/

// read r value by "prompt"
const prompt = require ('prompt-sync')();
let r = prompt("Please give the r value:");
console.log("r value:" + r);

let area = 3.14*r*r
console.log ("area of circle is :" + area);

