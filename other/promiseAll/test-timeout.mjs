import { promiseAll } from './promiseAll.mjs'
import assert from 'assert';

const resolvedPromise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1);
  }, 3000)
});
const resolvedPromise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(2);
  }, 4000)
});

const resolvedPromises = [resolvedPromise1, resolvedPromise2];

async function testResolved() {
  try {
    const res = await promiseAll(resolvedPromises);
    // console.log('-- res', res);
    const expected = [1, 2];
    assert.deepStrictEqual(res, expected, 'Arrays are not equal');
  } catch (e) {
    console.error('Err', e);
  }
}

const time = new Date();
await testResolved();
console.log('-- execution time', (new Date() - time) / 1000);
