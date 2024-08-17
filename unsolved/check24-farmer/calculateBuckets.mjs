/* eslint-disable no-multiple-empty-lines */
/* eslint-disable no-trailing-spaces */
import { testTomatoesShort } from './test-tomatoes.mjs';

const bucketLimits = {
  size: 7,
  weight: 400,
  score: 1500,
}

function calculateScore () {
  const res = testTomatoesShort.map((tomato) => ({
    ...tomato,
    score: tomato.size * tomato.weight,
  }));
  console.log('-- res', res);
  return res;
}

const tomatoesWithScores = calculateScore();
const sortedByScore = tomatoesWithScores.sort((a, b) => b.score - a.score);
// console.log('-- sortedByScore', sortedByScore);

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
        bucket.score + tomato.score <= bucketLimits.score &&
        bucket.size + tomato.size <= bucketLimits.size &&
        bucket.weight + tomato.weight <= bucketLimits.weight &&
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
console.log('-- res', res);
