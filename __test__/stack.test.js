const Stack = require("./../src/stack.js");

test('new stack is empty', () => {
    expect((new Stack()).isEmpty()).toBe(true);
});

test('(empty stack) peek returns null', () => {
    expect((new Stack()).peek()).toBe(null);
});

test('(empty stack) delete returns null', () => {
    expect((new Stack()).delete()).toBe(null);
});

test('(filled stack) peek returns last element', () => {
    let stack = new Stack();

    stack.add(1);
    stack.add(2);
    stack.add(3);

    expect(stack.peek()).toBe(3);
});

test('(filled stack) delete returns last element', () => {
    let stack = new Stack();

    stack.add(1);
    stack.add(2);
    stack.add(3);

    expect(stack.delete()).toBe(3);
});

test('filled stack is not empty', () => {
    let stack = new Stack();

    stack.add(1);
    stack.add(2);
    stack.add(3);

    expect(stack.isEmpty()).toBe(false);
});