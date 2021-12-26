/**
 * 翻转一棵二叉树。
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 递归法
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function (root) {
  if (root === null) {
    return null;
  }
  const temp = root.right;
  root.right = invertTree(root.left);
  root.left = invertTree(temp);
  return root;
};

/**
 * 跟 589 的原理一样，先访问根结点，交换根结点的左右结点
 * 然后根根结点的左右结点入栈，进行下次循环
 * @param {*} root
 * @returns
 */
var invertTree = function (root) {
  const swap = (node) => {
    const temp = node.right;
    node.right = node.left;
    node.left = temp;
  };
  const stack = [];
  // 根结点入栈
  stack.push(root);
  while (stack.length) {
    // 取出栈顶元素
    const node = stack.pop();
    if (!node) {
      continue;
    }
    // 交换子结点
    swap(node);
    // 将子结点入栈
    stack.push(node.left);
    stack.push(node.right);
  }
  return root;
};

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

const root = new TreeNode(4);

root.left = new TreeNode(2, new TreeNode(1), new TreeNode(3));
root.right = new TreeNode(7, new TreeNode(6), new TreeNode(9));

console.log(invertTree(root));
