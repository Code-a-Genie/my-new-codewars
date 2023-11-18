/*Given an array of integers, return a new array with each value doubled.

For example:

[1, 2, 3] --> [2, 4, 6]


 */

function maps(x){
  let doubledArray = [];

   x.forEach(element => {
    let doubledElement = element * 2;
    doubledArray.push(doubledElement);
   
   });

   
   return doubledArray;
   
  };

  console.log(maps([1, 2, 3]))

  /*alternative code

  function maps(x) {
  return x.map(element => element * 2);
}

console.log(maps([1, 2, 3]));

  */