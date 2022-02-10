/**
 * 给定一个二叉树，判断它是否是高度平衡的二叉树。
 * 本题中，一棵高度平衡二叉树定义为：一个二叉树每个节点的左右两个子树的高度差的绝对值不超过 1 。
 */

const createBinaryTree = require('./createBinaryTree');

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 自顶向下
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {
  if (root === null) {
    return true;
  } else {
    return (
      Math.abs(height(root.left) - height(root.right)) <= 1 &&
      isBalanced(root.left) &&
      isBalanced(root.right)
    );
  }
};

function height(root) {
  if (root === null) {
    return 0;
  } else {
    return Math.max(height(root.left), height(root.right)) + 1;
  }
}

/**
 * 自底向上
 * @param {*} root
 * @returns
 */
var isBalanced = function (root) {
  return height(root) >= 0;
};

function height(root) {
  if (root === null) {
    return 0;
  }
  const leftHeight = height(root.left);
  const rightHeight = height(root.right);
  if (
    leftHeight === -1 || // root 的左子树不是平衡树 则整个树就不是平衡树
    rightHeight === -1 || // root 的右子树不是平衡树 则整个树就不是平衡树
    Math.abs(leftHeight - rightHeight) > 1 // 当前结点root不是平衡树，返回-1
  ) {
    return -1;
  }
  return Math.max(leftHeight, rightHeight) + 1;
}

const tree = createBinaryTree([1, 2, 2, 3, 3, null, null, 4, 4]);
console.log(isBalanced(tree));
