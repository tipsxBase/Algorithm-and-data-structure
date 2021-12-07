/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function (tasks, n) {
  if (n === 0 || tasks.length < 2) {
    return tasks.length;
  }
};

// "A", "A", "A", "A", "A", "A", "B","B", "B", "C", "D", "E", "F", "G"
console.log(
  leastInterval(
    ['A', 'A', 'A', 'A', 'A', 'A', 'B', 'C', 'D', 'E', 'F', 'G'],
    2,
  ),
);
