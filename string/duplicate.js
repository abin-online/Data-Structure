let str = "malayalam";
let arr = []
for(let i = 0 ; i < str.length ; i++){
    if(str.indexOf(str[i])==str.lastIndexOf(str[i])){
        arr.push(str[i])
    }
}

console.log(arr.join(''));