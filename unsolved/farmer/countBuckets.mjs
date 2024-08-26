/* eslint-disable no-multiple-empty-lines */
/* eslint-disable no-trailing-spaces */
с

const res = putToBuckets(tomatoesWithScores);
// console.log('-- res', res);
// console.log('--res', JSON.stringify(res, null, 2));
fs.writeFile('/Users/dev/projects/dev/challenges/unsolved/farmer/result/buckets-2.json', JSON.stringify(res));
