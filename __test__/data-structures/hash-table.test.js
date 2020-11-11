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

describe('check insert() method', () => {})

describe('check get() method', () => {})

describe('check remove() method', () => {})
