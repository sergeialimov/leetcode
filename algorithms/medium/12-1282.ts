function groupThePeople(groupSizes: number[]): number[][] {
  // Count how much times arr includes num
  function includesExtended(arr: number[], num: number): number {
    return arr.filter((x) => x === num).length;
  }

  // Function finds indexes of num
  // The number of indexes cannot be more than num
  function findIndexes(arr: number[], num: number, startPoint: number = 0): number[] {
    console.log('-- -- -- startPoint', startPoint);

    const res: number[] = [];
    for (let i = startPoint; i < arr.length; i++) {
      if (num === arr[i]) {
        res.push(i);
      }
      if (res.length >= num) {
        return res;
      }
    }
    return res;
  }


  const res: number[][] = [];
  const doneNumbers: number[] = [];

  for (let i = 0; i < groupSizes.length; i++) {
    const element = groupSizes[i];
    let tmp: number[] = [];

    const numofIncludes = includesExtended(doneNumbers, element);
    if (numofIncludes === 0) {
      tmp = findIndexes(groupSizes, element);
      res.push(tmp);
    } else if (numofIncludes === element) {
      tmp = findIndexes(groupSizes, element, i);
      res.push(tmp);
    }
    doneNumbers.push(element);
  }

  console.log('\n\n-- -- -- res\n', res);
  return res;
};

groupThePeople([2, 2, 1, 1, 1, 1, 1, 1]);
// groupThePeople([ 2, 1, 3, 3, 3, 2 ]);
// groupThePeople([ 3, 3, 3, 3, 3, 1, 3 ]);
