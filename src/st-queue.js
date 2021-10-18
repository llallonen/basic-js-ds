const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
module.exports = class Queue {
  getUnderlyingList() {
    return this
  }

  enqueue(value) {
    function lastNext(listNode) {
      if (!listNode.next) {
        return listNode
      }
    
      return lastNext(listNode.next)
    
    }

    if (typeof this.next === 'object') {
      const lastListNode = lastNext(this);
      lastListNode.next = {}
      ListNode.call(lastListNode.next, value)
      
      return
    }

    ListNode.call(this, value);
  }

  dequeue() {
  	const copy = Object.assign({}, this)
    Object.assign(this, this.next)
    return copy.value
  }
}
