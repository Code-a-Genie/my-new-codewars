// An ordered sequence of numbers from 1 to N is given. One number might have deleted from it, then the remaining numbers were mixed. Find the number that was deleted.

// Example:

// The starting array sequence is [1,2,3,4,5,6,7,8,9]
// The mixed array with one deleted number is [3,2,4,6,7,8,1,9]
// Your function should return the int 5.
// If no number was deleted from the starting array, your function should return the int 0.

// Note: N may be 1 or less (in the latter case, the first array will be []).

// function findDeletedNumber(arr, mixArr) {
//   let result = []
  
//   for( let i = 0; i< arr.length ; i++){
//     let firstArray = arr[i]
//     let foundInSecondArray = false;

//     for(let j=0; j < mixArr.length; j++ ){
      
//       if(mixArr[j]===firstArray){
//        foundInSecondArray = true;
//        break;
//       }
    
//     }
//     if(!foundInSecondArray){
//       return result.push(firstArray)
//     }
//   }

//     if(result.length === 0){
//       return 0;
//     }else{
//       return result;
//     }
  
   
  
  
//   }
// console.log(findDeletedNumber([1,2,3,4,5,6,7,8,9], [3,2,4,6,8,1,7,5,9]))



// function findDeletedNumber(arr, mixArr) {
//   let result = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (!mixArr.includes(arr[i])) {
//       result.push(arr[i]);
//     }
//   }

//   if (result.length === 0) {
//     return 0;
//   } else {
//     return result[0];
//   }
// }

function findDeletedNumber(arr, mixArr){
  let result = [];

  for (let i = 0; i < arr.length; i++){
    if(!mixArr.includes(arr[i])){
       result.push(arr[i]);
    }
  }

  if(result.length===0){
    return 0;
  }
  // else{
  //   return result[0];
  // }
  return parseInt(result,10);
}


console.log(findDeletedNumber([1,2,3,4,5,6,7,8,9], [3,2,4,6,7,8,]))