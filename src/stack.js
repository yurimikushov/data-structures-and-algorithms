class Stack {
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
            return this.storage.pop();
        }
    }

    isEmpty() {
        return this.length == 0; 
    }

    peek() {
        if(this.isEmpty()) {
            return null;
        } else {
            return this.storage[this.length - 1];
        }
    }
}

module.exports = Stack;

MyStack = new Stack()

MyStack.isEmpty(); // true

MyStack.peek(); // null

MyStack.add(1); // [1]
MyStack.add(2); // [1, 2]
MyStack.add(3); // [1, 2, 3]

MyStack.delete(); // 3

MyStack.isEmpty(); // false

MyStack.peek(); // 2