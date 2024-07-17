const arr = [4, -9, 3, 1, 12. - 5]
const arr1 = [3,48,-2,-76,98,2]
function  bubbleSort(arr){
    let n = arr.length
    for(let i = 0 ; i < n ; i++){
        for(let j = 0 ; j < n - i - 1 ; j++ ){
            if(arr[j+1] < arr[j]){
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp 
            }
        }
    }
    return arr
}

console.log(bubbleSort(arr1))