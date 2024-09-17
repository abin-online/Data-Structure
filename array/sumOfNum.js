let num = 54654;


let sumOfDigit = 0
while(num!= 0){
    let digit = num%10
    sumOfDigit = digit + sumOfDigit;
    num = Math.floor(num/10)
}
console.log(sumOfDigit);

    
