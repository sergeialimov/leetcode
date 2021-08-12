function maximumWealth(accounts: number[][]): number {
  let arr: number[] = [];
  accounts.forEach(account => {
    arr.push(account.reduce(((sum, x) => sum +x)));
  });
  return Math.max(...arr)
};


maximumWealth([[1,2,3],[3,2,1]]);

// History of performance improvements
// Runtime: 72 ms, faster than 98.28% of TypeScript online submissions for Richest Customer Wealth.
// Memory Usage: 40.4 MB, less than 36.90% of TypeScript online submissions for Richest Customer Wealth.