const LinkedList = require('./../../src/data-structures/linked-list.js')

describe('check isEmpty() method', () => {
  test('new linked list is empty', () => {
    expect(new LinkedList().isEmpty()).toBe(true)
  })
})

describe('check insertAtEnd() method', () => {
  test('insert three elements', () => {
    let linkedList = new LinkedList()

    linkedList.insertAtEnd(1)
    linkedList.insertAtEnd(2)
    linkedList.insertAtEnd(3)

    let storage = linkedList._storage

    expect(storage.value).toBe(1)
    expect(storage.next.value).toBe(2)
    expect(storage.next.next.value).toBe(3)
  })
})

describe('check insertAtStart() method', () => {
  test('insert one element to start', () => {
    let linkedList = new LinkedList()

    linkedList.insertAtEnd(1)
    linkedList.insertAtEnd(2)
    linkedList.insertAtEnd(3)

    linkedList.insertAtStart(4)

    let storage = linkedList._storage

    expect(storage.value).toBe(4)
    expect(storage.next.value).toBe(1)
    expect(storage.next.next.value).toBe(2)
    expect(storage.next.next.next.value).toBe(3)
  })
})

describe('check insertAfter() method', () => {
  test('insert one element', () => {
    let linkedList = new LinkedList()

    linkedList.insertAtEnd(1)
    linkedList.insertAtEnd(2)
    linkedList.insertAtEnd(3)
    linkedList.insertAtEnd(4)

    linkedList.insertAfter(2, 5)

    let storage = linkedList._storage

    expect(storage.value).toBe(1)
    expect(storage.next.value).toBe(2)
    expect(storage.next.next.value).toBe(5)
    expect(storage.next.next.next.value).toBe(3)
    expect(storage.next.next.next.next.value).toBe(4)
  })
})

describe('check delete() method', () => {
  test('delete two elements', () => {
    let linkedList = new LinkedList()

    linkedList.insertAtEnd(1)
    linkedList.insertAtEnd(2)
    linkedList.insertAtEnd(3)
    linkedList.insertAtEnd(4)

    linkedList.delete(1)
    linkedList.delete(2)

    let storage = linkedList._storage

    expect(storage.value).toBe(3)
    expect(storage.next.value).toBe(4)
  })
})

describe('check deleteAtEnd() method', () => {
  test('delete the last element', () => {
    let linkedList = new LinkedList()

    linkedList.insertAtEnd(1)
    linkedList.insertAtEnd(2)
    linkedList.insertAtEnd(3)

    linkedList.deleteAtEnd()

    let storage = linkedList._storage

    expect(storage.value).toBe(1)
    expect(storage.next.value).toBe(2)
  })
})

describe('check deleteAtStart() method', () => {
  test('delete the first element', () => {
    let linkedList = new LinkedList()

    linkedList.insertAtEnd(1)
    linkedList.insertAtEnd(2)
    linkedList.insertAtEnd(3)

    linkedList.deleteAtStart()

    let storage = linkedList._storage

    expect(storage.value).toBe(2)
    expect(storage.next.value).toBe(3)
  })
})

describe('check isContain() method', () => {
  test('check two elements', () => {
    let linkedList = new LinkedList()

    linkedList.insertAtEnd(1)
    linkedList.insertAtEnd(2)
    linkedList.insertAtEnd(3)

    expect(linkedList.isContain(2)).toBe(true)
    expect(linkedList.isContain(4)).toBe(false)
  })
})
