

// square of an array using MAP

let example = [12, 5, 7, 9, 65];
let sumOfArray = example.map(k => k * k);
console.log(sumOfArray)



// obbjects
let users = [
    { name: "A", age: 22 },
    { name: "B", age: 18 },
    { name: "C", age: 25 }
];

//Get names of users above 20:

let result = users
    .filter(user => user.age > 20)
    .map(user => user.name);

console.log(result);