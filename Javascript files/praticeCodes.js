let arr = [1, 2, 3, 4, 5];
let sliced = arr.slice(1, 4);  // [2, 3, 4]
console.log(sliced);              // [1, 2, 3, 4, 5] — original remains unchanged


/* total 11 data types
1. arthematic (+,-,*,%,/)
2. asignment  (=, +=, -=, *=)
3. comparison (==, ===, >, <, >=, <=, !==)
4. logical  (&&, ||, !)
5. bitwise (&, |, ^, !, ~)
6, Ternary (condition ? expresion1 : expression2;)
7. comma (test = chellu, age=24)
8. urary (x++  , --X)
9. bigint (123456789012345678901234567890n)
10. relational (in => in checks if a property exists in an object, instance => checks if an object is an instance of a constructor)
11. string (concat +, +=)
12. chaining operator (?. safely accesses a property or method.)
*/

let number;

do {
    number = parseInt(prompt("Enter a number greater than 0:"));
} while (number <= 0);

console.log("You entered:", number);
