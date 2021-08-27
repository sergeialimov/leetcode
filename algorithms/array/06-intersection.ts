function intersect(nums1: number[], nums2: number[]): number[] {
  const intersections = [];

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

  for (const key in counts1) {
    if (Object.prototype.hasOwnProperty.call(counts1, key)) {
      const el1 = counts1[key];
      const el2 = counts2[key];

      counts2[key] && intersections.push(Math.min(el1, el2));
    }
  }


  return intersections;
};

intersect([ 1, 2, 2, 1], [2, 2]);



// nums1.map((x) => {
//   if (nums2.includes(x)) {
//     obj[x]['num'] += 1;
//   }
// });
// obj[x]['indexes'].push(nums2.indexOf(x));
