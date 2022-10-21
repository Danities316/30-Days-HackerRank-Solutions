function twoArrays(k, A, B) {
    // Write your code here
   A.sort((a,b) => a-b)
   B.sort((a,b) => a-b)
   for (let i = 0; i < A.length; i++) {
    if(A[i] + B[i] < k){
        return 'YES'
    }

   }return 'NO'
}
let A = [1, 2, 2, 1]
let B = [3, 3, 3, 4]
let k = 5
console.log(twoArrays(k, A, B))