const Stack = require('./../../src/data-structures/stack.js')

describe('check insert() method', () => {
  test('stack contains three elements', () => {
    let stack = new Stack()

    stack.insert(1)
    stack.insert(2)
    stack.insert(3)

    expect(stack._storage[0]).toBe(1)
    expect(stack._storage[1]).toBe(2)
    expect(stack._storage[2]).toBe(3)
  })
})

describe('check isEmpty() method', () => {
  test('new stack is empty', () => {
    expect(new Stack().isEmpty()).toBe(true)
  })

  test('filled stack is not empty', () => {
    let stack = new Stack()

    stack.insert(1)
    stack.insert(2)
    stack.insert(3)

    expect(stack.isEmpty()).toBe(false)
  })
})

describe('check peek() method', () => {
  test('(empty stack) peek returns undefined', () => {
    expect(new Stack().peek()).toBe(undefined)
  })

  test('(filled stack) peek returns last element', () => {
    let stack = new Stack()

    stack.insert(1)
    stack.insert(2)
    stack.insert(3)

    expect(stack.peek()).toBe(3)
  })
})

describe('check delete() method', () => {
  test('(empty stack) delete returns undefined', () => {
    expect(new Stack().delete()).toBe(undefined)
  })

  test('(filled stack) delete returns last element', () => {
    let stack = new Stack()

    stack.insert(1)
    stack.insert(2)
    stack.insert(3)

    expect(stack.delete()).toBe(3)
  })
})
