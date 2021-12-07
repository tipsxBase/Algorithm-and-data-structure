
namespace LeetCode {

	interface Node {
		val: number,
		next: Node,
		random: Node
	}

	function LinkedNode(val: number, next: Node | null, random: Node | null) {
		this.val = val;
		this.next = next;
		this.random = random;
	};


	/**
	 * @param {Node} head
	 * @return {Node}
	 */
	var copyRandomList = function (head?: Node) {
		if (head === null) {
			return null
		}
		let temp = head
		let newHead: Node = null
		let current: Node = null
		const newNodeMap = new Map<number, Node>()
		const nodeMap = new Map<Node, number>()
		let i = 0
		while (temp) {
			const { val } = temp
			nodeMap.set(temp, i)
			const node = new LinkedNode(val, null, null)
			newNodeMap.set(i, node)
			if (!newHead) {
				newHead = current = node
			} else {
				current.next = node
				current = node
			}
			temp = temp.next
			i++
		}
		i = 0
		let tempNewHead = newHead
		while (head) {
			const { random } = head
			let randomIndex = nodeMap.get(random)
			const newRandomNode = randomIndex !== undefined ? newNodeMap.get(randomIndex) : null
			head = head.next
			tempNewHead.random = newRandomNode
			tempNewHead = tempNewHead.next
		}

		return newHead
	};
}

