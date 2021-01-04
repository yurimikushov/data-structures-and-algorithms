class LinkedListNode {
  constructor(value, next) {
    return {
      value: value,
      next: next,
    }
  }
}

class LinkedList {
  constructor() {
    this._head
    this._length = 0
  }

  insertAtEnd(value) {
    if (this.isEmpty()) {
      this._head = new LinkedListNode(value)
    } else {
      let lastElement = this._head

      while (lastElement.next) {
        lastElement = lastElement.next
      }

      lastElement.next = new LinkedListNode(value)
    }

    this._length++
  }

  insertAtStart(value) {
    this._head = new LinkedListNode(value, this._head)
    this._length++
  }

  insertAfter(afterValue, value) {
    let prevElement = this._head
    let findedElement = false

    while (prevElement && prevElement.next) {
      if (prevElement.value == afterValue) {
        findedElement = true
        break
      }
      prevElement = prevElement.next
    }

    if (findedElement) {
      prevElement.next = new LinkedListNode(value, prevElement.next)
      this._length++
    }

    return findedElement
  }

  delete(value) {
    if (this.isEmpty()) {
      return
    }

    // check first element

    if (this._head.value == value) {
      return this.deleteAtStart()
    }

    // check other elements

    let prevElement = this._head
    let currentElement = this._head.next

    while (currentElement) {
      if (currentElement.value == value) {
        prevElement.next = currentElement.next
        this._length--
        return value
      }
      prevElement = currentElement
      currentElement = currentElement.next
    }

    return
  }

  deleteAtEnd() {
    if (this.isEmpty()) {
      return
    }

    let lastElement = this._head
    let secondToLastElement

    while (lastElement.next) {
      secondToLastElement = lastElement
      lastElement = lastElement.next
    }

    if (secondToLastElement) {
      secondToLastElement.next = undefined
    }

    this._length--

    return lastElement.value
  }

  deleteAtStart() {
    let valueToDelete

    if (this._head && this._head.next) {
      valueToDelete = this._head.value
      this._head = this._head.next
      this._length--
    }

    return valueToDelete
  }

  isContain(value) {
    if (this.isEmpty()) {
      return false
    }

    let isContain = false

    let currentElement = this._head

    while (currentElement) {
      if (currentElement.value == value) {
        isContain = true
        break
      }
      currentElement = currentElement.next
    }

    return isContain
  }

  isEmpty() {
    return this._length == 0
  }
}

module.exports = LinkedList
