// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.

function positiveSum(arr) {
//   access the items in the array
let count = 0;
if(arr.length===0){
    return count;
    
}else{
    for(let i=0 ;i < arr.length; i++){
        let number = arr[i];
        if(number > 0){
            count+=number
        }
       
    }
}
return count
}
// positiveSum([1,-4,7,12]);
console.log(positiveSum([-1,-4,-7,-12]))