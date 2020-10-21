const Set = require("./../src/set.js");

describe('check insert() method', () => {
    test('set contains three elements', () => {
        let set = new Set();
    
        set.insert(1);
        set.insert(2);
        set.insert(3);
        
        expect(set._storage[0]).toBe(1);
        expect(set._storage[1]).toBe(2);
        expect(set._storage[2]).toBe(3);
    });
});

describe('check has() method', () => {
    test('set dont has elements', () => {       
        expect((new Set()).has(1)).toBe(false);
    });

    test('set has a some elements', () => {    
        let set = new Set();
    
        set.insert(1);
        set.insert(2);
        
        expect(set.has(1)).toBe(true);
        expect(set.has(2)).toBe(true);
    });
});