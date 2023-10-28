/* Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

Example(Input => Output):
35231 => [1,3,2,5,3]
0 => [0]
*/

function digitize(n) {
     let str = n.toString();
    let newArray = str.split('');
    newArray.reverse();
    let finalArr = [];
    for(let i = 0; i < newArray.length; i++) {
        let item = parseInt(newArray[i]);
        finalArr.push(item); 
  }
  return finalArr;
}
  digitize(35231)