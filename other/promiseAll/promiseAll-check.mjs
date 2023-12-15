/* eslint-disable no-multiple-empty-lines */
/* eslint-disable no-trailing-spaces */
async function promiseAll(promises) {
  if (!promises.length) {
    return Promise.resolve([]);
  }
  return new Promise((resolve, reject) => {
    let counter = 0;
    const res = new Array(promises.length);

    promises.forEach((promise, i) => {
      promise
        .then((value) => {
          res[i] = value;
          counter++
          if (counter === promises.length) {
            resolve(res);
          }
        })
        .catch((e) => {
          throw e;
        })
    });
  })
}
