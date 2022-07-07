/**
 * @param {number} k
 */
var MyCircularQueue = function(k) {
	this.size = 0
	this.capacity = k
	this.data = new Array(k)
	this.head = this.tail = -1
};

/** 
 * 向循环队列插入一个元素。如果成功插入则返回真
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function(value) {
	// 循环队列已满
	if(this.isFull()) {
		return false
	}
	if(this.isEmpty()) {
		this.tail = this.head = 0
		this.data[this.tail] = value
	}else {
		// 如果队列不满，那么尾结点后移
		this.tail = (this.tail + 1) % this.capacity
		this.data[this.tail] = value
		// [x, x, x] new
		// [1, x, x] enQueue
		// [1, 2, x] enQueue
		// [1, 2, 3] enQueue
		// [x, 2, 3] deQueue
		// [x, x, 3] deQueue
		// [4, x, 3] enQueue
		// [4, 5, 3] enQueue
	}
	this.size++
	return true
};

/**
 * 从循环队列中删除一个元素。如果成功删除则返回真
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function() {
	if(this.isEmpty()) {
		return false
	}
	this.head = (this.head + 1) % this.capacity
	this.size--
	return true
};

/**
 * 从队首获取元素。如果队列为空，返回 -1 
 * @return {number}
 */
MyCircularQueue.prototype.Front = function() {
	if(this.isEmpty()) {
		return -1
	}
	return this.data[this.head]
};

/**
 * 获取队尾元素。如果队列为空，返回 -1
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function() {
	if(this.isEmpty()) {
		return -1
	}
	return this.data[this.tail]
};

/**
 * 检查循环队列是否为空
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function() {
	return this.size === 0
};

/**
 * 检查循环队列是否已满
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function() {
	return this.size === this.capacity
};

const circularQueue = new MyCircularQueue(3); // 设置长度为 3
console.log(circularQueue.enQueue(1)); // 返回 true
console.log(circularQueue.enQueue(2)); // 返回 true
console.log(circularQueue.enQueue(3)); // 返回 true
console.log(circularQueue.enQueue(4)); // 返回 false，队列已满
console.log(circularQueue.Rear()); // 返回 3
console.log(circularQueue.isFull()); // 返回 true
console.log(circularQueue.deQueue()); // 返回 true
console.log(circularQueue.enQueue(4)); // 返回 true
console.log(circularQueue.Rear()); // 返回 4