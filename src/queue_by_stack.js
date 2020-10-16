const Stack = require("./stack.js");

class Queue {
    constructor() {
        this.stack = new Stack();
    }
    
    add(value) {
        this.stack.add(value);
    }

    delete() {
        let reverseStack = new Stack();

        while(!this.stack.isEmpty()) {
            reverseStack.add(this.stack.delete());
        }
        
        let result = reverseStack.delete();

        this.stack = new Stack();

        while(!reverseStack.isEmpty()) {
            this.stack.add(reverseStack.delete()); 
        }

        return result;
    }
    
    isEmpty() {
        return this.stack.isEmpty();
    }

    peek() {
        let reverseStack = new Stack();

        while(!this.stack.isEmpty()) {
            reverseStack.add(this.stack.delete());
        }

        let result = reverseStack.peek();

        this.stack = new Stack();

        while(!reverseStack.isEmpty()) {
            this.stack.add(reverseStack.delete());
        }
        
        return result;
    }
}

module.exports = Queue;