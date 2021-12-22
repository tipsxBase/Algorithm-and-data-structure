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
    while(current){
        res.push(current.val)
        if(current.left) {
            stack.push(current)
            current = current.left
        } else if(current.right) {
            current = current.right
            stack.push(current)
        }else {
            if(stack.length === 0) {
                break
            }else {
                current = stack.pop()
                current = current.right
            }
        }
       
    }
    return res
};


                                     1
                        2                           3
                4               5           6               7
            7       8    null       10  11      12      13      14       


const tree = createBinaryTree([1,4,3,2])

console.log(preorderTraversal(tree))