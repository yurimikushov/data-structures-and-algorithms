const Queue = require('./queue-by-stack.js')

describe('check insert() method', () => {
  test('stack contains three elements', () => {
    let queue = new Queue()

    queue.insert(1)
    queue.insert(2)
    queue.insert(3)

    expect(queue._stack._storage[0]).toBe(1)
    expect(queue._stack._storage[1]).toBe(2)
    expect(queue._stack._storage[2]).toBe(3)
  })
})

describe('check isEmpty() method', () => {
  test('new queue is empty', () => {
    expect(new Queue().isEmpty()).toBe(true)
  })

  test('filled queue is not empty', () => {
    let queue = new Queue()

    queue.insert(1)
    queue.insert(2)
    queue.insert(3)

    expect(queue.isEmpty()).toBe(false)
  })
})

describe('check peek() method', () => {
  test('(empty queue) peek returns undefined', () => {
    expect(new Queue().peek()).toBe(undefined)
  })

  test('(filled queue) peek returns first element', () => {
    let queue = new Queue()

    queue.insert(1)
    queue.insert(2)
    queue.insert(3)

    expect(queue.peek()).toBe(1)
  })
})

describe('check delete() method', () => {
  test('(empty queue) delete returns undefined', () => {
    expect(new Queue().delete()).toBe(undefined)
  })

  test('(filled queue) delete returns first element', () => {
    let queue = new Queue()

    queue.insert(1)
    queue.insert(2)
    queue.insert(3)

    expect(queue.delete()).toBe(1)
  })
})
