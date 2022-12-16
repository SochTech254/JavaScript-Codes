function fact(n) {
    let result;
    if( n == 1) return 1;
    result = fact(n - 1) * n;
    return result;
}

console.log(fact(5));