/**
 * https://leetcode.com/problems/counting-bits/description
 *
 * Given an integer n, return an array answer of length n + 1 such that for each i (0 <= i <= n),
 * answer[i] is the number of 1's in the binary representation of i.
 * @param n
 */
function countBits (n: number): number[] {
  const result: number[] = [];

  function rec (num): void {
    const divided = num / 2;

    const floor = Math.floor(divided);

    const remainder = num % 2;

    result.push(remainder);

    if (floor > 0) {
      rec(floor);
    }
  }

  rec(n);

  return result.reverse();
}

const res = countBits(5);
// const res = countBits(13);
console.log(res);
