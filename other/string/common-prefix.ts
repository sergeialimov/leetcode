import assert from 'assert';

function commonPrefix (inputs: string[]): number[] {
  const calculateSumOfCommonPrefixes = (str: string): number => {
    let sum = 0;

    for (let i = 0; i <= str.length; i++) {
      const suffix = str.substring(i);
      let commonPrefixLength = 0;

      // Compare the original string and the suffix character by character
      for (let j = 0; j < suffix.length; j++) {
        const char = str.charAt(j);
        const suffixChar = suffix.charAt(j);
        if (char === suffixChar) {
          commonPrefixLength++;
        } else {
          break;
        }
      }

      sum += commonPrefixLength;
    }

    return sum;
  };

  return inputs.map(calculateSumOfCommonPrefixes);
}

try {
  /* cSpell:disable */

  // Default test cases
  assert.deepStrictEqual(commonPrefix([ 'ababaa' ]), [ 11 ], 'Test case 1 failed');
  assert.deepStrictEqual(commonPrefix([ 'aa' ]), [ 3 ], 'Test case 2 failed');

  // Single character repeated, all prefixes match
  assert.deepStrictEqual(commonPrefix([ 'abc' ]), [ 3 ], 'Test case 3 failed');

  // No repeated characters, only the full string matches
  assert.deepStrictEqual(commonPrefix([ 'xyz' ]), [ 3 ], 'Test case 4 failed');

  // Single character string
  assert.deepStrictEqual(commonPrefix([ 'a' ]), [ 1 ], 'Test case 5 failed');

  // ['abacaba'] - Pattern with repetitions
  assert.deepStrictEqual(commonPrefix([ 'abacaba' ]), [ 12 ], 'Test case 6 failed');

  // ['abcd', 'aabb', 'abc'] - Multiple strings with different patterns
  assert.deepStrictEqual(commonPrefix([ 'abcd', 'aabb', 'abc' ]), [ 4, 5, 3 ], 'Test case 7 failed');

  // ['', 'abc'] - Including an empty string and simple string
  assert.deepStrictEqual(commonPrefix([ '', 'abc' ]), [ 0, 3 ], 'Test case 8 failed');

  // ['noon'] - Palindrome string
  assert.deepStrictEqual(commonPrefix([ 'noon' ]), [ 5 ], 'Test case 9 failed');

  // Empty input
  assert.deepStrictEqual(commonPrefix([]), [], 'Test case 10 failed');

  // Large input
  assert.deepStrictEqual(commonPrefix([ 'a'.repeat(10 ** 5) ]), [ 5000050000 ], 'Test case 11 failed');

  console.log('All test cases passed!');
} catch (error) {
  console.error(`Error: ${error.message} Expected: ${error.expected} Actual: ${error.actual}`);
}
