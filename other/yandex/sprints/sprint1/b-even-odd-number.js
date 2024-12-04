const _readline = require('readline');

const _reader = _readline.createInterface({
  input: process.stdin
});

let _inputLine;

// Set callback on read line
_reader.on('line', line => {
  _inputLine = line;
});

process.stdin.on('end', solve);

// parsing lines and moves pointer
function readStr() {
  return _inputLine;
}

function defineParity(arr) {
  let isEvenStart = arr[0] % 2 === 0;

  for (let i = 1; i < arr.length; i++) {
    const isEvenTmp = arr[i] % 2 === 0;
    if (isEvenStart !== isEvenTmp) {
      return 'FAIL';
    }
  }
  return 'WIN';
}

function solve() {
  const input = readStr();
  const parsed = input.split(' ');
  const a = Number(parsed[0]);
  const b = Number(parsed[1]);
  const c = Number(parsed[2]);


  console.log(defineParity([a, b, c]));
}