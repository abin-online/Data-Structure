const abc = [{ abc: 3, efg: 7 }, { egh: 5, rg: 5 }, { df: 6, fg: 9 }];

function sum() {
    let sum = 0
    for (let i of abc) {
        sum += Object.values(i).reduce((acc, curr) => {
            return acc + curr
        })
    }
    return sum
}

console.log(sum(abc))