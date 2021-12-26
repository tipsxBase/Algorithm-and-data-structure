// 给定一个 N 叉树，返回其节点值的 前序遍历 。

/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function (root) {
  let res = [];
  if (!root) {
    return [];
  }
  let { val, children } = root;
  res.push(val);
  if (children) {
    children.forEach((child) => {
      res = res.concat(preorder(child));
    });
  }
  return res;
};

/**
 * 迭代法
 * 用一个栈来保存遍历的节点，栈顶始终是下一个要遍历的节点
 * 先将根结点入栈，随后访问栈顶结点，再将根结点的所有子结点逆顺入栈，然后依次访问子结点
 * @param {*} root
 * @returns
 */
var preorder = function (root) {
  let res = [];
  let stack = [];
  // 根结点入栈
  stack.push(root);
  while (stack.length > 0) {
    // 取出栈顶结点
    const node = stack.pop();
    if (!node) {
      continue;
    }
    let { val, children } = node;
    res.push(val);
    // 将当前结点的子节点逆顺入栈
    if (children && children.length > 0) {
      children.reverse();
      children.forEach((child) => {
        stack.push(child);
      });
    }
  }
  return res;
};
