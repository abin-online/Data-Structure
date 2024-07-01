function factorial(n){
    let fact = 1;
    for( let i = 2 ; i <= n ; i++ ){
        fact = i * fact
    }
    return fact
}

console.log(factorial(5))