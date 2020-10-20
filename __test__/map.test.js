const Map = require("./../src/map.js");

describe('check insert() method', () => {
    test('inserting a some elements', () => {
        let map = new Map();

        map.insert(1, 11);
        map.insert(2, 22);
        map.insert(3, 33);

        let expected = {
            1: 11,
            2: 22,
            3: 33
        };

        expect(map._storage).toEqual(expected);
    });

    test('inserting an existing elements', () => {
        let map = new Map();

        map.insert(1, 11);
        map.insert(2, 22);
        map.insert(2, 22);
        map.insert(3, 33);
        map.insert(3, 33);

        let expected = {
            1: 11,
            2: 22,
            3: 33
        };

        expect(map._storage).toEqual(expected);
    });
});

describe('check find() method', () => {
    test('finding an existing element', () => {
        let map = new Map();

        map.insert(1, 11);
        map.insert(2, 22);
        map.insert(3, 33);

        expect(map.find(1)).toBe(11);
        expect(map.find(2)).toBe(22);
        expect(map.find(3)).toBe(33);
    });

    test('finding a nonexistent element', () => {
        expect((new Map()).find(1)).toBe(undefined);
    });
});

describe('check remove() method', () => {
    test('removing a one element', () => {
        let map = new Map();

        map.insert(1, 11);
        map.insert(2, 22);
        map.insert(3, 33);

        map.remove(2);

        let expected = {
            1: 11,
            3: 33
        };

        expect(map._storage).toEqual(expected);
    });

    test('removing all elements', () => {
        let map = new Map();

        map.insert(1, 11);
        map.insert(2, 22);
        map.insert(3, 33);

        map.remove(1);
        map.remove(2);
        map.remove(3);

        expect(Object.keys(map._storage).length).toBe(0);
    });
});