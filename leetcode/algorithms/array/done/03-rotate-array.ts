/**
 Do not return anything, modify nums in-place instead.
 */
function rotate (nums: number[], k: number): void {
  for (let i = 0; i < k; i++) {
    nums.unshift(nums.pop());
  }
};

console.log(rotate([ 1, 2, 3, 4, 5, 6, 7 ], 3));
