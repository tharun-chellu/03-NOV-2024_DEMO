//     *
//    ***
//   *****
//  *******        spaces = n-i
// *********       stars = 2*i-1




let n = 5;

for (let i = 1; i <= n; i++) {
    let line = "";

    // Print spaces
    for (let s = 1; s <= n - i; s++) {
        line += " ";
    }

    // Print stars
    for (let j = 1; j <= 2 * i - 1; j++) {
        line += "*";
    }

    console.log(line);
}
