import { promiseAll } from './promiseAll-then.mjs'
import assert from 'assert';

const resolvedPromise1 = Promise.resolve(1);
const resolvedPromise2 = Promise.resolve(2);
const rejectedPromise = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error('Rejected promise 2')), 100);
});

const resolvedPromises = [resolvedPromise1, resolvedPromise2];
const rejectedPromises = [resolvedPromise1, rejectedPromise];

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

async function testRejected() {
  try {
    // next line will log the error message
    // await promiseAll(rejectedPromises)

    // this wont log anything as error is expected
    await assert.rejects(
      () => promiseAll(rejectedPromises),
      new Error('Rejected promise 2')
    );
  } catch (e) {
    console.error('Error while resolving promise:', e.message);
  }
}

testResolved();
testRejected();
