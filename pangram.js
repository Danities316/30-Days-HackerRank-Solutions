// A pangram is a string that contains every letter of the alphabet. 
// Given a sentence determine whether it is a pangram in the English alphabet. 
// Ignore case. Return either pangram or not pangram as appropriate.
// Example: 'The quick brown fox jumps over the lazy dog'
// The string contains all letters in the English alphabet, so return pangram.
// https://www.ssec.wisc.edu/~tomw/java/unicode.html#x0000 - unicode links
// questionLink: shorturl.at/oxzL1
//SolutionLink: shorturl.at/ftSW8


function pangrams(s){
    // Convert string to lower case
    let str = s.toLowerCase()
    //Creating an array of 26 spaces fill with 0
    const letters = new Array(26).fill(0);
    for (let i = 0; i < letters.length; i++) {
        // Creating arrays of all the alphabets(97 is the unicode of a)
        letters[i] = String.fromCharCode(97 + i)
    }
    // console.log(letters)
    //
    return letters.every((letter) => str.includes(letter)) ? 'pangram': 'not pangram'
}
let s =  'The quick brown fox jumps over the lazy dog'
console.log(pangrams(s))
//pangram
