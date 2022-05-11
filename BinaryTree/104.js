/*
 * @Author: zhaowencong
 * @Date: 2022-05-10 21:49:09
 * @LastEditors: zhaowencong
 * @LastEditTime: 2022-05-10 22:02:41
 * @FilePath: /Algorithm-and-data-structure/BinaryTree/104.js
 * @Description: 二叉树的最大深度
 * 解题思路：
 * 递归求出左子树的深度 = l
 * 递归未出右子树的深度 = r
 * total = Math.max(l, r) + 1
 *
 */

const createBinaryTree = require('./createBinaryTree');

const maxDepth = function (root) {
  if (root === null) return 0;
  return Math.max(getDepth(root.left), getDepth(root.right)) + 1;
};

const tree = createBinaryTree([3, 9, 20, null, null, 15, 7]);
console.log(maxDepth(tree));
