class Heap {
  constructor(data = []) {
    this.data = data;
  }
  get size() {
    return this.data.length;
  }
  // 将 data 调整为堆
  normalize() {
    // 只有一个元素，无需调整
    if (this.size < 2) return;
    for (let i = 0; i < this.data.length; i++) {}
  }
}
