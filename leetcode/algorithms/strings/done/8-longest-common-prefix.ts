/* eslint-disable no-multiple-empty-lines */
/* eslint-disable no-trailing-spaces */
/* cSpell:disable */
import assert from 'assert';

function longestCommonPrefix (strs: string[]): string {
  // define shortest word
  let shortestWord =strs[0];
  strs.forEach((word) => {
    if (word.length < shortestWord.length) {
      shortestWord = word;
    }
  })
  if (!shortestWord.length) {
    return '';
  }

  let lcp = shortestWord[0];
  
  let i = 0;
  outer: while (i <= shortestWord.length) {
    for (let j = 0; j < strs.length; j++) {
      const currentWord = strs[j];
      const regex = new RegExp('\\b' + lcp);
      if (!currentWord.match(regex)) {
        lcp = lcp.slice(0, i);
        break outer;
      }
    }
    i++;
    lcp = `${lcp}${shortestWord[i]}`
  }
  return lcp;
};

assert.strictEqual(longestCommonPrefix([ 'flower','flow','flight' ]), 'fl', 'Test 1 Failed');
assert.strictEqual(longestCommonPrefix([ 'dog', 'racecar', 'car' ]), '', 'Test 2 Failed');
assert.strictEqual(longestCommonPrefix([ 'ab', 'a' ]), 'a', 'Test 3 Failed');
assert.strictEqual(longestCommonPrefix([ '' ]), '', 'Test 4 Failed');
assert.strictEqual(longestCommonPrefix([ 'reflower','flow','flight' ]), '', 'Test 5 Failed');
assert.strictEqual(longestCommonPrefix([ 'a', 'b' ]), '', 'Test 6 Failed');
