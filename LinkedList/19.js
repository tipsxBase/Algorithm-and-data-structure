const createLinkedList = require('./createLinkedList');

let head = createLinkedList([1, 2, 3, 4, 5]);

var removeNthFromEnd = function (head, n) {
  let fast = head;
  let slow = head;
  while (n > 0) {
    fast = fast.next;
    n--;
  }
  if (fast === null) {
    // 移除头节点
    let newHead = head.next;
    head.next = null;
    return newHead;
  }
  // fast.next 保证 slow 指向的是被删除节点的前一个节点
  while (fast.next) {
    fast = fast.next;
    slow = slow.next;
  }
  slow.next = slow.next.next;
  return head;
};

console.log(removeNthFromEnd(head, 5));
