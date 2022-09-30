// You will be given a list of 32 bit unsigned integers.
//Flip all the bits (1 to 0 and 0 to ) and return the result
//as an unsigned integer.
// Question link: shorturl.at/aciyN
//Solution Link:

function flippingBits(n) {
  // Write your code here
  //Converting number from base 10 to base 2
  let toBaseTwo = n.toString(2);
  //Converting it to 32 bits
  let toThirtyTwoBits = toBaseTwo.padStart(32, "0");
  //Converting the 32 bits number into an array
  // console.log(toThirtyTwoBits)
  let toArray = String(toThirtyTwoBits)
    .split("")
    .map((element) => {
      //flip 0 with 1
      if (element == "0") {
        return 1;
      } else {
        return 0;
      }
      //removing comma and space
    })
    .join("");
//   console.log(toArray);
  return parseInt(toArray, 2);
}
console.log(flippingBits(9));
// 4294967286
