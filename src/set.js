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

    delete() {

    }

    union(set){

    }

    intersection(set) {

    } 

    difference() {

    } 

    subset(set) {

    }
}

module.exports = Set;