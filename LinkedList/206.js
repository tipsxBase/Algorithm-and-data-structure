/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * 双指针实现
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
	if(head === null) {
		return head
	}
	let newHead = head // 指向当前新的头节点
	let current = head.next // 旧的链表中当前遍历的节点
	newHead.next = null // 清空第一个节点的 next ，否则会产生循环
	while(current) {
		// 记录当前正在处理节点，会将这个节点当做新的头节点
		const temp = current
		current = current.next // 下一个要遍历的节点，是 current.next
		temp.next = newHead // 将当前处理的节点添加到 newHead 的头部，并修改 newHead 指针 
		newHead = temp
	}
	return newHead
};

const createLinkedList = require('./createLinkedList');
const printLinkedList = createLinkedList.printLinkedList
let head = createLinkedList([1,2, 3, 4, 5, 6]);
// reorderList(head)
printLinkedList(reverseList(head))