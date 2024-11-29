// "If the 2nd smallest prime number in an array is less than 7, replace every prime number greater than 7 which has duplicates in it with 0. Then find the sum of the array."

// "Note: do this without sorting the array"

const nums = [3, 5, 7, 11, 13, 13, 17, 19]

function problem() {
    const isPrime = (num) => {
        for (let i = 2; i < Math.sqrt(num); i++) {
            if (num % i === 0) {
                return false
            }
        }
        return true
    }

    let primes = []
    for (let i of nums) {
        if (isPrime(i)) {
            primes.push(i)
        }
    }

    function secondMinimum(nums) {
        let min = Infinity
        let sMin = Infinity
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] < min) {
                sMin = min
                min = nums[i]
            } else if (nums[i] > min && nums[i] < sMin) {
                sMin = nums[i];
            }
        }
        return sMin
    }

    let secondMinimumPrime = secondMinimum(primes);

    if (secondMinimumPrime < 7) {
        
    }
}







