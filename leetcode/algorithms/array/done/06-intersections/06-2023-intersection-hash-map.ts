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
function intersect (nums1: number[], nums2: number[]): number[] {
  const res: number[] = [];
  const hashMap = {};

  // filling hashMap
  nums1.forEach((x) => {
    if (!hashMap[x]) {
      hashMap[x] = 1;
    } else {
      hashMap[x]++;
    }
  })

  // checking items from nums2 from hashMap
  nums2.forEach((x) => {
    if (hashMap[x]) {
      res.push(x);
      hashMap[x]--;
    }
  })

  return res;
};

assert.deepStrictEqual(intersect([ 1,2,2,1 ], [ 2, 2 ]), [ 2, 2 ], 'Arrays are not equal');
assert.deepStrictEqual(intersect([ 4,9,5 ], [ 9,4,9,8,4 ]), [ 9, 4 ], 'Arrays are not equal');



/**
 * 
Summary

The time complexity of the solution is O(n + m), and the space complexity is O(n), where n is the length of nums1 and m is the length of nums2. This solution is efficient in terms of time but uses additional space for the hash map.
 */
