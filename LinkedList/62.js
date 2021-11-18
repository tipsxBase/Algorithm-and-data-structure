/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 * 1011
 *   11
 *    0
 */
var addBinary = function (a, b) {
  let aStack = a.split('');
  let bStack = b.split('');
  let carry = 0; // 进位
  let aBit = aStack.pop();
  let bBit = bStack.pop();
  let result = [];
  while (aBit !== undefined || bBit !== undefined || carry) {
    aBit = aBit === undefined ? 0 : Number(aBit);
    bBit = bBit === undefined ? 0 : Number(bBit);
    let currentBit = aBit + bBit + carry;
    if (currentBit > 1) {
      carry = Math.floor(currentBit / 2);
      currentBit = currentBit % 2;
    } else {
      carry = 0;
    }
    result.unshift(currentBit);
    aBit = aStack.pop();
    bBit = bStack.pop();
  }
  let total = result.join('');
  return total;
};

console.log(addBinary('1010', '1011'));
