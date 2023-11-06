export function removeDuplicates (nums: number []): number {
  if (nums.length === 0) {
    return 0;
  }

  let i = 0;
  for (let j = 1; j < nums.length; j++) {
    if (nums[i] !== nums[j]) {
      i++;
      nums[i] = nums[j];
    }
  }

  nums.splice(i+1);

  return nums.length;
};

const nums = [ 0, 0, 1, 1, 1, 2, 2, 3, 3, 4 ];
// const nums = [ 1, 1, 1, 2, 2 ];
// const nums = [ 1, 1, 1, 1 ];
// const nums = [ 1, 1, 2 ];

const result = removeDuplicates(nums);

console.log('-- nums', nums);
console.log('-- res', result);
