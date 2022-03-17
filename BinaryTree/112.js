/**
 * 给你二叉树的根节点 root 和一个表示目标和的整数 targetSum 。
 * 判断该树中是否存在 根节点到叶子节点 的路径，这条路径上所有节点值相加等于目标和 targetSum 。
 * 如果存在，返回 true ；否则，返回 false 。
 * 叶子节点 是指没有子节点的节点。
 */

const createBinaryTree = require('./createBinaryTree');

/**
 *
 * @param {*} root
 * @param {*} targetSum
 */
var hasPathSum = function (root, targetSum) {
  if (root === null) {
    return false;
  }
  let current = root;
  let stack = [];
  let visited = new Set(); // 记录访问过节点
  let sum = 0;
  while (current) {
    // 如果当前节点没有访问过，那么记录访问情况
    if (!visited.has(current)) {
      sum += current.val;
      visited.add(current);
    }
    // 存在左节点，并且没有访问过
    if (current.left && !visited.has(current.left)) {
      stack.push(current);
      current = current.left;
    } else if (current.right && !visited.has(current.right)) {
      // 存在右节点，并且没有访问过
      stack.push(current);
      current = current.right;
    } else {
      // 叶子节点 或 子节点都被访问了
      if (!current.right && !current.left && sum === targetSum) {
        return true;
      }
      sum = sum - current.val;
      current = stack.pop();
    }
  }
  return false;
};
/**
 * sum = 5, 9, 20, 20, 22
 * stack = [5, 4, ]
 */
const tree = createBinaryTree([1, 2]);
console.log(hasPathSum(tree, 1));
