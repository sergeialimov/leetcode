/**
 * 509. Fibonacci Number with memoization
 * The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence,
 * such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,
 */
function fib (n: number): number {
  const resultsArr = [ 0, 1 ];
  if (n === 0 || n === 1) return resultsArr[n];

  let res: number;
  for (let i = 2; i <= n; i++) {
    res = resultsArr[i - 2] + resultsArr[i - 1];
    resultsArr.push(res);
  }

  return res;
};


const res = fib(4);
console.log(res);
