import assert from 'assert';

/* eslint-disable no-multiple-empty-lines */
/* eslint-disable no-trailing-spaces */
function moveZeroes (nums: number[]): number[] {
  const newArr = new Array(nums.length);
  let pointer = 0
  let pointer2 = newArr.length - 1;
  nums.forEach((x) => {
    if (x !== 0) {
      newArr[pointer] = x;
      pointer++;
    } else {
      newArr[pointer2] = 0;
      pointer2--;
    }
  });
  console.log('-- newA', newArr);
  return newArr;
};


assert.deepStrictEqual(moveZeroes([ 0, 0, 1,0,3,12 ]), [ 1,3,12,0,0, 0 ], 'Arrays are not equal');
