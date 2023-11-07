function rotateArray (nums: number[]): void {
  let endInd = nums.length - 1;
  let curValue = nums[0];
  for (let i = 0; i < nums.length / 2; i++) {
    const endValue = nums[endInd];
    nums[i] = endValue;
    nums[endInd] = curValue;
    curValue = nums[i+1];
    endInd--;
  }
}

const nums = [ 1, 2, 3, 4 ,5 ];
rotateArray(nums);
console.log('-- nums', nums);
