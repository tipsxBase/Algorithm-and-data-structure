


function DLinkedNode(key, value){
	this.key = key
	this.value = value
	this.next = this.previous = null
}



/**
 * Map + 双向列表
 * 使用map记录节点，使用双向列表记录缓存中顺序
 * put 的会先添加到时 双向列表的头部
 * get 的节点会移动到双向列表的头部表示最近使用
 * 复用伪头节点跟伪尾节目，是为了不需要移动头指针跟尾指针
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
	this.size = 0
	this.capacity = capacity
	// 伪头节点
	this.head = new DLinkedNode('head')
	// 伪尾结点
	this.tail = new DLinkedNode('tail')
	this.head.next = this.tail
	this.tail.previous = this.head
	this.cache = new Map()
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
	const node = this.cache.get(key); // head => 2 => 1 => tail
	if (node == null) {
			return -1;
	}
	// 如果 key 存在，先通过哈希表定位，再移到头部
	// 先将 node 从原来的位置移除
	node.previous.next = node.next
	node.next.previous = node.previous // head => 2 => tail
	// 插入 this.head 之后
	node.previous = this.head
	node.next = this.head.next
	this.head.next.previous = node
	this.head.next = node
	return node.value;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
	const dNode = this.cache.get(key)
	if(!dNode) {
		// 没有，需要添加
		const newNode = new DLinkedNode(key, value)
		this.cache.set(key, newNode)
		newNode.previous = this.head
		newNode.next = this.head.next
		this.head.next.previous = newNode
		this.head.next = newNode
		this.size++
		// 超出容量，移除最近最久未使用，也就是尾部节点
		if(this.size > this.capacity) {
			// 移除尾结点
			const node = this.tail.previous
			this.tail.previous.previous.next = this.tail
			this.tail.previous = this.tail.previous.previous
			this.cache.delete(node.key)
			this.size--
		}
	}else {
		dNode.value = value
		// 将结点移动头部
		// 在原位置移除节点
		dNode.previous.next = dNode.next
		dNode.next.previous = dNode.previous
		// 将节点插入头部
		dNode.previous = this.head
		dNode.next = this.head.next
		this.head.next.previous = dNode
		this.head.next = dNode
	}
};


const lRUCache = new LRUCache(2);
lRUCache.put(1, 1); // 缓存是 {1=1}
lRUCache.put(2, 2); // 缓存是 {1=1, 2=2}
console.log(lRUCache.get(1));    // 返回 1
lRUCache.put(3, 3); // 该操作会使得关键字 2 作废，缓存是 {1=1, 3=3}
console.log(lRUCache.get(2));    // 返回 -1 (未找到)
lRUCache.put(4, 4); // 该操作会使得关键字 1 作废，缓存是 {4=4, 3=3}
console.log(lRUCache.get(1));    // 返回 -1 (未找到)
console.log(lRUCache.get(3));    // 返回 3
lRUCache.put(4, 5); // 该操作会使得关键字 1 作废，缓存是 {4=4, 3=3}
lRUCache.put(5, 5); // 该操作会使得关键字 1 作废，缓存是 {4=4, 3=3}
console.log(lRUCache.get(4));    // 返回 4
console.log(lRUCache.get(3));    // 返回 4
