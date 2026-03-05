//Find the largest number in an array in JavaScript.

function findLargest(arr) {
    //Suppose first element is the largest
    let largest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            // Update the largest if a bigger element is found
            largest = arr[i];
        }
    }
    return largest;
}
console.log(findLargest([100.1666, 100.99, 3, 100, 100.1]));


//Using the spread operator (...) or Math.max:

function findLargest(arr) {
    // Math.max() is used to find the largest number
    return Math.max(...arr);
}

console.log(findLargest([99, 5, 3, 100, 1]));



//find minimum number in array
function findMin(arr) {
    return Math.min(...arr);// find minimum value
}

console.log(findMin([5, 10, -1, 8]));

const nums = [2, 7, 11, 15];
const target = 9;

console.log(twoSum(nums, target));


