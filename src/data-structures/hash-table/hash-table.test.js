const HashTable = require('./hash-table.js')

describe('check _tableCellIndex() method', () => {
  test('hash table size equals 10', () => {
    let hashTable = new HashTable()

    expect(hashTable._tableCellIndex('key1')).toBe(8)
    expect(hashTable._tableCellIndex('key2')).toBe(9)
    expect(hashTable._tableCellIndex('key3')).toBe(0)
    expect(hashTable._tableCellIndex('key4')).toBe(1)
    expect(hashTable._tableCellIndex('key5')).toBe(2)
  })

  test('hash table size equals 100', () => {
    let hashTable = new HashTable(100)

    expect(hashTable._tableCellIndex('key1')).toBe(78)
    expect(hashTable._tableCellIndex('key2')).toBe(79)
    expect(hashTable._tableCellIndex('key3')).toBe(80)
    expect(hashTable._tableCellIndex('key4')).toBe(81)
    expect(hashTable._tableCellIndex('key5')).toBe(82)
  })
})

describe('check insert() method', () => {
  test('insert a new key-value', () => {
    let hashTable = new HashTable()

    hashTable.insert('key1', 1)
    hashTable.insert('key2', 2)
    hashTable.insert('key3', 3)

    expect(hashTable._headLinkedListNodeInTableCell('key1')).toEqual({
      key: 'key1',
      value: 1,
      next: undefined,
    })
    expect(hashTable._headLinkedListNodeInTableCell('key2')).toEqual({
      key: 'key2',
      value: 2,
      next: undefined,
    })
    expect(hashTable._headLinkedListNodeInTableCell('key3')).toEqual({
      key: 'key3',
      value: 3,
      next: undefined,
    })
  })

  test('insert existing key', () => {
    let hashTable = new HashTable()

    hashTable.insert('key1', 1)
    hashTable.insert('key1', 2)

    expect(hashTable._headLinkedListNodeInTableCell('key1')).toEqual({
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

    expect(hashTable._headLinkedListNodeInTableCell('key1')).toEqual({
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

describe('check delete() method', () => {
  test('delete first element from linked list', () => {
    let hashTable = new HashTable()

    hashTable.insert('key1', 1)

    expect(hashTable.delete('key1')).toBe(1)
    expect(hashTable._headLinkedListNodeInTableCell('key1')).toBe(undefined)
  })

  test('delete middle element from linked list', () => {
    let hashTable = new HashTable()

    hashTable.insert('key1', 1)
    hashTable.insert('key12', 2)
    hashTable.insert('key113', 3)

    expect(hashTable.delete('key12')).toBe(2)
    expect(hashTable._headLinkedListNodeInTableCell('key1')).toEqual({
      key: 'key113',
      value: 3,
      next: {
        key: 'key1',
        value: 1,
        next: undefined,
      },
    })
  })

  test('delete last element from linked list', () => {
    let hashTable = new HashTable()

    hashTable.insert('key1', 1)
    hashTable.insert('key12', 2)
    hashTable.insert('key113', 3)

    expect(hashTable.delete('key113')).toBe(3)
    expect(hashTable._headLinkedListNodeInTableCell('key1')).toEqual({
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
