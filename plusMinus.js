// Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. 
// Print the decimal value of each fraction on a new line with  places after the decimal.

// Note: This challenge introduces precision problems. The test cases are scaled to six decimal places, 
// though answers with absolute error of up to  are acceptable.

// QuestionLink: https://bit.ly/3LJ2pvx


function plusMinus(arr) {
    // Write your code here
    let positive = 0;
    let negative = 0;
    let zero = 0;
    let length = arr.length
    for(let i = 0; i < length; i++){
        if(arr[i] < 0){
            negative += 1
        }else if(arr[i] == 0){
            zero += 1
        }else{
            positive += 1
        } 
    }
        let positiveRatio = positive / length
        let negativeRatio = negative / length
        let zeroRatio = zero / length
        
        console.log(positiveRatio)
        console.log(negativeRatio)
        console.log(zeroRatio)
    

}
