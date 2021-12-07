/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
  let left = null;
  let right = null;
  let leftTail = null;
  let rightTail = null;
  let current = head;
  while (current) {
    if (current.val < x) {
      if (!left) {
        leftTail = left = current;
      } else {
        leftTail.next = current;
        leftTail = leftTail.next;
      }
    } else if (current.val >= x) {
      if (!right) {
        rightTail = right = current;
      } else {
        rightTail.next = current;
        rightTail = rightTail.next;
      }
    }
    current = current.next;
  }
  if (right) {
    rightTail.next = null;
  }
  if (left) {
    leftTail.next = right;
  }
  return left ? left : right;
};

const createLinkedList = require('../LinkedList/createLinkedList');

let target = [1, 4, 3, 2, 5, 2];
let head = createLinkedList(target);

console.log(JSON.stringify(partition(head, 3)));
