const LinkedList = require('./../../src/data-structures/linked-list.js')

describe('check isEmpty() method', () => {
  test('new linked list is empty', () => {
    expect(new LinkedList().isEmpty()).toBe(true)
  })

  test('filled linked list is not empty', () => {
    let linkedList = new LinkedList()

    linkedList.insertAtEnd(1)

    expect(linkedList.isEmpty()).toBe(false)
  })
})

describe('check insertAtEnd() method', () => {
  test('insert three elements to end', () => {
    let linkedList = new LinkedList()

    linkedList.insertAtEnd(1)
    linkedList.insertAtEnd(2)
    linkedList.insertAtEnd(3)

    expect(linkedList._head).toEqual({
      value: 1,
      next: {
        value: 2,
        next: {
          value: 3,
          next: undefined,
        },
      },
    })
  })
})

describe('check insertAtStart() method', () => {
  test('intert one element to empty linked list', () => {
    let linkedList = new LinkedList()

    linkedList.insertAtStart(1)

    expect(linkedList._head).toEqual({
      value: 1,
      next: undefined,
    })
  })

  test('insert one element to filled linked list', () => {
    let linkedList = new LinkedList()

    linkedList.insertAtEnd(1)
    linkedList.insertAtEnd(2)
    linkedList.insertAtEnd(3)

    linkedList.insertAtStart(4)

    expect(linkedList._head).toEqual({
      value: 4,
      next: {
        value: 1,
        next: {
          value: 2,
          next: {
            value: 3,
            next: undefined,
          },
        },
      },
    })
  })
})

describe('check insertAfter() method', () => {
  test('insert one element to middle', () => {
    let linkedList = new LinkedList()

    linkedList.insertAtEnd(1)
    linkedList.insertAtEnd(2)

    linkedList.insertAfter(1, 3)

    expect(linkedList._head).toEqual({
      value: 1,
      next: {
        value: 3,
        next: {
          value: 2,
          next: undefined,
        },
      },
    })
  })
})

describe('check delete() method', () => {
  test('delete from empty linked list', () => {
    expect(new LinkedList().delete(1)).toBe(undefined)
  })

  test('delete non-existent element at filled linked list', () => {
    let linkedList = new LinkedList()

    linkedList.insertAtEnd(1)

    expect(linkedList.delete(2)).toBe(undefined)
  })

  test('delete two exists elements at middle', () => {
    let linkedList = new LinkedList()

    linkedList.insertAtEnd(1)
    linkedList.insertAtEnd(2)
    linkedList.insertAtEnd(3)
    linkedList.insertAtEnd(4)

    expect(linkedList.delete(2)).toBe(2)
    expect(linkedList.delete(3)).toBe(3)
    expect(linkedList._head).toEqual({
      value: 1,
      next: {
        value: 4,
        next: undefined,
      },
    })
  })
})

describe('check deleteAtEnd() method', () => {
  test('delete from empty linked list', () => {
    expect(new LinkedList().deleteAtStart()).toBe(undefined)
  })

  test('delete from filled linked list', () => {
    let linkedList = new LinkedList()

    linkedList.insertAtEnd(1)
    linkedList.insertAtEnd(2)
    linkedList.insertAtEnd(3)

    expect(linkedList.deleteAtEnd()).toBe(3)
    expect(linkedList._head).toEqual({
      value: 1,
      next: {
        value: 2,
        next: undefined,
      },
    })
  })
})

describe('check deleteAtStart() method', () => {
  test('delete from empty linked list', () => {
    expect(new LinkedList().deleteAtStart()).toBe(undefined)
  })

  test('delete from filled linked list', () => {
    let linkedList = new LinkedList()

    linkedList.insertAtEnd(1)
    linkedList.insertAtEnd(2)
    linkedList.insertAtEnd(3)

    expect(linkedList.deleteAtStart()).toBe(1)
    expect(linkedList._head).toEqual({
      value: 2,
      next: {
        value: 3,
        next: undefined,
      },
    })
  })
})

describe('check isContain() method', () => {
  test('linked list is contain checked element', () => {
    let linkedList = new LinkedList()

    linkedList.insertAtEnd(1)

    expect(linkedList.isContain(1)).toBe(true)
  })

  test('linked list is not contain checked element', () => {
    expect(new LinkedList().isContain(1)).toBe(false)
  })
})
