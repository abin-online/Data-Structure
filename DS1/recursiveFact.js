function recursiveFact(n){
    if(n===0){
        return 1
    }
    return recursiveFact(n-1) * n;
}

console.log(recursiveFact(5))