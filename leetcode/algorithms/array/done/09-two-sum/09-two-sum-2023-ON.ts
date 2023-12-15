import assert from 'assert';
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable no-trailing-spaces */
function twoSum (nums: number[], target: number): number[] {
  const indexes = [];
  const hashMap = {}; // key: nums[i], value: i

  nums.forEach((a, i) => {
    if (!hashMap.hasOwnProperty(a)) {
      hashMap[a] = i;
    }
    const desired = target - a;
    const j = hashMap[desired];
    if (hashMap.hasOwnProperty(desired) && j !== i)  {
      indexes.push(i, hashMap[desired]);
    }
  })
  return indexes;
};

// twoSum([ 2,7,11,15 ], 9 );
// console.log(twoSum([ 3, 2, 4 ], 6 ));
// console.log(twoSum([ 2,7,11,15 ], 9 ));

assert.deepStrictEqual(twoSum([ 2,7,11,15 ], 9 ), [ 1, 0 ], 'Arrays are not equal');
assert.deepStrictEqual(twoSum([ 3, 2, 4 ], 6 ), [ 2, 1 ], 'Arrays are not equal');
assert.deepStrictEqual(twoSum([ 3, 3 ], 6 ), [ 1, 0 ], 'Arrays are not equal');
