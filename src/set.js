class Set {
    constructor() {
        this._storage = [];
    }

    has(value) {
        return this._storage.includes(value);
    }

    insert(value) {
        if(!this.has(value)) {
            this._storage.push(value);
        }
    }

    delete(value) {
        let index = this._storage.indexOf(value);

        if(index != -1) {
            this._storage.splice(index, 1);
        }
    }

    union(set) {

    }

    intersection(set) {

    } 

    difference() {

    } 

    subset(set) {

    }
}

module.exports = Set;