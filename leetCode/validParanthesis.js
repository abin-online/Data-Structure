const s = '(*)'

function validParanthesis(s){
    let max = 0
    let min = 0
    for(let i of s){
        if(i == '('){
            max++
            min++
        }else if(i == ')'){
            max--
            min--
        }else if(i == '*'){
            max++
            min--
        }
        if(max < 0){
            return false
        }
        min = Math.max(min,0)
    }
    return min == 0
}

console.log(validParanthesis(s));
