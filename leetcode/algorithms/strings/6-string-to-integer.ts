import { testMyCode } from '../../../helpers/testMyCode';

const myAtoi = (s: string): number => {
  // ignore whitespace
  const cleaned = s.replace(/^\s+/, '');

  const max = 2**31 -1;
  const min = -(2**31);

  // check for + and - signs
  if (cleaned[0] === '-') {
    const substr = cleaned.substring(1);
    const numOnly = substr.match(/^\d+/);

    const res = Number(-numOnly);

    if (res < min) {
      return min;
    }
    return res;
  }

  if (cleaned[0] === '+') {
    const substr = cleaned.substring(1);
    const numOnly = substr.match(/^\d+/);
    const res = Number(numOnly);

    if (res > max) {
      return max;
    }
    return res;
  }

  const numOnly = cleaned.match(/^\d+/);
  const res = +numOnly;

  if (res > max) {
    return max;
  }
  return res;
}

const tests = [
  { param: '   -0042wer', expected: -42 },
  { param: '   +0041wer', expected: 41 },
  { param: '4193 with words', expected: 4193 },
  { param: '-91283472332', expected: -2147483648 },
  { param: '   +0 123', expected: 0 },
];

testMyCode(myAtoi, tests);
