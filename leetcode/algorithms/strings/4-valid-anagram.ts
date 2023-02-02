function isAnagram (s: string, t: string): boolean {
  const s2 = s.split('').sort().toString();
  const t2 = t.split('').sort().toString();
  return s2 === t2;
  // split, sort, compare
}

const res = isAnagram('anagram', 'nawaram');

console.log(res);
