// const assert = require('assert');
import assert from 'assert';
/**
 * You must implement a solution with a linear runtime complexity and use only constant extra space.
 */

function singleNumber (nums: number[]): number {
  const arr: number[] = new Array(60001).fill(0);
  const offset = 30001;
  let res = 0;

  // assigning numbers to arr
  nums.forEach((el) => {
    if (el >= 0) {
      arr[el]++;
    } else {
      arr[ offset + el * -1]++
    }
  })

  for (let i = 0; i < arr.length; i++) {
    const el = arr[i];
    if (el === 1) {
      if (i < 30001 ) {
        res = i;
      } else {
        res = i - 30000 * -1;
      }
    }

  }
  return res;
}

assert.strictEqual(singleNumber([ 4,1,2,1,2 ]), 4, 'Test 1 Failed');
assert.strictEqual(singleNumber([ 2 ]), 2, 'Test 2 Failed');
assert.strictEqual(singleNumber([ 2, 2, 1 ]), 1, 'Test 3 Failed');
