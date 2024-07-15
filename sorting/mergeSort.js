let arr = [4,7,1,3,9,-3,7]



function mergeSort(arr){
    if(arr.length < 2){
        return arr
    }

    let middle = Math.floor(arr.length/2)
    let left = arr.slice(0,middle)
    let right = arr.slice(middle)
    return merge(mergeSort(left) , mergeSort(right))
}

function merge(left , right){
    let sorted = []
    while(left.length && right.length){
        if(left[0] <= right[0]){
            sorted.push(left.shift())
        }else{
            sorted.push(right.shift())
        }
    }
    return [...sorted , ...left , ...right]
}


console.log(mergeSort(arr));