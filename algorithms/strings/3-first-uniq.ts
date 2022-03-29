function firstUniqChar(s: string): number {
  const arr = s.split('');
  const set = new Set(arr);
  const arr2 = Array.from(set);
  let res = -1;

  for (let i = 0; i < arr2.length; i++) {
    const item = arr2[i];
    const index = arr.indexOf(item);
    arr[index] = null;
    if (!arr.includes(item)) { // check for uniqueness
      res = index;
      return index;
    }
  }
  return res;
};

const res = firstUniqChar('loveleetcode')
console.log('-- res', res);