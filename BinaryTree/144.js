/**
 * 给你二叉树的根节点 root ，返回它节点值的 前序 遍历。
 */

const createBinaryTree = require("./createBinaryTree");

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 递归方法
 * @param {TreeNode} root
 * @return {number[]}
 */
// var preorderTraversal = function (root) {
//     let res = []
//     if(root) {
//         res.push(root.val)
//         res = res.concat(preorderTraversal(root.left))
//         res = res.concat(preorderTraversal(root.right))
//     }
//     return res
// };


/**
 * 迭代方法
 * @param root 
 * @returns 
 */
var preorderTraversal = function (root) {
    const res = []
    let current = root
    let stack = []
    let flag = false // 访问左结点
    while(current){
        if(!flag){
            // 只有在访问左结点的情况下，当前结点才能入栈，因为前序是根左右，当flag = true 时，当前结点已经访问过了
            res.push(current.val)
            stack.push(current)
        }
        if(!flag && current.left) {
            current = current.left
        }else if(flag){
            // 访问右结点，如果右结点为空，则出栈访问父结点的右结点
            if(current.right) {
                current = current.right
                flag = false // 访问完右结点，则继续从先访问左结点
            }else {
                current = stack.pop()
                flag = true
            }
        }else {
            // 左结点为空，则需要访问当前结点的右结点
            flag = true
            current = stack.pop()
        }
        
    }
    return res
};
    


// const tree = createBinaryTree([1,4,3,2])

// console.log(preorderTraversal(tree))