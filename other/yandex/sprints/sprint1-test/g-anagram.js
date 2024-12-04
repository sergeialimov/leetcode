function isAnagram(str, str2) {
  if (str.length !== str2.length) {
    return false;
  }

  const map = {};

  for (let i = 0; i < str.length; i++) {
    const el = str[i];
    const el2 = str2[i];
    map[el] = map[el] ? map[el] + 1 : 1;
    map[el2] = map[el2] ? map[el2] - 1 : -1;
  }

  const values = Object.values(map);
  let sum = 0;
  for (let i = 0; i < values.length; i++) {
    if (values[i] !== 0) {
      return false;
    }
  }

  return sum === 0;
}

const str = 'мошкара';
const str2 = 'ромашка';
const str3 = 'кошка';
const str4 = 'лошка';


const res = isAnagram(str, str2);
const res2 = isAnagram(str3, str4);

console.log('--res', res);
console.log('--res2', res2);