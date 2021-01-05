class HashTable {
  constructor(size = 10) {
    this._table = new Array(size)
    this._size = size
  }

  insert(key, value) {
    let isKeyExists = false

    let headLinkedListNode = this._headLinkedListNodeInTableCell(key)
    let currentLinkedListNode = headLinkedListNode

    while (currentLinkedListNode) {
      if (currentLinkedListNode.is(key)) {
        currentLinkedListNode.update(value)
        isKeyExists = true
        break
      }
      currentLinkedListNode = currentLinkedListNode.next
    }

    if (!isKeyExists) {
      this._table[this._tableCellIndex(key)] = new LinkedListNode(key, value, headLinkedListNode)
    }
  }

  get(key) {
    let linkedListNode = this._headLinkedListNodeInTableCell(key)

    while (linkedListNode) {
      if (linkedListNode.is(key)) {
        return linkedListNode.value
      }
      linkedListNode = linkedListNode.next
    }

    return
  }

  delete(key) {
    let currentLinkedListNode = this._headLinkedListNodeInTableCell(key)

    if (!currentLinkedListNode) {
      return
    }

    // first linked list element

    if (currentLinkedListNode.is(key)) {
      this._table[this._tableCellIndex(key)] = currentLinkedListNode.next
      return currentLinkedListNode.value
    }

    // other linked list element

    let prevLinkedListNode = currentLinkedListNode
    currentLinkedListNode = currentLinkedListNode.next

    while (currentLinkedListNode) {
      if (currentLinkedListNode.is(key)) {
        prevLinkedListNode.next = currentLinkedListNode.next
        return currentLinkedListNode.value
      }
      prevLinkedListNode = currentLinkedListNode
      currentLinkedListNode = currentLinkedListNode.next
    }
  }

  _tableCellIndex(key) {
    return key.split('').reduce((acc, ch) => acc + ch.charCodeAt(), 0) % this._size
  }

  _headLinkedListNodeInTableCell(key) {
    return this._table[this._tableCellIndex(key)]
  }
}

class LinkedListNode {
  constructor(key, value, next) {
    this.key = key
    this.value = value
    this.next = next
  }

  is(key) {
    return this.key === key
  }

  update(value) {
    this.value = value
  }
}

module.exports = HashTable
