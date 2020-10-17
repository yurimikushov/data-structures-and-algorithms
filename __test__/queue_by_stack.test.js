const Queue = require("./../src/queue_by_stack.js");

test('new queue is empty', () => {
    expect((new Queue()).isEmpty()).toBe(true);
});

test('(empty queue) peek returns null', () => {
    expect((new Queue()).peek()).toBe(null);
});

test('(empty queue) delete returns null', () => {
    expect((new Queue()).delete()).toBe(null);
});

test('(filled queue) peek returns first element', () => {
    let queue = new Queue();

    queue.insert(1);
    queue.insert(2);
    queue.insert(3);

    expect(queue.peek()).toBe(1);
});

test('(filled queue) delete returns first element', () => {
    let queue = new Queue();

    queue.insert(1);
    queue.insert(2);
    queue.insert(3);

    expect(queue.delete()).toBe(1);
});

test('filled queue is not empty', () => {
    let queue = new Queue();

    queue.insert(1);
    queue.insert(2);
    queue.insert(3);

    expect(queue.isEmpty()).toBe(false);
});