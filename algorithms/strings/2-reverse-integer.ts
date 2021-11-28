import { strict as assert } from 'assert';
function reverse(x: number): number {
  const s = x.toString();
  const sArr = s.split('');
  const length =  Math.floor(sArr.length / 2);

  for (let i = 0; i < length; i++) {
    const first = sArr[i];
    const last = sArr[sArr.length - 1 - i];

    // assign first to last
    sArr[sArr.length - 1 - i] = first;

    // assign last to first
    sArr[0 + i] = last
  }
  
  return Number(sArr.join(''));
};

const input = 123;
const expected = 321;
const res = reverse(input);

console.log('-- -- -- input', input);
console.log('-- -- -- res', res);

// const msg = `${expected} !== ${res}`
assert(expected === res);
