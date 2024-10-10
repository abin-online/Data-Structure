let str = 'abcdea'


function replaceChar(mainstr , target , replace){
    str = mainstr
    let result = ''
    for(let i  = 0 ; i < str.length ; i++) {
        if(str[i] == target){
            result += replace
        }else{
            result += str[i]
        }
    }
    return result
}
console.log(replaceChar(str , 'a' , 'z'))

function replaceFirst(mainStr , target , replace){
    str = mainStr
    let result = ''
    let count = 0;
    for(let i = 0 ; i < str.length ; i++){
        if(str[i] == target && count === 0){
            result += replace
            count++
        }else{
            result += str[i]
        }
    }
    return result
}

console.log(replaceFirst(str , 'a' , 'z'))