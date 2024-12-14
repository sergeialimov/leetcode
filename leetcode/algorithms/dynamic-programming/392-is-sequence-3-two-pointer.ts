
/**
 * 392. Is Subsequence
 * Given two strings s and t, return true if s is a subsequence of t, or false otherwise.
 *
 * A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).
 */
function isSubsequence (s: string, t: string): boolean {
  let i = 0;
  if (!s) return true;

  for (let j = 0; j < t.length; j++) {
    const elS = s[i];
    const elT = t[j];

    if (elS === elT) {
      if (i === s.length - 1) return true;
      i++;
    }
  }

  return false;
}


// const res = isSubsequence('abc', 'ahbgdc');
const res = isSubsequence('acb', 'ahbgdc');
console.log(res);
