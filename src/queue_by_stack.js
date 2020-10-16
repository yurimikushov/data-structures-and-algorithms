const Stack = require("./stack.js");

class Queue {
    constructor() {
        this._stack = new Stack();
    }
    
    add(value) {
        this._stack.add(value);
    }

    delete() {
        let reverseStack = new Stack();

        while(!this._stack.isEmpty()) {
            reverseStack.add(this._stack.delete());
        }
        
        let result = reverseStack.delete();

        this._stack = new Stack();

        while(!reverseStack.isEmpty()) {
            this._stack.add(reverseStack.delete()); 
        }

        return result;
    }
    
    isEmpty() {
        return this._stack.isEmpty();
    }

    peek() {
        let reverseStack = new Stack();

        while(!this._stack.isEmpty()) {
            reverseStack.add(this._stack.delete());
        }

        let result = reverseStack.peek();

        this._stack = new Stack();

        while(!reverseStack.isEmpty()) {
            this._stack.add(reverseStack.delete());
        }
        
        return result;
    }
}

module.exports = Queue;