//nested else if example dor js 
// if else -> inside another if-else -> nested if -else


let age = 18;
let citizenship = "India";
if (age >= 18) 
    {
    if (citizenship == "USA") 
        {
            console.log("You can vote.");
    }
    else 
    {
        console.log("You cannot vote.");
    }
} 
else 
{
    console.log("You are too young to vote.");
}
