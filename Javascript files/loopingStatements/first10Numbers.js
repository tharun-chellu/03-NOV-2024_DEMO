//  looping statements -> (for / while )    do while)
/*
both are for same purpose

for : when we have clarity for when to start and where to stop

give range from start to end
varible help - (index variable - (i))

for ( i + 1 -> initilization ; i<= 1000 -> condition ; i ++ -> increment )

while : we can not know how many times it runs and where we can end.

i=1  -> initilization
while (i<=100  -> condition only )
conole.log(i);
i++ -> increment

*/

//sum of 1 to 100 numbers

// let s = 0;
// for(let i=1 ; i<=100 ; i++){
//     console.log (s = s + i );
// }

for (let i=0 ; i<10; i++){
    console.log (i);
}

let s = 0;
for(let i=1 ; i<=100 ; i++){
    s += i;
}
console.log (s);

