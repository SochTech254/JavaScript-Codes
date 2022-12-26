// A function along with its lexical scope forms a closure
function z() 
{
    var b = 900;
    function x()
    {
        var a = 7;

        function y()
        {
        console.log(a,b);
        }

        y();
    }

    x();
}
z();

