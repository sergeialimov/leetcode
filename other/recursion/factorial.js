const factorial = (num) => {
  if (num === 0) return 1;
  return num * factorial(num - 1);
}

const res = factorial(3)
console.log(res)
