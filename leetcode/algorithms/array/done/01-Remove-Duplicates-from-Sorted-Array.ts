export function removeDuplicates (nums: number[]): number {
  for(let i: number = 0; i < nums.length; i++) {
    if (nums[i + 1] === nums[i]) {
      nums.splice(i, 1);
      i--;
    }
  }
  // console.log('-- -- -- nums', nums);

  return nums.length;
};

const res = removeDuplicates([ 1,1,2 ]);
// const res = removeDuplicates([0,0,1,1,1,2,2,3,3,4]);
console.log('-- -- -- res', res);
