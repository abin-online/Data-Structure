const arr = [1,3,5,6,7,9]

// function binarySearch(arr, target){
//     let left = 0;
//     let right = arr.length - 1;
    
//     while(left <= right){
//         let middle = Math.floor((left+right)/2)
//         if(arr[middle] == target){
//             return middle
//         }else if(arr[middle] < target){
//             left = middle + 1
//         }else{
//             right = middle - 1
//         }
//     }
//     return -1
// }

// console.log(binarySearch(arr , 9))

// function binarySearch (arr, target){
//     let left = 0;
//     let right = arr.length - 1;
//     while(left<=right){
//         let middle = Math.floor((left+right)/2);
//         if(arr[middle] == target){
//             return middle
//         }else if(arr[middle]<target){
//             left = middle + 1;
//         }else{
//             right = middle - 1
//         }
//     }
// }

function binarySearch(arr, target){
    let left = 0; 
    let right = arr.length - 1;
    while(left <= right){
        let middle = Math.floor((left + right) / 2);
        if(arr[middle] === target){
            return middle;
        } else if(arr[middle] < target){
            left = middle + 1;
        } else {
            right = middle - 1;  
        }
    }
    return -1;  
}


console.log(binarySearch(arr,7))







// console.log(linearSearch(arr, 5))