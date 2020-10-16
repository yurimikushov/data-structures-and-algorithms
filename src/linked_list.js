class LinkedList {
    constructor() {
        this._storage = {};
        this._length = 0;
    }

    add(value) {
        
    }

    addAtEnd(value) {
        if(this.isEmpty()) {
            this._storage = {
                value: value,
                next: null
            }  
        } else {
            let lastElement = this._storage;

            while(lastElement.next != null) {
                lastElement = lastElement.next;
            }

            lastElement.next = {
                value: value,
                next: null
            } 
        }

        this._length++;
    }

    addAtStart(value) {
        if(this.isEmpty()) {
            this._storage = {
                value: value,
                next: null
            }  
        } else {
            this._storage = {
                value: value,
                next: this._storage
            }
        }

        this._length++;
    }

    delete() {

    }

    deleteAtEnd() {
        
    }

    deleteAtStart() {

    }

    search() {

    }

    isEmpty() {
        return this._length == 0;
    }
}

module.exports = LinkedList;

let linkedList = new LinkedList();

linkedList.addAtEnd(1);
linkedList.addAtEnd(2);
linkedList.addAtEnd(3);
linkedList.addAtEnd(4);

linkedList.addAtStart(5);

console.log(linkedList);