/**
 * 1137. N-th Tribonacci Number
 *
 * The Tribonacci sequence Tn is defined as follows:
 * T0 = 0, T1 = 1, T2 = 1, and Tn+3 = Tn + Tn+1 + Tn+2 for n >= 0.
 * Given n, return the value of Tn.
 */
function tribonacci (n: number): number {
  const resultsArr = [ 0, 1, 1 ];
  if (n === 0 || n === 1) return resultsArr[n];
  if (n === 2) return 1;

  let res: number;
  for (let i = 3; i <= n; i++) {
    res = resultsArr[i - 3] + resultsArr[i - 2] + resultsArr[i - 1];
    resultsArr.push(res);
  }
  return res;
};


const res = tribonacci(25);
console.log(res);
