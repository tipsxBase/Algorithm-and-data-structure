/**
 * @param {string} preorder
 * @return {boolean}
 */
// var isValidSerialization = function (preorder) {
//   let n = preorder.length;
//   const stack = [1]; // 先从根结点开始，占一个位置
//   let i = 0;
//   while (i < n) {
//     if (!stack.length) {
//       return false;
//     }
//     if (preorder[i] === ',') {
//       i++;
//     } else if (preorder[i] === '#') {
//       stack[stack.length - 1]--;
//       if (stack[stack.length - 1] === 0) {
//         stack.pop();
//       }
//       i++;
//     } else {
//       // 数字可能是多位数
//       while (i < n && preorder[i] !== ',') {
//         i++;
//       }
//       // 遇到数字，则表示遍历了栈顶元素的一个节点，因此将当前节点未访问的节点数 - 1，并将新节点要访问的节点数入栈，因此接下来要访问新节点的左右节点了
//       stack[stack.length - 1]--;
//       if (stack[stack.length - 1] === 0) {
//         stack.pop();
//       }
//       stack.push(2); // 接下来要有两个节点需要遍历
//     }
//   }
//   return stack.length === 0;
// };

/**
 * 出度、入度解法
 * 出度，入度是图中的概念
 * 在有向图中顶点的出边条数称为该顶点的出度，顶点的入边条数称为该顶点的入度 。
 *
 * 对于二叉树
 * 出度 一个节点的子节点的个数
 * 入度 根节点的入度是0其它节点的入度是1
 *
 * 每条边连接着两个顶点，对应一个入度和一个出度，所以所有顶点的入度之和等于所有顶点的出度之和。
 *
 */

/**
 * 顶点提供0个入度的两个出度
 * # 提供一个入度
 * 非顶点的数字节点提供一个入度和两个出度
 * 入度 - 1
 * 出度 + 1
 * @param {*} preorder
 */
var isValidSerialization = function (preorder) {
  let nodes = preorder.split(',');
  let diff = 1;
  for (let i = 0; i < nodes.length; i++) {
    const n = nodes[i];
    diff--;
    if (diff < 0) return false;
    if (n !== '#') {
      diff += 2;
    }
  }
  return diff === 0;
};

console.log(isValidSerialization('9,#,#'));
