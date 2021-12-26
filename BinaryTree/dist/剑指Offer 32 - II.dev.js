"use strict";

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function levelOrder(root) {
  var stack = [];
  var levelMap = new Map();
  var level = 0;
  stack.push(root);
  levelMap.set(node, level);
  var res = [];

  while (stack.length) {
    var _node = stack.pop();

    level++;
    stack.push(_node.left);
    stack.push(_node.right);
    levelMap.set(_node.left, level);
    levelMap.set(_node.right, level);
  }

  debugger;
};

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

var root = new TreeNode(4);
root.left = new TreeNode(2, new TreeNode(1), new TreeNode(3));
root.right = new TreeNode(7, new TreeNode(6), new TreeNode(9));
levelOrder(root);