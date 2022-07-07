class QueueNode {
  constructor(value, next = null, prev = null) {
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}

var FrontMiddleBackQueue = function () {
  this.head = this.middle = this.tail = null;
  this.size = 0;
};

/**
 * @param {number} val
 * @return {void}
 */
FrontMiddleBackQueue.prototype.pushFront = function (val) {
  const node = new QueueNode(val);
  // 第一次插入节点
  if (this.head === null) {
    this.head = this.middle = this.tail = node;
  } else {
    // 将 node 插入头部
    node.next = this.head;
    this.head.prev = node;
    this.head = node;
		// 6 5 1 2 3 4
    // 如果插入之前是偶数长度，则需要移动middle指针
    if (this.size % 2 === 0) {
      this.middle = this.middle.prev;
    }
  }
  this.size++;
};

/**
 * @param {number} val
 * @return {void}
 */
FrontMiddleBackQueue.prototype.pushMiddle = function (val) {
  const node = new QueueNode(val);
  // 第一次插入节点
  if (this.size === 0) {
    this.head = this.middle = this.tail = node;
  } else {
    node.next = this.middle;
    node.prev = this.middle.prev;
    if (this.size === 1) {
      this.head = node;
    } else {
      this.middle.prev.next = node;
    }
    this.middle.prev = node;
    if (this.size % 2 === 0) {
      this.middle = node;
    }
  }
  this.size++;
};

/**
 * @param {number} val
 * @return {void}
 */
FrontMiddleBackQueue.prototype.pushBack = function (val) {
  const node = new QueueNode(val);
  // 第一次插入节点
  if (this.head === null) {
    this.head = this.middle = this.tail = node;
  } else {
    // 将 node 插入尾部
    this.tail.next = node;
    node.prev = this.tail;
    this.tail = node;
    // 计算 middle 指针
    // 1 2 3 4
    if (this.size % 2 !== 0) {
      this.middle = this.middle.next;
    }
  }
  this.size++;
};

/**
 * @return {number}
 */
FrontMiddleBackQueue.prototype.popFront = function () {
  if (this.size === 0) {
    return -1;
  }
  const temp = this.head;
  if (this.size === 1) {
    this.head = this.tail = this.middle = null;
  } else {
    this.head = this.head.next;
    this.head.next.prev = null;
    temp.next = null;
  }
  this.size--;
  return temp.value;
};

/**
 * @return {number}
 */
FrontMiddleBackQueue.prototype.popMiddle = function () {
  if (this.size === 0) {
    return -1;
  }
  let temp = this.middle;
  if (this.size === 1) {
    this.head = this.tail = this.middle = null;
  } else if (this.size === 2) {
    // 只有两个，则删除头节点
    temp = this.head;
    this.head = temp.next;
    temp.next = null;
    temp.prev = null;
  } else if (this.size > 2 && this.size % 2 === 0) {
    // 删除 this.middle的前一个节点 1 2 3 4
    let temp = this.middle.prev;
    this.middle.prev.prev.next = this.middle;
    this.middle.prev = this.middle.prev.prev;
    temp.prev = temp.next = null;
  } else {
    // 1 2 3
    this.middle.prev.next = this.middle.next;
    this.middle.next.prev = this.middle.prev;
  }
  this.size--;
  return temp.value;
};

/**
 * @return {number}
 */
FrontMiddleBackQueue.prototype.popBack = function () {
  if (this.size === 0) {
    return -1;
  }
  const temp = this.tail;
  if (this.size === 1) {
    this.head = this.tail = this.middle = null;
  } else {
    this.tail = this.tail.prev;
    this.tail.prev.next = null;
    temp.prev = null;
  }
  this.size--;
  return temp.value;
};

[
  'FrontMiddleBackQueue',
  'pushFront',
  'pushBack',
  'pushMiddle',
  'pushMiddle',
  'popFront',
  'popMiddle',
  'popMiddle',
  'popBack',
  'popFront',
][([], [1], [2], [3], [4], [], [], [], [], [])];
const queue = new FrontMiddleBackQueue();

queue.pushFront(1);
queue.pushBack(2);
queue.pushMiddle(3);
queue.pushMiddle(4);
console.log(queue.popFront(3));
console.log(queue.popMiddle(3));
console.log(queue.popMiddle(3));
console.log(queue.popBack(3));
console.log(queue.popFront(3));

// queue.pushMiddle(4); // 2 4 3 1
