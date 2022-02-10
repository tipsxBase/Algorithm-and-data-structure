/**
 * 给你二叉树的根节点 root 和一个表示目标和的整数 targetSum 。
 * 判断该树中是否存在 根节点到叶子节点 的路径，这条路径上所有节点值相加等于目标和 targetSum 。
 * 如果存在，返回 true ；否则，返回 false 。
 * 叶子节点 是指没有子节点的节点。
 */

const createBinaryTree = require('./createBinaryTree');

var hasPathSum = function (root, targetSum) {
  let current = root;
  let stack = [];
  let sum = 0;
  while (current || stack.length > 0) {
    if (current) {
      stack.push(current);
      sum += current.val;
      if (
        current.left === null &&
        current.right === null &&
        sum === targetSum
      ) {
        return true;
      }
      current = current.left;
    } else {
      current = stack.pop();
      current = current.right;
    }
  }
  return false;
};

const tree = createBinaryTree([
  5,
  4,
  8,
  11,
  null,
  13,
  4,
  7,
  2,
  null,
  null,
  null,
  1,
]);
console.log(hasPathSum(tree, 26));
