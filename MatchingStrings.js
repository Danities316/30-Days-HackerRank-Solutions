// There is a collection of input strings and a collection of query strings. For each query string, 
// determine how many times it occurs in the list of input strings. Return an array of the results.

// Example
// strings = ['ab', 'ab', abc ']
// queries = ['ab', 'abc', 'bc ']
// There are 2 instances of ab', 1  of 'abc' and 0 of 'bc'. For each query, add an element to the return array, result = [2,1,0].
//Quetion Link: https://bit.ly/3E0uWL6
//Answer Link: https://bit.ly/3Ch7qbn


function matchingStrings(strings, queries) {
    // Write your code here
    let result = []
    for(let i of queries){
        let count = 0
        for(let j of strings){
            if(i === j){
                count += 1
            }
        }
        result.push(count)
    }
   
    return result
}
let queries = ['ab', 'abc', 'bc']
let string = ['ab', 'ab', 'abc']
console.log(matchingStrings(string, queries))