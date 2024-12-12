/* control statements

1. selection control statements : ---> (if, switch, ternary)--> IT help us to select which statement to execute in set of statemnets.
based on the "condition" based run any one. (it is used for selction of statement based on condition based)

2. Looping statements : ---> (for, while, do while)--> run paticular statements with certain no of times we can use loops.
(loops)set of statemnets 1 or more times to run based on the statement(repeated to run set of statements)

3. jumping statemnts : break
*/



// if statement
let age = 18;

if (age >= 18) {
  console.log("You can vote!");
}

// if-else statement
let temperature = 25;

if (temperature > 20) {
  console.log("It's a warm day.");
} else {
  console.log("It's a cool day.");
}

// if-else if-else statement
let score = 85;

if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else if (score >= 70) {
  console.log("Grade: C");
} else {
  console.log("Grade: D");
}

// switch statement
let day = "Monday";

switch (day) {
  case "Monday":
    console.log("It's the start of the week.");
    break;
  case "Friday":
    console.log("It's almost the weekend!");
    break;
  case "Saturday":
  case "Sunday":
    console.log("It's the weekend!");
    break;
  default:
    console.log("It's a weekday.");
}

// ternary operator
let isRaining = true;
let message = isRaining ? "Take an umbrella." : "Enjoy the sun!";
console.log(message);