function shuffle(nums: number[], n: number): number[] {
  const firstHalf = nums.slice(0, n);
  const secondHalf = nums.slice(n);

  const res: number[] = [];
  for (let i = 0; i < N; i++) {
    res.push(firstHalf[i]);
    res.push(secondHalf[i]);
  }

  return res;
};

shuffle([1,2,3,4,4,3,2,1], 4);