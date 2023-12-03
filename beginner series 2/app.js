/**
 DESCRIPTION:
Clock shows h hours, m minutes and s seconds after midnight.

Your task is to write a function which returns the time since midnight in milliseconds.

Example:
h = 0
m = 1
s = 1

result = 61000
Input constraints:

0 <= h <= 23
0 <= m <= 59
0 <= s <= 59
 */


function past(h, m, s){
    if(h<0 || h>23 || m<0 || m>59 || s<0 || s>59){
        return `Invalid time`
    }

    const hInMilliseconds = h * 60 * 60 * 1000;
    const mInMilliseconds = m * 60 * 1000;
    const sInMilliseconds = s * 1000;

    const timePassed = hInMilliseconds + mInMilliseconds + sInMilliseconds;

    return  `${timePassed} milliseconds`;

  }
  console.log(past(2, 5, 6))