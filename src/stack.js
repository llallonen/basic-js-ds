const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
<<<<<<< HEAD:src/st-stack.js
 module.exports = class Stack {
  constructor() {
    this.stack = []
  }

  push(element) {
    this.stack.push(element);
=======
class Stack {
  push(/* element */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
>>>>>>> 10360c681cdb76d11cccc3e41887811b42a20dbe:src/stack.js
  }

  pop() {
    return this.stack.pop();
  }

  peek() {
    return this.stack[this.stack.length-1];
  }
}

module.exports = {
  Stack
};
