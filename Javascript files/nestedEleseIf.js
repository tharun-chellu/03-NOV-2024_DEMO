//nested else if example dor js 
// if else -> inside another if-else -> nested if -else


let age = 18;
let citizenship = "India";
if (age >= 18) {
    if (citizenship == "USA") {
        console.log("You can vote.");
    }
    else {
        console.log("You cannot vote.");
    }
}
else {
    console.log("You are too young to vote.");
}

// JavaScript program to illustrate nested-if statement
let i = 10;

if (i == 10) {  // First if statement
    if (i < 15) {
        console.log("i is smaller than 15");
        // Nested - if statement
        // Will only be executed if statement above
        // it is true
        if (i < 12)
            console.log("i is smaller than 12 too");
        else
            console.log("i is greater than 15");
    }
}


