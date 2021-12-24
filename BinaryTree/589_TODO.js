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

var preorder = function (root) {
  let res = [];
  let { val, children } = root;
  res.push(val);
  let stack = []
  while(children){
    
  }
};
