
// // *
// // **
// // ***
// // ****
// // *****


// //reverse

// function reverseNumber(str) {
//     return str.split("").reverse().join("");
// }
// console.log(reverseNumber("salaar"));

// //palindrome

// function isPalindrome(str) {
//     const reversed = str.split("").reverse().join("");
//     return str === reversed;
// }
// console.log(isPalindrome("CHELLU"));

// // largest number in array

// function isLargest(arr) {
//     return Math.max(...arr);
// }
// console.log(isLargest([2, 4, 5, 6, 80, 81]));


function reverseString(str) {
    return str.split("").reverse().join("");

}
console.log(reverseString("chellusalaar"));

function isPalidrome(str) {
    const palindrome = str.split("").reverse().join("");
    return str === palindrome;
}
console.log(isPalidrome("CHUHC"));

function isLargest(arr) {
    return Math.max(...arr);

}
console.log(isLargest([22, 33, 55, 66, 77.8]));

function removeDuplicate(arr) {
    return [...new Set(arr)]
}
console.log(removeDuplicate[1, 1, 1, 1, 3, 3, 55, 666, 777, 888, 888]);