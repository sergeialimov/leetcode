function defangIPaddr (address: string): string {
  return address.replace(/[.]/g, '[.]');
};

const input: string = '1.1.1.1';
console.log('-- -- -- ', defangIPaddr(input));

defangIPaddr(input);

export {};

// History of performance improvements
// Runtime: 68 ms, faster than 99.43% of TypeScript online submissions for Defanging an IP Address.
// Memory Usage: 39 MB, less than 77.71% of TypeScript online submissions for Defanging an IP Address.
