const arr = [3,4,5,6,33,10,6]

function reverseArr(arr){
    start = 0;
    end = arr.length-1;
    while(start<end){
        temp = arr[start];
        arr[start] = arr[end]
        arr[end] = temp
        start++
        end--
    }
    return arr
}

console.log(reverseArr(arr));