class Map {
    constructor() {
        this._storage = {};
    }

    insert(key, value) {
        this._storage[key] = value;
    }

    find(key) {
        return this._storage[key];
    }

    remove(key) {
        delete this._storage[key];
    }
}

module.exports = Map;
