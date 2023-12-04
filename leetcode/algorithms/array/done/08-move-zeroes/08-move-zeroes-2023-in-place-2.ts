import assert from 'assert';

/* eslint-disable no-multiple-empty-lines */
/* eslint-disable no-trailing-spaces */
function moveZeroes (nums: number[]): number[] {
  let nonZeroIndex = 0
  nums.forEach((x, i) => {
    if (x !== 0 && nonZeroIndex !== i && nums[nonZeroIndex] === 0) {
      nums[nonZeroIndex] = x;
      nonZeroIndex++;
      nums[i] = 0;
    } else if (nums[nonZeroIndex] !== 0) {
      nonZeroIndex++;
    }
  });
  return nums;
};


assert.deepStrictEqual(moveZeroes([ 0, 0, 1,0,3,12 ]), [ 1,3,12,0,0, 0 ], 'Arrays are not equal');
assert.deepStrictEqual(moveZeroes([ 1, 0 ]), [ 1, 0 ], 'Arrays are not equal');
assert.deepStrictEqual(moveZeroes([ 2, 1 ]), [ 2, 1 ], 'Arrays are not equal');
assert.deepStrictEqual(moveZeroes([ 2, 1 ]), [ 2, 1 ], 'Arrays are not equal');
