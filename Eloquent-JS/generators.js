function* powers(n) 
{
    for (let current = n; ; current *= n)
    {
        yield current;
    }
}

for (let power of powers(2))
{
    if (power > 50) break;
    console.log(power);
}