// *****
//  ****
//   ***
//    **    Spaces = i - 1
//     *     Stars = n - i + 1



let n = 5;

for (let i = 1; i <= n; i++) {
    let line = "";

    // Print spaces
    for (let s = 1; s <= i - 1; s++) {
        line += " ";
    }

    // Print stars
    for (let j = 1; j <= n - i + 1; j++) {
        line += "*";
    }

    console.log(line);
}