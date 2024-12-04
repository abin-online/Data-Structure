let grid = [[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]]
let i = 0 , j = 1
        if(grid?.[i]?.[j-1] !=1) console.log(grid?.[i]?.[j-1])
        if(grid?.[i]?.[j+1] !=1) console.log(grid?.[i]?.[j+1])
        if(grid?.[i-1]?.[j] !=1) console.log(grid?.[i-1]?.[j])
        if(grid?.[i+1]?.[j] !=1) console.log(grid?.[i+1]?.[j]);
        


// var islandPerimeter = function(grid) {
//     const openLines = function(i,j){
//         let count = 0;
//         if(grid?.[i]?.[j-1] !=1) count++
//         if(grid?.[i]?.[j+1] !=1) count++
//         if(grid?.[i-1]?.[j] !=1) count++
//         if(grid?.[i+1]?.[j] !=1) count++
//         return count
//     }
//     let perimeter = 0
//     for(let i = 0 ; i < grid.length ; i++){
//         for(let j = 0 ; j < grid[0].length ; j++){
//             perimeter += openLines(i,j)
//         }
//     }
//     return perimeter
// };

//console.log(islandPerimeter(grid))