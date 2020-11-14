class LinkedList {
  constructor() {
    this._storage = {}
  }

  insertAtEnd(value) {
    if (this.isEmpty()) {
      this._storage = this._newElement(value, null)
    } else {
      let lastElement = this._storage

      while (lastElement.next) {
        lastElement = lastElement.next
      }

      lastElement.next = this._newElement(value, null)
    }
  }

  insertAtStart(value) {
    if (this.isEmpty()) {
      this._storage = this._newElement(value, null)
    } else {
      this._storage = this._newElement(value, this._storage)
    }
  }

  insertAfter(afterValue, value) {
    let prevElement = this._storage,
      findedElement = false

    while (prevElement.next) {
      if (prevElement.value == afterValue) {
        findedElement = true
        break
      }
      prevElement = prevElement.next
    }

    if (findedElement) {
      prevElement.next = this._newElement(value, prevElement.next)
    }

    return findedElement
  }

  delete(value) {
    let newLinkedList = new LinkedList()

    let currentElement = this._storage

    while (currentElement) {
      if (currentElement.value != value) {
        newLinkedList.insertAtEnd(currentElement.value)
      }

      currentElement = currentElement.next
    }

    this._storage = newLinkedList._storage
  }

  deleteAtEnd() {
    let secondToLastElement

    let lastElement = this._storage

    while (lastElement.next) {
      secondToLastElement = lastElement
      lastElement = lastElement.next
    }

    if (secondToLastElement) {
      secondToLastElement.next = undefined
    }

    return lastElement.value
  }

  deleteAtStart() {
    let value

    if (this._storage.next) {
      value = this._storage.value
      this._storage = this._storage.next
    }

    return value
  }

  isContain(value) {
    if (this.isEmpty()) {
      return false
    }

    let isContain = false

    let currentElement = this._storage

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
    return Object.keys(this._storage).length == 0
  }

  _newElement(value, next) {
    return {
      value: value,
      next: next,
    }
  }
}

module.exports = LinkedList
