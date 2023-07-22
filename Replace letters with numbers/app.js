// Welcome.

// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

// Example
// alphabetPosition("The sunset sets at twelve o' clock.")
// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )



// function alphabetPosition(text) {
//     // Step 1: Initialize an empty string to store the result.
//     let result = '';
  
//     // Step 2: Loop through each character in the 'text' string.
//     for (let i = 0; i < text.length; i++) {
//       const char = text.charAt(i);
  
//       // Step 3: Check if the character is a letter (ignore case).
//       // We'll use a regular expression to check if the character is a letter.
//       if (/[a-zA-Z]/.test(char)) {
  
//         // Step 4: Find the position of the letter in the alphabet.
//         // Convert the character to lowercase to handle both uppercase and lowercase letters.
//         const position = char.toLowerCase().charCodeAt(0) - 96;
  
//         // Step 5: Append the position to the result string.
//         result += position + ' ';
//       }
//     }
  
//     // Step 6: Return the final result (remove the extra space at the end).
//     return result.trim();
//   }
  

function alphabetPosition(text) {
    let result = ''

    for(let i=0; i < text.length; i++){
        const char = text.charAt(i);
        if (/[a-zA-Z]/.test(char)){
        let currentPosition = char.toLowerCase().charCodeAt(0) - 96;

        result+=currentPosition + ' ';
        }
    }
    return result.trim();
  }
// //   const inputText = "Text is fine";
// //   let result = alphabetPosition(inputText);
//   console.log(alphabetPosition("HEY"));