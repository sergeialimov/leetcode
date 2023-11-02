export {};

function intersect (nums1: number[], nums2: number[]): number[] {
  const intersections = [];

  /**
   * returns
   * {
   *   1: 2,
   *   2: 2,
   * }
   */
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const countArrItems = (arr) => {
    const counts = {}
    arr.map((x) => {
      counts[x] ??= 0;
      counts[x]++;
    });
    return counts;
  }

  const counts1 = countArrItems(nums1);
  const counts2 = countArrItems(nums2);

  /**
   *
   */
  for (const key in counts1) { // key: 1
    if (Object.prototype.hasOwnProperty.call(counts1, key)) {
      const valueArr1 = counts1[key];
      const valueArr2 = counts2[key];

      // number of intersections
      const num = Math.min(valueArr1, valueArr2);
      // if key appears in both arrays, push
      if (valueArr2) {
        for (let i = 0; i < num; i++) {
          intersections.push(key);
        }
      }
    }
  }

  console.log('-- -- -- intersections', intersections);

  return intersections;
};

intersect([ 1, 2, 2, 1, 3 ], [ 2, 2, 3 ]);
