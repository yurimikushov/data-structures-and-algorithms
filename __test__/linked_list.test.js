const LinkedList = require("./../src/linked_list.js");

test('new linked list is empty', () => {
    expect((new LinkedList()).isEmpty()).toBe(true);
});

test('check insertAtEnd() method', () => {
    let linkedList = new LinkedList();

    linkedList.insertAtEnd(1);
    linkedList.insertAtEnd(2);
    linkedList.insertAtEnd(3);

    let storage = linkedList._storage;

    expect(storage.value).toBe(1);
    expect(storage.next.value).toBe(2);
    expect(storage.next.next.value).toBe(3);
});

test('check insertAtStart() method', () => {
    let linkedList = new LinkedList();

    linkedList.insertAtEnd(1);
    linkedList.insertAtEnd(2);
    linkedList.insertAtEnd(3);

    linkedList.insertAtStart(4);

    let storage = linkedList._storage;

    expect(storage.value).toBe(4);
    expect(storage.next.value).toBe(1);
    expect(storage.next.next.value).toBe(2);
    expect(storage.next.next.next.value).toBe(3);
});

test('check insertAfter() method', () => {
    let linkedList = new LinkedList();

    linkedList.insertAtEnd(1);
    linkedList.insertAtEnd(2);
    linkedList.insertAtEnd(3);
    linkedList.insertAtEnd(4);

    linkedList.insertAfter(2, 5);

    let storage = linkedList._storage;

    expect(storage.value).toBe(1);
    expect(storage.next.value).toBe(2);
    expect(storage.next.next.value).toBe(5);
    expect(storage.next.next.next.value).toBe(3);
    expect(storage.next.next.next.next.value).toBe(4);
});

test('check delete() method', () => {
    let linkedList = new LinkedList();

    linkedList.insertAtEnd(1);
    linkedList.insertAtEnd(2);
    linkedList.insertAtEnd(3);
    linkedList.insertAtEnd(4);

    linkedList.delete(2);

    let storage = linkedList._storage;

    expect(storage.value).toBe(1);
    expect(storage.next.value).toBe(3);
    expect(storage.next.next.value).toBe(4);
});

test('check deleteAtEnd() method', () => {
    let linkedList = new LinkedList();

    linkedList.insertAtEnd(1);
    linkedList.insertAtEnd(2);
    linkedList.insertAtEnd(3);

    linkedList.deleteAtEnd();

    let storage = linkedList._storage;

    expect(storage.value).toBe(1);
    expect(storage.next.value).toBe(2);
});