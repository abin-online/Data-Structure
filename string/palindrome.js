let str = "malayalam";
let rev = ''
for(let i = str.length - 1; i >= 0; i--){
    rev += str[i]
}
console.log(str==rev);