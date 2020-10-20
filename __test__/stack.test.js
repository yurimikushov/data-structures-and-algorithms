const Stack = require("./../src/stack.js");

describe('check isEmpty() method', () => {
    test('new stack is empty', () => {
        expect((new Stack()).isEmpty()).toBe(true);
    });

    test('filled stack is not empty', () => {
        let stack = new Stack();
    
        stack.insert(1);
        stack.insert(2);
        stack.insert(3);
    
        expect(stack.isEmpty()).toBe(false);
    });
});

describe('check peek() method', () => {
    test('(empty stack) peek returns null', () => {
        expect((new Stack()).peek()).toBe(null);
    });

    test('(filled stack) peek returns last element', () => {
        let stack = new Stack();
    
        stack.insert(1);
        stack.insert(2);
        stack.insert(3);
    
        expect(stack.peek()).toBe(3);
    });
});

describe('check delete() method', () => {
    test('(empty stack) delete returns null', () => {
        expect((new Stack()).delete()).toBe(null);
    });
    
    
    test('(filled stack) delete returns last element', () => {
        let stack = new Stack();
    
        stack.insert(1);
        stack.insert(2);
        stack.insert(3);
    
        expect(stack.delete()).toBe(3);
    });    
});