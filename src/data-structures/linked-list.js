class LinkedList {
  constructor() {
    this._storage = {}
  }

  insertAtEnd(value) {
    if (this.isEmpty()) {
      this._storage = this._newElement(value)
    } else {
      let lastElement = this._storage

      while (lastElement.next) {
        lastElement = lastElement.next
      }

      lastElement.next = this._newElement(value)
    }
  }

  insertAtStart(value) {
    if (this.isEmpty()) {
      this._storage = this._newElement(value)
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
    if (this.isEmpty()) {
      return
    }

    // check first element

    if (this._storage.value == value) {
      return this.deleteAtStart()
    }

    // check other elements

    let prevElement = this._storage
    let currentElement = this._storage.next

    while (currentElement) {
      if (currentElement.value == value) {
        prevElement.next = currentElement.next
        return value
      }
      prevElement = currentElement
      currentElement = currentElement.next
    }

    return
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
    let valueToDelete

    if (this._storage.next) {
      valueToDelete = this._storage.value
      this._storage = this._storage.next
    }

    return valueToDelete
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
