/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let carry = 0;
  let result = null;
  let current = null;
  while (l1 && l2) {
    let res = l1.val + l2.val + carry;
    carry = Math.floor(res / 10);
    res = res - 10 * carry;
    let node = new ListNode(res);
    if (!result) {
      result = current = node;
    } else {
      current.next = node;
      current = current.next;
    }
    l1 = l1.next;
    l2 = l2.next;
  }
  let rest = l1 ? l1 : l2;
  while (rest && carry) {
    let res = rest.val + carry;
    carry = Math.floor(res / 10);
    res = res - 10 * carry;
    let node = new ListNode(res);
    current.next = node;
    current = current.next;
    rest = rest.next;
  }
  if (rest) {
    current.next = rest;
  }
  if (carry) {
    let node = new ListNode(carry);
    current.next = node;
  }

  return result;
};
