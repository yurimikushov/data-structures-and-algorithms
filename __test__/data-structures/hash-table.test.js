const HashTable = require('./../../src/data-structures/hash-table.js')

describe('check _hash() method', () => {
  test('hash table size equals 10', () => {
    let hashTable = new HashTable()

    expect(hashTable._hash('key1')).toBe(8)
    expect(hashTable._hash('key2')).toBe(9)
    expect(hashTable._hash('key3')).toBe(0)
    expect(hashTable._hash('key4')).toBe(1)
    expect(hashTable._hash('key5')).toBe(2)
  })

  test('hash table size equals 100', () => {
    let hashTable = new HashTable(100)

    expect(hashTable._hash('key1')).toBe(78)
    expect(hashTable._hash('key2')).toBe(79)
    expect(hashTable._hash('key3')).toBe(80)
    expect(hashTable._hash('key4')).toBe(81)
    expect(hashTable._hash('key5')).toBe(82)
  })
})

describe('check insert() method', () => {
  const item = (hashTable, key) => hashTable._storage[hashTable._hash(key)]

  test('insert a new key-value', () => {
    let hashTable = new HashTable()

    hashTable.insert('key1', 1)
    hashTable.insert('key2', 2)
    hashTable.insert('key3', 3)

    expect(item(hashTable, 'key1')).toEqual({
      key: 'key1',
      value: 1,
      next: undefined,
    })
    expect(item(hashTable, 'key2')).toEqual({
      key: 'key2',
      value: 2,
      next: undefined,
    })
    expect(item(hashTable, 'key3')).toEqual({
      key: 'key3',
      value: 3,
      next: undefined,
    })
  })

  test('insert a exists key', () => {
    let hashTable = new HashTable()

    hashTable.insert('key1', 1)
    hashTable.insert('key1', 2)

    expect(item(hashTable, 'key1')).toEqual({
      key: 'key1',
      value: 2,
      next: undefined,
    })
  })

  test('insert a exists key', () => {
    let hashTable = new HashTable()

    hashTable.insert('key1', 1)
    hashTable.insert('key12', 2)
    hashTable.insert('key113', 3)

    expect(item(hashTable, 'key1')).toEqual({
      key: 'key113',
      value: 3,
      next: {
        key: 'key12',
        value: 2,
        next: {
          key: 'key1',
          value: 1,
          next: undefined,
        },
      },
    })
  })
})

describe('check get() method', () => {})

describe('check remove() method', () => {})
