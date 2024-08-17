/**
 * Реализовать обход дерева.
 *
 * TODO: вывести сумму всех value
 */

const tree = {
  value: 1,
  children: [
    {
      value: 2,
      children: [
        {
          value: 3,
          children: [
            {
              value: 7,
            },
          ],
        },
      ],
    },
    {
      value: 5,
      children: [
        {
          value: 6,
        },
      ],
    },
  ],
};

let sum = 0;
function sumValues(node) {
  if (node.children && node.children.length) {
    for (const i = 0; i < node.children.length; i += 1) {
      sumValues(node.children[i]);
    }
  }
  console.log(node.value);
  sum += node?.value;
  return node.value;
}

sumValues(tree);
console.log(sum);
