class LinkedList {
    constructor() {
        this._storage = {};
        this._length = 0;
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

        this._length++;
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

        this._length++;
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
            
            this._length++;
        }

        return findedElement;        
    }

    delete(value) {
        let prevElement = this._storage,
            currentElement,
            nextElement;

        let findedElement = false;

        while(prevElement.next) {
            if(prevElement.next) {
                currentElement = prevElement.next;
            }

            if(prevElement.next.next) {
                nextElement = prevElement.next.next;
            }

            if(!currentElement) {
                break;
            }

            if(currentElement.value == value) {
                findedElement = true;
                break;
            }

            prevElement = prevElement.next;
        }

        if(findedElement) {
            this._storage = prevElement;
            this._storage.next = nextElement;  
            this._length--;
        }

        return findedElement;
    }

    deleteAtEnd() {
        let newLinkedList = new LinkedList();

        let currentElement = this._storage;

        while(currentElement.next) {
            newLinkedList.insertAtEnd(currentElement.value);
            currentElement = currentElement.next;
        }

        this._storage = newLinkedList._storage;
        this._length--;
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
        this._length--;
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
        return this._length == 0;
    }
}

module.exports = LinkedList;