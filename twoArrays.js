// There are two n-element arrays of integers, A and B. 
// Permute them into some A' and B' such that the relation A'[i] + B'[i] => k  holds for all i where 0 <= i <= n.
// There will be  queries consisting of , , and . For each query, 
// return YES if some permutation ,  satisfying the relation exists. Otherwise,
// Exmaple
// A = [0, 1]
// B = [0, 2]
// k = 1
// questionLink: https://bit.ly/3COg8x7
//AmswerLink: https://bit.ly/3z0GVoF

function twoArrays(A, B, k) {
    A.sort((a, b) => a - b)
    B.sort((a, b) => b - a)

    for (let i = 0; i < A.length; i++) {
        if(A[i] + B[i] < k){
            return 'NO'
        }
    }
    return 'YES'
}

let A = [1, 2, 2, 1]
let B = [3, 3, 3, 4]
let k = 5
console.log(twoArrays(A, B, k))