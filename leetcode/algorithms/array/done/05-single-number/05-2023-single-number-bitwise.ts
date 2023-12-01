/* eslint-disable no-multiple-empty-lines */
/* eslint-disable no-trailing-spaces */

/**
 * You must implement a solution with a linear runtime complexity and use only constant extra space.
 */

/**
 * The sort() method in JavaScript does not have linear complexity. The time complexity of the sort() method in JavaScript is O(nlogn) in the average and worst case. This is because under the hood, most JavaScript engines use sorting algorithms like QuickSort or MergeSort for arrays of significant size.
 */
function singleNumber (nums: number[]): number {
  let result = 0;
  for (const num of nums) {
    const tmp = result ^ num;
    result ^= tmp;
  }
  return result;
};


const arr = [ 4,1,2,1,2 ];
// const arr = [ 2 ];
// const arr = [ 2, 2, 1 ];
const res = singleNumber(arr);

console.log('-- arr', res);
