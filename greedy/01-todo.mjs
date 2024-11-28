/**
 *
 *
 *
 * @param things
 * @param limit
 * @returns {number}
 */
function countNumberOfThings (things, limit) {
  things.sort();
  console.log(things);

  let numberOfThing = 0;

  let index = 0;
  while (index <= things.length && numberOfThing + things[index + 1] <= limit) {
    numberOfThing += things[index];
    index++;
  }

  return numberOfThing;
}


const limit = 6;
const things = [5,3,4,2,1];
const res = countNumberOfThings(things, limit);

console.log('--res', res);
