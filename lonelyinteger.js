// Question Link: shorturl.at/ituW2
// Solution Link: shorturl.at/qSUVX

// Given an array of integers, where all elements but one occur twice, 
// find the unique element.

// Example
// a = [1,2,3,4,3,2,1]
// The unique element is 4


function lonelyinteger(a) {
    // Write your code here
   a.sort((a,b) => {return a-b})
   
  for(let i = 0; i < a.length; i += 2){
    if(a[i] != a[i + 1]){
        return a[i]
    }
  }
}
a = [1,2,3,4,3,2,1]
console.log(lonelyinteger(a))
//Output 4