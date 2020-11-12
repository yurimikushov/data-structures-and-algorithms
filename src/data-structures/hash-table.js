class HashTable {
  constructor(size = 10) {
    this._storage = new Array(size)
    this._size = size
  }

  insert(key, value) {
    let isKeyExists = false

    let item = this._storage[this._hash(key)]

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

  get(key) {}

  remove(key) {}

  _hash(key) {
    return key.split('').reduce((acc, ch) => acc + ch.charCodeAt(), 0) % this._size
  }
}

module.exports = HashTable
