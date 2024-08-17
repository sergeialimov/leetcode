// what is a score
export function calculateScore (tomatoes) {
  const res = tomatoes.map((tomato) => ({
    ...tomato,
    score: tomato.size * tomato.weight,
  }));
  // console.log('-- res', res);
  return res;
}
