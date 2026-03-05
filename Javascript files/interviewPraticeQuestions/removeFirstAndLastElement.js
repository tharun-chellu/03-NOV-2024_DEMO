//Remove the first element from an array in JavaScript

// Initialize an array
let arr = [5, 6, 7, 8, 9, 10];
arr = arr.slice(1);   // .splice(start, end)
// Create a new array without the first element
console.log(arr);


//Remove the first element from an array in JavaScript
let arr1 = [7, 8, 91, 88.4];
arr1 = arr1.slice(0, -1);

console.log(arr1);

//Remove the first element from an array in JavaScri => arr.slice(1, -1);


//Write a code to create an arrow function?
const add = (a, b) => a + b;
console.log(add(6, 2));