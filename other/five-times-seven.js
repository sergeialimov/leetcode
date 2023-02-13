const createExpression = (operand1, param) => {
  return new Function(`return ${operand1} ${param.operation} ${param.operand2}`)();
};

const seven = (param) => {
  if (!param) {
    return 7;
  }
  return createExpression(7, param);
};

const times = (operand) => ({
  operation: '*',
  operand2: operand,
});

const five = (param) => {
  if (!param) {
    return 5;
  }
  return createExpression(5, param);
};

// const res = seven(times(five())) // 35
const res = five(times(seven())) // 35
// console.log(res);
