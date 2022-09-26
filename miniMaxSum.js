// question: https://bit.ly/3LIFCQu
// Given five positive integers, find the minimum and maximum values that can be calculated by 
// summing exactly four of the five integers. Then print the respective minimum and maximum 
// values as a single line of two space-separated long integers.

function miniMaxSum(arr) {
    // Write your code here
   // sort the array
   arr.sort((a, b) => a-b)
   let maxSum = 0, minSum = 0;

   for (let i = 0; i < arr.length-1; i++) {
    minSum += arr[i]
}
for (let j = 1; j < arr.length; j++) {
    maxSum += arr[j]
}
console.log(minSum + " " + maxSum)
  
}

miniMaxSum([1, 3, 5, 7, 9])
