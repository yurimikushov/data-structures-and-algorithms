class Queue {
    constructor() {
        this.storage = [];
        this.length = 0;
    }

    add(value) {
        this.storage.push(value);
        this.length ++;
    }

    delete() {
        if(this.isEmpty()) {
            return null;
        } else {
            this.length --;
            return this.storage.shift();
        }
    }

    isEmpty() {
        return this.length == 0;
    }

    peek() {
        if(this.isEmpty()) {
            return null;
        } else {
            return this.storage[0];
        }
    }
}

let MyQueue = new Queue();

MyQueue.isEmpty(); // true

MyQueue.peek(); // null

MyQueue.add(1); // [1]
MyQueue.add(2); // [1, 2]
MyQueue.add(3); // [1, 2, 3]

MyQueue.delete(); // 1

MyQueue.isEmpty(); // false

MyQueue.peek(); // 2