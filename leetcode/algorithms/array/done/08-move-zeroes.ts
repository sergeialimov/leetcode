/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes (nums: number[]): void {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      nums.splice(i, 1);
      i--;
      count++;
    }
  }
  for (let i = 0; i < count; i++) {
    nums.push(0);
  }
  console.log('-- -- -- nums', nums);
};

moveZeroes([ 0, 1, 0, 3, 12 ]);
