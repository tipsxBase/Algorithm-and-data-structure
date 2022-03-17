/**
 * 三步问题。有个小孩正在上楼梯，楼梯有n阶台阶，小孩一次可以上1阶、2阶或3阶。
 * 实现一种方法，计算小孩有多少种上楼梯的方式。结果可能很大，你需要对结果模1000000007。
 *
 * f(i) 表示爬上 i 阶楼梯有多少种方法，由于小孩子一次只能爬 1、2、3 阶，因此
 * f(i) = f(i-1) + f(i-2) + f(i-3)
 * f[1] = 1
 */

/**
 * @param {number} n
 * @return {number}
 */
var waysToStep = function (n) {
  const mod = 1000000007;
  const f = [];
  f[1] = 1; //
  f[2] = 2; // 1 1, 2
  f[3] = 4; // 1 1 1, 2 1, 1 2, 3
  for (i = 4; i <= n; i++) {
    f[i] = (f[i - 1] + f[i - 2] + f[i - 3]) % mod;
  }
  return f[n];
};

console.log(waysToStep(5));
