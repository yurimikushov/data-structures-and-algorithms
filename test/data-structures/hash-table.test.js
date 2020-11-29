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
  test('insert a new key-value', () => {
    let hashTable = new HashTable()

    hashTable.insert('key1', 1)
    hashTable.insert('key2', 2)
    hashTable.insert('key3', 3)

    expect(hashTable._item('key1')).toEqual({
      key: 'key1',
      value: 1,
      next: undefined,
    })
    expect(hashTable._item('key2')).toEqual({
      key: 'key2',
      value: 2,
      next: undefined,
    })
    expect(hashTable._item('key3')).toEqual({
      key: 'key3',
      value: 3,
      next: undefined,
    })
  })

  test('insert existing key', () => {
    let hashTable = new HashTable()

    hashTable.insert('key1', 1)
    hashTable.insert('key1', 2)

    expect(hashTable._item('key1')).toEqual({
      key: 'key1',
      value: 2,
      next: undefined,
    })
  })

  test('insert multiple values in a single array cell', () => {
    let hashTable = new HashTable()

    hashTable.insert('key1', 1)
    hashTable.insert('key12', 2)
    hashTable.insert('key113', 3)

    expect(hashTable._item('key1')).toEqual({
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

describe('check get() method', () => {
  test('get an existing value', () => {
    let hashTable = new HashTable()

    hashTable.insert('key1', 1)
    hashTable.insert('key1', 2)

    expect(hashTable.get('key1')).toBe(2)
  })

  test('get an unexisting value', () => {
    expect(new HashTable().get('key1')).toBe(undefined)
  })
})

describe('check remove() method', () => {
  test('remove first element from linked list', () => {
    let hashTable = new HashTable()

    hashTable.insert('key1', 1)

    expect(hashTable.remove('key1')).toBe(1)
    expect(hashTable._item('key1')).toBe(undefined)
  })

  test('remove middle element from linked list', () => {
    let hashTable = new HashTable()

    hashTable.insert('key1', 1)
    hashTable.insert('key12', 2)
    hashTable.insert('key113', 3)

    expect(hashTable.remove('key12')).toBe(2)
    expect(hashTable._item('key1')).toEqual({
      key: 'key113',
      value: 3,
      next: {
        key: 'key1',
        value: 1,
        next: undefined,
      },
    })
  })

  test('remove last element from linked list', () => {
    let hashTable = new HashTable()

    hashTable.insert('key1', 1)
    hashTable.insert('key12', 2)
    hashTable.insert('key113', 3)

    expect(hashTable.remove('key113')).toBe(3)
    expect(hashTable._item('key1')).toEqual({
      key: 'key12',
      value: 2,
      next: {
        key: 'key1',
        value: 1,
        next: undefined,
      },
    })
  })
})
