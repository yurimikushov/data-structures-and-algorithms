class LinkedList {
    constructor() {
        this._storage = {};
    }

    insertAtEnd(value) {
        if(this.isEmpty()) {
            this._storage = {
                value: value,
                next: null
            }  
        } else {
            let lastElement = this._storage;

            while(lastElement.next) {
                lastElement = lastElement.next;
            }

            lastElement.next = {
                value: value,
                next: null
            } 
        }
    }

    insertAtStart(value) {
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
    }

    insertAfter(afterValue, value) {
        let prevElement = this._storage,
            findedElement = false;

        while(prevElement.next) {
            if(prevElement.value == afterValue) {
                findedElement = true;
                break;
            }
            prevElement = prevElement.next;
        }

        if(findedElement) {
            let nextElement = prevElement.next;

            prevElement.next = {
                value: value,
                next: nextElement
            }
        }

        return findedElement;        
    }

    delete(value) {
        let newLinkedList = new LinkedList();

        let currentElement = this._storage;

        while(currentElement) {
            if(currentElement.value != value) {
                newLinkedList.insertAtEnd(currentElement.value);
            }

            currentElement = currentElement.next;
        }

        this._storage = newLinkedList._storage;
    }

    deleteAtEnd() {
        let newLinkedList = new LinkedList();

        let currentElement = this._storage;

        while(currentElement.next) {
            newLinkedList.insertAtEnd(currentElement.value);
            currentElement = currentElement.next;
        }

        this._storage = newLinkedList._storage;
    }

    deleteAtStart() {
        let currentElement = this._storage;

        if(currentElement.next) {
            currentElement = currentElement.next;
        }

        let newLinkedList = new LinkedList();

        while(currentElement.next) {
            newLinkedList.insertAtEnd(currentElement.value);
            currentElement = currentElement.next;
        }

        newLinkedList.insertAtEnd(currentElement.value);

        this._storage = newLinkedList._storage;
    }

    isContain(value) {
        if(this.isEmpty()) {
            return false;
        }

        let isContain = false;

        let currentElement = this._storage;

        while(currentElement) {
            if(currentElement.value == value) {
                isContain = true;
                break;
            }
            currentElement = currentElement.next;
        }

        return isContain;
    }

    isEmpty() {
        return Object.keys(this._storage).length == 0;
    }
}

module.exports = LinkedList;