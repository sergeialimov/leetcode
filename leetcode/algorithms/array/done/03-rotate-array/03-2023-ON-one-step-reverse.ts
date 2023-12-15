// /* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable newline-per-chained-call */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable no-trailing-spaces */
function rotate (nums: number[], k: number): void {
  k %= nums.length;
  function rotateArr (arr: number[], startInd: number, endInd: number): void {
    while (startInd < endInd) {
      const temp = nums[startInd];
      nums[startInd] = nums[endInd];
      nums[endInd] = temp;
      startInd++;
      endInd--;
    }
  }

  rotateArr(nums, 0, nums.length -1);
  rotateArr(nums, 0, k - 1);
  rotateArr(nums, k, nums.length -1);
};

// const nums = [ 1,2,3,4,5 ];
const nums = [ 1,2,3,4,5,6,7 ];
// const expected = [ 4,5,1,2,3 ]
rotate(nums, 20);

console.log('-- nums', JSON.stringify(nums).split(',').join(', '));


