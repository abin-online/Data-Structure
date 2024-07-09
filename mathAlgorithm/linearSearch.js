const arr = [1,4,5,67,3,2,3]

// function linearSearch(arr, target){
//     for(let i = 0; i < arr.length ; i++){
//         if(arr[i] == target){
//             return i
//         }
//     }
// }


function linearSearch(arr, target){
    for(let i = 0; i < arr.length ; i++){
        if(arr[i] == target){
            return i
        }
    }
}
console.log(linearSearch(arr,67 ))