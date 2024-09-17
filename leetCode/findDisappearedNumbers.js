let nums = [4,3,2,7,8,2,3,1]

var findDisappearedNumbers = function(nums) {
    let obj = {}
    let arr = []
    for(let i of nums){
        obj[i] = true
    }

    for(let i = 1 ; i < nums.length ; i++) {
        if(!obj[i]) {
            arr.push(i)
        }
    }

    return arr
};

console.log(findDisappearedNumbers(nums))