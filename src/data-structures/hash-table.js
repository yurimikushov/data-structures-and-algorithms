class HashTable {
  constructor(size = 10) {
    this._storage = []
    this._size = size
  }

  insert(key, value) {}

  get(key) {}

  remove(key) {}

  _hash(key) {
    return key.split('').reduce((acc, ch) => acc + ch.charCodeAt(), 0) % this._size
  }
}

module.exports = HashTable
