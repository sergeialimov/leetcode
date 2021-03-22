function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
  const max = Math.max(...candies);
  const res = candies.map((x) => {
    if (x + extraCandies >= max) {
      return true;
    }
    return false;
  });

  return res;
};

kidsWithCandies([2,3,5,1,3], 3);

// History of performance improvements
// Runtime: 84 ms, faster than 75.35% of TypeScript online submissions for Kids With the Greatest Number of Candies.
// Memory Usage: 40.2 MB, less than 63.26% of TypeScript online submissions for Kids With the Greatest Number of Candies.