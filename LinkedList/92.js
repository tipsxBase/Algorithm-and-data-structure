function ListNode(val, next) {
	this.val = val === undefined ? 0 : val;
	this.next = next === undefined ? null : next;
}

const target = [3, 5];

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

var reverseBetween = function (head, left, right) {
	if (head === null || head.next === null) {
		return head;
	}
	let current = head;
	let prevNoReverse = null; // 前边不需要旋转的节点的最后一个节点
	let prevNoReverseHead = null;
	let startReverse = null;
	let reversed = null;
	let reverseNumber = right - left;
	if (reverseNumber === 0) {
		return head;
	}
	// 查找翻转起始点
	while (left - 1 > 0) {
		// 记录头节点
		if (!prevNoReverseHead) {
			prevNoReverseHead = current;
		}
		prevNoReverse = current;
		current = current.next;
		left--;
	}
	startReverse = current;
	let nextToBeReverse = null;
	let lastReverse = null;
	while (reverseNumber >= 0) {
		nextToBeReverse = startReverse.next;
		if (!lastReverse) {
			// 最开始旋转的节点即旋转后最后的节点
			lastReverse = startReverse;
		}
		startReverse.next = reversed;
		reversed = startReverse; // 已经翻转的结点
		startReverse = nextToBeReverse;
		reverseNumber--;
	}
	if (!prevNoReverse) {
		prevNoReverseHead = prevNoReverse = reversed;
	} else {
		prevNoReverse.next = reversed;
	}
	lastReverse.next = nextToBeReverse;
	return prevNoReverseHead;
};

console.log(reverseBetween(head, 1, 2));
