function recursiveFact(n){
    if(n<2){
        return 1
    }
    return recursiveFact(n-1) * n;
}

console.log(recursiveFact(5))