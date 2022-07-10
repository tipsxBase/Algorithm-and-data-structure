/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

const createLinkedList = require("./createLinkedList");

const ListNode = createLinkedList.ListNode;
const printLinkedList = createLinkedList.printLinkedList;

/**
 * 删除排序链表中的重复元素 II
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
	if (!head || !head.next) return head;
	// 先创建一个虚拟头结点,头结点可以被删除，因此需要一个虚拟头结点
	const temp = new ListNode(null, head);
	let current = temp;
	let next = head;
	while (next && next.next) {
		if (current.next.val === next.next.val) {
			// 直到找到不相同的结点
			while (
				current.next &&
				next.next &&
				current.next.val === next.next.val
			) {
				next = next.next;
			}
			// 找到了下一个不同的节点
			current.next = next.next; // 直接将current.next 指向 next.next，表示将中间相同的结点都删除了
			next = next.next;
		} else {
			current = current.next;
			next = next.next;
		}
	}
	return temp.next;
};

let head = createLinkedList([null, 1, 2, 3, 3, 4, 4, 5]);
const ret = deleteDuplicates(head);
printLinkedList(ret);
