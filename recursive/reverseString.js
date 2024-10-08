
//question asked in 2nd full domain 

const str = 'Hello'

function reverseString(str){
    if(str.length < 2){
        return str
    }
    let remaining = str.slice(1)
    return reverseString(remaining) + str[0]
}

console.log(reverseString(str));
