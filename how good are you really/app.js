/**
 There was a test in your class and you passed it. Congratulations!
But you're an ambitious person. You want to know if you're better than the average student in your class.

You receive an array with your peers' test scores. Now calculate the average and compare your score!

Return True if you're better, else False!

Note:
Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!


 */

function betterThanAverage(classPoints, yourPoints) {
    const totalClassPoints =classPoints.reduce((total, eachPoint) => total + eachPoint,0)
    
    averagePoint = (totalClassPoints + yourPoints)/(classPoints.length + 1);

    if(yourPoints > averagePoint){
        return true
    }
    else{
        return false;
    }
  }

  console.log(betterThanAverage([12,23,65,79,44], 40))