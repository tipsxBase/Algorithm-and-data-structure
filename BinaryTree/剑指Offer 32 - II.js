/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  const stack = [];
  if (!root) {
    return [];
  }
  const levelMap = new Map();
  let level = 0;
  stack.push(root);
  levelMap.set(root, level);
  const res = [];
  while (stack.length) {
    const node = stack.pop();
    if (!node) {
      continue;
    }
    level = levelMap.get(node);
    // 子结点逆顺入栈
    if (node.right) {
      stack.push(node.right);
    }
    if (node.left) {
      stack.push(node.left);
    }
    // 子结点的层级=父层级 + 1
    if (node.left) {
      levelMap.set(node.left, level + 1);
    }
    if (node.right) {
      levelMap.set(node.right, level + 1);
    }
  }
  levelMap.forEach((val, node, o) => {
    if (!res[val]) {
      res[val] = [];
    }
    res[val].push(node.val);
  });
  return res;
};

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

const root = new TreeNode(3);

root.left = new TreeNode(9, null, null);
root.right = new TreeNode(20, new TreeNode(15), new TreeNode(7));
const res = levelOrder(root);
debugger;
