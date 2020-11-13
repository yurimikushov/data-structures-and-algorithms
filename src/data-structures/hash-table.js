class HashTable {
  constructor(size = 10) {
    this._storage = new Array(size)
    this._size = size
  }

  insert(key, value) {
    let isKeyExists = false

    let item = this._item(key)

    while (item) {
      if (item.key == key) {
        item.key = key
        item.value = value
        isKeyExists = true
        break
      }
      item = item.next
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
    let item = this._item(key)

    while (item) {
      if (item.key == key) {
        return item.value
      }
      item = item.next
    }

    return
  }

  remove(key) {
    let item = this._item(key)

    if (!item) {
      return
    }

    // first linked list item

    if (item.key == key) {
      this._storage[this._hash(key)] = item.next
      return item.value
    }

    // other linked list item

    let linkedList = item

    let prev = item
    item = item.next

    while (item) {
      if (item.key == key) {
        prev.next = item.next
        this._storage[this._hash(key)] = linkedList
        return item.value
      }
      prev = item
      item = item.next
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
