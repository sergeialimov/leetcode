function isPalindrome (s: string): boolean {
  const str = s.toLowerCase().replace(/\W|_/g, '');
  const reversed = str.split('').reverse()
    .join('');
  return str === reversed;
}

const res = isPalindrome('ab_a');
console.log(res);
