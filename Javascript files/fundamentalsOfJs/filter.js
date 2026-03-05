


let arr = [1, 2, 3, 2, 4, 5, 3, 6];

let duplicates = arr.filter((item, index) =>
    arr.indexOf(item) !== index
);

console.log([...new Set(duplicates)]);


let num = [1, 6, 3, 4, 7, 8, 9];
let evenNumber = num.filter(n => n % 2 == 0);
console.log(evenNumber);