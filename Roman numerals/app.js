// Create a function that takes a Roman numeral as its argument and returns its value as a numeric decimal integer. You don't need to validate the form of the Roman numeral.

// Modern Roman numerals are written by expressing each decimal digit of the number to be encoded separately, starting with the leftmost digit and skipping any 0s. So 1990 is rendered "MCMXC" (1000 = M, 900 = CM, 90 = XC) and 2008 is rendered "MMVIII" (2000 = MM, 8 = VIII). The Roman numeral for 1666, "MDCLXVI", uses each letter in descending order.

// Example:

// solution('XXI'); // should return 21


// Symbol    Value
// I          1
// V          5
// X          10
// L          50
// C          100
// D          500
// M          1,000

// function  solution(roman) {
//   // create a romanNumerals object that maps each Roman numeral character to its corresponding numerical value.
//     const romanNumeral = {
//       'I': 1,
//       'V': 5,
//       'X': 10,
//       'L': 50,
//       'C': 100,
//       'D': 500,
//       'M': 1000
//     };
      
    // initialize two variables, result to store the final integer value, and prevValue to keep track of the previous numeral's value during the iteration.

  //   let result = 0;
  //   let preValue = 0;

  //   for(let i = roman.lenght - 1; i >= 0; i--){
  //     const currentRoman = roman[i];
  //     const currentValue = romanNumeral[currentRoman];
  //     if (currentValue < preValue){
  //       result -= currentValue;
  //     }
  //     else{
  //       result+=currentValue;
  //     }

  //     preValue = currentValue;
  //   }
  //   return result;
  // }
 
   
  //  console.log(solution('XCIX'))

  function  solution(roman) {
const romanNum = {
  'I':1,
  'V': 5,
  'X': 10,
  'L': 50,
  'C': 100,
  'D': 500,
  'M': 1000
}
let result = 0;


for(let i=0; i<roman.length;i++){
  const currentRoman = roman[i]
  const currentValue = romanNum[currentRoman];

  if(i+1 < roman.length && romanNum[roman[i+1]]>currentValue){
    result -= currentValue;
  }
  else{
    result+=currentValue;
  }

}
return result;

  }
  console.log(solution('VI'))