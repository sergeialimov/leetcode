/* eslint-disable no-multiple-empty-lines */
/* eslint-disable no-trailing-spaces */
import assert from 'assert';

function isAnagram (s: string, t: string): boolean {
  const obj = {};

  s.split('').forEach((x) => (obj.hasOwnProperty(x) ? obj[x]++ : obj[x] = 1) )

  const tArr = t.split('');
  for (let i = 0; i < tArr.length; i++) {
    const x = tArr[i];
    if (obj.hasOwnProperty(x) && obj[x] > 0) {
      obj[x]--;
    } else {
      return false;
    }
  }

  return Object.values(obj).filter((x) => x !== 0).length === 0;
};

assert.strictEqual(isAnagram('anagram', 'nagaram'), true, 'Test 1 Failed');
