let arr = [3, 65, 9, -3, 23.2]

function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let numToInsert = arr[i]
        let j = i - 1
        while (j >= 0 && arr[j] > numToInsert) {
            arr[j+1] = arr[j]
            j = j - 1
        }
        arr[j+1] = numToInsert
    }
    return arr
}


console.log()