// Comparison Sorting
// Quicksort usually has a running time of nlogn, but is there an algorithm that can 
// sort even faster? In general, this is not possible. Most sorting algorithms 
//  comparison sorts, i.e. they sort a list just by comparing the elements to one 
//  another. A comparison sort algorithm cannot beat nlogn (worst-case) running time, 
//  since nlogn the minimum number of comparisons needed to know where to place 
//  each element. For more details, you can see these notes (PDF).

// Alternative Sorting
// Another sorting method, the counting sort, does not require comparison. Instead,
// you create an integer array whose index range covers the entire range of 
// values in your array to sort. Each time a value occurs in the original array,
// you increment the counter at that index. At the end, run through your counting 
// array, printing the value of each non-zero valued index that number of times.
// example: arr = [1,1,3,2,1]
// result = [0,3,1,1]

// questionLink: https://cutt.ly/zBxxiXm
//SolutionLink: https://cutt.ly/3BxxTmA


function countingSort(arr) {
let result = new Array(100).fill(0)
for(let i of arr){
    result[[i]]++
}
return result
}
let arr = [1,1,3,2,1]
console.log(countingSort(arr))