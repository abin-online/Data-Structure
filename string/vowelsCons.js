let vowels = [ 'a' , 'e' , 'i' , 'o' , 'u' , 'A' , 'E' , 'I' , 'O' , 'U' ];

let str = "vignesh" ;

let vow = []
let cons = []

for(let i of str){
    if(vowels.includes(i)){
        vow.push(i)
    }else{
        cons.push(i)
    }
}

console.log("Vowels " , vow.length);
console.log("Consonants " , cons.length)