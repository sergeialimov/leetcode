
/**
 * 392. Is Subsequence
 * Given two strings s and t, return true if s is a subsequence of t, or false otherwise.
 *
 * A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).
 */
function isSubsequence (s: string, t: string): boolean {
  let startFrom = 0;

  for (let i = 0; i < s.length; i++) {
    const sEl = s[i];
    let found = false;

    for (let j = startFrom; j < t.length; j++) {
      const tEl = t[j];
      if (tEl === sEl) {
        found = true;
        startFrom = j + 1;
        break;
      }
    }
    if (!found) {
      return false;
    }
  }

  return true;
}


// const res = isSubsequence('abc', 'ahbgdc');
const res = isSubsequence('acb', 'ahbgdc');
console.log(res);
