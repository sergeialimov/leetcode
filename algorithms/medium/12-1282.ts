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

  for (let i = 0; i < groupSizes.length; i++) {
    const element = groupSizes[i]; // 3
    const tmp = findIndexes(groupSizes, element, startPoint);
    res.push(tmp);
    if (tmp.length >= element) {
      startPoint = tmp.length;
      // startPoint = tmp[tmp.length];
    }
    console.log('-- -- -- tmp', tmp);
  }
  
  console.log('\n\n-- -- -- res\n', res);
  return res;
};

groupThePeople([ 3, 3, 3, 3, 3, 1, 3 ]);
