const arr = [1,2,66,3,65,21,45,3]

function maxElement(arr){
    let max = 0
    for(let i = 0 ; i < arr.length; i++){
        if(arr[i]>max){
            max = arr[i]
        }
    }
    return max
}

console.log(maxElement(arr));