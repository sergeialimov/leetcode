import assert from 'assert';

function moveZeroes (nums) {
  let nonZeroIndex = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      if (i !== nonZeroIndex) {
        // Swap using bitwise XOR
        nums[i] ^= nums[nonZeroIndex];
        nums[nonZeroIndex] ^= nums[i];
        nums[i] ^= nums[nonZeroIndex];
      }
      nonZeroIndex++;
    }
  }
  return nums;
}

assert.deepStrictEqual(moveZeroes([ 0, 0, 1,0,3,12 ]), [ 1,3,12,0,0, 0 ], 'Arrays are not equal');
assert.deepStrictEqual(moveZeroes([ 1, 0 ]), [ 1, 0 ], 'Arrays are not equal');
assert.deepStrictEqual(moveZeroes([ 2, 1 ]), [ 2, 1 ], 'Arrays are not equal');
assert.deepStrictEqual(moveZeroes([ 2, 1 ]), [ 2, 1 ], 'Arrays are not equal');
