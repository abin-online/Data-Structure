var findNthDigit = function(n) {
    let i = 1
    let count = 0
    const digitCount = (num )=> {
        return num.toString().length
    }
    while(i <= n){
        count+= digitCount(n)
        if(count === n){
            console.log(count)
        }
        i++
    }

    return count
};

console.log(findNthDigit(45))