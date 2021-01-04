const Stack = require('../stack/stack.js')

class Queue {
  constructor() {
    this._stack = new Stack()
  }

  insert(value) {
    this._stack.insert(value)
  }

  delete() {
    let reverseStack = new Stack()

    while (!this._stack.isEmpty()) {
      reverseStack.insert(this._stack.delete())
    }

    let result = reverseStack.delete()

    this._stack = new Stack()

    while (!reverseStack.isEmpty()) {
      this._stack.insert(reverseStack.delete())
    }

    return result
  }

  isEmpty() {
    return this._stack.isEmpty()
  }

  peek() {
    let reverseStack = new Stack()

    while (!this._stack.isEmpty()) {
      reverseStack.insert(this._stack.delete())
    }

    let result = reverseStack.peek()

    this._stack = new Stack()

    while (!reverseStack.isEmpty()) {
      this._stack.insert(reverseStack.delete())
    }

    return result
  }
}

module.exports = Queue
