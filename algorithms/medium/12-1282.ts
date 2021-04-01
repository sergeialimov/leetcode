// Function finds indexes of num
// The number of indexes cannot be more than num
function findIndexes(arr: number[], num: number, startPoint: number): number[] {
  console.log('-- -- -- startPoint', startPoint);

  const res: number[] = [];
  for (let i = 0; i < arr.length; i++) {
    if (num === arr[i]) {
      res.push(i);
    }
    if (res.length >= num) {
      return res;
    }
  }
  return res;
  }



function groupThePeople(groupSizes: number[]): number[][] {
  const res: number[][] = [];
  let startPoint: number = 0;

  const doneNumbers: number[] = [];

  for (let i = 0; i < groupSizes.length; i++) {
    const element = groupSizes[i];
    let tmp: number[] = [];

    if (!doneNumbers.includes(element)) {
      tmp = findIndexes(groupSizes, element, startPoint);
      res.push(tmp);

      doneNumbers.push(element);
      console.log('-- -- -- tmp', tmp);
    }

  }

  console.log('\n\n-- -- -- res\n', res);
  return res;
};

groupThePeople([ 3, 3, 3, 3, 3, 1, 3 ]);
