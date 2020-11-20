class HashTable {
  constructor(size = 10) {
    this._storage = new Array(size)
    this._size = size
  }

  insert(key, value) {
    let isKeyExists = false

    let currentElement = this._item(key)

    while (currentElement) {
      if (currentElement.key == key) {
        currentElement.key = key
        currentElement.value = value
        isKeyExists = true
        break
      }
      currentElement = currentElement.next
    }

    if (!isKeyExists) {
      this._storage[this._hash(key)] = {
        key: key,
        value: value,
        next: this._storage[this._hash(key)],
      }
    }
  }

  get(key) {
    let currentElement = this._item(key)

    while (currentElement) {
      if (currentElement.key == key) {
        return currentElement.value
      }
      currentElement = currentElement.next
    }

    return
  }

  remove(key) {
    let currentElement = this._item(key)

    if (!currentElement) {
      return
    }

    // first linked list element

    if (currentElement.key == key) {
      this._storage[this._hash(key)] = currentElement.next
      return currentElement.value
    }

    // other linked list element

    let linkedList = currentElement

    let prevElement = currentElement
    currentElement = currentElement.next

    while (currentElement) {
      if (currentElement.key == key) {
        prevElement.next = currentElement.next
        this._storage[this._hash(key)] = linkedList
        return currentElement.value
      }
      prevElement = currentElement
      currentElement = currentElement.next
    }

    return
  }

  _hash(key) {
    return key.split('').reduce((acc, ch) => acc + ch.charCodeAt(), 0) % this._size
  }

  _item(key) {
    return this._storage[this._hash(key)]
  }
}

module.exports = HashTable
