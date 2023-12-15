export function promiseAll(promises) {
  if (!promises.length) {
    return Promise.resolve([]);
  }

  return new Promise(async (resolve, reject) => {
    let counter = 0;
    const res = new Array(promises.length);

    for (let i = 0; i < promises.length; i++) {
      try {
        res[i] = await promises[i];
        counter++;
        if (counter === promises.length) {
          resolve(res);
        }
      } catch (e) {
        reject(e);
        break; // Exit the loop on first rejection
      }
    }
  });
}
