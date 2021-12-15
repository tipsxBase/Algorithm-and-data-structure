/**
 * @param {string} s
 * @return {string}
 */
var toLowerCase = function (s) {
  let result = s.split('').map((item) => {
    if (item.charCodeAt() < 97) {
      return item;
    } else {
      return String.fromCharCode(item.charCodeAt() - 32);
    }
  });
  return result.join('');
};
