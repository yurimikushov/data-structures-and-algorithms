const Map = require("./../src/map.js");

test('', () => {
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