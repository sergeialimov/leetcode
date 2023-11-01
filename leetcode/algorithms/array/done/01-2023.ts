export function removeDuplicates (nums: (number | string) []): number {
  for (let i = 1; i < nums.length; i++) {
    const el = nums[i];
    const next = nums[i + 1];
    if (el === next) {
      nums[i + 1] = '_';
    }
    console.log('-- nums', nums);
    const res = nums.filter((x) => x !== '_');
    return res.length;
  }
  return 0;
};

const nums = [ 1, 1, 2 ];

const res = removeDuplicates(nums);

console.log('-- res', res);
