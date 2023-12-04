import assert from 'assert';

/* eslint-disable no-multiple-empty-lines */
/* eslint-disable no-trailing-spaces */
function moveZeroes (nums: number[]): number[] {
  let pointer1 = 0;
  let pointer2 = nums.length - 1;

  // while (pointer1 < nums.length - 1) {
  while (pointer1 < nums.length && pointer2 > 0) {

    // iterating from the beginning of an array
    let tmp1 = null;
    const el1 = nums[pointer1];
    if (el1 === 0) {
      tmp1 = nums[pointer1 + 1];
      nums[pointer1] = tmp1;
      nums[pointer1 + 1 ] = el1;
    }
    pointer1++;

    // iterating from the end of the array
    let tmp2 = null;
    const el2 = nums[pointer2 - 1];
    if (el2 === 0) {
      tmp2 = nums[pointer2];
      nums[pointer2] = 0;
      nums[pointer2 - 1] = tmp2;
    }
    pointer2--;
  }
  console.log('-- nums', nums);
  return nums;
};


assert.deepStrictEqual(moveZeroes([ 0, 0, 1,0,3,12 ]), [ 1,3,12,0,0 ], 'Arrays are not equal');
