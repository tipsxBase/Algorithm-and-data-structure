// 给定一棵树的前序遍历 preorder 与中序遍历  inorder。请构造二叉树并返回其根节点。

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 递归法
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    if(preorder.length === 0 || inorder.length === 0){
        return null
    }
    let root = preorder[0]
    let inorderMap = new Map()
    let length = preorder.length
    for (let i = 0; i < inorder.length; i++) {
        const n = inorder[i];
        inorderMap.set(n, i)
    }
    /**
     * 针对一颗树
     * 前序数组的结构为：[根, [左子树], [右子树]]
     * 中序数组的结构为：[[左子树]，根，[右子树]]
     * 因此前序数组的头节点一定是根结点
     * 找出根结点在中序数组中的位置，因为树没有重复结点，通过根结点在中序数组中的位置可以确认左子树的数量以及右子树的数量
     * 找出前序的左子树及右子树
     * 找出中序的左子树及右子树
     * 那么前序的左子树的结点跟中序的左子树结点一定是相同的（因为它们都是同一个根的左子树），同理前序的右子树及中序的右子树的结点也一定是相同的
     * 采用递归的方法用相同的思路构建子树
     */
    let rootOrder = inorderMap.get(preorder[0]) // 根结点的位置 
    let inorder_left = inorder.slice(0, rootOrder) // 中序的左子树
    let inorder_right = inorder.slice(rootOrder + 1, length) // 中序的右子树
    let preorder_left = preorder.slice(1, rootOrder + 1) // 前序的左子树
    let preorder_right = preorder.slice(rootOrder + 1, length) //前序的右子树

    root.left = buildTree(preorder_left, inorder_left)
    root.right = buildTree(preorder_right, inorder_right)
    return root
};