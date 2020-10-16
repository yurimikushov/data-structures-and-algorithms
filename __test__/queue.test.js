const Queue = require("./../src/queue.js");

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

    queue.add(1);
    queue.add(2);
    queue.add(3);

    expect(queue.peek()).toBe(1);
});

test('(filled queue) delete returns first element', () => {
    let queue = new Queue();

    queue.add(1);
    queue.add(2);
    queue.add(3);

    expect(queue.delete()).toBe(1);
});

test('filled queue is not empty', () => {
    let queue = new Queue();

    queue.add(1);
    queue.add(2);
    queue.add(3);

    expect(queue.isEmpty()).toBe(false);
});