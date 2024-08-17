function findsubSet(mySet){
    let subSet = [[]]
    for(let num of mySet){
        let n = subSet.length;
        for(let i = 0 ; i < n ; i++){
            let curr = [...subSet[i]]
            curr.push(num)
            subSet.push(curr)
        }
    }
    return subSet
}



const mySet = [1,2,3]
console.log(findsubSet(mySet));
