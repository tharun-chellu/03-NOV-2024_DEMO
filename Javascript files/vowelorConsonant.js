// WRITE A PROGRAME TO CHECK VOWEL OR CONSONANANT
//let char ="v";


const prompt = require('prompt-sync')();
let char = prompt ("enter the letter : ");
if (char == 'a' || char == 'e' || char =='i' || char =='o' || char == 'u')
{
    console.log("given letter is vowel");
}
else
{
    console.log("given letter is consonant");
}