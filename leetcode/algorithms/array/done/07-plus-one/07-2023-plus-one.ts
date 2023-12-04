import assert from 'assert';
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable no-trailing-spaces */
function plusOne (digits: number[]): number[] {
  let num = BigInt((digits).join(''));
  num++;
  return num.toString().split('')
    .map(Number);
};

// plusOne([ 6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3 ]);
plusOne([ 1,2,3 ])
plusOne([ 6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3 ])
assert.deepStrictEqual(plusOne([ 1,2,3 ]), [ 1,2,4 ], 'Arrays are not equal');
assert.deepStrictEqual(plusOne([ 4,3,2,1 ]), [ 4,3,2,2 ], 'Arrays are not equal');
assert.deepStrictEqual(plusOne([ 9 ]), [ 1,0 ], 'Arrays are not equal');
assert.deepStrictEqual(plusOne([ 6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3 ]), [ 6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,4 ], 'Arrays are not equal');

