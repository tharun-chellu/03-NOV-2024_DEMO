function iseven(n) {

    let num = n % 2;
    if (num == 0) {
        return true;
    }
    else {
        return false;
    }

}

let n = 16;
if (iseven(n)) {
    console.log("true");
} else {
    console.log("false");
}