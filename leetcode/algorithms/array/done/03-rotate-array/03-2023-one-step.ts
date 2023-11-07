/* eslint-disable no-multiple-empty-lines */
/* eslint-disable no-trailing-spaces */
/**
 Do not return anything, modify nums in-place instead.
 */
function rotate (nums: number[], k: number): void {
  function move (): void {
    const lastEl = nums[nums.length -1];
    let cur = nums[0];
    for (let i = 0; i < nums.length - 1; i++) {
      const next = nums[i + 1];
      nums[i+k] = cur;
      cur = next;
    }
    nums[0] = lastEl;
  }
  move();
};

const nums = [ 1,2,3,4,5,6,7 ];
rotate(nums, 2);
console.log('-- nums', JSON.stringify(nums).split(',')
  .join(', '));
