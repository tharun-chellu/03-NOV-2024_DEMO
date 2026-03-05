let appraisalRating = 5;

switch (appraisalRating) {
    case 1:
        console.log('very bad rating');
        break;
    case 2:
        console.log('bad');
        break;
    case 3:
        console.log('average');
        break;
    case 4:
        console.log('Good');
        break;
    case 5:
        console.log('Excellent');
        break;
    default:
        console.log('enter the vaild interger from 1 - 5');
        break;
}

let day = 3;
let dayName;

switch (day) {
    case 1:
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "Wednesday";
        break;
    case 4:
        dayName = "Thursday";
        break;
    case 5:
        dayName = "Friday";
        break;
    case 6:
        dayName = "Saturday";
        break;
    case 7:
        dayName = "Sunday";
        break;
    default:
        dayName = "Invalid day";
}

console.log(dayName); // Output: Wednesday