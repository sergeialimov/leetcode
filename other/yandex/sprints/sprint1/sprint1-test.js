const _inputLines = ['7', '-1 -10 -8 0 2 0 5'];
// const _inputLines = ['10', '-170 116 11 191 100 -107 106 90 -59 0'];
// const _inputLines = ['5', '1 2 5 4 8'];
let _curLine = 0;

// parsing lines and move pointer
function readLine() {
  return _inputLines[_curLine++];
}

function countPeaks(rowsNum, arr) {
  let res = 0;
  for (let i = 0; i < arr.length; i++) {
    const el = arr[i];
    if (arr[i - 1] && arr[i - 1] < el && arr[i+1] < el) {
      res++;
    } else if (arr.length < i+2) {
      res++;
    }
  }
  return res;
}

function solve() {
  const rowsNum = Number(readLine());
  const row = readLine();
  const arr = row.split(' ').map(Number);


  const res = countPeaks(rowsNum, arr);
  console.log(res);
}

solve();