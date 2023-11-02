export {};

function runningSum (nums: number[]): number[] {
  const arr: number[] = [ ];
  let sum: number = 0;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[ i ];
    arr.push(sum);
  }

  return arr;
};

const input = [ 1, 2, 3, 4 ];

runningSum(input);

// Output: [1,3,6,10]

// History of performance improvements
// Runtime: 96 ms, faster than 25.92% of TypeScript online submissions for Running Sum of 1d Array.
// Memory Usage: 40.8 MB, less than 14.14% of TypeScript online submissions for Running Sum of 1d Array.

// Runtime: 84 ms, faster than 80.10% of TypeScript online submissions for Running Sum of 1d Array.
// Memory Usage: 40.3 MB, less than 53.66% of TypeScript online submissions for Running Sum of 1d Array.

// Runtime: 80 ms, faster than 90.58% of TypeScript online submissions for Running Sum of 1d Array.
// Memory Usage: 40.2 MB, less than 71.73% of TypeScript online submissions for Running Sum of 1d Array.
