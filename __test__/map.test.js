const Map = require("./../src/map.js");

describe('check insert() method', () => {
    test('inserting a some elements', () => {
        let map = new Map();

        map.insert(1, 11);
        map.insert(2, 22);
        map.insert(3, 33);

        let expected = [
            { key: 1, value: 11 },
            { key: 2, value: 22 },
            { key: 3, value: 33 }
        ];

        expect(JSON.stringify(map._storage)).toBe(JSON.stringify(expected));
    });

    test('inserting an existing elements', () => {
        let map = new Map();

        map.insert(1, 11);
        map.insert(2, 22);
        map.insert(2, 22);
        map.insert(3, 33);
        map.insert(3, 33);

        let expected = [
            { key: 1, value: 11 },
            { key: 2, value: 22 },
            { key: 3, value: 33 }
        ];

        expect(JSON.stringify(map._storage)).toBe(JSON.stringify(expected));
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
        expect(map.find(4)).toBe(null);
    });

    test('finding a nonexistent element', () => {
        let map = new Map();

        map.insert(1, 11);
        map.insert(2, 22);

        expect(map.find(3)).toBe(null);
    });
});

describe('check remove() method', () => {
    test('removing a one element', () => {
        let map = new Map();

        map.insert(1, 11);
        map.insert(2, 22);
        map.insert(3, 33);

        map.remove(2);

        let expected = [
            { key: 1, value: 11 },
            { key: 3, value: 33 }
        ];

        expect(JSON.stringify(map._storage)).toBe(JSON.stringify(expected));
    });

    test('removing all elements', () => {
        let map = new Map();

        map.insert(1, 11);
        map.insert(2, 22);
        map.insert(3, 33);

        map.remove(1);
        map.remove(2);
        map.remove(3);

        expect(JSON.stringify(map._storage)).toBe(JSON.stringify([]));
    });
});