class Stack {
    constructor() {
        this._storage = [];
        this._length = 0;
    }

    insert(value) {
        this._storage.push(value);
        this._length++;
    }

    delete() {
        if (!this.isEmpty()) {
            this._length--;
        }

        return this._storage.pop();
    }

    isEmpty() {
        return this._length == 0;
    }

    peek() {
        return this._storage[this._length - 1];
    }
}

module.exports = Stack;
