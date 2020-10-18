class Map {
    constructor() {
        this._storage = [];
        this._length = 0;
    }

    insert(key, value) {
        let indexFindedKey = -1;

        for(let i = 0; i < this._length; i++) {
            if(this._storage[i].key == key) {
                indexFindedKey = i;
                break;
            }
        }

        if(indexFindedKey == -1) {
            this._storage.push({
                key: key,
                value: value
            });
            this._length ++;
        } else {
            this._storage[indexFindedKey].value = value;
        }
    }

    find(key) {
        let returnValue = null;

        for(let i = 0; i < this._length; i++) {
            if(this._storage[i].key == key) {
                returnValue = this._storage[i].value;
                break;
            }
        }

        return returnValue;        
    }

    remove(key) {
        let newStorage = [];

        let removedElement = false;

        for(let i = 0; i < this._length; i++) {
            if(this._storage[i].key == key) {
                removedElement = true;
            } else {
                newStorage.push({
                    key: this._storage[i].key,
                    value: this._storage[i].value
                });
            }
        }

        if(removedElement) {
            this._length --; 
        }
      
        this._storage = newStorage;
    }
}

module.exports = Map;