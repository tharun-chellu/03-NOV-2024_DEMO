// fahrenheit to celsius cobertion program in js
/*
f -> c
celsius c = (f-32)*5/9

1. read f value 
2. calculate c value.
3. declare result.

logic :

1. declare 2 variables (f,c)
2. ((f-32)*5)/9
print c value
*/
const prompt = require ('prompt-sync')();
let f = prompt (" enter the fahrehit value");
console.log("f value :" + f);
let c = ((f-32)*5)/9;
console.log("celsius c is :" + c);


