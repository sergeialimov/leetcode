/* eslint-disable no-multiple-empty-lines */
/* eslint-disable no-trailing-spaces */
import assert from 'assert';

function isAnagram (s: string, t: string): boolean {
  if (s.length !== t.length) {
    return false;
  }

  const count = {};

  for (let i = 0; i < t.length; i++) {
    count[s[i]] = (count[s[i]] || 0) + 1;
    count[t[i]] = (count[t[i]] || 0) - 1;
  }
  return Object.values(count).every((x) => x === 0);
};

assert.strictEqual(isAnagram('anagram', 'nagaram'), true, 'Test 1 Failed');
