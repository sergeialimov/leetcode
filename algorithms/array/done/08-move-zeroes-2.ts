export {}

function moveZeroes(nums: number[]): void {
  let zeroIndex = -1;

  for (let i = 0; i < nums.length; i++) {
      if (nums[i] === 0) {
          if (zeroIndex === -1) {
              zeroIndex = i;
          }
      } else {
          if (zeroIndex !== -1) {
              const tmp = nums[i];
              nums[i] = 0;
              nums[zeroIndex] = tmp;

              zeroIndex++;
          }
      }
  }
};

moveZeroes([ 0, 0, 1, 0, 3, 12 ]);
