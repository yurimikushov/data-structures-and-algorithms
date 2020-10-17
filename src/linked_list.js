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

linkedList.insertAtEnd(1);
linkedList.insertAtEnd(2);
linkedList.insertAtEnd(3);
linkedList.insertAtEnd(4);

linkedList.insertAtStart(5);

console.log(linkedList.insertAfter(2, 6));

console.log(linkedList);