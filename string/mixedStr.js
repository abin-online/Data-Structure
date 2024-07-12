
let str1 = "pqr";
let str2 = "stuv";

function mixedStr(str1,str2){

    let l = Math.max(str1.length , str2.length)
    let result = ''
    let p = 0 , k = 0
    for(let i = 0 ; i < l ; i++){
        if(p < str1.length){
            result += str1[p]
            p++
        }
        if(k < str2.length){
            result += str2[k]
            k++
        }
    }
    return result
}

console.log(mixedStr(str1, str2));

