// Loops
let myNumber = 0;
while(myNumber < 50)
{
    console.log(myNumber);
    myNumber++;
}

let num = 50;
do 
{
console.log(num);
} while(num < 50);

for(let i = 0; i < 10; i++)
{
    console.log(i);
}

let myName = "SochTech";
for (let i = 0; i < myName.length; i++)
{
    console.log(myName.charAt(i));
}

let Name = "SochTech";
let counter = 0;
let myLetter;
while(counter <= 3)
{
    myLetter = Name[counter];
    console.log(myLetter);
    if (counter === 1)
    {
        counter += 2;
        continue;
    }
    if(myLetter === "h") break;
    counter++;
}
console.log(counter);