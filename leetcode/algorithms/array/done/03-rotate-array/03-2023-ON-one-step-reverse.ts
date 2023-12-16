import { logArray } from 'helpers';

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

  // reverse array
  rotateArr(nums, 0, nums.length -1);
  logArray(nums, 'nums1');

  // rotate
  rotateArr(nums, 0, k - 1);
  logArray(nums, 'nums2');

  rotateArr(nums, k, nums.length -1);
  logArray(nums, 'nums3');
};

// const nums = [ 1,2,3,4,5 ];
const nums = [ 1,2,3,4,5,6,7 ];
// const expected = [ 4,5,1,2,3 ]
rotate(nums, 2);
