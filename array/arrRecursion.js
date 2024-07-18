function sumOfArray(arr){
    if(arr.length=== 0){
        return 0
    }
    return sumOfArray(arr.slice(0,arr.length-1)) + arr[arr.length-1]
}

console.log(sumOfArray([3,5,3,29]));