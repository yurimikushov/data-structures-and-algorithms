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