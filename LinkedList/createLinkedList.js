function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

function createLinkedList(target) {
  let head = null;
  let current;
  target.reduce((prev, current, index) => {
    const node = new ListNode(current);
    if (!prev) {
      head = node;
      return node;
    }
    prev.next = node;
    return node;
  }, current);
  return head;
}

module.exports = createLinkedList;
