function primeNumber(n){
    let flag = 0
    for(let i = 2 ; i < Math.sqrt(n) ; i++){
        if(n%i == 0){
            flag = 1
        }
    }
    if(flag == 0) console.log("It is a prime number")
    else console.log("Not a prime number")
}

primeNumber(10000)
primeNumber(4)
primeNumber(11)
primeNumber(2)