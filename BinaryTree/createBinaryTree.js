function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

function createBinaryTree(nodes) {
  if (nodes.length === 0) {
    return null;
  }
  let root = null;
  let node = nodes.shift();
  let parent = new TreeNode(node);
  root = parent;
  let bitOrder = 0;
  const queue = [];
  while (nodes.length > 0) {
    node = nodes.shift();
    if (bitOrder > 1) {
      parent = queue.shift();
      bitOrder = 0;
    }
    if (node === null) {
      bitOrder++;
      continue;
    }
    const treeNode = new TreeNode(node);
    queue.push(treeNode);
    if (bitOrder === 0) {
      parent.left = treeNode;
      bitOrder++;
    } else if (bitOrder === 1) {
      parent.right = treeNode;
      bitOrder++;
    }
  }
  return root;
}

// const tree = createBinaryTree([1, 2, 2, 3, 3, null, null, 4, 4]);
// console.log(tree);
module.exports = createBinaryTree;
