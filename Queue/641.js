/**
 * @param {number} k
 */
var MyCircularDeque = function (k) {
  this.size = 0;
  this.capacity = k;
  this.head = null;
  this.tail = null;
  this.value = [];
};

/**
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertFront = function (value) {
  if (this.isFull()) {
    return false;
  }
  this.value.push(value);
  this.size++;
  return true;
};

/**
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertLast = function (value) {
  if (this.isFull()) {
    return false;
  }
  this.value.unshift(value);
  this.size++;
  return true;
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteFront = function () {
  if (this.isEmpty()) {
    return false;
  }
  this.value.pop();
  this.size--;
  return true;
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteLast = function () {
  if (this.isEmpty()) {
    return false;
  }
  this.value.shift();
  this.size--;
  return true;
};

/**
 * @return {number}
 */
MyCircularDeque.prototype.getFront = function () {
  if (this.isEmpty()) {
    return -1;
  }
  return this.value[this.size - 1];
};

/**
 * @return {number}
 */
MyCircularDeque.prototype.getRear = function () {
  if (this.isEmpty()) {
    return -1;
  }
  return this.value[0];
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.isEmpty = function () {
  return this.size === 0;
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.isFull = function () {
  return this.size === this.capacity;
};

const circularDeque = new MyCircularDeque(3); // 设置容量大小为3
console.log(circularDeque.insertLast(1)); // 返回 true
console.log(circularDeque.insertLast(2)); // 返回 true
console.log(circularDeque.insertFront(3)); // 返回 true
console.log(circularDeque.insertFront(4)); // 已经满了，返回 false
console.log(circularDeque.getRear()); // 返回 2
console.log(circularDeque.isFull()); // 返回 true
console.log(circularDeque.deleteLast()); // 返回 true
console.log(circularDeque.insertFront(4)); // 返回 true
console.log(circularDeque.getFront()); // 返回 4
