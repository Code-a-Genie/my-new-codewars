// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.

// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:

// arrayDiff([1,2,2,2,3],[2]) == [1,3]

// function arrayDiff(a, b) {
//   let newArray = [];
//   if (b.length === 0) {
//     return a;
//   }
//   for (let i = 0; i < b.length; i++) {
//     const item = b[i];
//     a.filter((element)=> {
//       if(element!==item){
//         newArray.push(element)
//       }
//     })
//   }
//   console.log(newArray);
//   return newArray;
// }
// arrayDiff([1, 2, 3], [1, 2]);

// function arrayDiff(a, b) {
//     const result = [];
  
//     for (let i = 0; i < a.length; i++) {
//       const currentValue = a[i];
//       let foundInB = false;
  
//       for (let j = 0; j < b.length; j++) {
//         if (b[j] === currentValue) {
//           foundInB = true;
//           break;
//         }
//       }
  
//       if (!foundInB) {
//         result.push(currentValue);
//       }
//     }
  
//     return result;
//   }
  
//   // Example usage
//   console.log(arrayDiff([1, 2], [1]));               // Output: [2]
//   console.log(arrayDiff([1, 2, 2, 2, 3], [2]));      // Output: [1, 3]


function arrayDiff(a ,b){
    const result = []
    for(let i = 0; i < a.length; i++){
        const currentValue =a[i]
        let foundInB = false;

        for(let j=0; j<b.lenth;j++) {
            if(b[j]===currentValue){
                foundInB =true;
            }

            }
            if(!foundInB){
                result.push(currentValue)
            }
        }
        return result
    }

  