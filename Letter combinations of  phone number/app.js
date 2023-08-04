// Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

// A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

// Example 1:

// Input: digits = "23"
// Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
// Example 2:

// Input: digits = ""
// Output: []
// Example 3:

// Input: digits = "2"
// Output: ["a","b","c"]
 
function letterCombinations(digits) {
    // Create a mapping of digits to letters, just like on a telephone keypad.
    const digitToLetters = {
      '2': 'abc',
      '3': 'def',
      '4': 'ghi',
      '5': 'jkl',
      '6': 'mno',
      '7': 'pqrs',
      '8': 'tuv',
      '9': 'wxyz',
    };
  
    // Define the function that performs the recursive exploration.
    function exploreCombinations(current, remainingDigits) {
      // Base case: if there are no more remaining digits, return the current combination.
      if (remainingDigits.length === 0) {
        if (current.length > 0) {
          return [current];
        } else {
          return [];
        }
      }
  
      const firstDigit = remainingDigits[0];
      const letters = digitToLetters[firstDigit];
  
      let combinations = [];
  
      for (const letter of letters) {
        // For each letter corresponding to the current digit, explore further.
        combinations.push(...exploreCombinations(current + letter, remainingDigits.slice(1)));
      }
  
      return combinations;
    }
  
    // Call the recursive function to find all possible letter combinations.
    return exploreCombinations('', digits);
  }
  
  // Examples:
  console.log(letterCombinations('23')); // Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
  console.log(letterCombinations(''));   // Output: []
  console.log(letterCombinations('2'));  // Output: ["a","b","c"]
  