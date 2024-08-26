/* eslint-disable no-multiple-empty-lines */
/* eslint-disable no-trailing-spaces */
const things = [5,3,4,2,1];
const limit = 6;
things.sort();


let numberOfThing = 0;

let index = 0;
while (index + 1 < things.length && numberOfThing + things[index + 1] <= limit) {
  numberOfThing += things[index];
  index++;
}


console.log('--numberOfThing', numberOfThing);
