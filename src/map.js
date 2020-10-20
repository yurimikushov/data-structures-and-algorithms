class Map {
    constructor() {
        this._storage = {};
        this._length = 0;
    }

    insert(key, value) {
        if(!(key in this._storage)) {
            this._length ++;
        }

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