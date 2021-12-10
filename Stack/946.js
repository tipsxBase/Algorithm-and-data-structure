/**
 *
 * 通过 popped 反推入栈出栈顺序
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function (pushed, popped) {
  let stack = []; // 临时栈
  let prevIndex = 0;
  let flag = true;
  while (popped.length > 0) {
    // 取出一个出栈的元素，并找到它在 Pushed 中的位置，那么在Pushed中它前面的元素一定都入栈了
    let p = popped.shift();
    let index = pushed.indexOf(p);
    if (!stack.includes(p)) {
      // 如果栈中不包含 p 则将 p 前面的元素都入栈
      stack = stack.concat(pushed.slice(prevIndex, index));
      prevIndex = index + 1; // 入过栈的元素不能重复入栈，因此下次入栈应该从当前索引的下一个开始入栈
    } else {
      // 如果栈中包含p说明是之前入过栈的，那么此时 stack 的出栈的顺序跟 popped 中顺序一定是一致的
      let t = stack.pop();
      if (t !== p) {
        flag = false;
        break;
      }
    }
  }
  return flag;
};

// [1,2,3,4,5]
// [4,5,3,2,1]
console.log(validateStackSequences([1, 0, 2], [2, 1, 0]));
