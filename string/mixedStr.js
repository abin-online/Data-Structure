// let str1 = "pqr";
// let str2 = "stuv"
// let result = ''
// let p = 0 , k = 0
// let l = Math.max(str1.length , str2.length)
// for(let i = 0 ; i < l ; i++){
//     if(p < str1.length){
//         result += str1[p]
//         p++
//     }
//     if(k < str2.length){
//         result += str1[k]
//         k++
//     }
// }

// console.log(result);

let str1 = "pqr";
let str2 = "stuv";
let result = '';
let p = 0, k = 0;
let l = Math.max(str1.length, str2.length);

for (let i = 0; i < l; i++) {
    if (p < str1.length) {
        result += str1[p];
        p++;
    }
    if (k < str2.length) {
        result += str2[k];
        k++;
    }
}

console.log(result); // Output: psqtruv
