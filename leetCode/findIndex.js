const nums = [1,3,6,9]
let target = 3
function index(nums, target){
    for(let i = 0 ; i < nums.length ; i++){

        if(nums[i] <= target ){
            return i
        }
    }
    return nums.length
}

console.log(index(nums));
