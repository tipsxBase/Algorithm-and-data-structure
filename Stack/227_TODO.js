/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
  s = s.replace(/\s/g, '');
  let operator = []; // 运算符
  let num = [];
  s.split('').forEach((item) => {
    switch (item) {
      case '+':
        operator.push(item);
        break;
      case '-':
        operator.push(item);
        break;
      case '*':
        break;
      case '/':
        break;

      default:
        num.push(item);
        break;
    }
  });
};
