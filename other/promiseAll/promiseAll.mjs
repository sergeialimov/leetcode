/* eslint-disable no-multiple-empty-lines */
/* eslint-disable no-trailing-spaces */
import assert from 'assert';

// const resolvedPromise1 = Promise.resolve(1);
// const resolvedPromise2 = Promise.resolve(2);
// const rejectedPromise = new Promise((resolve, reject) => {
//   setTimeout(() => reject(new Error('rejected promise')), 100);
// });

// const resolvedPromises = [resolvedPromise1, resolvedPromise2];
// const rejectedPromises = [resolvedPromise1, rejectedPromise];

export async function promiseAll(promises) {
  // console.log('-- pr', JSON.stringify(promises).split(',').join(', '));
  console.log('-- pr', promises);
  if (!promises.length) {
    return Promise.resolve([]);
  }
  return new Promise((resolve, reject) => {
    let count = 0;
    const res = new Array(promises.length);
    for (let i = 0; i < promises.length; i++) {
    const promise = promises[i];
      promise
      .then((value) => {
        res[i] = value;
        count++;
        if (count === promises.length) {
          resolve(res);
        }
      })
      .catch((err) => {
        reject(err);
      })
    }
  });
}

// async function testResolved() {
//   try {
//     const res = await promiseAll(resolvedPromises);
//     // console.log('-- res', res);
//     const expected = [1, 2];
//     assert.deepStrictEqual(res, expected, 'Arrays are not equal');
//   } catch (e) {
//     console.error('--err', e);
//   }
// }

// async function testRejected() {
//   try {
//     await assert.rejects(
//       () => promiseAll(rejectedPromises),
//       new Error('rejected promise')
//     );
//   } catch (e) {
//     console.error('--err', e.message);
//   }
// }

// // testResolved();
// await testRejected();
