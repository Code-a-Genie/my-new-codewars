/*Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

For example,

[true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]
The correct answer would be 17.

Hint: Don't forget to check for bad values like null/undefined*/

function countSheeps(sheep) {
    const storeSheep=[];
    for(let i=0; i<sheep.length; i++) {
        let singleSheep = sheep[i];
       
        if(singleSheep === true) {
            storeSheep.push(singleSheep);
        }
  }
    return storeSheep.length;
}
countSheeps([true,  true,  true,  false,
    true,  true,  null,  true ,
    true,  false, true,  false,
    undefined,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true])