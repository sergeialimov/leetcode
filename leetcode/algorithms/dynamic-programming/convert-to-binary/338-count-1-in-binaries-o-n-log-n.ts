/**
 * https://leetcode.com/problems/counting-bits/description
 *
 * Given an integer n, return an array answer of length n + 1 such that for each i (0 <= i <= n),
 * answer[i] is the number of 1's in the binary representation of i.
 * @param n
 */
function countBits (n: number): number[] {
  const result: number[] = [];

  function countDigitBits (digit: number): number {
    let numOfOnes = 0;
    let remainder: number | null = null;
    let num = digit;

    // loop
    while (remainder !== 0) {
      numOfOnes += num % 2;
      remainder = Math.floor(num / 2);
      num = remainder;
    }
    return numOfOnes;
  }

  for (let i = 0; i <= n; i++) {
    result.push(countDigitBits(i));
  }

  return result;
}

const res = countBits(5);
// const res = countBits(13);
console.log(res);
