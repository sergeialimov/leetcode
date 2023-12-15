import assert from 'assert';
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable no-trailing-spaces */
function twoSum (nums: number[], target: number): number[] {
  const indexes = [];
  const hashMap = {};
  nums.forEach((x) => hashMap[x] = true);

  outerLoop: for (let i = 0; i < nums.length; i++) {
    const el1 = nums[i];

    for (let j = 0; j < nums.length; j++) {
      const el2 = nums[j];
      if (hashMap[el2] && el1 !== el2) {
        if (el1 + el2 === target) {
          indexes.push(i, j);
          break outerLoop;
        } else {
          hashMap[el1] = false;
        }
      }
    }
  }

  return indexes;
};

// console.log(twoSum([ 3, 2, 4 ], 6 ));
// console.log(twoSum([ 2,7,11,15 ], 9 ));

assert.deepStrictEqual(twoSum([ 2,7,11,15 ], 9 ), [ 0, 1 ], 'Arrays are not equal');
assert.deepStrictEqual(twoSum([ 3, 2, 4 ], 6 ), [ 1, 2 ], 'Arrays are not equal');
