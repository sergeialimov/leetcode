function plusOne (digits: number[]): number[] {
  let tmp = '';
  for (let i = 0; i < digits.length; i++) {
    tmp += digits[i];
  }
  let num = BigInt(tmp);
  num++;
  const res = num.toString().split('')
    .map(Number);
  console.log('-- -- -- res', res);
  return res;
};

plusOne([ 6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3 ]);
