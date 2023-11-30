export {}

function containsDuplicate (nums: number[]): boolean {
  if (nums.length === 0 || nums.length === 1) {
    return false;
  }
  const arr = [];
  let res = false;
  nums.map((x) => {
    if (arr.includes(x)) {
      res = true;
    }
    arr.push(x);
  });
  return res;
};

const res = containsDuplicate([ 1, 2, 3, 1 ]);
console.log('res:', res)
