/**
 * 392. Is Subsequence
 * Given two strings s and t, return true if s is a subsequence of t, or false otherwise.
 *
 * A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).
 */
function isSubsequence (s: string, t: string): boolean {
  interface Obj {
    value: string
    index: number[];
  }
  interface KeysMap {
    string: Obj;
  }

  const map: KeysMap = {} as KeysMap;
  for (let i = 0; i < t.length; i++) {
    const el = t[i];
    map[el] = map[el] || {};
    map[el].value = map[el]?.value[el] ? map[el].value + 1 : 1;
    map[el].index.push(i);
  }

  for (let i = 0; i < s.length; i++) {
    const el = s[i];

    if (!map[el]?.value || map[el] < 0) {
      return false;
    }
  }

  console.log(s, t);
  return true;
}


// isSubsequence('abc', 'ahbgdc');
isSubsequence('acb', 'ahbgdc');
