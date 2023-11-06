export function removeDuplicates (nums: number []): number {
  const set = new Set(nums);
  nums.length = 0;
  nums.push(...set.values());
  return set.size;
};

// const nums = [ 0, 0, 1, 1, 1, 2, 2, 3, 3, 4 ];
// const nums = [ 1, 1, 1, 2, 2 ];
// const nums = [ 1, 1, 1, 1 ];
const nums = [ 1, 1, 2 ];

const result = removeDuplicates(nums);

console.log('-- res', result);
