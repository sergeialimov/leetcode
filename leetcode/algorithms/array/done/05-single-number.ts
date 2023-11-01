function singleNumber (nums: number[]): number {
  const arr = nums.sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i+=2) {
    const el = arr[i];
    if (el !== arr[ i+1 ]) {
      return el;
    }
  }
};

console.log('singleNumber():', singleNumber([ 4, 1, 2, 1, 2 ]));
