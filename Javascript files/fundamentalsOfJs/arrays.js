// arrays []

let numbers = [1, 2, 3, 4, 5, 6];
console.log(numbers);

let countries = ['India', 'USA', 'china'];
console.log(countries);

let cars = new Array('bmw', 'audi');
console.log(cars);
cars[1] = 'Hyundai'
console.log(cars);
console.log(cars[1]);

countries.push('germany');

console.log(countries);

console.log(countries.length);



let x;
for (x in countries) {
    console.log(countries[x]);
}
