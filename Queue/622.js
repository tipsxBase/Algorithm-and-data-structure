function QueueNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {number} k
 */
var MyCircularQueue = function (k) {
  this.size = 0;
  this.capacity = k;
  this.head = this.tail = null;
};

/**
 * 队尾插入
 * 向循环队列插入一个元素。如果成功插入则返回真。
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function (value) {
  if (this.isFull()) {
    return false;
  }
  const node = new QueueNode(value);
  if (this.isEmpty()) {
    this.head = this.tail = node;
  } else {
    this.tail.next = node;
    this.tail = node;
  }
  this.tail.next = this.head;
  this.size++;
  return true;
};

/**
 * 队头删除
 * 从循环队列中删除一个元素。如果成功删除则返回真。
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function () {
  if (this.isEmpty()) {
    return false;
  }
  this.head = this.head.next;
  this.tail.next = this.head;
  this.size--;
  return true;
};

/**
 * 从队首获取元素。如果队列为空，返回 -1 。
 * @return {number}
 */
MyCircularQueue.prototype.Front = function () {
  if (this.isEmpty()) {
    return -1;
  }
  return this.head.val;
};

/**
 * 获取队尾元素。如果队列为空，返回 -1 。
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function () {
  if (this.isEmpty()) {
    return -1;
  }
  return this.tail.val;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function () {
  return this.size === 0;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function () {
  return this.size === this.capacity;
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
