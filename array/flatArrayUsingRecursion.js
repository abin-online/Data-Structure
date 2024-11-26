

function flatArray(arr){

    const baseCase = (arr)=> {
        for(let i of arr){
            if(typeof(i) == 'object'){
                return false
            }
        }
        return true
    }

    if(baseCase(arr)){
        return arr
    }

    let result = []
    for(let i of arr){
        if(typeof(i) != 'object'){
            result.push(i)
        }else{
            result.push(...i)
        }
    }

    return flatArray(result)
}

let arr = [2,4,5,[4,5],[4,[44, 5]]];

console.log(flatArray(arr))