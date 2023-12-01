import assert from 'assert';

/* eslint-disable no-multiple-empty-lines */
/* eslint-disable no-trailing-spaces */

/**
 * Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.
 */


/**
 * Constraints:
    1 <= nums1.length, nums2.length <= 1000
    0 <= nums1[i], nums2[i] <= 1000
 */

/**
 * Follow up:
    - What if the given array is already sorted? How would you optimize your algorithm?
    - What if nums1's size is small compared to nums2's size? Which algorithm is better?
    - What if elements of nums2 are stored on disk, and the memory is limited such that you cannot load all elements into the memory at once?
 */

// solution for sorted arrays
function intersect (nums1: number[], nums2: number[]): number[] {
  const res: number[] = [];

  let i = 0;
  
  for (let j = 0; j < nums1.length; j++) {
    const pointer1 = nums1[i];
    const pointer2 = nums2[j];
    if (pointer1 === pointer2) {
      res.push(pointer2);
      i++;
    } else if (pointer1 < pointer2) {
      i++;
      j--;
    } else if (pointer1 > pointer2) {
      // do nothing. pointer1 will remain the same.
      // j will be incremented and pointer2 will receive the next value
    }

    if (i === nums1.length) {
      break;
    }
    // i++;
  }
  return res;
};

assert.deepStrictEqual(intersect([ 1,1,2,2 ], [ 2, 2 ]), [ 2, 2 ], 'Arrays are not equal');
assert.deepStrictEqual(intersect([ 3, 4 ], [ 2, 4 ]), [ 4 ], 'Arrays are not equal');
