/**
 * 给定一个二叉树，返回其节点值自底向上的层序遍历。 （即按从叶子节点所在层到根节点所在的层，逐层从左向右遍历）
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function (root) {
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
  return res.reverse();
};
