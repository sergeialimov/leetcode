/**
 * Given an integer rowIndex, return the rowIndex th (0-indexed) row of the Pascal's triangle.
 *
 * In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:
 */
function getRow (rowIndex: number): number[] {
  const numRows = rowIndex + 1;
  const sideNumber = 1
  const line1 = [ sideNumber ];
  const line2 = [ sideNumber, sideNumber ];

  if (rowIndex === 0) {
    return line1;
  }

  if (numRows === 1) {
    return line2;
  }


  let previousLine = line2;

  // main loop over lines
  for (let i = 2; i < numRows; i++) {
    const currentLine = [ sideNumber ];

    // iteration over previous line
    for (let j = 0; j < previousLine.length - 1; j++) {
      currentLine.push(previousLine[j] + previousLine[j+1]);
    }

    currentLine.push(sideNumber);
    previousLine = currentLine;
  }

  return previousLine;
}


const res = getRow(3);
console.log(res);










