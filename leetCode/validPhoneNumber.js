
// * Valid Mobile number
// * length should be 10 numbers
// * first number should be 1 or greater than 6
// * Unique digits

let num = '1876543290'

function ValidNumber(num){
    
    if(parseInt(num[0]) !== 1 ){
        if(parseInt(num[0]) <= 6){
            return false
        }
    }
        
    let count = 0
    let seen = new Set();
    for(let i = 0 ; i < num.length ; i++) {
        if(seen.has(num[i])){
            return false
        }else{
            seen.add(num[i])
            count++
        }
    }
 
    return count == 10 ? true : false
}

console.log(ValidNumber(num))