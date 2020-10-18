const Map = require("./../src/map.js");

test('check insert() method', () => {
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
    ]

    expect(JSON.stringify(map._storage)).toBe(JSON.stringify(expected));
});

test('check insert() method', () => {
    let map = new Map();

    map.insert(1, 11);
    map.insert(2, 22);
    map.insert(3, 33);

    expect(map.find(1)).toBe(11);
    expect(map.find(3)).toBe(33);
    expect(map.find(4)).toBe(null);
});