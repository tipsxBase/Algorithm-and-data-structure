const createLinkedList = require("./createLinkedList");

let head = createLinkedList([1, 2, 3, 4, 5]);

/**
 * 快慢指针的方法
 * 先将快指针向后移动 n 个位置
 * 因为是删除链表中倒数第 n 个结点，如果此时快指针指向 null，说明删除的正好是头结点
 * 如果此时快指针不指向 null，此时将快慢指针同时向后移，如果 fast.next 指向 null，说明此时 slow.next 就是要删除的结点
 * 证明过程
 * 链表的长度为length，倒数第 n 的结点就是位置是 length - n
 * 起始fast = 0，last = 0
 * 先将 fast 后移 n 个位置，fast的位置是 n
 * fast 向后移动 length - n - 1 个位置指向的正好是尾结点
 * 此时 last 也向后移动 length - n - 1 个位置，此时last的next就是要删除的结点
 * @param {*} head
 * @param {*} n
 * @returns
 */
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
	// fast.next 保证 slow.next 指向的是被删除节点
	while (fast.next) {
		fast = fast.next;
		slow = slow.next;
	}
	slow.next = slow.next.next;
	return head;
};

console.log(removeNthFromEnd(head, 5));
