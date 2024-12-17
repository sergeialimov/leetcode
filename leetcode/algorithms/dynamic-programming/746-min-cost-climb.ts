/**
 *
 * 746. Min Cost Climbing Stairs
 *
 * You are given an integer array cost where cost[i] is the cost of ith step on a staircase.
 * Once you pay the cost, you can either climb one or two steps.
 *
 * You can either start from the step with index 0, or the step with index 1.
 *
 * Return the minimum cost to reach the top of the floor.
*/
function minCostClimbingStairs (cost: number[]): number {
  const el0 = cost[0];
  const el1 = cost[1];
  const el2 = cost[2];

  const way1 = el0 + el2;
  const way2 = el1;

  return way1 < way2 ? way1 : way2;
};


// const res = minCostClimbingStairs([ 10, 15, 20 ]);
// const res = minCostClimbingStairs([ 10, 20, 15 ]);
const res = minCostClimbingStairs([ 10, 20, 9 ]);
console.log(res);
