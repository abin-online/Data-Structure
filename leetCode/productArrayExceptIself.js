function productExceptSelf(nums) {
    let result = new Array(nums.length).fill(1)
    let product = 1
    for(let i = 0 ; i < nums.length ; i++ ){
        result[i] = product
        product *= nums[i]
    }
    let n = nums.length;

    for(let i = n - 1 ; i >= 0 ; i--) {
        result[i] = product;
        product *= nums[i]
    }
    console.log(result)
}

productExceptSelf([1,2,3,4])