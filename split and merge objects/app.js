/*implement a function which accepts 2 arguments: string and separator.

The expected algorithm: split the string into words by spaces, split each word into separate characters and join them back with the specified separator, join all the resulting "words" back into a sentence with spaces.

For example:

splitAndMerge("My name is John", " ")  ==  "M y n a m e i s J o h n"
splitAndMerge("My name is John", "-")  ==  "M-y n-a-m-e i-s J-o-h-n"
splitAndMerge("Hello World!", ".")     ==  "H.e.l.l.o W.o.r.l.d.!"
splitAndMerge("Hello World!", ",")     ==  "H,e,l,l,o W,o,r,l,d,!*/

function splitAndMerge(str, sp) {
    const words = str.split("");

    const processedWords = words.map(word =>{

        let eachChar = word.split('').join(sp);
        return eachChar;
    })
     const result = processedWords.join('');
     return result;
  }

  console.log(splitAndMerge("My name is Ginika", "-"));






























/*function splitAndMerge(str, separator) {
    // Step 1: Split the input string into words using spaces
    const words = str.split(" ");
    
    // Step 2-3: Process each word and join characters using the separator
    const processedWords = words.map(word => {
        // Split the word into characters, join using the separator
        const characters = word.split("").join(separator);
        return characters;
    });
    
    // Step 4: Join the modified words back together with spaces
    const result = processedWords.join(" ");
    
    return result;
}

// Test cases
console.log(splitAndMerge("My name is John", " "));  // "M y n a m e i s J o h n"
console.log(splitAndMerge("My name is John", "-"));  // "M-y n-a-m-e i-s J-o-h-n"
console.log(splitAndMerge("Hello World!", "."));     // "H.e.l.l.o W.o.r.l.d.!"
console.log(splitAndMerge("Hello World!", ","));     // "H,e,l,l,o W,o,r,l,d,!"
*/


