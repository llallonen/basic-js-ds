const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
<<<<<<< HEAD:src/st-remove-from-list.js

module.exports = function removeKFromList(l, k) {
  if (!l) {
    return l;
  }
  
  if (l.value === k) {
    if (l.next) {
      return removeKFromList(l.next, k)
    } else {
      return null
    }
  } else {
    return {
      value: l.value,
      next: removeKFromList(l.next, k)
    }
  }
}

=======
function removeKFromList(/* l, k */) {
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  removeKFromList
};
>>>>>>> 10360c681cdb76d11cccc3e41887811b42a20dbe:src/remove-from-list.js
