/**
 * In the move() function, cur initially holds the first element of the array. In each iteration, next is assigned the next element in the array, and then cur is assigned to the position one step ahead. This process shifts each element to the right by one position.
 */
function rotate (nums: number[], k: number): void {
  function move (): void {
    const lastEl = nums[nums.length -1];
    let cur = nums[0];
    for (let i = 0; i < nums.length - 1; i++) {
      const next = nums[i + 1];
      nums[i+1] = cur;
      cur = next;
    }
    nums[0] = lastEl;
  }
  for (let i = 0; i < k; i++ ) {
    move();
  }
};

const nums = [ 1, 2, 3, 4 ];
// const nums = [ 1,2,3,4,5,6,7 ];
rotate(nums, 2);
console.log('-- nums', JSON.stringify(nums).split(',')
  .join(', '));
