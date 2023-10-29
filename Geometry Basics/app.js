
/*This series of katas will introduce you to basics of doing geometry with computers.

Point objects have attributes x and y.

Write a function calculating distance between Point a and Point b.

Input coordinates fit in range 
−

−50⩽x,y⩽50. Tests compare expected result and actual answer with tolerance of 1e-6.


 */

// function distanceBetweenPoints(a, b) {
//     return 0; // your code here
//   }

function distanceBetweenPoints(a, b) {
    const x1 = a.x; // x-coordinate of Point A
    const y1 = a.y; // y-coordinate of Point A
    const x2 = b.x; // x-coordinate of Point B
    const y2 = b.y; // y-coordinate of Point B

    // Calculate the Euclidean distance between the two points using the Pythagorean theorem.
    const distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

    return distance; // Return the calculated distance.
}
const pointA = {x:1, y:6};

const pointB = {x:4, y:2};
const result = distanceBetweenPoints(pointA, pointB);

console.log(result); // Output should be