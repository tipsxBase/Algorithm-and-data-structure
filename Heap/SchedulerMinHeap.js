/**
 * 向最小堆添加元素
 * @param {*} heap
 * @param {*} node
 */
function push(heap, node) {
  const index = heap.length;
  heap.push(node);
  shiftUp(heap, node, index);
}

function peek(heap) {
  if (heap && heap.length > 0) {
    return heap[0];
  }
  return null;
}
/**
 * 弹出堆顶元素
 * @param {*} heap
 */
function pop(heap) {
  const first = heap[0];
  if (first) {
    const last = heap.pop();
    if (first !== last) {
      heap[0] = last;
      shiftDown(heap, last, 0);
    }
  }
  return first;
}

/**
 * 向上调整
 * @param {*} heap 最小堆
 * @param {*} node 需要调整的节点
 * @param {*} index 当前节点的索引
 */
function shiftUp(heap, node, i) {
  let index = i;
  while (index > 0) {
    const parentIndex = (index - 1) >>> 1;
    const parent = heap[parentIndex];
    if (parent && compare(parent, node) > 0) {
      // parent > node
      heap[parentIndex] = node;
      heap[index] = parent;
      index = parentIndex;
    } else {
      break;
    }
  }
}

/**
 * 将 node 向下调整
 * @param {*} heap
 * @param {*} node
 * @param {*} i
 */
function shiftDown(heap, node, i) {
  let index = i;
  // 未尾结点的索引是 heap.length - 1
  // 未尾结点的父结点的索引是 heap.length - 1 - 1 >>> 1
  // 当前结点的索引是 heap.length - 1 - 1 >>> 1 时，说明此时最多只能进行一次交换了
  // 由此可以看出当 parentIndex 最大不会超过 halfLength
  // 减少循环比较次数（少执行一次循环）
  let halfLength = heap.length >>> 1;
  while (index < halfLength) {
    const leftIndex = (index + 1) * 2 - 1; // 2 * (index + 1) - 1
    const rightIndex = leftIndex + 1;
    const left = heap[leftIndex];
    const right = heap[rightIndex];
    if (left && compare(left, node) < 0) {
      // left < node
      if (right && compare(right, left) < 0) {
        // right < left ，父结点跟右子进行交换
        heap[index] = right;
        heap[rightIndex] = node;
        index = rightIndex;
      } else {
        heap[index] = left;
        heap[leftIndex] = node;
        index = leftIndex;
      }
    } else if (right && compare(right, node) < 0) {
      // left > node && right < node 则跟右结点交换
      heap[index] = right;
      heap[rightIndex] = node;
      index = rightIndex;
    } else {
      break;
    }
  }
}

function compare(a, b) {
  const diff = a.sortIndex - b.sortIndex;
  return diff;
}

const heap = [];
push(heap, { sortIndex: 1 });
push(heap, { sortIndex: 2 });
push(heap, { sortIndex: 3 });
console.log(peek(heap));
push(heap, { sortIndex: 4 });
push(heap, { sortIndex: 5 });
push(heap, { sortIndex: 6 });
push(heap, { sortIndex: 7 });

console.log(peek(heap));
pop(heap);

console.log(peek(heap));
