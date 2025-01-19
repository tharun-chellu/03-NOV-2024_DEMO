// write a programe of 100 below fibonacci series
// example : it starts with (0,1) -> 0+1  -> next number 1-> 1+1 -> 2.......
// 0, 1, 1, 2 , 3, 5, 8, 13, 21.......

let a = 0;
let b = 1;
let c = a + b;

console.log(a, b);
while (c <= 100) {

    console.log(c);
    a = b;
    b = c;
    c = a + b;
}



// for (let i = 1; i <= 100; i++) {
//     c = a + b;
// }
// console.log(c);