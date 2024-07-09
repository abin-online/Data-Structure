const arr = [1,2,4,3,22, -1, -14 , 8,9,34];
let max = -Infinity , sMax = -Infinity;
for(let i = 0 ; i < arr.length ; i++){
    if(max < arr[i]){
        sMax = max;
        max = arr[i]
    }else if(arr[i] < max && arr[i] > sMax){
        sMax = arr[i]
    }
}

console.log(sMax)