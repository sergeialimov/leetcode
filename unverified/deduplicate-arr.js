// Identify only duplicates
// The full array will be checked from this duplicates out of this scope
function findDuplicatedTrees (meshTrees) {
  const duplicatedTrees = [];
  const treesArr = [];

  meshTrees.forEach((meshTree) => {
    if (treesArr[meshTree.tree] !== true) {
      treesArr[meshTree.tree] = true;
    } else if (treesArr[meshTree.tree] === true) {
      duplicatedTrees[meshTree.tree] = true
    }
  });
  return duplicatedTrees;
}

const meshTrees = [
  { tree: 'A01' },
  { tree: 'A02' },
  { tree: 'A01' },
];

const res = findDuplicatedTrees(meshTrees);

console.log('-- res', res);
