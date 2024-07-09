const arr = [4,6,-19,4,1,0,2,34,43]

function minElement(arr){
    let min = Infinity
    for(let i = 0; i < arr.length ; i++){
        if(arr[i]<min){
            min = arr[i]
        }
    }
    return min
}

console.log(minElement(arr));