/* control statements

1. selection control statements : ---> (if, switch)--> IT help us to select which statement to execute in set of statemnets.
based on the "condition" based run any one. (it is used for selction of statement based on condition based)

2. Looping statements : ---> (for, while, do while)--> run paticular statements with certain no of times we can use loops.
(loops)set of statemnets 1 or more times to run based on the statement(repeated to run set of statements)

3. jumping statemnts : break
*/

// compare 2 number which are big based on if statetement

// let a = 38;
// let b = 37;
// test


const prompt = require ('prompt-sync')();
let a = prompt ("enter the a value : ");
let b = prompt ("enter the b value : ");

if (a>b) {
    console.log ("a is bigger");
} else {
    console.log ("a is smaller");
}

if (a=b) {
    console.log ("a is bigger");
} else {
    console.log ("a is smaller");
}
