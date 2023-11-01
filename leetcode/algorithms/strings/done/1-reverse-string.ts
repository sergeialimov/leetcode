function reverseString (s: string[]): void {
  for (let i = 0; i < s.length / 2; i++) {
    const first = s[i];
    const last = s[s.length - 1 - i];

    // assign first to last
    s[s.length - 1 - i] = first;

    // assign last to first
    s[0 + i] = last
  }
};

const input = [ 'H','a','n','n','a','h' ];
const expected = [ 'H','a','n','n','a','h' ];

// const input = ["h","e","l","l","o"];
// const expected = ["o","l","l","e","h"];

console.log('-- -- -- input 1', input);
const res = reverseString(input);
console.log('-- -- -- input 2', res);

assert(input === expected)
