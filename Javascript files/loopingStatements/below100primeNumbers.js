// write a programe for below 100 prime numbers



let count = 0;     // how many primes found
let num = 2;       // start checking from 2

while (count < 100) {
    let isPrime = true;

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(num);
        count++;
    }

    num++;
}