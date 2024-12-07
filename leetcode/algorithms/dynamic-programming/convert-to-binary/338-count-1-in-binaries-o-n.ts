/**
 * https://leetcode.com/problems/counting-bits/description
 *
 * Given an integer n, return an array answer of length n + 1 such that for each i (0 <= i <= n),
 * answer[i] is the number of 1's in the binary representation of i.
 * @param n
 *
 * shifts the bits of a number one position to the right is equivalent to dividing the number by 2
 */

function countBits (n: number): number[] {
  const result: number[] = [ 0 ];

  for (let i = 1; i <= n; i++) {
    result.push(result[i >> 1] + (i % 2));
  }

  return result;
}

const res = countBits(5);
// const res = countBits(13);
console.log(res);
