class Queue {
    constructor() {
        this._storage = [];
        this._length = 0;
    }

    insert(value) {
        this._storage.push(value);
        this._length ++;
    }

    delete() {
        if(this.isEmpty()) {
            return null;
        } else {
            this._length --;
            return this._storage.shift();
        }
    }

    isEmpty() {
        return this._length == 0;
    }

    peek() {
        if(this.isEmpty()) {
            return null;
        } else {
            return this._storage[0];
        }
    }
}

module.exports = Queue;