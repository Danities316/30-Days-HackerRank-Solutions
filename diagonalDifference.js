// Given a square matrix, calculate the absolute difference between the 
// sums of its diagonals.
// For example, the square matrix arr is shown below:
// 1 2 3
// 4 5 6
// 9 8 9
// Question Link: https://cutt.ly/UV1Ylya
// Solution Link: https://cutt.ly/QV1YByt

function diagonalDifference(arr) {
    // Write your code here
    let leftDiagonal = 0
    let rightDiagonal = 0
    for(let row = 0; row < arr.length; row++){
        leftDiagonal += arr[row][row]
        rightDiagonal += arr[row][(arr.length -1) - row]
        // console.log(row)
    }
    // console.log(leftDiagonal, rightDiagonal)
    let difference = Math.abs(leftDiagonal - rightDiagonal)
    // console.log(difference)
    return difference
}
let arr = [
    [1,2,3],
    [4,5,6],
    [9,8,9]
]
console.log(diagonalDifference(arr))
// output 2