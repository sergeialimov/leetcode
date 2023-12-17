import assert from 'assert';

/**
 * Knuth-Morris-Pratt (KMP) Algorithm: This algorithm preprocesses the needle to create a longest prefix suffix (LPS) array. This preprocessing helps in skipping characters while matching, reducing the number of comparisons significantly.
 */
function computeLPSArray (needle): number[] {
  const lps = new Array(needle.length).fill(0);
  let length = 0;
  let i = 1;

  while (i < needle.length) {
    if (needle[i] === needle[length]) {
      length++;
      lps[i] = length;
      i++;
    } else {
      if (length !== 0) {
        length = lps[length - 1];
      } else {
        lps[i] = 0;
        i++;
      }
    }
  }
  return lps;
}

function KMPSearch (haystack, needle): number {
  if (needle.length === 0) {
    return 0;
  }
  const lps = computeLPSArray(needle);
  let i = 0; // index for haystack
  let j = 0; // index for needle

  while (i < haystack.length) {
    if (needle[j] === haystack[i]) {
      i++;
      j++;
    }
    if (j === needle.length) {
      return i - j; // found the match
    } else if (i < haystack.length && needle[j] !== haystack[i]) {
      if (j !== 0) {
        j = lps[j - 1];
      } else {
        i++;
      }
    }
  }
  return -1; // no match found
}

// Test cases
assert.strictEqual(KMPSearch('sadbutsad', 'sad'), 0, 'Test 1 Failed');
assert.strictEqual(KMPSearch('leetcode', 'leeto'), -1, 'Test 2 Failed');
assert.strictEqual(KMPSearch('hello', 'll'), 2, 'Test 3 Failed');
