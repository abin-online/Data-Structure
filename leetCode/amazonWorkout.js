let str = "0001ABCD123|0003EFGH456|0002ABDE567|0005ABEF789"

let arr = []
let start = 0
let n =  str.length
for(let i = 0 ; i < n ; i++) {
    if(str[i] ==  '|') {
        arr.push(str.slice(start,i))
        start = i+1
    }else if( i === n-1) {
        arr.push(str.slice(start,i+1))
    }
}

function  bubbleSort(arr){
    let n = arr.length
    for(let i = 0 ; i < n ; i++){
        for(let j = 0 ; j < n - i - 1 ; j++ ){
            if(parseInt(arr[j+1][3]) < parseInt(arr[j][3])){
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp 
            }
        }
    }
    return arr
}

console.log(...bubbleSort(arr).map((x)=> x.slice(4,x.length+1)))
