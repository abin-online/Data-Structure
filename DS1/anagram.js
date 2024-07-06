let str = "silent";
let str1 = "lister";

// console.log(str.split("").sort().join("") == str1.split("").sort().join(""))


function anagaram(str, str1){

    if(str.length ==  str1.length){
        for(let i = 0 ; i < str.length; i++){
            if(!str1.includes(str[i])){
                return false
            }
        }
    }return true

}


console.log(anagaram(str, str1))