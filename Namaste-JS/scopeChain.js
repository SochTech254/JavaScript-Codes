/*
Scope is where you can access a specific variable or function in a code
Lexical environment is the local memory along with the lexical environment
of its parent.
Lexical is a term which means in hierarchy or a sequence.
*/
function a() 
{
    c();
    function c() 
    {
        console.log(b);
    }
}

var b = 10;
a();