/**
 * 给定一个二叉树，返回其节点值的锯齿形层序遍历。（即先从左往右，再从右往左进行下一层遍历，以此类推，层与层之间交替进行）。
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
var zigzagLevelOrder = function (root) {
  const nodeQueue = [root];
  const res = [];
  let isOrderLeft = true;
  while (nodeQueue.length) {
    const levelList = [];
    // 仅处理当前级结点
    const size = nodeQueue.length;
    // 此处不能使用 i < nodeQueue.length 因为 nodeQueue.length 是变化的
    for (let i = 0; i < size; i++) {
      const node = nodeQueue.shift();
      if (isOrderLeft) {
        levelList.push(node.val);
      } else {
        levelList.unshift(node.val);
      }
      if (node.left !== null) {
        nodeQueue.push(node.left);
      }
      if (node.right !== null) {
        nodeQueue.push(node.right);
      }
    }
    res.push(levelList);
    isOrderLeft = !isOrderLeft;
  }
  return res;
};
