/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let stack = [];

  const relation = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  const end = Object.keys(relation)
  const open = Object.values(relation)

  s.split("").forEach((item) => {
    if (open.includes(item)) {
      stack.push(item);
    }else if(end.includes(item)){
        let toBe = stack.pop()
        if(relation[item] !== toBe){
            stack.push(toBe)
            stack.push(item)
        }
    }
  });
  if(stack.length > 0) {
      return false
  }
  return true
};


console.log(isValid('(])'))