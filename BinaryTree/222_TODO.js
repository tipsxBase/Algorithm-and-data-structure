/**
 * 给你一棵 完全二叉树 的根节点 root ，求出该树的节点个数。
 * 完全二叉树的定义如下：
 * 在完全二叉树中，除了最底层节点可能没填满外，其余每层节点数都达到最大值，
 * 并且最下面一层的节点都集中在该层最左边的若干位置。若最底层为第 h 层，则该层包含 1~ 2h 个节点。
 */

/**
 * 遍历的方法
 * @param {*} root
 * @returns
 */
var countNodes = function (root) {
  if (root === null) {
    return 0;
  }
  let current = root;
  let stack = [];
  let visited = new Set(); // 记录访问过节点
  while (current) {
    // 如果当前节点没有访问过，那么记录访问情况
    if (!visited.has(current)) {
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
      current = stack.pop();
    }
  }
  return visited.size;
};

var countNodesBFS = function (root) {
  if (root === null) {
    return 0;
  }
  let queue = [root];
  let count = 0;
  let isLeft = false;
  while (queue.length > 0) {
    let current = queue.pop();
    count++;
    if (current.left && current.right) {
      queue.unshift(current.left);
      queue.unshift(current.right);
    }
    if (!current.left || !current.right) {
      isLeft = !!current.left;
      break;
    }
  }
  console.log(count, isLeft);
  // 0b1000 ~0b1111

  // 根据 count 跟 isLeft计算 下层结点数据
};

const createBinaryTree = require('./createBinaryTree');

const tree = createBinaryTree([1, 2, 3, 4, 5, 6]);

console.log(countNodesBFS(tree));
