export function reverse (x: number): number {
  const s = x.toString();
  const sArr = s.split('');
  const isNegative = sArr[0] === '-';
  if(isNegative) {
    sArr.shift();
  }
  const length =  Math.floor(sArr.length / 2);

  for (let i = 0; i < length; i++) {
    const first = sArr[i];

    const last = sArr[sArr.length - 1 - i];

    // assign first to last
    sArr[sArr.length - 1 - i] = first;

    // assign last to first
    sArr[0 + i] = last
  }

  const num = Number(sArr.join(''));
  const res = isNegative ? num * -1 : num;
  if (res > 2147483648 - 1 || res < -2147483648) {
    return 0;
  }
  return res;
};

const input = -123;
const expected = -321;
const res = reverse(input);

console.log('-- -- -- input', input);
console.log('-- -- -- res', res);

// const msg = `${expected} !== ${res}`
// assert(expected === res);
