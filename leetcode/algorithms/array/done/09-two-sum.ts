function twoSum(nums: number[], target: number): number[] {
  const indexes = [];
  const limit = nums.length;
  for (let i = 0; i < limit; i++) {
    const el = nums[i];

    for (let l = i + 1; l < limit; l++) {
      const el2 = nums[l];
      if (el + el2 === target) {
        indexes.push(i, l);
        return indexes;
      }
    }
  }
};

// console.log(twoSum([ 3, 2, 4 ], 6 ));
console.log(twoSum([ 2,7,11,15], 9 ));

