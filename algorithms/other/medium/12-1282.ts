function groupThePeople(groupSizes: number[]): number[][] {
  // Count how much times arr includes num
  function includesExtended(arr: number[], num: number): number {
    return arr.filter((x) => x === num).length;
  }

  // Function finds indexes of num
  // The number of indexes cannot be more than num
  function findIndexes(arr: number[], num: number, startPoint: number = 0): number[] {
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
  let doneNumbers: number[] = [];

  for (let i = 0; i < groupSizes.length; i++) {
    const element = groupSizes[i];
    let tmp: number[] = [];

    const numOfIncludes = includesExtended(doneNumbers, element);
    if (numOfIncludes === 0) {
      tmp = findIndexes(groupSizes, element);
      res.push(tmp);
    } else if (numOfIncludes === element) {
      tmp = findIndexes(groupSizes, element, i);
      res.push(tmp);
      doneNumbers = [];
    }
    doneNumbers.push(element);
  }

  // console.log('\n\n', res);
  console.log('-- -- -- res\n', JSON.stringify(res).split(',').join(', '));
  return res;
};
const group = [3, 4, 3, 3, 4, 4, 3, 4, 3, 3];
const expected = [ [ 0, 2, 3 ], [ 1, 4, 5, 7 ], [ 6, 8, 9 ] ];
console.log('-- -- -- input\n', JSON.stringify(group).split(',').join(', '), '\n');
console.log('-- -- -- expected\n', JSON.stringify(expected).split(',').join(', '), '\n');

groupThePeople(group);







// const group = [2, 2, 1, 1, 1, 1, 1, 1];
// const group = [ 2, 1, 3, 3, 3, 2 ];
// const group = [ 3, 3, 3, 3, 3, 1, 3 ];