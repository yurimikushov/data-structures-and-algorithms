class Set {
  constructor() {
    this._storage = []
  }

  has(value) {
    return this._storage.includes(value)
  }

  insert(value) {
    if (!this.has(value)) {
      this._storage.push(value)
    }
  }

  delete(value) {
    let index = this._storage.indexOf(value)

    if (index != -1) {
      this._storage.splice(index, 1)
    }
  }

  unite(set) {
    for (let value of set.toArray()) {
      if (!this.has(value)) {
        this.insert(value)
      }
    }
  }

  intersection(set) {
    let result = new Set()

    for (let value of set.toArray()) {
      if (this.has(value)) {
        result.insert(value)
      }
    }

    return result
  }

  difference(set) {
    let result = new Set()

    for (let value of this.toArray()) {
      if (!set.has(value)) {
        result.insert(value)
      }
    }

    for (let value of set.toArray()) {
      if (!this.has(value)) {
        result.insert(value)
      }
    }

    return result
  }

  subset(set) {
    return this._storage.every((value) => set.has(value))
  }

  toArray() {
    return this._storage
  }
}

module.exports = Set
