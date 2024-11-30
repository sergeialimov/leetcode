/**
 * You are climbing a staircase. It takes n steps to reach the top.
 *
 * Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
 * @param n - number of stairs
 */
function climbStairs (n: number): number {
  if (n === 0) {
    return 0;
  }

  if (n === 1) {
    return 1;
  }


  let numOfStepsNumMinus1 = 1;
  let numOfStepsNumMinus2 = 1;

  let numberOfSteps = 0;

  for (let i = 2; i <= n; i++) {
    numberOfSteps = numOfStepsNumMinus2 + numOfStepsNumMinus1;

    numOfStepsNumMinus2 = numOfStepsNumMinus1;
    numOfStepsNumMinus1 = numberOfSteps;
  }

  return numberOfSteps;
};


const res = climbStairs(5);
console.log(res);

