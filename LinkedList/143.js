/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
	let current = head
	let list = []
	/**
	 * 先将他们都放入数组中
	 */
	while(current) {
		list.push(current)
		current = current.next
	}
	let result = null
	let i = 0
	const length = list.length
	// 不能出现交错情况 一次处理两个节点，如果 后面的节点的索引  length - i - 1 < i 说明所有节点都处理过了
	while(i <= length && length - i - 1 >= i) {
		if(result === null) {
			result = list[i]
			result = result.next = list[length - i - 1]
		}else {
			result = result.next = list[i]
			result = result.next = list[length - i - 1]
		}
		i++
	}
	result.next = null
	return head
};


const createLinkedList = require('./createLinkedList');
const printLinkedList = createLinkedList.printLinkedList
let head = createLinkedList([1,2]);
// reorderList(head)
printLinkedList(reorderList(head))


