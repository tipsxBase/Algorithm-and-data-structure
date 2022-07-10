function reverseKGroup(head, key) {
	if (!head || key < 2) return head;
	let current = head; // 翻转的起始结点
	let newHead = null;
	let newLast = null;
	// 判断当前链表是否满足翻转条件
	let { isReverse, nextReverse } = needReverse(current, key);
	while (isReverse && current) {
		// 执行指定数量的翻转
		const { first, last } = reverse(current, key);
		if (newHead === null) {
			newHead = first;
			newLast = last;
		} else {
			// 将本次翻转后的结点插入到翻转后新折链表的尾部
			newLast.next = first;
			newLast = last; // 更新尾指针
		}
		// 判断余下的结点是否满足翻转条件
		current = nextReverse;
		// 判断下次翻转是否满足条件
		const result = needReverse(current, key);
		isReverse = result.isReverse;
		nextReverse = result.nextReverse;
	}
	newLast.next = current;
	return newHead;
}

/**
 * 查看以 head 开头的结点是否满足翻转条件（长度是否满足）
 * 如果满足则返回 isReverse = true，并返回指向下一次翻转的开始结点
 *
 * head = 1 2 3 4 5 6 7, key = 2
 * isReverse = true
 * nextReverse = 3
 * ----------------
 * isReverse = true
 * nextReverse = 5
 * ----------------
 * isReverse = true
 * nextReverse = 7
 * ----------------
 * isReverse = false
 * nextReverse = null
 * @param {*} head
 * @param {*} key
 * @returns
 */
function needReverse(head, key) {
	let i = 0;
	while (head && i < key) {
		head = head.next;
		i++;
	}
	return {
		isReverse: i === key,
		nextReverse: i === key ? head : null, // 下一次翻转的结点的头结点
	};
}

/**
 * 翻转对应的链表中前 count 个节点
 * @param {*} head
 * @param {*} count
 * @returns
 */
function reverse(head, count) {
	let reversed = null; // 已经翻转的结点头结点
	let startReverse = head; // 本次需要翻转的结点
	let nextToBeReverse = null; // 下一个需要翻转的结点
	let lastReverse = null; // 最后一个结点
	let i = 0;
	while (i < count) {
		// 下一个需要翻转的结点就是 startReverse.next
		nextToBeReverse = startReverse.next;
		// 还没有要翻转了的结点
		if (reversed === null) {
			// 最后一个节点就是第一次翻转过的节点
			lastReverse = reversed = startReverse;
		} else {
			// 已经存在翻转过的结点，那么就将新翻转的结点插入到已经翻转结点的头部
			startReverse.next = reversed;
			reversed = startReverse; // 更新翻转后结点的头指针
		}
		startReverse = nextToBeReverse;
		i++;
	}
	// 返回翻转后结点的头指针跟尾指针
	return {
		first: reversed,
		last: lastReverse,
	};
}

const createLinkedList = require("./createLinkedList");

const ListNode = createLinkedList.ListNode;
const printLinkedList = createLinkedList.printLinkedList;

const head = createLinkedList([1, 2, 3, 4]);

const result = reverseKGroup(head, 3);

printLinkedList(result);
