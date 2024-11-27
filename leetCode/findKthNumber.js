var findKthNumber = function(m, n, k) {
    let result = []
    for(let i = 1 ; i <= m ; i++){
        for(let j = 1 ; j <= n ; j++){
            result.push(i*j)
        }
    }
    result.sort((a,b)=>a-b)
    //console.log(result)
    return result[k-1]
};
console.log(findKthNumber(9895 ,  28405 , 100787757))