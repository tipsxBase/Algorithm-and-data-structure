

class Stack {
  stack
  constructor() {
    this.stack = []
  }
  push(i) {
    this.stack.push(i)
  };
  pop() {
    return this.stack.pop()
  }
  peek() {
    return this.stack[this.stack.length - 1]
  }
  isEmpty() {
    return this.stack.length === 0
  }
  size() {
    return this.stack.length
  }
  forEach(cb){
    this.stack.forEach(cb)
  }

  reverse(){
    this.stack.reverse()
  }
}






/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
  let exp = new Stack()
  s.split('').forEach(item => {
    if(/[\+|\-|\*|\\]$/.test(item)){
      exp.push(item)
    }else if(/[0-9]+/.test(exp.peek()) && /[0-9]+/.test(item)){
      let prev = exp.pop()
      let current = prev + item
      exp.push(current)
    }else {
      if(!/\s+/.test(item)){
        exp.push(item)
      }
    }
  })
  if(exp.size() === 1) {
    return exp.pop()
  }
  let operator = new Stack(); // 运算符
  let num = new Stack();

  exp.forEach((item) => {
    switch (item) {
      case '+':
      case '-':
      case '*':
      case '/':
        operator.push(item);
        break;

      default:
        if (operator.size() === 0 || operator.peek() === '+' || operator.peek() === '-') {
          num.push(item);
        } else {
          let opt = operator.peek()
          let left = num.pop()
          let temp
          if (opt === '*') {
            temp = Number(left) * Number(item)
          }else if (opt === '/'){
            temp = Math.floor(Number(left) / Number(item))
          }
          num.push(temp.toString())
          operator.pop()
        }
        break;
    }
  });
  if(operator.isEmpty()) {
    return num.pop()
  }
  operator.reverse()
  num.reverse()
  let sum = 0
  let left, right;
  while(!num.isEmpty()) {
    let opt = operator.pop()
    left = Number(num.pop())
    right = Number(num.pop())
    let temp = 0
    if(opt === '-') {
      temp = left - right
    }else {
      temp = left + right
    }
    if(!num.isEmpty()){
      num.push(temp)
    }else {
      sum = temp
    }
  }
  return sum
};


console.log(calculate('3 / 2 - 1 * 5'));
