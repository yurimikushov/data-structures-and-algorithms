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

module.exports = Queue;