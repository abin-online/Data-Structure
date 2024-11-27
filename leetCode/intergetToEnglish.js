const wordObject = {
    1: 'One',
    2: 'Two',
    3: 'Three',
    4: 'Four',
    5: 'Five',
    6: 'Six',
    7: 'Seven',
    8: 'Eight',
    9: 'Nine',
    10: 'Ten',
    11: 'Eleven',
    12: 'Twelve',
    13: 'Thirteen',
    14: 'Fourteen',
    15: 'Fifteen',
    16: 'Sixteen',
    17: 'Seventeen',
    18: 'Eighteen',
    19: 'Nineteen',
    20: 'Twenty',
    30: 'Thirty',
    40: 'Forty',
    50: 'Fifty',
    60: 'Sixty',
    70: 'Seventy',
    80: 'Eighty',
    90: 'Ninety',
    100: 'Hundred',
    1000: 'Thousand',
    1000000: 'Million',
    1000000000: 'Billion',
}

var numberToWords = function (num) {
    if (num === 0) return 'Zero'
    const sortedKeysList = Object.keys(wordObject).sort((a, b) => b - a)
   
    const places = (number)=> {
        
        let intermmediate = {
            n: number,
            arr: []
        }

        for(let i = 0 ; i < sortedKeysList.length; i++ ) {
            if(intermmediate.n > sortedKeysList[i]){
                if(sortedKeysList[i] >= 100) {
                    let multiply = Math.floor(intermmediate.n /sortedKeysList[i] )
                    intermmediate.arr.push(places(multiply).arr)
                }
                intermmediate.arr.push(sortedKeysList[i])
                intermmediate.n = intermmediate.n % sortedKeysList[i]
            }
        }
        return intermmediate
    }

    console.log(places(num))
    return places(num).arr.flat().map((e) => wordObject[e]).join(' ')
};

console.log(numberToWords(443))