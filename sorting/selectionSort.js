let arr = [-6, 20, 8, -2, 4]

function selectionSort(arr){
    let n = arr.length
    for(let i = 0 ; i < n-1 ; i++){
        let minIndex = i
        for(let j = 0 ; j < n ; j++){
            if(arr[j] < arr[minIndex]){
                minIndex = j
            }
        }

        if(i != minIndex){
            let temp = arr[i]
            arr[i] = arr[minIndex]
            arr[minIndex] = temp
        }
    }
    return arr
}
console.log(selectionSort(arr));