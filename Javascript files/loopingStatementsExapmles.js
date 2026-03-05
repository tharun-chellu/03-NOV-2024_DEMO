for (let i = 5; i <= 10; i++) {
    console.log("Hello");
};
for (let i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 1000);
}

const funcs = [];
for (let i = 0; i < 3; i++) {
    funcs.push(() => console.log(i));
}
funcs[0]();
funcs[1]();
funcs[2]();


// Inefficient loop 

// var a = new Array(10).fill(0);
// console.time('Execution time')
// for (var i = 0; i < a.length; i++) {
//     console.log(i)
// }
// console.timeEnd('Execution time')



// Optimized loop 

// var len = a.length;
// console.time('Execution time')
// for (var i = 0; i < len; i++) {
//     console.log(i)
// }
// console.timeEnd('Execution time')


// function checkAge(age) {
//     if (age < 18) {
//         throw new Error("Age must be 18 or older");
//     }
// }
// checkAge(17);

let x;
let y;
x = y + 10;  // Expression statement
console.log(x); // Expression statement using a function call


for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break;  // Exits the loop when i equals 5
    }
    console.log(i);
}