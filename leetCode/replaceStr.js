let str = 'abcdeacde'


function replaceChar(mainstr , target , replace){
    str = mainstr
    let n = target.length
    let result = ''
    let k = 0
    let count = 0
    for(let i  = 0 ; i < str.length ; i++) {
        if(str[i] == target[k]){
            
            let j = i
            while(n!=0) {
                count++;
                if(str[j] == target[k]){
                    j++;
                    k++;
                }
                n--;
                k=0 // if k is not reset to 0, it's works only on first string replacement
            }
            if(count == target.length){
                
                    result += replace
              
            }
        i = i+target.length - 1
        }else{
            result += str[i]
        }
    }
    return result
}

console.log(replaceChar(str , 'cde' , 'zx'))

//own logic
