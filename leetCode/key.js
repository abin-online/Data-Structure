const addZero = (num) => {
    let keyOfNum = num.toString();
    let rev = keyOfNum.split('').reverse().join('')
    while (rev.length < 4) {
        rev += '0'
    }
    keyOfnum = rev.split('').reverse().join('')
    return keyOfnum;
}
const num1 = 10
console.log(addZero(num1))