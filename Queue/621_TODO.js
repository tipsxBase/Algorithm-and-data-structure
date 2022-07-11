/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function (tasks, n) {
  if (n === 0 || tasks.length < 2) {
    return tasks.length;
  }
  // 执行的顺序
  let debugSort = [];
  let time = 0;
  // 记录每种task的执行次数
  const taskMap = new Map();
  tasks.forEach((task) => {
    let count = 0;
    if (taskMap.has(task)) {
      count = taskMap.get(task);
    }
    count++;
    taskMap.set(task, count);
  });
  // 所有的任务都一样
  if (taskMap.size === 1) {
    return tasks.length * (n + 1) - n;
  }
  // 执照执行次数对task进行排序
  let taskQueue = [];
  for (const task of taskMap.entries()) {
    taskQueue.push(task);
  }
  taskQueue = taskQueue.sort((a, b) => b[1] - a[1]);
  let taskIndex = 0;
  // 记录task开始执行的时间
  let taskStatus = new Map();
  while (taskQueue.length > 0) {
    const [task] = taskQueue[taskIndex];
    // 当前本次task的执行时间
    const prevTime =
      taskStatus.get(task) === undefined ? -1 : taskStatus.get(task);

    // 任务不满足执行条件
    if (prevTime !== -1 && time - prevTime <= n) {
      // 等待
      time++;
      debugSort.push('=');
    } else {
      // 任务执行
      taskStatus.set(task, time);
      time++;
      let count = taskMap.get(task);
      count--;
      debugSort.push('x-' + task);
      // 当前任务已经执行完了，那么将它从taskQueue中删除
      if (count === 0) {
        taskMap.delete(task);
        taskQueue = taskQueue.filter((t) => t[0] !== task);
        taskStatus.delete(task);
        hasDeleteTask = true;
      } else {
        taskMap.set(task, count);
        taskQueue[taskIndex][1] = count;
        taskQueue = taskQueue.sort((a, b) => b[1] - a[1]);
      }
    }
    let nextTaskIndex = null;
    // 查找等待任务中满足条件的剩余执行次数最多的任务
    for (let index = 0; index < taskQueue.length; index++) {
      const pendingTask = taskQueue[index];
      const [task] = pendingTask;
      if (taskStatus.has(taskStatus) && time - taskStatus.get(task) > n) {
        nextTaskIndex = index;
      } else if (nextTaskIndex === null && !taskStatus.has(task)) {
        // 第一个没有执行过的任务
        nextTaskIndex = index;
      }
    }
    taskIndex = nextTaskIndex;
  }
  console.log(debugSort);
  return time;
};

// "A", "A", "A", "A", "A", "A", "B","B", "B", "C", "D", "E", "F", "G"
// 'A', 'A', 'A', 'B', 'B', 'B';
console.log(
  leastInterval(
    ['A', 'A', 'A', 'A', 'A', 'A', 'B', 'B', 'B', 'C', 'D', 'E', 'F', 'G'],
    2,
  ),
);

// a b c a b c d a b c d e
