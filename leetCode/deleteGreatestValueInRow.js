var deleteGreatestValue = function (grid) {
    let result = 0;
    let maxArr = []
    const traversal = () => {
        let maximumRemoved = -Infinity;
        
        for (let i = 0; i < grid.length; i++) {
            let max = Math.max(...grid[i]);
            let maxIdx = grid[i].indexOf(max);
            maximumRemoved = Math.max(maximumRemoved, max);
            grid[i][maxIdx] = null
        }
        return maximumRemoved
    }
    
    for(let i = 0 ; i < grid[0].length ; i++){
        result += traversal()
    }
    return result;
};

let grid = [[1,2,4],[3,3,1]];
console.log(deleteGreatestValue(grid))