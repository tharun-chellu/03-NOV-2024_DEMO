// multiplication table of any number
//(" table of "+ n * i)

const prompt = require ('prompt-sync')();
let n = prompt ("enter the required table number");
for (i= 1; i<= 10 ; i++){
    console.log(n + "*"+ i + "=" + (n*i));
}