/* eslint-disable no-multiple-empty-lines */
/* eslint-disable no-trailing-spaces */
/**
 * Calculate New Positions: For each element, you calculate its new position directly and place it there. The new position for an element at index i in an array of length n and rotation count k can be calculated as (i + k) % n.
 */

// The number of cycles you need to perform is typically determined by the greatest common divisor (GCD) of the array length and the rotation count k
function rotate1 (nums: number[], k: number): void {
  const n = nums.length;
  let j = 0;
  while (j < k) {
    let cur = nums[j];
    const lastEl = nums[n - k + j];
    for (let i = j; i < n-k; i += k) {
      const index = (i + k) % n;
      const next = nums[index];
      nums[index] = cur;
      cur = next;
    }
    nums[j] = lastEl;
    j++;
  }
};


const nums = [ 1, 2, 3, 4, 5, 6 ];
// const nums = [ 1,2,3,4,5,6,7 ];
rotate1(nums, 2);
console.log('-- nums', JSON.stringify(nums).split(',')
  .join(', '));
