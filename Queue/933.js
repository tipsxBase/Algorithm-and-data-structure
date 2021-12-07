var RecentCounter = function () {
  this.requests = [];
  this.duration = 3000;
};

/**
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function (t) {
  this.requests.push(t);
  if (t <= this.duration) {
    return this.requests.length;
  }
  // 将大于3000ms的请求移出队列
  while (t - 3000 > this.requests[0]) {
    this.requests.shift();
  }
  return this.requests.length;
};

const counter = new RecentCounter();

console.log(counter.ping(1)); // requests = [1]，范围是 [-2999,1]，返回 1
console.log(counter.ping(100)); // requests = [1, 100]，范围是 [-2900,100]，返回 2
console.log(counter.ping(3001)); // requests = [1, 100, 3001]，范围是 [1,3001]，返回 3
console.log(counter.ping(3002)); // requests = [1, 100, 3001, 3002]，范围是 [2,3002]，返回 3
console.log(counter.ping(3101)); // requests = [1, 100, 3001, 3002, 3100]，范围是 [100,3100]，返回 3

debugger;
