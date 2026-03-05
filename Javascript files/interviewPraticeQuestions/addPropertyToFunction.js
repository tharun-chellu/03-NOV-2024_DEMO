//Write a Program to add a property to an object

const obj = { name: 'chellu' };
obj.age = 24;
console.log(obj);

//delete a property from an object

const obj1 = { name: 'Tharun', age: 25 };
delete obj1.age;
console.log(obj1);

//Using .reduce method -> .reduce((a, b) => a + b)

console.log([1, 2, 3].reduce((a, b) => a + b));
//adds numbers in the array, together using the reduce mehtod

//maximum number
let maxNum = [5, 12, 8, 3].reduce((max, num) => Math.max(max, num));
console.log(maxNum); // Output: 12

//multiplying 2 numbers 
let product = [2, 3, 4, 2].reduce((a, b) => a * b);
console.log(product); // Output: 48

//creates a new string by repeating the original string in 3 times
console.log('gfg'.repeat(3)); //gfggfggfg


console.log(1 + '2');
//12

console.log('6' - 1);
//5

console.log(1 === '1');
// false

const chellu = { id: 'Tharunchellu' };
chellu.age = 25;
console.log(chellu);


