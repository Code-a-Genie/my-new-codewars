// Write a function named first_non_repeating_letter that takes a string input, and returns the first character that is not repeated anywhere in the string.

// For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.

// As an added challenge, upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'.

// If a string contains all repeating characters, it should return an empty string ("") or None -- see sample tests.


// function firstNonRepeatingLetter(s) {
//     // Convert the string to lowercase to consider upper- and lowercase letters as the same
//     const lowerCaseString = s.toLowerCase();
  
//     // Loop through each character in the string
//     for (let i = 0; i < s.length; i++) {
//       const char = lowerCaseString[i];
      
//       // Check if the character appears only once in the string
//       if (lowerCaseString.indexOf(char) === lowerCaseString.lastIndexOf(char)) {
//         // Return the original case character
//         return s[i];
//       }
//     }
    
//     // If no non-repeating character is found, return an empty string
//     return '';
//   }
  
//   // Test cases
//   console.log(firstNonRepeatingLetter('stress')); // Output: 't'
//   console.log(firstNonRepeatingLetter('sTreSS')); // Output: 'T'
//   console.log(firstNonRepeatingLetter('aabbc'));  // Output: ''
  
function firstNonRepeatingLetter(s) {

    const lowerCaseString = s.toLowerCase();

    for (let i = 0; i < s.length ; i++ ){

        const currentChar = lowerCaseString[i]

        if(lowerCaseString.indexOf(currentChar)=== lowerCaseString.lastIndexOf(currentChar)){
            return s[i]
        }
    }
      return '';
    
  }