/**
 * 118. Pascal's Triangle
 * @param numRows
 *
 * Given an integer numRows, return the first numRows of Pascal's triangle.
 *
 * In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:
 */
function generate (numRows: number): number[][] {
  const sideNumber = 1
  const line1 = [ sideNumber ];
  const line2 = [ sideNumber, sideNumber ];

  if (numRows === 1) {
    return [ line1 ];
  }

  if (numRows === 2) {
    return [[ sideNumber ], [ sideNumber, sideNumber ]];
  }


  const result = [ line1, line2 ];

  let previousLine = line2;

  // main loop over lines
  for (let i = 2; i < numRows; i++) {
    const currentLine = [ sideNumber ];

    // iteration over previous line
    for (let j = 0; j < previousLine.length - 1; j++) {
      currentLine.push(previousLine[j] + previousLine[j+1]);
    }

    currentLine.push(sideNumber);
    result.push(currentLine);
    previousLine = currentLine;
  }

  return result;
}


const res = generate(5);
console.log(res);










