/**
 * 509. Fibonacci Number
 * The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence,
 * such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,
 */
function fib (n: number): number {
  if (n === 0) return 0;
  if (n === 1) return 1;

  let tmp1 = 0;
  let tmp2 = 1;
  let res: number;

  for (let i = 1; i < n; i++) {
    res = tmp1 + tmp2;
    tmp1 = tmp2;
    tmp2 = res;
  }

  return res;
};


const res = fib(7);
console.log(res);
