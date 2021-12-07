/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function (ops) {
  let stack = [];
  ops.forEach((s) => {
    switch (s) {
      case 'C':
        stack.pop();
        break;
      case 'D':
        let last = stack[stack.length - 1];
        stack.push(last * 2);
        break;
      case '+':
        let last1 = stack[stack.length - 2];
        let last2 = stack[stack.length - 1];
        stack.push(Number(last1) + Number(last2));
        break;
      default:
        stack.push(s);
        break;
    }
  });
  return stack.reduce((c, p) => {
    return c + Number(p);
  }, 0);
};

console.log(calPoints(['5', '2', 'C', 'D', '+']));
