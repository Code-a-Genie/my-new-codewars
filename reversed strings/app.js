// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

// function solution(str){
//     let reversedString = str.split("").reverse().join("");
//     return reversedString;
    
  
// }
// console.log(solution ("dlrow"))

function solution(str){
    let  reversedString = ""
    for(let i=str.length - 1; i>=0; i--){
        reversedString = reversedString + str.charAt(i);
    }
    return reversedString;
}
console.log(solution("hello"))