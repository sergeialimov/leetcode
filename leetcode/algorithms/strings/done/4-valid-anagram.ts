function isAnagram (s: string, t: string): boolean {
  const s2 = s.split('').sort()
    .toString();
  const t2 = t.split('').sort()
    .toString();
  return s2 === t2;
  // split, sort, compare
}

function isAnagram2 (s: string, t: string): boolean {
  // assign to object, count appearences
}

const res = isAnagram('anagram', 'nawaram');
const res = isAnagram2('anagram', 'nawaram');

console.log(res);
