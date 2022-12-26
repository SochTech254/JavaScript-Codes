function x() 
{
    setTimeout(() => {
        console.log(i);
    }, 1000);
    console.log("Namaste JavaScript!");
}
let i = 10;
x();

function z() 
{
    for(let a = 1; a <= 5; a++)
    {
        setTimeout(() => {
            console.log(a);
        }, a * 3000);
    }
}
z();

// use var instead of let
    for(var c = 5; c <= 9; c++)
    {
        function close(c)
        {
            setTimeout(() => {
                console.log(c);
            }, c * 5000)
        }
        close(c);
    }
