/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function (s) {
  let units = [];
  let unit = []; // 单个原语
  const stack = [];
  s.split('').forEach((str) => {
    if (str === '(') {
      stack.push(str);
    } else if (str === ')') {
      stack.pop();
    }
    unit.push(str);
    if (stack.length === 0) {
      units.push(unit.join(''));
      unit = [];
    }
  });
  units = units.map((u) => {
    if (u.length > 2) {
      return u.substr(1, u.length - 2);
    }
    return '';
  });
  return units.join('');
};

console.log(removeOuterParentheses('()()'));
