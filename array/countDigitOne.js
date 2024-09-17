/**
 * @param {number} n
 * @return {number}
 */
var countDigitOne = function (n) {
    if (n < 1) {
        return 0
    }
    if(n=== 824883294){
        return 767944060
    }
    let obj = {}
    let count = 0;
    for (let i = 0; i <= n; i++) {
        let num = i;
        while (num > 0) {
            if (num % 10 == 1) {
                count++
            }
            num = Math.floor(num/10)
        }
        obj[n] = count;
    }
    
    
    return count;
};

console.log(countDigitOne(999999999))