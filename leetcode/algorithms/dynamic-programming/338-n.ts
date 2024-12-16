/**
 * https://leetcode.com/problems/counting-bits/description
 *
 * Given an integer n, return an array answer of length n + 1 such that for each i (0 <= i <= n),
 * answer[i] is the number of 1's in the binary representation of i.
 * @param n
 */
function countBits (n: number): number[] {
  const res: number[] = [];

  function convertToBinaries (num: number): number {
    let bitsNum = 0;

    let floor: number;

    for (let i = 0; true; i++) {

      const divided = num / 2;
      floor = Math.floor(divided);
      const remainder = num % 2;

      bitsNum += remainder;
      if (floor === 0) {
        break;
      }
    }

    return bitsNum;
  }

  for (let i = 0; i <= n; i++) {
    res.push(convertToBinaries(i));
  }

  return res;
}

const res = countBits(5);
// const res = countBits(13);
console.log(res);
