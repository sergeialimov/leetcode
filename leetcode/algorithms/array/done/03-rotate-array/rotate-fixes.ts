function rotateArray (nums: number[]): void {
  let startInd = 0;
  let endInd = nums.length - 1;

  while (startInd < endInd) {
    // Swap the elements
    const temp = nums[startInd];
    nums[startInd] = nums[endInd];
    nums[endInd] = temp;
    // Move towards the middle of the array
    startInd++;
    endInd--;
  }
}

const nums = [ 1, 2, 3, 4 ,5 ];
rotateArray(nums);
console.log('-- nums', nums);
