/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function (s) {
  let stack = [];
  let strArray = s.split('');
  strArray.forEach((item, index) => {
    if (item === '(') {
      stack.push({
        val: item,
        pos: index,
      });
    } else if (item === ')') {
      if (stack.length !== 0) {
        let last = stack[stack.length - 1];
        if (last.val === '(') {
          stack.pop();
        } else {
          stack.push({
            val: item,
            pos: index,
          });
        }
      } else {
        stack.push({
          val: item,
          pos: index,
        });
      }
    }
  });
  if (stack.length > 0) {
    stack.forEach((item, index) => {
      const { pos } = item;
      strArray[pos] = '#';
    });
  }
  return strArray.join('').replace(/#/g, '');
};

console.log(minRemoveToMakeValid('(a(b(c)d)'));
