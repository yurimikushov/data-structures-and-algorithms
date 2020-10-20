const Queue = require("./../src/queue.js");

test('new queue is empty', () => {
    expect((new Queue()).isEmpty()).toBe(true);
});

test('(empty queue) peek returns undefined', () => {
    expect((new Queue()).peek()).toBe(undefined);
});

test('(empty queue) delete returns undefined', () => {
    expect((new Queue()).delete()).toBe(undefined);
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