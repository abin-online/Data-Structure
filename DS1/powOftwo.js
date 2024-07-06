function powerOfTwo(n){
    if(n<2){
        return false
    }else{
        while(n>=2){
            if(n%2!==0){
                return false
            }
            n = n/2
        }
        return true
    }
}

console.log(powerOfTwo(1022))