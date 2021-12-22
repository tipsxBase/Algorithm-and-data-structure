function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

function createBinaryTree(nodes) {
    let root = null
    let current = null
    let stack = []
    let toRight = false
    let i = 0
    while(i < nodes.length){
        let n = nodes[i]
        let node = new TreeNode(n)
        if(i === 0){
            root = current = node
            if(nodes[i + 1] !== null) {
                current.left = new TreeNode(nodes[i + 1])
                stack.push(current.left)
            }
            if(nodes[i + 1] !== null)
        }
    }
}


module.exports = createBinaryTree