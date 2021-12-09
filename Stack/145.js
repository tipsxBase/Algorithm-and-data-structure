/**
 * ==前序遍历==
 * 对于当前节点，先输出该节点，然后输出他的左孩子，最后输出他的右孩子
 *
 * ==中序遍历==
 * 对于当前结点，先输出它的左孩子，然后输出该结点，最后输出它的右孩子
 *
 * ==后序遍历==
 * 对于当前结点，先输出它的左孩子，然后输出它的右孩子，最后输出该结点。
 */

// Definition for a binary tree node.
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function (root) {
    let res = []
    if(!root) {
        return res
    }
    res = res.concat(postorderTraversal(root.left))
    res = res.concat(postorderTraversal(root.right))
    res.push(root.val)
    return res
};


/**
 *          1
 *      2                   3
 * 4        5           6         7
 *                 8
 * 
 * 
 * @param {*} root 
 * @returns 
 */
// 1 2 

var postorderTraversal = function (root) {
    const res = []
    let current = root
    let visistd = new Set()
    let processStack = []
    while(current){
        if(current.left && !visistd.has(current.left)) {
            processStack.push(current)
            current = current.left
        } else if(current.right && !visistd.has(current.right)){
            processStack.push(current)
            current = current.right
        } else {
            visistd.add(current)
            res.push(current.val)
            current = processStack.pop()
        }
    }
    return res
};
