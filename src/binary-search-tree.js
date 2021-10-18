const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

module.exports = class BinarySearchTree {
  init = null;

  root() {
    return this.init;
  }

  add(data) {
    let newNode = new Node(data);
    if (this.init === null) {
      this.init = newNode;
    } else {
      this.addNode(this.init, newNode);
    }
  }

  addNode(node, newNode) {
    if (newNode.data < node.data) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.addNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.addNode(node.right, newNode);
      }
    }
  }

  has(data) {
    return search(this.init, data);

    function search(node, data) {
      if (!node) {
        return false;
      }

      if (node.data === data) {
        return true;
      }

      return data < node.data ? search(node.left, data) : search(node.right, data);
    }
  }

  find(data) {
    return findDeeper(this.init, data) || null;

    function findDeeper(node, data) {
      if (!node) {
        return null;
      }

      if (node.data === data) {
        return node;
      }

      return data < node.data ? findDeeper(node.left, data) : findDeeper(node.right, data);
    }
  }

  remove(data) {
    this.init = removeNode(this.init, data);

    function findMin(node) {
      if (node) {
        while (node && node.left !== null) {
          node = node.left
        }
        return node;
      }
      return null;
    }

    function removeNode(node, data) {
      if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      }
      else if (data > node.data) {
        node.right = removeNode(node.right, data);
        return node;
      } else {
        if (node.left === null && node.right === null) {
          node = null;
          return node;
        }
        if (node.left === null) {
          node = node.right;
          return node;
        } else if (node.right === null) {
          node = node.left;
          return node;
        }

        let newNode = findMin(node.right);
        node.data = newNode.data;
        node.right = removeNode(node.right, newNode.data);
        return node;
      }
    }
  }

  min() {
    let node = this.init;

    if (node) {
        while (node && node.left) {
            node = node.left;
        }
        return node.data;
    }
    return null;
  }

  max() {
    let node = this.init;

    if (node) {
        while (node && node.right) {
            node = node.right;
        }
        return node.data;
    }
    return null;
  }
}