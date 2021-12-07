/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
  let sStack = [];
  let tStack = [];
  s.split('').forEach((item) => {
    if (item === '#') {
      sStack.pop();
    } else {
      sStack.push(item);
    }
  });
  t.split('').forEach((item) => {
    if (item === '#') {
      tStack.pop();
    } else {
      tStack.push(item);
    }
  });

  return sStack.join('') === tStack.join('');
};
