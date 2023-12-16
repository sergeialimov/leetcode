import assert from 'assert';

function strStr (haystack: string, needle: string): number {
  const firstChar = needle[0];
  const len = needle.length;
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === firstChar) {
      const piece = haystack.slice(i, i + len);
      if (piece === needle) {
        return i;
      }
    }
  }
  return -1;
};

assert.strictEqual(strStr('sadbutsad', 'sad'), 0, 'Test 1 Failed');
assert.strictEqual(strStr('leetcode', 'leeto'), -1, 'Test 2 Failed');
assert.strictEqual(strStr('hello', 'll'), 2, 'Test 3 Failed');
