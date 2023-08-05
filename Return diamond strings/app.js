/* Jamie is a programmer, and James' girlfriend. She likes diamonds, and wants a diamond string from James. Since James doesn't know how to make this happen, he needs your help.

Task
You need to return a string that looks like a diamond shape when printed on the screen, using asterisk (*) characters. Trailing spaces should be removed, and every line must be terminated with a newline character (\n).

Return null/nil/None/... if the input is an even number or negative, as it is not possible to print a diamond of even or negative size.

Examples
A size 3 diamond:

 *
***
 *
...which would appear as a string of " *\n***\n *\n"

A size 5 diamond:

  *
 ***
*****
 ***
  *
...that is:

"  *\n ***\n*****\n ***\n  *\n" 

*/


// function diamond(n){
//   let result = '';

//   for(let i = 0; i<=n;i++){
    
//     if(n%2===0 || n<0){
//         return `\n`
//     }
//     // for(let i=0;i<=n;i++){
//         // const currentNumber= n[i];
//         else if(n%2===1 && n>0){
//             result += '*';
//         }
//     // } 

//     for(let i=n-2;i>=1;i-=2)
//   }

//     // return '';
//   }

//   console.log(diamond(4))

  
function diamond(n) {
    if (n % 2 === 0 || n < 1) {
      return null;
    }
  
    let diamondPattern = "";
  
    // Generate the upper part of the diamond
    for (let i = 1; i <= n; i += 2) {
      let spaces = " ".repeat((n - i) / 2);
      let asterisks = "*".repeat(i);
      diamondPattern += spaces + asterisks + "\n";
    }
  
    // Generate the lower part of the diamond
    for (let i = n - 2; i >= 1; i -= 2) {
      let spaces = " ".repeat((n - i) / 2);
      let asterisks = "*".repeat(i);
      diamondPattern += spaces + asterisks + "\n";
    }
  
    return diamondPattern;
  }
  
  // Example usage:
  console.log(diamond(3));
  console.log(diamond(5));
  