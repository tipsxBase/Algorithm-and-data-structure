/**
 * 给定一个包含非负整数的 m x n 网格 grid ，请找出一条从左上角到右下角的路径，使得路径上的数字总和为最小。
 * 每次只能向下或者向右移动一步
 *
 * 令 f[i][j] 表示从左上角到坐标 (i,j) 的路径数字和最小值，grid[i][j] 表示坐标 (i,j) 处的数字大小
 * 原问题即可被划分为多个求最优值的子问题，且由于每次只能向下或向右移动一步，因此 f[i][j] 的取值由 f[i-1][j] 和 f[i][j-1] 的值决定，
 * 即符合「最优子结构原则」。进一步验证，可以发现 f[i][j] 的取值与 f[i-1][j] 和 f[i][j-1] 所对应的具体路径无关，
 * 因此符合「无后效性」。
 *
 * 状态转移方程
 * f[i][j] = min(f[i-1][j], f[i][j-1]) + grid[i][j]
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (i === 0 && j === 0) continue;
      let tp = Infinity;
      // 求 g[i -1][j] 与 g[i][j-1]的最小值
      if (i > 0) tp = Math.min(tp, g[i - 1][j]);
      if (j > 0) tp = Math.min(tp, g[i][j - 1]);
      grid[i][j] = grid[i][j] + tp;
    }
  }
  return grid[grid.length - 1][grid[0].length - 1];
};
