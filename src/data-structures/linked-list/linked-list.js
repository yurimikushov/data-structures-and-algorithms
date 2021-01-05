class LinkedList {
  constructor() {
    this._head
    this._length = 0
  }

  insertAtEnd(value) {
    if (this.isEmpty()) {
      this._head = new LinkedListNode(value)
    } else {
      let lastLinkedListNode = this._head

      while (lastLinkedListNode.next) {
        lastLinkedListNode = lastLinkedListNode.next
      }

      lastLinkedListNode.next = new LinkedListNode(value)
    }

    this._length++
  }

  insertAtStart(value) {
    this._head = new LinkedListNode(value, this._head)
    this._length++
  }

  insertAfter(afterValue, value) {
    let prevLinkedListNode = this._head
    let findedLinkedListNode = false

    while (prevLinkedListNode && prevLinkedListNode.next) {
      if (prevLinkedListNode.value === afterValue) {
        findedLinkedListNode = true
        break
      }
      prevLinkedListNode = prevLinkedListNode.next
    }

    if (findedLinkedListNode) {
      prevLinkedListNode.next = new LinkedListNode(value, prevLinkedListNode.next)
      this._length++
    }

    return findedLinkedListNode
  }

  delete(value) {
    if (this.isEmpty()) {
      return
    }

    // check first element

    if (this._head.value === value) {
      return this.deleteAtStart()
    }

    // check other elements

    let prevLinkedListNode = this._head
    let currentLinkedListNode = this._head.next

    while (currentLinkedListNode) {
      if (currentLinkedListNode.value === value) {
        prevLinkedListNode.next = currentLinkedListNode.next
        this._length--
        return value
      }
      prevLinkedListNode = currentLinkedListNode
      currentLinkedListNode = currentLinkedListNode.next
    }

    return
  }

  deleteAtEnd() {
    if (this.isEmpty()) {
      return
    }

    let prevLinkedListNode = this._head
    let secondToLastLinkedListNode

    while (prevLinkedListNode.next) {
      secondToLastLinkedListNode = prevLinkedListNode
      prevLinkedListNode = prevLinkedListNode.next
    }

    if (secondToLastLinkedListNode) {
      secondToLastLinkedListNode.next = undefined
    }

    this._length--

    return prevLinkedListNode.value
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

    let currentLinkedListNode = this._head

    while (currentLinkedListNode) {
      if (currentLinkedListNode.value === value) {
        isContain = true
        break
      }
      currentLinkedListNode = currentLinkedListNode.next
    }

    return isContain
  }

  isEmpty() {
    return this._length === 0
  }
}

class LinkedListNode {
  constructor(value, next) {
    this.value = value
    this.next = next
  }
}

module.exports = LinkedList
