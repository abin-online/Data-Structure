var removeDuplicates = function(nums) {
    let j = 0;
    let count = 1
    for(let i = 0 ; i < nums.length ; i++){

        if(nums[i] === nums[i+1]){
            count++
        }else{
            count = 1
        }

        if(count <=2 ){
            nums[j] = nums[i]
            j++
        }
        console.log(nums)
    }
    //nums.length = j
    //console.log(nums)
    return nums.length
    
};


let nums = [1,1,1,2,2,3]
console.log(removeDuplicates(nums));
