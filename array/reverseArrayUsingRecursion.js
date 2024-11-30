function reverseArrayUsingRecursion(arr){
    if(arr.length < 2){
        return arr
    }
    let remaining = arr.slice(1);
    return [...reverseArrayUsingRecursion(remaining), ...[arr[0]]]
}

let arr = [3,5,7,9,11,13,15]
console.log(reverseArrayUsingRecursion(arr))