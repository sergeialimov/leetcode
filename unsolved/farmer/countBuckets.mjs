/* eslint-disable no-multiple-empty-lines */
/* eslint-disable no-trailing-spaces */
import { testTomatoesShort, testTomatoesLong, bucketCapacity } from './constants.mjs';
import { calculateScore } from './utils.mjs';
import * as fs from 'node:fs/promises';

const tomatoesWithScores = calculateScore(testTomatoesLong);
const sortedByScore = tomatoesWithScores.sort((a, b) => b.score - a.score);

function putToBuckets (tomatoes) {
  const res = [];
  let counter = tomatoes.length;
  let id = 0;
  while (counter > 0) {
    const bucket = {
      id,
      size: 0,
      weight: 0,
      score: 0,
      tomatoes: [],
    }

    tomatoes.forEach((tomato) => {
      if (
        bucket.score + tomato.score <= bucketCapacity.score &&
        bucket.size + tomato.size <= bucketCapacity.size &&
        bucket.weight + tomato.weight <= bucketCapacity.weight &&
        !tomato.added
      ) {
        bucket.tomatoes.push(tomato);
        bucket.size += tomato.size;
        bucket.weight += tomato.weight;
        bucket.score += tomato.score;
        tomato.added = true;
        counter--;
      }
    })
    res.push(bucket);
    id++;
  }
  return res;
}

const res = putToBuckets(tomatoesWithScores);
// console.log('-- res', res);
// console.log('--res', JSON.stringify(res, null, 2));
fs.writeFile('/Users/dev/projects/dev/challenges/unsolved/farmer/result/buckets-2.json', JSON.stringify(res));
