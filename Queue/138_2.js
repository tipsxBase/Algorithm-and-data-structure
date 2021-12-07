function Node(val, next, random) {
  this.val = val;
  this.next = next;
  this.random = random;
}
const cacheNodeMap = new Map();
var copyRandomList = function (head) {
  if (!head) {
    return null;
  }
  if (!cacheNodeMap.has(head)) {
    const newNode = new Node(head.val);
    cacheNodeMap.set(head, newNode);
    newNode.next = copyRandomList(head.next);
    newNode.random = copyRandomList(head.random);
  }
  return cacheNodeMap.get(head);
};

const array = [
  [7, null],
  [13, 0],
  [11, 4],
  [10, 2],
  [1, 0],
];

let head = null;
let current = null;
const map = new Map();
array.forEach(([val, random], index) => {
  const n = new Node(val);
  map.set(index, n);
  if (!head) {
    head = current = n;
  } else {
    current.next = n;
    current = n;
  }
});

current = head;
array.forEach(([val, random], index) => {
  const n = map.get(random);
  current.random = n;
  current = current.next;
});

console.log(head);
copyRandomList(head);
