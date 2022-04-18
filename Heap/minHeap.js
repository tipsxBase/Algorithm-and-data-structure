class MinHeap {
  /**
   * @param {*} compare 自定义比较函数
   */
  constructor(compare = (a, b) => a - b) {
    this.data = data;
    this.compare = compare;
  }
  get size() {
    return this.data.length;
  }

  peek() {
    return this.data.length === 0 ? null : this.data[0];
  }

  /**
   * 往最小堆中添加元素
   * @param {*} node
   */
  push(node) {
    this.data.push(node);
    this.shiftUp();
  }

  /**
   * 从最小堆中弹出一个元素
   * 最小的元素一定在堆顶，所以弹出的元素就是堆顶元素
   * 然后把堆尾元素（最后一个元素）放在第一个元素的位置 （从数组中弹出（删除）最后一个元素，并将它放在第一个元素的位置（索引为0处））
   * 然后将第一个元素使用shiftDown放在合适的位置
   * @returns
   */
  pop() {
    if (this.data.length === 0) {
      return null;
    }
    const first = this.data[0]; // 堆顶元素
    const last = this.data.pop(); // 堆尾元素
    if (first !== last) {
      this.data[0] = last;
      this.shiftDown();
    }

    return first;
  }

  /**
   * 将尾部节点向上调整
   */
  shiftUp() {
    let currentIndex = this.data.length - 1;
    const node = this.data[currentIndex]; // 尾部节点
    while (currentIndex > 0) {
      const parentIndex = (currentIndex - 1) >>> 1; // Math.floor((i - 1) / 2)
      const parent = this.data[parentIndex];
      if (this.compare(parent, node) > 0) {
        // 如果 parent > node，不满足最小堆性质则交换位置
        this.data[parentIndex] = node;
        this.data[currentIndex] = parent;
        currentIndex = parentIndex;
      } else {
        break;
      }
    }
  }

  /**
   * 将第一个元素放在满足最小堆特性的合适的位置
   */
  shiftDown() {
    let index = 0; // 要调整的元素是第一个元素，因此索引是 0
    const halfLength = this.data.length >>> 1;
    const node = this.data[index]; // 要调整的元素
    while (index < halfLength) {
      const leftIndex = index * 2 + 1; // 左子结点索引
      const rightIndex = leftIndex + 1; // 右子节点索引
      const left = this.data[leftIndex]; // 左子节点元素
      const right = this.data[rightIndex]; // 右子节点元素
      if (left && this.compare(node, left) > 0) {
        // node > left
        if (right && this.compare(left, right) > 0) {
          // left > right，说明 node > left 且 left > right，此时 right 是最小的，因此将 right 跟 node 交换位置
          this.data[rightIndex] = node;
          this.data[index] = right;
          index = rightIndex;
        } else {
          // left < right，说明 node > left 且 left < right，此时 left 是最小的，因此将 left 跟 node 交换位置
          this.data[leftIndex] = node;
          this.data[index] = left;
          index = leftIndex;
        }
      } else if (right && this.compare(node, right) > 0) {
        // node < left && node > right，说明 left > right，因此将 node 与 right 交换位置
        this.data[rightIndex] = node;
        this.data[index] = right;
        index = rightIndex;
      } else {
        // 没有要交换的结点，则退出
        break;
      }
    }
  }
}

function compare(a, b) {
  const diff = a.sortIndex - b.sortIndex;
  return diff;
}

const heap = new MinHeap(compare);

heap.push({ sortIndex: 1 });
heap.push({ sortIndex: 2 });
heap.push({ sortIndex: 3 });
console.log(heap.peek());

heap.push({ sortIndex: 4 });
heap.push({ sortIndex: 5 });
heap.push({ sortIndex: 6 });
heap.push({ sortIndex: 7 });

console.log(heap.peek());
heap.pop();
console.log(heap.peek());
