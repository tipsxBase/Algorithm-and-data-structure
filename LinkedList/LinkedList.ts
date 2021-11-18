interface INode {
	value: unknown,
	next: INode
}

/**
 * 指针形式的链表
 */
class LinkedNode implements INode{
	value: unknown;
	next: INode;
	constructor(value: unknown, next = null){
		this.value = value
		this.next = next
	}
}

class LinkedList {
	head: LinkedNode;
	private size: number;
	constructor(value: unknown) {
		this.head = new LinkedNode(value)
		this.size = 1
	}

	get length(){
		return this.size
	}

	/**
	 * 在指定位置添加一项
	 * @param index 要添加的位置，从0开始计算
	 * @param value 要添加的值
	 */
	add(index: number, value: unknown){
		if(index > this.size || index < 0){
			throw '越界'
		}
		let current = this.head
		index = index - 1 // current已经指向头，所以 index 后移一位
		while(current && index > 0){
			current = current.next
			index--
		}
		const node = new LinkedNode(value)
		node.next = current.next
		current.next = node
		this.size++
	}

	/**
	 * 
	 * @param index 要删除的位置从0开始计算
	 */
	remove(index: number){
		if(index > this.size || index < 0){
			throw '越界'
		}
		let current = this.head
		index = index - 1
		// index > 1 表示要删除节点的前一个节点
		while(current && index > 0){
			current = current.next
			index--
		}
		console.log(current)
		current.next = current.next.next
		this.size--
	}
}


const list = new LinkedList(0)
list.add(1, 1)
list.add(2, 2)
list.add(3, 3)
list.add(4, 4)
list.add(3, 'a')
list.remove(4)



// 双数组形式