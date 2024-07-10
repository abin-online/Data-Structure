var maxSubArray = function (nums) {
    let sum = 0,
      max = -Infinity;
    if (nums.length === 1) return nums[0];
    for (let i = 0; i < nums.length; i++) {
      sum += nums[i];
      max = Math.max(max, sum);
  
      if (sum < 0) {
        sum = 0;
      }
    }
    return max;
  };

  const nums = [2,3,4,5,1,22,0,4]

  console.log(maxSubArray(nums));