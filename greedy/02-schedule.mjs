/* eslint-disable no-multiple-empty-lines */
/* eslint-disable no-trailing-spaces */

function schedule(priority, time, num) {
  let scores = [];

  for (let i = 0; i < num; i++) {
    scores.push({ score: priority[i], index: i});
  }

  scores.sort((a, b) => a.score - b.score);

  let completionTime = 0;
  let objectiveFunction = 0;
  
  for (let i = 0; i < num; i++) {
    completionTime += time[scores[i].index];
    objectiveFunction += priority[scores[i].index] * completionTime;
  }

  return objectiveFunction;
}


const priorities = [ 10, 20, 30];
const time = [ 2, 4, 5 ];
const num = priorities.length;


const res = schedule(priorities, time, num);

console.log('--res', res);
