export {}

function containsDuplicate(nums: number[]): boolean {
  const set = new Set(nums)
  return set.size < nums.length
};

const res = containsDuplicate([ 1, 2, 3, 1 ]);
console.log('res:', res)
