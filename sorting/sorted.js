function bubbleSort(arr){
    let n = arr.length
    for(let i = 0; i < n ; i++){
        for(let j = 0 ; j < n - i -1 ; j++){
            if(arr[j+1] < arr[j]){
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }
    }
    return arr
}
//
let arr = [3,2,-9,76,32,1]
console.log("BUBBLE SORT ",bubbleSort(arr));

function insertionSort(arr){
    for(let i = 0 ; i < arr.length ; i++){
        let key = arr[i]
        let j = i - 1
        while(j >= 0 && arr[j] > key){
            arr[j+1] = arr[j]
            j = j - 1
        }
        arr[j+1] = key
    }
    return arr
}

console.log("INSERTION SORT ",insertionSort(arr));

function mergeSort(arr){
    if(arr.length < 2){
        return arr
    }
    let middle = Math.floor(arr.length / 2)
    let left = arr.slice(0, middle)
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

console.log("MERGE SORT " , mergeSort(arr))

function quickSort(arr){
    if(arr.length < 2){
        return arr
    }
    let n = arr.length
    let pivot = arr[arr.length - 1]
    let left = []
    let right = []
    for(let i = 0 ; i < n-1 ; i++){
        if(arr[i] < pivot){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }
    return [...quickSort(left) , pivot , ...quickSort(right)]
}

console.log("QUICK SORT",quickSort(arr));

function selectionSort(arr){
    let n = arr.length
    for(let i = 0; i < n-1 ; i++){
        let minIndex = i
        for(let j = i+1 ; j < n ; j++){
            if(arr[j+1] < arr[minIndex]){
                minIndex = j
            }
        }

        while(i!=minIndex){
            let temp = arr[i] 
            arr[i]= arr[minIndex]
            arr[minIndex] = temp

        }
    }
    return arr
}

console.log("SELECTION SORT ",selectionSort(arr));