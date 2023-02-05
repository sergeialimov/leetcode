interface Test {
  param: string,
  expected: number,
}

type Fun = (string) => number;

export const testMyCode = (fun: Fun, tests: Test[]): void => {
  let allTrue = true;
  tests.forEach((x) => {
    const res = fun(x.param);
    if (res !== x.expected) {
      console.error(
        `💩 Err with param: '${x.param}' : expected: ${x.expected} : actual: ${res}`);
      allTrue = false;
    } else {
      console.log(`👍 No error with param: '${x.param}' actual/expected: ${x.expected}`);
    }
  });
  console.log('Summary: your code is', allTrue ? '👍' : '💩');
}
