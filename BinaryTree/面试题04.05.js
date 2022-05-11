/*
 * @Author: zhaowencong
 * @Date: 2022-05-10 22:06:26
 * @LastEditors: zhaowencong
 * @LastEditTime: 2022-05-11 10:48:03
 * @FilePath: /Algorithm-and-data-structure/BinaryTree/面试题04.05.js
 * @题目描述: 是否是二叉搜索树。实现一个函数，检查一颗二叉树是二叉搜索树
 * @解题思路: 二叉搜索树的定义：如果该二叉树的左子树不为空，则左子树上所有节点的值均小于它的根节点的值； 若它的右子树不空，则右子树上所有节点的值均大于它的根节点的值；它的左右子树也为二叉搜索树。
 *          可以采用二叉树的中序遍历（左根右）来实现
 */

const createBinaryTree = require('./createBinaryTree');

const isValidBST = function (root) {
  const stack = [];
  let inorder = -Infinity; // 保存当前遍历到子树的节点中的最大值
  while (stack.length || root !== null) {
    // 先遍历将左节点都入栈
    while (root !== null) {
      stack.push(root);
      root = root.left;
    }
    root = stack.pop();
    // 如果中序遍历的节点值小于等于前一个 inorder ,说明该二叉树不是二叉搜索树
    if (root.val <= inorder) {
      return false;
    }
    inorder = root.val;
    root = root.right;
  }
  return true;
};

const tree = createBinaryTree([6, 4, 8, 2, 5, 7, 9, 1, 3]);

console.log(isValidBST(tree));

/**
 * 														 6
 * 													 /  \
 * 										      4	  8
 * 												 /\  /\
 *                        2 5 7 9
 * 							         /\
 *                      1	3
 * 执行流程
 * inorder = -Infinity
 * stack = []
 * 外层第一次 while
 * 内层 while
 * 先遍历左子树
 * stack = [6, 4, 2, 1]
 * 内层 while 结束
 * root = stack.pop() = 1；stack = [6, 4, 2]
 * root.val <= inorder = false
 * inorder = root.val = 1
 * root = root.right = null
 * 外层第二次 while
 * 此时root = null
 * 内层 while 执行条件不成立
 * root = stack.pop() = 2；stack = [6, 4, 3]
 * root.val <= inorder = false
 * inorder = root.val = 2
 * root = root.right = 3
 * 外层第三次 while
 * 内层 while
 * stack = [6, 4, 3]
 * root = stack.pop() = 3；stack = [6, 4]
 * root.val <= inorder = false (3 <= 2 = false)
 * inorder = root.val = 3
 * root = root.right = null
 * 外层第四次 while
 * 内层 while 执行条件不成立
 * root = stack.pop() = 4；stack = [6]
 * root.val <= inorder = false (3 <= 4 = false)
 * 注意：此时 inorder = 3，是 4 的左子树中最大的值，而不是 4 的左节点 2，满足二叉搜索树的条件是左子树的所有节点值都小于根节点，也就是左子树中的最大值小于根节点
 *
 * 后面的循环按上面的流程依次执行即可
 */
