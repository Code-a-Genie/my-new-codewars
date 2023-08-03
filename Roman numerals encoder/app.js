//  Create a function taking a positive integer between 1 and 3999 (both included) as its parameter and returning a string containing the Roman Numeral representation of that integer.

// Modern Roman numerals are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero. In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC. 2008 is written as 2000=MM, 8=VIII; or MMVIII. 1666 uses each Roman symbol in descending order: MDCLXVI.

// Example:

// solution(1000);  should return 'M'

// Help:

// Symbol    Value
// I          1
// V          5
// X          10
// L          50
// C          100
// D          500
// M          1,000
// Remember that there can't be more than 3 identical symbols in a row.

// More about roman numerals - http://en.wikipedia.org/wiki/Roman_numerals

// function solution(number){
//     const romanNum= {
//         1: 'I',
//         5: 'V',
//         10: 'X',
//         50: 'L',
//         100: 'C',
//         500:'D',
//         1000:'M'
//     }
//     let result = toString('');

//     for(let i = 1;  i <= 3999; i++){
//         const currentNum = number[i];
//         const numberValue = romanNum[currentNum]

//         if(i+1 <= 3999 && romanNum[number[i + 1]] > numberValue){
//             result-=numberValue
//         }
//         else{
//             result+=numberValue;
//           }
       
//     }
   
//     return result.toString('');
//   }


function solution(number) {
    // Here, we define the symbols and their corresponding values.
    // For example, M represents 1000, D represents 500, and so on.
    // We put them in an array with their values so that we can use them later.
    const romanSymbols = [
        { value: 1000, symbol: 'M' },
        { value: 900, symbol: 'CM' },
        { value: 500, symbol: 'D' },
        { value: 400, symbol: 'CD' },
        { value: 100, symbol: 'C' },
        { value: 90, symbol: 'XC' },
        { value: 50, symbol: 'L' },
        { value: 40, symbol: 'XL' },
        { value: 10, symbol: 'X' },
        { value: 9, symbol: 'IX' },
        { value: 5, symbol: 'V' },
        { value: 4, symbol: 'IV' },
        { value: 1, symbol: 'I' },
    ];
  
    // We create an empty string called 'result' to store the Roman numeral representation.
    let result = '';
  
    // Now, we go through each symbol and its value in our array, one by one.
    for (const symbolObj of romanSymbols) {
      // We take the value of the current symbol from the array.
      const symbolValue = symbolObj.value;
      // We also take the actual symbol itself from the array.
      const symbol = symbolObj.symbol;
  
      // Now, we check if our input number is greater than or equal to the current symbol's value.
      while (number >= symbolValue) {
        // If it is, we add the corresponding symbol to our result string.
        result += symbol;
        // Then, we subtract the value of that symbol from our number to reduce it.
        number -= symbolValue;
      }
    }
  
    // Finally, we return the 'result' string, which contains our converted Roman numeral.
    return result;
  }
  
  
  
  console.log( solution(1000));
