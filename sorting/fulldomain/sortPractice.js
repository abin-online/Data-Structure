const arr = [-3,-4, 8, 25, 9]

function bubbleSort(){
    let n = arr.length
    for(let i = 0 ; i < n - 1; i++){
        for(let j = 0 ; j < n - i - 1 ; j++){
            if(arr[j+1] < arr[j]){
                let temp = arr[j+1]
                arr[j+1] = arr[j]
                arr[j] = temp
            }
        }
    }
    return arr
}

console.log(bubbleSort(arr))

function insertionSort(arr){
    for(let i = 1; i < arr.length ; i++){
        let key = arr[i]
        let j = i - 1
        while(arr[j] > key && j >= 0){
            arr[j+1] = arr[j]
            j = j -1
        }
        arr[j+1] = key
    }
    return arr
}

console.log(insertionSort(arr))


function mergeSort(arr){
    if(arr.length < 2){
        return arr
    }
    let middle = Math.floor(arr.length / 2)
    let left = arr.slice(0, middle)
    let right = arr.slice(middle)

    return merge(left , right)
}

function merge(left , right){
    let sorted = []
    while(left.length && right.length){
        if(left[0] < right[0]){
            sorted.push(left.shift())
        }else{
            sorted.push(right.shift())
        }
    }
    return [...sorted , ...left , ...right]
}

console.log(mergeSort(arr))

function quickSort(arr){
    if(arr.length < 2){
        return arr
    }
    let left = []
    let right = []
    let pivot = arr[arr.length - 1]
    for(let i = 0 ; i < arr.length - 1 ; i++){
        if(arr[i] < pivot){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }
    return [...quickSort(left) , pivot , ...quickSort(right)]
}

console.log(quickSort(arr))

function selectionSort(arr){
    let n = arr.length 
    for(let i = 0 ; i < n -1 ; i++){
        let minIndex = i
        for(let j = i+1 ; j < n ; j++){
            if(arr[j] < arr[minIndex]){
                minIndex = j
            }
        }
        if(i!==minIndex){
            let temp = arr[minIndex]
            arr[minIndex] = arr[i]
            arr[i] = temp

            
        }
    }
    return arr
}

console.log(selectionSort(arr))