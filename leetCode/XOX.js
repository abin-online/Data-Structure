let matrix = [[1, 0, 0],
[1, 0, 1],
[1, 0, 1]]

const validXO = (matrix) => {

    const sameValue = (arr) => {
        let start = arr[0]
        for (let i of arr) {
            if (start != i) {
                return false
            }
        }
        return true
    }

    let result = []
    for (let i = 0; i < matrix.length; i++) {
        if (sameValue(matrix[i])) {
            result.push(matrix[i][0]);
        }
    }

    console.log(result)

   

    for (let i = 0; i < matrix.length; i++) {
        let colarr = matrix.map((x) => {
            return x[i]
        })
        console.log(i, " => ", colarr)

        if (sameValue(colarr)) {
            console.log(colarr[0])
            result.push(colarr[0])
        }
    }

    const leftDiagonal = (matrix) => {
        let start = matrix[i][i]
        for (let i = 0; i < matix.length; i++) {
            for (let j = 0; j < matrix[0].length; j++) {
                if (matrix[i][j] !== start) {
                    return false
                }
            }
        }
        result = matrix[i][j]
        return true
    }

    // const rightDiagonal = (matrix) => {
    //     let n = matrix.length;
    //     let start = matrix[i][i]
    //     for (let i = 0; i < matix.length; i++) {
    //         for (let j = 0; j < matrix[0].length; j++) {
    //             if (matrix[][j] !== start) {
    //                 return false
    //             }
    //         }
    //     }
    //     result = matrix[i][j]
    //     return true
    // }


    leftDiagonal(matrix)
    rightDiagonal(matrix)
    console.log(result)

}
validXO(matrix)