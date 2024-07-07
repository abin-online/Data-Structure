let str = "abcd"
let str1 = "bcda"

function rotate(str, str1) {
    if (str.concat(str).includes(str1)) {
        return true
    }
    else {
        return false
    }
}

console.log(rotate(str, str1));


