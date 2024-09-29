const arr = [3, 48, -2, -76, 98, 2]

function bubbleSort(arr) {
    let n = arr.length

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j + 1] < arr[j]) {
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }
    return arr
}

console.log(bubbleSort(arr));

function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i]
        let j = i - 1
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j]
            j = j - 1
        }
        arr[j + 1] = key
    }
    return arr
}

console.log(insertionSort(arr));

function mergeSort(arr) {
    if (arr.length < 2) {
        return arr
    }
    let middle = Math.floor(arr.length / 2)
    let left = arr.slice(0, middle)
    let right = arr.slice(middle)
    return merge(mergeSort(left), mergeSort(right))
}

function merge(left, right) {
    let sorted = []
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            sorted.push(left.shift())
        } else {
            sorted.push(right.shift())
        }
    }

    return [...sorted , ...left , ...right]
}

console.log(mergeSort(arr));

function quickSort(arr) {
    if (arr.length <= 1) { // Base case: if array is of length 1 or 0, it's already sorted
        return arr;
    }

    let pivot = arr[arr.length - 1]; // Choose the last element as the pivot
    let left = [];
    let right = [];

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]); // Elements smaller than pivot go to the left array
        } else {
            right.push(arr[i]); // Elements greater than or equal to pivot go to the right array
        }
    }

    // Recursively sort left and right arrays, and concatenate the results
    return [...quickSort(left), pivot, ...quickSort(right)];
}

console.log(quickSort(arr));


console.log(quickSort(arr));

function selectionSort(arr){
    let n = arr.length
    for(let i = 0 ; i < n ; i++){
        let minIndex = i
        for(let j = i+1 ; j < n ; j++ ){
            if(arr[j] < arr[minIndex]){
                minIndex = j
            }
        }
        if(i!=minIndex){
            let temp = arr[i]
            arr[i] = arr[minIndex]
            arr[minIndex] = temp
        }
    }
    return arr
}

console.log(selectionSort(arr));

//PRACTICE MAKES YOU SURPRIZE !!!!!!!!!!!!!!!!!!!!!!!! 