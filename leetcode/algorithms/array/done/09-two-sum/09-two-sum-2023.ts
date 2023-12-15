function twoSum (nums: number[], target: number): number[] {
  const indexes = [];
  const hashMap = {};
  nums.forEach((x) => hashMap[x] = true);

  for (let i = 0; i < nums.length; i++) {
    const el = nums[i];
    
  }
};

// console.log(twoSum([ 3, 2, 4 ], 6 ));
console.log(twoSum([ 2,7,11,15 ], 9 ));
